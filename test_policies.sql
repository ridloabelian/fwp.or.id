SELECT 
  o.legal_name,
  u.full_name as owner_name,
  m.member_number,
  t.name as tier_name
FROM organizations o
JOIN organization_users ou ON o.id = ou.organization_id
JOIN app_users u ON ou.user_id = u.id
JOIN memberships m ON o.id = m.organization_id
JOIN membership_tiers t ON m.tier_id = t.id;
