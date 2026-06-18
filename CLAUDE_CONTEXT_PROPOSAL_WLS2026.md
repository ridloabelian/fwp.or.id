# Claude Context: Proposal WLS 2026 — fwp.or.id

> **Project:** Forum Wakaf Produktif (fwp.or.id)  
> **File:** ProposalPage.jsx + summit.js  
> **Goal:** Lanjutkan pengembangan proposal Waqf Leaders Summit 2026  
> **Tech Stack:** React 19, Vite 8, React Router v7, Framer Motion, Lucide React  
> **Styling:** Vanilla CSS3 (inline styles + CSS variables), NO Tailwind  
> **Last Updated:** 18 Juni 2026

---

## 1. PROJECT STRUCTURE

```
fwp.or.id/
├── src/
│   ├── pages/
│   │   ├── ProposalPage.jsx          ← MAIN FILE (1533 lines, ~44KB)
│   │   ├── SummitPage.jsx            ← Event landing page
│   │   ├── EventLandingPage.jsx      ← /wls2026 redirect page
│   │   └── ...other pages
│   ├── data/
│   │   └── summit.js                 ← DATA SOURCE (~16KB)
│   ├── components/
│   │   ├── SEO.jsx                   ← Meta tags component
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                       ← Router config
│   └── main.jsx
├── public/
│   └── og-image.jpg                  ← 1200x630 JPEG for OG tags
├── docs/                             ← Static exports
│   ├── PROPOSAL_WLS2026.md
│   ├── PROPOSAL_WLS2026.docx
│   └── PROPOSAL_WLS2026.pdf
├── package.json
└── vite.config.js
```

**Route:** `/proposal-wls2026` → `<ProposalPage />`

---

## 2. DATA SOURCE: `src/data/summit.js`

All proposal data is imported from this file. **NEVER hardcode data in JSX.**

### Exports:

```javascript
// Committee members
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

// Event details
export const summitDetails = {
  name: 'Waqf Leaders Summit 2026',
  date: 'Rabu–Kamis, 22–23 Juli 2026',
  venue: 'Hotel Holiday Inn, Jl. Dr. Djunjunan No.96, Pasteur, Sukajadi, Kota Bandung, Jawa Barat 40162',
  tagline: 'Tumbuh Bersama',
  description: 'Forum strategis yang diinisiasi oleh Forum Wakaf Produktif untuk menyatukan visi dari berbagai stakeholder dan mengeskalasi dampak nyata wakaf produktif bagi masyarakat.',
  theme: 'Scaling-Up the Impact of Waqf Toward Sustainable Wellbeing',
};

// Speakers: 6 confirmed, 25 pending (31 total)
export const summitSpeakers = {
  confirmed: [/* 6 speakers with: id, name, title, status, category, role */],
  pending: [/* 25 speakers with same schema */],
  notSent: [],
  proposed: [],
};

// Speaker categories: Pemerintah, Akademisi, Praktisi, FWP, Ulama, Hiburan, Media
// Speaker status: confirmed, pending, negotiating, not-sent

// Rundown Day 1 (Rabu, 22 Juli) — 14 items
export const rundownDay1 = [
  { time: '07.30 – 08.30', activity: 'Registrasi & Sarapan Pagi', type: 'registration' },
  { time: '08.30 – 09.00', activity: 'Pembukaan & Mars FWP', detail: 'Penampilan angklung santri Al-Hilal', type: 'opening' },
  // ... (see full file)
];

// Rundown Day 2 (Kamis, 23 Juli) — 9 items
export const rundownDay2 = [
  { time: '07.00 – 08.00', activity: 'Sarapan Pagi', type: 'break' },
  { time: '08.00 – 09.30', activity: 'Pembahasan Unit Manajemen Investasi', detail: 'Bp. Ali Bastoni', type: 'presentation' },
  // ... (see full file)
];

// Activity types: registration, opening, speech, keynote, break, panel, talkshow, 
//                  entertainment, gala, presentation, seminar, pitching, closing, ceremony

// Sponsorship packages
export const sponsorshipPackages = [
  {
    tier: 'Platinum', price: 'Rp 45.000.000', color: '#132c3f',
    benefits: [/* 8 items */], confirmed: true, sponsor: 'Bank Syariah Indonesia'
  },
  { tier: 'Gold', price: 'Rp 30.000.000', color: '#c9a227', benefits: [/* 7 items */], confirmed: false },
  { tier: 'Silver', price: 'Rp 15.000.000', color: '#8a8a8a', benefits: [/* 5 items */], confirmed: false },
  { tier: 'Bronze', price: 'Rp 7.500.000', color: '#cd7f32', benefits: [/* 3 items */], confirmed: false },
];

// Mini Expo participants
export const miniExpoParticipants = [
  { name: 'Bank Syariah Indonesia', type: 'Sponsor Platinum', category: 'Perbankan Syariah' },
  // ... 10 total
];

// Event statistics
export const eventStats = [
  { label: 'Hari', value: '2', suffix: '' },
  { label: 'Pembicara', value: '25+', suffix: '' },
  { label: 'Peserta Target', value: '200', suffix: '+' },
  { label: 'Nazhir', value: '50+', suffix: '' },
  { label: 'Investor & Mitra', value: '30+', suffix: '' },
  { label: 'Booth Expo', value: '10', suffix: '+' },
];
```

**Full file:** `src/data/summit.js` (509 lines, ~16KB)

---

## 3. PROPOSAL PAGE ARCHITECTURE

### File: `src/pages/ProposalPage.jsx` (1533 lines, ~44KB)

### Imports:
```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award, ArrowRight, Leaf, Clock, Mic, Coffee, 
  Star, CheckCircle, XCircle, HelpCircle, Send, Mail, Phone, Globe, Building2, 
  GraduationCap, Landmark, Briefcase, Heart, TrendingUp, ChevronRight, Ticket, 
  MapPinCheck, FileText, Target, BookOpen, DollarSign, Handshake, Zap, Shield, 
  BarChart3, PieChart, Printer, Download, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import { summitCommittee, summitDetails, summitSpeakers, rundownDay1, 
  rundownDay2, sponsorshipPackages, eventStats, miniExpoParticipants } from '../data/summit';
```

### Animation Variants (defined at top):
```javascript
const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }};
const fadeInUpFast = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }};
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }};
const itemScale = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }};
const slideInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }};
const slideInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }};
const scaleIn = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }};
const rotateIn = { hidden: { opacity: 0, rotate: -10, scale: 0.8 }, visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }};
```

### Sub-Components (all defined in-file):

| Component | Purpose | Lines |
|-----------|---------|-------|
| `StatusBadge` | Badge for speaker status (confirmed/pending/etc) | ~30 |
| `SectionHeader` | Reusable section header with icon, title, subtitle | ~50 |
| `TimelineItem` | Timeline item with dot, line, time, activity, detail | ~105 |
| `SpeakerCard` | Speaker card with category badge, status, role | ~80 |
| `SponsorshipCard` | Sponsorship tier card with benefits list | ~125 |
| `StatCard` | Stat number card with animation | ~40 |
| `BudgetSection` | Budget breakdown table with total | ~120 |
| `PrintStyles` | CSS `@media print` styles | ~20 |

### Page Sections (in order):

1. **Hero Section** — Dark green (`#1B5E20`) background, animated dot pattern, event title, theme, date/venue/pax details, CTA buttons (Print, Email)
2. **Executive Summary** — Visi & Misi grid, highlighted description paragraph
3. **Event Highlights** — Stats grid (6 cards: Hari, Pembicara, Peserta, Nazhir, Investor, Booth)
4. **Agenda & Rundown** — Day 1/2 toggle, timeline with colored type indicators
5. **Narasumber** — Confirmed speakers grid (6) + Pending speakers grid (25)
6. **Paket Sponsorship** — 4 tier cards (Platinum/Gold/Silver/Bronze)
7. **Anggaran** — Collapsible budget breakdown, total Rp 264.000.000
8. **Panitia Pelaksana** — Committee grid (10 members)
9. **Kontak Kami** — Phone, Email, Website, Address cards + CTA link

### State:
```javascript
const [activeDay, setActiveDay] = React.useState(1);   // For day toggle
const [showBudget, setShowBudget] = React.useState(false);  // For budget collapse
```

### Print Support:
- `handlePrint()` calls `window.print()`
- `.no-print` class hides interactive elements (buttons, toggles)
- `.print-break` for page breaks
- `@media print` CSS in `<PrintStyles />`

---

## 4. DESIGN SYSTEM TOKENS

### Colors:
```
Primary Green:    #1B5E20  (main brand, headings, accents)
Dark Navy:        #132c3f  (Platinum tier)
Gold:             #c9a227  (Gold tier, ceremony)
Silver:           #8a8a8a  (Silver tier)
Bronze:           #cd7f32  (Bronze tier)
Accent Yellow:    #FFC107  (CTA buttons, highlights)
Background:       #f8fafc  (page background)
Light Green:      #f0fdf4  (section alt background)
Text Primary:     #1a1a2e  (headings)
Text Secondary:   #64748b  (body, descriptions)
Text Tertiary:    #475569  (labels, metadata)
```

### Status Badge Colors:
```
confirmed:   bg=#dcfce7  text=#166534  (green)
pending:     bg=#fef3c7  text=#92400e  (amber)
negotiating: bg=#dbeafe  text=#1e40af  (blue)
not-sent:    bg=#fee2e2  text=#991b1b  (red)
```

### Category Colors (Speakers):
```
Pemerintah: #dc2626  (red)
Akademisi:  #0ea5e9  (sky)
Praktisi:   #10b981  (emerald)
FWP:        #1B5E20  (green)
Ulama:      #7c3aed  (violet)
Hiburan:    #ec4899  (pink)
Media:      #f59e0b  (amber)
```

### Activity Type Colors (Timeline):
```
registration: #3b82f6   opening: #1B5E20   speech: #7c3aed
keynote: #dc2626        break: #f59e0b      panel: #0ea5e9
talkshow: #8b5cf6       entertainment: #ec4899   gala: #f97316
presentation: #10b981   seminar: #06b6d4    pitching: #84cc16
closing: #1B5E20       ceremony: #c9a227
```

### Typography:
- Headings: `clamp()` for responsive sizing, font-weight 800
- Body: 0.9-1rem, line-height 1.6-1.7
- Labels: 0.75-0.85rem, font-weight 600-700
- All inline styles (no Tailwind classes)

### Spacing:
- Section padding: `4rem 1rem`
- Max-width: `1200px` centered
- Card padding: `1.5rem` - `2rem`
- Grid gap: `1.5rem` - `2rem`
- Border radius: `12px` - `20px` - `9999px` (pills)

### Shadows:
```
Card:        0 4px 24px rgba(0,0,0,0.06)
Hover:       0 20px 40px rgba(0,0,0,0.12)
CTA:         0 4px 16px rgba(255,193,7,0.3)
Icon circle: 0 8px 32px {color}40
```

---

## 5. KEY CONVENTIONS

1. **NO Tailwind CSS** — All styling is inline `style={{}}` or CSS variables
2. **Framer Motion** — All animations use `motion.*` components with variants
3. **Lucide React** — All icons from `lucide-react`, NEVER emojis for UI icons
4. **Data-driven** — All content from `summit.js`, NEVER hardcode in JSX
5. **Responsive** — Use `clamp()` for fonts, `gridTemplateColumns: repeat(auto-fit, minmax(X, 1fr))` for grids
6. **Print-friendly** — `.no-print` hides interactive elements, `@media print` for print styles
7. **SEO** — `<SEO />` component for meta tags on every page

---

## 6. CURRENT KNOWN ISSUES / TODO

| # | Issue | Priority | Notes |
|---|-------|----------|-------|
| 1 | **Speaker ID 25 duplicate** — Dr. Daniar appears twice (id 23 and 25) in `summit.js` pending array | 🔴 High | Fix: remove duplicate entry |
| 2 | **Missing `eventStats` import** in `summit.js` — imported in ProposalPage but not exported? | 🟡 Check | Verify export exists |
| 3 | **No Mini Expo section** in ProposalPage — data exists but not rendered | 🟡 Medium | Add section or remove import |
| 4 | **Budget is hardcoded** in `BudgetSection` component, not from `summit.js` | 🟡 Medium | Should be data-driven |
| 5 | **No speaker photos** — all cards show text only | 🟢 Low | Add placeholder or photo URLs |
| 6 | **No social share buttons** — only print & email | 🟢 Low | Add WhatsApp/Twitter share |
| 7 | **Mobile timeline** could be tighter on small screens | 🟢 Low | Responsive refinement |

---

## 7. HOW TO EDIT

### A. Update Data (Content Changes)
→ Edit `src/data/summit.js` only
- Add/remove speakers: update `summitSpeakers.confirmed` or `.pending`
- Change rundown: edit `rundownDay1` or `rundownDay2`
- Update sponsorship: edit `sponsorshipPackages`
- Update committee: edit `summitCommittee`
- Update stats: edit `eventStats`

### B. Update Layout/Design (Structural Changes)
→ Edit `src/pages/ProposalPage.jsx`
- Add new section: create sub-component + add to main export
- Modify animation: adjust variants or add new ones
- Change colors: update token values (but keep consistent)
- Add interactivity: new state + handlers

### C. Add New Feature
1. Add data to `summit.js` if needed
2. Create sub-component in `ProposalPage.jsx`
3. Add to main page export
4. Test responsive + print

---

## 8. BUILD & DEPLOY

```bash
# Local dev
npm run dev          # Vite dev server, usually port 5174

# Production build
npm run build        # Output: dist/

# Deploy (Cloudflare Pages)
# - Push to GitHub → auto-deploy via Cloudflare Pages
# - Or: npx wrangler pages deploy dist/
```

**Note:** Custom domain `fwp.or.id` has cache lag (30-60 min). Use `*.pages.dev` for immediate testing.

---

## 9. PROMPT TEMPLATE FOR CLAUDE

When you upload this file to Claude Desktop, use this prompt:

```
Saya ingin melanjutkan pengembangan Proposal Waqf Leaders Summit 2026 
di project fwp.or.id. File utama:

- src/pages/ProposalPage.jsx (1533 lines, proposal page)
- src/data/summit.js (509 lines, data source)

Tech stack: React 19, Vite, Framer Motion, Lucide React, vanilla CSS.
NO Tailwind. All data dari summit.js, jangan hardcode di JSX.

Tugas spesifik saya: [JELASKAN TUGAS]

Contoh tugas:
- "Tambah section Mini Expo yang datanya sudah ada di summit.js"
- "Fix duplicate speaker ID 25 di summit.js"
- "Tambah fitur export PDF yang lebih baik dari print-to-PDF"
- "Update speaker status dari pending ke confirmed untuk X, Y, Z"
- "Tambah section rundown detail dengan deskripsi per session"
- "Refactor BudgetSection jadi data-driven dari summit.js"
- "Tambah foto placeholder untuk speaker cards"
- "Improve responsive design untuk mobile"
```

---

## 10. FILE CHECKSUMS (For Verification)

```
src/data/summit.js         → 509 lines, ~16KB
src/pages/ProposalPage.jsx → 1533 lines, ~44KB
src/App.jsx                → 53 lines, ~1.9KB
```

---

**Prepared by:** FWP Bot  
**For:** Ridlo Abelian (Sekretaris WLS 2026)  
**Date:** 18 Juni 2026

---

> 💡 **Tip:** Save this file as `CLAUDE_CONTEXT_PROPOSAL_WLS2026.md` di project root. 
> Upload ke Claude Desktop + paste prompt di atas. Claude akan langsung paham konteks penuh.
