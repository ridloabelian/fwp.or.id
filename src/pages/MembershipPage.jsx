import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Crown, Medal, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const TIERS = [
  {
    id: 'silver',
    name: 'Anggota Biasa',
    badge: 'Silver',
    icon: Medal,
    color: '#64748b',
    iuran: 'Rp 2.000.000',
    iuranNote: 'Iuran keanggotaan per tahun',
    requirements: [
      'Berbentuk lembaga (bukan individu)',
      'Memiliki Izin Nazhir Wakaf Uang (NWU) dari BWI',
    ],
  },
  {
    id: 'gold',
    name: 'Anggota Luar Biasa',
    badge: 'Gold',
    icon: Award,
    color: '#b8860b',
    iuran: 'Rp 2.000.000',
    iuranNote: 'Iuran keanggotaan per tahun',
    requirements: [
      'Berbentuk lembaga (bukan individu)',
      'Memiliki Izin Nazhir Wakaf Uang (NWU) dari BWI',
      'Aset kelolaan wakaf minimal Rp 2 Miliar',
    ],
    featured: true,
  },
  {
    id: 'platinum',
    name: 'Anggota Kehormatan',
    badge: 'Platinum',
    icon: Crown,
    color: '#475569',
    iuran: 'Rp 15.000.000',
    iuranNote: 'Iuran keanggotaan per tahun',
    requirements: [
      'Untuk lembaga non-Nazhir',
      'Mitra strategis ekosistem wakaf produktif',
      'Mendukung program dan advokasi FWP',
    ],
  },
];

export default function MembershipPage() {
  return (
    <div className="about-page">
      <SEO
        title="Keanggotaan FWP"
        description="Keanggotaan Forum Wakaf Produktif bersifat kelembagaan: Anggota Biasa (Silver), Anggota Luar Biasa (Gold), dan Anggota Kehormatan (Platinum)."
      />

      <section className="about-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="hero-content">
            <h1>Keanggotaan</h1>
            <p className="hero-subtitle">Keanggotaan FWP merupakan keanggotaan lembaga</p>
            <p className="hero-description">
              Forum Wakaf Produktif menghimpun lembaga nazhir wakaf uang dan mitra strategis ekosistem
              perwakafan nasional. Pendaftaran dilakukan atas nama lembaga, bukan perorangan.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="grid-3"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {TIERS.map((tier) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.id}
                  variants={fadeInUp}
                  className="glass-card"
                  style={{
                    background: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    border: tier.featured ? '2px solid var(--secondary-color)' : '1px solid var(--bg-offset)',
                    position: 'relative',
                  }}
                >
                  {tier.featured && (
                    <span style={{
                      position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--secondary-color)', color: 'var(--text-main)',
                      fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: 'var(--radius-full)',
                    }}>
                      REKOMENDASI NAZHIR
                    </span>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Icon size={32} color={tier.color} />
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1.3rem' }}>{tier.name}</h3>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: tier.color, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {tier.badge}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-color)', margin: '0 0 4px', fontFamily: 'var(--font-heading)' }}>
                    {tier.iuran}
                  </p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '20px' }}>{tier.iuranNote}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flexGrow: 1 }}>
                    {tier.requirements.map((req, i) => (
                      <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '10px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: 'var(--secondary-color)', fontWeight: 700 }}>✓</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                  <Link to="/daftar-anggota" className="btn btn-primary" style={{ width: '100%' }}>
                    Daftar {tier.badge} <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
