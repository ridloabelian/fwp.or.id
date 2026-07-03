# AGENTS

## Structure
- React 19 + Vite
- Framer Motion for animations
- Tailwind CSS

## Deployment (Cloudflare Pages)
- `main` branch → Production
- `master` branch → Preview

## Pitfalls
- **ErrorBoundary:** Swallows errors easily. Use with caution/better logging.
- **Framer Motion:** Prefer regular `div` and native CSS if motion is unnecessary. Avoid over-wrapping.