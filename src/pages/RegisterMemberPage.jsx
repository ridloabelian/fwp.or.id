import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 10,
  border: '1px solid #cbd5e1',
  fontSize: 14,
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: '#112e3f',
  marginBottom: 6,
};

export default function RegisterMemberPage() {
  const [formData, setFormData] = useState({
    lembaga: '',
    ketua: '',
    stbpn: '',
    hp: '',
    email: '',
    jenis: 'Anggota Biasa (Silver)',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.lembaga || !formData.ketua || !formData.hp || !formData.email) {
      setError('Mohon lengkapi semua field wajib (*).');
      return;
    }
    setError('');

    // ponytail: tanpa backend — data dikirim via WhatsApp sekretariat.
    // Upgrade path: Google Form/Sheets atau Cloudflare Pages Functions + D1.
    const waText = `Assalamualaikum wr. wb. Saya ingin mendaftar sebagai anggota Forum Wakaf Produktif.\n\n*Data Pendaftaran Anggota:*\n- Nama Lembaga: ${formData.lembaga}\n- Ketua: ${formData.ketua}\n- No. STBPN (BWI): ${formData.stbpn || '-'}\n- No. HP: ${formData.hp}\n- Email: ${formData.email}\n- Jenis Keanggotaan: ${formData.jenis}\n\nMohon informasi langkah selanjutnya. Terima kasih.`;
    const waLink = `https://wa.me/6281389667055?text=${encodeURIComponent(waText)}`;
    window.location.assign(waLink);
  };

  return (
    <div className="about-page">
      <SEO
        title="Pendaftaran Anggota FWP"
        description="Form pendaftaran awal keanggotaan lembaga Forum Wakaf Produktif."
      />

      <section className="about-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="hero-content">
            <h1>Pendaftaran Anggota</h1>
            <p className="hero-subtitle">Form data awal calon anggota lembaga FWP</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '640px' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="glass-card"
            style={{ background: 'white' }}
          >
            <p style={{ fontSize: '0.95rem', marginBottom: '24px' }}>
              Isi data awal lembaga Anda. Setelah dikirim, Anda akan diarahkan ke WhatsApp
              Sekretariat FWP untuk proses verifikasi dan instruksi pembayaran iuran.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {error && (
                <div style={{ color: '#ef4444', background: '#fef2f2', padding: 12, borderRadius: 8, fontSize: 14 }}>
                  {error}
                </div>
              )}

              <div>
                <label style={labelStyle}>Nama Lembaga *</label>
                <input
                  type="text" name="lembaga" value={formData.lembaga} onChange={handleChange}
                  placeholder="Contoh: Yayasan Wakaf Produktif Umat" required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Nama Ketua / Pimpinan Lembaga *</label>
                <input
                  type="text" name="ketua" value={formData.ketua} onChange={handleChange}
                  placeholder="Contoh: Ahmad Hidayat" required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>No. STBPN dari BWI</label>
                <input
                  type="text" name="stbpn" value={formData.stbpn} onChange={handleChange}
                  placeholder="Contoh: 3.3.00001 (kosongkan jika non-Nazhir)"
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={labelStyle}>No. HP / WhatsApp *</label>
                  <input
                    type="tel" name="hp" value={formData.hp} onChange={handleChange}
                    placeholder="08xxxxxxxxxx" required
                    style={inputStyle}
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="lembaga@email.com" required
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Jenis Keanggotaan *</label>
                <select
                  name="jenis" value={formData.jenis} onChange={handleChange}
                  style={{ ...inputStyle, background: '#fff' }}
                >
                  <option value="Anggota Biasa (Silver)">Anggota Biasa (Silver) — Rp 2.000.000</option>
                  <option value="Anggota Luar Biasa (Gold)">Anggota Luar Biasa (Gold) — Rp 2.000.000</option>
                  <option value="Anggota Kehormatan (Platinum)">Anggota Kehormatan (Platinum) — Rp 15.000.000</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: 8, padding: '14px' }}
              >
                Kirim & Lanjutkan ke WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
