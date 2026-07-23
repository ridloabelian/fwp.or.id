# PRD — FWP Member Registry

## 1. Ringkasan

Sistem administrasi keanggotaan lembaga FWP yang auditable. Registry menjadi sumber kebenaran untuk aplikasi, legalitas, status keanggotaan, dokumen, dan direktori publik.

## 2. Masalah

- Data peserta kegiatan bercampur dengan klaim anggota.
- Belum ada lifecycle approval baku.
- Legalitas, kontak, status, dan iuran sulit dilacak historinya.
- Website membaca data statis tanpa status verifikasi.
- Perubahan administratif belum memiliki audit trail.

## 3. Tujuan MVP

1. Menyimpan satu identitas canonical per lembaga.
2. Mengelola aplikasi keanggotaan dan review dokumen.
3. Mengaktifkan membership hanya melalui approval terotorisasi.
4. Menyediakan audit log yang tidak dapat diedit admin biasa.
5. Menyediakan sumber aman untuk direktori anggota aktif.

## 4. Bukan Lingkup MVP

- Payment gateway otomatis.
- CRM marketing.
- Dashboard dampak kompleks.
- Aplikasi mobile.
- Publikasi dokumen legal mentah.
- Multi-tenant billing.

## 5. Aktor

- **Applicant:** kontak lembaga yang mendaftar.
- **Organization Admin:** mengelola profil lembaga sendiri.
- **Membership Reviewer:** memeriksa legalitas/aplikasi.
- **Membership Approver:** menyetujui atau menolak.
- **Finance:** verifikasi iuran.
- **Auditor:** akses baca audit log.
- **Super Admin:** administrasi sistem; tidak boleh menghapus audit trail.
- **Public Visitor:** melihat direktori terverifikasi.

## 6. Alur MVP

1. Form membuat organisasi `draft` dan aplikasi `submitted`.
2. Sekretariat deduplikasi berdasarkan nama legal/STBPN.
3. Reviewer memeriksa kontak dan dokumen.
4. Jika kurang: status `documents_incomplete` dan catatan dikirim.
5. Approver memutuskan aplikasi.
6. Membership dibuat `pending_activation`.
7. Finance memverifikasi kewajiban atau waiver.
8. Membership menjadi `active`.
9. Bila consent publik aktif, organisasi muncul di public view.

## 7. Kebutuhan Fungsional

### Admin

- Filter organisasi berdasarkan sumber/status/wilayah.
- Lihat profil, kontak, legalitas, dokumen, aplikasi, membership.
- Review dengan alasan wajib.
- Approve/reject berbasis role.
- Aktivasi, suspend, terminate dengan catatan wajib.
- Lihat audit trail.
- Export CSV terbatas sesuai role.

### Portal Lembaga

- Login dan klaim organisasi melalui undangan.
- Edit profil sendiri.
- Kelola kontak.
- Upload dokumen.
- Ajukan tier.
- Lihat status dan catatan review.
- Kelola consent direktori publik.

### Direktori Publik

Hanya menampilkan organisasi `verified`, membership `active`, dan `public_consent = true`.

## 8. Aturan Bisnis

- Satu lembaga boleh memiliki banyak aplikasi historis.
- Maksimal satu membership berjalan per lembaga.
- Nomor membership unik dan immutable.
- Silver dan Gold dikenakan Rp2 juta per tahun; Platinum Rp15 juta per tahun.
- Membership berlaku 1 tahun dengan grace period 30 hari.
- Approval membutuhkan Ketua dan satu pengurus inti; dua approver harus berbeda.
- Platinum hanya melalui undangan atau nominasi pengurus.
- Approval dan activation harus tercatat dalam audit log.
- Reviewer tidak boleh menyetujui aplikasi miliknya sendiri bila konflik kepentingan ditandai.
- File privat hanya diakses melalui signed URL.
- Data sumber 49 lembaga dimulai `unverified/unknown`.

## 9. Data Minimum

- Organisasi: nama legal, nama publik, tipe, alamat, wilayah, kontak resmi.
- Legalitas: jenis, nomor, penerbit, tanggal, status.
- Kontak: nama, jabatan, email, telepon, primary/signatory.
- Aplikasi: tier, status, reviewer, catatan, waktu keputusan.
- Membership: nomor, tier, status, masa berlaku.
- Dokumen: tipe, object key, checksum, visibility, verification.
- Audit: actor, action, entity, before/after, waktu.

## 10. Security

- Supabase Auth + RLS.
- Organization user hanya membaca/mengubah organisasi yang ditautkan.
- Reviewer/approver memakai role di `app_users`.
- Service role tidak pernah dikirim ke browser.
- Storage bucket dokumen privat.
- PII tidak masuk analytics/log aplikasi.
- Soft-delete untuk data administratif; audit log append-only.

## 11. Non-Fungsional

- PostgreSQL migration reproducible.
- Semua timestamp `timestamptz` UTC.
- UUID untuk entity publik/internal.
- Constraint database menjadi enforcement utama.
- Backup harian dan restore test berkala sebelum production.
- Export data dan retensi mengikuti kebijakan pengurus.

## 12. KPI MVP

- 100% aplikasi memiliki status dan reviewer yang jelas.
- 100% perubahan membership tercatat di audit log.
- 0 organisasi tampil publik tanpa tiga syarat publikasi.
- Duplikasi organisasi terdeteksi sebelum approval.
- Waktu review dapat dihitung dari timestamp sistem.

## 13. Acceptance Criteria

- Migration berjalan pada PostgreSQL bersih.
- RLS mencegah user organisasi membaca organisasi lain.
- Partial unique index menolak dua membership berjalan.
- Public view tidak menampilkan PII.
- Import CSV mempertahankan source dan legacy row number.
- Approve/reject/suspend menghasilkan audit record.

## 14. Fase

1. Kebijakan dan rekonsiliasi data.
2. Schema + RLS + import staging.
3. Admin MVP.
4. Portal lembaga.
5. Direktori publik.
6. Invoice/payment/reporting setelah aturan final.

## 15. Dependency Manusia

- Pengesahan tier, iuran, masa berlaku, dan approver.
- Rekonsiliasi status 49 lembaga.
- Penetapan data publik.
- Penyediaan akun Supabase production dan kebijakan retensi.
