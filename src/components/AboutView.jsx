import React from 'react';

export default function AboutView({ onOpenBooking, onNavigate }) {
  const handleNav = (path) => {
    if (onNavigate) onNavigate(path);
    else window.location.href = path;
  };

  return (
    <div style={{ backgroundColor: 'var(--bhx-bg-reading)', minHeight: '100vh', padding: '64px 0 96px', color: 'var(--bhx-text)' }}>
      <div className="wrap">
        
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '56px' }}>
          <div className="laterite-tag" style={{ marginBottom: '12px' }}>About Bharath C.S.</div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', color: 'var(--bhx-text)', lineHeight: 1.1, marginBottom: '24px' }}>
            20+ years running content engines at scale.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
            BHX Media is led by Bharath C.S., a content strategy consultant and operator who has built internal production studios, managed multi-language television &amp; micro-drama slates, and delivered over 50,000 marketing assets.
          </p>
        </div>

        {/* Quote Block */}
        <div style={{
          backgroundColor: 'var(--bhx-surface)',
          border: '1px solid var(--bhx-border)',
          borderRadius: '12px',
          padding: '36px',
          marginBottom: '56px'
        }}>
          <p style={{ fontSize: '20px', color: 'var(--bhx-text)', fontWeight: 500, lineHeight: 1.5, marginBottom: '16px' }}>
            "Anyone can generate volume now. The rare skill is knowing what is worth making, filtering out non-essential noise, and ensuring content delivers a commercial return."
          </p>
          <div style={{ fontSize: '14.5px', color: 'var(--bhx-laterite)', fontWeight: 700 }}>
            Bharath C.S. · Founder &amp; Content Strategy Lead, BHX Media
          </div>
        </div>

        {/* Past Roles & Leadership */}
        <div style={{ marginBottom: '64px' }}>
          <div className="laterite-tag" style={{ marginBottom: '16px' }}>Track Record &amp; Past Roles</div>
          <h2 style={{ fontSize: '30px', color: 'var(--bhx-text)', marginBottom: '32px' }}>
            Operator Experience (Past Leadership Roles)
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '28px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>AMAZON INDIA (PAST ROLE)</div>
              <h3 style={{ fontSize: '19px', color: 'var(--bhx-text)', marginBottom: '10px' }}>Head of Creative Production</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
                6.5 years in Amazon marketing. Built the in-house production studio, delivered 500+ TVCs and brand films, and scaled asset pipelines to 50,000+ assets. Led employer brand content across Asia Pacific.
              </p>
            </div>

            <div style={{ padding: '28px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>KUKU TV (PAST ROLE)</div>
              <h3 style={{ fontSize: '19px', color: 'var(--bhx-text)', marginBottom: '10px' }}>Content Director</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
                Scaled the vertical micro-drama slate from 15 to 58+ shows across four South Indian languages, developing algorithmic script retention techniques.
              </p>
            </div>

            <div style={{ padding: '28px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>CULTURE MACHINE &amp; SUN TV (PAST ROLE)</div>
              <h3 style={{ fontSize: '19px', color: 'var(--bhx-text)', marginBottom: '10px' }}>Head of Content, South India</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
                Managed concept, production, and channel slates across Sun TV Network broadcast television, radio, and digital streaming networks.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div style={{
          padding: '48px 36px',
          backgroundColor: 'var(--bhx-surface)',
          border: '1px solid var(--bhx-border)',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '32px', color: 'var(--bhx-text)', marginBottom: '16px' }}>
            Work directly with Bharath C.S.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--bhx-muted)', marginBottom: '28px', maxWidth: '52ch', margin: '0 auto 28px' }}>
            Book a free 30-minute scoping call to review your content strategy, micro-drama slate, or brand film needs.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn-copper">
              Book a 30-min call &rarr;
            </button>
            <button onClick={() => handleNav('/brief')} className="btn-outline">
              Start a Brief
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
