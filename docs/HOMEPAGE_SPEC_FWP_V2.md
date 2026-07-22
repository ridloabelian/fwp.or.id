# Homepage Specification — fwp.or.id V2

## Tugas Homepage

Dalam 10 detik, pengunjung harus memahami:

1. FWP itu apa?
2. FWP melayani siapa?
3. Mengapa FWP kredibel?
4. Apa yang dapat dilakukan pengunjung?

Homepage tidak menjelaskan seluruh organisasi. Homepage memandu pengguna ke halaman pemilik konten.

## Pesan Inti

### Positioning

**Kolaborasi lembaga untuk memperbesar dampak wakaf produktif Indonesia.**

### Supporting copy

Forum Wakaf Produktif menghubungkan lembaga nazhir, regulator, mitra industri, akademisi, dan masyarakat untuk memperkuat kapasitas, mengembangkan aset produktif, dan menghadirkan manfaat wakaf yang berkelanjutan.

### CTA utama

**Jelajahi Keanggotaan** → `/keanggotaan`

### CTA sekunder

**Jalin Kemitraan** → `/kemitraan`

CTA “Tunaikan Wakaf” tidak menjadi CTA utama portal FWP karena FWP adalah forum lembaga. Jika dipakai, tempatkan pada direktori program anggota dengan konteks jelas.

## Urutan Section

### 1. Hero

**Tujuan:** positioning dan dua jalur utama.

Isi:
- Eyebrow: `Forum Wakaf Produktif`
- H1: `Kolaborasi lembaga untuk memperbesar dampak wakaf produktif Indonesia.`
- Supporting copy maksimal 35 kata.
- CTA: Jelajahi Keanggotaan, Jalin Kemitraan.
- Visual: jaringan kolaborasi abstrak atau dokumentasi nyata lembaga; hindari floating cards generik.

Tidak boleh ada:
- Sejarah peluncuran panjang.
- Daftar pengurus.
- Nomor legalitas.
- Chart.

### 2. Trust Strip

**Tujuan:** membuktikan kredibilitas secara cepat.

Isi maksimal tiga indikator:
- `49 lembaga tercatat` — pembaruan Juli 2026.
- `Sejak 2016` — kiprah kolaborasi.
- `Badan hukum resmi` — CTA ke Legalitas.

Sumber dan tanggal pembaruan ditampilkan kecil. Jangan menulis “anggota aktif resmi” bila status dokumennya hanya daftar peserta/pembaruan yang belum dikonfirmasi sebagai registry keanggotaan.

### 3. Peran FWP

**Tujuan:** menjelaskan fungsi, bukan seluruh program.

Tiga pilar:
1. Penguatan kapasitas nazhir.
2. Kolaborasi dan kemitraan strategis.
3. Inovasi aset wakaf produktif.

Masing-masing: satu judul, maksimal 20 kata, CTA tunggal ke Program.

### 4. Jalur Pengguna

**Tujuan:** mengurangi kebingungan audiens.

Tiga kartu:
- Untuk Lembaga Nazhir → Keanggotaan.
- Untuk Mitra Strategis → Kemitraan.
- Untuk Masyarakat/Wakif → Direktori Program.

Kartu menyatakan hasil yang didapat, bukan fitur situs.

### 5. Dampak Terpilih

**Tujuan:** bukti kerja.

Maksimal dua studi kasus yang memiliki:
- foto nyata,
- lembaga pelaksana,
- outcome terverifikasi,
- periode/sumber,
- CTA ke detail.

Jika bukti belum siap, section tidak ditampilkan. Jangan mengganti dengan klaim generik.

### 6. Direktori Anggota

**Tujuan:** menunjukkan kekuatan jaringan tanpa menyalin daftar.

Isi:
- Judul: `Jaringan lembaga wakaf produktif`.
- 6 logo atau nama anggota terpilih secara rotasi/kurasi.
- CTA: `Lihat Direktori Anggota`.

Tidak boleh memuat tabel atau 49 kartu.

### 7. Berita & Agenda

**Tujuan:** menunjukkan organisasi aktif.

Isi dinamis:
- 3 berita terbaru.
- 1 agenda terdekat, jika ada.
- Bila agenda selesai, tampilkan materi/dokumentasi dengan label arsip.

### 8. CTA Penutup

Judul: `Tumbuh bersama dalam ekosistem wakaf produktif.`

CTA:
- Daftar Keanggotaan.
- Ajukan Kemitraan.

### 9. Footer

Empat kolom:
- Organisasi: Tentang, Sejarah, Legalitas, Struktur.
- Ekosistem: Keanggotaan, Direktori, Program, Kemitraan.
- Informasi: Berita, Agenda, Publikasi, Transparansi.
- Kontak: telepon, email, sosial.

## Wireframe Tekstual

```text
[NAVBAR]
Logo | Tentang | Keanggotaan | Program & Dampak | Kemitraan | Berita & Agenda | Direktori | [Daftar]

[HERO]
Eyebrow
H1 positioning
Supporting copy
[Keanggotaan] [Kemitraan]
Visual kredibel

[TRUST STRIP]
49 lembaga | sejak 2016 | badan hukum resmi

[PERAN FWP]
3 pilar + CTA Program

[JALUR PENGGUNA]
Nazhir | Mitra | Masyarakat

[DAMPAK]
2 studi kasus terverifikasi — conditional

[JARINGAN ANGGOTA]
6 anggota terpilih + CTA direktori

[BERITA & AGENDA]
3 berita + 1 agenda

[FINAL CTA]
Daftar | Bermitra

[FOOTER]
```

## Visual Direction

- Karakter: institusional, modern, hangat, amanah.
- Background dominan warm white.
- Navy untuk kredibilitas; hijau untuk aksi; cyan sebagai aksen kecil.
- Headline kuat; body maksimal 680px.
- Radius sedang 12–20px; shadow sangat tipis.
- Fotografi nyata lebih utama daripada ilustrasi generik.
- Tanpa glassmorphism berlebihan.
- Tanpa animasi looping pada hero.
- Motion hanya reveal ringan dan hover state; hormati `prefers-reduced-motion`.

## Responsive

### Mobile
- Navbar ringkas + CTA.
- H1 40–48px.
- CTA full-width.
- Trust strip menjadi tiga baris/grid.
- Semua grid menjadi satu kolom.
- Berita horizontal scroll boleh digunakan bila aksesibel.

### Desktop
- Hero dua kolom 55/45.
- Max content width 1180px.
- Section rhythm 96–120px.

## Content Limits

| Elemen | Batas |
|---|---|
| H1 | 8–12 kata |
| Hero supporting copy | 35 kata |
| Section intro | 25 kata |
| Card description | 20 kata |
| Homepage stats | 3 |
| Program pillars | 3 |
| Member logos | 6 |
| Stories | 2 |
| News | 3 |
| Primary CTAs per section | 1 |

## Acceptance Criteria

- Tidak ada visi-misi lengkap, timeline, struktur, atau daftar anggota penuh.
- Tidak ada paragraf substantif yang identik dengan halaman Tentang.
- Setiap section memiliki satu pemilik konten dan satu CTA tujuan.
- Semua angka memiliki sumber/tanggal.
- Hero terlihat pada first paint tanpa menunggu Framer Motion.
- Tidak ada horizontal overflow pada 360px.
- Keyboard focus terlihat.
- Homepage lulus build, route direct-load, screenshot desktop/mobile, dan audit Lighthouse.
- Link utama membawa pengguna ke halaman tujuan yang benar, bukan route generik.
