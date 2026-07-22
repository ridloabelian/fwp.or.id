export const navLinks = [
  { id: 'home', path: '/', label: 'Beranda' },
  {
    id: 'about',
    label: 'Tentang',
    dropdown: [
      { id: 'about-profile', path: '/tentang-kami', label: 'Profil' },
      { id: 'about-sejarah', path: '/tentang-kami/sejarah', label: 'Sejarah' },
      { id: 'about-legalitas', path: '/tentang-kami/legalitas', label: 'Legalitas' },
      { id: 'about-struktur', path: '/tentang-kami/struktur', label: 'Struktur' },
    ],
  },
  {
    id: 'membership',
    label: 'Keanggotaan',
    dropdown: [
      { id: 'membership-info', path: '/keanggotaan', label: 'Info Keanggotaan' },
      { id: 'register', path: '/daftar-anggota', label: 'Pendaftaran Anggota' },
    ],
  },
  { id: 'news', path: '/berita', label: 'Berita' },
  { id: 'programs', path: '/program', label: 'Program' },
  { id: 'nazhir', path: '/pusat-nazhir', label: 'Pusat Nazhir' },
  { id: 'stories', path: '/inspirasi-studi-kasus', label: 'Inspirasi' },
  { id: 'business', path: '/layanan-bisnis', label: 'Kemitraan' },
  { id: 'transparency', path: '/transparansi', label: 'Transparansi' }
];