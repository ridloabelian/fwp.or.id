export const navLinks = [
  { id: 'home', path: '/', label: 'Beranda' },
  {
    id: 'about',
    label: 'Tentang',
    dropdown: [
      { id: 'about-profile', path: '/tentang-kami', label: 'Profil Lembaga', desc: 'Visi, misi, pengurus & profil lengkap' },
      { id: 'about-sejarah', path: '/tentang-kami/sejarah', label: 'Sejarah & Milestone', desc: 'Perjalanan kolaborasi sejak 2016' },
      { id: 'about-legalitas', path: '/tentang-kami/legalitas', label: 'Legalitas Resmi', desc: 'SK Kemenkumham & badan hukum' },
      { id: 'about-struktur', path: '/tentang-kami/struktur', label: 'Struktur Pengurus', desc: 'Kepengurusan periode 2024–2027' },
    ],
  },
  {
    id: 'membership',
    label: 'Keanggotaan',
    dropdown: [
      { id: 'membership-info', path: '/keanggotaan', label: 'Info & Kategori', desc: 'Skema Silver, Gold & Platinum' },
      { id: 'register', path: '/daftar-anggota', label: 'Pendaftaran Lembaga', desc: 'Ajukan keanggotaan resmi FWP' },
    ],
  },
  {
    id: 'ecosystem',
    label: 'Ekosistem',
    dropdown: [
      { id: 'nazhir', path: '/pusat-nazhir', label: 'Direktori & Pusat Nazhir', desc: 'SKKNI, WCP & direktori 49 nazhir' },
      { id: 'programs', path: '/program', label: 'Program Strategis', desc: 'Inkubasi, Kota Wakaf, CWLS & APIF' },
      { id: 'business', path: '/layanan-bisnis', label: 'Kemitraan & Prospektus', desc: 'Integrasi CSR, SCF & proyek wakaf' },
      { id: 'stories', path: '/inspirasi-studi-kasus', label: 'Inspirasi & Studi Kasus', desc: 'Model nyata pengelolaan aset produktif' },
      { id: 'transparency', path: '/transparansi', label: 'Transparansi & Regulasi', desc: 'Sebaran lembaga, regulasi & fatwa' },
      { id: 'summit', path: '/waqf-leaders-summit', label: 'Waqf Leaders Summit', desc: 'Arsip forum & modul WLS 2026' },
    ],
  },
  { id: 'news', path: '/berita', label: 'Berita' },
];
