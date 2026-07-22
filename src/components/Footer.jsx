import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/navigation';

const Footer = () => {
  return (
    <footer className="footer" id="kontak" style={{ background: 'var(--primary-color)', color: 'var(--text-light)', paddingTop: '64px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
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
          <h3 style={{ color: 'var(--secondary-color)', marginBottom: '20px' }}>Tautan Cepat</h3>
          <ul className="footer-links" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.dropdown ? link.dropdown[0].path : link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ color: 'var(--secondary-color)', marginBottom: '20px' }}>Sekretariat FWP</h3>
          <ul className="footer-links">
            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <MapPin size={18} color="var(--secondary-color)" style={{ marginTop: '4px', flexShrink: 0 }} />
              <span style={{ lineHeight: '1.4' }}>Komplek Masjid Agung Al Azhar<br />Jl. Sisingamangaraja, Kebayoran Baru<br />Jakarta Selatan, 12110</span>
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '8px' }}>
              <Mail size={18} color="var(--secondary-color)" />
              <span>fwpsekretariat@gmail.com</span>
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '8px' }}>
              <Phone size={18} color="var(--secondary-color)" />
              <span>0813 8966 7055</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: 'var(--secondary-color)', marginBottom: '20px' }}>Mari Berkolaborasi</h3>
          <p>Dukung pertumbuhan ekonomi umat melalui wakaf produktif bersama Lembaga Nazhir terpercaya di seluruh Indonesia.</p>
          <a href="mailto:fwpsekretariat@gmail.com" className="btn btn-secondary" style={{ marginTop: '16px' }}>Kirim Pesan</a>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a
              href="https://www.instagram.com/forumwakafproduktif"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @forumwakafproduktif
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom" style={{ marginTop: '48px', padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
        <p>&copy; {new Date().getFullYear()} Forum Wakaf Produktif. Seluruh hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
