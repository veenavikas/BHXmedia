import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';

export default function EngagementsSection({ onOpenBooking }) {
  const { engagements } = SITE_CONTENT;

  return (
    <section style={{ padding: '64px 0', borderBottom: '1px solid var(--hairline)' }}>
      <div className="wrap">
        
        <div className="mono sec-header">
          <span className="num">03</span> {engagements.eyebrow}
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>
            {engagements.title}<span className="stop">.</span>
          </h2>
          <p className="body-text" style={{ color: 'var(--grey)' }}>
            {engagements.subtitle}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {engagements.models.map((model) => (
            <div key={model.num} className="editorial-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="mono" style={{ color: 'var(--red)', marginBottom: '12px' }}>
                  {model.num}
                </div>
                <h3 className="card-title" style={{ marginBottom: '12px' }}>
                  {model.title}
                </h3>
                <p className="body-text" style={{ fontSize: '15px', color: '#2F2F31' }}>
                  {model.desc}
                </p>
              </div>

              <div style={{ marginTop: '24px', pt: '16px', borderTop: '1px solid var(--hairline)' }}>
                <button 
                  onClick={onOpenBooking} 
                  className="btn btn-ghost" 
                  style={{ width: '100%', fontSize: '12px' }}
                >
                  Discuss this engagement
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
