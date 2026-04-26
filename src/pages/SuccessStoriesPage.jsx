import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, GraduationCap, Sprout, ArrowRight } from 'lucide-react';
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

const SuccessStoriesPage = () => {
  return (
    <>
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
            
            {/* Klinik Medikids */}
            <motion.div variants={fadeInUp} className="glass-card" style={{ background: 'white', display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px', minHeight: '250px', background: 'var(--bg-offset)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                <span>[ Foto Klinik Medikids - Depok/Sawangan ]</span>
              </div>
              <div style={{ flex: '2 1 400px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ padding: '8px', background: 'rgba(22, 174, 202, 0.1)', color: 'var(--tertiary-color)', borderRadius: '8px' }}>
                    <Stethoscope size={24} />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Klinik Medikids Wakaf</h3>
                </div>
                <p style={{ fontSize: '1.1rem' }}>Studi kasus perpaduan wakaf dengan bisnis komersial (<em>proven and sustainable</em>) yang dikelola oleh Yayasan Wakaf Produktif PAII.</p>
                <p>Melalui pembangunan klinik gigi dan anak yang profesional, margin keuntungannya dialirkan kembali sebagai manfaat sosial dan diputar kembali untuk mereplikasi cabang baru.</p>
                <Link to="/transparansi" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)', fontWeight: 'bold', marginTop: '16px' }}>
                  Lihat Skema Keuangan <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Beasiswa */}
            <motion.div variants={fadeInUp} className="glass-card" style={{ background: 'white', display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
              <div style={{ flex: '1 1 300px', minHeight: '250px', background: 'var(--bg-offset)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                <span>[ Penyaluran Beasiswa FKG UI & Orphan Support ]</span>
              </div>
              <div style={{ flex: '2 1 400px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ padding: '8px', background: 'rgba(139, 197, 63, 0.1)', color: 'var(--secondary-color)', borderRadius: '8px' }}>
                    <GraduationCap size={24} />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Beasiswa Pendidikan & Kesehatan</h3>
                </div>
                <p style={{ fontSize: '1.1rem' }}>Distribusi hasil pengelolaan surplus wakaf (<em>Mauquf Alaih</em>).</p>
                <p>Salah satu wujud nyatanya adalah penyediaan Beasiswa penuh untuk Mahasiswa FKG Universitas Indonesia serta dukungan konsisten untuk program <em>Orphan Support</em> di berbagai daerah rawan putus sekolah.</p>
              </div>
            </motion.div>

            {/* Kampung Wakaf */}
            <motion.div variants={fadeInUp} className="glass-card" style={{ background: 'white', display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px', minHeight: '250px', background: 'var(--bg-offset)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                <span>[ Dokumentasi Panen Kampung Wakaf ]</span>
              </div>
              <div style={{ flex: '2 1 400px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ padding: '8px', background: 'rgba(19, 44, 63, 0.1)', color: 'var(--primary-color)', borderRadius: '8px' }}>
                    <Sprout size={24} />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Kampung Wakaf Kebun Produktif</h3>
                </div>
                <p style={{ fontSize: '1.1rem' }}>Optimalisasi aset lahan kosong (harta tak bergerak) menjadi pusat pertumbuhan ekonomi pedesaan.</p>
                <p>Lahan yang diwakafkan penduduk dikelola secara agrobisnis (perkebunan buah dan sayur skala menengah) yang melibatkan masyarakat lokal sebagai pekerja sekaligus penerima manfaat panennya.</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SuccessStoriesPage;
