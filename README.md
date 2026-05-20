# 🌐 Portal Forum Wakaf Produktif (FWP)

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-000000?style=for-the-badge&logo=cloudflare-pages&logoColor=F38020)](https://pages.cloudflare.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-F107A3?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Portal Multi-Page Application (MPA) resmi **Forum Wakaf Produktif (FWP)**. Dirancang secara profesional, berkinerja tinggi, dan responsif sepenuhnya untuk memimpin gerakan transformasi wakaf uang serta pemberdayaan aset produktif nasional menuju visi **Indonesia Emas 2045**.

🔗 **Situs Live:** [https://fwp.or.id](https://fwp.or.id) (atau cadangan: [fwp-or-id.pages.dev](https://fwp-or-id.pages.dev))

---

## ✨ Fitur Utama Portal

*   **⚡ Arsitektur Multi-Page Modern:** Perpindahan halaman instan tanpa *layout shift* didukung oleh `react-router-dom` v7.
*   **📊 Live Data Dashboard:** Visualisasi tren penghimpunan wakaf uang nasional, luas tanah wakaf se-Indonesia, dan data sertifikasi nazhir menggunakan grafik interaktif dari `recharts`.
*   **📱 Desain Ultra-Responsif:** Optimalisasi penuh di layar mobile dengan sistem kolaps kolom dinamis, navigasi *hamburger menu* yang mulus, dan tipografi adaptif.
*   **🎨 Estetika Premium & Glassmorphism:** Memanfaatkan perpaduan CSS Modern, animasi mengambang HTML5 (*floating canvas elements*), serta interaksi halus dari `framer-motion`.
*   **📂 Pusat Informasi & Transparansi:** Halaman terdedikasi untuk Nazhir Center, Kemitraan Strategis (Business Matching), Prospektus Proyek Wakaf, serta Laporan Transparansi Keuangan.

---

## 🛠️ Teknologi yang Digunakan

*   **Core:** [React 19](https://react.dev) & [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
*   **Build Tool:** [Vite 8](https://vite.dev) (sangat cepat untuk pengembangan & bundling produksi)
*   **Styling:** Vanilla CSS 3 dengan pendekatan *Design System Tokens* & *Mobile-First*.
*   **Animasi:** [Framer Motion](https://framer.com/motion) untuk transisi halaman dan efek scroll reveal.
*   **Grafik & Diagram:** [Recharts](https://recharts.org) untuk menyajikan visualisasi data yang responsif.
*   **Ikon:** [Lucide React](https://lucide.dev)
*   **Hosting CDN:** [Cloudflare Pages](https://pages.cloudflare.com) dengan proteksi DNS super ketat & kompresi edge optimal.

---

## 📂 Struktur Direktori

```bash
fwp.or.id/
├── public/                # Aset statis publik
│   ├── _redirects         # Aturan SPA routing Cloudflare Pages
│   └── _headers           # Security & caching headers Cloudflare
├── src/
│   ├── components/        # Komponen UI global (Navbar, Footer, dsb.)
│   ├── pages/             # Halaman-halaman portal utama
│   │   ├── HomePage.jsx             # Beranda
│   │   ├── AboutPage.jsx            # Tentang Kami
│   │   ├── ProgramsPage.jsx         # Program & Layanan
│   │   ├── NazhirCenterPage.jsx     # Pusat Informasi Nazhir
│   │   ├── SuccessStoriesPage.jsx   # Inspirasi & Studi Kasus
│   │   ├── BusinessMatchingPage.jsx # Kemitraan Strategis
│   │   └── TransparencyPage.jsx     # Transparansi Laporan
│   ├── index.css          # Desain sistem dan styling global
│   ├── main.jsx           # Entrypoint aplikasi
│   └── routes.jsx         # Konfigurasi routing multi-page
├── wrangler.toml          # Konfigurasi build Cloudflare Pages
├── package.json           # Dependensi & script proyek
└── vite.config.js         # Konfigurasi bundling Vite
```

---

## 💻 Jalankan Secara Lokal

Ikuti langkah berikut untuk memulai proyek ini di komputer Anda:

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/ridloabelian/fwp.or.id.git
   cd fwp.or.id
   ```

2. **Instal seluruh dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
   Aplikasi akan otomatis berjalan di alamat `http://localhost:5173`.

4. **Kompilasi build untuk produksi:**
   ```bash
   npm run build
   ```
   Hasil build statis akan disimpan di dalam folder `/dist` yang siap dideploy.

---

## ☁️ Integrasi Cloudflare Pages

Proyek ini telah dikonfigurasi secara native untuk dideploy langsung ke **Cloudflare Pages** dengan kelebihan:

*   **SPA Redirects:** Adanya file `public/_redirects` memastikan rute yang diakses langsung (misal `/program`) tidak menghasilkan error `404 Not Found` pada CDN statis.
*   **Security & Cache Control:** Konfigurasi `public/_headers` menjamin seluruh file static di folder `/assets` dicache selama 1 tahun di browser pengguna, serta menyertakan header keamanan bawaan seperti `X-Frame-Options: DENY` dan `X-Content-Type-Options: nosniff`.

---

## 📄 Lisensi

Proyek ini dilindungi di bawah Lisensi **MIT**. Silakan gunakan secara bijak untuk kemajuan ekosistem wakaf dan kemaslahatan umat.

---
*Dikembangkan dengan penuh dedikasi oleh [Ridlo Abelian](https://github.com/ridloabelian).*
