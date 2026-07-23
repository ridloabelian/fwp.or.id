-- Seed data for testing Member Registry

-- Seed Users (Passwords disabled/bypassed for raw DB insertion, use Supabase Auth flow for real login)
INSERT INTO auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at)
VALUES
  ('11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'reviewer@fwp.or.id', crypt('password123', gen_salt('bf')), now()),
  ('22222222-2222-2222-2222-222222222222', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'approver@fwp.or.id', crypt('password123', gen_salt('bf')), now()),
  ('33333333-3333-3333-3333-333333333333', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'nazhir@example.com', crypt('password123', gen_salt('bf')), now())
ON CONFLICT (id) DO NOTHING;

INSERT INTO auth.identities (id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
VALUES
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111111', '11111111-1111-1111-1111-111111111111', '{"sub": "11111111-1111-1111-1111-111111111111", "email": "reviewer@fwp.or.id"}', 'email', now(), now(), now()),
  (gen_random_uuid(), '22222222-2222-2222-2222-222222222222', '22222222-2222-2222-2222-222222222222', '{"sub": "22222222-2222-2222-2222-222222222222", "email": "approver@fwp.or.id"}', 'email', now(), now(), now()),
  (gen_random_uuid(), '33333333-3333-3333-3333-333333333333', '33333333-3333-3333-3333-333333333333', '{"sub": "33333333-3333-3333-3333-333333333333", "email": "nazhir@example.com"}', 'email', now(), now(), now())
ON CONFLICT (provider_id, provider) DO NOTHING;

-- Seed App Users
INSERT INTO public.app_users (id, full_name, role)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'Admin Reviewer', 'membership_reviewer'),
  ('22222222-2222-2222-2222-222222222222', 'Admin Approver', 'membership_approver'),
  ('33333333-3333-3333-3333-333333333333', 'Nazhir Tester', 'organization_user')
ON CONFLICT (id) DO UPDATE SET role = EXCLUDED.role;

-- Seed Organization
INSERT INTO public.organizations (id, legal_name, display_name, verification_status, province, city, public_consent)
VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Yayasan Wakaf Tester', 'Wakaf Tester', 'verified', 'DKI Jakarta', 'Jakarta Selatan', true)
ON CONFLICT (id) DO NOTHING;

-- Map User to Organization
INSERT INTO public.organization_users (organization_id, user_id, role, accepted_at)
VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '33333333-3333-3333-3333-333333333333', 'owner', now())
ON CONFLICT (organization_id, user_id) DO NOTHING;

-- Create Active Membership for the organization
DO $$
DECLARE
  v_tier_id uuid;
BEGIN
  SELECT id INTO v_tier_id FROM public.membership_tiers WHERE code = 'silver' LIMIT 1;
  
  INSERT INTO public.memberships (id, organization_id, tier_id, member_number, status, started_at)
  VALUES ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', v_tier_id, 'FWP-2026-0001', 'active', current_date)
  ON CONFLICT (id) DO NOTHING;
END $$;
