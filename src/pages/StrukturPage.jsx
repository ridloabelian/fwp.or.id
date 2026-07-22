import { motion } from 'framer-motion';
import { aboutData } from '../data/about';
import SEO from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Foto pengurus memakai aset yang sudah ada di /public/speakers
const PHOTOS = {
  'Ketua': '/speakers/rayan-2026.png',
  'Sekretaris': '/speakers/alla.png',
  'Bendahara': '/speakers/herri.png',
};

const cardStyle = {
  background: 'white',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-md)',
  padding: '24px',
  textAlign: 'center',
  minWidth: '220px',
  maxWidth: '260px',
};

const photoStyle = {
  width: '96px',
  height: '96px',
  borderRadius: '50%',
  objectFit: 'cover',
  margin: '0 auto 12px',
  display: 'block',
  border: '3px solid var(--secondary-color)',
};

const connectorVertical = {
  width: '2px',
  height: '32px',
  background: 'var(--secondary-color)',
  margin: '0 auto',
};

const connectorHorizontal = {
  height: '2px',
  background: 'var(--secondary-color)',
  flex: 1,
  alignSelf: 'flex-start',
  marginTop: '0',
};

function LeaderCard({ member }) {
  const photo = PHOTOS[member?.position];
  return (
    <motion.div variants={fadeInUp} style={cardStyle}>
      {photo ? (
        <img
          src={photo}
          alt={member?.name}
          style={photoStyle}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      ) : null}
      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--secondary-dark)', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px' }}>
        {member?.position || ''}
      </p>
      <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{member?.name || ''}</h3>
    </motion.div>
  );
}
export default function StrukturPage() {
  const members = aboutData.leadership?.members || [];
  const divisions = aboutData.leadership?.divisions || [];
  const ketua = members.find((m) => m.position === 'Ketua');
  const pengurusInti = members.filter((m) => m.position !== 'Ketua');

  return (
    <div className="about-page">
      <SEO
        title="Struktur Organisasi FWP"
        description="Bagan struktur kepengurusan Forum Wakaf Produktif periode 2024-2027."
      />

      <section className="about-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="hero-content">
            <h1>Struktur Organisasi</h1>
            <p className="hero-subtitle">{aboutData.leadership?.title || 'Pengurus'}</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Level 1: Ketua */}
            {ketua && <LeaderCard member={ketua} />}
            <div style={connectorVertical} />

            {/* Level 2: Sekretaris & Bendahara */}
            <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
              {pengurusInti.map((member, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ ...connectorVertical, height: '24px' }} />
                  <LeaderCard member={member} />
                </div>
              ))}
            </div>
            <div style={connectorVertical} />

            {/* Level 3: Bidang-bidang */}
            <h2 className="section-title" style={{ marginTop: '16px' }}>Bidang Kelengkapan Organisasi</h2>
            <p className="section-note">{aboutData.leadership?.note || ''}</p>
            <div className="divisions-grid" style={{ width: '100%' }}>
              {divisions.map((division, index) => (
                <motion.div key={index} variants={fadeInUp} className="division-card">
                  <h4>{division?.name || ''}</h4>
                  <p>{division?.description || ''}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
