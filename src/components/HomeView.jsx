import React, { useState } from 'react';
import EngineGraphic from './EngineGraphic';
import VideoModal from './VideoModal';

export default function HomeView({ onNavigate, onOpenBooking, onOpenReelRequest }) {
  const [activeTab, setActiveTab] = useState('brands');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleNav = (path) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  const featuredVideos = [
    { id: 'B6axexxolTE', title: 'Rakshabandhan Campaign Film', format: 'Brand Film', client: 'Amazon Marketing' },
    { id: 'WSuvZXaGDpo', title: 'OnePlus Flagship Launch', format: 'Brand Film', client: 'Amazon & OnePlus' },
    { id: 'K8pQQWg2gLI', title: 'Ads Team Japan Documentary', format: 'Employer Brand', client: 'Amazon APAC' },
    { id: 'd3aoUUpYE4w', title: 'Amazon Seller Story', format: 'Brand Story', client: 'Amazon Seller Services' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bhx-bg)', color: 'var(--bhx-text)' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '64px 0 80px', borderBottom: '1px solid var(--bhx-border)' }}>
        <div className="wrap">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            
            {/* Left Content */}
            <div>
              <div className="laterite-tag" style={{ marginBottom: '16px' }}>Creative Strategy &amp; Execution</div>
              <h1 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                color: 'var(--bhx-text)',
                marginBottom: '20px',
                lineHeight: 1.1
              }}>
                We decide what is worth making. Then we make it pay.
              </h1>
              <p style={{
                fontSize: '18px',
                color: 'var(--bhx-muted)',
                marginBottom: '32px',
                lineHeight: 1.6
              }}>
                BHX Media is a creative strategy company. One strategy engine with four specialized studios turning content into measurable business results.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button onClick={() => handleNav('/brief')} className="btn-copper">
                  Send a brief &rarr;
                </button>
                <button onClick={onOpenBooking} className="btn-outline">
                  Book a call
                </button>
              </div>
            </div>

            {/* Right Hero Visual: Animated Engine Graphic */}
            <div>
              <EngineGraphic onSelectStudio={(studioSlug) => handleNav(`/studios/${studioSlug}`)} />
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--bhx-border)', backgroundColor: 'var(--bhx-bg-reading)' }}>
        <div className="wrap" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <div className="laterite-tag" style={{ marginBottom: '14px' }}>The Problem</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--bhx-text)', marginBottom: '20px' }}>
            AI made content cheap. Results did not follow.
          </h2>
          <p style={{ fontSize: '17.5px', color: 'var(--bhx-muted)', lineHeight: 1.75, margin: '0 auto' }}>
            Generative AI and automated tooling allowed teams to generate endless content volume. But producing more noise without positioning strategy does not produce revenue. The rare skill today is knowing what is worth making, filtering out waste, and ensuring every single asset earns its keep.
          </p>
        </div>
      </section>

      {/* 3. THE ENGINE */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--bhx-border)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="laterite-tag" style={{ marginBottom: '12px' }}>Core Strategy Engine</div>
            <h2 style={{ fontSize: '34px', color: 'var(--bhx-text)' }}>The Engine Method: Scope. Select. Ship.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '32px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontWeight: 700, fontSize: '13px', marginBottom: '8px' }}>01 / SCOPE</div>
              <h3 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>Scope</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
                Decide what is worth making. Most content briefs should never exist. We kill non-essential noise before you spend budget.
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontWeight: 700, fontSize: '13px', marginBottom: '8px' }}>02 / SELECT</div>
              <h3 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>Select</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
                Gate the quality. AI will generate a hundred variations. Only work good enough to hold attention and convert goes into production.
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontWeight: 700, fontSize: '13px', marginBottom: '8px' }}>03 / SHIP</div>
              <h3 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>Ship</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
                Produce and place assets to drive real commercial results, not just vanity reach. Content that earns its cost back.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOUR STUDIOS */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--bhx-border)' }}>
        <div className="wrap">
          <div style={{ marginBottom: '48px' }}>
            <div className="laterite-tag" style={{ marginBottom: '12px' }}>Four Specialized Studios</div>
            <h2 style={{ fontSize: '34px', color: 'var(--bhx-text)' }}>Delivered through specialized BHX studios</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            
            <div 
              onClick={() => handleNav('/studios/longform')}
              style={{
                backgroundColor: 'var(--bhx-surface)',
                border: '1px solid var(--bhx-border)',
                borderRadius: '8px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--bhx-text)' }}>Longform</div>
              <div className="laterite-tag" style={{ fontSize: '11px', marginBottom: '16px' }}>by BHX Media</div>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                TV shows and long-form series engineered for broadcast rating and retention.
              </p>
              <div style={{ fontSize: '12.5px', color: 'var(--bhx-muted)', paddingTop: '16px', borderTop: '1px solid var(--bhx-border)' }}>
                <strong style={{ color: 'var(--bhx-text)' }}>Proof:</strong> Sun TV Network, Culture Machine
              </div>
            </div>

            <div 
              onClick={() => handleNav('/studios/cliffhanger')}
              style={{
                backgroundColor: 'var(--bhx-surface)',
                border: '1px solid var(--bhx-border)',
                borderRadius: '8px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--bhx-text)' }}>Cliffhanger</div>
              <div className="laterite-tag" style={{ fontSize: '11px', marginBottom: '16px' }}>by BHX Media</div>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                AI micro-drama production, plus Script Intelligence reports for high retention.
              </p>
              <div style={{ fontSize: '12.5px', color: 'var(--bhx-muted)', paddingTop: '16px', borderTop: '1px solid var(--bhx-border)' }}>
                <strong style={{ color: 'var(--bhx-text)' }}>Proof:</strong> Kuku TV slate 15 to 58+ shows; DAIVA
              </div>
            </div>

            <div 
              onClick={() => handleNav('/studios/frame')}
              style={{
                backgroundColor: 'var(--bhx-surface)',
                border: '1px solid var(--bhx-border)',
                borderRadius: '8px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--bhx-text)' }}>Frame</div>
              <div className="laterite-tag" style={{ fontSize: '11px', marginBottom: '16px' }}>by BHX Media</div>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                Brand content and commercial films that hold attention and drive sales.
              </p>
              <div style={{ fontSize: '12.5px', color: 'var(--bhx-muted)', paddingTop: '16px', borderTop: '1px solid var(--bhx-border)' }}>
                <strong style={{ color: 'var(--bhx-text)' }}>Proof:</strong> Built Amazon in-house studio; 500+ TVCs
              </div>
            </div>

            <div 
              onClick={() => handleNav('/studios/creator-circle')}
              style={{
                backgroundColor: 'var(--bhx-surface)',
                border: '1px solid var(--bhx-border)',
                borderRadius: '8px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--bhx-text)' }}>Creator Circle</div>
              <div className="laterite-tag" style={{ fontSize: '11px', marginBottom: '16px' }}>by BHX Media</div>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                Influencer marketing campaigns driven by commercial strategy and transparent ROAS.
              </p>
              <div style={{ fontSize: '12.5px', color: 'var(--bhx-muted)', paddingTop: '16px', borderTop: '1px solid var(--bhx-border)' }}>
                <strong style={{ color: 'var(--bhx-text)' }}>Proof:</strong> Live multi-creator campaigns (anonymised)
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHO WE WORK WITH */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--bhx-border)', backgroundColor: 'var(--bhx-bg-reading)' }}>
        <div className="wrap">
          <div style={{ marginBottom: '36px' }}>
            <div className="laterite-tag" style={{ marginBottom: '12px' }}>Audience Fit</div>
            <h2 style={{ fontSize: '34px', color: 'var(--bhx-text)' }}>Who We Work With</h2>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', borderBottom: '1px solid var(--bhx-border)', paddingBottom: '12px' }}>
            <button
              onClick={() => setActiveTab('brands')}
              style={{
                padding: '8px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                background: activeTab === 'brands' ? 'var(--bhx-laterite)' : 'transparent',
                color: activeTab === 'brands' ? 'var(--bhx-paper)' : 'var(--bhx-text)',
                cursor: 'pointer'
              }}
            >
              Brands
            </button>

            <button
              onClick={() => setActiveTab('platforms')}
              style={{
                padding: '8px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                background: activeTab === 'platforms' ? 'var(--bhx-laterite)' : 'transparent',
                color: activeTab === 'platforms' ? 'var(--bhx-paper)' : 'var(--bhx-text)',
                cursor: 'pointer'
              }}
            >
              Platforms &amp; Broadcasters
            </button>

            <button
              onClick={() => setActiveTab('agencies')}
              style={{
                padding: '8px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                background: activeTab === 'agencies' ? 'var(--bhx-laterite)' : 'transparent',
                color: activeTab === 'agencies' ? 'var(--bhx-paper)' : 'var(--bhx-text)',
                cursor: 'pointer'
              }}
            >
              Agencies
            </button>
          </div>

          <div style={{ padding: '32px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
            {activeTab === 'brands' && (
              <div>
                <h3 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>For Consumer Brands &amp; D2C Product Leaders</h3>
                <p style={{ fontSize: '15.5px', color: 'var(--bhx-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                  We turn video budgets into commercial return. From launch brand films to influencer campaigns and conversion ad packs, we make sure every asset has a measurable job.
                </p>
                <button onClick={() => handleNav('/brief')} className="btn-outline">
                  Start a Brand Brief &rarr;
                </button>
              </div>
            )}

            {activeTab === 'platforms' && (
              <div>
                <h3 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>For OTT Streaming, TV Networks &amp; Micro-Drama Apps</h3>
                <p style={{ fontSize: '15.5px', color: 'var(--bhx-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                  We scope and execute serialized drama slates. Script Intelligence reports help predict viewer retention and prevent costly production flops.
                </p>
                <button onClick={() => handleNav('/brief')} className="btn-outline">
                  Start a Platform Brief &rarr;
                </button>
              </div>
            )}

            {activeTab === 'agencies' && (
              <div>
                <h3 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>For Creative Agencies &amp; Production Partners</h3>
                <p style={{ fontSize: '15.5px', color: 'var(--bhx-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                  We act as your strategy lead or specialist production wing for complex client briefs in brand film, AI micro-drama, and influencer execution.
                </p>
                <button onClick={() => handleNav('/brief')} className="btn-outline">
                  Pitch / Partner Brief &rarr;
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 6. FOR EVERY LEVEL */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--bhx-border)' }}>
        <div className="wrap">
          <div style={{ marginBottom: '40px' }}>
            <div className="laterite-tag" style={{ marginBottom: '12px' }}>Value Across Teams</div>
            <h2 style={{ fontSize: '34px', color: 'var(--bhx-text)' }}>Built to deliver value for every level of your organization</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '28px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontWeight: 700, fontSize: '12px', marginBottom: '6px' }}>LEADERSHIP</div>
              <h3 style={{ fontSize: '19px', color: 'var(--bhx-text)', marginBottom: '8px' }}>ROI &amp; Risk Mitigation</h3>
              <p style={{ fontSize: '14px', color: 'var(--bhx-muted)' }}>Clear financial return on content spend, protected brand perception, and zero wasted capital on dead projects.</p>
            </div>

            <div style={{ padding: '28px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontWeight: 700, fontSize: '12px', marginBottom: '6px' }}>MANAGERS</div>
              <h3 style={{ fontSize: '19px', color: 'var(--bhx-text)', marginBottom: '8px' }}>Process &amp; Predictable Timelines</h3>
              <p style={{ fontSize: '14px', color: 'var(--bhx-muted)' }}>Industrial production discipline, transparent milestones, and reliable delivery without budget overruns.</p>
            </div>

            <div style={{ padding: '28px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontWeight: 700, fontSize: '12px', marginBottom: '6px' }}>TEAMS</div>
              <h3 style={{ fontSize: '19px', color: 'var(--bhx-text)', marginBottom: '8px' }}>Clear Briefs &amp; Less Rework</h3>
              <p style={{ fontSize: '14px', color: 'var(--bhx-muted)' }}>Laser-sharp creative briefs, 1% specialist execution, and no frustration from constant direction changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROOF, VIDEO SHOWREELS & WORK GRID */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--bhx-border)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <div>
              <div className="laterite-tag" style={{ marginBottom: '10px' }}>Proof of Execution</div>
              <h2 style={{ fontSize: '34px', color: 'var(--bhx-text)' }}>Featured Video Showreels &amp; Work</h2>
            </div>
            <button onClick={() => handleNav('/work')} className="btn-outline">
              View All Work &amp; Videos &rarr;
            </button>
          </div>

          {/* Featured Video Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {featuredVideos.map(video => (
              <div 
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                style={{
                  backgroundColor: 'var(--bhx-surface)',
                  border: '1px solid var(--bhx-border)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
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
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bhx-laterite)',
                      color: 'var(--bhx-paper)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '15px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      paddingLeft: '3px'
                    }}>
                      ▶
                    </div>
                  </div>
                  <span style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    backgroundColor: 'rgba(28, 26, 23, 0.85)',
                    color: '#E0A21B',
                    fontSize: '9.5px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '3px 6px',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}>
                    {video.format}
                  </span>
                </div>

                <div style={{ padding: '14px 16px' }}>
                  <h3 style={{ fontSize: '15.5px', color: 'var(--bhx-text)', fontWeight: 700, marginBottom: '4px', lineHeight: 1.3 }}>
                    {video.title}
                  </h3>
                  <div style={{ fontSize: '12px', color: 'var(--bhx-muted)' }}>
                    {video.client}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Case Summaries */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            
            <div style={{ padding: '24px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ fontSize: '12px', color: 'var(--bhx-laterite)', fontWeight: 600, marginBottom: '6px' }}>KUKU TV · MICRO-DRAMA</div>
              <h3 style={{ fontSize: '18px', color: 'var(--bhx-text)', marginBottom: '8px' }}>58+ Shows Scaled Across 4 Languages</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--bhx-muted)' }}>Expanded vertical short-form drama slate while setting script retention benchmarks.</p>
            </div>

            <div style={{ padding: '24px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ fontSize: '12px', color: 'var(--bhx-laterite)', fontWeight: 600, marginBottom: '6px' }}>AMAZON INDIA · IN-HOUSE STUDIO</div>
              <h3 style={{ fontSize: '18px', color: 'var(--bhx-text)', marginBottom: '8px' }}>500+ TVCs &amp; 50,000+ Marketing Assets</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--bhx-muted)' }}>Built internal studio infrastructure to deliver brand and campaign assets industrially.</p>
            </div>

            <div style={{ padding: '24px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ fontSize: '12px', color: 'var(--bhx-laterite)', fontWeight: 600, marginBottom: '6px' }}>CREATOR CIRCLE · INFLUENCER</div>
              <h3 style={{ fontSize: '18px', color: 'var(--bhx-text)', marginBottom: '8px' }}>Multi-Creator Campaign Deployment</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--bhx-muted)' }}>Anonymized performance-led influencer briefs driving measurable D2C conversion.</p>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button 
              onClick={() => onOpenReelRequest ? onOpenReelRequest() : onOpenBooking()} 
              className="btn-copper"
            >
              Request the Private Reel &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 8. HOW WE WORK */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--bhx-border)', backgroundColor: 'var(--bhx-bg-reading)' }}>
        <div className="wrap">
          <div style={{ marginBottom: '40px' }}>
            <div className="laterite-tag" style={{ marginBottom: '12px' }}>Engagement Models</div>
            <h2 style={{ fontSize: '34px', color: 'var(--bhx-text)' }}>How We Work</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '32px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontWeight: 700, fontSize: '12px', marginBottom: '8px' }}>01 / ENGAGEMENT</div>
              <h3 style={{ fontSize: '20px', color: 'var(--bhx-text)', marginBottom: '8px' }}>Strategy Audit</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
                A focused 2-week engagement to audit your current content pipeline, eliminate waste, and map high-ROI positioning.
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontWeight: 700, fontSize: '12px', marginBottom: '8px' }}>02 / ENGAGEMENT</div>
              <h3 style={{ fontSize: '20px', color: 'var(--bhx-text)', marginBottom: '8px' }}>Studio Retainer</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
                Ongoing monthly execution across one or more BHX studios (Longform, Cliffhanger, Frame, or Creator Circle).
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: 'var(--bhx-surface)', borderRadius: '8px', border: '1px solid var(--bhx-border)' }}>
              <div style={{ color: 'var(--bhx-laterite)', fontWeight: 700, fontSize: '12px', marginBottom: '8px' }}>03 / ENGAGEMENT</div>
              <h3 style={{ fontSize: '20px', color: 'var(--bhx-text)', marginBottom: '8px' }}>Fractional Advisory</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', lineHeight: 1.6 }}>
                Direct senior strategic oversight by Bharath C.S. for founders, enterprise CMOs, and broadcast platform leads.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="band-dark" style={{ padding: '96px 0', textAlign: 'center', backgroundColor: '#1C1A17' }}>
        <div className="wrap" style={{ maxWidth: '680px' }}>
          <div style={{ color: '#E0A21B', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>Get Started</div>
          <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: '#F4EFE6', marginBottom: '18px' }}>
            Ready to make content pay?
          </h2>
          <p style={{ fontSize: '17px', color: '#D4CDC3', marginBottom: '36px' }}>
            Send us a brief or book a 30-minute intro call to discuss your commercial goals.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => handleNav('/brief')} className="btn-copper" style={{ padding: '14px 28px' }}>
              Send a brief &rarr;
            </button>
            <button onClick={onOpenBooking} className="btn-outline" style={{ padding: '14px 28px', color: '#F4EFE6', borderColor: '#F4EFE6' }}>
              Book a call
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal 
        video={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />

    </div>
  );
}
