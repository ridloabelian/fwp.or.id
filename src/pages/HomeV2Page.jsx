import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Handshake, Landmark, Newspaper, ShieldCheck, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { members } from '../data/about';
import { newsList } from '../data/news';
import './HomeV2.css';

const roles = [
  { icon: Users, title: 'Penguatan Kapasitas Nazhir', text: 'Mendorong tata kelola, kompetensi, dan profesionalisme lembaga pengelola wakaf.' },
  { icon: Handshake, title: 'Kolaborasi Strategis', text: 'Mempertemukan nazhir dengan regulator, industri, akademisi, dan mitra pembangunan.' },
  { icon: Landmark, title: 'Inovasi Aset Produktif', text: 'Mengembangkan gagasan dan ekosistem agar aset wakaf memberi manfaat berkelanjutan.' },
];

const audiences = [
  { label: 'Untuk Lembaga Nazhir', title: 'Tumbuh bersama jaringan FWP', text: 'Akses jejaring, penguatan kapasitas, dan peluang kolaborasi antarlembaga.', to: '/keanggotaan', cta: 'Jelajahi Keanggotaan' },
  { label: 'Untuk Mitra Strategis', title: 'Bangun kolaborasi berdampak', text: 'Hubungkan sumber daya, keahlian, dan akses pasar dengan ekosistem nazhir.', to: '/layanan-bisnis', cta: 'Jalin Kemitraan' },
  { label: 'Untuk Masyarakat', title: 'Kenali lembaga wakaf tepercaya', text: 'Temukan lembaga dalam jaringan FWP dan pelajari kiprah wakaf produktif.', to: '/pusat-nazhir', cta: 'Lihat Direktori' },
];

export default function HomeV2Page() {
  const featuredMembers = members.slice(0, 6);
  const latestNews = newsList.slice(0, 3);

  return <div className="fwp-v2">
    <SEO title="Preview Homepage V2" description="Konsep homepage baru Forum Wakaf Produktif." />

    <section className="v2-hero">
      <div className="container v2-hero-grid">
        <div className="v2-hero-copy">
          <span className="v2-eyebrow">Forum Wakaf Produktif</span>
          <h1>Kolaborasi lembaga untuk memperbesar dampak wakaf produktif Indonesia.</h1>
          <p>FWP menghubungkan lembaga nazhir, regulator, mitra industri, akademisi, dan masyarakat untuk memperkuat kapasitas serta mengembangkan aset wakaf produktif.</p>
          <div className="v2-actions">
            <Link className="v2-btn v2-btn-primary" to="/keanggotaan">Jelajahi Keanggotaan <ArrowRight size={18}/></Link>
            <Link className="v2-btn v2-btn-secondary" to="/layanan-bisnis">Jalin Kemitraan</Link>
          </div>
        </div>
        <div className="v2-hero-photo"><img src={newsList[1]?.imageUrl} alt="Dokumentasi kolaborasi Forum Wakaf Produktif"/><span>Kolaborasi lintas lembaga untuk wakaf produktif</span></div>
      </div>
    </section>

    <section className="v2-trust"><div className="container v2-trust-grid">
      <div><strong>{members.length}</strong><span>Lembaga dalam data terbaru</span><small>Daftar peserta pelatihan · Juli 2026</small></div>
      <div><strong>2016</strong><span>Awal perjalanan FWP</span><small>Kolaborasi lintas lembaga</small></div>
      <Link to="/tentang-kami/legalitas"><ShieldCheck size={28}/><span>Badan hukum resmi</span><small>Lihat legalitas FWP</small></Link>
    </div></section>

    <section className="v2-section v2-role"><div className="container">
      <header className="v2-section-head"><span className="v2-kicker">Peran FWP</span><h2>Menguatkan ekosistem, bukan berjalan sendiri.</h2><p>FWP menjadi ruang temu untuk mempercepat pembelajaran, inovasi, dan kolaborasi wakaf produktif.</p></header>
      <div className="v2-role-grid">{roles.map(({icon:Icon,...item})=><article key={item.title}><span><Icon size={24}/></span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      <Link className="v2-text-link" to="/program">Lihat program strategis <ArrowRight size={17}/></Link>
    </div></section>

    <section className="v2-section v2-audience"><div className="container">
      <header className="v2-section-head"><span className="v2-kicker">Mulai dari kebutuhan Anda</span><h2>Satu ekosistem, tiga jalur kolaborasi.</h2></header>
      <div className="v2-audience-grid">{audiences.map(item=><Link to={item.to} key={item.label}><article><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p><strong>{item.cta} <ArrowRight size={16}/></strong></article></Link>)}</div>
    </div></section>

    <section className="v2-section v2-network"><div className="container v2-network-grid">
      <div><span className="v2-kicker">Jaringan Anggota</span><h2>Lembaga wakaf produktif dari berbagai wilayah.</h2><p>Jelajahi direktori lembaga dalam jaringan FWP beserta identitas badan hukum dan nomor STBPN.</p><Link className="v2-btn v2-btn-dark" to="/pusat-nazhir">Lihat Direktori Anggota <ArrowRight size={18}/></Link></div>
      <div className="v2-member-list">{featuredMembers.map(member=><div key={member.no}><Building2 size={19}/><span>{member.name}</span></div>)}</div>
    </div></section>

    <section className="v2-section v2-news"><div className="container">
      <header className="v2-section-head v2-head-row"><div><span className="v2-kicker">Berita & Agenda</span><h2>Kabar terbaru dari ekosistem FWP.</h2></div><Link className="v2-text-link" to="/berita">Lihat semua berita <ArrowRight size={17}/></Link></header>
      <div className="v2-news-grid">{latestNews.map(news=><Link key={news.id} to={`/berita/${news.id}`}><div className="v2-news-image"><img src={news.imageUrl} alt="" /></div><span><Newspaper size={15}/>{news.category} · {news.date}</span><h3>{news.title}</h3><p>{news.excerpt}</p></Link>)}</div>
    </div></section>

    <section className="v2-section v2-final"><div className="container"><div className="v2-final-card"><div><span className="v2-kicker">Tumbuh Bersama</span><h2>Mari memperbesar dampak wakaf produktif.</h2><p>Bergabung sebagai lembaga anggota atau bangun kemitraan strategis bersama ekosistem FWP.</p></div><div className="v2-actions"><Link className="v2-btn v2-btn-primary" to="/daftar-anggota">Daftar Keanggotaan</Link><Link className="v2-btn v2-btn-secondary" to="/layanan-bisnis">Ajukan Kemitraan</Link></div></div></div></section>
  </div>;
}
