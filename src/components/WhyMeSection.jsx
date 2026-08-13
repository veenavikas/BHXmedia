import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';

export default function WhyMeSection() {
  const { whyMe } = SITE_CONTENT;

  return (
    <section style={{ padding: '64px 0', borderBottom: '1px solid var(--hairline)' }}>
      <div className="wrap">
        
        <div className="mono sec-header">
          <span className="num">05</span> {whyMe.eyebrow}
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>
            {whyMe.title}<span className="stop">.</span>
          </h2>
          <p className="body-text" style={{ color: 'var(--grey)' }}>
            {whyMe.subtitle}
          </p>
        </div>

        {/* 3 Proof Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {whyMe.proofs.map((proof) => (
            <div key={proof.num} className="editorial-card">
              <div className="mono" style={{ color: 'var(--red)', marginBottom: '12px' }}>
                {proof.num} / {proof.category.toUpperCase()}
              </div>

              <h3 className="card-title" style={{ marginBottom: '16px', fontSize: '20px' }}>
                {proof.category}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {proof.points.map((pt, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: 'var(--red)', fontWeight: 'bold' }}>—</span>
                    <span className="body-text" style={{ fontSize: '14px', color: '#2F2F31' }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
