import React from 'react';

export default function ThankYouView({ onNavigate, onOpenBooking }) {
  const handleNav = (path) => {
    if (onNavigate) onNavigate(path);
    else window.location.href = path;
  };

  return (
    <div style={{ backgroundColor: 'var(--bhx-bg-reading)', minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '64px 0', color: 'var(--bhx-text)' }}>
      <div className="wrap" style={{ maxWidth: '600px', textAlign: 'center' }}>
        
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'var(--bhx-surface)',
          border: '1.5px solid var(--bhx-laterite)',
          color: 'var(--bhx-laterite)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          margin: '0 auto 24px'
        }}>
          ✓
        </div>

        <div className="laterite-tag" style={{ marginBottom: '12px' }}>Brief Submitted</div>
        <h1 style={{ fontSize: '36px', color: 'var(--bhx-text)', marginBottom: '16px' }}>
          Thank You for Reaching Out
        </h1>
        
        <p style={{ fontSize: '16.5px', color: 'var(--bhx-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
          Your brief has been received. Bharath C.S. personally reviews every submission and will get back to you within 24 hours with initial thoughts and strategic alignment.
        </p>

        <div style={{
          padding: '24px',
          backgroundColor: 'var(--bhx-surface)',
          borderRadius: '8px',
          border: '1px solid var(--bhx-border)',
          marginBottom: '32px',
          textAlign: 'left'
        }}>
          <h4 style={{ fontSize: '16px', color: 'var(--bhx-text)', marginBottom: '8px' }}>What Happens Next?</h4>
          <ol style={{ paddingLeft: '20px', color: 'var(--bhx-muted)', fontSize: '14.5px', lineHeight: 1.6 }}>
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
