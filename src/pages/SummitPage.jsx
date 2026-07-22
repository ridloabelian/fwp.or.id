import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, MapPin, Users, Award, ArrowRight, Leaf,
  Clock, Mic, Coffee, Star, CheckCircle, XCircle, HelpCircle,
  Send, Mail, Phone, Globe, Building2, GraduationCap, Landmark,
  Briefcase, Heart, TrendingUp, ChevronRight, Ticket, MapPinCheck, Download
} from 'lucide-react';
import SEO from '../components/SEO';
import {
  summitCommittee,
  summitDetails,
  summitSpeakers,
  rundownDay1,
  rundownDay2,
  sponsorshipPackages,
  eventStats
} from '../data/summit';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

// Status badge component
const StatusBadge = ({ status }) => {
  const styles = {
    confirmed: { bg: '#dcfce7', color: '#166534', icon: CheckCircle, text: 'Confirmed' },
    pending: { bg: '#fef3c7', color: '#92400e', icon: HelpCircle, text: 'Pending' },
    negotiating: { bg: '#dbeafe', color: '#1e40af', icon: TrendingUp, text: 'In Progress' },
    'not-sent': { bg: '#fee2e2', color: '#991b1b', icon: XCircle, text: 'Not Sent' },
  };
  const style = styles[status] || styles.pending;
  const Icon = style.icon;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '4px',
      padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem',
      fontWeight: 600, background: style.bg, color: style.color
    }}>
      <Icon size={12} /> {style.text}
    </span>
  );
};

// Category icon
const CategoryIcon = ({ category }) => {
  const icons = {
    'Pemerintah': Landmark,
    'Industri': Briefcase,
    'Akademisi': GraduationCap,
    'Ulama': Heart,
    'FWP': Star,
    'Influencer': Mic,
  };
  const Icon = icons[category] || Users;
  return <Icon size={16} style={{ color: 'var(--secondary-color)' }} />;
};

const SummitPage = () => {
  return (
    <>
      <SEO
        title="Waqf Leaders Summit 2026 | Forum Wakaf Produktif"
        description="Forum strategis nasional untuk transformasi wakaf produktif. 22-23 Juli 2026, Holiday Inn Pasteur Bandung. Daftar pembicara, rundown, sponsorship, dan registrasi."
      />

      {/* ===== HERO SECTION ===== */}
      <section className="section" style={{
        paddingTop: '120px',
        paddingBottom: '60px',
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%)',
        color: 'white'
      }}>
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.15)', padding: '8px 20px',
              borderRadius: '50px', marginBottom: '24px', fontSize: '0.9rem'
            }}>
              <Leaf size={18} />
              <span>{summitDetails.tagline}</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white',
              marginBottom: '16px', lineHeight: '1.2'
            }}>
              {summitDetails.name}
            </motion.h1>

            <motion.p variants={fadeInUp} style={{
              fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 32px',
              color: 'rgba(255,255,255,0.9)'
            }}>
              {summitDetails.description}
            </motion.p>

            <motion.div variants={fadeInUp} style={{
              display: 'flex', justifyContent: 'center', gap: '24px',
              flexWrap: 'wrap', marginBottom: '40px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={20} style={{ color: 'var(--secondary-color)' }} />
                <span style={{ fontWeight: 500 }}>{summitDetails.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={20} style={{ color: 'var(--secondary-color)' }} />
                <span style={{ fontWeight: 500 }}>{summitDetails.venue}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={20} style={{ color: 'var(--secondary-color)' }} />
                <span style={{ fontWeight: 500 }}>200+ Peserta</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} style={{
              display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap'
            }}>
              <a href="#registrasi" className="btn btn-secondary" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px'
              }}>
                <Ticket size={18} /> Daftar Sekarang <ArrowRight size={18} />
              </a>
              <a href="#rundown" className="btn btn-outline" style={{
                borderColor: 'white', color: 'white'
              }}>
                Lihat Rundown
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== THEME SECTION ===== */}
      <section className="section section-bg">
        <div className="container">
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer} className="text-center"
          >
            <motion.h2 variants={fadeInUp} style={{ marginBottom: '16px' }}>Tema Utama</motion.h2>
            <motion.div variants={fadeInUp} className="glass-card" style={{
              maxWidth: '850px', margin: '0 auto',
              background: 'linear-gradient(135deg, var(--primary-color), var(--tertiary-color))',
              color: 'white', border: 'none'
            }}>
              <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', margin: 0, fontWeight: 600, color: 'white' }}>
                &ldquo;{summitDetails.theme}&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="section" style={{ padding: '40px 0', background: 'var(--bg-offset)' }}>
        <div className="container">
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '24px', textAlign: 'center'
            }}
          >
            {eventStats.map((stat, idx) => (
              <motion.div key={idx} variants={itemScale} className="glass-card" style={{ padding: '24px 16px' }}>
                <div style={{
                  fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-color)',
                  fontFamily: 'var(--font-heading)', lineHeight: 1
                }}>
                  {stat.value}{stat.suffix}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SPEAKERS SECTION ===== */}
      <section className="section" id="pembicara">
        <div className="container">
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer} className="text-center"
            style={{ marginBottom: '48px' }}
          >
            <motion.div variants={fadeInUp} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--secondary-color)', marginBottom: '16px'
            }}>
              <Mic size={24} />
              <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Narasumber</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} style={{ marginBottom: '12px' }}>Pembicara & Panelis</motion.h2>
            <motion.p variants={fadeInUp} style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
              Para pemimpin, regulator, akademisi, dan praktisi wakaf terkemuka Indonesia.
            </motion.p>
          </motion.div>

          {/* Confirmed Speakers */}
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer} style={{ marginBottom: '48px' }}
          >
            <h3 style={{
              fontSize: '1.2rem', marginBottom: '20px', display: 'flex',
              alignItems: 'center', gap: '8px', color: 'var(--primary-color)'
            }}>
              <CheckCircle size={20} style={{ color: '#16a34a' }} />
              Sudah Konfirmasi Hadir
            </h3>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {summitSpeakers.confirmed.map((speaker) => (
                <motion.div key={speaker.id} variants={itemScale} className="glass-card" style={{
                  padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px',
                  borderLeft: '4px solid #16a34a'
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--tertiary-color))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0
                  }}>
                    {speaker.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                      {speaker.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                      {speaker.title}
                    </div>
                    {speaker.role && (
                      <div style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', fontStyle: 'italic', marginBottom: '8px' }}>
                        {speaker.role}
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CategoryIcon category={speaker.category} />
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{speaker.category}</span>
                      <StatusBadge status={speaker.status} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pending Speakers */}
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer} style={{ marginBottom: '48px' }}
          >
            <h3 style={{
              fontSize: '1.2rem', marginBottom: '20px', display: 'flex',
              alignItems: 'center', gap: '8px', color: 'var(--primary-color)'
            }}>
              <Clock size={20} style={{ color: '#f59e0b' }} />
              Dalam Proses Konfirmasi
            </h3>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {summitSpeakers.pending.map((speaker) => (
                <motion.div key={speaker.id} variants={itemScale} className="glass-card" style={{
                  padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px',
                  borderLeft: '4px solid #f59e0b'
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0
                  }}>
                    {speaker.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                      {speaker.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                      {speaker.title}
                    </div>
                    {speaker.role && (
                      <div style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', fontStyle: 'italic', marginBottom: '8px' }}>
                        {speaker.role}
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CategoryIcon category={speaker.category} />
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{speaker.category}</span>
                      <StatusBadge status={speaker.status} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Proposed Speakers */}
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer}
          >
            <h3 style={{
              fontSize: '1.2rem', marginBottom: '20px', display: 'flex',
              alignItems: 'center', gap: '8px', color: 'var(--primary-color)'
            }}>
              <Star size={20} style={{ color: 'var(--secondary-color)' }} />
              Usulan Pembicara Lain
            </h3>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '12px'
            }}>
              {summitSpeakers.proposed.map((speaker, idx) => (
                <motion.div key={idx} variants={itemScale} className="glass-card" style={{
                  padding: '16px', textAlign: 'center', opacity: 0.7
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'var(--bg-offset)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 8px', color: 'var(--text-muted)'
                  }}>
                    <Star size={18} />
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                    {speaker.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    {speaker.title}
                  </div>
                  <span style={{
                    fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px',
                    background: 'var(--bg-offset)', color: 'var(--text-muted)'
                  }}>
                    {speaker.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== RUNDOWN SECTION ===== */}
      <section className="section section-bg" id="rundown">
        <div className="container">
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer} className="text-center"
            style={{ marginBottom: '48px' }}
          >
            <motion.div variants={fadeInUp} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--secondary-color)', marginBottom: '16px'
            }}>
              <Clock size={24} />
              <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Agenda</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} style={{ marginBottom: '12px' }}>Rundown Acara</motion.h2>
            <motion.p variants={fadeInUp} style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
              Dua hari penuh inspirasi, kolaborasi, dan aksi untuk transformasi wakaf produktif.
            </motion.p>
          </motion.div>

          {/* Day 1 */}
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer} style={{ marginBottom: '48px' }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px',
              padding: '12px 20px', background: 'var(--primary-color)', color: 'white',
              borderRadius: '12px', width: 'fit-content'
            }}>
              <Calendar size={20} />
              <span style={{ fontWeight: 600 }}>Hari 1 — Rabu, 22 Juli 2026</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {rundownDay1.map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} style={{
                  display: 'grid', gridTemplateColumns: '140px 1fr',
                  gap: '16px', padding: '16px 20px', background: 'white',
                  borderRadius: '12px', boxShadow: 'var(--shadow-sm)',
                  alignItems: 'start', borderLeft: '4px solid ' + (
                    item.type === 'keynote' || item.type === 'panel' ? 'var(--primary-color)' :
                    item.type === 'break' ? 'var(--bg-offset)' :
                    item.type === 'gala' ? 'var(--secondary-color)' :
                    'var(--tertiary-color)'
                  )
                }}>
                  <div style={{
                    fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-color)',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.time}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                      {item.activity}
                    </div>
                    {item.detail && (
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {item.detail}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer}
          >
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px',
              padding: '12px 20px', background: 'var(--tertiary-color)', color: 'white',
              borderRadius: '12px', width: 'fit-content'
            }}>
              <Calendar size={20} />
              <span style={{ fontWeight: 600 }}>Hari 2 — Kamis, 23 Juli 2026</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {rundownDay2.map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} style={{
                  display: 'grid', gridTemplateColumns: '140px 1fr',
                  gap: '16px', padding: '16px 20px', background: 'white',
                  borderRadius: '12px', boxShadow: 'var(--shadow-sm)',
                  alignItems: 'start', borderLeft: '4px solid ' + (
                    item.type === 'breakout' || item.type === 'business' ? 'var(--tertiary-color)' :
                    item.type === 'break' ? 'var(--bg-offset)' :
                    item.type === 'closing' ? 'var(--secondary-color)' :
                    'var(--primary-color)'
                  )
                }}>
                  <div style={{
                    fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-color)',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.time}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                      {item.activity}
                    </div>
                    {item.detail && (
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {item.detail}
                      </div>
                    )}
                  </div>
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
            initial="hidden" animate="visible"
            variants={staggerContainer} className="text-center"
            style={{ marginBottom: '48px' }}
          >
            <motion.div variants={fadeInUp} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--secondary-color)', marginBottom: '16px'
            }}>
              <Award size={24} />
              <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Kemitraan</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} style={{ marginBottom: '12px' }}>Paket Sponsorship</motion.h2>
            <motion.p variants={fadeInUp} style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
              Jadilah bagian dari momentum transformasi wakaf nasional. Berbagai paket kemitraan tersedia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {sponsorshipPackages.map((pkg, idx) => (
              <motion.div
                key={idx}
                variants={itemScale}
                className="glass-card"
                style={{
                  padding: '32px 24px', position: 'relative',
                  borderTop: `4px solid ${pkg.color}`,
                  transform: pkg.tier === 'Platinum' ? 'scale(1.02)' : 'none',
                  boxShadow: pkg.tier === 'Platinum' ? 'var(--shadow-xl)' : 'var(--shadow-md)'
                }}
              >
                {pkg.confirmed && (
                  <div style={{
                    position: 'absolute', top: '-12px', right: '20px',
                    background: 'var(--secondary-color)', color: 'var(--primary-color)',
                    padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    ✅ CONFIRMED
                  </div>
                )}
                <div style={{
                  fontSize: '1.3rem', fontWeight: 700, color: pkg.color,
                  marginBottom: '8px', fontFamily: 'var(--font-heading)'
                }}>
                  {pkg.tier}
                </div>
                <div style={{
                  fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)',
                  marginBottom: '20px'
                }}>
                  {pkg.price}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {pkg.benefits.map((benefit, bidx) => (
                    <li key={bidx} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '8px',
                      marginBottom: '10px', fontSize: '0.9rem', color: 'var(--text-muted)'
                    }}>
                      <CheckCircle size={16} style={{ color: 'var(--secondary-color)', marginTop: '2px', flexShrink: 0 }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                {pkg.sponsor && (
                  <div style={{
                    marginTop: '20px', padding: '12px', background: 'var(--bg-offset)',
                    borderRadius: '8px', textAlign: 'center', fontSize: '0.85rem',
                    color: 'var(--text-muted)'
                  }}>
                    <strong style={{ color: 'var(--primary-color)' }}>{pkg.sponsor}</strong>
                    <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>Sponsor Resmi</div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== COMMITTEE SECTION ===== */}
      <section className="section section-bg" id="panitia">
        <div className="container">
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer} className="text-center"
            style={{ marginBottom: '48px' }}
          >
            <motion.div variants={fadeInUp} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--secondary-color)', marginBottom: '16px'
            }}>
              <Users size={24} />
              <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Struktur Organisasi</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} style={{ marginBottom: '12px' }}>Susunan Panitia</motion.h2>
            <motion.p variants={fadeInUp} style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
              Tim panitia yang berdedikasi untuk menyelenggarakan Waqf Leaders Summit 2026 dengan profesionalisme dan amanah.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer}
          >
            {/* Table Header */}
            <div className="committee-table-header">
              <div>Jabatan</div>
              <div>Nama</div>
              <div>Lembaga</div>
            </div>

            {/* Table Rows */}
            {summitCommittee.map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="committee-table-row"
                style={{
                  background: idx % 2 === 0 ? 'white' : 'var(--bg-offset)',
                }}
                whileHover={{ background: 'rgba(139, 197, 63, 0.08)', x: 4 }}
              >
                <div className="committee-cell committee-position">
                  {member.position}
                </div>
                <div className="committee-cell committee-name">
                  {member.name}
                </div>
                <div className="committee-cell committee-org">
                  {member.organization}
                </div>
              </motion.div>
            ))}

            {/* Table Footer */}
            <div className="committee-table-footer">
              <span>
                <Award size={14} /> Forum Wakaf Produktif — Indonesia Emas 2045
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== REGISTRATION CTA SECTION ===== */}
      <section className="section" id="registrasi" style={{
        background: 'linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-light) 100%)'
      }}>
        <div className="container text-center">
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} style={{ color: 'var(--primary-color)', marginBottom: '16px' }}>
              Materi &amp; Modul WLS 2026
            </motion.h2>
            <motion.p variants={fadeInUp} style={{
              maxWidth: '600px', margin: '0 auto 32px', color: 'var(--text-main)'
            }}>
              Akses file presentasi, modul materi, dan dokumentasi resmi pelaksanaan Waqf Leaders Summit 2026 melalui folder Google Drive resmi.
            </motion.p>

            <motion.div variants={fadeInUp} style={{
              display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '32px'
            }}>
              <a
                href="https://drive.google.com/drive/folders/1V1LZ1smIymICVyJ02VGKjDQQZc5qfXUt?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ background: 'var(--primary-color)', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Download size={18} /> Unduh Modul Materi WLS
              </a>
              <a
                href="https://wa.me/6281389667055"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Phone size={18} /> Hubungi Sekretariat
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px', maxWidth: '700px', margin: '0 auto'
            }}>
              <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                <Ticket size={28} style={{ color: 'var(--primary-color)', marginBottom: '8px' }} />
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                  Early Bird
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Hingga 30 Juni 2026
                </div>
              </div>
              <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                <MapPinCheck size={28} style={{ color: 'var(--primary-color)', marginBottom: '8px' }} />
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                  Venue
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Holiday Inn Pasteur, Bandung
                </div>
              </div>
              <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                <Users size={28} style={{ color: 'var(--primary-color)', marginBottom: '8px' }} />
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                  Kuota Terbatas
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  200 peserta only
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section section-bg">
        <div className="container">
          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer} className="text-center"
            style={{ marginBottom: '40px' }}
          >
            <motion.h2 variants={fadeInUp} style={{ marginBottom: '12px' }}>Kontak Sekretariat</motion.h2>
            <motion.p variants={fadeInUp} style={{ maxWidth: '500px', margin: '0 auto', color: 'var(--text-muted)' }}>
              Untuk informasi lebih lanjut mengenai sponsorship, registrasi, atau kolaborasi.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" animate="visible"
            variants={staggerContainer}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px', maxWidth: '800px', margin: '0 auto'
            }}
          >
            <motion.div variants={itemScale} className="glass-card" style={{
              padding: '24px', textAlign: 'center'
            }}>
              <Phone size={28} style={{ color: 'var(--secondary-color)', marginBottom: '12px' }} />
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>WhatsApp</div>
              <a href="https://wa.me/6281329765758" target="_blank" rel="noreferrer" style={{ color: 'var(--tertiary-color)', fontSize: '0.9rem' }}>
                +62 813-2976-5758
              </a>
            </motion.div>
            <motion.div variants={itemScale} className="glass-card" style={{
              padding: '24px', textAlign: 'center'
            }}>
              <Mail size={28} style={{ color: 'var(--secondary-color)', marginBottom: '12px' }} />
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>Email</div>
              <a href="mailto:sekretariat@fwp.or.id" style={{ color: 'var(--tertiary-color)', fontSize: '0.9rem' }}>
                sekretariat@fwp.or.id
              </a>
            </motion.div>
            <motion.div variants={itemScale} className="glass-card" style={{
              padding: '24px', textAlign: 'center'
            }}>
              <Globe size={28} style={{ color: 'var(--secondary-color)', marginBottom: '12px' }} />
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>Website</div>
              <a href="https://fwp.or.id" style={{ color: 'var(--tertiary-color)', fontSize: '0.9rem' }}>
                fwp.or.id
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SummitPage;
