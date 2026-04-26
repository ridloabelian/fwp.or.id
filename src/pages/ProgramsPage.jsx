import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, MapPin, Landmark, HandCoins } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid-2">
            
            {/* Inkubasi */}
            <motion.div variants={fadeInUp} className="glass-card" style={{ background: 'white' }}>
              <div style={{ padding: '16px', background: 'rgba(139, 197, 63, 0.15)', color: 'var(--secondary-color)', display: 'inline-block', borderRadius: '12px', marginBottom: '24px' }}>
                <Leaf size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Inkubasi Wakaf Produktif</h3>
              <p>Program pendampingan komprehensif dan stimulus pendanaan untuk mengelola aset wakaf (perkebunan, pertanian, dan UMKM) agar memiliki model kompetitif serta menjadi <em>Role Model</em> laboratorium wakaf produktif di daerah.</p>
              <Link to="/layanan-bisnis" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color)', fontWeight: 'bold', marginTop: '16px' }}>
                Ajukan Proyek <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Kota Wakaf */}
            <motion.div variants={fadeInUp} className="glass-card" style={{ background: 'white' }}>
              <div style={{ padding: '16px', background: 'rgba(22, 174, 202, 0.15)', color: 'var(--tertiary-color)', display: 'inline-block', borderRadius: '12px', marginBottom: '24px' }}>
                <MapPin size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Pengembangan Kota Wakaf</h3>
              <p>Pemberdayaan aset wakaf berbasis kewilayahan melalui 5 tatanan indikator utama: Literasi massif, Kolaborasi lintas tanah dan uang, Gerakan Wakaf Uang, Profesionalisme kompetensi Nazhir, dan replikasi Role Model.</p>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--tertiary-color)', fontWeight: 'bold', marginTop: '16px' }}>
                Pelajari Modul <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* CWLS */}
            <motion.div variants={fadeInUp} className="glass-card" style={{ background: 'white' }}>
              <div style={{ padding: '16px', background: 'rgba(19, 44, 63, 0.1)', color: 'var(--primary-color)', display: 'inline-block', borderRadius: '12px', marginBottom: '24px' }}>
                <Landmark size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Instrumen Keuangan: CWLS</h3>
              <p>Partisipasi di dalam instrumen inovatif pendanaan negara secara syariah, yaitu <em>Cash Waqf Linked Sukuk</em> (CWLS), baik secara ritel maupun korporasi/private placement, yang kupon imbal hasilnya dialokasikan untuk membiayai program kemaslahatan masyarakat.</p>
              <a href="https://www.bwi.go.id/cwls/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)', fontWeight: 'bold', marginTop: '16px' }}>
                Informasi CWLS <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* APIF */}
            <motion.div variants={fadeInUp} className="glass-card" style={{ background: 'white' }}>
              <div style={{ padding: '16px', background: 'rgba(139, 197, 63, 0.1)', color: 'var(--secondary-color)', display: 'inline-block', borderRadius: '12px', marginBottom: '24px' }}>
                <HandCoins size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Fasilitasi APIF-ISDB</h3>
              <p>Akses pembiayaan internasional melalui fasilitas <em>Awqaf Properties Investment Fund</em> (APIF) dari Islamic Development Bank (IsDB) untuk merevitalisasi dan mengembangkan aset properti strategis komersial berbasis wakaf.</p>
              <Link to="/layanan-bisnis" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color)', fontWeight: 'bold', marginTop: '16px' }}>
                Fasilitasi Proyek <ArrowRight size={16} />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;
