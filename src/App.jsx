import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import NazhirCenterPage from './pages/NazhirCenterPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import BusinessMatchingPage from './pages/BusinessMatchingPage';
import TransparencyPage from './pages/TransparencyPage';
import EventLandingPage from './pages/EventLandingPage';
import SummitPage from './pages/SummitPage';
import NotFoundPage from './pages/NotFoundPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/program" element={<ProgramsPage />} />
          <Route path="/pusat-nazhir" element={<NazhirCenterPage />} />
          <Route path="/inspirasi-studi-kasus" element={<SuccessStoriesPage />} />
          <Route path="/layanan-bisnis" element={<BusinessMatchingPage />} />
          <Route path="/transparansi" element={<TransparencyPage />} />
          <Route path="/waqf-leaders-summit" element={<SummitPage />} />
          <Route path="/wls2026" element={<EventLandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
