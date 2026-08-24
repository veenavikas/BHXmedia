import React from 'react';
import { SITE_DATA } from '../data/siteData';

export default function AboutView({ onOpenBooking }) {
  const { about } = SITE_DATA;

  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="why-grid">
          <div className="rv in">
            <span className="mono eyebrow">{about.eyebrow}</span>
            <p className="why-quote">
              Anyone can make content now. The rare skill is knowing <span className="em">what is worth making</span>, and whether it is good enough to ship.
            </p>
            <p className="why-cite">{about.cite}</p>
          </div>

          <div className="proof-list rv in">
            {about.proofList.map((item, idx) => (
              <div key={idx} className="proof-row">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="numbers rv in">
          {about.numbers.map((num, idx) => (
            <div key={idx} className="num">
              <b>{num.value}</b>
              <span>{num.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className="rv in"
          style={{
            marginTop: '64px',
            background: 'var(--ink-2)',
            border: '1px solid var(--line)',
            borderRadius: '16px',
            padding: '48px 36px',
            textAlign: 'center'
          }}
        >
          <span className="mono eyebrow" style={{ justifyContent: 'center' }}>Let's talk</span>
          <h2 style={{ color: 'var(--paper)', fontSize: '32px', fontWeight: 500, marginBottom: '16px' }}>
            Tell me what you are trying to make.
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px' }}>
            A brief, a problem, or a rough idea. I will tell you what is worth making, and how I would do it.
          </p>
          <button className="btn btn-gold" onClick={onOpenBooking}>
            Book a 30-minute call &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
