# Project Insight & Roadmap — fwp.or.id

> Dokumen analisis & peta jalan teknis untuk **Forum Wakaf Produktif (FWP) Portal**.
> Disusun oleh Claude Code berdasarkan audit kode aktual (`src/`, `public/`, `.github/`).
> Tanggal audit: 2026-06-04.

---

## 1. Ringkasan Eksekutif

FWP Portal adalah **Single-Page Application (SPA) React** yang dideskripsikan sebagai MPA. Saat ini situs berstatus **brosur digital statis berkualitas tinggi**: tampilan premium (glassmorphism, Framer Motion, Recharts), responsif, dan terdeploy otomatis ke Cloudflare Pages. Namun **belum ada satu pun fitur yang fungsional secara data** — semua angka, dokumen, dan peta masih hardcoded atau placeholder.

Roadmap ini fokus pada transisi dari **"situs profil yang indah"** menuju **"platform ekosistem wakaf yang fungsional"**.

---

## 2. Audit Keadaan Saat Ini

### 2.1 Yang Sudah Solid ✅
- **Tech stack modern & ringan**: React 19, Vite 8, React Router v7, Framer Motion, Recharts, Lucide.
- **7 halaman** terstruktur rapi (`src/pages/`), total ±1.214 baris JSX.
- **Design system** berbasis CSS variables di `src/index.css` (416 baris).
- **CI/CD aktif**: `.github/workflows/pages.yml` deploy otomatis ke Cloudflare Pages saat push ke `master`.
- **Konfigurasi edge benar**: `_redirects` (SPA fallback) dan `_headers` (security + cache 1 tahun untuk `/assets/*`).
- **OG/Twitter meta** sudah ada di `index.html` (penting untuk share WhatsApp/sosmed).

### 2.2 Kesenjangan & Utang Teknis 🔴

| # | Temuan | Lokasi | Dampak |
|---|--------|--------|--------|
| 1 | **Semua data hardcoded** — laporan, statistik dashboard, daftar regulasi | `HomePage.jsx`, `TransparencyPage.jsx` | Tidak bisa update tanpa deploy ulang |
| 2 | **Tombol non-fungsional** — "Unduh Dokumen", form, CTA tidak melakukan apa pun | `TransparencyPage.jsx:74` dst | Misleading bagi pengguna |
| 3 | **Peta geospasial = kotak placeholder** dashed border | `TransparencyPage.jsx:43-50` | Fitur inti transparansi belum ada |
| 4 | **SEO per-halaman nihil** — semua route berbagi `<title>`/meta yang sama dari `index.html` | `index.html` | Halaman dalam tak terindeks optimal |
| 5 | **Tidak ada route catch-all / halaman 404** | `App.jsx:27-35` | URL salah → halaman kosong |
| 6 | **`index.html` punya `<title>` ganda & `lang="en"`** padahal konten Bahasa Indonesia | `index.html:6,40` | Bug aksesibilitas & SEO |
| 7 | **README menyebut `routes.jsx`** yang tidak ada (routing nyata di `App.jsx`) | dokumentasi | Dokumen usang |
| 8 | **Tidak ada `sitemap.xml` / `robots.txt`** | `public/` | Crawler tidak terarah |
| 9 | **Styling inline masif** bercampur dengan design system | semua page | Sulit dirawat, inkonsisten |
| 10 | **Nol testing** (tidak ada Vitest/Testing Library) | seluruh repo | Tidak ada jaring pengaman regresi |
| 11 | **Tidak ada analytics** (Cloudflare Web Analytics / Plausible) | seluruh repo | Tidak ada data pengunjung |

---

## 3. Roadmap Pengembangan

Tiga horizon, diurutkan berdasarkan rasio **dampak / usaha**.

### 🟢 Fase 1 — Fondasi & Kredibilitas (Now → 1 bulan)
*Sasaran: menutup utang teknis dasar & membuat situs benar-benar "berfungsi".*

1. **Perbaikan SEO fondasi** *(usaha rendah, dampak tinggi)*
   - Tambah `react-helmet-async` untuk `<title>`/meta per halaman.
   - Bersihkan `index.html`: hapus `<title>` ganda, ubah `lang="id"`.
   - Tambah `public/sitemap.xml` + `public/robots.txt`.
   - Tambah JSON-LD `Organization` schema.
2. **Halaman 404** + route catch-all (`<Route path="*">`) di `App.jsx`.
3. **Form fungsional** — pendaftaran Nazhir & kontak bisnis. Tanpa backend: gunakan **Cloudflare Pages Functions** (`functions/`) atau layanan seperti Formspree, kirim ke email/Sheet.
4. **Aktifkan tombol unduh** dengan dokumen PDF nyata di `public/docs/` (atau sembunyikan jika belum ada).
5. **Cloudflare Web Analytics** (gratis, tanpa cookie) untuk mulai mengumpulkan data trafik.
6. **Image optimization** — `loading="lazy"`, konversi `logo.png` (232 KB) & `hero.png` ke WebP/AVIF.

### 🟡 Fase 2 — Konten Dinamis & Interaktif (1 → 3 bulan)
*Sasaran: konten bisa di-update non-developer; tambah nilai interaktif.*

1. **Headless CMS** untuk Berita/Program/Laporan — rekomendasi **Sanity** atau **Contentlayer**, atau cukup **Markdown + Git** jika ingin tetap statis & gratis.
2. **Peta Wakaf interaktif** — ganti placeholder dengan **Leaflet** (gratis, ringan) memetakan sebaran aset; data dari GeoJSON statis dulu, API BPN/BWI menyusul.
3. **Dashboard data nyata** — pisahkan data Recharts ke file JSON/endpoint terpisah agar mudah diperbarui.
4. **Kalkulator Simulasi Wakaf** — tool interaktif estimasi dampak wakaf produktif (cocok untuk konversi pengunjung → wakif).
5. **Refactor styling** — ekstrak inline styles ke CSS modules / class design-system; standarkan komponen kartu yang berulang.
6. **Setup Vitest + Testing Library** — mulai dari logika kalkulator & util.

### 🔵 Fase 3 — Ekosistem & Skala (3 → 6 bulan+)
*Sasaran: dari portal informasi menjadi simpul ekosistem digital wakaf.*

1. **Integrasi SatuWakaf / payment** — koneksi API transaksi wakaf tunai (`satuwakaf.id`).
2. **Portal Nazhir terotentikasi** — area login (Cloudflare Access / Clerk / Supabase Auth) untuk dashboard pelaporan Nazhir.
3. **Real-time Impact Tracking** — visualisasi penyaluran manfaat (butuh backend: Cloudflare D1/Workers).
4. **PWA** — installable, offline shell (manifest + service worker via `vite-plugin-pwa`).
5. **Dukungan multi-bahasa (i18n)** — Bahasa Inggris untuk kolaborasi internasional (`react-i18next`).
6. **Business Matching dinamis** — direktori proyek wakaf + prospektus yang bisa difilter.

---

## 4. Quick Wins (bisa dikerjakan minggu ini)

- [ ] Perbaiki `lang="id"` & hapus `<title>` duplikat di `index.html`.
- [ ] Tambah route `*` → halaman 404.
- [ ] Pasang Cloudflare Web Analytics.
- [ ] Sembunyikan/aktifkan tombol "Unduh Dokumen" agar tidak menyesatkan.
- [ ] Sinkronkan README (`routes.jsx` → `App.jsx`).
- [ ] Konversi `logo.png` & `hero.png` ke WebP.

---

## 5. Catatan Arsitektur

- **SPA vs MPA**: dokumentasi menyebut "MPA" tetapi implementasinya SPA murni (`react-router-dom`). Jika SEO halaman dalam menjadi krusial, pertimbangkan **pre-rendering** (`vite-plugin-prerender` / migrasi ke **Astro** atau **Next.js** static export). Untuk skala saat ini, SPA + helmet sudah memadai.
- **Backend tanpa server**: seluruh kebutuhan dinamis Fase 1–2 (form, data) bisa dilayani **Cloudflare Pages Functions / Workers + D1/KV** tanpa keluar dari ekosistem hosting sekarang — biaya minimal, latensi edge.
- **Pertahankan kesederhanaan**: stack saat ini ringan dan cepat. Hindari menambah dependency berat (mis. UI library besar) selama Vanilla CSS + design system masih mencukupi.

---

## 6. Metrik Keberhasilan

| Horizon | KPI |
|---------|-----|
| Fase 1 | Lighthouse SEO & Performance ≥ 95; form menghasilkan lead nyata; analytics aktif |
| Fase 2 | Konten dapat di-update tanpa deploy; peta interaktif live; coverage test inti |
| Fase 3 | Transaksi/registrasi terhubung; pengguna terotentikasi aktif; situs installable (PWA) |

---

*Dokumen ini melengkapi `insight-gemini.md` dengan audit kode aktual & prioritas berbasis dampak. Diperbarui seiring evolusi proyek.*
