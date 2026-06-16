# Product Requirements Document (PRD)
# Forum Wakaf Produktif (fwp.or.id) — Website & Event Platform

**Version:** 2.0  
**Date:** 17 Juni 2026  
**Author:** FWP Bot (AI Agent)  
**Status:** Active Development  

---

## 1. Executive Summary

Portal resmi multi-page application (MPA) untuk **Forum Wakaf Produktif (FWP)** yang memimpin transformasi nasional wakaf tunai dan pengembangan aset produktif menuju Indonesia Emas 2045. Website ini melayani kebutuhan informasi, registrasi event, dan transparansi organisasi.

---

## 2. Project Context

### 2.1 Background
- **Organisasi:** Forum Wakaf Produktif (FWP)
- **Dilaunching:** 7 Desember 2016 di Hotel Sari Pan Pacific Jakarta
- **Anggota:** 57 Lembaga Nazhir (terdaftar di Badan Wakaf Indonesia)
- **Legal:** SK KEMENKUMHAM AHU-0010589.AH.01.07.TAHUN 2018
- **Event Utama:** Waqf Leaders Summit 2026 (22-23 Juli 2026, Holiday Inn Pasteur Bandung)

### 2.2 Stakeholders
| Role | Name | Organization |
|------|------|-------------|
| Ketua | Rayan Asa Luminaries, S.E. | FWP |
| Sekretaris | Prof. Dr. Alla Asmara, S.Pt,. M.Si. | FWP |
| Bendahara | Herri Setiawan | FWP |
| Sekretaris WLS 2026 | Ridlo Abelian | Amal Produktif |
| PIC Event | Asad Askaruddin | RWI |

---

## 3. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | React | 19 |
| Build Tool | Vite | 8 |
| Routing | React Router | v7 |
| Styling | Vanilla CSS3 | — |
| Animation | Framer Motion | latest |
| Charts | Recharts | latest |
| Icons | Lucide React | latest |
| Hosting | Cloudflare Pages | — |
| Domain | fwp.or.id | Cloudflare DNS |

---

## 4. Website Architecture

### 4.1 Pages Structure

```
/
├── /                    → Homepage (Beranda)
├── /tentang-kami        → About Page (Company Profile)
├── /program             → Programs Page
├── /pusat-nazhir        → Nazhir Center
├── /inspirasi-studi-kasus → Success Stories
├── /layanan-bisnis      → Business Matching
├── /transparansi        → Transparency Reports
├── /waqf-leaders-summit → Summit Info Page
├── /wls2026             → Event Landing Page (Registration)
└── *                    → 404 Not Found
```

### 4.2 Homepage Sections
1. **Hero** — Tagline, CTA, countdown (if event active)
2. **Stats Dashboard** — Live data wakaf nasional
3. **About** — Visi, misi, sejarah, legal
4. **Milestones** — Timeline prestasi 2016-2024
5. **Program Focus** — Edukasi, kapasitas, inovasi
6. **Leadership** — Pengurus FWP 2024-2027
7. **Nazhir Members** — 57 anggota
8. **Contact** — Telepon, email, Instagram

### 4.3 About Page Sections
1. Hero
2. Visi & Misi
3. Sejarah
4. Legal Formal
5. Pengurus (Ketua, Sekretaris, Bendahara + 4 Bidang)
6. Milestones Timeline (17 items)
7. Anggota (46 tercatat, 57 total)
8. Katalog Program Nazhir (14 program)
9. Mitra (4 kategori)
10. Kontak

### 4.4 WLS 2026 Event Landing Page (`/wls2026`)
1. **Hero** — Countdown timer, tagline "Tumbuh Bersama"
2. **Theme** — Transformasi Wakaf Nasional Menuju Indonesia Emas 2045
3. **Speakers** — 32 narasumber (6 confirmed, 26 pending)
4. **Registration** — 2 kategori + paket spesial
5. **Sponsorship** — 4 tiers (Platinum, Gold, Silver, Bronze)
6. **FAQ** — 6 pertanyaan umum
7. **Contact** — PIC info

### 4.5 WLS 2026 Info Page (`/waqf-leaders-summit`)
1. Hero with event details
2. Theme & stats
3. Speakers (confirmed, pending, not-sent, proposed)
4. Rundown Day 1 & Day 2
5. Sponsorship packages
6. Committee list
7. Registration CTA

---

## 5. Data Models

### 5.1 Summit Speakers (32 Narasumber Fix)

#### Confirmed (6)
| ID | Name | Role | Session |
|----|------|------|---------|
| 1 | Rayan Asa Luminaries | Ketua FWP | Sambutan, Closing |
| 2 | Rizky Wisnoentoro | Dosen FEB UIII | Talkshow Lingkungan |
| 3 | Ali Bastoni | Kepala UMI FWP | Unit Manajemen Investasi |
| 4 | Nila Armelia Windasari | Dosen SBM ITB | Grand Seminar |
| 5 | Prof. Alla Asmara | Akademisi | Leaders Talk 1 |
| 6 | Herri Setiawan | Praktisi | Leaders Talk 1 |

#### Pending (26)
| ID | Name | Role | Session |
|----|------|------|---------|
| 7 | Ketua BWI | BWI | Sambutan BWI |
| 8 | Gubernur Jawa Barat | Pemda | Sambutan Gubernur |
| 9 | Menteri Agama | Kemenag | Sambutan, Closing |
| 10 | Prof. Bambang Brojonegoro | Ex-Bappenas | Keynote Speech |
| 11 | Menteri BAPPENAS | PPN/Bappenas | Keynote Speech |
| 12 | Hidayat Nur Wahid | Pemerintah | Leaders Talk 1 |
| 13 | Tatang Astarudin | BWI | Leaders Talk 1 |
| 14 | Deni Lubis | Moderator | Moderator LT1 |
| 15 | Cholidin/Rahmat Hidayat | FWP | Leaders Talk 2 |
| 16 | Prof. Nurul Huda | Akademisi | Leaders Talk 2 |
| 17 | Prof. Waryono | Kemenag | Leaders Talk 2 |
| 18 | Ketua Komisi 8 DPR RI | Legislator | Leaders Talk 2 |
| 19 | Prima Hadi Putra | Moderator | Moderator LT2 |
| 20 | Pidi Baiq | Entertainer | Hiburan |
| 21 | Prof. Abu Rohmat | Kemenag | Talkshow |
| 22 | Pak Ali (BWI) | BWI | Talkshow (alt) |
| 23 | Nur Hasan Murtiaji | Republika | Talkshow |
| 24 | Farid Gaban | Ekspedisi Indonesia Baru | Talkshow (alt) |
| 25 | Dr. Daniar | Trubus Iman | Talkshow |
| 26 | Yesi Mariska Indira | Moderator | Moderator Talkshow |
| 27 | Paragon | Entertainer | Gala Dinner |
| 28 | Pak Hendra (Al-Hilal) | Entertainer | Gala Dinner |
| 29 | Ust. Abu Syauqi | Rumah Zakat | Gala Dinner |
| 30 | Meyda Sefira | Moderator | Moderator Gala Dinner |
| 31 | Aa' Gym | Daarut Tauhid | Closing Inspiration |
| 32 | Ust. Budi Ashari | Ulama | Closing Inspiration |

### 5.2 Registration Packages

| Package | Price | Discount | Notes |
|---------|-------|----------|-------|
| Anggota FWP | Rp 2.500.000 | From Rp 3.000.000 | Khusus anggota |
| Umum | Rp 3.500.000 | From Rp 4.000.000 | Non-anggota |
| Single | Rp 2.500.000 | 0% | Standar |
| Paket 3 Orang | Rp 6.000.000 | 20% | Ketua + Sekretaris + Bendahara |

### 5.3 Sponsorship Tiers

| Tier | Price | Benefits |
|------|-------|----------|
| Platinum | Rp 45.000.000 | 8 benefits (Most Popular) |
| Gold | Rp 30.000.000 | 6 benefits |
| Silver | Rp 15.000.000 | 4 benefits |
| Bronze | Rp 7.500.000 | 3 benefits |

---

## 6. Design System

### 6.1 Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#132c3f` | Headers, primary buttons |
| Secondary | `#8bc53f` | Accents, success states |
| Tertiary | `#16aeca` | Links, highlights |
| Background | `#f8fafc` | Page background |
| Text Main | `#1e293b` | Body text |
| Text Muted | `#64748b` | Secondary text |
| Border | `#e2e8f0` | Borders, dividers |

### 6.2 Typography
- **Headings:** Serif (Playfair Display or similar)
- **Body:** Sans-serif (Inter, Roboto, or system)
- **Hero Title:** 3.5-4rem, bold
- **Section Title:** 2-2.5rem
- **Body:** 1rem, line-height 1.6

### 6.3 Animation Patterns
- **Fade In Up:** `opacity: 0→1, y: 30→0, duration: 0.6s`
- **Stagger Children:** `stagger: 0.1s`
- **Scale:** `scale: 0.9→1, duration: 0.4s`
- **Hover:** `y: -8px, scale: 1.02, shadow increase`

---

## 7. Features & Functionality

### 7.1 Implemented
- [x] Multi-page routing (React Router v7)
- [x] Responsive design (mobile-first)
- [x] Framer Motion animations
- [x] Glassmorphism cards
- [x] Live data dashboard (Recharts)
- [x] Open Graph meta tags
- [x] Custom domain (fwp.or.id)
- [x] Cloudflare Pages deployment
- [x] Auto-commit & push to GitHub
- [x] About page with company profile
- [x] WLS 2026 event page
- [x] Event landing page with registration
- [x] Sponsorship packages display
- [x] FAQ accordion
- [x] Countdown timer

### 7.2 Planned / Backlog
- [ ] Payment gateway integration (registration)
- [ ] Admin dashboard for registration management
- [ ] Email notification system
- [ ] QR code check-in system
- [ ] Live streaming integration
- [ ] Multi-language support (EN/ID)
- [ ] CMS for content management
- [ ] SEO optimization (sitemap, structured data)
- [ ] Analytics integration (Google Analytics)
- [ ] Social media feed integration

---

## 8. API & Integration

### 8.1 External Services
| Service | Purpose | Status |
|---------|---------|--------|
| Cloudflare Pages | Hosting | Active |
| Cloudflare DNS | Domain management | Active |
| GitHub | Source control | Active |
| Wrangler CLI | Deployment | Active |

### 8.2 Future Integrations
| Service | Purpose | Priority |
|---------|---------|----------|
| Xendit/Midtrans | Payment | High |
| SendGrid | Email | Medium |
| Google Analytics | Analytics | Medium |
| Cloudflare Turnstile | Bot protection | Low |

---

## 9. Deployment & DevOps

### 9.1 Build Process
```bash
npm install       # Install dependencies
npm run dev       # Start dev server (port 5174)
npm run build     # Build for production (dist/)
```

### 9.2 Deployment
```bash
npx wrangler pages deploy dist --project-name=fwp-or-id --branch=main
```

### 9.3 Git Workflow
- Auto-commit after every logical change
- Commit message format: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Push to `master` branch (production)

---

## 10. Known Issues & Limitations

### 10.1 Current Issues
| Issue | Severity | Workaround |
|-------|----------|------------|
| Cloudflare cache lag | Medium | Use *.pages.dev for testing |
| OG image cache | Low | Use cache-busting query params |
| Custom domain propagation | Low | Wait 30-60 minutes |
| API token permissions | Low | Manual dashboard for DNS |

### 10.2 Technical Debt
- Chunk size > 500KB (needs code splitting)
- No error tracking (Sentry)
- No automated testing
- No CI/CD pipeline

---

## 11. Security & Compliance

### 11.1 Security Measures
- Cloudflare proxy (orange cloud) enabled
- HTTPS enforced
- No sensitive data in frontend

### 11.2 Compliance
- Indonesian data privacy laws (UU PDP)
- Islamic finance regulations (OJK, BI)
- Wakaf regulations (BWI, Kemenag)

---

## 12. Appendix

### 12.1 File Structure
```
src/
├── data/
│   ├── about.js          # Company profile data
│   ├── event.js          # Event landing page data
│   ├── navigation.js     # Nav links
│   └── summit.js         # WLS 2026 data
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── EventLandingPage.jsx
│   ├── SummitPage.jsx
│   └── ...
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ErrorBoundary.jsx
├── App.jsx
├── index.css
└── main.jsx
```

### 12.2 Environment Variables
```
CLOUDFLARE_API_TOKEN=cfut_... (for wrangler)
```

### 12.3 Contact Information
- **Website:** https://fwp.or.id
- **Email:** fwpsekretariat@gmail.com
- **Phone:** 0813 8966 7055
- **Instagram:** @forumwakafproduktif
- **GitHub:** https://github.com/ridloabelian/fwp.or.id

---

## 13. Changelog

### v2.0 (17 Juni 2026)
- Added: Event landing page (`/wls2026`)
- Added: Registration packages (Anggota, Umum, Paket 3)
- Added: Sponsorship tiers (Platinum, Gold, Silver, Bronze)
- Added: FAQ section
- Added: Countdown timer
- Updated: Speakers list (32 narasumber fix)
- Updated: Homepage with company profile data

### v1.5 (16 Juni 2026)
- Added: About page with full company profile
- Added: Milestones timeline
- Added: Leadership section
- Fixed: Animation bugs (whileInView → animate)

### v1.0 (15 Juni 2026)
- Initial release
- Homepage with hero, stats, about, programs
- WLS 2026 page with speakers, rundown, committee
- Cloudflare Pages deployment
- Custom domain fwp.or.id

---

**End of Document**

*Generated by FWP Bot — Forum Wakaf Produktif AI Agent*
*Bismillah, menuju Indonesia Emas 2045* 🇮🇩
