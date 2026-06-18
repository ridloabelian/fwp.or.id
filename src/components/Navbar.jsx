import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

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
            <img src="/logo.png" alt="FWP Logo" style={{ height: '40px', objectFit: 'contain', borderRadius: '8px' }} onError={(e) => { e.target.style.display = 'none'; }} />
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isChildActive = link.dropdown.some(child => location.pathname === child.path);
                return (
                  <li key={link.id} className="dropdown">
                    <span className={`dropdown-toggle ${isChildActive ? 'active' : ''}`}>
                      {link.label} <ChevronDown size={14} style={{ marginLeft: 4 }} />
                    </span>
                    <ul className="dropdown-menu">
                      {link.dropdown.map(child => (
                        <li key={child.id}>
                          <Link to={child.path} className={location.pathname === child.path ? 'active' : ''}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              const isActive = location.pathname === link.path;
              return (
                <li key={link.id}>
                  <Link to={link.path} className={isActive ? 'active' : ''}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
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
          style={{ position: 'fixed', top: '80px', left: 0, right: 0, background: 'rgba(255, 255, 255, 0.98)', borderBottom: '1px solid #eee', padding: '20px', zIndex: 999, boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
        >
          {navLinks.map((link, index) => {
            const isLast = index === navLinks.length - 1;
            
            if (link.dropdown) {
              const isChildActive = link.dropdown.some(child => location.pathname === child.path);
              return (
                <div key={link.id} style={{ display: 'flex', flexDirection: 'column', borderBottom: isLast ? 'none' : '1px solid #f0f0f0' }}>
                  <button 
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: 'none', border: 'none', width: '100%', padding: '10px 0',
                      fontSize: '1.1rem', fontWeight: isChildActive ? 700 : 500,
                      color: isChildActive ? 'var(--primary-color)' : 'var(--text-main)',
                      cursor: 'pointer', textAlign: 'left'
                    }}
                  >
                    <span>{link.label}</span>
                    {mobileDropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {mobileDropdownOpen && (
                    <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '2px solid var(--secondary-color)', marginTop: '4px', marginBottom: '12px' }}>
                      {link.dropdown.map(child => (
                        <Link 
                          key={child.id}
                          to={child.path}
                          onClick={() => { setMobileOpen(false); setMobileDropdownOpen(false); }}
                          style={{
                            fontSize: '1rem',
                            fontWeight: location.pathname === child.path ? 700 : 500,
                            color: location.pathname === child.path ? 'var(--primary-color)' : 'var(--text-muted)',
                            padding: '8px 0'
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.id}
                to={link.path} 
                onClick={() => setMobileOpen(false)} 
                style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: isActive ? 700 : 500, 
                  color: isActive ? 'var(--primary-color)' : 'var(--text-main)',
                  padding: '10px 0', 
                  borderBottom: isLast ? 'none' : '1px solid #f0f0f0' 
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
