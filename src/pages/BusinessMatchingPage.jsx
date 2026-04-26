import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Coins, ArrowRight, Activity } from 'lucide-react';
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

const BusinessMatchingPage = () => {
  return (
    <>
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" style={{ marginBottom: '40px' }}>
             <Activity size={48} color="var(--tertiary-color)" style={{ margin: '0 auto 16px' }} />
             <h2>Prospektus Proyek Wakaf Produktif</h2>
             <p style={{ maxWidth: '600px', margin: '0 auto' }}>Daftar proyek <em>onboarding</em> yang dikelola oleh Nazhir terverifikasi dan siap menerima pendanaan komersial maupun sosial.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid-3">
             {[
               { title: 'Klinik Hemodialisa Terpadu', nazhir: 'Dompet Dhuafa', roi: '12-14% p.a', fund: 'Rp 4,5 Miliar', status: 'Onboarding' },
               { title: 'Sentra Agrobisnis Kopi Wakaf', nazhir: 'Sinergi Foundation', roi: '10% p.a', fund: 'Rp 2,1 Miliar', status: 'Due Diligence' },
               { title: 'Rumah Sakit Ibu & Anak', nazhir: 'Wakaf Al-Azhar', roi: '15% p.a', fund: 'Rp 12 Miliar', status: 'Funding' },
             ].map((proj, idx) => (
               <motion.div key={idx} variants={fadeInUp} className="glass-card" style={{ background: 'white' }}>
                 <div style={{ background: 'var(--bg-offset)', fontSize: '0.8rem', padding: '4px 12px', borderRadius: '20px', display: 'inline-block', marginBottom: '16px', fontWeight: 'bold', color: 'var(--text-main)' }}>
                   {proj.status}
                 </div>
                 <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{proj.title}</h4>
                 <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Dikelola oleh: <strong>{proj.nazhir}</strong></p>
                 <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eef2f6', paddingTop: '16px', marginTop: 'auto' }}>
                   <div>
                     <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Proyeksi ROI</span>
                     <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--secondary-color)' }}>{proj.roi}</p>
                   </div>
                   <div style={{ textAlign: 'right' }}>
                     <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Kebutuhan Dana</span>
                     <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--primary-color)' }}>{proj.fund}</p>
                   </div>
                 </div>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Retail & CSR Hub */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" style={{ marginBottom: '40px' }}>
             <h2>Retail Waqf & CSR Hub</h2>
             <p style={{ maxWidth: '600px', margin: '0 auto' }}>Menjembatani berbagai tipe pendana untuk berpartisipasi dalam perwakafan berskala besar melalui jalur yang aman dan terstruktur.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid-2">
             <motion.div variants={fadeInUp} style={{ padding: '32px', border: '1px solid #eef2f6', borderRadius: '16px', background: 'white' }}>
               <Briefcase size={32} color="var(--primary-light)" style={{ marginBottom: '16px' }} />
               <h3>Integrasi CSR (Wakaf Institusional)</h3>
               <p>Memfasilitasi penyaluran dana CSR (<em>Corporate Social Responsibility</em>) dari perusahaan untuk diubah menjadi aset wakaf yang <em>sustainable</em>. FWP membantu pencocokan program (<em>business matching</em>) antara Korporasi dan Lembaga Nazhir pelaksana teknis operasional.</p>
               <button className="btn btn-outline" style={{ marginTop: '16px' }}>Ajukan Kemitraan CSR</button>
             </motion.div>

             <motion.div variants={fadeInUp} style={{ padding: '32px', border: '1px solid #eef2f6', borderRadius: '16px', background: 'white' }}>
               <Coins size={32} color="var(--secondary-color)" style={{ marginBottom: '16px' }} />
               <h3>Securities Crowdfunding (SCF) & Retail</h3>
               <p>Bekerjasama dengan platform <em>Securities Crowdfunding</em> syariah (seperti Shafiq atau LBS Urun Dana) guna menghimpun Wakaf Uang secara ritel maupun jaringan investor untuk proyek-proyek wakaf produktif bervaluasi tinggi.</p>
               <button className="btn btn-outline" style={{ marginTop: '16px' }}>Gabung sebagai Investor Jaringan</button>
             </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BusinessMatchingPage;
