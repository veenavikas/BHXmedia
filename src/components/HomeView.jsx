import React, { useState } from 'react';
import EngineGraphic from './EngineGraphic';
import Card3D from './Card3D';

export default function HomeView({ onNavigate, onOpenBooking, onOpenVideo, onOpenReelRequest }) {
  const [activeTab, setActiveTab] = useState('brands');

  const handleNav = (path) => {
    if (onNavigate) onNavigate(path);
    else window.location.href = path;
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '64px 0 80px', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Column Text */}
            <div>
              <div className="copper-tag" style={{ marginBottom: '16px' }}>Creative Strategy &amp; Production</div>
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: '#F4EFE5', lineHeight: 1.1, marginBottom: '24px' }}>
                We decide what is worth making. <span className="copper-text">Then we make it pay.</span>
              </h1>
              <p style={{ fontSize: '18px', color: '#B8AE9C', lineHeight: 1.6, marginBottom: '32px', maxWidth: '48ch' }}>
                BHX Media is a creative strategy company. One strategy engine with four specialized studios turning content into measurable commercial ROI.
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

            {/* Right Column: Engine Graphic */}
            <div>
              <EngineGraphic onSelectStudio={(studioId) => handleNav(`/studios/${studioId}`)} />
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-dark)', backgroundColor: '#1E1C1A' }}>
        <div className="wrap" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <div className="copper-tag" style={{ marginBottom: '14px' }}>The Problem</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: '#F4EFE5', marginBottom: '20px' }}>
            AI made content cheap. Results did not follow.
          </h2>
          <p style={{ fontSize: '17px', color: '#B8AE9C', lineHeight: 1.75, margin: '0 auto' }}>
            Generative AI and automated tooling allowed teams to generate endless content volume. But producing more noise without positioning strategy does not produce revenue. The rare skill today is knowing what is worth making, filtering out waste, and ensuring every single asset earns its keep.
          </p>
        </div>
      </section>

      {/* 3. THE ENGINE */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="copper-tag" style={{ marginBottom: '12px' }}>Core Strategy Engine</div>
            <h2 style={{ fontSize: '32px', color: '#F4EFE5' }}>The Engine Method: Scope. Select. Ship.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '32px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontWeight: 700, fontSize: '13px', marginBottom: '8px' }}>01 / SCOPE</div>
              <h3 style={{ fontSize: '22px', color: '#F4EFE5', marginBottom: '12px' }}>Scope</h3>
              <p style={{ fontSize: '14.5px', color: '#B8AE9C', lineHeight: 1.6 }}>
                Decide what is worth making. Most content briefs should never exist. We kill non-essential noise before you spend budget.
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontWeight: 700, fontSize: '13px', marginBottom: '8px' }}>02 / SELECT</div>
              <h3 style={{ fontSize: '22px', color: '#F4EFE5', marginBottom: '12px' }}>Select</h3>
              <p style={{ fontSize: '14.5px', color: '#B8AE9C', lineHeight: 1.6 }}>
                Gate the quality. AI will generate a hundred variations. Only work good enough to hold attention and convert goes into production.
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontWeight: 700, fontSize: '13px', marginBottom: '8px' }}>03 / SHIP</div>
              <h3 style={{ fontSize: '22px', color: '#F4EFE5', marginBottom: '12px' }}>Ship</h3>
              <p style={{ fontSize: '14.5px', color: '#B8AE9C', lineHeight: 1.6 }}>
                Produce and place assets to drive real commercial results, not just vanity reach. Content that earns its cost back.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOUR STUDIOS */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="wrap">
          <div style={{ marginBottom: '48px' }}>
            <div className="copper-tag" style={{ marginBottom: '12px' }}>Four Specialized Studios</div>
            <h2 style={{ fontSize: '32px', color: '#F4EFE5' }}>Delivered through specialized BHX studios</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            
            {/* Studio 1 */}
            <div 
              onClick={() => handleNav('/studios/longform')}
              style={{
                backgroundColor: '#242220',
                border: '1px solid #33302B',
                borderRadius: '8px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#F4EFE5' }}>Longform</div>
              <div className="copper-tag" style={{ fontSize: '11px', marginBottom: '16px' }}>by BHX Media</div>
              <p style={{ fontSize: '14px', color: '#B8AE9C', marginBottom: '20px', lineHeight: 1.5 }}>
                TV shows and long-form series engineered for broadcast rating and retention.
              </p>
              <div style={{ fontSize: '12px', color: '#8A8275', paddingTop: '16px', borderTop: '1px solid #33302B' }}>
                <strong style={{ color: '#F4EFE5' }}>Proof:</strong> Sun TV Network, Culture Machine
              </div>
            </div>

            {/* Studio 2 */}
            <div 
              onClick={() => handleNav('/studios/cliffhanger')}
              style={{
                backgroundColor: '#242220',
                border: '1px solid #33302B',
                borderRadius: '8px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#F4EFE5' }}>Cliffhanger</div>
              <div className="copper-tag" style={{ fontSize: '11px', marginBottom: '16px' }}>by BHX Media</div>
              <p style={{ fontSize: '14px', color: '#B8AE9C', marginBottom: '20px', lineHeight: 1.5 }}>
                AI micro-drama production, plus Script Intelligence reports for high retention.
              </p>
              <div style={{ fontSize: '12px', color: '#8A8275', paddingTop: '16px', borderTop: '1px solid #33302B' }}>
                <strong style={{ color: '#F4EFE5' }}>Proof:</strong> Kuku TV slate 15 to 58+ shows; DAIVA
              </div>
            </div>

            {/* Studio 3 */}
            <div 
              onClick={() => handleNav('/studios/frame')}
              style={{
                backgroundColor: '#242220',
                border: '1px solid #33302B',
                borderRadius: '8px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#F4EFE5' }}>Frame</div>
              <div className="copper-tag" style={{ fontSize: '11px', marginBottom: '16px' }}>by BHX Media</div>
              <p style={{ fontSize: '14px', color: '#B8AE9C', marginBottom: '20px', lineHeight: 1.5 }}>
                Brand content and commercial films that hold attention and drive sales.
              </p>
              <div style={{ fontSize: '12px', color: '#8A8275', paddingTop: '16px', borderTop: '1px solid #33302B' }}>
                <strong style={{ color: '#F4EFE5' }}>Proof:</strong> Built Amazon in-house studio; 500+ TVCs
              </div>
            </div>

            {/* Studio 4 */}
            <div 
              onClick={() => handleNav('/studios/creator-circle')}
              style={{
                backgroundColor: '#242220',
                border: '1px solid #33302B',
                borderRadius: '8px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#F4EFE5' }}>Creator Circle</div>
              <div className="copper-tag" style={{ fontSize: '11px', marginBottom: '16px' }}>by BHX Media</div>
              <p style={{ fontSize: '14px', color: '#B8AE9C', marginBottom: '20px', lineHeight: 1.5 }}>
                Influencer marketing campaigns driven by commercial strategy and transparent ROAS.
              </p>
              <div style={{ fontSize: '12px', color: '#8A8275', paddingTop: '16px', borderTop: '1px solid #33302B' }}>
                <strong style={{ color: '#F4EFE5' }}>Proof:</strong> Live multi-creator campaigns (anonymised)
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHO WE WORK WITH (3 Tabs) */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-dark)', backgroundColor: '#1E1C1A' }}>
        <div className="wrap">
          <div style={{ marginBottom: '36px' }}>
            <div className="copper-tag" style={{ marginBottom: '12px' }}>Audience Fit</div>
            <h2 style={{ fontSize: '32px', color: '#F4EFE5' }}>Who We Work With</h2>
          </div>

          {/* Tab Switcher */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', borderBottom: '1px solid #33302B', paddingBottom: '12px' }}>
            <button
              onClick={() => setActiveTab('brands')}
              style={{
                padding: '8px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                background: activeTab === 'brands' ? '#C6884F' : 'transparent',
                color: activeTab === 'brands' ? '#FFFFFF' : '#B8AE9C',
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
                background: activeTab === 'platforms' ? '#C6884F' : 'transparent',
                color: activeTab === 'platforms' ? '#FFFFFF' : '#B8AE9C',
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
                background: activeTab === 'agencies' ? '#C6884F' : 'transparent',
                color: activeTab === 'agencies' ? '#FFFFFF' : '#B8AE9C',
                cursor: 'pointer'
              }}
            >
              Agencies
            </button>
          </div>

          {/* Tab Content */}
          <div style={{ padding: '32px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
            {activeTab === 'brands' && (
              <div>
                <h3 style={{ fontSize: '22px', color: '#F4EFE5', marginBottom: '12px' }}>For Consumer Brands &amp; D2C Product Leaders</h3>
                <p style={{ fontSize: '15px', color: '#B8AE9C', lineHeight: 1.6, marginBottom: '20px' }}>
                  We turn video budgets into commercial return. From launch brand films to influencer campaigns and conversion ad packs, we make sure every asset has a measurable job.
                </p>
                <button onClick={() => handleNav('/brief')} className="btn-outline">
                  Start a Brand Brief &rarr;
                </button>
              </div>
            )}

            {activeTab === 'platforms' && (
              <div>
                <h3 style={{ fontSize: '22px', color: '#F4EFE5', marginBottom: '12px' }}>For OTT Streaming, TV Networks &amp; Micro-Drama Apps</h3>
                <p style={{ fontSize: '15px', color: '#B8AE9C', lineHeight: 1.6, marginBottom: '20px' }}>
                  We scope and execute serialized drama slates. Script Intelligence reports help predict viewer retention and prevent costly production flops.
                </p>
                <button onClick={() => handleNav('/brief')} className="btn-outline">
                  Start a Platform Brief &rarr;
                </button>
              </div>
            )}

            {activeTab === 'agencies' && (
              <div>
                <h3 style={{ fontSize: '22px', color: '#F4EFE5', marginBottom: '12px' }}>For Creative Agencies &amp; Production Partners</h3>
                <p style={{ fontSize: '15px', color: '#B8AE9C', lineHeight: 1.6, marginBottom: '20px' }}>
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
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="wrap">
          <div style={{ marginBottom: '40px' }}>
            <div className="copper-tag" style={{ marginBottom: '12px' }}>Value Across Teams</div>
            <h2 style={{ fontSize: '32px', color: '#F4EFE5' }}>Built to deliver value for every level of your organization</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontWeight: 700, fontSize: '12px', marginBottom: '6px' }}>LEADERSHIP</div>
              <h3 style={{ fontSize: '18px', color: '#F4EFE5', marginBottom: '8px' }}>ROI &amp; Risk Mitigation</h3>
              <p style={{ fontSize: '14px', color: '#B8AE9C' }}>Clear financial return on content spend, protected brand perception, and zero wasted capital on dead projects.</p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontWeight: 700, fontSize: '12px', marginBottom: '6px' }}>MANAGERS</div>
              <h3 style={{ fontSize: '18px', color: '#F4EFE5', marginBottom: '8px' }}>Process &amp; Predictable Timelines</h3>
              <p style={{ fontSize: '14px', color: '#B8AE9C' }}>Industrial production discipline, transparent milestones, and reliable delivery without budget overruns.</p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontWeight: 700, fontSize: '12px', marginBottom: '6px' }}>TEAMS</div>
              <h3 style={{ fontSize: '18px', color: '#F4EFE5', marginBottom: '8px' }}>Clear Briefs &amp; Less Rework</h3>
              <p style={{ fontSize: '14px', color: '#B8AE9C' }}>Laser-sharp creative briefs, 1% specialist execution, and no frustration from constant direction changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROOF & WORK GRID */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <div>
              <div className="copper-tag" style={{ marginBottom: '10px' }}>Proof of Execution</div>
              <h2 style={{ fontSize: '32px', color: '#F4EFE5' }}>Selected Case Summaries</h2>
            </div>
            <button onClick={() => handleNav('/work')} className="btn-outline">
              View Work Index &rarr;
            </button>
          </div>

          {/* Work Summary Grid (Koto style - 1 line case summaries) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            
            <div style={{ padding: '24px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ fontSize: '12px', color: '#C6884F', fontWeight: 600, marginBottom: '6px' }}>KUKU TV · MICRO-DRAMA</div>
              <h3 style={{ fontSize: '18px', color: '#F4EFE5', marginBottom: '8px' }}>58+ Shows Scaled Across 4 Languages</h3>
              <p style={{ fontSize: '13.5px', color: '#B8AE9C' }}>Expanded vertical short-form drama slate while setting script retention benchmarks.</p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ fontSize: '12px', color: '#C6884F', fontWeight: 600, marginBottom: '6px' }}>AMAZON INDIA · IN-HOUSE STUDIO</div>
              <h3 style={{ fontSize: '18px', color: '#F4EFE5', marginBottom: '8px' }}>500+ TVCs &amp; 50,000+ Marketing Assets</h3>
              <p style={{ fontSize: '13.5px', color: '#B8AE9C' }}>Built internal studio infrastructure to deliver brand and campaign assets industrially.</p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ fontSize: '12px', color: '#C6884F', fontWeight: 600, marginBottom: '6px' }}>CREATOR CIRCLE · INFLUENCER</div>
              <h3 style={{ fontSize: '18px', color: '#F4EFE5', marginBottom: '8px' }}>Multi-Creator Campaign Deployment</h3>
              <p style={{ fontSize: '13.5px', color: '#B8AE9C' }}>Anonymized performance-led influencer briefs driving measurable D2C conversion.</p>
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
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-dark)', backgroundColor: '#1E1C1A' }}>
        <div className="wrap">
          <div style={{ marginBottom: '40px' }}>
            <div className="copper-tag" style={{ marginBottom: '12px' }}>Engagement Models</div>
            <h2 style={{ fontSize: '32px', color: '#F4EFE5' }}>How We Work</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '32px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontWeight: 700, fontSize: '12px', marginBottom: '8px' }}>01 / ENGAGEMENT</div>
              <h3 style={{ fontSize: '20px', color: '#F4EFE5', marginBottom: '8px' }}>Strategy Audit</h3>
              <p style={{ fontSize: '14px', color: '#B8AE9C', lineHeight: 1.6 }}>
                A focused 2-week engagement to audit your current content pipeline, eliminate waste, and map high-ROI positioning.
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontWeight: 700, fontSize: '12px', marginBottom: '8px' }}>02 / ENGAGEMENT</div>
              <h3 style={{ fontSize: '20px', color: '#F4EFE5', marginBottom: '8px' }}>Studio Retainer</h3>
              <p style={{ fontSize: '14px', color: '#B8AE9C', lineHeight: 1.6 }}>
                Ongoing monthly execution across one or more BHX studios (Longform, Cliffhanger, Frame, or Creator Circle).
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontWeight: 700, fontSize: '12px', marginBottom: '8px' }}>03 / ENGAGEMENT</div>
              <h3 style={{ fontSize: '20px', color: '#F4EFE5', marginBottom: '8px' }}>Fractional Advisory</h3>
              <p style={{ fontSize: '14px', color: '#B8AE9C', lineHeight: 1.6 }}>
                Direct senior strategic oversight by Bharath C.S. for founders, enterprise CMOs, and broadcast platform leads.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '640px' }}>
          <div className="copper-tag" style={{ marginBottom: '12px' }}>Get Started</div>
          <h2 style={{ fontSize: '36px', color: '#F4EFE5', marginBottom: '16px' }}>
            Ready to make content pay?
          </h2>
          <p style={{ fontSize: '16px', color: '#B8AE9C', marginBottom: '32px' }}>
            Send us a brief or book a 30-minute intro call to discuss your commercial goals.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => handleNav('/brief')} className="btn-copper" style={{ padding: '14px 28px' }}>
              Send a brief &rarr;
            </button>
            <button onClick={onOpenBooking} className="btn-outline" style={{ padding: '14px 28px' }}>
              Book a call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
