import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const groups = [
  ['Organisasi', [['Tentang','/tentang-kami'],['Sejarah','/tentang-kami/sejarah'],['Legalitas','/tentang-kami/legalitas'],['Struktur','/tentang-kami/struktur']]],
  ['Ekosistem', [['Keanggotaan','/keanggotaan'],['Direktori Anggota','/pusat-nazhir'],['Program & Dampak','/program'],['Kemitraan','/layanan-bisnis']]],
  ['Informasi', [['Berita & Agenda','/berita'],['Inspirasi','/inspirasi-studi-kasus'],['Transparansi','/transparansi']]],
];

export default function FooterV2(){return <footer className="v2-footer"><div className="container v2-footer-grid"><div className="v2-footer-brand"><img src="/logo.png" alt="Forum Wakaf Produktif"/><p>Wadah kolaborasi lembaga untuk memperbesar dampak wakaf produktif Indonesia.</p><a href="mailto:fwpsekretariat@gmail.com"><Mail size={17}/>fwpsekretariat@gmail.com</a><a href="tel:+6281389667055"><Phone size={17}/>0813 8966 7055</a></div>{groups.map(([title,links])=><div key={title}><h3>{title}</h3>{links.map(([label,to])=><Link key={to} to={to}>{label}</Link>)}</div>)}</div><div className="container v2-footer-bottom"><span>© {new Date().getFullYear()} Forum Wakaf Produktif</span><a href="https://www.instagram.com/forumwakafproduktif" target="_blank" rel="noreferrer">@forumwakafproduktif</a></div></footer>}
