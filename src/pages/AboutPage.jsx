import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Building2, CalendarDays, Check, Mail, Phone, Scale, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { aboutData, milestones, members } from '../data/about';

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const profileLinks = [
  { to: '/tentang-kami/sejarah', icon: BookOpen, title: 'Sejarah FWP', text: 'Perjalanan sejak peluncuran pada 7 Desember 2016.' },
  { to: '/tentang-kami/legalitas', icon: Scale, title: 'Legalitas', text: 'Landasan hukum dan badan hukum resmi organisasi.' },
  { to: '/tentang-kami/struktur', icon: Users, title: 'Struktur', text: 'Pengurus FWP periode 2024–2027 dan bidang organisasi.' },
];

const portraits = {
  Ketua: '/speakers/rayan.png',
  Sekretaris: '/speakers/alla.png',
  Bendahara: '/speakers/herri.png',
};

export default function AboutPage() {
  const featuredMilestones = milestones.filter((_, index) => [0, 1, 3, 8, 11, 13].includes(index));

  return (
    <div className="about-page about-redesign">
      <SEO title="Tentang FWP" description="Profil, visi, misi, legalitas, dan kepengurusan Forum Wakaf Produktif." />

      <section className="about-hero about-hero-premium">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <span className="about-eyebrow">Tentang Kami</span>
            <h1>Forum Wakaf Produktif</h1>
            <p className="about-hero-lead">Katalisator kolaborasi nazhir untuk memperbesar dampak wakaf produktif Indonesia.</p>
            <p className="about-hero-description">{aboutData.hero.description}</p>
            <div className="about-hero-actions">
              <Link to="/keanggotaan" className="btn btn-primary">Jelajahi Keanggotaan <ArrowRight size={18} /></Link>
              <Link to="/tentang-kami/sejarah" className="btn about-btn-light">Pelajari Perjalanan FWP</Link>
            </div>
          </div>
          <div className="about-stat-panel" aria-label="Statistik Forum Wakaf Produktif">
            <div className="about-stat-primary"><strong>{members.length}</strong><span>Lembaga Nazhir tercatat</span></div>
            <div className="about-stat-row">
              <div><CalendarDays size={22} /><strong>2016</strong><span>Tahun peluncuran</span></div>
              <div><Building2 size={22} /><strong>Nasional</strong><span>Jangkauan kolaborasi</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-profile-nav section">
        <div className="container">
          <div className="about-section-heading">
            <span className="about-kicker">Profil Organisasi</span>
            <h2>Kenali FWP lebih dekat</h2>
            <p>Informasi organisasi disusun ringkas, transparan, dan mudah ditelusuri.</p>
          </div>
          <div className="about-profile-grid">
            {profileLinks.map(({ to, icon: Icon, title, text }) => (
              <Link key={to} to={to} className="about-profile-card">
                <span className="about-icon-box"><Icon size={24} /></span>
                <h3>{title}</h3><p>{text}</p>
                <span className="about-card-link">Selengkapnya <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="about-purpose section">
        <div className="container">
          <div className="about-vision-block">
            <span className="about-kicker">Visi</span>
            <blockquote>“{aboutData.vision.content}”</blockquote>
          </div>
          <div className="about-mission-block">
            <div className="about-section-heading about-heading-left"><span className="about-kicker">Misi</span><h2>Kerja nyata untuk ekosistem wakaf</h2></div>
            <div className="about-mission-grid">
              {aboutData.mission.items.map((item) => <div key={item} className="about-mission-item"><Check size={18} /><span>{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="about-leadership section">
        <div className="container">
          <div className="about-section-heading">
            <span className="about-kicker">Kepemimpinan</span>
            <h2>Pengurus FWP <span className="about-period">Periode 2024–2027</span></h2>
            <p>Pengurus inti yang mengawal amanah dan arah strategis organisasi.</p>
          </div>
          <div className="about-leader-grid">
            {aboutData.leadership.members.map((member) => (
              <motion.article key={member.position} initial="hidden" animate="visible" variants={fadeInUp} className="about-leader-card">
                <div className="about-leader-photo"><img src={portraits[member.position]} alt={`Foto ${member.name}`} /></div>
                <span>{member.position}</span><h3>{member.name}</h3>
              </motion.article>
            ))}
          </div>
          <div className="about-center-action"><Link to="/tentang-kami/struktur" className="btn btn-outline">Lihat Struktur Organisasi <ArrowRight size={18} /></Link></div>
        </div>
      </section>

      <section className="about-milestones section">
        <div className="container">
          <div className="about-section-heading about-heading-left"><span className="about-kicker">Jejak Dampak</span><h2>Milestone utama FWP</h2><p>Ikhtiar kolaboratif dalam penguatan tata kelola dan ekosistem wakaf nasional.</p></div>
          <div className="about-milestone-grid">
            {featuredMilestones.map((item) => <article key={`${item.year}-${item.title}`} className="about-milestone-card"><span>{item.year}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
          <div className="about-center-action"><Link to="/tentang-kami/sejarah" className="about-text-link">Lihat sejarah lengkap <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="about-cta section">
        <div className="container"><div className="about-cta-card">
          <div><span className="about-kicker">Tumbuh Bersama</span><h2>Bangun dampak wakaf yang lebih besar</h2><p>Bergabung dalam jejaring lembaga FWP atau jalin kemitraan strategis untuk mengembangkan aset wakaf produktif.</p></div>
          <div className="about-cta-actions"><Link to="/daftar-anggota" className="btn btn-primary">Daftar Keanggotaan</Link><Link to="/layanan-bisnis" className="btn about-btn-light">Jalin Kemitraan</Link></div>
        </div></div>
      </section>

      <section className="about-contact-strip"><div className="container"><div><Award size={22} /><span>Badan Hukum: {aboutData.legal.skNumber}</span></div><a href={`tel:${aboutData.contact.phone.replace(/\s/g, '')}`}><Phone size={18} />{aboutData.contact.phone}</a><a href={`mailto:${aboutData.contact.email}`}><Mail size={18} />{aboutData.contact.email}</a></div></section>
    </div>
  );
}
