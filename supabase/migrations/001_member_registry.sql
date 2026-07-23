-- FWP Member Registry MVP
-- PostgreSQL 15+ / Supabase. Policy decisions remain in docs/KEBIJAKAN_KEANGGOTAAN_FWP.md.

create extension if not exists pgcrypto;

create type public.organization_type as enum ('nazhir','non_nazhir','government','corporate','academic','community','other');
create type public.verification_status as enum ('unverified','submitted','under_review','verified','rejected','suspended');
create type public.application_status as enum ('draft','submitted','documents_incomplete','under_review','approved','rejected','withdrawn');
create type public.membership_status as enum ('pending_activation','active','grace_period','suspended','inactive','resigned','terminated','honorary');
create type public.document_visibility as enum ('private','staff_only','member_only','public');
create type public.user_role as enum ('organization_user','membership_reviewer','membership_approver','finance','auditor','super_admin');

create table public.app_users (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role public.user_role not null default 'organization_user',
  status text not null default 'active' check (status in ('active','invited','suspended','disabled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  legal_name text not null,
  display_name text not null,
  organization_type public.organization_type not null default 'nazhir',
  verification_status public.verification_status not null default 'unverified',
  province text,
  city text,
  address text,
  website text,
  official_email text,
  official_phone text,
  logo_storage_key text,
  description text,
  public_consent boolean not null default false,
  data_source text not null default 'manual',
  legacy_row integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived_at timestamptz,
  check (length(trim(legal_name)) > 1),
  check (length(trim(display_name)) > 1)
);

create unique index organizations_legacy_source_row_uq on public.organizations(data_source, legacy_row) where legacy_row is not null;
create index organizations_status_idx on public.organizations(verification_status);
create index organizations_region_idx on public.organizations(province, city);

create table public.organization_users (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references public.app_users(id) on delete cascade,
  role text not null check (role in ('owner','admin','editor','viewer')),
  invited_at timestamptz not null default now(),
  accepted_at timestamptz,
  primary key (organization_id, user_id)
);

create table public.contacts (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  full_name text not null,
  position text,
  email text,
  phone text,
  is_primary boolean not null default false,
  is_authorized_signatory boolean not null default false,
  active_from date,
  active_until date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (active_until is null or active_from is null or active_until >= active_from)
);
create unique index contacts_one_primary_per_org on public.contacts(organization_id) where is_primary and active_until is null;

create table public.membership_tiers (
  id uuid primary key default gen_random_uuid(),
  code text not null,
  name text not null,
  description text,
  fee_amount bigint,
  currency char(3) not null default 'IDR',
  eligibility_rules jsonb not null default '{}'::jsonb,
  benefits jsonb not null default '[]'::jsonb,
  active_from date not null,
  active_until date,
  created_at timestamptz not null default now(),
  check (fee_amount is null or fee_amount >= 0),
  check (active_until is null or active_until >= active_from),
  unique (code, active_from)
);

create table public.membership_applications (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete restrict,
  requested_tier_id uuid not null references public.membership_tiers(id) on delete restrict,
  submitted_by_contact_id uuid references public.contacts(id) on delete set null,
  status public.application_status not null default 'draft',
  reviewer_id uuid references public.app_users(id) on delete set null,
  review_notes text,
  submitted_at timestamptz,
  decided_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (status = 'draft' or submitted_at is not null),
  check (status not in ('approved','rejected') or decided_at is not null)
);
create index membership_applications_org_status_idx on public.membership_applications(organization_id, status);

create table public.memberships (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete restrict,
  application_id uuid unique references public.membership_applications(id) on delete set null,
  tier_id uuid not null references public.membership_tiers(id) on delete restrict,
  member_number text unique,
  status public.membership_status not null default 'pending_activation',
  started_at date,
  expires_at date,
  approved_at timestamptz,
  approved_by uuid references public.app_users(id) on delete set null,
  suspended_at timestamptz,
  ended_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (expires_at is null or started_at is null or expires_at >= started_at),
  check (status = 'pending_activation' or member_number is not null)
);
create unique index memberships_one_running_per_org on public.memberships(organization_id)
where status in ('pending_activation','active','grace_period','suspended','honorary');
create index memberships_status_idx on public.memberships(status);

create table public.documents (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references public.organizations(id) on delete restrict,
  membership_application_id uuid references public.membership_applications(id) on delete set null,
  document_type text not null,
  storage_key text not null unique,
  original_filename text not null,
  mime_type text not null,
  file_size bigint not null check (file_size > 0),
  checksum_sha256 char(64) not null,
  visibility public.document_visibility not null default 'private',
  verification_status public.verification_status not null default 'unverified',
  uploaded_by uuid references public.app_users(id) on delete set null,
  uploaded_at timestamptz not null default now(),
  archived_at timestamptz,
  check (organization_id is not null or membership_application_id is not null)
);

create table public.legal_registrations (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  registration_type text not null check (registration_type in ('stbpn','nazhir_wakaf_uang','akta_pendirian','sk_kemenkumham','npwp','nib','other')),
  registration_number text not null,
  issued_by text,
  issued_at date,
  expires_at date,
  verification_status public.verification_status not null default 'unverified',
  document_id uuid references public.documents(id) on delete set null,
  verified_at timestamptz,
  verified_by uuid references public.app_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (expires_at is null or issued_at is null or expires_at >= issued_at),
  unique (registration_type, registration_number)
);

create table public.audit_logs (
  id bigint generated always as identity primary key,
  actor_user_id uuid references public.app_users(id) on delete set null,
  organization_id uuid references public.organizations(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  before_data jsonb,
  after_data jsonb,
  request_id text,
  ip_address inet,
  user_agent text,
  created_at timestamptz not null default now()
);
create index audit_logs_entity_idx on public.audit_logs(entity_type, entity_id, created_at desc);
create index audit_logs_org_idx on public.audit_logs(organization_id, created_at desc);

create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

create trigger app_users_touch before update on public.app_users for each row execute function public.touch_updated_at();
create trigger organizations_touch before update on public.organizations for each row execute function public.touch_updated_at();
create trigger contacts_touch before update on public.contacts for each row execute function public.touch_updated_at();
create trigger applications_touch before update on public.membership_applications for each row execute function public.touch_updated_at();
create trigger memberships_touch before update on public.memberships for each row execute function public.touch_updated_at();
create trigger legal_registrations_touch before update on public.legal_registrations for each row execute function public.touch_updated_at();

create or replace function public.is_staff(allowed_roles public.user_role[]) returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.app_users u where u.id = auth.uid() and u.status = 'active' and u.role = any(allowed_roles));
$$;

create or replace function public.can_access_organization(target_org uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select public.is_staff(array['membership_reviewer','membership_approver','finance','auditor','super_admin']::public.user_role[])
  or exists(select 1 from public.organization_users ou where ou.user_id = auth.uid() and ou.organization_id = target_org and ou.accepted_at is not null);
$$;

alter table public.app_users enable row level security;
alter table public.organizations enable row level security;
alter table public.organization_users enable row level security;
alter table public.contacts enable row level security;
alter table public.membership_tiers enable row level security;
alter table public.membership_applications enable row level security;
alter table public.memberships enable row level security;
alter table public.documents enable row level security;
alter table public.legal_registrations enable row level security;
alter table public.audit_logs enable row level security;

create policy app_users_self_read on public.app_users for select using (id = auth.uid() or public.is_staff(array['super_admin']::public.user_role[]));
create policy organizations_read on public.organizations for select using (public.can_access_organization(id));
create policy organizations_member_update on public.organizations for update using (
  exists(select 1 from public.organization_users ou where ou.organization_id = id and ou.user_id = auth.uid() and ou.role in ('owner','admin','editor') and ou.accepted_at is not null)
) with check (public.can_access_organization(id));
create policy organization_users_read on public.organization_users for select using (public.can_access_organization(organization_id));
create policy contacts_access on public.contacts for select using (public.can_access_organization(organization_id));
create policy contacts_write on public.contacts for all using (public.can_access_organization(organization_id)) with check (public.can_access_organization(organization_id));
create policy tiers_authenticated_read on public.membership_tiers for select to authenticated using (true);
create policy applications_read on public.membership_applications for select using (public.can_access_organization(organization_id));
create policy applications_staff_write on public.membership_applications for all using (public.is_staff(array['membership_reviewer','membership_approver','super_admin']::public.user_role[])) with check (public.is_staff(array['membership_reviewer','membership_approver','super_admin']::public.user_role[]));
create policy memberships_read on public.memberships for select using (public.can_access_organization(organization_id));
create policy memberships_approver_write on public.memberships for all using (public.is_staff(array['membership_approver','super_admin']::public.user_role[])) with check (public.is_staff(array['membership_approver','super_admin']::public.user_role[]));
create policy documents_read on public.documents for select using (organization_id is not null and public.can_access_organization(organization_id));
create policy legal_read on public.legal_registrations for select using (public.can_access_organization(organization_id));
create policy legal_reviewer_write on public.legal_registrations for all using (public.is_staff(array['membership_reviewer','membership_approver','super_admin']::public.user_role[])) with check (public.is_staff(array['membership_reviewer','membership_approver','super_admin']::public.user_role[]));
create policy audit_staff_read on public.audit_logs for select using (public.is_staff(array['auditor','membership_approver','super_admin']::public.user_role[]));
-- No insert/update/delete audit policy for browser roles. Writes must use trusted server-side function/service role.

create or replace view public.public_member_directory with (security_invoker = true) as
select o.id, o.display_name, o.province, o.city, o.website, o.logo_storage_key,
       m.member_number, t.code as tier_code, t.name as tier_name
from public.organizations o
join public.memberships m on m.organization_id = o.id
join public.membership_tiers t on t.id = m.tier_id
where o.verification_status = 'verified'
  and o.public_consent = true
  and o.archived_at is null
  and m.status in ('active','honorary');

-- Draft tier seeds. Do not run in production before policy approval; fee periods are not encoded yet.
insert into public.membership_tiers(code,name,description,fee_amount,eligibility_rules,active_from)
values
 ('silver','Anggota Biasa (Silver)','Lembaga Nazhir dengan izin Nazhir Wakaf Uang',2000000,'{"requires_cash_waqf_license":true}'::jsonb,current_date),
 ('gold','Anggota Luar Biasa (Gold)','Lembaga Nazhir dengan izin NWU dan aset kelolaan minimum',2000000,'{"requires_cash_waqf_license":true,"minimum_managed_assets":2000000000}'::jsonb,current_date),
 ('platinum','Anggota Kehormatan (Platinum)','Lembaga non-Nazhir/mitra strategis',15000000,'{"organization_types":["non_nazhir","government","corporate","academic"]}'::jsonb,current_date);

comment on table public.organizations is 'Canonical organization registry; imported training records remain unverified.';
comment on table public.audit_logs is 'Append-only audit trail; browser roles intentionally have no write policy.';
comment on view public.public_member_directory is 'Public-safe member projection; grants must be configured deliberately after security review.';
revoke all on public.public_member_directory from anon, authenticated;
revoke all on public.audit_logs from anon, authenticated;
revoke all on public.documents from anon;
-- Grant public directory only after validating security_invoker/RLS behavior in the target Supabase project.
