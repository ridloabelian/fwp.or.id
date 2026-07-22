import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SejarahPage from './pages/SejarahPage';
import LegalitasPage from './pages/LegalitasPage';
import StrukturPage from './pages/StrukturPage';
import MembershipPage from './pages/MembershipPage';
import RegisterMemberPage from './pages/RegisterMemberPage';
import ProgramsPage from './pages/ProgramsPage';
import NazhirCenterPage from './pages/NazhirCenterPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import BusinessMatchingPage from './pages/BusinessMatchingPage';
import TransparencyPage from './pages/TransparencyPage';
import PublicationsPage from './pages/PublicationsPage';
import EventLandingPage from './pages/EventLandingPage';
import SummitPage from './pages/SummitPage';
import ProposalPage from './pages/ProposalPage';
import NotFoundPage from './pages/NotFoundPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Legacy /publikasi/:id → /berita/:id (keep article slug)
const RedirectToBerita = () => {
  const { pathname } = useLocation();
  return <Navigate to={pathname.replace('/publikasi/', '/berita/')} replace />;
}

function App() {
  const { pathname } = useLocation();
  const isStandalonePage = pathname === '/wls2026';


  return (
    <>
      <ScrollToTop />
      {!isStandalonePage && <Navbar />}
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/tentang-kami/sejarah" element={<SejarahPage />} />
          <Route path="/tentang-kami/legalitas" element={<LegalitasPage />} />
          <Route path="/tentang-kami/struktur" element={<StrukturPage />} />
          <Route path="/keanggotaan" element={<MembershipPage />} />
          <Route path="/daftar-anggota" element={<RegisterMemberPage />} />
          <Route path="/berita" element={<PublicationsPage />} />
          <Route path="/berita/:id" element={<PublicationsPage />} />
          <Route path="/program" element={<ProgramsPage />} />
          <Route path="/pusat-nazhir" element={<NazhirCenterPage />} />
          <Route path="/inspirasi-studi-kasus" element={<SuccessStoriesPage />} />
          <Route path="/layanan-bisnis" element={<BusinessMatchingPage />} />
          <Route path="/transparansi" element={<TransparencyPage />} />
          <Route path="/publikasi" element={<Navigate to="/berita" replace />} />
          <Route path="/publikasi/:id" element={<RedirectToBerita />} />
          <Route path="/waqf-leaders-summit" element={<SummitPage />} />
          <Route path="/wls2026" element={<EventLandingPage />} />
          <Route path="/proposal-wls2026" element={<ProposalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isStandalonePage && <Footer />}
    </>
  );
}

export default App;
