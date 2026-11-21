# Portal Resmi Forum Wakaf Produktif (`fwp.or.id`)

Portal web resmi **Perkumpulan Forum Wakaf Produktif (FWP)** — wadah kolaborasi nasional bagi lembaga nazhir wakaf uang terdaftar BWI dan mitra strategis ekosistem perwakafan Indonesia.

## Arsitektur & Teknologi

- **SSR & Routing:** Astro 7 (`output: "server"`) berjalan di Cloudflare Workers (`@astrojs/cloudflare`).
- **CMS Redaksi:** **EmDash CMS** (`emdash@1.5.0` + `@emdash-cms/cloudflare@1.5.0`) untuk publikasi artikel, kategori/tag, halaman dinamis, dan media.
- **Database & Penyimpanan:**
  - Cloudflare **D1** (`DB` -> `fwp-or-id-db`) untuk konten, taksonomi, pengguna, dan pengaturan situs.
  - Cloudflare **R2** (`MEDIA` -> `fwp-or-id-media`) untuk penyimpanan foto/media unggahan redaksi.
  - Cloudflare **KV** (`SESSION`) untuk sesi login admin/pengurus, **Images** (`IMAGES`), dan **Durable Objects** (`EMDASH_ROOMS`) untuk penyuntingan kolaboratif.
- **UI & Islands:** Vanilla CSS3 custom tokens (`tokens.css`, `global.css`, `prose.css`) + React 19 islands (`NazhirDirectory`, `RegisterMemberForm`, `SummitView`, `EventLandingView`, `ProposalView`).

---

## Panduan Admin & Pengurus Mengelola Artikel (EmDash CMS)

Agar pengurus atau tim redaksi dapat mengunggah artikel baru maupun memperbarui berita secara langsung tanpa menyentuh kode:

### 1. Pengaturan Awal (Hanya Dilakukan 1 Kali oleh Super Admin)
1. Buka browser dan kunjungi **`https://fwp.or.id/admin`** (otomatis diarahkan ke Setup Wizard `/_emdash/admin/setup`).
2. Daftarkan akun Admin pertama menggunakan **Passkey** (sidik jari/FaceID/Windows Hello/perangkat pengelola sandi) dan email resmi admin.
3. Pada langkah impor data awal (*Starter / Sample Content*), **biarkan opsi seed aktif** agar 5 berita historis FWP, daftar kategori, tag, serta tim penulis awal otomatis masuk ke database D1.
4. Selesaikan wizard — Anda akan langsung masuk ke dashboard **FWP Redaksi & CMS**.

### 2. Mengundang Anggota Pengurus / Tim Redaksi
1. Di dalam dashboard **`https://fwp.or.id/admin`**, buka menu **Users / Pengaturan Pengguna**.
2. Klik **Invite User**, masukkan nama dan email pengurus terkait, lalu pilih peran:
   - **Editor:** dapat membuat, menyunting, menjadwalkan, dan mempublikasikan semua artikel serta mengelola media.
   - **Author:** dapat menulis draf, mengunggah gambar, dan mengelola artikel miliknya sendiri.
3. Pengurus penerima undangan cukup membuka tautan undangan tersebut dan mengaktifkan **Passkey** di perangkat masing-masing.

### 3. Mengunggah & Mempublikasikan Artikel Baru
1. Buka dashboard `/admin` -> pilih koleksi **Berita & Artikel**.
2. Klik **New Artikel** lalu lengkapi kolom redaksi:
   - **Judul Artikel:** judul utama berita/rilis. Slug URL (`/berita/{slug}`) terbentuk otomatis atau dapat disesuaikan.
   - **Foto Utama:** unggah gambar sampul (tersimpan otomatis ke Cloudflare R2) serta isi teks alternatif (`alt`) untuk aksesibilitas dan SEO.
   - **Ringkasan Singkat:** cuplikan 1–2 kalimat yang tampil pada kartu beranda, daftar `/berita`, dan meta deskripsi.
   - **Tanggal Tayang & Kota/Lokasi:** tanggal rilis berita dan lokasi kegiatan (mis. `Jakarta` atau `Bandung`).
   - **Kategori & Tag:** pilih kategori utama (`Kegiatan & Konsolidasi`, `Siaran Pers`, `Event & Summit`, `Sinergi & Kemitraan`, `Opini & Edukasi`) dan tag terkait.
   - **Isi Artikel:** editor blok teks kaya (*Portable Text*) yang mendukung subjudul (`H2`/`H3`), kutipan tokoh (*blockquote*), tautan, daftar poin, maupun gambar sisipan.
   - **Liputan Media Terkait (opsional):** tambahkan daftar nama media dan tautan berita eksternal apabila kegiatan diliput media massa.
3. Klik **Preview** untuk meninjau tampilan persisnya sebelum terbit, atau klik **Publish** agar artikel langsung tampil di halaman utama, `/berita`, serta indeks `/sitemap.xml`.

---

## Pengembangan Lokal

Salin `.dev.vars` (berisi `EMDASH_ENCRYPTION_KEY` lokal) lalu jalankan:

```bash
npm install
npx emdash seed seed/seed.json --validate
npm run dev
```

Pengujian build produksi & lint:

```bash
npm run lint
npm run typecheck
npm run build
```
