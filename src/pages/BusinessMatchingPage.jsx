import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Coins, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { prospectusProjects } from '../data/projects';

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

const BusinessMatchingPage = () => {
  return (
    <>
      <SEO 
        title="Layanan Bisnis" 
        description="Layanan business matching proyek wakaf produktif nasional. Hub integrasi pendanaan ritel dan CSR bagi nazhir dan mitra investor." 
      />
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
            Kemitraan Strategis
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} style={{ margin: '20px auto', maxWidth: '700px', fontSize: '1.2rem' }}>
            Hub integrasi pendanaan (Retail Waqf & CSR) dan direktori Prospektus Proyek Wakaf yang telah melalui tahap <em>Due Diligence</em>.
          </motion.p>
        </div>
      </section>

      {/* Prospektus Proyek */}
      <section className="section section-bg">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center" style={{ marginBottom: '40px' }}>
             <Activity size={48} color="var(--tertiary-color)" style={{ margin: '0 auto 16px' }} />
             <h2>Prospektus Proyek Wakaf Produktif</h2>
             <p style={{ maxWidth: '600px', margin: '0 auto' }}>Daftar proyek <em>onboarding</em> yang dikelola oleh Nazhir terverifikasi dan siap menerima pendanaan komersial maupun sosial.</p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid-3">
             {prospectusProjects.map((proj) => (
                <motion.div key={proj.id} variants={fadeInUp} className="glass-card" style={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ background: 'var(--bg-offset)', fontSize: '0.8rem', padding: '4px 12px', borderRadius: '20px', display: 'inline-block', alignSelf: 'flex-start', marginBottom: '16px', fontWeight: 'bold', color: 'var(--text-main)' }}>
                    {proj.status}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{proj.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Dikelola oleh: <strong>{proj.nazhir}</strong></p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eef2f6', paddingTop: '16px', marginTop: 'auto', marginBottom: '20px' }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Proyeksi ROI</span>
                      <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--secondary-color)' }}>{proj.roi}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Kebutuhan Dana</span>
                      <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--primary-color)' }}>{proj.fund}</p>
                    </div>
                  </div>

                  <button className="btn btn-outline btn-disabled" style={{ width: '100%', pointerEvents: 'none' }} disabled={true}>
                    Lihat Detail <span className="badge-soon">Segera</span>
                  </button>
                </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Retail & CSR Hub */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center" style={{ marginBottom: '40px' }}>
             <h2>Retail Waqf & CSR Hub</h2>
             <p style={{ maxWidth: '600px', margin: '0 auto' }}>Menjembatani berbagai tipe pendana untuk berpartisipasi dalam perwakafan berskala besar melalui jalur yang aman dan terstruktur.</p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid-2">
             <motion.div variants={fadeInUp} style={{ padding: '32px', border: '1px solid #eef2f6', borderRadius: '16px', background: 'white' }}>
               <Briefcase size={32} color="var(--primary-light)" style={{ marginBottom: '16px' }} />
               <h3>Integrasi CSR (Wakaf Institusional)</h3>
               <p>Memfasilitasi penyaluran dana CSR (<em>Corporate Social Responsibility</em>) dari perusahaan untuk diubah menjadi aset wakaf yang <em>sustainable</em>. FWP membantu pencocokan program (<em>business matching</em>) antara Korporasi dan Lembaga Nazhir pelaksana teknis operasional.</p>
               <a href="mailto:kemitraan@fwp.or.id?subject=Ajukan Kemitraan CSR" className="btn btn-outline" style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center' }}>
                  Ajukan Kemitraan CSR
                </a>
             </motion.div>

             <motion.div variants={fadeInUp} style={{ padding: '32px', border: '1px solid #eef2f6', borderRadius: '16px', background: 'white' }}>
               <Coins size={32} color="var(--secondary-color)" style={{ marginBottom: '16px' }} />
               <h3>Securities Crowdfunding (SCF) & Retail</h3>
               <p>Bekerjasama dengan platform <em>Securities Crowdfunding</em> syariah (seperti Shafiq atau LBS Urun Dana) guna menghimpun Wakaf Uang secara ritel maupun jaringan investor untuk proyek-proyek wakaf produktif bervaluasi tinggi.</p>
               <a href="mailto:kemitraan@fwp.or.id?subject=Minat Investor Jaringan" className="btn btn-outline" style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center' }}>
                  Gabung sebagai Investor Jaringan
                </a>
             </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BusinessMatchingPage;
