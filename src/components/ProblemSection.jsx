import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';
import AnimatedText from './AnimatedText';

export default function ProblemSection() {
  const { problem } = SITE_CONTENT;

  return (
    <section style={{ padding: '64px 0', borderBottom: '1px solid var(--hairline)' }}>
      <div className="wrap">
        
        <div className="mono sec-header">
          <span className="num">01</span> {problem.eyebrow}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'baseline' }}>
          <div>
            <h2 className="section-title">
              {problem.title}<span className="stop">.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {problem.body.map((paragraph, index) => (
              <AnimatedText 
                key={index} 
                text={paragraph}
                style={{ fontSize: '17px', lineHeight: '1.65', color: '#2F2F31' }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
