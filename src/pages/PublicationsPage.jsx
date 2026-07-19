import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { mediaPublications } from '../data/publications';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const PublicationsPage = () => {
  return (
    <>
      <SEO 
        title="Publikasi Media" 
        description="Kliping berita dan publikasi media massa mengenai aktivitas Forum Wakaf Produktif." 
      />
      <section className="section section-bg" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
            Kliping Publikasi Media
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} style={{ margin: '20px auto', maxWidth: '700px', fontSize: '1.2rem' }}>
            Kompilasi liputan media massa nasional & internasional mengenai program dan pencapaian Forum Wakaf Produktif.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div className="grid-3" initial="hidden" animate="visible" variants={staggerContainer}>
            {mediaPublications.map((pub) => (
              <motion.div key={pub.id} variants={fadeInUp} className="glass-card" style={{ background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary-color)', background: 'var(--bg-offset)', padding: '4px 8px', borderRadius: '4px' }}>
                      {pub.source}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {pub.date}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', lineHeight: '1.4', color: 'var(--text-main)' }}>{pub.title}</h4>
                </div>
                <a href={pub.url} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', marginTop: 'auto' }}>
                  Baca Selengkapnya <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PublicationsPage;
