import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './V2Shell.css';

const links = [
  ['/tentang-kami', 'Tentang'],
  ['/keanggotaan', 'Keanggotaan'],
  ['/program', 'Program & Dampak'],
  ['/layanan-bisnis', 'Kemitraan'],
  ['/berita', 'Berita & Agenda'],
  ['/pusat-nazhir', 'Direktori Anggota'],
];

export default function NavbarV2() {
  const [open, setOpen] = useState(false);
  return <header className="v2-navbar">
    <div className="container v2-navbar-inner">
      <Link to="/v2-preview" aria-label="Homepage FWP V2"><img src="/logo.png" alt="Forum Wakaf Produktif" /></Link>
      <nav aria-label="Navigasi utama" className={open ? 'is-open' : ''}>
        {links.map(([to,label]) => <Link key={to} to={to} onClick={()=>setOpen(false)}>{label}</Link>)}
        <Link className="v2-nav-cta" to="/daftar-anggota" onClick={()=>setOpen(false)}>Daftar Anggota</Link>
      </nav>
      <button className="v2-menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?'Tutup menu':'Buka menu'}>{open?<X/>:<Menu/>}</button>
    </div>
  </header>;
}
