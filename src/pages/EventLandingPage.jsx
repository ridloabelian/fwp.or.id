import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/event';
import { 
  Calendar, MapPin, Clock, Users, CheckCircle, 
  ChevronDown, ChevronUp, Phone, Mail, Globe,
  Sparkles, Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }) => (
    <div style={{ textAlign: 'center', padding: '12px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
      <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>{String(value).padStart(2, '0')}</div>
      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>{label}</div>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <TimeBox value={timeLeft.days} label="HARI" />
      <TimeBox value={timeLeft.hours} label="JAM" />
      <TimeBox value={timeLeft.minutes} label="MENIT" />
      <TimeBox value={timeLeft.seconds} label="DETIK" />
    </div>
  );
};

// FAQ Accordion Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border-color)', padding: '16px 0' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
          fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', padding: '0'
        }}
      >
        {question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }}
          style={{ marginTop: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function EventLandingPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ===== HERO SECTION ===== */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a3a5c 50%, var(--tertiary-color) 100%)',
        color: 'white', padding: '80px 0 60px', position: 'relative', overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <motion.div variants={fadeInUp} style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.15)', padding: '8px 20px', borderRadius: '50px',
              marginBottom: '12px', backdropFilter: 'blur(10px)'
            }}>
              <Sparkles size={18} />
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{eventData.hero.tagline}</span>
            </motion.div>

            <motion.div variants={fadeInUp} style={{ 
              fontSize: '1.1rem', opacity: 0.85, marginBottom: '24px', fontStyle: 'italic'
            }}>
              {eventData.hero.subTagline}
            </motion.div>

            <motion.h1 variants={fadeInUp} style={{ 
              fontSize: '3.5rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.1,
              textShadow: '0 2px 20px rgba(0,0,0,0.2)'
            }}>
              {eventData.hero.title}
            </motion.h1>

            <motion.p variants={fadeInUp} style={{ 
              fontSize: '1.2rem', opacity: 0.9, marginBottom: '32px', lineHeight: 1.6 
            }}>
              {eventData.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '50px' }}>
                <Calendar size={18} />
                <span>{eventData.hero.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '50px' }}>
                <MapPin size={18} />
                <span>{eventData.hero.venue}</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} style={{ marginBottom: '40px' }}>
              <CountdownTimer targetDate={eventData.hero.countdown} />
            </motion.div>

            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <a href="#registrasi" className="btn" style={{ 
                background: 'var(--secondary-color)', color: 'white', fontSize: '1.1rem', padding: '14px 32px'
              }}>
                Daftar Sekarang
              </a>
              <Link to="/waqf-leaders-summit" className="btn btn-outline" style={{ 
                borderColor: 'white', color: 'white', fontSize: '1.1rem', padding: '14px 32px'
              }}>
                Info Lengkap
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== THEME SECTION ===== */}
      <section className="section" style={{ background: 'var(--bg-offset)' }}>
        <div className="container">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
          >
            <motion.div variants={fadeInUp} style={{ color: 'var(--secondary-color)', fontWeight: 600, marginBottom: '12px' }}>
              TEMA UTAMA
            </motion.div>
            <motion.h2 variants={fadeInUp} style={{ marginBottom: '16px' }}>
              {eventData.theme.title}
            </motion.h2>
            <motion.p variants={fadeInUp} style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              {eventData.theme.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== SPEAKERS SECTION ===== */}
      <section className="section" id="pembicara">
        <div className="container">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <motion.div variants={fadeInUp} style={{ color: 'var(--secondary-color)', fontWeight: 600, marginBottom: '12px' }}>
              NARASUMBER
            </motion.div>
            <motion.h2 variants={fadeInUp}>Pembicara & Panelis</motion.h2>
            <motion.p variants={fadeInUp} style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              32 pemimpin, regulator, akademisi, dan praktisi wakaf terkemuka Indonesia
            </motion.p>
          </motion.div>

          {/* Confirmed Speakers */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ marginBottom: '48px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', color: '#16a34a' }}>
              <CheckCircle size={20} /> Sudah Konfirmasi Hadir
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
              {eventData.speakers.confirmed.map((speaker, index) => (
                <motion.div key={index} variants={itemScale} className="glass-card" style={{
                  padding: '20px', borderLeft: '4px solid #16a34a', display: 'flex', alignItems: 'flex-start', gap: '12px'
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #16a34a, #22c55e)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0
                  }}>
                    {speaker.name ? speaker.name.split(' ').filter(n => n).map(n => n[0]).join('').substring(0, 2) : '?'}
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '1rem' }}>{speaker.name}</h4>
                    <p style={{ margin: '0 0 4px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{speaker.role}</p>
                    <p style={{ margin: 0, color: 'var(--secondary-color)', fontSize: '0.8rem', fontStyle: 'italic' }}>{speaker.session}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pending Speakers */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b' }}>
              <Clock size={20} /> Dalam Proses Konfirmasi
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
              {eventData.speakers.pending.map((speaker, index) => (
                <motion.div key={index} variants={itemScale} className="glass-card" style={{
                  padding: '20px', borderLeft: '4px solid #f59e0b', display: 'flex', alignItems: 'flex-start', gap: '12px'
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0
                  }}>
                    {speaker.name ? speaker.name.split(' ').filter(n => n).map(n => n[0]).join('').substring(0, 2) : '?'}
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '1rem' }}>{speaker.name}</h4>
                    <p style={{ margin: '0 0 4px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{speaker.role}</p>
                    <p style={{ margin: 0, color: 'var(--secondary-color)', fontSize: '0.8rem', fontStyle: 'italic' }}>{speaker.session}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== REGISTRATION SECTION ===== */}
      <section className="section" id="registrasi" style={{ background: 'var(--bg-offset)' }}>
        <div className="container">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <motion.div variants={fadeInUp} style={{ color: 'var(--secondary-color)', fontWeight: 600, marginBottom: '12px' }}>
              REGISTRASI
            </motion.div>
            <motion.h2 variants={fadeInUp}>Pilih Kategori Peserta</motion.h2>
            <motion.p variants={fadeInUp} style={{ color: 'var(--text-muted)' }}>
              Pilih kategori yang sesuai dengan status Anda
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" animate="visible"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '48px' }}
          >
            {eventData.registration.categories.map((category) => (
              <motion.div key={category.id} variants={itemScale} className="glass-card" style={{
                padding: '32px', textAlign: 'center', position: 'relative', overflow: 'hidden'
              }}>
                {category.id === 'member' && (
                  <div style={{
                    position: 'absolute', top: '16px', right: '-35px', background: 'var(--secondary-color)', color: 'white',
                    padding: '4px 40px', transform: 'rotate(45deg)', fontSize: '0.75rem', fontWeight: 700
                  }}>
                    BEST VALUE
                  </div>
                )}
                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '50%', background: 'var(--bg-offset)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'
                }}>
                  <Users size={32} color="var(--primary-color)" />
                </div>
                <h3 style={{ marginBottom: '8px' }}>{category.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>{category.description}</p>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{category.originalPrice}</span>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-color)' }}>{category.price}</div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--secondary-color)' }}>per orang</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', textAlign: 'left' }}>
                  {category.benefits.map((benefit, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', fontSize: '0.9rem' }}>
                      <CheckCircle size={16} color="#16a34a" /> {benefit}
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn" style={{ width: '100%', display: 'block' }}>
                  Daftar {category.name}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Package Deals */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <h3 style={{ textAlign: 'center', marginBottom: '24px' }}>Paket Spesial</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {eventData.registration.packages.map((pkg) => (
                <motion.div key={pkg.id} variants={itemScale} className="glass-card" style={{
                  padding: '24px', textAlign: 'center', border: pkg.id === 'package3' ? '2px solid var(--secondary-color)' : '1px solid var(--border-color)'
                }}>
                  <h4 style={{ marginBottom: '8px' }}>{pkg.name}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '12px' }}>{pkg.description}</p>
                  {pkg.originalPrice && (
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{pkg.originalPrice}</span>
                  )}
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '8px' }}>{pkg.price}</div>
                  {pkg.discount !== '0%' && (
                    <div style={{ 
                      display: 'inline-block', background: 'var(--secondary-color)', color: 'white',
                      padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px'
                    }}>
                      Diskon {pkg.discount}
                    </div>
                  )}
                  {pkg.savings && (
                    <p style={{ color: '#16a34a', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>{pkg.savings}</p>
                  )}
                  <a href="#" className="btn btn-outline" style={{ width: '100%', display: 'block' }}>
                    Pilih Paket
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SPONSORSHIP SECTION ===== */}
      <section className="section" id="sponsorship">
        <div className="container">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <motion.div variants={fadeInUp} style={{ color: 'var(--secondary-color)', fontWeight: 600, marginBottom: '12px' }}>
              SPONSORSHIP
            </motion.div>
            <motion.h2 variants={fadeInUp}>Jadi Sponsor WLS 2026</motion.h2>
            <motion.p variants={fadeInUp} style={{ color: 'var(--text-muted)' }}>
              Dukung event strategis nasional dan dapatkan exposure maksimal untuk brand Anda
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" animate="visible"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}
          >
            {eventData.sponsorship.tiers.map((tier, index) => (
              <motion.div key={tier.id} variants={itemScale} className="glass-card" style={{
                padding: '28px', position: 'relative', overflow: 'hidden',
                border: index === 0 ? '2px solid #fbbf24' : '1px solid var(--border-color)'
              }}>
                {index === 0 && (
                  <div style={{
                    position: 'absolute', top: '12px', right: '-30px', background: '#fbbf24', color: 'var(--primary-color)',
                    padding: '4px 35px', transform: 'rotate(45deg)', fontSize: '0.7rem', fontWeight: 700
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <Star size={32} color={index === 0 ? '#fbbf24' : 'var(--primary-color)'} style={{ marginBottom: '8px' }} />
                  <h3 style={{ marginBottom: '4px' }}>{tier.name}</h3>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--primary-color)' }}>{tier.price}</div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '5px 0', fontSize: '0.85rem' }}>
                      <CheckCircle size={14} color="#16a34a" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp} initial="hidden" animate="visible"
            className="glass-card" style={{ 
              padding: '32px', textAlign: 'center', maxWidth: '600px', margin: '0 auto',
              background: 'linear-gradient(135deg, var(--primary-color), var(--tertiary-color))', color: 'white'
            }}
          >
            <h3 style={{ marginBottom: '12px', color: 'white' }}>Tertarik Menjadi Sponsor?</h3>
            <p style={{ marginBottom: '20px', opacity: 0.9 }}>
              Hubungi PIC Sponsorship kami untuk proposal lengkap dan penawaran khusus
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${eventData.sponsorship.contact.phone}`} style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none',
                background: 'rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '50px'
              }}>
                <Phone size={16} /> {eventData.sponsorship.contact.phone}
              </a>
              <a href={`mailto:${eventData.sponsorship.contact.email}`} style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none',
                background: 'rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '50px'
              }}>
                <Mail size={16} /> {eventData.sponsorship.contact.email}
              </a>
              <a href="mailto:fwpsekretariat@gmail.com?subject=Proposal Sponsorship WLS 2026" style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none',
                background: 'rgba(255,255,255,0.3)', padding: '10px 20px', borderRadius: '50px', fontWeight: 600
              }}>
                <Download size={16} /> Unduh Proposal
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="section" style={{ background: 'var(--bg-offset)' }}>
        <div className="container">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <motion.div variants={fadeInUp} style={{ color: 'var(--secondary-color)', fontWeight: 600, marginBottom: '12px' }}>
              FAQ
            </motion.div>
            <motion.h2 variants={fadeInUp}>Pertanyaan Umum</motion.h2>
          </motion.div>

          <motion.div 
            variants={fadeInUp} initial="hidden" animate="visible"
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            {eventData.faq.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <motion.div variants={fadeInUp} style={{ color: 'var(--secondary-color)', fontWeight: 600, marginBottom: '12px' }}>
              KONTAK
            </motion.div>
            <motion.h2 variants={fadeInUp}>Hubungi Kami</motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" animate="visible"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}
          >
            <motion.div variants={itemScale} className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <Phone size={28} color="var(--primary-color)" style={{ marginBottom: '12px' }} />
              <h4 style={{ marginBottom: '4px' }}>Telepon</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>{eventData.contact.phone}</p>
            </motion.div>
            <motion.div variants={itemScale} className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <Mail size={28} color="var(--primary-color)" style={{ marginBottom: '12px' }} />
              <h4 style={{ marginBottom: '4px' }}>Email</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>{eventData.contact.email}</p>
            </motion.div>
            <motion.div variants={itemScale} className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <Globe size={28} color="var(--primary-color)" style={{ marginBottom: '12px' }} />
              <h4 style={{ marginBottom: '4px' }}>Instagram</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>{eventData.contact.instagram}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <div className="sticky-cta" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: 'white', padding: '12px 20px', boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
        display: 'flex', gap: '12px', zIndex: 1000, justifyContent: 'center'
      }}>
        <a href="#registrasi" className="btn btn-primary" style={{ flex: 1, maxWidth: '200px', textAlign: 'center' }}>
          Daftar Sekarang
        </a>
        <a href="mailto:fwpsekretariat@gmail.com?subject=Proposal Sponsorship WLS 2026" className="btn btn-outline" style={{ flex: 1, maxWidth: '200px', textAlign: 'center' }}>
          Download Proposal
        </a>
      </div>

      {/* Spacer for sticky CTA */}
      <div style={{ height: '70px' }}></div>
    </div>
  );
}
