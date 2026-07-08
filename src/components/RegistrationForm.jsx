import React, { useState } from 'react';

export default function RegistrationForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Laki-laki',
    whatsapp: '',
    domicile: '',
    institution: '',
    role: '',
    jacketSize: 'L',
    consent: true
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('');
  const [redirectCountdown, setRedirectCountdown] = useState(2);

  const entryIds = {
    name: 'entry.1672496909',
    gender: 'entry.1175715321',
    whatsapp: 'entry.911479095',
    domicile: 'entry.893346014',
    institution: 'entry.2043932791',
    role: 'entry.668571673',
    jacketSize: 'entry.1074632566',
    consent: 'entry.586153149'
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Pre-validation
    if (!formData.name || !formData.whatsapp || !formData.institution || !formData.domicile) {
      setError('Mohon lengkapi semua field wajib.');
      setLoading(false);
      return;
    }

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd1Ckr3SHKm1K8gLGqt5O4IY_P1kBo8FsdpkW-yb-k3FrbZ4g/formResponse';
    
    // Construct urlencoded payload for submission
    const urlParams = new URLSearchParams();
    urlParams.append(entryIds.name, formData.name);
    urlParams.append(entryIds.gender, formData.gender);
    urlParams.append(entryIds.whatsapp, formData.whatsapp);
    urlParams.append(entryIds.domicile, formData.domicile);
    urlParams.append(entryIds.institution, formData.institution);
    urlParams.append(entryIds.role, formData.role);
    urlParams.append(entryIds.jacketSize, formData.jacketSize);
    urlParams.append(entryIds.consent, formData.consent ? 'Ya' : 'Tidak');

    try {
      // Send background request. Note: Google Forms returns CORS error on success but request completes successfully.
      // We will perform a fetch with mode 'no-cors' so it proceeds smoothly.
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlParams.toString()
      });

      setSuccess(true);
      setLoading(false);

      // WhatsApp redirect preparation
      const waText = `Assalamualaikum wr. wb. Saya sudah melakukan pendaftaran Waqf Leaders Summit 2026.\n\n*Data Pendaftaran:*\n- Nama: ${formData.name}\n- Lembaga: ${formData.institution}\n- Jabatan: ${formData.role || '-'}\n- Domisili: ${formData.domicile}\n- No. WA: ${formData.whatsapp}\n- Ukuran Jaket: ${formData.jacketSize}\n\nMohon konfirmasi instruksi pembayaran & langkah selanjutnya. Terima kasih.`;
      const waLink = `https://wa.me/6281389667055?text=${encodeURIComponent(waText)}`;
      setRedirectUrl(waLink);

      // Avoid popup blockers: redirect in same tab instead of window.open after async delay.
      setTimeout(() => {
        window.location.assign(waLink);
      }, 1200);

    } catch (err) {
      console.error('Submit error:', err);
      setError('Terjadi kendala saat mengirim pendaftaran. Silakan coba lagi.');
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(21, 33, 43, 0.85)', zIndex: 1000,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backdropFilter: 'blur(8px)', padding: 16, overflowY: 'auto'
    }}>
      <div style={{
        background: '#fff', borderRadius: 24, width: '100%', maxWidth: 540,
        padding: '36px 32px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        position: 'relative', border: '1px solid rgba(255,255,255,0.1)'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute', top: 20, right: 20, border: 'none', background: 'none',
            fontSize: 24, cursor: 'pointer', color: '#64748b'
          }}
        >
          &times;
        </button>

        <h3 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700,
          color: '#112e3f', marginTop: 0, marginBottom: 8
        }}>
          Pendaftaran WLS 2026
        </h3>
        <p style={{ color: '#64748b', fontSize: 14, marginTop: 0, marginBottom: 24 }}>
          Silakan isi data perwakilan lembaga Anda. Setelah kirim, Anda akan diarahkan ke WhatsApp Sekretariat.
        </p>

        {success ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: 48, color: '#16aeca', marginBottom: 16 }}>✓</div>
            <h4 style={{ margin: '0 0 8px', color: '#112e3f' }}>Pendaftaran Terkirim!</h4>
            <p style={{ color: '#64748b', fontSize: 14, margin: 0 }}>
              Mengalihkan Anda ke WhatsApp Sekretariat...
            </p>
            {redirectUrl ? (
              <a href={redirectUrl} style={{ display: 'inline-block', marginTop: 16, color: '#0f766e', fontWeight: 700, fontSize: 14 }}>
                Klik manual jika tidak otomatis terbuka
              </a>
            ) : null}
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {error && (
              <div style={{ color: '#ef4444', background: '#fef2f2', padding: 12, borderRadius: 8, fontSize: 14 }}>
                {error}
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#112e3f', marginBottom: 6 }}>
                Nama Lengkap Peserta *
              </label>
              <input 
                type="text" required name="name" value={formData.name} onChange={handleChange}
                placeholder="Contoh: Rayan Asa Luminaries"
                style={{
                  width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                  fontSize: 14, outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#112e3f', marginBottom: 6 }}>
                  Jenis Kelamin *
                </label>
                <select 
                  name="gender" value={formData.gender} onChange={handleChange}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                    fontSize: 14, background: '#fff', outline: 'none'
                  }}
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>

              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#112e3f', marginBottom: 6 }}>
                  Ukuran Jaket (Souvenir) *
                </label>
                <select 
                  name="jacketSize" value={formData.jacketSize} onChange={handleChange}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                    fontSize: 14, background: '#fff', outline: 'none'
                  }}
                >
                  {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map(sz => (
                    <option key={sz} value={sz}>{sz}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#112e3f', marginBottom: 6 }}>
                  No. WhatsApp Aktif *
                </label>
                <input 
                  type="tel" required name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                    fontSize: 14, outline: 'none'
                  }}
                />
              </div>
              
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#112e3f', marginBottom: 6 }}>
                  Kota Domisili *
                </label>
                <input 
                  type="text" required name="domicile" value={formData.domicile} onChange={handleChange}
                  placeholder="Contoh: Bandung"
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                    fontSize: 14, outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#112e3f', marginBottom: 6 }}>
                  Asal Lembaga/Institusi *
                </label>
                <input 
                  type="text" required name="institution" value={formData.institution} onChange={handleChange}
                  placeholder="Contoh: Yayasan Wakaf Salman"
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                    fontSize: 14, outline: 'none'
                  }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#112e3f', marginBottom: 6 }}>
                  Jabatan *
                </label>
                <input 
                  type="text" required name="role" value={formData.role} onChange={handleChange}
                  placeholder="Contoh: Direktur Utama"
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                    fontSize: 14, outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 8 }}>
              <input 
                type="checkbox" required name="consent" checked={formData.consent} onChange={handleChange}
                id="consent-check"
                style={{ marginTop: 3 }}
              />
              <label htmlFor="consent-check" style={{ fontSize: 12, color: '#64748b', cursor: 'pointer' }}>
                Saya menyatakan data yang saya kirim sudah benar dan valid.
              </label>
            </div>

            <button 
              type="submit" disabled={loading}
              style={{
                background: 'linear-gradient(135deg, #112e3f, #1e4d69)', color: '#fff',
                padding: '14px', borderRadius: 12, border: 'none', fontSize: 15, fontWeight: 700,
                cursor: 'pointer', marginTop: 12, transition: 'all 0.2s',
                boxShadow: '0 4px 12px rgba(17,46,63,0.15)'
              }}
            >
              {loading ? 'Mengirim...' : 'Kirim & Lanjutkan ke WA'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
