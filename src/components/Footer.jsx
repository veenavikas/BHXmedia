import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';

export default function Footer({ setActiveView, onOpenBooking }) {
  const handleNavClick = (viewId) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--paper)', paddingTop: '64px', paddingBottom: '48px', borderTop: '1px solid var(--hairline)' }}>
      <div className="wrap" style={{ padding: '0 24px' }}>
        
        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '36px', color: 'var(--paper)', marginBottom: '8px' }}>
              BHX<span className="stop">.</span>
            </div>
            <p className="mono" style={{ color: 'rgba(246, 244, 239, 0.6)', marginBottom: '16px' }}>
              {SITE_CONTENT.brand.tagline}
            </p>
            <p className="body-text" style={{ fontSize: '14px', color: 'rgba(246, 244, 239, 0.75)', maxWidth: '320px' }}>
              The content brain for the AI era. Senior content strategy, concept development, and execution.
            </p>
          </div>

          <div>
            <span className="mono" style={{ color: 'rgba(246, 244, 239, 0.5)', display: 'block', marginBottom: '16px' }}>NAVIGATION</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button onClick={() => handleNavClick('home')} style={{ background: 'none', border: 'none', color: 'var(--paper)', textAlignment: 'left', textAlign: 'left', cursor: 'pointer', fontSize: '14px' }}>Home</button>
              <button onClick={() => handleNavClick('work')} style={{ background: 'none', border: 'none', color: 'var(--paper)', textAlignment: 'left', textAlign: 'left', cursor: 'pointer', fontSize: '14px' }}>Portfolio</button>
              <button onClick={() => handleNavClick('blog')} style={{ background: 'none', border: 'none', color: 'var(--paper)', textAlignment: 'left', textAlign: 'left', cursor: 'pointer', fontSize: '14px' }}>Journal</button>
              <button onClick={() => handleNavClick('about')} style={{ background: 'none', border: 'none', color: 'var(--paper)', textAlignment: 'left', textAlign: 'left', cursor: 'pointer', fontSize: '14px' }}>Proof</button>
              <button onClick={() => handleNavClick('contact')} style={{ background: 'none', border: 'none', color: 'var(--paper)', textAlignment: 'left', textAlign: 'left', cursor: 'pointer', fontSize: '14px' }}>Contact & Booking</button>
            </div>
          </div>

          <div>
            <span className="mono" style={{ color: 'rgba(246, 244, 239, 0.5)', display: 'block', marginBottom: '16px' }}>PRIMARY ACTION</span>
            <p className="body-text" style={{ fontSize: '14px', color: 'rgba(246, 244, 239, 0.8)', marginBottom: '16px' }}>
              Schedule a 30-minute content audit to diagnose your content ROI and quality.
            </p>
            <button onClick={onOpenBooking} className="btn btn-accent" style={{ fontSize: '13px' }}>
              Book a 30-minute content audit
            </button>
          </div>

        </div>

        {/* Hairline Divider */}
        <div style={{ height: '1px', background: 'rgba(228, 225, 218, 0.15)', margin: '32px 0' }} />

        {/* Bottom Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '12px', color: 'rgba(246, 244, 239, 0.5)' }}>
          <div className="mono">
            © {new Date().getFullYear()} BHX MEDIA. SOLE PROPRIETOR BHARATH C.S. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '20px' }} className="mono">
            <a href="mailto:bharath@bhxmedia.com" style={{ color: 'var(--paper)', textDecoration: 'none' }}>bharath@bhxmedia.com</a>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--paper)', textDecoration: 'none' }}>RSS FEED</a>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--paper)', textDecoration: 'none' }}>SITEMAP</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
