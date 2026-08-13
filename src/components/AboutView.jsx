import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';

export default function AboutView({ onOpenBooking }) {
  const { whyMe } = SITE_CONTENT;

  return (
    <div className="wrap" style={{ paddingTop: '110px', paddingBottom: '100px' }}>
      
      <div className="mono sec-header">
        <span className="num">04</span> PROOF & OPERATOR STORY
      </div>

      <div style={{ marginBottom: '48px', maxWidth: '840px' }}>
        <h1 className="section-title" style={{ fontSize: 'clamp(34px, 5.5vw, 56px)', marginBottom: '20px' }}>
          Judgment built on 20+ years of real execution<span className="stop">.</span>
        </h1>
        <p className="body-text" style={{ fontSize: '19px', color: 'var(--grey)', lineHeight: '1.6' }}>
          I am Bharath C.S., sole proprietor of BHX Media. I act as the "content brain" for ambitious brands and teams navigating the AI era—applying executive judgment to strategy, concept, and production.
        </p>
      </div>

      <hr className="rule" />

      {/* Operator Background Narrative */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', margin: '48px 0' }}>
        
        <div>
          <span className="mono" style={{ color: 'var(--red)', marginBottom: '8px', display: 'block' }}>
            OPERATOR PERSPECTIVE
          </span>
          <h2 className="serif" style={{ fontSize: '28px', fontWeight: 500, marginBottom: '16px' }}>
            Production is a capability, not the headline<span className="stop">.</span>
          </h2>
          <p className="body-text" style={{ fontSize: '16px', color: '#2F2F31', marginBottom: '16px' }}>
            AI made content cheap and fast. Quality and relevance are the casualties. The scarce skill is no longer making content—it is knowing what to make, whether it is good enough, and whether it drives business results.
          </p>
          <p className="body-text" style={{ fontSize: '16px', color: '#2F2F31' }}>
            Because I have run production at scale, I take it end-to-end when it makes sense, led by judgment rather than sold by the hour.
          </p>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid var(--hairline)', padding: '28px', borderRadius: '2px' }}>
          <span className="mono" style={{ color: 'var(--grey)', marginBottom: '12px', display: 'block' }}>
            AT A GLANCE
          </span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <li style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: '10px' }}>
              <strong style={{ display: 'block', fontSize: '15px' }}>Amazon India Marketing</strong>
              <span style={{ fontSize: '13px', color: 'var(--grey)' }}>6.5 years, built studio, 500+ TVCs, 50k+ assets</span>
            </li>
            <li style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: '10px' }}>
              <strong style={{ display: 'block', fontSize: '15px' }}>Micro-Drama Slate</strong>
              <span style={{ fontSize: '13px', color: 'var(--grey)' }}>15 to 58+ shows across 4 South Indian languages</span>
            </li>
            <li>
              <strong style={{ display: 'block', fontSize: '15px' }}>Broadcast & E-commerce</strong>
              <span style={{ fontSize: '13px', color: 'var(--grey)' }}>Sun TV Network, OTT, Radio, GI-tagged handicrafts D2C</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Detailed Proof Pillars */}
      <div style={{ marginTop: '56px' }}>
        <h2 className="section-title" style={{ fontSize: '28px', marginBottom: '28px' }}>
          Verified proof of authority<span className="stop">.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {whyMe.proofs.map(proof => (
            <div key={proof.num} className="editorial-card" style={{ background: '#FFFFFF' }}>
              <div className="mono" style={{ color: 'var(--red)', marginBottom: '10px' }}>
                {proof.num} / {proof.category.toUpperCase()}
              </div>

              <h3 className="card-title" style={{ fontSize: '20px', marginBottom: '14px' }}>
                {proof.category}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {proof.points.map((pt, idx) => (
                  <li key={idx} className="body-text" style={{ fontSize: '14px', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--red)' }}>•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Full Brand Form Conclusion */}
      <div style={{ marginTop: '72px', paddingTop: '40px', borderTop: '1px solid var(--hairline)', textAlignment: 'center', textAlign: 'center' }}>
        <p className="serif" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
          Better. Human. eXecution<span className="stop">.</span>
        </p>
        <p className="mono" style={{ color: 'var(--grey)', marginBottom: '28px' }}>
          THE FULL BRAND FORM
        </p>
        <button onClick={onOpenBooking} className="btn btn-primary">
          Book a 30-minute content audit
        </button>
      </div>

    </div>
  );
}
