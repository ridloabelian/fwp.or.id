# Draft Kebijakan Keanggotaan Forum Wakaf Produktif

**Status:** Kebijakan kerja sementara, versi 0.1
**Tujuan:** Menjadi dasar pembangunan dan operasional awal Member Registry FWP. Pengurus dapat merevisi kebijakan melalui versi baru tanpa mengubah histori transaksi dan keanggotaan.

## 1. Prinsip

1. Keanggotaan melekat pada **lembaga**, bukan individu.
2. Peserta kegiatan/pelatihan tidak otomatis menjadi anggota.
3. Status anggota hanya aktif setelah verifikasi, persetujuan, dan kewajiban administrasi terpenuhi.
4. Setiap perubahan status wajib tercatat dalam audit log.
5. Data publik dibatasi berdasarkan persetujuan lembaga dan prinsip perlindungan data.

## 2. Kategori

### Silver — Anggota Biasa

- Lembaga Nazhir.
- Memiliki izin Nazhir Wakaf Uang yang valid.
- Iuran: Rp2.000.000 per tahun.

### Gold — Anggota Luar Biasa

- Memiliki izin Nazhir Wakaf Uang yang valid.
- Memiliki aset kelolaan minimal Rp2.000.000.000 yang dapat diverifikasi.
- Iuran: Rp2.000.000 per tahun.

### Platinum — Anggota Kehormatan

- Ditujukan bagi lembaga non-Nazhir/mitra strategis.
- Kontribusi: Rp15.000.000 per tahun.
- Mekanisme: undangan atau nominasi pengurus; bukan pendaftaran mandiri otomatis.

## 3. Lifecycle

`lead → applicant → under_review → approved → pending_activation → active → grace_period → inactive`

Status alternatif: `rejected`, `withdrawn`, `suspended`, `resigned`, `terminated`, `honorary`.

## 4. Definisi Status

- **Lead:** data kontak/kegiatan; belum mendaftar.
- **Applicant:** lembaga sudah mengajukan keanggotaan.
- **Approved:** pengajuan disetujui, belum aktif.
- **Active:** seluruh syarat aktivasi terpenuhi.
- **Grace period:** masa tenggang pembaruan/kewajiban.
- **Suspended:** hak anggota ditangguhkan melalui keputusan berwenang.
- **Inactive:** masa keanggotaan berakhir/tidak diperbarui.

## 5. Persyaratan Minimum

- Nama legal dan nama publik lembaga.
- Alamat, wilayah, email, nomor telepon.
- Nama dan jabatan penanggung jawab.
- STBPN.
- Izin Nazhir Wakaf Uang bila dipersyaratkan tier.
- Dokumen badan hukum.
- Bukti aset kelolaan untuk Gold.
- Pernyataan kebenaran data dan persetujuan publikasi.

## 6. Verifikasi dan Persetujuan

1. Sekretariat memeriksa kelengkapan.
2. Reviewer memverifikasi legalitas dan dokumen.
3. Persetujuan membutuhkan Ketua dan minimal satu pengurus inti lain. Bila Ketua memiliki konflik kepentingan, persetujuan dilakukan oleh dua pengurus inti lain dan dicatat dalam audit log.
4. Sistem menerbitkan tagihan bila berlaku.
5. Keanggotaan aktif setelah pembayaran/waiver diverifikasi.
6. Perubahan tier mengikuti proses review baru.

## 7. Masa Berlaku

- Masa keanggotaan: 1 tahun sejak tanggal aktivasi.
- Grace period: 30 hari kalender setelah tanggal kedaluwarsa.
- Jadwal review data: minimal tahunan.
- Konsekuensi tunggakan: status menjadi `grace_period`; setelah 30 hari menjadi `inactive`. Aktivasi ulang tidak menghapus histori.

## 8. Nomor Anggota

Format: `FWP-{TAHUN_AKTIVASI}-{NOMOR_URUT}`.
Contoh: `FWP-2026-0001`.

Nomor tidak dipakai ulang walau keanggotaan berakhir.

## 9. Data Publik

Boleh dipublikasikan bila terverifikasi dan disetujui:

- Nama publik, logo, kota/provinsi.
- Nomor anggota dan tier.
- Website serta kanal resmi.
- Profil/program yang telah disetujui.

Tidak boleh dipublikasikan:

- Nomor pribadi, email pribadi.
- Dokumen legal mentah.
- Catatan review, data penolakan.
- Nilai aset rinci tanpa persetujuan.
- Riwayat pembayaran.

## 10. Status Data 49 Lembaga

Seluruh 49 entri saat ini diimpor sebagai:

- `source = pelatihan_juli_2026`
- `verification_status = unverified`
- `membership_status = unknown`

Tidak boleh otomatis ditandai `active` sebelum rekonsiliasi dengan keputusan/arsip resmi FWP.

## 11. Matriks Keputusan Pengurus

| No | Keputusan | Opsi/Rekomendasi | Keputusan Final |
|---:|---|---|---|
| 1 | Definisi anggota aktif | Approved + kewajiban administrasi selesai | Ditetapkan sementara |
| 2 | Iuran Silver | Rp2 juta per tahun | Ditetapkan sementara |
| 3 | Iuran Gold | Rp2 juta per tahun | Ditetapkan sementara |
| 4 | Kontribusi Platinum | Rp15 juta per tahun | Ditetapkan sementara |
| 5 | Masa berlaku | 1 tahun sejak aktivasi | Ditetapkan sementara |
| 6 | Grace period | 30 hari kalender | Ditetapkan sementara |
| 7 | Verifikator | Sekretariat + reviewer yang ditunjuk | Ditetapkan sementara |
| 8 | Approver | Ketua + satu pengurus inti | Ditetapkan sementara |
| 9 | Bukti aset Gold | Laporan keuangan terbaru; laporan audit bila tersedia; surat pernyataan pimpinan sebagai pendamping | Ditetapkan sementara |
| 10 | Mekanisme Platinum | Undangan/nominasi pengurus | Ditetapkan sementara |
| 11 | Nomor anggota | `FWP-YYYY-NNNN` | Ditetapkan sementara |
| 12 | Data direktori publik | Sesuai Bagian 9 + consent lembaga | Ditetapkan sementara |
| 13 | Status 49 lembaga | Rekonsiliasi satu per satu; bukan anggota aktif otomatis | Ditetapkan sementara |

## 12. Versioning Kebijakan

1. Perubahan iuran, syarat, masa berlaku, dan manfaat menghasilkan versi kebijakan baru dengan tanggal efektif.
2. Membership aktif mengikuti versi saat aktivasi sampai perpanjangan berikutnya, kecuali keputusan pengurus menyatakan lain.
3. Tier tidak diedit destruktif; versi lama ditutup melalui `active_until`, lalu versi baru dibuat.
4. Revisi tidak boleh menghapus aplikasi, pembayaran, keputusan, atau audit log historis.

## 13. Pengesahan

Dokumen ini menjadi kebijakan efektif setelah tanggal, nomor keputusan, dan pihak berwenang dicantumkan.

- Nomor keputusan: ____________________
- Tanggal berlaku: ____________________
- Disahkan oleh: ____________________
- Tanda tangan: ____________________
