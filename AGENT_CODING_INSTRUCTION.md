# 🎯 Agent Coding Instruction — FWP.or.id Foundation Phase

> **Project:** Forum Wakaf Produktif Portal (fwp.or.id)  
> **Phase:** P0 — Foundation & Kredibilitas  
> **Date:** 2026-06-04  
> **Stack:** React 19 + Vite 8 + React Router v7 + Vanilla CSS  
> **Target:** Production-ready MVP dengan SEO, valid CTA, data layer, dan error handling  

---

## 📋 Mission Statement

Transformasikan fwp.or.id dari "brochure statis premium" menjadi portal yang kredibel, terindeks Google, dan memiliki fondasi teknis yang solid untuk iterasi selanjutnya. **Jangan tambahkan fitur baru.** Perbaiki yang ada.

---

## 🏗️ Architecture Context

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed glassmorphism navbar + mobile hamburger
│   └── Footer.jsx          # 4-col footer
├── pages/
│   ├── HomePage.jsx        # Hero + Stats + Chart + Nazhir logos
│   ├── AboutPage.jsx       # Visi-misi + Pentahelix
│   ├── ProgramsPage.jsx    # 4 program cards
│   ├── NazhirCenterPage.jsx # SKKNI + Direktori placeholder
│   ├── SuccessStoriesPage.jsx # 3 case studies
│   ├── BusinessMatchingPage.jsx # Prospektus + CSR Hub
│   └── TransparencyPage.jsx   # Regulasi + Laporan + Peta placeholder
├── index.css               # 416 lines design system tokens
├── main.jsx                # BrowserRouter entry
└── App.jsx                 # Route definitions (7 routes)
```

**Hosting:** Cloudflare Pages (SPA fallback via `_redirects` already configured).

---

## ✅ Task Checklist (Execute in Order)

### TASK 1: Fix `index.html` Foundation
**File:** `index.html` (root)

1. Change `<html lang="en">` → `<html lang="id">`
2. Remove duplicate `<title>` tags. Keep only one: `<title>Forum Wakaf Produktif — Transformasi Wakaf Produktif Indonesia</title>`
3. Ensure meta description exists and is accurate:
   ```html
   <meta name="description" content="Forum Wakaf Produktif mengorkestrasi ekosistem wakaf produktif nasional menuju Indonesia Emas 2045. Advokasi, sertifikasi, dan business matching nazhir.">
   ```
4. Add/verify Open Graph tags:
   ```html
   <meta property="og:title" content="Forum Wakaf Produktif">
   <meta property="og:description" content="Transformasi wakaf produktif Indonesia.">
   <meta property="og:type" content="website">
   <meta property="og:url" content="https://fwp.or.id/">
   <meta property="og:image" content="https://fwp.or.id/og-image.jpg">
   ```
5. Add Cloudflare Web Analytics beacon before closing `</body>`:
   ```html
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "PLACEHOLDER_TOKEN"}'></script>
   ```
   *(Use placeholder token — will be replaced in production env)*
6. Add `public/robots.txt`:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://fwp.or.id/sitemap.xml
   ```
7. Add `public/sitemap.xml` (static, list all 7 routes + root).

**Acceptance:** `npm run build` succeeds. No HTML validation errors.

---

### TASK 2: Install & Configure `react-helmet-async`

1. Run: `npm install react-helmet-async`
2. Wrap app in `main.jsx`:
   ```jsx
   import { HelmetProvider } from 'react-helmet-async';

   <HelmetProvider>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </HelmetProvider>
   ```
3. Create reusable component `src/components/SEO.jsx`:
   ```jsx
   import { Helmet } from 'react-helmet-async';

   export default function SEO({ title, description, ogImage = '/og-image.jpg' }) {
     const fullTitle = title ? `${title} | Forum Wakaf Produktif` : 'Forum Wakaf Produktif';
     return (
       <Helmet>
         <title>{fullTitle}</title>
         <meta name="description" content={description} />
         <meta property="og:title" content={fullTitle} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={ogImage} />
         <link rel="canonical" href={`https://fwp.or.id${location.pathname}`} />
       </Helmet>
     );
   }
   ```
4. Import and use `<SEO />` in **every page** with unique title + description:
   - HomePage: `"Beranda"`, `"Portal resmi Forum Wakaf Produktif Indonesia..."`
   - AboutPage: `"Tentang Kami"`, `"Profil, visi, misi, dan struktur organisasi FWP..."`
   - ProgramsPage: `"Program Strategis"`, `"4 program unggulan FWP: advokasi..."`
   - NazhirCenterPage: `"Pusat Nazhir"`, `"Standar kompetensi SKKNI, direktori nazhir..."`
   - SuccessStoriesPage: `"Inspirasi & Studi Kasus"`, `"Kisah sukses wakaf produktif..."`
   - BusinessMatchingPage: `"Layanan Bisnis"`, `"Business matching proyek wakaf..."`
   - TransparencyPage: `"Transparansi"`, `"Laporan keuangan, regulasi, peta geospasial..."`

**Acceptance:** Each route renders unique `<title>` and `<meta name="description">` in DOM. View source (or React DevTools) confirms per-page metadata.

---

### TASK 3: Create 404 Not Found Page

1. Create `src/pages/NotFoundPage.jsx`:
   - Design consistent with glassmorphism aesthetic (reuse CSS tokens from `index.css`)
   - Content: "Halaman Tidak Ditemukan" — "Maaf, halaman yang Anda cari tidak tersedia."
   - CTA button: "Kembali ke Beranda" linking to `/`
   - Illustration: Use Lucide icon (`SearchX` or `FileX`) at 120px size, gradient color
2. Add route in `App.jsx`:
   ```jsx
   import NotFoundPage from './pages/NotFoundPage';
   // ...
   <Route path="*" element={<NotFoundPage />} />
   ```
   Ensure it is the **last** route.

**Acceptance:** Visiting `/random-url` renders 404 page. Navbar and Footer still visible.

---

### TASK 4: Extract Data Layer (Decouple Content from JSX)

Create `src/data/` directory and move ALL hardcoded arrays/objects from pages into these files:

**Files to create:**

1. `src/data/stats.js` — HomePage stats (Rp 2.3T+, 5.2M ha, 4000+ SDM)
   ```js
   export const homeStats = [
     { label: 'Nilai Aset Wakaf', value: 'Rp 2.3T+', source: 'BWI, 2024', disclaimer: 'Estimasi nasional' },
     { label: 'Luas Tanah Wakaf', value: '5.2M ha', source: 'BPN/BWI', disclaimer: 'Data tersertifikasi' },
     { label: 'SDM Nazhir', value: '4000+', source: 'FWP Internal', disclaimer: 'Jaringan aktif' },
   ];
   ```

2. `src/data/nazhir.js` — Nazhir directory list
3. `src/data/programs.js` — 4 programs data
4. `src/data/regulations.js` — Regulations/fatwa list
5. `src/data/projects.js` — Business matching prospektus
6. `src/data/publications.js` — Laporan keuangan list
7. `src/data/caseStudies.js` — Success stories content
8. `src/data/navigation.js` — Nav links array (reuse in Navbar + Footer + sitemap)

**Rules for extraction:**
- Keep exact same content/data values (don't invent new data)
- Add `source` and `lastUpdated` fields to every data item that represents a real-world claim
- Export as plain JS objects/arrays (not JSON files, to avoid fetch complexity in this phase)
- Import in respective pages and map over them

**Acceptance:** No hardcoded arrays remain inside any `src/pages/*.jsx` file. All data imported from `src/data/`.

---

### TASK 5: CTA Audit & Fix

**Rule:** Every interactive button/link must have a valid destination OR be visually disabled with clear status.

Scan all pages for `href="#"`, empty `onClick`, or buttons without action. Fix as follows:

| Button | Current State | Fix |
|--------|--------------|-----|
| "Daftar Sertifikasi" (NazhirCenter) | `href="#"` | `mailto:sekretariat@fwp.or.id?subject=Pendaftaran Sertifikasi Nazhir` |
| "Akses E-Learning" (NazhirCenter) | `href="#"` | Disable visually. Add badge "Segera Hadir". Keep button styled but `pointer-events: none` or remove `href`. |
| "Unduh Dokumen" (Transparency) | `href="#"` | If PDF exists in `public/reports/`, link to it. If not, disable + badge "Dalam Persiapan". |
| "Ajukan Kemitraan CSR" (BusinessMatching) | `href="#"` | `mailto:kemitraan@fwp.or.id?subject=Ajukan Kemitraan CSR` |
| "Gabung sebagai Investor" (BusinessMatching) | `href="#"` | `mailto:kemitraan@fwp.or.id?subject=Minat Investor Jaringan` |
| "Hubungi Kami" (Footer/CTA) | `href="#"` | `mailto:info@fwp.or.id` |
| "Lihat Detail" (Prospektus cards) | `href="#"` | Disable + badge "Prospektus Detail — Segera" |

**Implementation note:** For disabled buttons, use CSS class `.btn-disabled`:
```css
.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}
```
Add `<span className="badge-soon">Segera</span>` next to disabled buttons if inline, or as button content.

**Acceptance:** Zero `href="#"` in production JSX. Every button either navigates, mails, downloads, or clearly shows "Segera Hadir".

---

### TASK 6: Active Navigation State

**File:** `src/components/Navbar.jsx`

1. Import `useLocation` from `react-router-dom`.
2. Compare `location.pathname` with nav item path.
3. Add active class to current nav link:
   ```jsx
   const isActive = location.pathname === item.path;
   <a className={isActive ? 'nav-link active' : 'nav-link'} ...>
   ```
4. Add CSS in `index.css`:
   ```css
   .nav-link.active {
     color: var(--color-primary);
     font-weight: 600;
     border-bottom: 2px solid var(--color-primary);
   }
   ```
5. Apply same logic to mobile menu overlay links.

**Acceptance:** Nav item underlined/highlighted when user is on that page. Works on mobile menu too.

---

### TASK 7: Error Boundary

**File:** Create `src/components/ErrorBoundary.jsx`

1. Create class component wrapping `componentDidCatch`.
2. Render fallback UI consistent with 404 aesthetic:
   - Message: "Terjadi Kesalahan" — "Halaman tidak dapat dimuat. Silakan muat ulang."
   - Button: "Muat Ulang Halaman" calling `window.location.reload()`
3. Wrap `<App />` in `main.jsx`:
   ```jsx
   <ErrorBoundary>
     <HelmetProvider>
       <BrowserRouter>...</BrowserRouter>
     </HelmetProvider>
   </ErrorBoundary>
   ```

**Acceptance:** Intentionally throw error in a page component → boundary catches it, shows fallback, navbar/footer hidden (acceptable for P0).

---

### TASK 8: Integrate `react-countup` (Installed but Unused)

**File:** `src/pages/HomePage.jsx`

1. `react-countup` is already in `package.json`. Import it.
2. Replace static stat numbers with `<CountUp end={value} duration={2.5} separator="." prefix="Rp " suffix="T+" />` etc.
   - Handle non-numeric prefixes/suffixes carefully (e.g., "5.2M ha" → count 5.2, suffix "M ha")
3. Trigger countup when section scrolls into view (use Intersection Observer or Framer Motion `whileInView`).

**Acceptance:** Numbers animate from 0 to target when user scrolls to stats section.

---

## 🎨 Design & Styling Constraints

1. **NO TailwindCSS.** Use existing vanilla CSS tokens in `index.css`.
2. **NO new color palette.** Use existing CSS variables:
   - `--color-navy: #132c3f`
   - `--color-green: #8bc53f`
   - `--color-cyan: #16aeca`
3. **Glassmorphism consistency:** All new cards must use existing `.glass-card` class pattern (backdrop-filter, rgba backgrounds).
4. **Responsive:** All new components must work at 320px, 768px, and 1440px breakpoints.
5. **Lucide icons only.** No emoji as primary UI elements.

---

## 🧪 Quality Gates (Run Before Finishing)

Execute these commands and ensure zero errors:

```bash
npm run lint       # Must pass with no warnings
npm run build      # Must complete successfully
```

Manual checks:
- [ ] Navigate to each of 7 routes + 1 invalid route. Verify title tag changes.
- [ ] View page source (Ctrl+U) — meta description visible for each route.
- [ ] Click every CTA button. No `href="#"` behavior (page jumping to top).
- [ ] Resize to mobile width. Navbar hamburger works. Active state visible.
- [ ] Scroll to stats section on homepage. CountUp animation triggers once.

---

## 📤 Deliverables

1. Modified source files (all changes committed to git if possible).
2. No new binary assets required (OG image can be placeholder; use existing `logo.png` referenced as OG image if needed).
3. Updated `package.json` only if `react-helmet-async` added.

---

## ⚠️ Explicit DON'Ts

- **DON'T** add a backend/API in this phase.
- **DON'T** add Leaflet/Mapbox (peta remains placeholder with improved messaging).
- **DON'T** add authentication or payment gateway.
- **DON'T** refactor to TypeScript.
- **DON'T** change React Router to Framework Mode / SSR.
- **DON'T** add new pages beyond 404.
- **DON'T** change design system colors or typography.
- **DON'T** remove Framer Motion animations — keep existing, just don't add more.

---

*End of Instruction. Execute tasks in order. Ask for clarification only if file structure differs significantly from specification.*
