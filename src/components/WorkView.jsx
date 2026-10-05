import React, { useState } from 'react';

export default function WorkView({ onNavigate, onOpenBooking, onOpenReelRequest }) {
  const [reelModalOpen, setReelModalOpen] = useState(false);
  const [reelEmail, setReelEmail] = useState('');
  const [reelSubmitted, setReelSubmitted] = useState(false);

  const handleNav = (path) => {
    if (onNavigate) onNavigate(path);
    else window.location.href = path;
  };

  const handleReelSubmit = (e) => {
    e.preventDefault();
    setReelSubmitted(true);
  };

  const cases = [
    {
      studio: 'Longform',
      title: 'Regional TV Broadcast Series Slate',
      tagline: 'Multi-season script bibles and episode production management.',
      summary: 'Delivered serialized television and OTT streaming series slates for South Indian regional networks.',
      proof: 'Past role at Sun TV Network & Culture Machine'
    },
    {
      studio: 'Cliffhanger',
      title: '58+ Micro-Drama Shows Scaled',
      tagline: 'Algorithmic script intelligence & vertical short-form production.',
      summary: 'Grew micro-drama slate from 15 to 58+ shows across 4 South Indian languages with data-backed hook density.',
      proof: 'Past role at Kuku TV; DAIVA'
    },
    {
      studio: 'Frame',
      title: '500+ Commercial TVCs & Brand Films',
      tagline: 'High-concept brand narrative films and product launch commercials.',
      summary: 'Built in-house production studio and delivered 50,000+ brand marketing assets.',
      proof: 'Past role at Amazon India'
    },
    {
      studio: 'Creator Circle',
      title: 'Multi-Creator Influencer Campaign (Anonymised)',
      tagline: 'Performance-led creator strategy and execution across 25+ influencers.',
      summary: 'Structured creator briefs and attribution tracking yielding 3.2x ROAS lift for consumer brand rollout.',
      proof: 'Live multi-creator campaign (anonymised)'
    },
    {
      studio: 'Frame',
      title: 'APAC Employer Brand Recruitment Series',
      tagline: 'Culture films and day-in-the-life employee storytelling.',
      summary: 'Produced recruitment campaign assets for tech engineering hubs across Asia Pacific.',
      proof: 'Past role at Amazon APAC Employer Brand'
    },
    {
      studio: 'The Engine',
      title: 'D2C Brand Content Positioning & Scale',
      tagline: 'Content strategy blueprint and unit economics alignment.',
      summary: 'Mapped content-to-sales pipeline for Indian handicraft and lifestyle marketplaces.',
      proof: 'BHX Strategy Engine Case'
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bhx-bg-reading)', minHeight: '100vh', padding: '64px 0 96px', color: 'var(--bhx-text)' }}>
      <div className="wrap">
        
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
          <div className="laterite-tag" style={{ marginBottom: '12px' }}>Selected Work &amp; Case Summaries</div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', color: 'var(--bhx-text)', lineHeight: 1.1, marginBottom: '20px' }}>
            Work engineered for commercial ROI.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
            A selection of case summaries across our four BHX studios. Complete private showreels and confidential brand films are available upon request.
          </p>
        </div>

        {/* Work Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '56px' }}>
          {cases.map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: 'var(--bhx-surface)',
              border: '1px solid var(--bhx-border)',
              borderRadius: '8px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="laterite-tag" style={{ fontSize: '11px' }}>{item.studio}</span>
                </div>
                <h3 style={{ fontSize: '20px', color: 'var(--bhx-text)', marginBottom: '8px' }}>{item.title}</h3>
                <div style={{ fontSize: '13px', color: 'var(--bhx-laterite)', fontWeight: 600, marginBottom: '12px' }}>{item.tagline}</div>
                <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', lineHeight: 1.6, marginBottom: '20px' }}>{item.summary}</p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--bhx-border)', fontSize: '12.5px', color: 'var(--bhx-muted)' }}>
                <strong style={{ color: 'var(--bhx-text)' }}>Context:</strong> {item.proof}
              </div>
            </div>
          ))}
        </div>

        {/* Private Reel CTA */}
        <div style={{
          backgroundColor: 'var(--bhx-surface)',
          border: '1px solid var(--bhx-border)',
          borderRadius: '12px',
          padding: '48px 36px',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '28px', color: 'var(--bhx-text)', marginBottom: '12px' }}>Request the Private Reel</h2>
          <p style={{ fontSize: '15.5px', color: 'var(--bhx-muted)', marginBottom: '28px' }}>
            Looking for specific showreels in brand films, AI micro-drama, or TV series? We share full private video reels with verified partners.
          </p>
          <button 
            onClick={() => setReelModalOpen(true)} 
            className="btn-copper"
            style={{ padding: '12px 28px' }}
          >
            Request Private Reel &rarr;
          </button>
        </div>

      </div>

      {/* Private Reel Request Modal */}
      {reelModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(28, 26, 23, 0.75)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200,
          padding: '24px'
        }} onClick={() => setReelModalOpen(false)}>
          <div style={{
            backgroundColor: 'var(--bhx-surface)',
            border: '1px solid var(--bhx-border)',
            borderRadius: '12px',
            padding: '32px',
            maxWidth: '480px',
            width: '100%'
          }} onClick={(e) => e.stopPropagation()}>
            {!reelSubmitted ? (
              <form onSubmit={handleReelSubmit}>
                <h3 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '8px' }}>Request Private Reel</h3>
                <p style={{ fontSize: '14px', color: 'var(--bhx-muted)', marginBottom: '20px' }}>
                  Enter your work email to receive access to the private BHX showreel.
                </p>
                <input
                  type="email"
                  required
                  value={reelEmail}
                  onChange={(e) => setReelEmail(e.target.value)}
                  placeholder="name@company.com"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#FFF8E7', border: '1px solid var(--bhx-border)', color: 'var(--bhx-text)', fontSize: '14px', marginBottom: '16px' }}
                />
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                  <button type="button" onClick={() => setReelModalOpen(false)} className="btn-outline" style={{ padding: '8px 16px', fontSize: '13px' }}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-copper" style={{ padding: '8px 16px', fontSize: '13px' }}>
                    Send Reel Access
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', color: 'var(--bhx-laterite)', marginBottom: '12px' }}>✓</div>
                <h3 style={{ fontSize: '20px', color: 'var(--bhx-text)', marginBottom: '8px' }}>Request Received</h3>
                <p style={{ fontSize: '14px', color: 'var(--bhx-muted)', marginBottom: '20px' }}>
                  We have logged your request for {reelEmail}. The private showreel link will be sent shortly.
                </p>
                <button onClick={() => { setReelModalOpen(false); setReelSubmitted(false); }} className="btn-outline" style={{ padding: '8px 16px', fontSize: '13px' }}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
