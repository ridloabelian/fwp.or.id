import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { caseStudies } from '../data/caseStudies';

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

const SuccessStoriesPage = () => {
  return (
    <>
      <SEO 
        title="Inspirasi & Studi Kasus" 
        description="Kisah sukses dan studi kasus implementasi wakaf produktif di Indonesia, mulai dari klinik kesehatan, lembaga pendidikan, hingga pertanian berkelanjutan." 
      />
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
            Inspirasi & Studi Kasus
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} style={{ margin: '20px auto', maxWidth: '700px', fontSize: '1.2rem' }}>
            Showcase keberhasilan mengubah <em>Intangible Asset</em> menjadi <em>Real Asset</em> dan <em>Real Power</em> melalui skema perwakafan.
          </motion.p>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {caseStudies.map((study) => {
              const IconComponent = Icons[study.iconName];

              return (
                <motion.div 
                  key={study.id} 
                  variants={fadeInUp} 
                  className="glass-card" 
                  style={{ 
                    background: 'white', 
                    display: 'flex', 
                    gap: '32px', 
                    alignItems: 'center', 
                    flexWrap: 'wrap',
                    flexDirection: study.isReverse ? 'row-reverse' : 'row' 
                  }}
                >
                  <div style={{ flex: '1 1 300px', minHeight: '250px', background: 'var(--bg-offset)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                    <span>{study.imagePlaceholder}</span>
                  </div>
                  
                  <div style={{ flex: '2 1 400px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ padding: '8px', background: study.bgColor, color: study.themeColor, borderRadius: '8px' }}>
                        {IconComponent && <IconComponent size={24} />}
                      </div>
                      <h3 style={{ margin: 0, fontSize: '1.8rem' }}>{study.title}</h3>
                    </div>
                    <p style={{ fontSize: '1.1rem' }}>{study.subtitle}</p>
                    <p>{study.description}</p>
                    {study.ctaText && study.ctaLink && (
                      <Link 
                        to={study.ctaLink} 
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)', fontWeight: 'bold', marginTop: '16px' }}
                      >
                        {study.ctaText} <Icons.ArrowRight size={16} />
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

export default SuccessStoriesPage;
