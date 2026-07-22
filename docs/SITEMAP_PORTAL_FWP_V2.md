# Sitemap Portal FWP V2

## Navigasi Utama

1. Tentang
2. Keanggotaan
3. Program & Dampak
4. Kemitraan
5. Berita & Agenda
6. Direktori Anggota

CTA navbar: **Daftar Anggota**

Footer: Transparansi, Publikasi, Kontak, Kebijakan Privasi, kanal sosial.

## Sitemap

```text
/
├── /tentang
│   ├── /tentang/sejarah
│   ├── /tentang/legalitas
│   ├── /tentang/struktur
│   └── /tentang/kontak-media
├── /keanggotaan
│   ├── /keanggotaan/manfaat
│   ├── /keanggotaan/persyaratan
│   ├── /keanggotaan/faq
│   └── /keanggotaan/daftar
├── /anggota
│   └── /anggota/:slug
├── /program
│   ├── /program/fwp
│   ├── /program/anggota
│   └── /program/:slug
├── /dampak
│   └── /dampak/:slug
├── /kemitraan
│   ├── /kemitraan/model-kolaborasi
│   └── /kemitraan/ajukan
├── /berita
│   └── /berita/:slug
├── /agenda
│   └── /agenda/:slug
├── /publikasi
│   └── /publikasi/:slug
└── /transparansi
```

## Route Lama dan Tujuan Baru

| Route lama | Route baru | Perlakuan |
|---|---|---|
| `/tentang-kami` | `/tentang` | 301 |
| `/tentang-kami/sejarah` | `/tentang/sejarah` | 301 |
| `/tentang-kami/legalitas` | `/tentang/legalitas` | 301 |
| `/tentang-kami/struktur` | `/tentang/struktur` | 301 |
| `/daftar-anggota` | `/keanggotaan/daftar` | 301 |
| `/pusat-nazhir` | `/anggota` | 301 |
| `/inspirasi-studi-kasus` | `/dampak` | 301 |
| `/layanan-bisnis` | `/kemitraan` | 301 |
| `/publikasi/:slug` | `/berita/:slug` atau `/publikasi/:slug` sesuai tipe | mapping |
| `/waqf-leaders-summit` | `/agenda/waqf-leaders-summit-2026` | 301 |
| `/wls2026` | `/agenda/waqf-leaders-summit-2026` | 301 |
| `/proposal-wls2026` | arsip internal/tidak diindeks | hapus dari publik |

Catatan: route lama dipertahankan selama migrasi. Perubahan URL dilakukan setelah halaman pengganti siap, bukan sekaligus.

## Content Ownership Matrix

| Konten | Halaman pemilik | Homepage | Halaman lain |
|---|---|---|---|
| Deskripsi singkat FWP | Homepage | 1–2 kalimat | Tentang memuat versi lengkap |
| Visi dan misi | Tentang | Tidak | Teaser maksimum satu kalimat bila perlu |
| Sejarah | Tentang/Sejarah | Tidak | Tautan saja |
| Legalitas | Tentang/Legalitas | Badge “Badan hukum resmi” tanpa nomor | Nomor dan dokumen hanya di Legalitas |
| Struktur/pengurus | Tentang/Struktur | Tidak | Tentang menampilkan teaser maksimal 3 nama bila diperlukan |
| Jumlah anggota | Direktori Anggota | Satu angka sebagai proof | Tentang boleh menampilkan angka, tanpa daftar |
| Daftar anggota | Direktori Anggota | Maksimal logo/teaser terkurasi | Tidak disalin ke Tentang |
| Jenis dan iuran anggota | Keanggotaan | Teaser manfaat | Detail hanya di Keanggotaan |
| Program strategis FWP | Program/FWP | Maksimal 3 fokus | Detail hanya di Program |
| Program lembaga anggota | Program/Anggota | Maksimal 3 unggulan | Direktori hanya menautkan program lembaga |
| Dampak/studi kasus | Dampak | Maksimal 2 cerita | Program menautkan bukti dampak |
| Data wakaf nasional | Publikasi/data | Satu insight bersumber | Jangan disebut “live” tanpa backend |
| Berita | Berita | 3 terbaru | Tidak disalin sebagai konten statis |
| Agenda | Agenda | 1 agenda terdekat | Berita dapat menautkan agenda |
| Mitra | Kemitraan | Logo terpilih | Daftar/kategori lengkap di Kemitraan |
| Kontak | Tentang/Kontak | CTA singkat | Footer global memuat kontak dasar |
| Dokumen/laporan | Transparansi/Publikasi | Tidak | Hanya teaser bila relevan |

## Aturan Anti-Bentrok

1. Homepage menggunakan data reference, bukan copy panjang dari halaman tujuan.
2. Maksimal satu section teaser per domain konten.
3. Teaser homepage: judul, satu kalimat, maksimal tiga item, satu CTA.
4. Detail data hanya hidup pada route pemilik.
5. Konten terstruktur menggunakan satu source file/collection.
6. Setiap perubahan data dilakukan pada source utama; seluruh teaser membaca source yang sama.
7. Audit duplikasi dilakukan sebelum release dengan pencarian frasa dan review sitemap.

## Navigasi Mobile

```text
Tentang
Keanggotaan
Program & Dampak
Kemitraan
Berita & Agenda
Direktori Anggota
[Daftar Anggota]
```

Submenu tampil pada halaman landing masing-masing, bukan dropdown bertingkat panjang pada mobile.
