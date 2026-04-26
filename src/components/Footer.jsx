import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="kontak">
      <div className="container grid-4">
        <div>
          <div className="nav-brand" style={{ color: 'white', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'white', padding: '6px', borderRadius: '8px', display: 'flex' }}>
              <img src="/logo.png" alt="FWP Logo" style={{ height: '32px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Forum Wakaf Produktif</span>
          </div>
          <p>
            Forum Wakaf Produktif adalah wadah sinergi dan kolaborasi antar Lembaga Nazhir untuk memajukan ekosistem wakaf produktif di Indonesia.
          </p>
        </div>

        <div>
          <h3>Tautan Cepat</h3>
          <ul className="footer-links">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/tentang-kami">Tentang Kami</Link></li>
            <li><Link to="/program">Program & Kegiatan</Link></li>
            <li><Link to="/pusat-nazhir">Daftar Lembaga Nazhir</Link></li>
          </ul>
        </div>

        <div>
          <h3>Kontak Kami</h3>
          <ul className="footer-links">
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <MapPin size={18} color="var(--secondary-color)" />
              <span>Gedung BWI Jakarta, Indonesia</span>
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Mail size={18} color="var(--secondary-color)" />
              <span>halo@fwp.or.id</span>
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Phone size={18} color="var(--secondary-color)" />
              <span>+62 811 2233 4455</span>
            </li>
          </ul>
        </div>

        <div>
          <h3>Mari Berkolaborasi</h3>
          <p>Dukung pertumbuhan ekonomi umat melalui wakaf produktif bersama Lembaga Nazhir terpercaya di seluruh Indonesia.</p>
          <a href="mailto:halo@fwp.or.id" className="btn btn-secondary" style={{ marginTop: '16px' }}>Kirim Pesan</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Forum Wakaf Produktif Indonesia. Seluruh hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
