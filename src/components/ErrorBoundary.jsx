/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { AlertTriangle, RotateCw } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          background: '#f8fafc',
          padding: '24px',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>
          <div className="glass-card" style={{ 
            background: 'white', 
            maxWidth: '500px', 
            width: '100%', 
            textAlign: 'center', 
            padding: '40px 24px',
            boxShadow: 'var(--shadow-xl)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ 
              padding: '16px', 
              background: 'rgba(239, 68, 68, 0.1)', 
              color: '#ef4444', 
              borderRadius: '50%',
              marginBottom: '24px',
              display: 'inline-flex'
            }}>
              <AlertTriangle size={48} />
            </div>
            
            <h1 style={{ fontSize: '2rem', color: '#132c3f', marginBottom: '12px' }}>
              Terjadi Kesalahan
            </h1>
            
            <p style={{ color: '#475d70', marginBottom: '32px', fontSize: '1rem', lineHeight: '1.6' }}>
              Halaman tidak dapat dimuat karena terjadi kesalahan teknis. Silakan muat ulang halaman.
            </p>
            
            <button 
              onClick={() => window.location.reload()} 
              className="btn btn-primary" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <RotateCw size={18} /> Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
