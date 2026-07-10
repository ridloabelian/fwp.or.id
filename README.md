# 🌐 Forum Wakaf Produktif (FWP) Portal

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-000000?style=for-the-badge&logo=cloudflare-pages&logoColor=F38020)](https://pages.cloudflare.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-F107A3?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Portal Multi-Page Application (MPA) resmi dari **Forum Wakaf Produktif (FWP)**. Dirancang dengan desain modern, performa tinggi, dan *fully responsive* untuk memimpin transformasi nasional wakaf tunai dan pengembangan aset produktif menuju Indonesia Emas 2045.

🔗 **Live Website:** [https://fwp.or.id](https://fwp.or.id) (atau backup: [fwp-or-id.pages.dev](https://fwp-or-id.pages.dev))

---

## ✨ Fitur Utama

*   **⚡ Arsitektur Multi-Page Modern:** Transisi halaman instan tanpa *layout shifts*, didukung oleh `react-router-dom` v7.
*   **📊 Live Data Dashboard:** Visualisasi data interaktif tren akumulasi wakaf tunai nasional, cakupan lahan wakaf, dan statistik Nazhir tersertifikasi menggunakan `recharts`.
*   **🤝 Waqf Leaders Summit 2026 (WLS):** Halaman khusus pendaftaran dan informasi WLS 2026 lengkap dengan *custom booking form*, WA auto-redirect, serta OpenGraph SEO generation statis.
*   **📱 Ultra-Responsive Design:** Optimasi penuh untuk layar mobile dengan sistem *grid-collapsing* dinamis, navigasi *hamburger menu*, dan tipografi adaptif.
*   **🎨 Premium Aesthetics & Glassmorphism:** *Styling* CSS bersih, *shape canvas* HTML5 mengambang interaktif, dan animasi mikro menggunakan `framer-motion`.
*   **📂 Dedicated Hubs:** Modul khusus untuk Nazhir Center, Strategic Partnerships (Business Matching), Waqf Project Prospectus, dan Transparency Reports.

---

## 🛠️ Stack Teknologi

*   **Core:** [React 19](https://react.dev) & JavaScript (ES6+)
*   **Build Tool:** [Vite 8](https://vite.dev) (blazing fast development & production bundling)
*   **Styling:** Vanilla CSS3 (Custom Design System Tokens) tanpa framework tailwind, pendekatan mobile-first.
*   **Animation:** [Framer Motion](https://framer.com/motion)
*   **Charts:** [Recharts](https://recharts.org)
*   **Icons:** [Lucide React](https://lucide.dev)
*   **Backend/Deployment:** [Cloudflare Pages](https://pages.cloudflare.com) dengan Skrip Pre-render SEO Node.js.

---

## 📂 Struktur Direktori

```bash
fwp.or.id/
├── public/                # Aset statis publik (Gambar, Logo, Dokumen)
│   ├── _redirects         # Cloudflare routing rules (SPA fallback)
│   └── _headers           # Security & asset caching headers
├── scripts/
│   └── post-build-seo.js  # Generator index.html statis untuk metadata SEO halaman (/wls2026, dll)
├── src/
│   ├── components/        # Komponen UI global (Navbar, Footer, Form WLS, dll)
│   ├── data/              # Sumber data konten statis (Narasumber WLS, statistik)
│   ├── pages/             # Halaman portal utama
│   │   ├── HomePage.jsx             # Beranda
│   │   ├── AboutPage.jsx            # Tentang FWP
│   │   ├── ProgramsPage.jsx         # Program & Fokus Area
│   │   ├── EventLandingPage.jsx     # Landing Page WLS 2026 (/wls2026)
│   │   ├── NazhirCenterPage.jsx     # Pusat Informasi Nazhir
│   │   ├── SuccessStoriesPage.jsx   # Inspirasi & Studi Kasus
│   │   ├── BusinessMatchingPage.jsx # Kemitraan Strategis
│   │   └── TransparencyPage.jsx     # Transparansi Keuangan
│   ├── index.css          # Token sistem desain global
│   ├── main.jsx           # Entrypoint aplikasi React
│   └── routes.jsx         # Konfigurasi routing multi-halaman
├── package.json           # Dependensi & script build (custom vite + SEO script)
└── vite.config.js         # Konfigurasi kompilasi Vite
```

---

## 💻 Panduan Development

Langkah-langkah menjalankan proyek secara lokal:

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/ridloabelian/fwp.or.id.git
   cd fwp.or.id
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server lokal:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173`.

4. **Kompilasi produksi (Build):**
   ```bash
   npm run build
   ```
   *Perintah ini akan menjalankan Vite build, dilanjutkan dengan skrip Node.js (`scripts/post-build-seo.js`) untuk menghasilkan file statis OpenGraph (SEO) spesifik per path (seperti `/wls2026/index.html`). Hasilnya ada di folder `/dist`.*

---

## ☁️ Integrasi Cloudflare Pages

Proyek ini telah dikonfigurasi secara native untuk rilis otomatis ke **Cloudflare Pages**, memanfaatkan:

*   **Pre-rendered SEO (OG Tags):** Mengingat CF Pages tidak mendukung SSR/Next.js secara native, proyek ini mengakali crawling bot sosial media (Telegram/WA) dengan skrip pre-render saat fase *post-build* untuk membuat direktori statis.
*   **SPA Redirects:** File `public/_redirects` memastikan navigasi langsung (misal memuat ulang `/program`) dialihkan ke `index.html` dan tidak menghasilkan `404 Not Found`.
*   **Cache & Security:** File `public/_headers` memuat konfigurasi umur *cache* aset (`/assets`) selama 1 tahun, serta mengaktifkan header sekuriti mutakhir (`X-Frame-Options`, `X-Content-Type-Options`).

---

## 📄 Lisensi

Proyek ini berlisensi **MIT License**. Kami mendorong inisiatif *open-source* dalam pengembangan ekosistem dan tata kelola instrumen perwakafan.

---
*Dibangun dengan dedikasi untuk kesejahteraan umat. © 2026 Forum Wakaf Produktif.*
