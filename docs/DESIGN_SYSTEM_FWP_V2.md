# Design System FWP V2

## Brand Principle
Modern, institusional, kolaboratif, amanah. Sistem mempertahankan warna logo FWP: navy, hijau, cyan. Navy dominan; hijau untuk aksi; cyan untuk informasi.

## Color Tokens

| Token | Value | Fungsi |
|---|---:|---|
| Navy 900 | `#0C2230` | Footer, hero gelap |
| Navy 800 | `#132C3F` | Brand utama, heading |
| Navy 700 | `#1D445C` | Hover, surface gelap |
| Green 500 | `#8BC53F` | CTA utama |
| Green 700 | `#3F6F16` | Teks hijau accessible |
| Cyan 500 | `#16AECA` | Informasi, link aktif |
| Cyan 700 | `#087B92` | Teks cyan accessible |
| White | `#FFFFFF` | Surface |
| Canvas | `#F8FAF9` | Background utama |
| Mist | `#EEF3F1` | Section alternatif |
| Border | `#DCE6E1` | Divider, card border |
| Text | `#132C3F` | Body utama |
| Muted | `#536777` | Body sekunder |

## Typography
- Heading: `Playfair Display`, serif.
- Body/UI: `Plus Jakarta Sans`, sans-serif.
- Display: `clamp(2.75rem, 6vw, 5.5rem)`, line-height `1.02`.
- H2: `clamp(2rem, 4vw, 3.4rem)`, line-height `1.12`.
- Body large: `1.125rem`, line-height `1.75`.
- Reading width: maksimal `680px`.

## Layout
- Container: `1180px`.
- Desktop section rhythm: `104px`.
- Mobile section rhythm: `72px`.
- Grid gap: `20–28px`.
- Radius: card `18px`, large surface `28px`, button `999px`.

## Components
- Primary button: hijau solid, teks navy gelap, tanpa gradient.
- Secondary button: transparent dengan border navy/putih sesuai surface.
- Card: putih, border tipis, shadow hanya saat hover.
- Eyebrow: uppercase, 0.14em tracking, green/cyan accessible.
- Focus ring: `3px solid rgba(22,174,202,.35)`.

## Motion
- Reveal maksimal 16px dan 450ms.
- Tanpa looping animation.
- Critical first paint tidak boleh hidden.
- Nonaktifkan transform/transisi pada `prefers-reduced-motion`.

## Accessibility
- Kontras minimal WCAG AA.
- Target sentuh minimal 44×44px.
- Focus visible wajib.
- Heading berurutan.
- Ikon dekoratif tidak menggantikan label.
