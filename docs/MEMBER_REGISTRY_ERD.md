# ERD — FWP Member Registry

```mermaid
erDiagram
  APP_USERS ||--o{ ORGANIZATION_USERS : has
  ORGANIZATIONS ||--o{ ORGANIZATION_USERS : grants
  ORGANIZATIONS ||--o{ CONTACTS : has
  ORGANIZATIONS ||--o{ LEGAL_REGISTRATIONS : has
  ORGANIZATIONS ||--o{ MEMBERSHIP_APPLICATIONS : submits
  MEMBERSHIP_TIERS ||--o{ MEMBERSHIP_APPLICATIONS : requested
  CONTACTS ||--o{ MEMBERSHIP_APPLICATIONS : submitted_by
  MEMBERSHIP_APPLICATIONS ||--o| MEMBERSHIPS : results_in
  ORGANIZATIONS ||--o{ MEMBERSHIPS : has_history
  MEMBERSHIP_TIERS ||--o{ MEMBERSHIPS : classifies
  ORGANIZATIONS ||--o{ DOCUMENTS : owns
  MEMBERSHIP_APPLICATIONS ||--o{ DOCUMENTS : supports
  LEGAL_REGISTRATIONS o|--o| DOCUMENTS : evidenced_by
  APP_USERS ||--o{ AUDIT_LOGS : acts
  ORGANIZATIONS ||--o{ AUDIT_LOGS : scoped_to

  ORGANIZATIONS {
    uuid id PK
    text legal_name
    text display_name
    text organization_type
    text verification_status
    boolean public_consent
    text data_source
    timestamptz created_at
  }
  CONTACTS {
    uuid id PK
    uuid organization_id FK
    text full_name
    text position
    text email
    text phone
    boolean is_primary
  }
  LEGAL_REGISTRATIONS {
    uuid id PK
    uuid organization_id FK
    text registration_type
    text registration_number
    text verification_status
    uuid document_id FK
  }
  MEMBERSHIP_APPLICATIONS {
    uuid id PK
    uuid organization_id FK
    uuid requested_tier_id FK
    text status
    uuid reviewer_id FK
    timestamptz submitted_at
  }
  MEMBERSHIPS {
    uuid id PK
    uuid organization_id FK
    uuid tier_id FK
    text member_number UK
    text status
    date started_at
    date expires_at
    uuid approved_by FK
    uuid second_approved_by FK
  }
  MEMBERSHIP_TIERS {
    uuid id PK
    text code UK
    text name
    bigint fee_amount
    jsonb eligibility_rules
  }
  DOCUMENTS {
    uuid id PK
    uuid organization_id FK
    text document_type
    text storage_key UK
    text checksum
    text visibility
  }
  APP_USERS {
    uuid id PK
    text role
    text status
  }
  ORGANIZATION_USERS {
    uuid organization_id FK
    uuid user_id FK
    text role
  }
  AUDIT_LOGS {
    bigint id PK
    uuid actor_user_id FK
    uuid organization_id FK
    text action
    text entity_type
    uuid entity_id
    jsonb before_data
    jsonb after_data
    timestamptz created_at
  }
```

## Ownership

- `organizations`: identitas canonical lembaga.
- `contacts`: orang dan riwayat jabatan lembaga.
- `legal_registrations`: legalitas per jenis izin.
- `membership_applications`: proses pengajuan/review.
- `memberships`: status keanggotaan resmi dan historinya.
- `membership_tiers`: aturan tier versioned.
- `documents`: metadata file privat/publik.
- `audit_logs`: jejak perubahan append-only.

## Lifecycle

```mermaid
stateDiagram-v2
  [*] --> Lead
  Lead --> Applicant
  Applicant --> DocumentsIncomplete
  DocumentsIncomplete --> UnderReview
  Applicant --> UnderReview
  UnderReview --> Approved
  UnderReview --> Rejected
  Approved --> PendingActivation
  PendingActivation --> Active
  Active --> GracePeriod
  GracePeriod --> Active
  GracePeriod --> Inactive
  Active --> Suspended
  Suspended --> Active
  Suspended --> Terminated
  Active --> Resigned
```

## Boundary Publik

Direktori publik membaca view terkontrol, bukan tabel mentah:

```text
organization.verification_status = verified
AND membership.status = active
AND organization.public_consent = true
```

Tidak diekspos: kontak pribadi, dokumen, catatan reviewer, pembayaran, nilai aset rinci, audit log.
