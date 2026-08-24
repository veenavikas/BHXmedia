import React from 'react';

export default function RatesSection({ onOpenBooking }) {
  return (
    <section id="rates" className="rates">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="lab gold">How to work with me</div>
          <h2>Start with a free call. If it's a fit, here's how engagements work.</h2>
          <p>No long pitch. We talk, and if I can help, we pick the right way to work together.</p>
        </div>
        <div className="grid-rates">
          <div className="rate feat rv">
            <h3>Intro call</h3>
            <div className="price">Free <small>· 30 min</small></div>
            <div className="gap12"></div>
            <p>A straight conversation about your goals and whether I'm the right person to help.</p>
            <button className="mini" onClick={onOpenBooking} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
              Book a call &rarr;
            </button>
          </div>
          <div className="rate rv">
            <h3>Content strategy</h3>
            <div className="price">From ₹75,000</div>
            <div className="gap12"></div>
            <p>A focused engagement to set your content direction and give you a clear plan to act on.</p>
          </div>
          <div className="rate rv">
            <h3>Fractional content lead</h3>
            <div className="price">From ₹1,50,000</div>
            <div className="permo">per month</div>
            <p>Ongoing senior guidance and oversight, so your team ships better content, consistently.</p>
          </div>
          <div className="rate rv">
            <h3>Production project</h3>
            <div className="price">On quote</div>
            <div className="gap12"></div>
            <p>Concept to finished film or slate, priced per project once we've scoped what you need.</p>
          </div>
        </div>
        <p className="note">Indicative pricing. Final rates depend on scope.</p>
      </div>
    </section>
  );
}
