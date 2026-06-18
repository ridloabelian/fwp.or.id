import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, MapPin, Users, Award, ArrowRight, Leaf,
  Clock, Mic, Coffee, Star, CheckCircle, XCircle, HelpCircle,
  Send, Mail, Phone, Globe, Building2, GraduationCap, Landmark,
  Briefcase, Heart, TrendingUp, ChevronRight, Ticket, MapPinCheck,
  FileText, Target, BookOpen, DollarSign, Handshake, Zap, Shield,
  BarChart3, PieChart, Printer, Download, Share2, ChevronDown, ChevronUp
} from 'lucide-react';
import SEO from '../components/SEO';
import {
  summitCommittee,
  summitDetails,
  summitSpeakers,
  rundownDay1,
  rundownDay2,
  sponsorshipPackages,
  eventStats,
  miniExpoParticipants
} from '../data/summit';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInUpFast = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
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
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: 600,
      backgroundColor: style.bg,
      color: style.color,
    }}>
      <Icon size={12} />
      {style.text}
    </span>
  );
};

// Section header component
const SectionHeader = ({ icon: Icon, title, subtitle, color = '#1B5E20' }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    style={{ textAlign: 'center', marginBottom: '3rem' }}
  >
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        borderRadius: '50%',
        backgroundColor: color,
        color: 'white',
        marginBottom: '1.5rem',
        boxShadow: `0 8px 32px ${color}40`,
      }}
    >
      <Icon size={28} />
    </motion.div>
    <h2 style={{
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      fontWeight: 800,
      color: '#1a1a2e',
      marginBottom: '0.75rem',
      lineHeight: 1.2,
    }}>
      {title}
    </h2>
    {subtitle && (
      <p style={{
        fontSize: '1.1rem',
        color: '#64748b',
        maxWidth: 600,
        margin: '0 auto',
      }}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

// Timeline item component
const TimelineItem = ({ item, index, isLast }) => {
  const typeColors = {
    registration: '#3b82f6',
    opening: '#1B5E20',
    speech: '#7c3aed',
    keynote: '#dc2626',
    break: '#f59e0b',
    panel: '#0ea5e9',
    talkshow: '#8b5cf6',
    entertainment: '#ec4899',
    gala: '#f97316',
    presentation: '#10b981',
    seminar: '#06b6d4',
    pitching: '#84cc16',
    closing: '#1B5E20',
    ceremony: '#c9a227',
  };

  const color = typeColors[item.type] || '#64748b';

  return (
    <motion.div
      variants={fadeInUpFast}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      style={{
        display: 'flex',
        gap: '1.5rem',
        position: 'relative',
        paddingBottom: isLast ? 0 : '2rem',
      }}
    >
      {/* Timeline line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          style={{
            position: 'absolute',
            left: 20,
            top: 40,
            width: 2,
            backgroundColor: '#e2e8f0',
            zIndex: 0,
          }}
        />
      )}

      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1, type: 'spring' }}
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          backgroundColor: color,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          zIndex: 1,
          boxShadow: `0 4px 16px ${color}40`,
        }}
      >
        <Clock size={18} />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={slideInRight}
        initial="hidden"
        animate="visible"
        transition={{ delay: index * 0.1 + 0.2 }}
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 16,
          padding: '1.5rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          borderLeft: `4px solid ${color}`,
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.5rem',
        }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: color,
            backgroundColor: `${color}15`,
            padding: '4px 12px',
            borderRadius: 8,
          }}>
            {item.time}
          </span>
        </div>
        <h4 style={{
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#1a1a2e',
          marginBottom: '0.5rem',
        }}>
          {item.activity}
        </h4>
        {item.detail && (
          <p style={{
            fontSize: '0.9rem',
            color: '#64748b',
            whiteSpace: 'pre-line',
            lineHeight: 1.6,
          }}>
            {item.detail}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

// Speaker card component
const SpeakerCard = ({ speaker, index }) => {
  const categoryColors = {
    Pemerintah: '#dc2626',
    Akademisi: '#0ea5e9',
    Praktisi: '#10b981',
    FWP: '#1B5E20',
    Ulama: '#7c3aed',
    Hiburan: '#ec4899',
    Media: '#f59e0b',
  };

  const color = categoryColors[speaker.category] || '#64748b';

  return (
    <motion.div
      variants={itemScale}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      style={{
        backgroundColor: 'white',
        borderRadius: 16,
        padding: '1.5rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        borderTop: `4px solid ${color}`,
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem',
      }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          color: color,
          backgroundColor: `${color}15`,
          padding: '4px 10px',
          borderRadius: 6,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          {speaker.category}
        </span>
        <StatusBadge status={speaker.status} />
      </div>
      <h4 style={{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#1a1a2e',
        marginBottom: '0.5rem',
        lineHeight: 1.3,
      }}>
        {speaker.name}
      </h4>
      <p style={{
        fontSize: '0.85rem',
        color: '#64748b',
        marginBottom: '0.75rem',
        lineHeight: 1.5,
      }}>
        {speaker.title}
      </p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.75rem',
        backgroundColor: '#f8fafc',
        borderRadius: 8,
        fontSize: '0.8rem',
        color: '#475569',
      }}>
        <Mic size={14} color={color} />
        {speaker.role}
      </div>
    </motion.div>
  );
};

// Sponsorship card component
const SponsorshipCard = ({ pkg, index }) => (
  <motion.div
    variants={itemScale}
    initial="hidden"
    animate="visible"
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -12, scale: 1.02 }}
    style={{
      backgroundColor: 'white',
      borderRadius: 20,
      padding: '2rem',
      boxShadow: pkg.confirmed
        ? `0 8px 32px ${pkg.color}30`
        : '0 4px 24px rgba(0,0,0,0.06)',
      border: `2px solid ${pkg.confirmed ? pkg.color : 'transparent'}`,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    }}
  >
    {pkg.confirmed && (
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        style={{
          position: 'absolute',
          top: 16,
          right: -30,
          backgroundColor: pkg.color,
          color: 'white',
          padding: '4px 40px',
          fontSize: '0.75rem',
          fontWeight: 700,
          transform: 'rotate(45deg)',
        }}
      >
        CONFIRMED
      </motion.div>
    )}
    <div style={{
      width: 48,
      height: 48,
      borderRadius: '50%',
      backgroundColor: pkg.color,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      boxShadow: `0 4px 16px ${pkg.color}40`,
    }}>
      <Award size={22} />
    </div>
    <h3 style={{
      fontSize: '1.5rem',
      fontWeight: 800,
      color: '#1a1a2e',
      marginBottom: '0.5rem',
    }}>
      {pkg.tier}
    </h3>
    <p style={{
      fontSize: '1.25rem',
      fontWeight: 700,
      color: pkg.color,
      marginBottom: '1.5rem',
    }}>
      {pkg.price}
    </p>
    <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    }}>
      {pkg.benefits.map((benefit, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + i * 0.05 }}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem',
            fontSize: '0.9rem',
            color: '#475569',
          }}
        >
          <CheckCircle size={16} color={pkg.color} style={{ flexShrink: 0, marginTop: 2 }} />
          {benefit}
        </motion.li>
      ))}
    </ul>
    {pkg.sponsor && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem',
          backgroundColor: `${pkg.color}10`,
          borderRadius: 8,
          textAlign: 'center',
        }}
      >
        <span style={{
          fontSize: '0.8rem',
          color: '#64748b',
        }}>
          Sponsored by
        </span>
        <p style={{
          fontWeight: 700,
          color: pkg.color,
          marginTop: '0.25rem',
        }}>
          {pkg.sponsor}
        </p>
      </motion.div>
    )}
  </motion.div>
);

// Stat card component
const StatCard = ({ stat, index }) => (
  <motion.div
    variants={scaleIn}
    initial="hidden"
    animate="visible"
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    style={{
      backgroundColor: 'white',
      borderRadius: 16,
      padding: '1.5rem',
      textAlign: 'center',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      borderBottom: '4px solid #1B5E20',
      transition: 'all 0.3s ease',
    }}
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
      style={{
        fontSize: '2.5rem',
        fontWeight: 800,
        color: '#1B5E20',
        marginBottom: '0.5rem',
      }}
    >
      {stat.value}{stat.suffix}
    </motion.div>
    <p style={{
      fontSize: '0.9rem',
      color: '#64748b',
      fontWeight: 600,
    }}>
      {stat.label}
    </p>
  </motion.div>
);

// Budget section component
const BudgetSection = () => {
  const budgetItems = [
    { item: 'Venue (Hotel Holiday Inn)', cost: 'Rp 65.000.000', category: 'Venue' },
    { item: 'Konsumsi (2 hari, 100+ pax)', cost: 'Rp 45.000.000', category: 'Konsumsi' },
    { item: 'Dokumentasi & Multimedia', cost: 'Rp 25.000.000', category: 'Dokumentasi' },
    { item: 'Dekorasi & Branding', cost: 'Rp 20.000.000', category: 'Dekorasi' },
    { item: 'Transportasi Narasumber', cost: 'Rp 15.000.000', category: 'Transportasi' },
    { item: 'Honor Narasumber', cost: 'Rp 30.000.000', category: 'Honor' },
    { item: 'Program Book & Materi', cost: 'Rp 10.000.000', category: 'Materi' },
    { item: 'Logistik & Perlengkapan', cost: 'Rp 15.000.000', category: 'Logistik' },
    { item: 'Marketing & Promosi', cost: 'Rp 15.000.000', category: 'Marketing' },
    { item: 'Contingency (10%)', cost: 'Rp 24.000.000', category: 'Contingency' },
  ];

  const total = 'Rp 264.000.000';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      style={{
        backgroundColor: 'white',
        borderRadius: 20,
        padding: '2rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1.5rem',
      }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          backgroundColor: '#1B5E20',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <DollarSign size={20} />
        </div>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#1a1a2e',
        }}>
          Estimasi Anggaran
        </h3>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        marginBottom: '1.5rem',
      }}>
        {budgetItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem 1rem',
              backgroundColor: index % 2 === 0 ? '#f8fafc' : 'white',
              borderRadius: 8,
            }}
          >
            <span style={{
              fontSize: '0.9rem',
              color: '#475569',
            }}>
              {item.item}
            </span>
            <span style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#1a1a2e',
            }}>
              {item.cost}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#1B5E20',
          borderRadius: 12,
          color: 'white',
        }}
      >
        <span style={{
          fontSize: '1rem',
          fontWeight: 700,
        }}>
          TOTAL ESTIMASI
        </span>
        <span style={{
          fontSize: '1.25rem',
          fontWeight: 800,
        }}>
          {total}
        </span>
      </motion.div>
    </motion.div>
  );
};

// Print styles component
const PrintStyles = () => (
  <style>{`
    @media print {
      .proposal-page {
        padding: 0 !important;
        background: white !important;
      }
      .no-print {
        display: none !important;
      }
      .print-break {
        page-break-before: always;
      }
      .print-only {
        display: block !important;
      }
    }
  `}</style>
);

export default function ProposalPage() {
  const [activeDay, setActiveDay] = React.useState(1);
  const [showBudget, setShowBudget] = React.useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="proposal-page" style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
    }}>
      <PrintStyles />
      <SEO
        title="Proposal Waqf Leaders Summit 2026 | Forum Wakaf Produktif"
        description="Proposal lengkap Waqf Leaders Summit 2026 - Forum strategis untuk menyatukan visi stakeholder wakaf produktif menuju Indonesia Emas 2045."
        keywords="proposal, waqf leaders summit, wakaf produktif, forum wakaf, event proposal"
      />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '6rem 1rem 4rem',
        backgroundColor: '#1B5E20',
        color: 'white',
        overflow: 'hidden',
      }}>
        {/* Animated background pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: 9999,
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '2rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <FileText size={16} />
              PROPOSAL EVENT
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                maxWidth: 800,
              }}
            >
              Waqf Leaders Summit 2026
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                opacity: 0.9,
                marginBottom: '2rem',
                maxWidth: 700,
                lineHeight: 1.6,
              }}
            >
              {summitDetails.theme}
            </motion.p>

            {/* Event Details */}
            <motion.div
              variants={fadeInUp}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
              }}>
                <Calendar size={20} />
                {summitDetails.date}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
              }}>
                <MapPin size={20} />
                {summitDetails.venue}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
              }}>
                <Users size={20} />
                100+ Nazhir Nasional
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="no-print"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrint}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.5rem',
                  backgroundColor: '#FFC107',
                  color: '#1a1a2e',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(255,193,7,0.3)',
                }}
              >
                <Printer size={18} />
                Cetak Proposal
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:fwpsekretariat@gmail.com?subject=Proposal%20Waqf%20Leaders%20Summit%202026"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.5rem',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Mail size={18} />
                Request via Email
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative wave */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            backgroundColor: '#f8fafc',
            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            transform: 'scaleX(1.5)',
          }}
        />
      </section>

      {/* Executive Summary */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <SectionHeader
          icon={Target}
          title="Executive Summary"
          subtitle="Ringkasan eksekutif Waqf Leaders Summit 2026"
        />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: '2rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}>
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
            >
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#1a1a2e',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <Zap size={18} color="#1B5E20" />
                Visi
              </h4>
              <p style={{
                fontSize: '0.95rem',
                color: '#64748b',
                lineHeight: 1.7,
              }}>
                Menjadi forum strategis nasional yang menyatukan visi berbagai stakeholder 
                wakaf untuk mengeskalasi dampak nyata wakaf produktif bagi masyarakat 
                menuju Indonesia Emas 2045.
              </p>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
            >
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#1a1a2e',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <Shield size={18} color="#1B5E20" />
                Misi
              </h4>
              <ul style={{
                fontSize: '0.95rem',
                color: '#64748b',
                lineHeight: 1.7,
                paddingLeft: '1.5rem',
              }}>
                <li>Memfasilitasi kolaborasi antar lembaga nazhir nasional</li>
                <li>Mengembangkan kapasitas nazhir dalam pengelolaan wakaf produktif</li>
                <li>Memperkuat ekosistem wakaf melalui kemitraan strategis</li>
                <li>Mengadvokasi kebijakan wakaf yang mendukung pembangunan berkelanjutan</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            style={{
              padding: '1.5rem',
              backgroundColor: '#f0fdf4',
              borderRadius: 12,
              borderLeft: '4px solid #1B5E20',
            }}
          >
            <p style={{
              fontSize: '1rem',
              color: '#1a1a2e',
              lineHeight: 1.7,
              fontStyle: 'italic',
            }}>
              <strong>Waqf Leaders Summit 2026</strong> adalah forum strategis tahunan yang 
              diinisiasi oleh <strong>Forum Wakaf Produktif (FWP)</strong> untuk menyatukan 
              visi dari berbagai stakeholder wakaf — pemerintah, akademisi, praktisi, 
              ulama, dan lembaga nazhir — dalam mengeskalasi dampak nyata wakaf produktif 
              bagi masyarakat Indonesia. Event ini akan menghadirkan <strong>100+ nazhir 
              nasional</strong>, <strong>25+ pembicara</strong> dari berbagai latar belakang, 
              dan <strong>30+ mitra strategis</strong> untuk membahas masa depan perwakafan 
              Indonesia.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Event Stats */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: '#f0fdf4',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          <SectionHeader
            icon={BarChart3}
            title="Event Highlights"
            subtitle="Statistik dan pencapaian target WLS 2026"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {eventStats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rundown Section */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <SectionHeader
          icon={Clock}
          title="Agenda & Rundown"
          subtitle="Jadwal lengkap 2 hari acara"
        />

        {/* Day Toggle */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="no-print"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveDay(1)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: 12,
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeDay === 1 ? '#1B5E20' : '#e2e8f0',
              color: activeDay === 1 ? 'white' : '#64748b',
              transition: 'all 0.3s ease',
            }}
          >
            Day 1 — Rabu, 22 Juli 2026
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveDay(2)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: 12,
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeDay === 2 ? '#1B5E20' : '#e2e8f0',
              color: activeDay === 2 ? 'white' : '#64748b',
              transition: 'all 0.3s ease',
            }}
          >
            Day 2 — Kamis, 23 Juli 2026
          </motion.button>
        </motion.div>

        {/* Timeline */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          {(activeDay === 1 ? rundownDay1 : rundownDay2).map((item, index, arr) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === arr.length - 1}
            />
          ))}
        </motion.div>
      </section>

      {/* Speakers Section */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: '#f0fdf4',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          <SectionHeader
            icon={Mic}
            title="Narasumber"
            subtitle={`${summitSpeakers.confirmed.length} confirmed · ${summitSpeakers.pending.length} pending confirmation`}
          />

          {/* Confirmed Speakers */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: '3rem' }}
          >
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#1a1a2e',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <CheckCircle size={20} color="#16a34a" />
              Confirmed Speakers ({summitSpeakers.confirmed.length})
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}>
              {summitSpeakers.confirmed.map((speaker, index) => (
                <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Pending Speakers */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#1a1a2e',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <HelpCircle size={20} color="#d97706" />
              Pending Confirmation ({summitSpeakers.pending.length})
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}>
              {summitSpeakers.pending.map((speaker, index) => (
                <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <SectionHeader
          icon={Handshake}
          title="Paket Sponsorship"
          subtitle="Peluang kemitraan strategis untuk WLS 2026"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {sponsorshipPackages.map((pkg, index) => (
            <SponsorshipCard key={index} pkg={pkg} index={index} />
          ))}
        </motion.div>
      </section>

      {/* Mini Expo Section */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <SectionHeader
          icon={Building2}
          title="Peserta Mini Expo"
          subtitle="Daftar mitra kolaborasi dan calon eksibitor Mini Expo WLS 2026"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {miniExpoParticipants.map((participant, index) => {
            const badgeColors = {
              'Sponsor Platinum': { bg: '#e0e7ff', text: '#3730a3' },
              'Potential Sponsor': { bg: '#fef3c7', text: '#92400e' },
              'Exhibitor': { bg: '#e0f2fe', text: '#0369a1' }
            };
            const badge = badgeColors[participant.type] || { bg: '#f1f5f9', text: '#475569' };
            return (
              <motion.div
                key={index}
                variants={itemScale}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 16,
                  padding: '1.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  border: '1px solid #f1f5f9',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{
                      backgroundColor: badge.bg,
                      color: badge.text,
                      padding: '0.25rem 0.75rem',
                      borderRadius: 9999,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}>
                      {participant.type}
                    </span>
                  </div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#1a1a2e',
                    margin: '0 0 0.5rem 0',
                    lineHeight: '1.4',
                  }}>
                    {participant.name}
                  </h4>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#64748b',
                  fontSize: '0.85rem',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '0.75rem',
                }}>
                  <Briefcase size={16} color="#1B5E20" />
                  <span>{participant.category}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Budget Section */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: '#f0fdf4',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          <SectionHeader
            icon={DollarSign}
            title="Anggaran"
            subtitle="Estimasi kebutuhan dana WLS 2026"
          />
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="no-print"
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBudget(!showBudget)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#1B5E20',
                color: 'white',
                borderRadius: 12,
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {showBudget ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              {showBudget ? 'Sembunyikan Rincian' : 'Lihat Rincian Anggaran'}
            </motion.button>
          </motion.div>

          <motion.div
            initial={false}
            animate={{
              height: showBudget ? 'auto' : 0,
              opacity: showBudget ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            style={{
              overflow: 'hidden',
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            <BudgetSection />
          </motion.div>
        </div>
      </section>

      {/* Committee Section */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <SectionHeader
          icon={Users}
          title="Panitia Pelaksana"
          subtitle="Tim Waqf Leaders Summit 2026"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {summitCommittee.map((member, index) => (
            <motion.div
              key={index}
              variants={itemScale}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              style={{
                backgroundColor: 'white',
                borderRadius: 16,
                padding: '1.5rem',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                textAlign: 'center',
              }}
            >
              <div style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: '#1B5E20',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.25rem',
                fontWeight: 700,
              }}>
                {member.name.charAt(0)}
              </div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#1a1a2e',
                marginBottom: '0.25rem',
              }}>
                {member.name}
              </h4>
              <p style={{
                fontSize: '0.85rem',
                color: '#1B5E20',
                fontWeight: 600,
                marginBottom: '0.25rem',
              }}>
                {member.position}
              </p>
              <p style={{
                fontSize: '0.8rem',
                color: '#64748b',
              }}>
                {member.organization}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: '#1B5E20',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          <SectionHeader
            icon={Send}
            title="Kontak Kami"
            subtitle="Hubungi tim Waqf Leaders Summit 2026"
            color="#FFC107"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                icon: Phone,
                title: 'Telepon',
                value: '0813 8966 7055',
                href: 'tel:081389667055',
              },
              {
                icon: Mail,
                title: 'Email',
                value: 'fwpsekretariat@gmail.com',
                href: 'mailto:fwpsekretariat@gmail.com',
              },
              {
                icon: Globe,
                title: 'Website',
                value: 'fwp.or.id',
                href: 'https://fwp.or.id',
              },
              {
                icon: MapPin,
                title: 'Alamat',
                value: 'Komplek Masjid Agung Al Azhar, Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan',
                href: '#',
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                variants={itemScale}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                href={contact.href}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.5rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 16,
                  textDecoration: 'none',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: '#FFC107',
                  color: '#1a1a2e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <contact.icon size={20} />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    marginBottom: '0.25rem',
                    opacity: 0.8,
                  }}>
                    {contact.title}
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}>
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            style={{
              textAlign: 'center',
              marginTop: '3rem',
            }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/waqf-leaders-summit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                backgroundColor: '#FFC107',
                color: '#1a1a2e',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: '1.1rem',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(255,193,7,0.3)',
              }}
            >
              <ArrowRight size={20} />
              Lihat Halaman Event
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
