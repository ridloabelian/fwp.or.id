import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, ListChecks, Award, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { nazhirList } from '../data/nazhir';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const NazhirCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNazhirs = nazhirList.filter(nazhir =>
    nazhir.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (nazhir.region || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Pusat Nazhir" 
        description="Standar kompetensi SKKNI, implementasi Waqf Core Principles, dan direktori lembaga nazhir resmi nasional." 
      />
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
            Pusat Standar & Kompetensi Nazhir
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} style={{ margin: '20px auto', maxWidth: '700px', fontSize: '1.2rem' }}>
            Akselerasi tata kelola wakaf profesional melalui standar kompetensi kerja nasional, implementasi Waqf Core Principles, dan transparansi direktori nazhir.
          </motion.p>
        </div>
      </section>

      {/* WCP */}
      <section className="section section-bg">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center" style={{ marginBottom: '40px' }}>
             <ShieldCheck size={48} color="var(--primary-light)" style={{ margin: '0 auto 16px' }} />
             <h2>Waqf Core Principles (WCP)</h2>
             <p style={{ maxWidth: '600px', margin: '0 auto' }}>Standar internasional dalam manajemen lembaga wakaf dengan 29 prinsip pilar pengelolaan risiko dan instrumen kepatuhan tata kelola syariah yang diawasi BWI.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid-3" style={{ justifyContent: 'center' }}>
            {['Pondasi Legal', 'Tata Kelola Syariah', 'Manajemen Risiko'].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="glass-card text-center" style={{ background: 'white' }}>
                <BookOpen size={32} color="var(--secondary-color)" style={{ margin: '0 auto 16px' }} />
                <h4>{item}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SKKNI */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h2 variants={fadeInUp}>SKKNI Pengelolaan Wakaf</motion.h2>
            <motion.p variants={fadeInUp} style={{ marginBottom: '24px' }}>
              Kepmenaker No. 47 Tahun 2021 mendefinisikan 37 Unit Kompetensi kualifikasi Nazhir Wakaf Nasional. Kami menjembatani kompetensi dari pra-sertifikasi hingga sertifikasi.
            </motion.p>
            <motion.ul variants={staggerContainer} style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Penerimaan Harta Benda Wakaf', 'Penjagaan Arus Kas', 'Pengembangan Komersial', 'Pelaporan Keuangan Wakaf'].map((item, idx) => (
                <motion.li key={idx} variants={fadeInUp} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ padding: '6px', background: 'rgba(22, 174, 202, 0.1)', color: 'var(--tertiary-color)', borderRadius: '50%' }}>
                    <ListChecks size={20} />
                  </div>
                  <span style={{ fontWeight: '500' }}>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.a 
              variants={fadeInUp} 
              href="mailto:sekretariat@fwp.or.id?subject=Pendaftaran Sertifikasi Nazhir" 
              className="btn btn-outline" 
              style={{ marginTop: '32px', display: 'inline-flex', gap: '8px', alignItems: 'center' }}
            >
              <Award size={18} /> Daftar Sertifikasi
            </motion.a>
          </motion.div>
          
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="glass-card" style={{ background: 'var(--primary-light)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '400px' }}>
             <h3 style={{ borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '16px', color: 'white' }}>Modul Kompetensi Tersedia</h3>
             <p>Akses pustaka e-learning SKKNI langsung melalui platform portal edukasi terafiliasi kami.</p>
             <button className="btn btn-secondary btn-disabled" style={{ marginTop: 'auto', alignSelf: 'flex-start', pointerEvents: 'none' }} disabled={true}>
               Akses E-Learning <span className="badge-soon">Segera</span>
             </button>
          </motion.div>
        </div>
      </section>

      {/* Direktori Nazhir */}
      <section className="section section-bg">
        <div className="container text-center">
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>Direktori Lembaga Nazhir Resmi</motion.h2>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
            Puluhan Lembaga Amil dan Nazhir Nasional yang terdaftar di BWI dan merupakan mitra strategis Lembaga Keuangan Syariah Penerima Wakaf Uang (LKS-PWU).
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} style={{ maxWidth: '500px', margin: '0 auto 40px', display: 'flex', gap: '8px' }}>
             <input 
               type="text" 
               placeholder="Cari berdasarkan nama lembaga atau kota..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', border: '1px solid #ccc' }} 
             />
             <button className="btn btn-primary" style={{ padding: '12px 20px' }}><Search size={20} /></button>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid-4" style={{ gap: '16px' }}>
            {filteredNazhirs.map((nazhir) => (
              <motion.div key={nazhir.no} className="glass-card" style={{ padding: '24px', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                <span style={{ fontWeight: '600', color: 'var(--text-main)', textAlign: 'center' }}>{nazhir.name}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px' }}>STBPN {nazhir.stbpn}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{nazhir.region}</span>
              </motion.div>
            ))}
          </motion.div>
          {filteredNazhirs.length === 0 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: '20px', color: 'var(--text-muted)' }}>
              Tidak menemukan Lembaga Nazhir dengan kriteria pencarian tersebut.
            </motion.p>
          )}
        </div>
      </section>
    </>
  );
};

export default NazhirCenterPage;
