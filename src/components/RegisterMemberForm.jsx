import { useState } from 'react';

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 10,
  border: '1px solid #cbd5e1',
  fontSize: 14,
  outline: 'none',
  background: '#fff',
  color: '#132c3f',
};

const labelStyle = {
  display: 'block',
  fontSize: 13,
  fontWeight: 700,
  color: '#132c3f',
  marginBottom: 6,
};

const TIER_OPTIONS = [
  'Anggota Biasa (Silver)',
  'Anggota Luar Biasa (Gold)',
  'Anggota Kehormatan (Platinum)',
];

export default function RegisterMemberForm({ defaultTier }) {
  const initialTier = TIER_OPTIONS.includes(defaultTier) ? defaultTier : 'Anggota Biasa (Silver)';
  const [formData, setFormData] = useState({
    lembaga: '',
    ketua: '',
    stbpn: '',
    wilayah: '',
    hp: '',
    email: '',
    jenis: initialTier,
    consent: true,
  });
  const [error, setError] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.lembaga.trim() || !formData.ketua.trim() || !formData.hp.trim() || !formData.email.trim()) {
      setError('Mohon lengkapi semua kolom wajib (*).');
      return;
    }
    if (!formData.consent) {
      setError('Mohon centang pernyataan kebenaran data sebelum melanjutkan.');
      return;
    }
    setError('');

    const waText = [
      'Assalamualaikum wr. wb. Kami ingin mengajukan pendaftaran keanggotaan lembaga di Forum Wakaf Produktif.',
      '',
      '*Data Pendaftaran Lembaga:*',
      `- Nama Lembaga: ${formData.lembaga.trim()}`,
      `- Nama Ketua / Pimpinan: ${formData.ketua.trim()}`,
      `- Wilayah / Provinsi: ${formData.wilayah.trim() || '-'}`,
      `- No. STBPN (BWI): ${formData.stbpn.trim() || '-'}`,
      `- No. HP / WhatsApp: ${formData.hp.trim()}`,
      `- Email Resmi: ${formData.email.trim()}`,
      `- Kategori Keanggotaan: ${formData.jenis}`,
      '',
      'Mohon arahan verifikasi dokumen legalitas dan instruksi administrasi selanjutnya. Terima kasih.',
    ].join('\n');

    const waLink = `https://wa.me/6281389667055?text=${encodeURIComponent(waText)}`;
    setSubmittedUrl(waLink);
    window.location.assign(waLink);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {error && (
        <div role="alert" style={{ color: '#991b1b', background: '#fef2f2', border: '1px solid #fecaca', padding: 12, borderRadius: 10, fontSize: 14, fontWeight: 600 }}>
          {error}
        </div>
      )}

      {submittedUrl && (
        <div style={{ color: '#166534', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: 14, borderRadius: 10, fontSize: 14 }}>
          Mengarahkan ke WhatsApp Sekretariat FWP...{' '}
          <a href={submittedUrl} style={{ fontWeight: 700, textDecoration: 'underline', color: '#14532d' }}>
            Klik di sini jika tidak otomatis terbuka
          </a>
        </div>
      )}

      <div>
        <label htmlFor="reg-lembaga" style={labelStyle}>Nama Lembaga / Yayasan *</label>
        <input
          id="reg-lembaga"
          type="text"
          name="lembaga"
          value={formData.lembaga}
          onChange={handleChange}
          placeholder="Contoh: Yayasan Wakaf Produktif Umat"
          required
          style={inputStyle}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        <div>
          <label htmlFor="reg-ketua" style={labelStyle}>Nama Ketua / Pimpinan Lembaga *</label>
          <input
            id="reg-ketua"
            type="text"
            name="ketua"
            value={formData.ketua}
            onChange={handleChange}
            placeholder="Contoh: Ahmad Hidayat"
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="reg-wilayah" style={labelStyle}>Provinsi / Kota Domisili</label>
          <input
            id="reg-wilayah"
            type="text"
            name="wilayah"
            value={formData.wilayah}
            onChange={handleChange}
            placeholder="Contoh: Jawa Barat / Bandung"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="reg-stbpn" style={labelStyle}>No. STBPN dari BWI</label>
        <input
          id="reg-stbpn"
          type="text"
          name="stbpn"
          value={formData.stbpn}
          onChange={handleChange}
          placeholder="Contoh: 3.3.00001 (kosongkan jika non-Nazhir / mitra)"
          style={inputStyle}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        <div>
          <label htmlFor="reg-hp" style={labelStyle}>No. HP / WhatsApp PIC *</label>
          <input
            id="reg-hp"
            type="tel"
            name="hp"
            value={formData.hp}
            onChange={handleChange}
            placeholder="08xxxxxxxxxx"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="reg-email" style={labelStyle}>Email Resmi Lembaga *</label>
          <input
            id="reg-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="sekretariat@lembaga.or.id"
            required
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="reg-jenis" style={labelStyle}>Kategori Keanggotaan *</label>
        <select
          id="reg-jenis"
          name="jenis"
          value={formData.jenis}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="Anggota Biasa (Silver)">Anggota Biasa (Silver) — Rp 2.000.000 / tahun</option>
          <option value="Anggota Luar Biasa (Gold)">Anggota Luar Biasa (Gold) — Rp 2.000.000 / tahun</option>
          <option value="Anggota Kehormatan (Platinum)">Anggota Kehormatan (Platinum) — Rp 15.000.000 / tahun</option>
        </select>
      </div>

      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: '#415666', cursor: 'pointer', lineHeight: 1.55 }}>
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          style={{ marginTop: 3 }}
        />
        <span>
          Saya menyatakan data lembaga di atas adalah benar dan menyetujui proses verifikasi oleh Sekretariat Forum Wakaf Produktif.
        </span>
      </label>

      <button type="submit" className="btn btn-primary" style={{ width: '100%', minHeight: 48 }}>
        Kirim Pengajuan &amp; Lanjutkan ke WhatsApp
      </button>
    </form>
  );
}
