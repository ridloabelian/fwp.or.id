# PRD Portal Forum Wakaf Produktif V2

## 1. Ringkasan

Portal FWP V2 adalah portal institusional dan kolaborasi nasional untuk memperkenalkan Forum Wakaf Produktif, melayani lembaga anggota, mempertemukan nazhir dengan mitra, menerbitkan pengetahuan dan berita, serta menunjukkan dampak wakaf produktif secara kredibel.

Portal bukan tempat menumpuk seluruh informasi pada homepage. Setiap jenis konten memiliki satu halaman pemilik. Homepage hanya mengarahkan audiens menuju tujuan utamanya.

## 2. Masalah yang Diselesaikan

1. Konten organisasi berulang antara homepage, halaman Tentang, dan subhalaman.
2. Navigasi memiliki terlalu banyak menu setara sehingga prioritas tidak jelas.
3. Homepage mencampur profil, data nasional, daftar anggota, pengurus, program, berita, dan kontak.
4. Data nasional berpotensi terlihat sebagai data live meski sumber dan pembaruannya tidak selalu jelas.
5. Pengguna belum memiliki jalur yang tegas untuk bergabung, mencari anggota, mengajukan kemitraan, atau membaca berita.
6. Beberapa halaman lama tumpang tindih: Program, Pusat Nazhir, Inspirasi, Kemitraan, dan Transparansi.

## 3. Visi Produk

Menjadi pintu digital resmi ekosistem wakaf produktif Indonesia yang tepercaya, mudah dipahami, dan mampu mengubah kunjungan menjadi kolaborasi nyata.

## 4. Sasaran Bisnis

- Meningkatkan kepercayaan terhadap FWP sebagai forum lembaga, bukan lembaga penghimpun wakaf langsung.
- Meningkatkan pendaftaran calon anggota lembaga.
- Menghasilkan lead kemitraan strategis.
- Memberi visibilitas kepada anggota dan program wakaf produktif.
- Menjadi sumber rujukan resmi untuk profil, berita, agenda, dan publikasi FWP.

## 5. Audiens Utama

### A. Pimpinan lembaga nazhir
Kebutuhan: manfaat keanggotaan, persyaratan, jaringan, agenda, peningkatan kapasitas.
Aksi utama: melihat keanggotaan lalu mendaftar.

### B. Mitra strategis
Bank syariah, regulator, pemerintah, investor berdampak, perusahaan, kampus, media.
Kebutuhan: kredibilitas FWP, cakupan anggota, peluang kolaborasi, kontak resmi.
Aksi utama: mengajukan kemitraan.

### C. Wakif dan masyarakat
Kebutuhan: memahami wakaf produktif, menemukan program/lembaga tepercaya, membaca dampak.
Aksi utama: menjelajahi direktori anggota atau program.

### D. Media dan peneliti
Kebutuhan: profil resmi, legalitas, pengurus, berita, publikasi, kontak media.
Aksi utama: mengakses ruang berita dan sumber institusional.

### E. Anggota FWP
Kebutuhan: agenda, materi, program kolaborasi, exposure lembaga, informasi organisasi.
Aksi utama: mengakses pusat anggota/nazhir.

## 6. Prinsip Produk

1. **Satu fakta, satu pemilik halaman.** Halaman lain hanya menampilkan teaser dan tautan.
2. **Homepage menjawab siapa, mengapa penting, apa yang dikerjakan, bukti, lalu aksi.**
3. **FWP adalah forum lembaga.** CTA utama bukan “Tunaikan Wakaf” kecuali jelas menuju program anggota dan disertai konteks.
4. **Amanah data.** Statistik wajib memiliki sumber, tanggal pembaruan, dan label yang tepat; hindari klaim “live” tanpa sistem live.
5. **Mobile-first.** Jalur aksi utama maksimal tiga ketukan.
6. **Editorial clarity.** Paragraf ringkas; detail ada pada halaman tujuan.
7. **Accessible by default.** Kontras WCAG AA, keyboard navigation, reduced motion, heading hierarchy benar.
8. **Performance first.** Hindari animasi dekoratif berat dan chart bila tidak membantu keputusan pengguna.

## 7. Produk Inti

### 7.1 Profil Institusi
Profil, sejarah, legalitas, struktur, kontak media.

### 7.2 Keanggotaan
Manfaat, tipe anggota, persyaratan, iuran, FAQ, pendaftaran.

### 7.3 Direktori Anggota
Daftar lembaga anggota resmi, pencarian, filter wilayah, STBPN, profil singkat.

### 7.4 Program & Dampak
Program strategis FWP, program anggota terkurasi, studi kasus, peluang kolaborasi.

### 7.5 Kemitraan
Model kolaborasi, sektor mitra, proses pengajuan, form lead.

### 7.6 Berita & Agenda
Berita, siaran pers, agenda, materi acara, liputan media.

### 7.7 Transparansi & Publikasi
Laporan, kebijakan, riset, materi publik, dokumen yang benar-benar tersedia.

## 8. Non-goals V2 Awal

- Marketplace transaksi wakaf.
- Dashboard data nasional real-time tanpa backend dan sumber resmi.
- Portal login anggota.
- Pengelolaan pembayaran iuran online.
- CMS kompleks sebelum kebutuhan editorial tervalidasi.
- Duplikasi halaman event lama sebagai menu utama.

## 9. User Journey Utama

### Bergabung sebagai anggota
Homepage → Keanggotaan → Pilih jenis → Pahami syarat/iuran → Daftar → Konfirmasi.

### Menjalin kemitraan
Homepage → Kemitraan → Pilih model kolaborasi → Lihat bukti/cakupan → Kirim inquiry.

### Memverifikasi FWP
Homepage → Tentang → Legalitas/Struktur → Kontak resmi.

### Menemukan anggota
Homepage → Direktori Anggota → Cari/filter → Lihat detail lembaga.

### Mengikuti kabar
Homepage → Berita & Agenda → Artikel/agendanya → CTA terkait.

## 10. Kebutuhan Fungsional

- Routing stabil dan URL singkat.
- Search/filter direktori anggota.
- Form pendaftaran dengan validasi dan consent.
- Form kemitraan dengan jalur follow-up jelas.
- Berita memiliki URL permanen, OG metadata, tanggal, kategori, dan penulis.
- Dokumen transparansi hanya menampilkan file tersedia; tanpa tombol mati.
- Redirect 301 untuk route lama.
- SEO metadata unik per halaman.
- Analytics untuk CTA utama, form start, form submit, dan outbound link.

## 11. Kebutuhan Nonfungsional

- Lighthouse target: Performance ≥90, Accessibility ≥95, SEO ≥95.
- LCP mobile target <2,5 detik.
- CLS <0,1.
- Tidak ada critical content yang bergantung pada animation completion.
- Semua halaman utama dapat dimuat langsung di Cloudflare Pages.
- Konten dan data dipusatkan agar tidak berbeda antarhalaman.

## 12. Model Konten

### Organization
Nama resmi, tagline, deskripsi singkat, deskripsi lengkap, kontak.

### Leadership
Nama, gelar, jabatan, periode, foto, urutan.

### Member
Nama tampil, nama badan hukum, STBPN, wilayah, kategori, website, status publikasi.

### Program
Nama, pemilik, ringkasan, sektor, wilayah, dampak terverifikasi, CTA.

### Article
Slug, judul, tanggal, penulis, kategori, excerpt, hero image, body, liputan.

### Document
Judul, kategori, periode, tanggal, file, status publik.

### Event
Judul, tanggal, status, lokasi, ringkasan, materi, dokumentasi.

## 13. Keberhasilan

- CTR homepage ke Keanggotaan ≥8%.
- CTR homepage ke Kemitraan ≥5%.
- Completion rate form pendaftaran ≥35% dari form start.
- Tidak ada konten substantif identik lintas halaman.
- Tidak ada route utama 404 atau CTA mati.
- Waktu menemukan legalitas, anggota, atau kontak <30 detik dalam usability test.

## 14. Tahapan Implementasi

### Fase 1 — Fondasi
Sitemap, redirects, content model, design system, homepage, Tentang, Keanggotaan, Direktori, Berita.

### Fase 2 — Konversi
Form pendaftaran, form kemitraan, analytics, SEO, halaman detail anggota/program.

### Fase 3 — Kredibilitas
Transparansi, publikasi, studi kasus terverifikasi, materi agenda, optimasi performa.

## 15. Guardrail Konten

- Homepage tidak menampilkan detail visi-misi, sejarah, legalitas, struktur, daftar anggota, atau timeline penuh.
- Tentang tidak menampilkan katalog program atau daftar anggota lengkap.
- Direktori Anggota tidak menjelaskan sejarah FWP.
- Keanggotaan tidak menjadi salinan Tentang.
- Program & Dampak hanya memuat program dan hasil; bukan profil organisasi.
- Berita tidak menjadi tempat halaman profil statis.
- Setiap angka menyebutkan sumber dan tanggal pembaruan.
- Satu CTA memiliki satu tujuan; hindari label ambigu seperti “Pelajari Peta Jalan” bila targetnya halaman Tentang.
