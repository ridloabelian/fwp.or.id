# 🌐 Forum Wakaf Produktif (FWP) Portal

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-000000?style=for-the-badge&logo=cloudflare-pages&logoColor=F38020)](https://pages.cloudflare.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-F107A3?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

The official Multi-Page Application (MPA) portal for the **Forum Wakaf Produktif (FWP)**. Professionally designed, highly performant, and fully responsive to lead the national transformation of cash waqf (endowment) and productive assets development towards the **Golden Indonesia 2045** vision.

🔗 **Live Website:** [https://fwp.or.id](https://fwp.or.id) (or backup: [fwp-or-id.pages.dev](https://fwp-or-id.pages.dev))

---

## ✨ Key Features

*   **⚡ Modern Multi-Page Architecture:** Instant page transitions with zero layout shifts, powered by `react-router-dom` v7.
*   **📊 Live Data Dashboard:** Interactive data visualizations of national cash waqf accumulation trends, nationwide waqf land coverage, and certified Nazhir statistics using `recharts`.
*   **📱 Ultra-Responsive Design:** Fully optimized for mobile viewports with a dynamic grid-collapsing system, smooth *hamburger menu* navigation, and adaptive typography.
*   **🎨 Premium Aesthetics & Glassmorphism:** Features clean CSS styling, interactive floating HTML5 canvas shapes, and premium micro-interactions utilizing `framer-motion`.
*   **📂 Dedicated Hubs & Transparency:** Dedicated modules for the Nazhir Center, Strategic Partnerships (Business Matching), Waqf Project Prospectus, and financial Transparency Reports.

---

## 🛠️ Technology Stack

*   **Core:** [React 19](https://react.dev) & [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
*   **Build Tool:** [Vite 8](https://vite.dev) (blazing fast development & production bundling)
*   **Styling:** Vanilla CSS3 leveraging design system tokens and a mobile-first approach.
*   **Animation:** [Framer Motion](https://framer.com/motion) for smooth page transitions and scroll-reveal effects.
*   **Charts:** [Recharts](https://recharts.org) for responsive data visualization.
*   **Icons:** [Lucide React](https://lucide.dev)
*   **Hosting CDN:** [Cloudflare Pages](https://pages.cloudflare.com) featuring robust edge caching and strict security headers.

---

## 📂 Directory Structure

```bash
fwp.or.id/
├── public/                # Static public assets
│   ├── _redirects         # Cloudflare Pages SPA fallback routing rules
│   └── _headers           # Cloudflare Pages security & asset caching headers
├── src/
│   ├── components/        # Shared global UI components (Navbar, Footer, etc.)
│   ├── pages/             # Main portal pages
│   │   ├── HomePage.jsx             # Home / Landing Page
│   │   ├── AboutPage.jsx            # About Us
│   │   ├── ProgramsPage.jsx         # Programs & Focus Areas
│   │   ├── NazhirCenterPage.jsx     # Nazhir Information Center
│   │   ├── SuccessStoriesPage.jsx   # Inspirations & Case Studies
│   │   ├── BusinessMatchingPage.jsx # Strategic Partnerships
│   │   └── TransparencyPage.jsx     # Financial & Data Transparency
│   ├── index.css          # Global design system tokens and styling
│   ├── main.jsx           # React application entrypoint
│   └── routes.jsx         # Multi-page routing configuration
├── wrangler.toml          # Cloudflare Pages build and environment config
├── package.json           # Dependencies and npm scripts
└── vite.config.js         # Vite compilation configuration
```

---

## 💻 Local Development

Follow these steps to run the project locally on your machine:

1. **Clone this repository:**
   ```bash
   git clone https://github.com/ridloabelian/fwp.or.id.git
   cd fwp.or.id
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application will be running at `http://localhost:5173`.

4. **Compile the production build:**
   ```bash
   npm run build
   ```
   Static compiled files will be generated under `/dist` and are ready for deployment.

---

## ☁️ Cloudflare Pages Integration

This project is natively configured to deploy directly to **Cloudflare Pages**, featuring:

*   **SPA Redirects:** The `public/_redirects` file ensures that direct navigation to subpages (e.g. `/program`) doesn't trigger a `404 Not Found` error on static CDN edges.
*   **Security & Cache Control:** The `public/_headers` configuration instructs the browser to cache compiled assets inside `/assets` for 1 full year, and embeds robust security headers (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`).

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to leverage this source code to advance the productive waqf ecosystem.

---
*Crafted with dedication by [Ridlo Abelian](https://github.com/ridloabelian).*
