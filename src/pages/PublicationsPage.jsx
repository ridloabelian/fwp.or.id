import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, User, ArrowRight, Globe, ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { newsList } from '../data/news';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const PublicationsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedNews = id ? newsList.find((item) => item.id === id) : null;

  return (
    <>
      <SEO 
        title={selectedNews ? selectedNews.title : "Berita & Kabar FWP"} 
        description={selectedNews ? selectedNews.excerpt : "Portal berita resmi dan publikasi media tentang kiprah Forum Wakaf Produktif di Indonesia."} 
      />
      
      <section className="section section-bg" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>
            {selectedNews ? "Detail Berita" : "Berita & Kabar FWP"}
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} style={{ margin: '20px auto', maxWidth: '700px', fontSize: '1.2rem' }}>
            {selectedNews ? "Informasi lengkap rilis resmi Forum Wakaf Produktif." : "Informasi terkini, pers rilis resmi, dan ulasan lengkap kegiatan Forum Wakaf Produktif nasional."}
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {!selectedNews ? (
            // List View
            <motion.div 
              className="grid-3" 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
            >
              {newsList.map((news) => (
                <motion.div 
                  key={news.id} 
                  variants={fadeInUp} 
                  className="glass-card" 
                  style={{ background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', cursor: 'pointer', overflow: 'hidden', padding: 0 }}
                  onClick={() => navigate(`/berita/${news.id}`)}
                >
                  {news.imageUrl && (
                    <div style={{ width: '100%', height: '200px', overflow: 'hidden', background: 'var(--bg-offset)' }}>
                      <img src={news.imageUrl} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                  <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary-color)', background: 'var(--bg-offset)', padding: '4px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '12px' }}>
                        {news.category}
                      </span>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', lineHeight: '1.4' }}>{news.title}</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '20px' }}>{news.excerpt}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--bg-offset)', paddingTop: '12px', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={14} /> {news.date}
                      </span>
                      <span style={{ fontWeight: 'bold', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Baca <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Detail View
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card"
              style={{ background: 'white', padding: '40px', maxWidth: '800px', margin: '0 auto', overflow: 'hidden' }}
            >
              <button 
                className="btn btn-outline" 
                style={{ marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                onClick={() => navigate('/berita')}
              >
                <ArrowLeft size={16} /> Kembali ke Berita
              </button>

              {selectedNews.imageUrl && (
                <div style={{ width: '100%', maxHeight: '450px', borderRadius: '12px', overflow: 'hidden', marginBottom: '32px', background: 'var(--bg-offset)' }}>
                  <img src={selectedNews.imageUrl} alt={selectedNews.title} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </div>
              )}

              <div style={{ marginBottom: '16px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--secondary-color)', background: 'var(--bg-offset)', padding: '4px 8px', borderRadius: '4px', display: 'inline-block' }}>
                  {selectedNews.category}
                </span>
              </div>

              <h1 style={{ fontSize: '2.2rem', lineHeight: '1.3', marginBottom: '20px', color: 'var(--text-main)' }}>
                {selectedNews.title}
              </h1>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '32px', color: 'var(--text-muted)', fontSize: '0.9rem', borderBottom: '1px solid var(--bg-offset)', paddingBottom: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} /> {selectedNews.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <User size={16} /> {selectedNews.author}
                </span>
              </div>

              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '40px' }}>
                {selectedNews.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} style={{ marginBottom: '20px' }}>{paragraph.trim()}</p>
                ))}
              </div>

              {/* Media Coverage / Clippings */}
              <div style={{ borderTop: '1px solid var(--bg-offset)', paddingTop: '32px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Newspaper size={20} color="var(--primary-color)" /> Liputan Media Terkait
                </h3>
                <div className="grid-3" style={{ gap: '12px' }}>
                  {selectedNews.mediaCoverage.map((media, idx) => (
                    <a 
                      key={idx}
                      href={media.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="glass-card" 
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--bg-offset)', borderRadius: '8px', fontSize: '0.85rem', textDecoration: 'none', color: 'var(--text-main)', border: '1px solid transparent' }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary-color)'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                    >
                      <span style={{ fontWeight: '600' }}>{media.media}</span>
                      <Globe size={14} color="var(--text-muted)" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default PublicationsPage;
