# FWP.or.id — Project Insight & Roadmap

> Analisis mendalam dan rencana pengembangan portal Forum Wakaf Produktif (FWP).  
> Dibuat: 2026-06-04 | Hermes Agent

---

## 1. Executive Summary

Portal resmi multi-page application (MPA) untuk Forum Wakaf Produktif Indonesia.  
Memimpin transformasi nasional wakaf tunai dan pengembangan aset produktif menuju Indonesia Emas 2045.

| Metrik | Nilai |
|--------|-------|
| Total baris kode | ~2.219 LOC |
| Ukuran source code | ~156 KB (tanpa node_modules) |
| Jumlah halaman | 7 (MPA) |
| Jumlah komponen global | 2 (Navbar, Footer) |
| Dependencies produksi | 6 |
| Dev dependencies | 10 |

---

## 2. Current Architecture

### 2.1 Tech Stack

```
Frontend    : React 19.2.4 + JavaScript (ES6+)
Build Tool  : Vite 8.0.4
Routing     : React Router DOM 7.14.0
Styling     : Vanilla CSS3 (design system tokens)
Animation   : Framer Motion 12.38.0
Charts      : Recharts 3.8.1
Icons       : Lucide React 1.7.0
Hosting     : Cloudflare Pages
```

### 2.2 Directory Structure

```
fwp.or.id/
├── public/
│   ├── _redirects          # SPA fallback routing (Cloudflare)
│   ├── _headers            # Security & cache headers
│   ├── logo.png
│   ├── icons.svg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Fixed glassmorphism navbar + mobile menu
│   │   └── Footer.jsx      # 4-col footer with contact info
│   ├── pages/
│   │   ├── HomePage.jsx           # Landing + dashboard + stats
│   │   ├── AboutPage.jsx          # Visi-misi + Pentahelix
│   │   ├── ProgramsPage.jsx       # 4 program cards
│   │   ├── NazhirCenterPage.jsx   # WCP + SKKNI + direktori
│   │   ├── SuccessStoriesPage.jsx # 3 case studies
│   │   ├── BusinessMatchingPage.jsx # Prospektus + CSR hub
│   │   └── TransparencyPage.jsx   # Geospasial + laporan + regulasi
│   ├── index.css           # Global design system (416 baris)
│   ├── main.jsx            # Entry point (BrowserRouter)
│   └── App.jsx             # Route definitions + ScrollToTop
├── .github/workflows/pages.yml   # CI/CD Cloudflare Pages
├── wrangler.toml           # Cloudflare build config
└── vite.config.js          # Basic Vite + React plugin
```

### 2.3 Routing Map

| Path | Halaman | Status |
|------|---------|--------|
| `/` | HomePage | Live |
| `/tentang-kami` | AboutPage | Live |
| `/program` | ProgramsPage | Live |
| `/pusat-nazhir` | NazhirCenterPage | Live |
| `/inspirasi-studi-kasus` | SuccessStoriesPage | Live |
| `/layanan-bisnis` | BusinessMatchingPage | Live |
| `/transparansi` | TransparencyPage | Live |

---

## 3. Strengths (Kekuatan)

1. **Design System Solid** — CSS tokens konsisten (warna, radius, shadow, transition) di seluruh aplikasi
2. **Mobile-First Responsive** — Breakpoint 768px/992px, hamburger menu, grid collapse
3. **Animation Polish** — Framer Motion dengan stagger, fadeInUp, whileHover, whileTap
4. **Glassmorphism Aesthetic** — Backdrop blur + translucent cards sesuai tren modern
5. **CI/CD Ready** — GitHub Actions auto-deploy ke Cloudflare Pages
6. **Security Headers** — `_headers` file dengan X-Frame-Options, X-Content-Type-Options
7. **Zero Config Build** — Vite default config, build cepat
8. **Data Visualization** — Recharts bar chart untuk tren wakaf uang

---

## 4. Weaknesses & Technical Debt

### 4.1 Kode & Arsitektur

| # | Issue | Severity | File |
|---|-------|----------|------|
| 1 | **Inline styles berlebihan** — Banyak komponen pakai `style={{...}}` inline, sulit maintain | Medium | Semua page |
| 2 | **Duplikasi animation variants** — `fadeInUp`, `staggerContainer` didefinisikan ulang di setiap page | Low | Semua page |
| 3 | **Hardcoded data** — Chart data, stats, nazhir list, prospektus semua hardcoded | Medium | HomePage, BusinessMatching |
| 4 | **Tidak ada error boundary** — App crash = white screen | Medium | App.jsx |
| 5 | **Tidak ada loading state** — Navigasi antar page tanpa indikator | Low | App.jsx |
| 6 | **No SEO meta tags** — Setiap page pakai title sama, no meta description | High | Semua page |
| 7 | **Gambar placeholder** — SuccessStories pakai `<span>[ Foto ... ]</span>` placeholder | Medium | SuccessStoriesPage |
| 8 | **No lazy loading** — Semua page di-bundle jadi satu, bundle size besar | Medium | App.jsx |
| 9 | **No TypeScript** — Skala kecil aman, tapi growth akan susah debug | Low | - |
| 10 | **Nav-links tidak aktif** — Tidak ada `active` class saat di page tertentu | Low | Navbar.jsx |

### 4.2 Performance

| # | Issue | Impact |
|---|-------|--------|
| 1 | **Framer Motion di semua elemen** — Bisa jank di low-end device | Medium |
| 2 | **No image optimization** — Logo PNG, hero image tanpa lazy loading | Medium |
| 3 | **No code splitting** — Bundle size akan membesar seiring nambah page | High |
| 4 | **CSS global 416 baris** — Tidak scoped, risk style collision | Low |

### 4.3 Accessibility (a11y)

| # | Issue | Severity |
|---|-------|----------|
| 1 | **Mobile menu tanpa focus trap** — Tab bisa keluar dari overlay | Medium |
| 2 | **No skip-to-content link** — Screen reader user harus tab semua nav | Medium |
| 3 | **Button tanpa type attribute** — Risk form submission bug | Low |
| 4 | **Color contrast** — Gradient text hero mungkin fail WCAG | Low |

---

## 5. Opportunities (Peluang)

1. **CMS/Headless Integration** — Konten (prospektus, laporan, nazhir) bisa diambil dari CMS
2. **Real Data API** — Integrasi API BWI untuk data wakaf real-time
3. **Peta Geospasial** — Leaflet/Mapbox untuk visualisasi sebaran wakaf
4. **Dark Mode** — Toggle tema dengan CSS variables
5. **i18n** — Dukungan bahasa Inggris untuk audiens internasional
6. **PWA** — Service worker, offline support, installable
7. **Search & Filter** — Direktori nazhir dengan search fungsional
8. **Blog/News** — Konten dinamis untuk SEO dan engagement
9. **Newsletter** — Integrasi email capture (Mailchimp/ConvertKit)
10. **Analytics** — Google Analytics 4 atau Plausible

---

## 6. Threats (Ancaman)

1. **Data statis usang** — Stats "Rp 2.3T+" akan terlihat outdated tanpa auto-update
2. **No backend validation** — Form kontak/email tidak ada validasi server-side
3. **Dependency drift** — React 19 masih baru, beberapa library mungkin incompatible
4. **Cloudflare Pages limits** — Free tier: 500 builds/bulan, 20MB max file size
5. **No backup strategy** — Data hanya di repo, no database backup

---

## 7. Roadmap

### Phase 1: Foundation (Q2 2026) — Stabilisasi

- [ ] **SEO Meta Tags** — Install `react-helmet-async`, set title + meta per page
- [ ] **Error Boundary** — Wrapper error handling agar tidak white screen
- [ ] **Active Nav State** — Highlight nav link sesuai route aktif
- [ ] **Extract Animation Utils** — Pindahkan `fadeInUp`, `staggerContainer` ke file terpisah
- [ ] **Replace Placeholder Images** — Ganti `[ Foto ... ]` dengan gambar real atau Unsplash
- [ ] **Button Types** — Tambahkan `type="button"` pada semua button non-submit
- [ ] **Lazy Loading Pages** — `React.lazy()` + `Suspense` untuk code splitting

### Phase 2: Enhancement (Q3 2026) — Fitur Baru

- [ ] **Peta Geospasial** — Integrasi Leaflet.js untuk peta sebaran wakaf interaktif
- [ ] **CMS Integration** — Sanity/Strapi untuk konten dinamis (prospektus, laporan, berita)
- [ ] **Search Direktori** — Search nazhir dengan filter (kota, kategori, status)
- [ ] **Dark Mode Toggle** — CSS variables + localStorage persistence
- [ ] **Analytics** — GA4 atau Plausible setup
- [ ] **Newsletter Signup** — Email capture di footer/hero
- [ ] **i18n Setup** — `react-i18next` untuk bilingual ID/EN

### Phase 3: Scale (Q4 2026) — Enterprise Ready

- [ ] **Real-time Dashboard** — Integrasi API BWI untuk data wakaf live
- [ ] **Authentication** — Login untuk Nazhir (admin dashboard)
- [ ] **PWA** — Service worker, manifest.json, offline support
- [ ] **Testing** — Unit test (Vitest) + E2E (Playwright)
- [ ] **Performance Audit** — Lighthouse 90+ score target
- [ ] **Accessibility Audit** — WCAG 2.1 AA compliance
- [ ] **TypeScript Migration** — Gradual migration dari JS ke TS

### Phase 4: Innovation (2027+) — Next Level

- [ ] **Wakaf Calculator** — Tool interaktif estimasi wakaf uang
- [ ] **AI Chatbot** — Asisten virtual untuk tanya jawab wakaf
- [ ] **Blockchain Transparency** — Public ledger untuk alokasi dana wakaf
- [ ] **Mobile App** — React Native atau PWA advanced
- [ ] **Multi-tenant** — White-label untuk lembaga nazhir individual

---

## 8. Quick Wins (Bisa Dikerjakan Sekarang)

| # | Task | Estimasi | Impact |
|---|------|----------|--------|
| 1 | Tambah `react-helmet-async` untuk SEO | 30 menit | High |
| 2 | Extract animation variants ke `src/utils/animations.js` | 20 menit | Medium |
| 3 | Implement `React.lazy()` code splitting | 30 menit | High |
| 4 | Tambah Error Boundary | 20 menit | Medium |
| 5 | Fix active nav link dengan `useLocation` | 15 menit | Low |
| 6 | Ganti placeholder gambar SuccessStories | 30 menit | Medium |
| 7 | Tambah `type="button"` pada buttons | 10 menit | Low |
| 8 | Setup Google Analytics | 15 menit | Medium |

---

## 9. Dependency Health Check

| Package | Version | Status | Notes |
|---------|---------|--------|-------|
| react | 19.2.4 | Latest | Stable |
| react-dom | 19.2.4 | Latest | Stable |
| react-router-dom | 7.14.0 | Latest | v7 baru, monitor breaking changes |
| framer-motion | 12.38.0 | Latest | Stable |
| recharts | 3.8.1 | Latest | Stable |
| lucide-react | 1.7.0 | Latest | Stable |
| vite | 8.0.4 | Latest | Stable |
| eslint | 9.39.4 | Latest | Flat config |

---

## 10. Conclusion

FWP.or.id adalah portal yang sudah memiliki fondasi desain dan UX yang kuat.  
Prioritas utama saat ini:

1. **SEO** — Meta tags per page untuk indexing Google
2. **Code Splitting** — Lazy load pages untuk performance
3. **CMS/Data** — Pindahkan hardcoded content ke sumber dinamis
4. **Peta Geospasial** — Fitur differentiator yang paling impactful

Dengan roadmap ini, portal bisa berkembang dari static MPA menjadi platform wakaf produktif yang interaktif, data-driven, dan scalable.

---

*Dokumen ini akan di-update seiring perkembangan project.*
