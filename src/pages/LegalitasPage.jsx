import { motion } from 'framer-motion';
import { Award, MapPin, Phone, Mail } from 'lucide-react';
import { aboutData } from '../data/about';
import SEO from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LegalitasPage() {
  return (
    <div className="about-page">
      <SEO
        title="Legalitas FWP"
        description="Legal formal Forum Wakaf Produktif: Badan Hukum Perkumpulan terdaftar di Kemenkumham."
      />

      <section className="about-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="hero-content">
            <h1>Legalitas</h1>
            <p className="hero-subtitle">Dasar Hukum Forum Wakaf Produktif</p>
          </motion.div>
        </div>
      </section>

      <section className="legal-section">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="legal-card">
            <Award className="legal-icon" />
            <h2>{aboutData.legal?.title || 'Legal Formal'}</h2>
            <div className="legal-details">
              <p className="sk-number">{aboutData.legal?.skNumber || ''}</p>
              <p className="legal-desc">{aboutData.legal?.description || ''}</p>
              <p className="legal-issuer">Diterbitkan oleh: {aboutData.legal?.issuedBy || ''}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="contact-card">
            <h2>Sekretariat</h2>
            <div className="contact-details">
              <p><MapPin size={18} /> {aboutData.contact?.address || ''}</p>
              <p><Phone size={18} /> {aboutData.contact?.phone || ''}</p>
              <p><Mail size={18} /> {aboutData.contact?.email || ''}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
