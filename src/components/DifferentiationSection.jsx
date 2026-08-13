import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';

export default function DifferentiationSection() {
  const { differentiation } = SITE_CONTENT;

  return (
    <section style={{ padding: '64px 0', borderBottom: '1px solid var(--hairline)' }}>
      <div className="wrap">
        
        <div className="mono sec-header">
          <span className="num">06</span> {differentiation.eyebrow}
        </div>

        <div style={{ maxWidth: '880px' }}>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>
            {differentiation.title}<span className="stop">.</span>
          </h2>

          <div style={{ background: '#FFFFFF', border: '1px solid var(--hairline)', padding: '32px 28px', borderRadius: '2px' }}>
            <p className="serif" style={{ fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: '1.3', color: 'var(--ink)' }}>
              "{differentiation.quote}"<span className="stop">.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
