import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, ChartBar, Building2, Leaf, Award, BookOpen, Phone, Mail, Globe, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import CountUpComponent from 'react-countup';
const CountUp = CountUpComponent.default || CountUpComponent;
import SEO from '../components/SEO';
import { homeStats, chartData } from '../data/stats';
import { nazhirList } from '../data/nazhir';
import { aboutData, milestones } from '../data/about';

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

const itemScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const LandingPage = () => {
  return (
    <>
      <SEO 
        title="Beranda" 
        description="Portal resmi Forum Wakaf Produktif. Mengorkestrasi gerakan Indonesia Berwakaf untuk memajukan ekosistem wakaf produktif secara nasional."
      />
      {/* Hero Section */}
      <section className="hero" id="beranda">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center', width: '100%' }}>
            <motion.div 
              className="hero-content"
              animate="visible"
              variants={staggerContainer}
              style={{ textAlign: 'left', margin: 0 }}
            >
              <motion.h1 className="hero-title" variants={fadeInUp} style={{ fontSize: '3.8rem', lineHeight: '1.15', marginBottom: '24px' }}>
                Forum Wakaf Produktif
              </motion.h1>
              <motion.p className="hero-subtitle" variants={fadeInUp} style={{ marginLeft: 0, fontSize: '1.2rem', maxWidth: '600px', marginBottom: '40px' }}>
                Dilaunching 7 Desember 2016, FWP menjadi katalisator pengembangan wakaf produktif di Indonesia. 
                Saat ini tercatat 49 Lembaga Nazhir yang memimpin transformasi wakaf tunai dan pengembangan aset produktif menuju Indonesia Emas 2045.
              </motion.p>
              <motion.div className="hero-actions" variants={fadeInUp} style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: '20px', display: 'flex' }}>
                <motion.a href="https://satuwakaf.id" target="_blank" rel="noreferrer" className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ whiteSpace: 'nowrap' }}>
                  Tunaikan Wakaf <ArrowRight size={20} />
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                  <Link to="/tentang-kami" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}>
                    Pelajari Peta Jalan
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* HTML5 Animation Section */}
            <motion.div 
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{ position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
            >
              {/* Center Glow */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', width: '350px', height: '350px', background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 60%)', zIndex: 0 }}
              />

              {/* Center Logo/Icon */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-card"
                style={{ width: '140px', height: '140px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(255,255,255,0.95)', zIndex: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              >
                <img src="/logo.png" alt="FWP" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
              </motion.div>

              {/* Floating Element 1 - Building */}
              <motion.div 
                animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="glass-card"
                style={{ position: 'absolute', top: '15%', left: '-5%', padding: '20px', borderRadius: '20px', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', gap: '16px', zIndex: 3, boxShadow: 'var(--shadow-xl)', minWidth: '220px' }}
              >
                <div style={{ padding: '12px', background: 'rgba(22, 174, 202, 0.15)', color: 'var(--tertiary-color)', borderRadius: '14px' }}>
                  <Building2 size={28} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sektor Komersial</div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--text-main)' }}>LKS-PWU</div>
                </div>
              </motion.div>

              {/* Floating Element 2 - Target */}
              <motion.div 
                animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="glass-card"
                style={{ position: 'absolute', bottom: '15%', right: '-15%', padding: '20px', borderRadius: '20px', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', gap: '16px', zIndex: 3, boxShadow: 'var(--shadow-xl)', minWidth: '220px' }}
              >
                <div style={{ padding: '12px', background: 'rgba(139, 197, 63, 0.15)', color: 'var(--secondary-color)', borderRadius: '14px' }}>
                  <Target size={28} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Pemberdayaan</div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--text-main)' }}>Produktif</div>
                </div>
              </motion.div>

              {/* Floating Element 3 - Users */}
              <motion.div 
                animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className="glass-card"
                style={{ position: 'absolute', top: '10%', right: '5%', padding: '16px', borderRadius: '50%', background: 'rgba(255,255,255,0.95)', zIndex: 1, boxShadow: 'var(--shadow-lg)' }}
              >
                <Users size={32} color="var(--primary-color)" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Quick Responsive style for grid using standard media queries would normally go to CSS, but inline we handle layout shift below if needed via a wrapper class */}
        </div>
      </section>

      {/* Live Dashboard Section */}
      <section className="section" style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <motion.div 
            className="glass-card"
            style={{ background: 'white', padding: '40px', display: 'flex', flexDirection: 'column', gap: '40px' }}
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            {/* Top Stats Cards */}
            <div className="grid-3">
              {homeStats.map((stat, idx) => {
                const isDecimal = stat.number % 1 !== 0;
                let color = 'var(--primary-color)';
                if (idx === 1) color = 'var(--secondary-color)';
                if (idx === 2) color = 'var(--tertiary-color)';
                
                return (
                  <motion.div 
                    key={idx} 
                    className={`text-center ${idx === 1 ? 'stat-item' : ''}`} 
                    variants={fadeInUp}
                  >
                    <h3 style={{ fontSize: '3rem', color: color, margin: 0 }}>
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        separator="."
                        decimals={isDecimal ? 1 : 0}
                        decimal=","
                        prefix={stat.prefix || ''}
                        suffix={stat.unit || ''}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </h3>
                    <p style={{ fontWeight: '600', margin: 0 }}>{stat.label}</p>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{stat.disclaimer}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Recharts Graphical Visualization */}
            <motion.div variants={fadeInUp} style={{ padding: '24px', background: 'var(--bg-offset)', borderRadius: '16px', height: '350px' }}>
              <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem' }}>Tren Penghimpunan Wakaf Uang</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Dalam Milyar Rupiah (Tahun ke Tahun)</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '12px', height: '12px', background: 'var(--secondary-color)', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Live Data Monitoring</span>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height="80%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(139, 197, 63, 0.1)' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', background: '#132c3f', color: 'white' }} 
                  />
                  <Bar dataKey="Capaian" fill="var(--secondary-color)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-bg" id="tentang">
        <div className="container grid-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }} variants={fadeInUp}>
              Tentang Forum Wakaf Produktif
            </motion.h2>
            <motion.p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '24px' }} variants={fadeInUp}>
              {aboutData.hero?.description || 'Forum Wakaf Produktif berperan menjadi katalisator pengembangan wakaf produktif di Indonesia.'}
            </motion.p>
            <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} variants={staggerContainer}>
              <motion.div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }} variants={fadeInUp}>
                <div style={{ padding: '8px', background: 'var(--secondary-color)', color: 'white', borderRadius: '50%' }}>
                  <Users size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.2rem' }}>49 Lembaga Nazhir</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Anggota aktif yang terdaftar resmi di Badan Wakaf Indonesia (BWI).</p>
                </div>
              </motion.div>
              <motion.div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }} variants={fadeInUp}>
                <div style={{ padding: '8px', background: 'var(--tertiary-color)', color: 'white', borderRadius: '50%' }}>
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.2rem' }}>Dilaunching 2016</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>7 Desember 2016 di Hotel Sari Pan Pacific Jakarta dengan 11 anggota pendiri.</p>
                </div>
              </motion.div>
              <motion.div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }} variants={fadeInUp}>
                <div style={{ padding: '8px', background: 'var(--primary-color)', color: 'white', borderRadius: '50%' }}>
                  <Award size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.2rem' }}>Legal Formal</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>SK KEMENKUMHAM AHU-0010589.AH.01.07.TAHUN 2018</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="glass-card" 
            style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'white' }}
            initial="hidden"
            animate="visible"
            variants={itemScale}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
             <h3 style={{ borderBottom: '2px solid var(--bg-offset)', paddingBottom: '16px' }}>Visi</h3>
             <p><strong>&quot;{aboutData.vision?.content || 'Menjadi katalisator pengembangan wakaf produktif di Indonesia'}&quot;</strong></p>
             <h3 style={{ borderBottom: '2px solid var(--bg-offset)', paddingBottom: '16px', marginTop: '10px' }}>Misi Utama</h3>
             <ul style={{ paddingLeft: '20px', fontSize: '0.95rem' }}>
               {(aboutData.mission?.items || []).slice(0, 3).map((item, idx) => (
                 <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
               ))}
             </ul>
             <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px' }}>
               <Building2 size={48} color="var(--primary-light)" />
               <Leaf size={48} color="var(--secondary-color)" />
               <Target size={48} color="var(--tertiary-color)" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section" id="milestone">
        <div className="container">
          <motion.div 
            className="text-center" 
            style={{ marginBottom: '60px' }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2>Milestone FWP</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Perjalanan prestasi Forum Wakaf Produktif dari 2016 hingga saat ini.</p>
          </motion.div>
          
          <motion.div 
            className="milestones-grid"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {(milestones || []).slice(0, 6).map((milestone, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="milestone-card"
                style={{ 
                  padding: '24px', 
                  background: 'white', 
                  borderRadius: '12px', 
                  boxShadow: 'var(--shadow-md)',
                  borderLeft: '4px solid var(--secondary-color)'
                }}
              >
                <span style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--secondary-dark)', 
                  fontWeight: 'bold',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  {milestone?.year || ''}
                </span>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>{milestone?.title || ''}</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {milestone?.description || ''}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            style={{ marginTop: '40px', textAlign: 'center' }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Link to="/tentang-kami" className="btn btn-outline">
              Lihat Semua Milestone →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Program/Focus Section */}
      <section className="section section-bg" id="program">
        <div className="container">
          <motion.div 
            className="text-center" 
            style={{ marginBottom: '60px' }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2>Fokus & Program Strategis</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Langkah nyata FWP dalam mewujudkan ekosistem wakaf yang lebih produktif di Indonesia.</p>
          </motion.div>
          
          <motion.div 
            className="grid-3"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="glass-card" variants={fadeInUp} whileHover={{ y: -8, scale: 1.02 }}>
              <div className="feature-icon" style={{ background: 'rgba(139, 197, 63, 0.15)', color: 'var(--secondary-color)' }}>
                <BookOpen />
              </div>
              <h3>Edukasi & Literasi Wakaf</h3>
              <p>Meningkatkan pemahaman masyarakat tentang konsep wakaf produktif melalui program Waqf Goes To Campus dan campaign nasional.</p>
            </motion.div>
            
            <motion.div className="glass-card" variants={fadeInUp} whileHover={{ y: -8, scale: 1.02 }}>
              <div className="feature-icon" style={{ background: 'rgba(22, 174, 202, 0.15)', color: 'var(--tertiary-color)' }}>
                <Users />
              </div>
              <h3>Peningkatan Kapasitas Nazhir</h3>
              <p>Program sertifikasi dan pelatihan untuk Nazhir melalui SKKNI Nazhir Wakaf dan Lembaga Sertifikasi Profesi (LSP).</p>
            </motion.div>
            
            <motion.div className="glass-card" variants={fadeInUp} whileHover={{ y: -8, scale: 1.02 }}>
              <div className="feature-icon" style={{ background: 'rgba(19, 44, 63, 0.1)', color: 'var(--primary-color)' }}>
                <ChartBar />
              </div>
              <h3>Inovasi Produk Perwakafan</h3>
              <p>Pengembangan produk: Wakaf Manfaat Polis Asuransi, Wakaf Saham, CWLS, Waqf Link Sukuk, dan Cash Waqf Link Deposito.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section" id="pengurus">
        <div className="container">
          <motion.div 
            className="text-center" 
            style={{ marginBottom: '60px' }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2>Pengurus FWP Periode 2024-2027</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Struktur Kelengkapan Organisasi masih dalam proses penyusunan untuk setiap bidang.
            </p>
          </motion.div>
          
          <motion.div 
            className="leadership-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {(aboutData.leadership?.members || []).map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="leader-card"
                style={{ 
                  padding: '32px', 
                  background: 'white', 
                  borderRadius: '16px', 
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)'
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 20px',
                  border: '4px solid var(--secondary-color)',
                  background: 'var(--bg-offset)'
                }}>
                  <img
                    src={`/speakers/${member.position === 'Ketua' ? 'rayan' : member.position === 'Sekretaris' ? 'alla' : 'herri'}.png`}
                    alt={`Foto ${member.name}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block',
                      transform: member.position === 'Bendahara' ? 'scale(1.35)' : 'none'
                    }}
                  />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{member?.name || ''}</h3>
                <p style={{ color: 'var(--secondary-dark)', fontWeight: 'bold', margin: 0 }}>{member?.position || ''}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            style={{ marginTop: '40px', textAlign: 'center' }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Link to="/tentang-kami" className="btn btn-outline">
              Lihat Struktur Lengkap →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Nazhir/Anggota Section */}
      <section className="section section-bg" id="nazhir">
        <div className="container text-center">
          <motion.h2
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
            49 Lembaga Nazhir Anggota FWP
          </motion.h2>
          <motion.p 
            style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '40px' }}
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
            Forum Wakaf Produktif beranggotakan berbagai Lembaga Nazhir profesional yang terdaftar resmi di Badan Wakaf Indonesia (BWI), tersebar di 8 wilayah Indonesia.
          </motion.p>
          
          <motion.div 
            className="grid-4" 
            style={{ gap: '16px' }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {nazhirList.slice(0, 8).map((nazhir) => (
              <motion.div
                key={nazhir.no}
                className="glass-card" 
                style={{ padding: '24px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                variants={itemScale}
                whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-lg)' }}
              >
                <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>{nazhir.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            style={{ marginTop: '50px' }}
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
            <Link to="/tentang-kami" className="btn btn-secondary">
              Lihat Semua Anggota →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="kontak">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="contact-card"
            style={{ 
              maxWidth: '600px', 
              margin: '0 auto', 
              padding: '40px', 
              background: 'white', 
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <h2 style={{ marginBottom: '24px' }}>Hubungi Kami</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                <Phone size={20} color="var(--primary-color)" /> {aboutData.contact?.phone || '0813 8966 7055'}
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                <Mail size={20} color="var(--primary-color)" /> {aboutData.contact?.email || 'fwpsekretariat@gmail.com'}
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                <Globe size={20} color="var(--primary-color)" /> @{aboutData.contact?.instagram || 'forumwakafproduktif'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default LandingPage;
