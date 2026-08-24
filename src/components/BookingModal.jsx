import React, { useEffect } from 'react';
import { SITE_DATA } from '../data/siteData';

export default function BookingModal({ isOpen, onClose }) {
  const { brand } = SITE_DATA;

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

  const rawUrl = brand.calendlyUrl || 'https://calendly.com';
  const calendlyEmbedUrl = rawUrl.includes('?') 
    ? `${rawUrl}&hide_gdpr_banner=1&primary_color=c9a24e` 
    : `${rawUrl}?hide_gdpr_banner=1&primary_color=c9a24e`;

  return (
    <div className="modal open" style={{ zIndex: 110 }} onClick={(e) => { if (e.target.classList.contains('modal')) onClose(); }}>
      <div className="modal-box" style={{ maxWidth: '800px', background: 'var(--paper)', borderRadius: '16px', padding: '32px', color: 'var(--ink)', border: '1px solid var(--hair)' }}>
        
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid var(--hair)', paddingBottom: '16px' }}>
          <div>
            <span className="lab gold">Direct Booking</span>
            <h2 className="serif" style={{ fontSize: '26px', marginTop: '6px', fontWeight: 600 }}>
              Book a free 30-minute call
            </h2>
          </div>

          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', fontSize: '28px', color: 'var(--ink)', cursor: 'pointer', lineHeight: 1 }}
            aria-label="Close booking modal"
          >
            &times;
          </button>
        </div>

        <p style={{ fontSize: '15.5px', color: 'var(--grey)', marginBottom: '24px' }}>
          Talk through your goals and whether Bharath C.S. is the right person to help. No pitch, just a straight conversation about your business.
        </p>

        {/* Embedded Calendly / Contact Container */}
        <div style={{ border: '1px solid var(--hair)', borderRadius: '12px', overflow: 'hidden', height: '480px', background: '#FFFFFF', position: 'relative' }}>
          <iframe 
            src={calendlyEmbedUrl} 
            title="Book a call with Bharath C.S."
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>

        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <a 
            href={`mailto:${brand.email}?subject=Booking%20a%20call`}
            className="btn btn-gold" 
            style={{ padding: '10px 20px', fontSize: '14px' }}
          >
            Or Email {brand.email} &rarr;
          </a>
          <a 
            href={calendlyEmbedUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="lab" 
            style={{ color: 'var(--grey)', textDecoration: 'underline' }}
          >
            Open in new tab ↗
          </a>
        </div>

      </div>
    </div>
  );
}
