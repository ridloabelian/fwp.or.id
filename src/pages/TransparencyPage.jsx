import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, TrendingUp, Map, Scale } from 'lucide-react';

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

const TransparencyPage = () => {
  return (
    <>
      <section className="section section-bg" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
            Transparansi & Publikasi
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} style={{ margin: '20px auto', maxWidth: '700px', fontSize: '1.2rem' }}>
            Kami menjunjung tinggi akuntabilitas. Akses Laporan Keuangan Tahunan, Sistem Informasi Peta Geospasial Wakaf, serta direktori Fatwa & Regulasi.
          </motion.p>
        </div>
      </section>

      {/* Geospasial Section */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" style={{ marginBottom: '40px' }}>
             <Map size={48} color="var(--tertiary-color)" style={{ margin: '0 auto 16px' }} />
             <h2>Sistem Informasi Wakaf (Data ZISWAF)</h2>
             <p>Integrasi data geospasial tanah wakaf secara nasional berkoordinasi dengan BPN, KUA, dan BWI.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass-card" style={{ background: '#eef2f6', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--primary-light)' }}>
             <div className="text-center" style={{ color: 'var(--text-muted)' }}>
               <Map size={64} style={{ opacity: 0.4, margin: '0 auto 16px' }} />
               <h3>Peta Sebaran Wakaf Interaktif</h3>
               <p>(Visualisasi peta sedang dalam pengembangan integrasi API)</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Laporan Keuangan Section */}
      <section className="section section-bg">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" style={{ marginBottom: '40px' }}>
             <TrendingUp size={48} color="var(--secondary-color)" style={{ margin: '0 auto 16px' }} />
             <h2>Laporan Keuangan & Akuntabilitas</h2>
             <p>Bukti nyata pengelolaan wakaf produktif yang amanah dan profesional.</p>
          </motion.div>

          <motion.div className="grid-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { year: '2023', title: 'Laporan Keuangan Wakaf Produktif 2023 (Audited)', size: '4.2 MB' },
              { year: '2022', title: 'Laporan Laba/Rugi Inkubasi Bisnis 2022', size: '3.8 MB' },
              { year: '2021', title: 'Laporan Distribusi Manfaat Beasiswa & Sosial 2021', size: '5.1 MB' }
            ].map((doc, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="glass-card" style={{ background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ background: 'var(--bg-offset)', display: 'inline-flex', padding: '8px 12px', borderRadius: '8px', color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '16px' }}>
                    Tahun {doc.year}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{doc.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>PDF Document • {doc.size}</p>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }}>
                  <Download size={18} /> Unduh Dokumen
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Regulasi Section */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" style={{ marginBottom: '40px' }}>
             <Scale size={48} color="var(--primary-light)" style={{ margin: '0 auto 16px' }} />
             <h2>Regulasi & Fatwa Wakaf</h2>
             <p>Payung hukum dan kepatuhan syariah pendukung pengelolaan wakaf di Indonesia.</p>
          </motion.div>

          <motion.div className="grid-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { type: 'Undang-Undang', title: 'UU No. 41 Tahun 2004 tentang Wakaf', desc: 'Regulasi dasar yang mengatur pengelolaan aset wakaf secara legal di Indonesia.' },
              { type: 'Peraturan Pemerintah', title: 'PP No. 42 Tahun 2006', desc: 'Petunjuk Pelaksana atas Undang-Undang Nomor 41 Tahun 2004 Tentang Wakaf.' },
              { type: 'Peraturan BWI', title: 'Peraturan BWI tentang Sertifikasi Nazhir', desc: 'Standar kompetensi dan kelembagaan nazhir yang diterbitkan Badan Wakaf Indonesia.' },
              { type: 'Fatwa MUI', title: 'Fatwa MUI tentang Wakaf Uang', desc: 'Landasan kepatuhan syariah atas mekanisme pengumpulan dan investasi Wakaf Uang tunai.' }
            ].map((reg, idx) => (
              <motion.div key={idx} variants={fadeInUp} style={{ display: 'flex', gap: '20px', padding: '24px', border: '1px solid #eef2f6', borderRadius: '16px' }}>
                <div style={{ flexShrink: 0, padding: '16px', background: 'rgba(19, 44, 63, 0.05)', borderRadius: '12px', color: 'var(--primary-color)' }}>
                  <FileText size={32} />
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--secondary-color)', textTransform: 'uppercase' }}>{reg.type}</span>
                  <h4 style={{ margin: '8px 0', fontSize: '1.2rem' }}>{reg.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{reg.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TransparencyPage;
