-- Disable security_invoker on the public directory view 
-- so that it resolves using the definer's (owner's) privileges.
-- We already restrict the view logic to only verified, public-consent organizations.

ALTER VIEW public.public_member_directory SET (security_invoker = false);
GRANT SELECT ON public.public_member_directory TO anon, authenticated;
