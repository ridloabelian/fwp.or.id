export const navLinks = [
  { id: 'home', path: '/', label: 'Beranda' },
  {
    id: 'about',
    label: 'Tentang FWP',
    dropdown: [
      { id: 'about-profile', path: '/tentang-kami', label: 'Profil' },
      { id: 'about-sejarah', path: '/tentang-kami/sejarah', label: 'Sejarah' },
      { id: 'about-legalitas', path: '/tentang-kami/legalitas', label: 'Legalitas' },
      { id: 'about-struktur', path: '/tentang-kami/struktur', label: 'Struktur' },
    ],
  },
  { id: 'membership', path: '/keanggotaan', label: 'Keanggotaan' },
  { id: 'news', path: '/berita', label: 'Berita' },
  { id: 'register', path: '/daftar-anggota', label: 'Pendaftaran Anggota' },
  { id: 'programs', path: '/program', label: 'Program' },
  { id: 'nazhir', path: '/pusat-nazhir', label: 'Pusat Nazhir' },
  { id: 'stories', path: '/inspirasi-studi-kasus', label: 'Inspirasi' },
  { id: 'business', path: '/layanan-bisnis', label: 'Kemitraan Strategis' },
  { id: 'transparency', path: '/transparansi', label: 'Transparansi' },
  { id: 'wls', path: '/wls2026', label: 'WLS 2026' }
];
