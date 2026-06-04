# Insight Codex: Roadmap fwp.or.id

Tanggal audit: 4 Juni 2026  
Basis audit: inspeksi lokal repository, `npm run lint`, dan `npm run build`.

## Ringkasan Eksekutif

`fwp.or.id` saat ini sudah berada pada tahap MVP portal publik yang layak: React 19, Vite, React Router, Cloudflare Pages, halaman utama lengkap, navigasi multi-page, visual chart, dan struktur konten untuk FWP, program, nazhir, kemitraan, studi kasus, serta transparansi.

Prioritas berikutnya bukan menambah efek visual, tetapi menaikkan kredibilitas dan utilitas portal. Fokus roadmap adalah mengubah situs dari portal statis dengan data contoh menjadi portal resmi yang punya sumber data jelas, CTA yang bekerja, SEO per halaman, direktori yang bisa dipakai, publikasi yang dapat diunduh, dan alur kemitraan yang bisa ditindaklanjuti.

## Kondisi Saat Ini

### Kekuatan

- Struktur aplikasi sederhana dan mudah dikembangkan: routing ada di `src/App.jsx`, layout global di `src/components/Navbar.jsx` dan `src/components/Footer.jsx`, halaman berada di `src/pages`.
- Design system dasar sudah ada di `src/index.css` dengan token warna, radius, shadow, layout grid, responsive breakpoints, dan komponen tombol.
- Halaman sudah mencakup area strategis FWP: Beranda, Tentang Kami, Program, Pusat Nazhir, Inspirasi, Kemitraan Strategis, dan Transparansi.
- Build dan lint berhasil:
  - `npm run lint` sukses.
  - `npm run build` sukses.
- Konfigurasi Cloudflare Pages sudah tersedia melalui `wrangler.toml`, `public/_headers`, dan `public/_redirects`.

### Gap Utama

- Data penting masih hardcoded di komponen, termasuk statistik nasional, tren wakaf uang, daftar nazhir, prospektus proyek, laporan, dan regulasi.
- Beberapa CTA belum punya tujuan nyata:
  - `href="#"` di Program Pengembangan Kota Wakaf.
  - Tombol `Daftar Sertifikasi`, `Akses E-Learning`, `Unduh Dokumen`, `Ajukan Kemitraan CSR`, dan `Gabung sebagai Investor Jaringan` belum memiliki alur.
- Klaim "Live Data Monitoring" belum didukung integrasi data atau sumber data yang terlihat.
- `index.html` masih `lang="en"`, memiliki dua tag `<title>`, dan belum ada SEO/meta dinamis per halaman.
- README menyebut `src/routes.jsx`, tetapi routing aktual berada di `src/App.jsx`.
- Bundle produksi cukup besar: JS minified sekitar 745 kB, gzip sekitar 226 kB. Vite memberi warning chunk > 500 kB.
- Banyak style inline di halaman, sehingga konsistensi UI dan maintenance jangka panjang akan semakin sulit jika konten bertambah.
- Aset visual studi kasus masih placeholder teks, belum foto/dokumen asli.

## Prinsip Roadmap

1. Kredibilitas dulu: data, sumber, dokumen, link, dan kontak harus jelas sebelum fitur kompleks.
2. Jadikan konten sebagai data: pindahkan copy, daftar, statistik, regulasi, laporan, dan prospektus ke struktur data yang mudah dirawat.
3. CTA harus punya outcome: setiap tombol publik harus mengarah ke form, dokumen, halaman, email terstruktur, atau layanan eksternal yang valid.
4. Pertahankan MPA ringan: gunakan React Router, CSS vanilla, dan Cloudflare Pages sesuai konvensi repo.
5. Tambahkan backend hanya saat dibutuhkan: mulai dari data statis/JSON, lalu naik ke CMS/API jika kebutuhan operasional sudah jelas.

## Roadmap 90 Hari

### Fase 0: Stabilkan Fondasi Publik (Minggu 1)

Tujuan: menghapus friction kredibilitas dan mismatch dokumentasi.

Prioritas:

- Perbaiki `index.html`:
  - Ubah `lang` menjadi `id`.
  - Hapus duplikat `<title>`.
  - Siapkan title dan description yang konsisten untuk portal resmi FWP.
  - Siapkan OG image yang benar-benar berukuran 1200x630, bukan hanya logo besar.
- Sinkronkan README:
  - Ganti referensi `src/routes.jsx` menjadi `src/App.jsx`.
  - Jelaskan bahwa data saat ini masih statis sampai integrasi sumber data selesai.
- Ubah CTA kosong menjadi target valid:
  - `mailto:` dengan subject terstruktur.
  - link eksternal resmi.
  - halaman kontak/kemitraan internal.
  - atau nonaktifkan sementara dengan label yang jelas.
- Tambahkan active route state di navbar agar pengguna tahu posisi halaman.
- Tambahkan halaman 404 sederhana untuk rute yang tidak dikenal.

Acceptance criteria:

- Tidak ada `href="#"` di source.
- Tidak ada tombol publik tanpa aksi atau status.
- HTML title hanya satu.
- README sesuai struktur aktual repo.

### Fase 1: Kredibilitas Konten dan SEO (Minggu 2-4)

Tujuan: membuat portal bisa dipercaya sebagai situs resmi, bukan hanya landing page.

Prioritas:

- Buat data layer lokal:
  - `src/data/navigation.js`
  - `src/data/stats.js`
  - `src/data/nazhir.js`
  - `src/data/programs.js`
  - `src/data/projects.js`
  - `src/data/publications.js`
  - `src/data/regulations.js`
- Pindahkan array hardcoded dari komponen halaman ke file data.
- Tambahkan metadata per halaman:
  - title
  - description
  - canonical URL
  - Open Graph title/description/image
- Tambahkan sumber data pada statistik:
  - nama sumber
  - tanggal data
  - link referensi jika tersedia
  - disclaimer jika masih estimasi atau data internal
- Perbaiki bahasa copy yang berpotensi terlalu absolut, terutama klaim "live", "terverifikasi", "due diligence", dan proyeksi ROI.
- Lengkapi aset visual studi kasus dengan foto asli, caption, alt text, dan sumber.

Acceptance criteria:

- Setiap halaman memiliki metadata unik.
- Semua angka utama punya sumber atau label status data.
- Direktori, laporan, dan regulasi berasal dari file data, bukan array inline.
- Placeholder visual studi kasus diganti dengan aset nyata atau status editorial yang jelas.

### Fase 2: Direktori dan Transparansi yang Bisa Dipakai (Minggu 5-8)

Tujuan: mengubah halaman Pusat Nazhir dan Transparansi menjadi alat publik yang berguna.

Prioritas Pusat Nazhir:

- Jadikan pencarian direktori benar-benar berfungsi.
- Tambahkan filter:
  - nama lembaga
  - kota/provinsi
  - status BWI
  - jenis program
  - kontak publik
- Tambahkan halaman/detail kartu nazhir jika data sudah cukup.
- Tambahkan CTA registrasi anggota dengan alur jelas:
  - email subject/body prefilled
  - form eksternal
  - atau form internal jika backend sudah tersedia.

Prioritas Transparansi:

- Tambahkan file PDF asli di `public/reports` atau rujukan URL resmi.
- Tombol `Unduh Dokumen` harus benar-benar mengunduh dokumen.
- Tambahkan daftar regulasi dengan link resmi.
- Jika peta belum siap, tampilkan roadmap data peta, bukan placeholder kosong.
- Jika peta siap, mulai dari integrasi sederhana:
  - embed peta publik
  - dataset geojson statis
  - lalu API geospasial pada fase berikutnya.

Acceptance criteria:

- Search direktori Nazhir bekerja tanpa reload halaman.
- Semua dokumen laporan punya link valid.
- Regulasi/fatwa punya referensi resmi.
- Transparansi tidak menampilkan tombol unduh palsu.

### Fase 3: Alur Kemitraan dan Prospektus (Minggu 9-12)

Tujuan: menjadikan halaman Kemitraan Strategis sebagai kanal akuisisi proyek dan partner.

Prioritas:

- Definisikan status proyek secara formal:
  - Draft
  - Screening
  - Due Diligence
  - Onboarding
  - Funding
  - Funded
  - Operating
- Perjelas cara menampilkan proyeksi ROI:
  - label risiko
  - disclaimer bukan penawaran investasi
  - dasar perhitungan
  - kontak untuk memorandum/prospektus resmi
- Tambahkan CTA:
  - Ajukan Proyek Wakaf
  - Ajukan Kemitraan CSR
  - Minta Prospektus
  - Hubungi Tim FWP
- Pilih jalur implementasi form:
  - jangka pendek: email prefilled atau Google Form/Tally/Typeform.
  - jangka menengah: Cloudflare Pages Functions + Turnstile + email notification.
  - jangka panjang: dashboard admin dan CRM ringan.
- Tambahkan tracking conversion sederhana untuk CTA utama.

Acceptance criteria:

- Setiap prospektus punya status, nazhir, kebutuhan dana, sektor, lokasi, dan kontak.
- Setiap CTA kemitraan menghasilkan lead yang bisa ditindaklanjuti.
- Risiko hukum/komunikasi ROI sudah dikurangi dengan wording dan disclaimer.

## Roadmap Produk Lanjutan

### Fase 4: Operasional Konten dan CMS Ringan

Tujuan: tim non-teknis bisa memperbarui konten tanpa menyentuh komponen React.

Opsi implementasi:

- Tetap statis: data JSON/JS di repo, update via PR.
- Git-based CMS: Decap CMS atau Pages CMS.
- Headless CMS: Sanity, Strapi, Contentful, atau Directus.
- Cloudflare-native: Pages Functions + D1 untuk data terstruktur jika dibutuhkan.

Rekomendasi awal:

- Mulai dari file data lokal sampai pola konten stabil.
- Naik ke CMS setelah ada kebutuhan update rutin dari tim konten.

### Fase 5: Portal Data dan Integrasi

Tujuan: mengembangkan klaim "live dashboard" menjadi fitur nyata.

Kandidat integrasi:

- Dataset publik BWI/Kemenag/BPN jika tersedia dan legal digunakan.
- Dataset internal FWP untuk anggota, proyek, dan publikasi.
- Cloudflare D1 untuk data direktori/prospektus.
- Cloudflare R2 untuk dokumen dan aset publikasi.
- Cloudflare Pages Functions untuk API publik.
- Turnstile untuk anti-spam form.

Prioritas data:

1. Direktori Nazhir.
2. Publikasi dan laporan.
3. Prospektus proyek.
4. Statistik wakaf.
5. Peta geospasial.

### Fase 6: Kualitas, Aksesibilitas, dan Performa

Tujuan: menjaga situs cepat, mudah diakses, dan stabil saat konten bertambah.

Backlog teknis:

- Code splitting per route dengan `React.lazy` dan `Suspense`.
- Pisahkan vendor chunk untuk Recharts dan Framer Motion.
- Audit aksesibilitas:
  - keyboard navigation
  - focus state
  - aria label pada tombol icon
  - kontras warna
  - alt text gambar
- Tambahkan test minimal:
  - smoke test routing
  - render test komponen layout
  - data validation untuk file data.
- Tambahkan pre-deploy checklist:
  - lint
  - build
  - check broken links
  - check meta tags
  - check file laporan tersedia.
- Pertimbangkan `prefers-reduced-motion` untuk animasi Framer Motion.

## Quick Wins yang Disarankan

- Perbaiki `index.html` dan README.
- Hilangkan CTA kosong.
- Tambahkan halaman 404.
- Pindahkan data array ke `src/data`.
- Tambahkan sumber dan tanggal data untuk statistik homepage.
- Buat OG image khusus.
- Ganti placeholder studi kasus dengan gambar asli atau blok editorial yang tidak terlihat seperti mockup.
- Buat direktori Nazhir searchable.
- Buat tombol unduh laporan valid.
- Tambahkan disclaimer untuk proyek dengan ROI.

## Risiko yang Perlu Dijaga

- Risiko kredibilitas: angka dan klaim tanpa sumber dapat melemahkan posisi sebagai portal resmi.
- Risiko hukum/komunikasi: proyeksi ROI pada proyek wakaf perlu wording hati-hati agar tidak terbaca sebagai penawaran investasi publik tanpa konteks.
- Risiko maintenance: inline style dan data hardcoded akan memperlambat update konten.
- Risiko performa: bundle besar akan makin berat jika dashboard dan peta ditambah tanpa code splitting.
- Risiko UX: tombol tanpa aksi dan placeholder dokumen membuat pengguna kehilangan kepercayaan.

## Metrik Keberhasilan

Metrik teknis:

- `npm run lint` selalu sukses.
- `npm run build` selalu sukses.
- Bundle utama turun atau route chunking aktif.
- Tidak ada broken internal link.
- Semua halaman punya title dan meta description unik.

Metrik produk:

- Semua CTA utama punya tujuan valid.
- Minimal 80 persen data publik utama punya sumber dan tanggal.
- Direktori Nazhir bisa dicari dan difilter.
- Semua laporan yang ditampilkan bisa diunduh.
- Lead kemitraan dapat diterima dan ditindaklanjuti oleh tim.

Metrik konten:

- Setiap studi kasus punya foto, ringkasan dampak, nazhir pengelola, model wakaf, dan status verifikasi.
- Setiap program punya deskripsi, target peserta, output, dan CTA.
- Setiap prospektus punya status, kebutuhan dana, sektor, lokasi, dan kontak.

## Rekomendasi Urutan Implementasi

1. Bereskan fondasi kredibilitas: meta, README, CTA kosong, 404.
2. Ubah konten hardcoded menjadi data lokal.
3. Lengkapi sumber data, dokumen, dan asset nyata.
4. Aktifkan search/filter direktori Nazhir.
5. Jadikan form/CTA kemitraan bekerja.
6. Baru setelah itu bangun dashboard data dan peta yang lebih dinamis.

Dengan urutan ini, project tetap bisa tumbuh cepat tanpa kehilangan kepercayaan publik dan tanpa memaksa backend kompleks terlalu dini.
