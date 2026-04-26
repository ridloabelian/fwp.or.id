import React from 'react';
import { motion } from 'framer-motion';
import { Users, Landmark, Target, Award, Globe, Building2, BookOpen } from 'lucide-react';

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

const AboutPage = () => {
  return (
    <>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
            Tentang Kami
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} style={{ margin: '20px auto', maxWidth: '700px', fontSize: '1.2rem' }}>
            Forum Wakaf Produktif (FWP) bersinergi dengan Badan Wakaf Indonesia (BWI) untuk mentransformasi kekuatan wakaf nasional menjadi motor penggerak ekonomi syariah.
          </motion.p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="section section-bg">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid-2">
            <div>
              <motion.h2 variants={fadeInUp}>Visi & Misi Peta Jalan Wakaf</motion.h2>
              <motion.div variants={fadeInUp} className="glass-card" style={{ background: 'var(--primary-color)', color: 'white', marginBottom: '24px' }}>
                <h3 style={{ color: 'var(--secondary-color)', marginBottom: '8px' }}>Visi Besar</h3>
                <p style={{ margin: 0, color: 'white', fontSize: '1.1rem' }}>Menjadikan wakaf sebagai pilar pertumbuhan ekonomi nasional dan kesejahteraan umat melalui tata kelola yang profesional, produktif, dan inovatif.</p>
              </motion.div>
            </div>
            
            <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: <BookOpen />, title: 'Literasi & Sosialisasi', desc: 'Meningkatkan kesadaran masyarakat tentang wakaf uang dan wakaf produktif.' },
                { icon: <Target />, title: 'Tata Kelola & Profesionalisme', desc: 'Meningkatkan kompetensi nazhir berstandar internasional (WCP).' },
                { icon: <Award />, title: 'Inovasi Digital & Produk', desc: 'Mengembangkan instrumen seperti CWLS dan platform digitalisasi manajemen aset.' },
                { icon: <Globe />, title: 'Governansi Global', desc: 'Sinergi wakaf lokal dengan ekosistem filantropi Islam dunia.' },
              ].map((misi, i) => (
                <motion.div key={i} variants={fadeInUp} style={{ display: 'flex', gap: '16px', background: 'white', padding: '16px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ color: 'var(--secondary-color)' }}>{misi.icon}</div>
                  <div>
                    <h4 style={{ margin: '0 0 4px' }}>{misi.title}</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{misi.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ekosistem Pentahelix */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" style={{ marginBottom: '40px' }}>
             <h2>Jejaring Kolaborasi (Pentahelix)</h2>
             <p style={{ maxWidth: '600px', margin: '0 auto' }}>Transformasi wakaf tidak dapat dilakukan sendirian. FWP membangun ekosistem Pentahelix untuk memastikan akselerasi pertumbuhan aset wakaf lintas sektoral.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid-3">
             {[
               { icon: <Landmark />, name: 'Pemerintah (Regulator)', role: 'BWI, Kemenag, BI, OJK' },
               { icon: <Users />, name: 'Masyarakat (Aktor Utama)', role: 'Wakif, Komunitas, Tokoh Agama' },
               { icon: <Building2 />, name: 'Dunia Usaha (Kolaborator)', role: 'LKS-PWU, Korporasi, Manajer Investasi' },
               { icon: <BookOpen />, name: 'Akademisi (Inovator)', role: 'Universitas, Pusat Studi Ziswaf' },
               { icon: <Globe />, name: 'Media (Publikasi)', role: 'Pers, Influencer, Media Digital' },
             ].map((helix, ix) => (
               <motion.div key={ix} variants={fadeInUp} className="glass-card text-center" style={{ background: ix % 2 === 0 ? 'var(--bg-offset)' : 'white' }}>
                 <div style={{ margin: '0 auto 16px', color: 'var(--primary-color)' }}>{helix.icon}</div>
                 <h4 style={{ marginBottom: '8px' }}>{helix.name}</h4>
                 <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{helix.role}</p>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
