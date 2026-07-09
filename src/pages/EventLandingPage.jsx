import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, MapPin, Film, ArrowRight, Check, Plus, Minus,
  Phone, Mail, Globe
} from 'lucide-react';
import SEO from '../components/SEO';
import RegistrationForm from '../components/RegistrationForm';
import {
  summitSpeakers, summitCommittee, rundownDay1, rundownDay2,
  sponsorshipPackages, miniExpoParticipants
} from '../data/summit';

/* ─── Design tokens ─── */
const C = {
  navy: '#112e3f',
  navyDark: '#0c2230',
  navyMid: '#1b465f',
  navyDeep: '#0a1d28',
  green: '#8bc53f',
  cyan: '#16aeca',
  gold: '#c9a227',
  goldLight: '#e8cf78',
  goldGrad: 'linear-gradient(135deg, #c9a227, #e6c862)',
  textDark: '#1e293b',
  textMuted: '#475569',
  textLight: '#64748b',
  textSubtle: '#94a3b8',
  border: '#eef1f4',
  bgLight: '#f7f9fb',
  bgLighter: '#f1f6f9',
};

/* ─── CSS Keyframes & Animation Classes ─── */
const GlobalStyles = () => (
  <style>{`
    @keyframes wlsFloat {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(3deg); }
    }
    @keyframes wlsFloatAlt {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(15px) rotate(-2deg); }
    }
    @keyframes wlsPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(0.85); }
    }
    @keyframes wlsScrollDot {
      0% { transform: translateY(0); opacity: 1; }
      80% { transform: translateY(12px); opacity: 0; }
      100% { transform: translateY(0); opacity: 0; }
    }
    @keyframes wlsMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes countUp {
      from { opacity: 0; transform: scale(0.5); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    /* Scroll reveal - initial state */
    .wls-reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), 
                  transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .wls-reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .wls-reveal-left {
      opacity: 0;
      transform: translateX(-30px);
      transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), 
                  transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .wls-reveal-left.visible {
      opacity: 1;
      transform: translateX(0);
    }
    .wls-reveal-right {
      opacity: 0;
      transform: translateX(30px);
      transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), 
                  transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .wls-reveal-right.visible {
      opacity: 1;
      transform: translateX(0);
    }
    .wls-reveal-scale {
      opacity: 0;
      transform: scale(0.92);
      transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), 
                  transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .wls-reveal-scale.visible {
      opacity: 1;
      transform: scale(1);
    }
    /* Stagger delays */
    .wls-delay-1 { transition-delay: 0.06s; }
    .wls-delay-2 { transition-delay: 0.12s; }
    .wls-delay-3 { transition-delay: 0.18s; }
    .wls-delay-4 { transition-delay: 0.24s; }
    .wls-delay-5 { transition-delay: 0.30s; }
    .wls-delay-6 { transition-delay: 0.36s; }
    .wls-delay-7 { transition-delay: 0.42s; }
    .wls-delay-8 { transition-delay: 0.48s; }
    /* Card hover */
    .wls-card {
      transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    }
    .wls-card:hover {
      transform: translateY(-6px) !important;
      box-shadow: 0 20px 50px rgba(17,46,63,.12) !important;
      border-color: #d4dde4 !important;
    }
    .wls-navlinks a:hover { color: #112e3f !important; }
    .wls-navlinks a { transition: color .2s ease; }
    /* FAQ */
    .wls-faq-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, opacity 0.3s ease;
      opacity: 0;
    }
    .wls-faq-content.open {
      max-height: 500px;
      opacity: 1;
    }
    .wls-faq-icon {
      transition: transform 0.3s ease, background 0.3s ease;
    }
    .wls-faq-icon.open {
      transform: rotate(180deg);
      background: #e0f2fe;
    }
    /* Stats count animation */
    .wls-count {
      animation: countUp 0.6s ease-out forwards;
    }
    /* Mobile */
    @media (max-width: 768px) {
      .wls-about-grid { grid-template-columns: 1fr !important; }
      .wls-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .wls-speaker-grid { grid-template-columns: 1fr !important; }
      .wls-pending-grid { grid-template-columns: 1fr !important; }
      .wls-sponsor-grid { grid-template-columns: 1fr !important; }
      .wls-reg-grid { grid-template-columns: 1fr !important; }
      .wls-expo-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .wls-committee-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .wls-footer-grid { grid-template-columns: 1fr !important; }
      .wls-agenda-row { grid-template-columns: 1fr !important; gap: 8px !important; }
    }
    @media (max-width: 480px) {
      .wls-expo-grid { grid-template-columns: 1fr !important; }
      .wls-committee-grid { grid-template-columns: 1fr !important; }
    }
    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .wls-reveal, .wls-reveal-left, .wls-reveal-right, .wls-reveal-scale {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    }
  `}</style>
);

const catStyles = {
  Pemerintah: { color: '#b91c1c', bg: '#fee2e2', grad: 'linear-gradient(135deg,#dc2626,#991b1b)' },
  Akademisi: { color: '#0369a1', bg: '#e0f2fe', grad: 'linear-gradient(135deg,#16aeca,#0e7490)' },
  Praktisi: { color: '#047857', bg: '#dcfce7', grad: 'linear-gradient(135deg,#8bc53f,#15803d)' },
  FWP: { color: '#112e3f', bg: '#e2eef3', grad: 'linear-gradient(135deg,#112e3f,#1f5f7a)' },
  Ulama: { color: '#6d28d9', bg: '#ede9fe', grad: 'linear-gradient(135deg,#7c3aed,#5b21b6)' },
  Hiburan: { color: '#be185d', bg: '#fce7f3', grad: 'linear-gradient(135deg,#ec4899,#be185d)' },
  Media: { color: '#b45309', bg: '#fef3c7', grad: 'linear-gradient(135deg,#c9a227,#b45309)' },
};

const typeColors = {
  registration: '#16aeca', opening: '#8bc53f', speech: '#7c3aed', keynote: '#dc2626',
  break: '#94a3b8', panel: '#16aeca', talkshow: '#8b5cf6', entertainment: '#ec4899',
  gala: '#c9a227', presentation: '#8bc53f', seminar: '#0e7490', pitching: '#84cc16',
  closing: '#112e3f', ceremony: '#c9a227',
};

const tagMap = {
  'Sponsor Platinum': { bg: '#dcfce7', color: '#15803d' },
  'Potential Sponsor': { bg: '#f1f5f9', color: '#64748b' },
  Exhibitor: { bg: '#e0f2fe', color: '#0369a1' },
};

const WA_LINK = 'https://forms.gle/xcUrqyoQLN9TEq6E7';

/* ─── Helpers ─── */
function getInitials(name) {
  let clean = name;
  ['Bp.', 'Ibu', 'Prof.', 'Dr.', 'Drs.', 'H.', 'KH.', 'Ust.', 'Hj.', 'Ir.', 'Phil.', 'Pak'].forEach(t => {
    clean = clean.replace(new RegExp('\\b' + t.replace(/\./g, '\\.') + '\\s*', 'gi'), '');
  });
  clean = clean.replace(/,.*$/, '').replace(/\(.*?\)/g, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (!parts.length) return '??';
  return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
}

/* ─── Framer Motion variants (Hero only - mount animation) ─── */
const heroStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const heroRise = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── FAQ data ─── */
const faqData = [
  { q: 'Apa itu Waqf Leaders Summit 2026?', a: 'Forum strategis dua hari yang diinisiasi Forum Wakaf Produktif untuk menyatukan visi para pemimpin wakaf, akademisi, regulator, dan praktisi dalam mengeskalasi dampak wakaf produktif bagi masyarakat.' },
  { q: 'Kapan dan di mana acara berlangsung?', a: 'Rabu–Kamis, 22–23 Juli 2026 di Hotel Holiday Inn, Jl. Dr. Djunjunan No.96, Pasteur, Sukajadi, Kota Bandung, Jawa Barat.' },
  { q: 'Siapa saja yang dapat menghadiri?', a: 'Nazhir, pengelola lembaga wakaf, akademisi, regulator, investor, mitra strategis, serta masyarakat umum yang tertarik pada pengembangan wakaf produktif.' },
  { q: 'Bagaimana cara mendaftar?', a: 'Pilih paket registrasi yang sesuai pada bagian Registrasi, lalu klik "Daftar via WhatsApp" untuk diarahkan ke tim sekretariat kami.' },
  { q: 'Apakah tersedia harga khusus anggota FWP?', a: 'Ya. Lembaga anggota FWP memperoleh harga khusus Rp 2.500.000 (dari Rp 3.000.000), serta tersedia paket 3 orang yang lebih hemat.' },
  { q: 'Apa saja yang termasuk dalam tiket?', a: 'Akses penuh dua hari acara, seminar kit, sertifikat, makan siang & coffee break, serta akses ke Mini Expo dan sesi networking.' },
];

/* ─── Sponsor card styling ─── */
const sponsorCardStyles = [
  { color: '#e2e8f0', priceColor: '#fff', glow: 'rgba(226,232,240,.3)', cardBg: 'linear-gradient(170deg,rgba(255,255,255,.09),rgba(255,255,255,.03))', border: 'rgba(226,232,240,.4)' },
  { color: '#c9a227', priceColor: '#e8cf78', glow: 'rgba(201,162,39,.4)', cardBg: 'linear-gradient(170deg,rgba(201,162,39,.1),rgba(255,255,255,.02))', border: 'rgba(201,162,39,.35)' },
  { color: '#94a3b8', priceColor: '#cbd5e1', glow: 'rgba(148,163,184,.3)', cardBg: 'linear-gradient(170deg,rgba(148,163,184,.1),rgba(255,255,255,.02))', border: 'rgba(148,163,184,.3)' },
  { color: '#cd7f32', priceColor: '#e0a86a', glow: 'rgba(205,127,50,.3)', cardBg: 'linear-gradient(170deg,rgba(205,127,50,.1),rgba(255,255,255,.02))', border: 'rgba(205,127,50,.3)' },
];

/* ─── Sub-components ─── */

function CountdownTimer() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = new Date('2026-07-22T08:00:00+07:00').getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = n => String(n).padStart(2, '0');
  const boxes = [
    { val: time.d, label: 'Hari' },
    { val: time.h, label: 'Jam' },
    { val: time.m, label: 'Menit' },
    { val: time.s, label: 'Detik', accent: true },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(10px, 2vw, 20px)' }}>
      {boxes.map((b, i) => (
        <div key={i} style={{
          minWidth: 'clamp(64px, 14vw, 96px)', padding: '16px 8px', borderRadius: 16,
          background: b.accent ? 'rgba(201,162,39,.16)' : 'rgba(255,255,255,.07)',
          border: b.accent ? '1px solid rgba(201,162,39,.4)' : '1px solid rgba(255,255,255,.14)',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: 'clamp(28px, 6vw, 46px)', fontWeight: 800, lineHeight: 1,
            color: b.accent ? C.goldLight : '#fff',
          }}>{pad(b.val)}</div>
          <div style={{
            marginTop: 8, fontSize: 11, fontWeight: 600, letterSpacing: '.16em',
            color: b.accent ? '#d9c283' : '#8fb6c6', textTransform: 'uppercase',
          }}>{b.label}</div>
        </div>
      ))}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden', background: '#fff' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: 18, padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
        textAlign: 'left', fontFamily: 'inherit',
      }}>
        <span style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', fontWeight: 700, color: C.navy }}>{q}</span>
        <span className={`wls-faq-icon ${open ? 'open' : ''}`} style={{
          flex: 'none', width: 28, height: 28, borderRadius: 8,
          background: open ? '#e0f2fe' : C.bgLighter,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.cyan,
        }}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div className={`wls-faq-content ${open ? 'open' : ''}`}>
        <div style={{ padding: '0 24px 22px', fontSize: 15, lineHeight: 1.7, color: C.textMuted }}>{a}</div>
      </div>
    </div>
  );
}

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // Only animate once
        }
      },
      { threshold: 0.08, rootMargin: '-5% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/* ─── Reveal Wrapper ─── */
function Reveal({ children, style, className = '', variant = 'up', delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  const baseClass = {
    up: 'wls-reveal',
    left: 'wls-reveal-left',
    right: 'wls-reveal-right',
    scale: 'wls-reveal-scale',
  }[variant] || 'wls-reveal';
  const delayClass = delay > 0 ? `wls-delay-${Math.min(delay, 8)}` : '';

  return (
    <div
      ref={ref}
      className={`${baseClass} ${delayClass} ${visible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ─── Stat Item with Count Animation ─── */
function StatItem({ target, suffix, label, color, delay }) {
  const [ref, visible] = useScrollReveal();
  const delayClass = delay > 0 ? `wls-delay-${Math.min(delay, 8)}` : '';

  return (
    <div
      ref={ref}
      className={`wls-reveal ${delayClass} ${visible ? 'visible' : ''}`}
      style={{ textAlign: 'center' }}
    >
      <div className={visible ? 'wls-count' : ''} style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, lineHeight: 1, color,
      }}>
        {target}{suffix}
      </div>
      <div style={{ marginTop: 10, fontSize: 'clamp(12px, 1.4vw, 14px)', fontWeight: 600, color: '#8fb6c6', letterSpacing: '.04em' }}>{label}</div>
    </div>
  );
}

/* ─── Main component ─── */
export default function EventLandingPage() {
  const [activeDay, setActiveDay] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [showFloat, setShowFloat] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 20);
      setShowFloat(y > 700);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const rundown = activeDay === 1 ? rundownDay1 : rundownDay2;
  const confirmed = summitSpeakers.confirmed;
  const pending = summitSpeakers.pending;

  const tabStyle = active => ({
    padding: '11px 24px', borderRadius: 999, border: 'none', cursor: 'pointer',
    fontFamily: 'inherit', fontSize: 14, fontWeight: 700,
    transition: 'all .25s ease',
    background: active ? `linear-gradient(135deg,${C.navy},#1f5f7a)` : 'transparent',
    color: active ? '#fff' : C.textLight,
    boxShadow: active ? '0 6px 16px rgba(17,46,63,.2)' : 'none',
  });

  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <GlobalStyles />
      <SEO
        title="WLS 2026 - Waqf Leaders Summit"
        description="Waqf Leaders Summit 2026: Forum strategis untuk mengeskalasi dampak wakaf produktif. 22-23 Juli 2026, Holiday Inn Pasteur, Bandung."
      />

      {/* ═══ NAVBAR ═══ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        padding: scrolled ? '10px clamp(20px, 5vw, 64px)' : '14px clamp(20px, 5vw, 64px)',
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.border}`,
        boxShadow: scrolled ? '0 6px 24px rgba(17,46,63,.08)' : 'none',
        transition: 'box-shadow .3s ease, padding .3s ease',
      }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flex: 'none' }}>
          <img src="/logo.png" alt="Forum Wakaf Produktif" style={{ height: 42, width: 'auto' }} />
        </a>
        <div className="wls-navlinks" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {['Tentang', 'Agenda', 'Narasumber', 'Sponsorship', 'Expo'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 14, fontWeight: 600, color: '#334155', textDecoration: 'none', letterSpacing: '.01em' }}>{l}</a>
          ))}
        </div>
        <a href="#registrasi" style={{
          flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '11px 22px', borderRadius: 999, background: C.goldGrad,
          color: '#15212b', fontSize: 14, fontWeight: 700, textDecoration: 'none',
          boxShadow: '0 6px 18px rgba(201,162,39,.32)', letterSpacing: '.01em',
        }}>Daftar Sekarang</a>
      </nav>

      {/* ═══ HERO (Framer Motion - mount only) ═══ */}
      <header id="hero" style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '120px clamp(20px, 5vw, 64px) 80px',
        background: 'radial-gradient(120% 90% at 80% 0%, #1b465f 0%, #112e3f 45%, #0c2230 100%)',
        overflow: 'hidden',
      }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {[
            { top: '12%', left: '8%', size: 34, r: 6, bg: C.green, o: .55, a: 'wlsFloat', d: '9s' },
            { top: '22%', left: '16%', size: 22, r: 4, bg: C.cyan, o: .5, a: 'wlsFloatAlt', d: '11s', dl: '.5s' },
            { top: '64%', left: '6%', size: 46, r: 8, bg: '#1f5f7a', o: .6, a: 'wlsFloat', d: '13s', dl: '1s' },
            { top: '78%', left: '18%', size: 18, r: 4, bg: C.gold, o: .5, a: 'wlsFloatAlt', d: '8s', dl: '.3s' },
            { top: '16%', right: '10%', size: 40, r: 7, bg: C.cyan, o: .45, a: 'wlsFloatAlt', d: '12s', dl: '.8s' },
            { top: '30%', right: '20%', size: 24, r: 5, bg: C.green, o: .5, a: 'wlsFloat', d: '10s', dl: '1.4s' },
            { top: '70%', right: '8%', size: 50, r: 9, bg: C.gold, o: .4, a: 'wlsFloat', d: '14s', dl: '.2s' },
            { top: '58%', right: '22%', size: 16, r: 4, bg: C.cyan, o: .55, a: 'wlsFloatAlt', d: '9s', dl: '1.1s' },
            { top: '44%', left: '4%', size: 14, r: 3, bg: C.gold, o: .45, a: 'wlsFloat', d: '7s', dl: '.6s' },
            { top: '86%', right: '30%', size: 28, r: 6, bg: C.green, o: .35, a: 'wlsFloatAlt', d: '12s', dl: '.9s' },
          ].map((sq, i) => (
            <div key={i} style={{
              position: 'absolute', top: sq.top, left: sq.left, right: sq.right,
              width: sq.size, height: sq.size, borderRadius: sq.r,
              background: sq.bg, opacity: sq.o,
              animation: `${sq.a} ${sq.d} ease-in-out infinite ${sq.dl || '0s'}`,
            }} />
          ))}
        </div>
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
          background: 'linear-gradient(to bottom, transparent, rgba(8,28,40,.6))',
        }} />

        <motion.div initial="hidden" animate="visible" variants={heroStagger} style={{
          position: 'relative', zIndex: 2, maxWidth: 920, textAlign: 'center', color: '#fff',
        }}>
          <motion.div variants={heroRise} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 18px', borderRadius: 999,
            background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.16)',
            backdropFilter: 'blur(6px)', fontSize: 13, fontWeight: 600, letterSpacing: '.04em',
            marginBottom: 28,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%', background: C.green,
              animation: 'wlsPulse 2s ease-in-out infinite',
            }} />
            22–23 JULI 2026 · HOLIDAY INN PASTEUR, BANDUNG
          </motion.div>

          <motion.p variants={heroRise} style={{
            margin: '0 0 6px', fontSize: 'clamp(13px, 1.6vw, 16px)', fontWeight: 700,
            letterSpacing: '.42em', color: '#7fd0e3', textTransform: 'uppercase',
          }}>Waqf Leaders Summit</motion.p>

          <motion.h1 variants={heroRise} style={{
            margin: 0, fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(58px, 12vw, 150px)', fontWeight: 800,
            lineHeight: .9, letterSpacing: '-.02em', color: '#fff',
          }}>2026</motion.h1>

          <motion.img variants={heroRise}
            src="/tumbuh-bersama-gold.png" alt="Tumbuh Bersama"
            style={{ width: 'clamp(280px, 46vw, 520px)', height: 'auto', display: 'block', margin: '14px auto 4px' }}
          />

          <motion.p variants={heroRise} style={{
            maxWidth: 680, margin: '18px auto 0',
            fontFamily: "'Playfair Display', serif", fontStyle: 'italic',
            fontSize: 'clamp(17px, 2.4vw, 24px)', lineHeight: 1.5,
            color: 'rgba(255,255,255,.85)',
          }}>&ldquo;Scaling-Up the Impact of Waqf Toward Sustainable Wellbeing&rdquo;</motion.p>

          <motion.div variants={heroRise} style={{ margin: '38px 0 0' }}>
            <CountdownTimer />
          </motion.div>

          <motion.div variants={heroRise} style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginTop: 38,
          }}>
            <a href="#registrasi" style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              padding: '15px 32px', borderRadius: 999, background: C.goldGrad,
              color: '#15212b', fontSize: 15, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 12px 30px rgba(201,162,39,.35)',
            }}>Daftar Sekarang <ArrowRight size={16} /></a>
            <a href="#agenda" style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              padding: '15px 32px', borderRadius: 999,
              background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.28)',
              color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none',
            }}>Lihat Agenda</a>
          </motion.div>
        </motion.div>

        <div aria-hidden="true" style={{
          position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)',
          width: 26, height: 42, border: '2px solid rgba(255,255,255,.3)', borderRadius: 14,
          display: 'flex', justifyContent: 'center', paddingTop: 8, zIndex: 2,
        }}>
          <span style={{ width: 5, height: 9, borderRadius: 3, background: '#fff', animation: 'wlsScrollDot 1.8s ease-in-out infinite' }} />
        </div>
      </header>

      {/* ═══ TRUST STRIP ═══ */}
      <div className="wls-trust-strip" style={{
        background: C.navyDark, borderTop: '1px solid rgba(255,255,255,.06)',
        overflow: 'hidden', whiteSpace: 'nowrap', padding: '16px 0',
      }}>
        <div style={{ display: 'inline-flex', gap: 56, animation: 'wlsMarquee 32s linear infinite', willChange: 'transform' }}>
          {[0, 1].map(set => (
            <span key={set} style={{
              display: 'inline-flex', gap: 56, alignItems: 'center',
              fontSize: 14, fontWeight: 600, letterSpacing: '.12em', color: '#6f93a4', textTransform: 'uppercase',
            }}>
              <span>Forum Wakaf Produktif</span><span style={{ color: C.gold }}>•</span>
              <span>57 Lembaga Nazhir</span><span style={{ color: C.green }}>•</span>
              <span>Tumbuh Bersama</span><span style={{ color: C.cyan }}>•</span>
              <span>Scaling-Up The Impact of Waqf</span><span style={{ color: C.gold }}>•</span>
              <span>Indonesia Emas 2045</span><span style={{ color: C.green }}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ TENTANG ═══ */}
      <section id="tentang" style={{ padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 64px)', background: '#fff' }}>
        <div className="wls-about-grid" style={{
          maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.15fr .85fr',
          gap: 'clamp(36px, 5vw, 80px)', alignItems: 'center',
        }}>
          <Reveal variant="left">
            <p style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 700, letterSpacing: '.22em', color: C.gold, textTransform: 'uppercase' }}>Tentang Summit</p>
            <h2 style={{ margin: '0 0 24px', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.4vw, 50px)', fontWeight: 700, lineHeight: 1.1, color: C.navy, letterSpacing: '-.01em' }}>
              Menyatukan Visi Para Pemimpin Wakaf Nasional
            </h2>
            <p style={{ margin: '0 0 20px', fontSize: 'clamp(15px, 1.7vw, 18px)', lineHeight: 1.75, color: C.textMuted }}>
              Forum strategis yang diinisiasi oleh <strong style={{ color: C.navy }}>Forum Wakaf Produktif</strong> untuk menyatukan visi dari berbagai <em>stakeholder</em> dan mengeskalasi dampak nyata wakaf produktif bagi masyarakat &mdash; menuju kesejahteraan yang berkelanjutan.
            </p>
            <p style={{ margin: 0, fontSize: 'clamp(15px, 1.7vw, 18px)', lineHeight: 1.75, color: C.textMuted }}>
              Selama dua hari, para nazhir, akademisi, regulator, dan praktisi berkumpul untuk merumuskan masa depan perwakafan Indonesia.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
              {[
                { label: 'Leaders Talk', color: C.green },
                { label: 'Grand Seminar', color: C.cyan },
                { label: 'Gala Dinner', color: C.gold },
                { label: 'Mini Expo', color: '#1f5f7a' },
              ].map(tag => (
                <div key={tag.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 16px', borderRadius: 12, background: C.bgLighter,
                  fontSize: 14, fontWeight: 600, color: C.navy,
                }}>
                  <span style={{ width: 9, height: 9, borderRadius: 2, background: tag.color }} />
                  {tag.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={2}>
            <div style={{
              borderRadius: 22, overflow: 'hidden',
              background: `linear-gradient(160deg, ${C.navy}, ${C.navyMid})`,
              color: '#fff', padding: 'clamp(28px, 3.5vw, 42px)',
              boxShadow: '0 30px 60px rgba(17,46,63,.22)',
            }}>
              <p style={{ margin: '0 0 22px', fontSize: 12, fontWeight: 700, letterSpacing: '.2em', color: '#7fd0e3', textTransform: 'uppercase' }}>Detail Acara</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                {[
                  { icon: <Calendar size={20} />, iconBg: 'rgba(139,197,63,.18)', label: 'Tanggal', value: <>Rabu &ndash; Kamis<br />22 &ndash; 23 Juli 2026</> },
                  { icon: <MapPin size={20} />, iconBg: 'rgba(22,174,202,.18)', label: 'Lokasi', value: 'Hotel Holiday Inn', sub: 'Jl. Dr. Djunjunan No.96, Pasteur, Sukajadi, Kota Bandung' },
                  { icon: <Film size={20} />, iconBg: 'rgba(201,162,39,.18)', label: 'Penyelenggara', value: 'Forum Wakaf Produktif' },
                ].map((item, i) => (
                  <div key={i}>
                    {i > 0 && <div style={{ height: 1, background: 'rgba(255,255,255,.1)', marginBottom: 22 }} />}
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{
                        flex: 'none', width: 44, height: 44, borderRadius: 12, background: item.iconBg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                      }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: 12, letterSpacing: '.12em', color: '#8fb6c6', textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                        <div style={{ fontSize: 17, fontWeight: 700 }}>{item.value}</div>
                        {item.sub && <div style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', marginTop: 2 }}>{item.sub}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#registrasi" style={{
                display: 'block', textAlign: 'center', marginTop: 30, padding: 14, borderRadius: 12,
                background: C.goldGrad, color: '#15212b', fontSize: 15, fontWeight: 700, textDecoration: 'none',
              }}>Amankan Kursi Anda</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) clamp(20px, 5vw, 64px)', background: `linear-gradient(135deg, ${C.navy}, ${C.navyDark})` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div className="wls-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'clamp(16px, 2.5vw, 32px)' }}>
            {[
              { target: 2, suffix: '', label: 'Hari', color: '#fff', delay: 1 },
              { target: 25, suffix: '+', label: 'Narasumber', color: C.green, delay: 2 },
              { target: 50, suffix: '+', label: 'Peserta Target', color: C.cyan, delay: 3 },
              { target: 50, suffix: '+', label: 'Lembaga Nazhir', color: '#fff', delay: 4 },
              { target: 30, suffix: '+', label: 'Investor & Mitra', color: C.goldLight, delay: 5 },
              { target: 10, suffix: '+', label: 'Booth Expo', color: C.green, delay: 6 },
            ].map((s, i) => <StatItem key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* ═══ AGENDA ═══ */}
      <section id="agenda" style={{ padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 64px)', background: C.bgLight }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.22em', color: C.gold, textTransform: 'uppercase' }}>Rundown Acara</p>
            <h2 style={{ margin: '0 0 12px', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.4vw, 50px)', fontWeight: 700, color: C.navy, letterSpacing: '-.01em' }}>Agenda 2 Hari</h2>
            <p style={{ margin: 0, fontSize: 16, color: C.textLight }}>Susunan acara lengkap Waqf Leaders Summit 2026.</p>
          </Reveal>

          <Reveal style={{ textAlign: 'center', marginBottom: 40 }} delay={1}>
            <div style={{ display: 'inline-flex', gap: 6, padding: 6, borderRadius: 999, background: '#e8edf1' }}>
              <button onClick={() => setActiveDay(1)} style={tabStyle(activeDay === 1)}>Hari 1 · 22 Juli</button>
              <button onClick={() => setActiveDay(2)} style={tabStyle(activeDay === 2)}>Hari 2 · 23 Juli</button>
            </div>
          </Reveal>

          <div>
            {rundown.map((item, i) => (
              <Reveal key={`${activeDay}-${i}`} delay={(i % 4) + 1}>
                <div className="wls-agenda-row" style={{
                  display: 'grid', gridTemplateColumns: '130px 1fr', gap: 'clamp(14px, 2.5vw, 28px)',
                  padding: '18px 0', borderBottom: '1px solid #e6ebef', alignItems: 'start',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, paddingTop: 2, whiteSpace: 'nowrap' }}>{item.time}</div>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{
                      flex: 'none', width: 12, height: 12, borderRadius: 3, marginTop: 5,
                      background: typeColors[item.type] || '#94a3b8',
                    }} />
                    <div>
                      <div style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', fontWeight: 700, color: C.textDark, lineHeight: 1.4 }}>{item.activity}</div>
                      {item.detail && (
                        <div style={{ marginTop: 6, fontSize: 14, color: C.textLight, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.detail}</div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NARASUMBER ═══ */}
      <section id="narasumber" style={{ padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 64px)', background: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.22em', color: C.gold, textTransform: 'uppercase' }}>Narasumber</p>
            <h2 style={{ margin: '0 0 12px', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.4vw, 50px)', fontWeight: 700, color: C.navy, letterSpacing: '-.01em' }}>Para Pembicara Utama</h2>
            <p style={{ margin: '0 auto', maxWidth: 600, fontSize: 16, color: C.textLight }}>Pemimpin, akademisi, dan praktisi terdepan di bidang perwakafan nasional.</p>
          </Reveal>

          <div className="wls-speaker-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(18px, 2.5vw, 28px)' }}>
            {confirmed.map((sp, i) => {
              const cat = catStyles[sp.category] || catStyles.FWP;
              return (
                <Reveal key={sp.id || i} delay={(i % 6) + 1} variant="scale">
                  <div className="wls-card" style={{
                    border: `1px solid ${C.border}`, borderRadius: 20, padding: 28, background: '#fff',
                    boxShadow: '0 8px 30px rgba(17,46,63,.05)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                      {sp.photo ? (
                        <div style={{
                          flex: 'none', width: 72, height: 72, borderRadius: 16, overflow: 'hidden',
                          border: `2px solid ${cat.bg}`, background: '#f8fafc',
                        }}>
                          <img src={sp.photo} alt={sp.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                        </div>
                      ) : (
                        <div style={{
                          flex: 'none', width: 60, height: 60, borderRadius: 16, background: cat.grad,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontSize: 20, fontWeight: 800, letterSpacing: '.02em',
                        }}>{getInitials(sp.name)}</div>
                      )}
                      <span style={{
                        padding: '5px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '.04em',
                        background: cat.bg, color: cat.color,
                      }}>{sp.category}</span>
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 6 }}>{sp.name}</div>
                    <div style={{ fontSize: 13.5, color: C.textLight, lineHeight: 1.5, marginBottom: 14, minHeight: 40 }}>{sp.title}</div>
                    <div style={{ paddingTop: 14, borderTop: '1px dashed #e6ebef', fontSize: 13, color: '#1f5f7a', fontWeight: 600, lineHeight: 1.5 }}>{sp.role}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal style={{ marginTop: 56, padding: 'clamp(28px, 4vw, 44px)', borderRadius: 24, background: C.bgLight, border: `1px solid ${C.border}` }} delay={2}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 24 }}>
              <h3 style={{ margin: 0, fontSize: 'clamp(20px, 2.6vw, 26px)', fontWeight: 800, color: C.navy }}>Dan 25+ Tokoh Lainnya</h3>
              <span style={{ fontSize: 14, color: C.textSubtle }}>Menanti konfirmasi kehadiran</span>
            </div>
            <div className="wls-pending-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 28px' }}>
              {pending.map((sp, i) => {
                const cat = catStyles[sp.category] || catStyles.FWP;
                return (
                  <Reveal key={sp.id || i} delay={(i % 6) + 1}>
                    <div style={{
                      display: 'flex', gap: 14, alignItems: 'center', padding: '12px 0',
                      borderBottom: '1px solid #e8edf1',
                    }}>
                      {sp.photo ? (
                        <div style={{
                          flex: 'none', width: 48, height: 48, borderRadius: 12, overflow: 'hidden',
                          background: '#f8fafc', border: `1px solid ${cat.bg}`,
                        }}>
                          <img src={sp.photo} alt={sp.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                        </div>
                      ) : (
                        <div style={{
                          flex: 'none', width: 42, height: 42, borderRadius: 11, background: cat.grad,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontSize: 14, fontWeight: 700,
                        }}>{getInitials(sp.name)}</div>
                      )}
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 14.5, fontWeight: 700, color: C.textDark, lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sp.name}</div>
                        <div style={{ fontSize: 12.5, color: C.textSubtle, lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sp.title}</div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ SPONSORSHIP ═══ */}
      <section id="sponsorship" style={{ padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 64px)', background: `linear-gradient(180deg, ${C.navyDark}, ${C.navy})` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.22em', color: C.goldLight, textTransform: 'uppercase' }}>Sponsorship</p>
            <h2 style={{ margin: '0 0 12px', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.4vw, 50px)', fontWeight: 700, color: '#fff', letterSpacing: '-.01em' }}>Jadi Bagian dari Gerakan</h2>
            <p style={{ margin: '0 auto', maxWidth: 600, fontSize: 16, color: '#8fb6c6' }}>Empat paket kemitraan untuk memperkuat dampak dan visibilitas brand Anda.</p>
          </Reveal>

          <div className="wls-sponsor-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(16px, 2vw, 24px)', alignItems: 'stretch' }}>
            {sponsorshipPackages.map((pkg, i) => {
              const s = sponsorCardStyles[i];
              return (
                <Reveal key={pkg.tier} delay={(i % 4) + 1} variant="scale">
                  <div style={{
                    position: 'relative', display: 'flex', flexDirection: 'column',
                    borderRadius: 22, padding: '30px 26px',
                    background: s.cardBg, border: `1px solid ${s.border}`,
                  }}>
                    {pkg.confirmed && (
                      <span style={{
                        position: 'absolute', top: 18, right: 18,
                        padding: '5px 11px', borderRadius: 999, fontSize: 10.5, fontWeight: 800, letterSpacing: '.05em',
                        background: C.green, color: '#15212b',
                      }}>TERISI · BSI</span>
                    )}
                    <div style={{
                      width: 46, height: 46, borderRadius: 12, background: s.color, marginBottom: 18,
                      boxShadow: `0 8px 22px ${s.glow}`,
                    }} />
                    <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '.02em' }}>{pkg.tier}</div>
                    <div style={{
                      margin: '8px 0 20px', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800,
                      color: s.priceColor, fontFamily: "'Playfair Display', serif",
                    }}>{pkg.price}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 11, flex: 1 }}>
                      {pkg.benefits.map((b, j) => (
                        <div key={j} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 13, color: 'rgba(255,255,255,.78)', lineHeight: 1.5 }}>
                          <Check size={14} style={{ flex: 'none', color: C.green, marginTop: 2 }} />{b}
                        </div>
                      ))}
                    </div>
                    <a href="#registrasi" style={{
                      display: 'block', textAlign: 'center', marginTop: 24, padding: 12, borderRadius: 11,
                      background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.18)',
                      color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none',
                    }}>Pilih Paket</a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ MINI EXPO ═══ */}
      <section id="expo" style={{ padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 64px)', background: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.22em', color: C.gold, textTransform: 'uppercase' }}>Mini Expo</p>
            <h2 style={{ margin: '0 0 12px', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.4vw, 50px)', fontWeight: 700, color: C.navy, letterSpacing: '-.01em' }}>Exhibitor &amp; Mitra</h2>
            <p style={{ margin: '0 auto', maxWidth: 600, fontSize: 16, color: C.textLight }}>Perbankan syariah, lembaga wakaf, hingga fintech berkumpul dalam satu ruang.</p>
          </Reveal>

          <div className="wls-expo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {miniExpoParticipants.map((ex, i) => {
              const tag = tagMap[ex.type] || tagMap['Potential Sponsor'];
              return (
                <Reveal key={i} delay={(i % 6) + 1} variant="scale">
                  <div className="wls-card" style={{
                    border: `1px solid ${C.border}`, borderRadius: 16, padding: 22, background: '#fff',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 11, background: `linear-gradient(135deg, ${C.navy}, #1f5f7a)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontSize: 14, fontWeight: 800,
                      }}>{getInitials(ex.name)}</div>
                      <span style={{
                        padding: '4px 10px', borderRadius: 999, fontSize: 10.5, fontWeight: 700,
                        background: tag.bg, color: tag.color,
                      }}>{ex.type}</span>
                    </div>
                    <div style={{ fontSize: 15.5, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 4 }}>{ex.name}</div>
                    <div style={{ fontSize: 13, color: C.textSubtle }}>{ex.category}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ REGISTRASI ═══ */}
      <section id="registrasi" style={{ padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 64px)', background: C.bgLight }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.22em', color: C.gold, textTransform: 'uppercase' }}>Registrasi</p>
            <h2 style={{ margin: '0 0 12px', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.4vw, 50px)', fontWeight: 700, color: C.navy, letterSpacing: '-.01em' }}>Amankan Kursi Anda</h2>
            <p style={{ margin: '0 auto', maxWidth: 600, fontSize: 16, color: C.textLight }}>Kuota terbatas. Daftar sekarang untuk pengalaman dua hari penuh wawasan.</p>
          </Reveal>

          <div className="wls-reg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2.5vw, 26px)', alignItems: 'stretch' }}>

            {/* Harga Normal */}
            <Reveal delay={1} variant="scale">
              <div style={{
                display: 'flex', flexDirection: 'column', borderRadius: 22, padding: '32px 28px',
                background: '#fff', border: `1px solid ${C.border}`, boxShadow: '0 10px 30px rgba(17,46,63,.05)',
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.1em', color: C.cyan, textTransform: 'uppercase' }}>Harga Normal</div>
                <div style={{ margin: '14px 0 4px', fontSize: 14, color: 'transparent' }}>-</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, color: C.navy }}>Rp 3.000.000</div>
                <div style={{ fontSize: 13, color: C.textLight, marginBottom: 22 }}>Per orang (Harga Berlaku Umum)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, fontSize: 14, color: C.textMuted }}>
                  {['Akses penuh 2 hari kegiatan', 'Penginapan hotel bintang 4', 'Souvenir eksklusif (Jaket WLS, dll)', 'Coffee break, sarapan & makan siang'].map(b => (
                    <div key={b} style={{ display: 'flex', gap: 9 }}><Check size={14} style={{ flex: 'none', color: C.green, marginTop: 2 }} />{b}</div>
                  ))}
                </div>
                <button onClick={() => setShowForm(true)} style={{
                  display: 'block', textAlign: 'center', marginTop: 26, padding: 14, borderRadius: 12,
                  background: C.bgLighter, color: C.navy, fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', width: '100%',
                }}>Daftar Sekarang</button>
              </div>
            </Reveal>

            {/* Harga Spesial Early Bird */}
            <Reveal delay={2} variant="scale">
              <div className="wls-reg-featured" style={{
                display: 'flex', flexDirection: 'column', borderRadius: 22, padding: '32px 28px',
                background: `linear-gradient(160deg, ${C.navy}, ${C.navyMid})`, color: '#fff',
                boxShadow: '0 24px 50px rgba(17,46,63,.28)', position: 'relative', transform: 'translateY(-8px)',
              }}>
                <span style={{
                  position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                  padding: '6px 16px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '.05em',
                  background: C.goldGrad, color: '#15212b', whiteSpace: 'nowrap',
                }}>EARLY BIRD (s.d 15 Juli)</span>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.1em', color: C.goldLight, textTransform: 'uppercase' }}>Harga Spesial</div>
                <div style={{ margin: '14px 0 4px', fontSize: 14, color: 'rgba(255,255,255,.55)', textDecoration: 'line-through' }}>Rp 3.000.000</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, color: '#fff' }}>Rp 2.500.000</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', marginBottom: 22 }}>Per orang</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, fontSize: 14, color: 'rgba(255,255,255,.85)' }}>
                  {['Akses penuh 2 hari kegiatan', 'Penginapan hotel bintang 4', 'Souvenir eksklusif (Jaket WLS, dll)', 'Coffee break, sarapan & makan siang'].map(b => (
                    <div key={b} style={{ display: 'flex', gap: 9 }}><Check size={14} style={{ flex: 'none', color: C.green, marginTop: 2 }} />{b}</div>
                  ))}
                </div>
                <button onClick={() => setShowForm(true)} style={{
                  display: 'block', textAlign: 'center', marginTop: 26, padding: 14, borderRadius: 12,
                  background: C.goldGrad, color: '#15212b', fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', width: '100%',
                }}>Daftar Sekarang</button>
              </div>
            </Reveal>

            {/* Paket Lembaga */}
            <Reveal delay={3} variant="scale">
              <div style={{
                display: 'flex', flexDirection: 'column', borderRadius: 22, padding: '32px 28px',
                background: '#fff', border: `1px solid ${C.border}`, boxShadow: '0 10px 30px rgba(17,46,63,.05)',
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.1em', color: C.green, textTransform: 'uppercase' }}>Paket Lembaga (s.d 15 Juli)</div>
                <div style={{ margin: '14px 0 4px', fontSize: 14, color: C.textSubtle, textDecoration: 'line-through' }}>Rp 3.000.000/orang</div>
                
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: C.navy, lineHeight: 1.1 }}>Rp 2.400.000</div>
                <div style={{ fontSize: 12, color: C.textLight, marginBottom: 12 }}>per orang (Untuk 2 Orang)</div>
                
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: C.navy, lineHeight: 1.1 }}>Rp 2.350.000</div>
                <div style={{ fontSize: 12, color: C.textLight, marginBottom: 22 }}>per orang (Untuk &gt;2 Orang)</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, fontSize: 14, color: C.textMuted }}>
                  {['Fasilitas penuh (sama dengan paket personal)', 'Cocok untuk delegasi pengurus lembaga', 'Kamar hotel disesuaikan', 'Hemat kolektif'].map(b => (
                    <div key={b} style={{ display: 'flex', gap: 9 }}><Check size={14} style={{ flex: 'none', color: C.green, marginTop: 2 }} />{b}</div>
                  ))}
                </div>
                <button onClick={() => setShowForm(true)} style={{
                  display: 'block', textAlign: 'center', marginTop: 26, padding: 14, borderRadius: 12,
                  background: C.bgLighter, color: C.navy, fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', width: '100%',
                }}>Daftar Sekarang</button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ SOUVENIR GALLERY ═══ */}
      <section style={{ padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 64px)', background: C.bgLight }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.22em', color: C.gold, textTransform: 'uppercase' }}>Fasilitas &amp; Souvenir</p>
            <h2 style={{ margin: '0 0 12px', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.4vw, 50px)', fontWeight: 700, color: C.navy, letterSpacing: '-.01em' }}>Desain Jaket Eksklusif</h2>
            <p style={{ margin: '0 auto', maxWidth: 600, fontSize: 16, color: C.textLight }}>Setiap peserta akan mendapatkan Jaket Resmi Waqf Leaders Summit 2026. Pilih ukuran Anda saat mendaftar.</p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, justifyContent: 'center' }}>
            <Reveal delay={1} variant="scale">
              <div style={{ border: `1px solid ${C.border}`, borderRadius: 20, overflow: 'hidden', background: '#fff', boxShadow: '0 8px 24px rgba(17,46,63,.03)' }}>
                <img src="/jacket-design-1.jpg" alt="Desain Jaket WLS Tampak Depan" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                <div style={{ padding: 18, borderTop: `1px solid ${C.border}` }}>
                  <div style={{ fontWeight: 800, color: C.navy, fontSize: 16 }}>Desain Chart Jaket Pria</div>
                  <div style={{ fontSize: 13, color: C.textSubtle, marginTop: 4 }}>Panduan ukuran dan potongan khusus pria</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={2} variant="scale">
              <div style={{ border: `1px solid ${C.border}`, borderRadius: 20, overflow: 'hidden', background: '#fff', boxShadow: '0 8px 24px rgba(17,46,63,.03)' }}>
                <img src="/jacket-design-2.jpg" alt="Desain Jaket WLS Detail" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                <div style={{ padding: 18, borderTop: `1px solid ${C.border}` }}>
                  <div style={{ fontWeight: 800, color: C.navy, fontSize: 16 }}>Desain Chart Jaket Wanita</div>
                  <div style={{ fontSize: 13, color: C.textSubtle, marginTop: 4 }}>Panduan ukuran dan potongan khusus wanita</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 64px)', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.22em', color: C.gold, textTransform: 'uppercase' }}>FAQ</p>
            <h2 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.4vw, 50px)', fontWeight: 700, color: C.navy, letterSpacing: '-.01em' }}>Pertanyaan Umum</h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqData.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ═══ PANITIA ═══ */}
      <section style={{ padding: 'clamp(72px, 9vw, 130px) clamp(20px, 5vw, 64px)', background: C.bgLight }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.22em', color: C.gold, textTransform: 'uppercase' }}>Panitia Pelaksana</p>
            <h2 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.4vw, 50px)', fontWeight: 700, color: C.navy, letterSpacing: '-.01em' }}>Di Balik Layar</h2>
          </Reveal>

          <div className="wls-committee-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 16 }}>
            {summitCommittee.map((c, i) => (
              <Reveal key={i} delay={(i % 6) + 1}>
                <div style={{
                  border: `1px solid ${C.border}`, borderRadius: 16, padding: 20, background: '#fff',
                  display: 'flex', gap: 14, alignItems: 'center',
                }}>
                  <div style={{
                    flex: 'none', width: 46, height: 46, borderRadius: 12,
                    background: 'linear-gradient(135deg, #1f5f7a, #16aeca)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 15, fontWeight: 800,
                  }}>{getInitials(c.name)}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: C.navy, lineHeight: 1.3 }}>{c.name}</div>
                    <div style={{ fontSize: 12.5, color: C.cyan, fontWeight: 600, margin: '2px 0' }}>{c.position}</div>
                    <div style={{ fontSize: 12, color: C.textSubtle }}>{c.organization}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section style={{ padding: 'clamp(60px, 8vw, 110px) clamp(20px, 5vw, 64px)', background: 'radial-gradient(120% 120% at 50% 0%, #1b465f, #0c2230)' }}>
        <Reveal style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', color: '#fff' }}>
          <img src="/tumbuh-bersama-gold.png" alt="Tumbuh Bersama" style={{ width: 'clamp(220px, 38vw, 380px)', height: 'auto', margin: '0 auto 26px', display: 'block' }} />
          <h2 style={{ margin: '0 0 18px', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, lineHeight: 1.15, color: '#fff' }}>Mari Tumbuh Bersama di WLS 2026</h2>
          <p style={{ margin: '0 auto 32px', maxWidth: 540, fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,.8)' }}>Bergabunglah dengan para pemimpin wakaf untuk mengeskalasi dampak nyata bagi peradaban.</p>
          <a href="#registrasi" style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            padding: '16px 38px', borderRadius: 999, background: C.goldGrad,
            color: '#15212b', fontSize: 16, fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 14px 34px rgba(201,162,39,.36)',
          }}>Daftar Sekarang <ArrowRight size={16} /></a>
        </Reveal>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: C.navyDeep, color: '#cbd5e1', padding: 'clamp(56px, 7vw, 80px) clamp(20px, 5vw, 64px) 36px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div className="wls-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 'clamp(32px, 5vw, 64px)' }}>
            <div>
              <img src="/logo.png" alt="Forum Wakaf Produktif" style={{ height: 56, width: 'auto', background: '#fff', padding: '10px 14px', borderRadius: 12, display: 'block', marginBottom: 20 }} />
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: C.textSubtle, maxWidth: 320 }}>Waqf Leaders Summit 2026 &mdash; forum strategis untuk mengeskalasi dampak wakaf produktif menuju Indonesia Emas 2045.</p>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.12em', color: '#fff', textTransform: 'uppercase', marginBottom: 18 }}>Navigasi</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
                {[
                  { href: '#tentang', label: 'Tentang Summit' },
                  { href: '#agenda', label: 'Agenda' },
                  { href: '#narasumber', label: 'Narasumber' },
                  { href: '#sponsorship', label: 'Sponsorship' },
                  { href: '#registrasi', label: 'Registrasi' },
                ].map(l => (
                  <a key={l.href} href={l.href} style={{ color: C.textSubtle, textDecoration: 'none' }}>{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.12em', color: '#fff', textTransform: 'uppercase', marginBottom: 18 }}>Kontak</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: C.textSubtle }}>
                <a href="https://wa.me/6281389667055" target="_blank" rel="noopener noreferrer" style={{ color: C.textSubtle, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Phone size={14} /> 0813 8966 7055
                </a>
                <a href="mailto:fwpsekretariat@gmail.com" style={{ color: C.textSubtle, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Mail size={14} /> fwpsekretariat@gmail.com
                </a>
                <a href="https://instagram.com/forumwakafproduktif" target="_blank" rel="noopener noreferrer" style={{ color: C.textSubtle, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Globe size={14} /> @forumwakafproduktif
                </a>
                <a href="https://fwp.or.id" target="_blank" rel="noopener noreferrer" style={{ color: C.textSubtle, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Globe size={14} /> fwp.or.id
                </a>
              </div>
            </div>
          </div>
          <div style={{
            marginTop: 44, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.08)',
            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12,
            fontSize: 13, color: C.textLight,
          }}>
            <span>&copy; 2026 Forum Wakaf Produktif. Seluruh hak cipta dilindungi.</span>
            <span>fwp.or.id/wls2026</span>
          </div>
        </div>
      </footer>

      {/* ═══ FLOATING CTA ═══ */}
      <button onClick={() => setShowForm(true)} style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 90,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '14px 24px', borderRadius: 999, background: C.goldGrad,
        color: '#15212b', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer',
        boxShadow: '0 12px 30px rgba(201,162,39,.4)',
        opacity: showFloat ? 1 : 0, transform: showFloat ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: showFloat ? 'auto' : 'none',
        transition: 'opacity .4s ease, transform .4s ease',
      }}>Daftar <ArrowRight size={14} /></button>

      {showForm && <RegistrationForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
