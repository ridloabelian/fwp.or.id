# Project Insight & Roadmap: fwp.or.id

## 1. Identitas & Visi Proyek
**Forum Wakaf Produktif (FWP)** adalah platform digital yang dirancang untuk mengorkestrasi ekosistem wakaf produktif di Indonesia. Proyek ini bertujuan untuk mentransformasi tata kelola wakaf nasional menjadi lebih profesional, transparan, dan berdampak luas bagi kemajuan ekonomi umat menuju Indonesia Emas 2045.

### Nilai Utama:
- **Profesionalisme**: Standarisasi nazhir dan tata kelola bisnis.
- **Transparansi**: Publikasi laporan keuangan dan peta aset geospasial.
- **Sinergi**: Kolaborasi antar lembaga (BWI, BPN, Perbankan Syariah).

---

## 2. Analisis Tech Stack Saat Ini
Aplikasi dibangun dengan arsitektur modern yang ringan dan performan:

- **Frontend**: `React 19` (UI dinamis dan reaktif).
- **Build Tool**: `Vite 8` (Pengembangan cepat dan bundling optimal).
- **Styling**: `Vanilla CSS` dengan Modern CSS Variables (High performance, low overhead).
- **Animasi**: `Framer Motion` (Interaksi halus dan premium).
- **Visualisasi Data**: `Recharts` (Representasi statistik capaian).
- **Ikonografi**: `Lucide React` (Ikon vektor ringan).
- **Infrastruktur**: `Cloudflare Pages` (Edge hosting global dengan latensi rendah).

---

## 3. Arsitektur Folder & Pola Kode
Proyek mengikuti pola *Component-based Architecture*:
- `src/pages`: Pemisahan logika halaman utama.
- `src/components`: Komponen modular (Navbar, Footer, dsb).
- `public/`: Aset statis dan konfigurasi khusus Cloudflare (`_headers`, `_redirects`).
- `index.css`: Pusat desain sistem (Design System) menggunakan CSS Variables.

---

## 4. Roadmap Pengembangan

### Fase 1: Pemantapan & Optimalisasi (Short-term)
1.  **Integrasi API Geospasial**: Mengganti placeholder di `TransparencyPage` dengan peta interaktif asli (menggunakan Mapbox atau Leaflet).
2.  **SEO & Metadata**: Implementasi `react-helmet-async` untuk manajemen meta tag per halaman guna meningkatkan visibilitas di Google.
3.  **Performance Tuning**: Optimasi loading gambar (Lazy loading) dan pre-rendering aset hero.
4.  **Formulir Kontak & Nazhir**: Implementasi form fungsional untuk pendaftaran nazhir atau pertanyaan bisnis.

### Fase 2: Fitur Interaktif (Mid-term)
1.  **Dashboard Nazhir Center**: Area khusus informasi regulasi dan pelatihan nazhir yang lebih terstruktur.
2.  **Kalkulator Wakaf**: Tool interaktif untuk simulasi dampak wakaf produktif bagi pengguna.
3.  **Blog/News System**: Integrasi Headless CMS (seperti Sanity atau Strapi) untuk update berita program secara berkala.
4.  **Multi-language Support**: Dukungan Bahasa Inggris untuk menarik kolaborasi internasional.

### Fase 3: Ekosistem Digital (Long-term)
1.  **Integrasi SatuWakaf**: Koneksi API mendalam dengan platform transaksi `satuwakaf.id`.
2.  **Real-time Impact Tracking**: Visualisasi real-time penyaluran manfaat wakaf di seluruh Indonesia.
3.  **PWA (Progressive Web App)**: Memungkinkan situs diinstal sebagai aplikasi mobile tanpa melalui App Store.

---

## 5. Strategi Validasi & Kualitas
- **Automated Testing**: Penambahan Vitest untuk testing logika bisnis/kalkulator.
- **Accessibility (a11y)**: Memastikan standar WCAG terpenuhi agar inklusif bagi semua pengguna.
- **CI/CD**: Optimalisasi GitHub Actions untuk testing otomatis sebelum deployment ke Cloudflare.

---
*Dokumen ini dibuat oleh Gemini CLI sebagai panduan strategis pengembangan fwp.or.id.*
