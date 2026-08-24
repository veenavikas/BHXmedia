import React from 'react';

export default function Hero({ onOpenBooking }) {
  return (
    <>
      <a id="top"></a>
      <section className="hero">
        <div className="hero-ring r1"></div>
        <div className="hero-ring r2"></div>
        <div className="hero-watermark">BHX.</div>
        <div className="wrap">
          <div className="lab ondark">Content Business Specialist · 30 years</div>
          <h1>
            Building ROI with <span className="g">content</span>, at <span className="g">scale</span>.
          </h1>
          <p className="lede">
            I'm Bharath. I bring the right specialist from a network of the top 1% to your exact job, then run it end to end. Brand films, performance, employer brand, micro-drama, TV and content built to scale a business.
          </p>
          <div className="cta-row">
            <button className="btn btn-gold" onClick={onOpenBooking}>
              Book a call <span className="arw">&rarr;</span>
            </button>
            <a className="btn btn-line-dark" href="#work">
              See the work
            </a>
          </div>
          <div className="trust-line">
            <span className="lab ondark" style={{ color: 'var(--grey-dark)' }}>Work that has shaped</span>
            <span className="tl">Amazon</span>
            <span className="tl">Microsoft</span>
            <span className="tl">Nokia</span>
            <span className="tl">OnePlus</span>
            <span className="tl">Kuku TV</span>
            <span className="tl">Culture Machine</span>
          </div>
        </div>
      </section>
    </>
  );
}
