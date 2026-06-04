import React from 'react';
import { motion } from 'framer-motion';
import { FileX, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="404 Halaman Tidak Ditemukan" 
        description="Maaf, halaman yang Anda cari di portal Forum Wakaf Produktif tidak dapat ditemukan." 
      />
      <section className="section" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div 
            className="glass-card" 
            style={{ 
              background: 'white', 
              maxWidth: '550px', 
              width: '100%', 
              textAlign: 'center', 
              padding: '48px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'var(--shadow-xl)'
            }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Gradient Icon Container */}
            <div style={{ 
              position: 'relative', 
              marginBottom: '32px',
              width: '180px',
              height: '180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Outer Glow */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ 
                  position: 'absolute', 
                  width: '100%', 
                  height: '100%', 
                  background: 'radial-gradient(circle, var(--tertiary-color) 0%, transparent 70%)', 
                  zIndex: 0 
                }}
              />
              <div 
                style={{ 
                  position: 'relative',
                  zIndex: 1,
                  padding: '24px', 
                  background: 'rgba(22, 174, 202, 0.1)', 
                  color: 'var(--primary-color)', 
                  borderRadius: '50%' 
                }}
              >
                <FileX size={120} style={{ display: 'block', color: 'var(--primary-color)' }} />
              </div>
            </div>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--primary-color)' }}>
              Halaman Tidak Ditemukan
            </h1>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '400px' }}>
              Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <ArrowLeft size={20} /> Kembali ke Beranda
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
