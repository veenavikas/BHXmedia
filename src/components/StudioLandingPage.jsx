import React, { useState } from 'react';
import Navbar from './Navbar';
import BriefForm from './BriefForm';
import Footer from './Footer';

const STUDIO_DATA = {
  longform: {
    id: 'longform',
    name: 'Longform',
    tag: 'by BHX Media',
    promise: 'TV shows and long-form series engineered for broadcast rating and retention.',
    proof: 'Proven track record across Sun TV Network and Culture Machine content slates.',
    outcomes: [
      { title: 'High-Retention Show Bibles', desc: 'Narrative structure and episode pacing designed to maintain viewership across full seasons.' },
      { title: 'Broadcast-Grade Production', desc: 'End-to-end execution from pilot script to broadcast master delivery with zero agency bloat.' },
      { title: 'Multi-Language Scalability', desc: 'Regional adaptation and dubbing pipelines for pan-Indian and international platforms.' }
    ],
    faq: [
      { q: 'How does Longform partner with platforms?', a: 'Longform works directly with platform leads and broadcast heads to scope, script, and produce serialized television and streaming shows.' },
      { q: 'What past experience backs Longform?', a: 'Bharath C.S. managed South content slates across Sun TV Network, radio, and OTT platforms at Culture Machine.' }
    ]
  },
  cliffhanger: {
    id: 'cliffhanger',
    name: 'Cliffhanger',
    tag: 'by BHX Media',
    promise: 'AI micro-drama, plus Script Intelligence reports.',
    proof: 'Scaled Kuku TV slate from 15 to 58+ shows across 4 languages; DAIVA script intelligence.',
    outcomes: [
      { title: 'AI-Assisted Micro-Drama Slates', desc: 'High-volume vertical short-form drama produced combining AI workflows and human craft.' },
      { title: 'Script Intelligence Reports', desc: 'Algorithmic script analysis identifying hook density, pacing flaws, and drop-off risks before shooting.' },
      { title: 'Audience Monetization & Retention', desc: 'Cliffhanger engineering designed specifically for paywall conversion and episodic re-engagement.' }
    ],
    faq: [
      { q: 'Cliffhanger is the AI micro-drama studio of BHX Media.', a: 'It provides vertical drama production and Script Intelligence reports for platforms and creators.' },
      { q: 'What is a Script Intelligence report?', a: 'Script Intelligence analyzes short-form scripts for hook timing, emotional beats, and cliffhanger placement to maximize retention before production.' }
    ]
  },
  frame: {
    id: 'frame',
    name: 'Frame',
    tag: 'by BHX Media',
    promise: 'Brand content and commercial films that hold attention and sell.',
    proof: 'Built Amazon India in-house studio; 500+ TVCs and 50,000+ brand assets delivered.',
    outcomes: [
      { title: 'Commercial Brand Films', desc: 'Ad films and brand launch videos conceived from business briefs to drive commercial response.' },
      { title: 'Master 16:9 + Social 9:16 Cuts', desc: 'Full asset suites delivered ready for TV, YouTube, Instagram Reels, and digital ad placements.' },
      { title: 'Efficient Studio Workflows', desc: 'Pre-visualization and tight pre-production eliminating wasted shoot days and unnecessary budget.' }
    ],
    faq: [
      { q: 'What sets Frame apart from traditional ad agencies?', a: 'Frame is led by creative strategy first. We determine what film is actually worth making before spending budget on production.' },
      { q: 'Can Frame handle high-volume asset creation?', a: 'Yes. Having built Amazon India in-house studio infrastructure, Frame specializes in scaled brand asset delivery.' }
    ]
  },
  'creator-circle': {
    id: 'creator-circle',
    name: 'Creator Circle',
    tag: 'by BHX Media',
    promise: 'Influencer marketing campaigns driven by strategy, not vanity metrics.',
    proof: 'Live multi-creator campaigns delivered with anonymised performance reporting.',
    outcomes: [
      { title: 'Strategic Creator Discovery', desc: 'Influencers selected based on true audience overlap and commercial trust rather than follower counts.' },
      { title: 'Performance-Led Creative Briefs', desc: 'Briefs designed so creators produce authentic content that converts without feeling like forced ads.' },
      { title: 'Anonymised ROAS Tracking', desc: 'Transparent campaign measurement focused on actual leads, sales, and brand lift.' }
    ],
    faq: [
      { q: 'How does Creator Circle manage multi-creator campaigns?', a: 'We handle the full pipeline: brief strategy, creator negotiation, script alignment, compliance, and performance tracking.' },
      { q: 'Why are campaigns shown anonymised?', a: 'We protect client commercial data while sharing genuine performance benchmarks and campaign structures.' }
    ]
  }
};

export default function StudioLandingPage({ studioId, onNavigate, onOpenBooking }) {
  const data = STUDIO_DATA[studioId] || STUDIO_DATA.frame;

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      
      {/* Minimal Header (Logo only) per Section 7 of Brief */}
      <Navbar minimal={true} onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

      {/* Hero Section */}
      <section style={{ padding: '64px 0 48px', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
            
            {/* Left Content */}
            <div>
              <div style={{ display: 'inline-block', marginBottom: '12px' }}>
                <span style={{ fontSize: '28px', fontWeight: 700, color: '#F4EFE5', display: 'block' }}>{data.name}</span>
                <span className="copper-tag" style={{ fontSize: '12px' }}>{data.tag}</span>
              </div>

              <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#F4EFE5', margin: '16px 0 20px', lineHeight: 1.15 }}>
                {data.promise}
              </h1>

              <div style={{
                padding: '16px 20px',
                borderRadius: '8px',
                backgroundColor: '#242220',
                border: '1px solid var(--border-dark)',
                fontSize: '14px',
                color: '#B8AE9C',
                marginBottom: '28px'
              }}>
                <strong style={{ color: '#F4EFE5', display: 'block', marginBottom: '4px' }}>Proof of Authority:</strong>
                {data.proof}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={onOpenBooking} className="btn-copper">
                  Book a call &rarr;
                </button>
              </div>
            </div>

            {/* Right: Brief Form Visible on First Screen */}
            <div style={{
              backgroundColor: '#1E1C1A',
              border: '1px solid #33302B',
              borderRadius: '12px',
              padding: '28px'
            }}>
              <h3 style={{ fontSize: '20px', color: '#F4EFE5', marginBottom: '6px' }}>Submit a Brief for {data.name}</h3>
              <p style={{ fontSize: '13px', color: '#B8AE9C', marginBottom: '20px' }}>
                Tell us your goals. We review and respond within 24 hours.
              </p>
              <BriefForm 
                preselectedStudio={data.name} 
                onSubmitSuccess={() => {
                  if (onNavigate) onNavigate('/thank-you');
                  else window.location.href = '/thank-you';
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3 Outcome Points */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="wrap">
          <div className="copper-tag" style={{ marginBottom: '12px' }}>Core Outcomes</div>
          <h2 style={{ fontSize: '28px', color: '#F4EFE5', marginBottom: '36px' }}>
            What {data.name} delivers for your business
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {data.outcomes.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#242220',
                border: '1px solid #33302B',
                borderRadius: '8px',
                padding: '24px'
              }}>
                <div style={{ color: '#C6884F', fontWeight: 700, fontSize: '14px', marginBottom: '8px' }}>0{idx + 1}. {item.title}</div>
                <p style={{ fontSize: '14px', color: '#B8AE9C', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method: Scope. Select. Ship. */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="wrap">
          <div className="copper-tag" style={{ marginBottom: '12px' }}>The Method</div>
          <h2 style={{ fontSize: '28px', color: '#F4EFE5', marginBottom: '36px' }}>
            How {data.name} operates: Scope. Select. Ship.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>STEP 01</div>
              <h3 style={{ fontSize: '18px', color: '#F4EFE5', marginBottom: '8px' }}>Scope</h3>
              <p style={{ fontSize: '14px', color: '#B8AE9C' }}>Decide what is worth making. We eliminate non-essential content before spending budget.</p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>STEP 02</div>
              <h3 style={{ fontSize: '18px', color: '#F4EFE5', marginBottom: '8px' }}>Select</h3>
              <p style={{ fontSize: '14px', color: '#B8AE9C' }}>Gate the quality. Only content engineered to convert and hold attention goes into production.</p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
              <div style={{ color: '#C6884F', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>STEP 03</div>
              <h3 style={{ fontSize: '18px', color: '#F4EFE5', marginBottom: '8px' }}>Ship</h3>
              <p style={{ fontSize: '14px', color: '#B8AE9C' }}>Deliver broadcast-ready assets on time, mapped directly to commercial outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Short FAQ */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <div className="copper-tag" style={{ marginBottom: '12px' }}>FAQ</div>
          <h2 style={{ fontSize: '28px', color: '#F4EFE5', marginBottom: '32px' }}>Frequently Asked Questions</h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {data.faq.map((item, idx) => (
              <div key={idx} style={{ padding: '20px', backgroundColor: '#242220', borderRadius: '8px', border: '1px solid #33302B' }}>
                <h4 style={{ fontSize: '16px', color: '#F4EFE5', marginBottom: '8px' }}>{item.q}</h4>
                <p style={{ fontSize: '14px', color: '#B8AE9C' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Again at Bottom */}
      <section style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: '700px' }}>
          <div style={{
            backgroundColor: '#1E1C1A',
            border: '1px solid #33302B',
            borderRadius: '12px',
            padding: '36px',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '28px', color: '#F4EFE5', marginBottom: '8px' }}>Start Your Brief with {data.name}</h2>
            <p style={{ fontSize: '14px', color: '#B8AE9C', marginBottom: '28px' }}>
              Submit your project details below or book a 30-minute intro call.
            </p>
            <BriefForm 
              preselectedStudio={data.name} 
              onSubmitSuccess={() => {
                if (onNavigate) onNavigate('/thank-you');
                else window.location.href = '/thank-you';
              }}
            />
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
