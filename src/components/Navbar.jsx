import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'glass-card' : ''}`} 
      style={scrolled ? { border: 'none', borderRadius: 0, padding: '0 24px' } : {}}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="nav-brand">
          {/* FWP Logo Image */}
          <img src="/logo.png" alt="FWP Logo" style={{ height: '40px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/tentang-kami">Tentang FWP</Link></li>
          <li><Link to="/program">Program</Link></li>
          <li><Link to="/pusat-nazhir">Pusat Nazhir</Link></li>
          <li><Link to="/inspirasi-studi-kasus">Inspirasi</Link></li>
          <li><Link to="/layanan-bisnis">Kemitraan Strategis</Link></li>
          <li><Link to="/transparansi">Transparansi</Link></li>
        </ul>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 1001 }}>
          {mobileOpen ? <X size={28} color="var(--primary-color)" /> : <Menu size={28} color="var(--primary-color)" />}
        </button>

        <div className="nav-actions" style={{ display: 'none' /* hidden for MVP unless needed */ }}>
          <a href="#kontak" className="btn btn-primary">Hubungi Kami</a>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Menu Overlay */}
    {mobileOpen && (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ position: 'fixed', top: '80px', left: 0, right: 0, background: 'rgba(255, 255, 255, 0.98)', borderBottom: '1px solid #eee', padding: '20px', zIndex: 999, boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <Link to="/" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>Beranda</Link>
        <Link to="/tentang-kami" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>Tentang FWP</Link>
        <Link to="/program" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>Program</Link>
        <Link to="/pusat-nazhir" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>Pusat Nazhir</Link>
        <Link to="/inspirasi-studi-kasus" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>Inspirasi</Link>
        <Link to="/layanan-bisnis" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>Kemitraan Strategis</Link>
        <Link to="/transparansi" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500, padding: '10px 0' }}>Transparansi</Link>
      </motion.div>
    )}
    </>
  );
};

export default Navbar;
