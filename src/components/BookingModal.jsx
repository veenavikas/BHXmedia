import React, { useEffect } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const rawUrl = 'https://calendly.com/bharath-bhxmedia/30min';
  const calendlyEmbedUrl = `${rawUrl}?hide_gdpr_banner=1&primary_color=c6884f`;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(4px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }} 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        maxWidth: '820px',
        width: '100%',
        backgroundColor: '#1E1C1A',
        borderRadius: '12px',
        padding: '32px',
        color: '#F4EFE5',
        border: '1px solid #33302B',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #33302B', paddingBottom: '16px' }}>
          <div>
            <div className="copper-tag" style={{ fontSize: '11px' }}>Direct Booking</div>
            <h2 style={{ fontSize: '24px', marginTop: '4px', fontWeight: 700, color: '#F4EFE5' }}>
              Book a free 30-minute scoping call
            </h2>
          </div>

          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', fontSize: '28px', color: '#B8AE9C', cursor: 'pointer', lineHeight: 1 }}
            aria-label="Close booking modal"
          >
            &times;
          </button>
        </div>

        <p style={{ fontSize: '14.5px', color: '#B8AE9C', marginBottom: '20px' }}>
          Talk through your commercial goals and content needs with Bharath C.S. No sales pitch, just a straight conversation about what is worth making.
        </p>

        {/* Embedded Scheduler / Calendly Container */}
        <div style={{ border: '1px solid #33302B', borderRadius: '8px', overflow: 'hidden', height: '480px', backgroundColor: '#FFFFFF' }}>
          <iframe 
            src={calendlyEmbedUrl} 
            title="Book a call with Bharath C.S."
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>

        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <a 
            href="mailto:bharath@bhxmedia.com?subject=Booking%20a%20call"
            className="btn-copper" 
            style={{ padding: '8px 18px', fontSize: '13px' }}
          >
            Or Email bharath@bhxmedia.com &rarr;
          </a>
          <a 
            href={calendlyEmbedUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#C6884F', fontSize: '13px', textDecoration: 'underline' }}
          >
            Open in new tab ↗
          </a>
        </div>

      </div>
    </div>
  );
}
