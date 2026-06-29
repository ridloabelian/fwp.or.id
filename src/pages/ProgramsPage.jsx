import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { programsData } from '../data/programs';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const ProgramsPage = () => {
  return (
    <>
      <SEO 
        title="Program Strategis" 
        description="4 program unggulan FWP: advokasi, inkubasi bisnis wakaf produktif, kota wakaf, dan sertifikasi nazhir nasional." 
      />
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
            Program & Inisiatif
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} style={{ margin: '20px auto', maxWidth: '700px', fontSize: '1.2rem' }}>
            Aksi nyata kami memberdayakan aset wakaf secara produktif untuk mewujudkan ekosistem ekonomi syariah yang mandiri.
          </motion.p>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid-2">
            {programsData.map((program) => {
              const IconComponent = Icons[program.iconName];
              const isCTAEmpty = program.ctaLink === '#';

              return (
                <motion.div 
                  key={program.id} 
                  variants={fadeInUp} 
                  className="glass-card" 
                  style={{ background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ padding: '16px', background: program.bgColor, color: program.themeColor, display: 'inline-block', borderRadius: '12px', marginBottom: '24px' }}>
                      {IconComponent && <IconComponent size={32} />}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{program.title}</h3>
                    <p>{program.description}</p>
                  </div>
                  
                  <div style={{ marginTop: '24px' }}>
                    {isCTAEmpty ? (
                      <span className="btn-disabled" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                        {program.ctaText} <span className="badge-soon">Segera</span>
                      </span>
                    ) : program.isExternal ? (
                      <a 
                        href={program.ctaLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: program.themeColor, fontWeight: 'bold' }}
                      >
                        {program.ctaText} <Icons.ArrowRight size={16} />
                      </a>
                    ) : (
                      <Link 
                        to={program.ctaLink} 
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: program.themeColor, fontWeight: 'bold' }}
                      >
                        {program.ctaText} <Icons.ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;
