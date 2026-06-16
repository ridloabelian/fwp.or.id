export const summitCommittee = [
  { position: 'Ketua', name: 'Asad Askaruddin', organization: 'RWI' },
  { position: 'Sekretaris', name: 'Ridlo Abelian', organization: 'Amal Produktif' },
  { position: 'Bendahara', name: 'Iwan Setiawan', organization: 'LAZIS Al-Hilal' },
  { position: 'Divisi Acara', name: 'Nurodin', organization: 'Sinergi Foundation, Itqan' },
  { position: 'Divisi Sponsorship', name: 'Rayan Faisal', organization: 'Wakaf Salman' },
  { position: 'Divisi Perlengkapan', name: 'Doddy Topan', organization: 'Daarut Tauhid' },
  { position: 'Divisi Perlengkapan', name: 'Agis Muhsin', organization: 'Amal Mulia' },
  { position: 'PIC Mini Expo', name: 'Tri Eka Shofyandi', organization: 'Marwah Wakaf' },
  { position: 'Divisi Dokumentasi', name: 'Fajar', organization: 'LAZIS Al-Hilal' },
  { position: 'Divisi Media dan Publikasi', name: 'Uus', organization: 'Wakaf PERSIS, Itqan' },
];

export const summitDetails = {
  name: 'Waqf Leaders Summit 2026',
  date: 'Rabu–Kamis, 22–23 Juli 2026',
  venue: 'Holiday Inn Pasteur, Bandung',
  tagline: 'Tumbuh Bersama',
  description: 'Forum strategis yang diinisiasi oleh Forum Wakaf Produktif untuk menyatukan visi dari berbagai stakeholder dan mengeskalasi dampak nyata wakaf produktif bagi masyarakat.',
  theme: 'Transformasi Wakaf Nasional Menuju Indonesia Emas 2045',
};

// Speakers data from spreadsheet
export const summitSpeakers = {
  confirmed: [
    {
      id: 1,
      name: 'Bp. Rayan Asa Luminaries, S.E., M.A.',
      title: 'Ketua Forum Wakaf Produktif',
      status: 'confirmed',
      category: 'FWP',
    },
    {
      id: 6,
      name: 'Bp. Rizky Wisnoentoro, Ph.D.',
      title: 'Dosen Magister Keuangan Berkelanjutan FEB UIII',
      status: 'confirmed',
      category: 'Akademisi',
    },
    {
      id: 13,
      name: 'Bp. Ali Bastoni',
      title: 'Kepala Unit Manajemen Investasi Forum Wakaf Produktif',
      status: 'confirmed',
      category: 'FWP',
    },
    {
      id: 15,
      name: 'Ibu Nila Armelia Windasari, S.A., M.B.A, Ph.D.',
      title: 'Dosen Sekolah Bisnis dan Manajemen Institut Teknologi Bandung',
      status: 'confirmed',
      category: 'Akademisi',
    },
  ],
  pending: [
    {
      id: 2,
      name: 'Prof. Nasarudin Umar',
      title: 'Menteri Agama Republik Indonesia',
      status: 'pending',
      category: 'Pemerintah',
    },
    {
      id: 3,
      name: 'Bp. Prof. Dr. Phil. H. Kamaruddin Amin',
      title: 'Ketua Badan Pelaksana Badan Wakaf Indonesia',
      status: 'pending',
      category: 'Pemerintah',
    },
    {
      id: 4,
      name: 'Bp. Sudarto, S.E., M.B.A., M.Kom., Ph.D., CA, CGEIT',
      title: 'Plt. Kepala Badan Pendidikan dan Pelatihan Keuangan, Presiden Direktur LPDP',
      status: 'pending',
      category: 'Pemerintah',
    },
    {
      id: 5,
      name: 'Anggoro Eko Cahyo',
      title: 'Direktur Utama PT. Bank Syariah Indonesia',
      status: 'negotiating',
      category: 'Industri',
    },
    {
      id: 8,
      name: 'Bp. Dadang Muljawan',
      title: 'Ketua Departemen Ekonomi Dan Keuangan Syariah Bank Indonesia',
      status: 'negotiating',
      category: 'Pemerintah',
    },
    {
      id: 10,
      name: 'Bp. Salman Subakat',
      title: 'CEO Paragon Technology and Innovation (PTI)',
      status: 'negotiating',
      category: 'Industri',
    },
    {
      id: 12,
      name: 'Bp. Ust. Adi Pratama Larisindo',
      title: 'Founder dan Pengasuh SIDAQ',
      status: 'negotiating',
      category: 'Ulama',
    },
  ],
  notSent: [
    {
      id: 7,
      name: 'Bp. Ferry Irwandi',
      title: 'CEO Malaka Project',
      status: 'not-sent',
      category: 'Industri',
    },
    {
      id: 9,
      name: 'Ust. Oni Syahroni',
      title: 'Kepala Subdirektorat Perencanaan Transaksi dan Pengembangan Instrumen SBSN, Kementerian Keuangan RI',
      status: 'not-sent',
      category: 'Pemerintah',
    },
    {
      id: 11,
      name: 'Bp. Dr. Indra Gunawan, SE., SIP., MSc.',
      title: 'Anggota Badan Pelaksana BPKH, dan Dosen Magister Ekonomi FEB UIII',
      status: 'not-sent',
      category: 'Akademisi',
    },
    {
      id: 14,
      name: 'Bp. Ust. Fatih Karim',
      title: 'Founder Cinta Quran Foundation',
      status: 'not-sent',
      category: 'Ulama',
    },
  ],
  proposed: [
    { name: 'Juragan 99', title: 'Content Creator & Entrepreneur', category: 'Influencer' },
    { name: 'Kyai Hendra', title: 'Pimpinan LAZISWAF Al Hilal', category: 'Ulama' },
    { name: 'Bank Jabar Syariah', title: 'Representative', category: 'Industri' },
    { name: "Aa' Gym", title: 'Pimpinan Daarut Tauhid', category: 'Ulama' },
    { name: 'Abu Syauqi', title: 'Pimpinan Rumah Zakat', category: 'Ulama' },
    { name: 'Pak Erwin', title: 'Gubernur/Wakil Jawa Barat', category: 'Pemerintah' },
    { name: 'Pak Farhan', title: 'Walikota Bandung', category: 'Pemerintah' },
    { name: 'Ust. Deddy Sulaiman', title: 'Ulama & Wakaf Activist', category: 'Ulama' },
  ],
};

// Rundown Day 1
export const rundownDay1 = [
  {
    time: '07.30 – 08.30',
    activity: 'Registrasi & Sarapan Pagi',
    type: 'registration',
  },
  {
    time: '08.30 – 09.00',
    activity: 'Pembukaan & Mars FWP',
    detail: 'Penampilan angklung santri Al-Hilal',
    type: 'opening',
  },
  {
    time: '09.00 – 09.30',
    activity: 'Sambutan Ketua FWP',
    detail: 'Bp. Rayan Asa Luminaries',
    type: 'speech',
  },
  {
    time: '09.30 – 10.00',
    activity: 'Keynote Speech: Kebijakan Wakaf Nasional',
    detail: 'Menteri Agama / Kepala BWI (TBC)',
    type: 'keynote',
  },
  {
    time: '10.00 – 10.30',
    activity: 'Coffee Break & Networking',
    type: 'break',
  },
  {
    time: '10.30 – 12.00',
    activity: 'Leaders Talk: Masa Depan Perwakafan Indonesia',
    detail: 'Panel: BWI, BPKH, Kemenkeu, BI, OJK (TBC)',
    type: 'panel',
  },
  {
    time: '12.00 – 13.00',
    activity: 'Shalat Jumat & Makan Siang',
    type: 'break',
  },
  {
    time: '13.00 – 14.00',
    activity: 'Launching Unit Manajemen Investasi FWP',
    detail: 'Bp. Ali Bastoni, Kepala UMI FWP',
    type: 'launching',
  },
  {
    time: '14.00 – 15.30',
    activity: 'Capacity Building: Pengelolaan Aset Wakaf Produktif',
    detail: 'Workshop interaktif untuk Nazhir',
    type: 'workshop',
  },
  {
    time: '15.30 – 16.00',
    activity: 'Coffee Break',
    type: 'break',
  },
  {
    time: '16.00 – 17.30',
    activity: 'Program Pitching: Kolaborasi Wakaf Produktif',
    detail: 'Presentasi lembaga wakaf kepada investor & mitra',
    type: 'pitching',
  },
  {
    time: '17.30 – 18.00',
    activity: 'Penyerahan Tanda Keanggotaan FWP',
    detail: 'Anggota lama & ekspos anggota baru',
    type: 'ceremony',
  },
  {
    time: '18.00 – 19.00',
    activity: 'ISHO & Makan Malam',
    type: 'break',
  },
  {
    time: '19.00 – 21.00',
    activity: 'Gala Dinner & Waqf Awards Night',
    detail: 'Penghargaan kategori Leaders & Kelembagaan',
    type: 'gala',
  },
];

// Rundown Day 2
export const rundownDay2 = [
  {
    time: '07.00 – 08.00',
    activity: 'Sarapan Pagi',
    type: 'break',
  },
  {
    time: '08.00 – 09.30',
    activity: 'Breakout Session: Wilayah Wakaf Produktif',
    detail: 'Pembentukan FWP Wilayah (kota wakaf priority)',
    type: 'breakout',
  },
  {
    time: '09.30 – 10.30',
    activity: 'Business Matching: Nazhir × Investor × Mitra',
    detail: 'Mini Expo & one-on-one meeting',
    type: 'business',
  },
  {
    time: '10.30 – 11.00',
    activity: 'Coffee Break & Kunjungan Booth',
    type: 'break',
  },
  {
    time: '11.00 – 12.00',
    activity: 'Closing Ceremony & Komitmen Bersama',
    detail: 'Deklarasi Waqf Leaders 2026',
    type: 'closing',
  },
  {
    time: '12.00 – 13.00',
    activity: 'Makan Siang & Networking',
    type: 'break',
  },
  {
    time: '13.00 – 15.00',
    activity: 'City Tour: Kunjungan ke Proyek Wakaf Bandung',
    detail: 'Optional – bagi peserta yang berminat',
    type: 'tour',
  },
];

// Sponsorship packages
export const sponsorshipPackages = [
  {
    tier: 'Platinum',
    price: 'Rp 45.000.000',
    color: '#132c3f',
    benefits: [
      'Logo di semua materi promosi (utama)',
      'Booth premium di Mini Expo (3×3m)',
      '5 tiket VIP (full access)',
      'Sesi pitching 15 menit di main stage',
      'Full page advertorial di program book',
      'Mention di press release & media coverage',
      'Access to Nazhir database',
      'Logo di backdrop utama & photobooth',
    ],
    confirmed: true,
    sponsor: 'Bank Syariah Indonesia',
  },
  {
    tier: 'Gold',
    price: 'Rp 30.000.000',
    color: '#c9a227',
    benefits: [
      'Logo di materi promosi (sekunder)',
      'Booth standar di Mini Expo (2×2m)',
      '3 tiket VIP (full access)',
      'Sesi pitching 10 menit di breakout room',
      'Half page advertorial di program book',
      'Mention di press release',
      'Logo di backdrop utama',
    ],
    confirmed: false,
  },
  {
    tier: 'Silver',
    price: 'Rp 15.000.000',
    color: '#8a8a8a',
    benefits: [
      'Logo di materi promosi (tertier)',
      '1 tiket VIP (full access)',
      'Quarter page advertorial di program book',
      'Mention di press release',
      'Logo di backdrop utama',
    ],
    confirmed: false,
  },
  {
    tier: 'Bronze',
    price: 'Rp 7.500.000',
    color: '#cd7f32',
    benefits: [
      'Logo di program book',
      '1 tiket regular',
      'Mention di press release',
    ],
    confirmed: false,
  },
];

// Mini Expo participants
export const miniExpoParticipants = [
  { name: 'Bank Syariah Indonesia', type: 'Sponsor Platinum', category: 'Perbankan Syariah' },
  { name: 'Bank Mega Syariah', type: 'Potential Sponsor', category: 'Perbankan Syariah' },
  { name: 'BPRS HIK Parahyangan', type: 'Potential Sponsor', category: 'Perbankan Syariah' },
  { name: 'BPRS Hijra', type: 'Potential Sponsor', category: 'Perbankan Syariah' },
  { name: 'Tri Megah Sekuritas', type: 'Potential Sponsor', category: 'Sekuritas' },
  { name: 'Fundex', type: 'Potential Sponsor', category: 'Fintech' },
  { name: 'RM. Ampera', type: 'Potential Sponsor', category: 'UMKM' },
  { name: 'Marwah Wakaf', type: 'Exhibitor', category: 'Lembaga Wakaf' },
  { name: 'Sinergi Foundation', type: 'Exhibitor', category: 'Lembaga Wakaf' },
  { name: 'Wakaf Salman', type: 'Exhibitor', category: 'Lembaga Wakaf' },
];

// Event statistics for display
export const eventStats = [
  { label: 'Hari', value: '2', suffix: '' },
  { label: 'Pembicara', value: '15+', suffix: '' },
  { label: 'Peserta Target', value: '200', suffix: '+' },
  { label: 'Nazhir', value: '50+', suffix: '' },
  { label: 'Investor & Mitra', value: '30+', suffix: '' },
  { label: 'Booth Expo', value: '10', suffix: '+' },
];
