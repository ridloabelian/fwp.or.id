# Draft Kebijakan Keanggotaan Forum Wakaf Produktif

**Status:** Draf untuk keputusan pengurus  
**Tujuan:** Menjadi dasar operasional Member Registry FWP. Butir bertanda **[PUTUSKAN]** belum boleh dianggap kebijakan resmi.

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
- Usulan iuran: Rp2.000.000. **[PUTUSKAN: tahunan/sekali bayar]**

### Gold — Anggota Luar Biasa

- Memiliki izin Nazhir Wakaf Uang yang valid.
- Memiliki aset kelolaan minimal Rp2.000.000.000 yang dapat diverifikasi.
- Usulan iuran: Rp2.000.000. **[PUTUSKAN: tahunan/sekali bayar]**

### Platinum — Anggota Kehormatan

- Ditujukan bagi lembaga non-Nazhir/mitra strategis.
- Usulan kontribusi: Rp15.000.000. **[PUTUSKAN: tahunan/sekali bayar]**
- Mekanisme: **[PUTUSKAN: pendaftaran/undangan pengurus]**

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
3. Pengurus berwenang menyetujui/menolak. **[PUTUSKAN: jabatan/kuorum]**
4. Sistem menerbitkan tagihan bila berlaku.
5. Keanggotaan aktif setelah pembayaran/waiver diverifikasi.
6. Perubahan tier mengikuti proses review baru.

## 7. Masa Berlaku

- Masa keanggotaan: **[PUTUSKAN]**
- Grace period: **[PUTUSKAN]**
- Jadwal review data: minimal tahunan.
- Konsekuensi tunggakan: **[PUTUSKAN]**

## 8. Nomor Anggota

Usulan format: `FWP-{TAHUN}-{NOMOR_URUT}`.  
Contoh: `FWP-2026-0001`. **[PUTUSKAN]**

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
| 1 | Definisi anggota aktif | Approved + kewajiban administrasi selesai | |
| 2 | Iuran Silver | Rp2 juta; tahunan/sekali | |
| 3 | Iuran Gold | Rp2 juta; tahunan/sekali | |
| 4 | Kontribusi Platinum | Rp15 juta; tahunan/sekali | |
| 5 | Masa berlaku | Rekomendasi 1 tahun | |
| 6 | Grace period | Rekomendasi 30 hari | |
| 7 | Verifikator | Sekretariat + reviewer | |
| 8 | Approver | Ketua/pengurus/rapat | |
| 9 | Bukti aset Gold | Laporan audit/laporan keuangan/pernyataan | |
| 10 | Mekanisme Platinum | Undangan pengurus | |
| 11 | Nomor anggota | `FWP-YYYY-NNNN` | |
| 12 | Data direktori publik | Sesuai Bagian 9 | |
| 13 | Status 49 lembaga | Rekonsiliasi satu per satu | |

## 12. Pengesahan

Dokumen ini menjadi kebijakan efektif setelah tanggal, nomor keputusan, dan pihak berwenang dicantumkan.

- Nomor keputusan: ____________________
- Tanggal berlaku: ____________________
- Disahkan oleh: ____________________
- Tanda tangan: ____________________
