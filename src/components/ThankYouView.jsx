import React from 'react';

export default function ThankYouView({ onNavigate, onOpenBooking }) {
  const handleNav = (path) => {
    if (onNavigate) onNavigate(path);
    else window.location.href = path;
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '64px 0' }}>
      <div className="wrap" style={{ maxWidth: '600px', textAlign: 'center' }}>
        
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'rgba(198, 136, 79, 0.15)',
          border: '1px solid #C6884F',
          color: '#C6884F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          margin: '0 auto 24px'
        }}>
          ✓
        </div>

        <div className="copper-tag" style={{ marginBottom: '12px' }}>Brief Submitted</div>
        <h1 style={{ fontSize: '36px', color: '#F4EFE5', marginBottom: '16px' }}>
          Thank You for Reaching Out
        </h1>
        
        <p style={{ fontSize: '16px', color: '#B8AE9C', lineHeight: 1.6, marginBottom: '28px' }}>
          Your brief has been received. Bharath C.S. personally reviews every submission and will get back to you within 24 hours with initial thoughts and strategic alignment.
        </p>

        <div style={{
          padding: '24px',
          backgroundColor: '#242220',
          borderRadius: '8px',
          border: '1px solid #33302B',
          marginBottom: '32px',
          textAlign: 'left'
        }}>
          <h4 style={{ fontSize: '15px', color: '#F4EFE5', marginBottom: '8px' }}>What Happens Next?</h4>
          <ol style={{ paddingLeft: '20px', color: '#B8AE9C', fontSize: '14px', lineHeight: 1.6 }}>
            <li>We review your objective and determine studio fit.</li>
            <li>We prepare strategic scoping notes before our conversation.</li>
            <li>We reach out via email or schedule a 30-minute scoping call.</li>
          </ol>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={onOpenBooking} className="btn-copper">
            Book a 30-min call now &rarr;
          </button>
          <button onClick={() => handleNav('/')} className="btn-outline">
            Return to Home
          </button>
        </div>

      </div>
    </div>
  );
}
