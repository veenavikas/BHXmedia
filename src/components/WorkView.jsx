import React, { useState } from 'react';
import VideoModal from './VideoModal';

export default function WorkView({ onNavigate, onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
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

  const videoReels = [
    // Brand & Campaign Films
    { id: 'B6axexxolTE', title: 'Rakshabandhan Festival Film', format: 'Brand Film', category: 'brand', client: 'Amazon Marketing (XCM)' },
    { id: 'WSuvZXaGDpo', title: 'OnePlus Flagship Launch Film', format: 'Brand Film', category: 'brand', client: 'Amazon India & OnePlus' },
    { id: 'd3aoUUpYE4w', title: 'Amazon Seller Entrepreneur Story', format: 'Brand Story', category: 'brand', client: 'Amazon Seller Services' },
    { id: 'HdkjMzo5GBg', title: 'Prime Day National Campaign', format: 'Campaign Film', category: 'brand', client: 'Amazon Prime India' },
    { id: 'GWmTHUHVk9g', title: 'Amazon Fashion Campaign Film', format: 'Brand Film', category: 'brand', client: 'Amazon India' },
    { id: 'sbl6yyNChIk', title: 'Regional Vernacular Campaign', format: 'Brand Film', category: 'brand', client: 'Amazon India' },

    // Employer Brand & Culture Films
    { id: 'K8pQQWg2gLI', title: 'Ads Team Japan Documentary', format: 'Employer Brand', category: 'employer', client: 'Amazon APAC' },
    { id: 'hFQHItBtybc', title: 'A Day in the Life · Tech Engineering', format: 'Employer Brand', category: 'employer', client: 'Amazon APAC' },
    { id: 'gDYS-4aoVYM', title: 'A Day in the Life · Operations Lead', format: 'Employer Brand', category: 'employer', client: 'Amazon APAC' },
    { id: 'n5yhAn9FEnY', title: 'We Are Operations Advocacy Film', format: 'Employer Brand', category: 'employer', client: 'Amazon APAC' },

    // Digital Content & Formats
    { id: 'i_ekxlV_RnU', title: 'Amazon Content Hub · Product Tips', format: 'Digital Series', category: 'formats', client: 'Amazon Content Hub' },
    { id: '_a8LTbUKZt0', title: 'Culture Machine Channel Promo', format: 'Channel Slate', category: 'formats', client: 'Culture Machine South' },
    { id: 'DYIUjbbjgdg', title: 'Entertainment Skit Promotion', format: 'Entertainment', category: 'formats', client: 'Culture Machine' },
    { id: 'OqWsafUmzSE', title: '101 Product Unboxing Format', format: 'Product Format', category: 'formats', client: 'Culture Machine' }
  ];

  const filteredVideos = activeTab === 'all' ? videoReels : videoReels.filter(v => v.category === activeTab);

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
          <div className="laterite-tag" style={{ marginBottom: '12px' }}>Selected Work &amp; Showreels</div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', color: 'var(--bhx-text)', lineHeight: 1.1, marginBottom: '20px' }}>
            Work engineered for commercial ROI.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
            Explore selected video showreels, brand films, and case summaries executed across our specialized BHX studios. Click any film to watch.
          </p>
        </div>

        {/* ============================================================ */}
        {/* VIDEO SHOWREEL GRID SECTION */}
        {/* ============================================================ */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '28px', color: 'var(--bhx-text)', margin: 0 }}>
              Video Showreels &amp; Films
            </h2>

            {/* Category Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Videos' },
                { id: 'brand', label: 'Brand Films' },
                { id: 'employer', label: 'Employer Brand' },
                { id: 'formats', label: 'Digital Series' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: activeTab === tab.id ? '1px solid var(--bhx-laterite)' : '1px solid var(--bhx-border)',
                    background: activeTab === tab.id ? 'var(--bhx-laterite)' : '#FFF8E7',
                    color: activeTab === tab.id ? 'var(--bhx-paper)' : 'var(--bhx-text)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {filteredVideos.map(video => (
              <div 
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                style={{
                  backgroundColor: 'var(--bhx-surface)',
                  border: '1px solid var(--bhx-border)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}
              >
                {/* Thumbnail Container */}
                <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#1C1A17', overflow: 'hidden' }}>
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                    alt={video.title} 
                    loading="lazy"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(28, 26, 23, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s ease'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bhx-laterite)',
                      color: 'var(--bhx-paper)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      paddingLeft: '3px'
                    }}>
                      ▶
                    </div>
                  </div>
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'rgba(28, 26, 23, 0.85)',
                    color: '#E0A21B',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}>
                    {video.format}
                  </span>
                </div>

                {/* Meta */}
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '16px', color: 'var(--bhx-text)', fontWeight: 700, marginBottom: '6px', lineHeight: 1.35 }}>
                    {video.title}
                  </h3>
                  <div style={{ fontSize: '12.5px', color: 'var(--bhx-muted)' }}>
                    {video.client}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* CASE SUMMARIES GRID SECTION */}
        {/* ============================================================ */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--bhx-text)', marginBottom: '24px' }}>
            Selected Case Summaries
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
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
          <h2 style={{ fontSize: '28px', color: 'var(--bhx-text)', marginBottom: '12px' }}>Request the Full Private Reel</h2>
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

      {/* Video Modal Player */}
      <VideoModal 
        video={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />

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
