import React from 'react';

export default function OutputSection() {
  return (
    <section className="output">
      <div className="wrap">
        <div className="rv">
          <div className="lab gold">The output</div>
          <div className="sec-head" style={{ marginTop: '12px', marginBottom: 0 }}>
            <h2 style={{ margin: 0 }}>Faster, better cost, higher quality. You get all three.</h2>
          </div>
        </div>
        <div className="grid-out">
          <div className="otile rv">
            <div className="ic">
              <svg width="30" height="30" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M8 34 A16 16 0 0 1 40 34" fill="none" stroke="#C9A24E" strokeWidth="3.2" strokeLinecap="round"/>
                <line x1="24" y1="34" x2="33" y2="21" stroke="#141416" strokeWidth="3.2" strokeLinecap="round"/>
                <circle cx="24" cy="34" r="3.4" fill="#141416"/>
              </svg>
            </div>
            <h3>Speed</h3>
            <p>The right specialist starts producing on day one. No ramp-up, no learning your category on your clock.</p>
          </div>
          <div className="otile rv">
            <div className="ic">
              <svg width="30" height="30" viewBox="0 0 48 48" aria-hidden="true">
                <circle cx="24" cy="22" r="13" fill="none" stroke="#C9A24E" strokeWidth="3.2"/>
                <path d="M24 15 v11 M19 21 l5 5 5 -5" fill="none" stroke="#141416" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Better cost</h3>
            <p>You pay for a fit, not for a team figuring it out. Right talent, right scope, less waste.</p>
          </div>
          <div className="otile rv">
            <div className="ic">
              <svg width="30" height="30" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M24 8 l4.9 10.6 11.6 1 -8.8 7.7 2.7 11.4 -10.4-6.2 -10.4 6.2 2.7 -11.4 -8.8 -7.7 11.6 -1 z" fill="#C9A24E"/>
              </svg>
            </div>
            <h3>Quality</h3>
            <p>A specialist who has done exactly this before sets a higher bar than any generalist can reach.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
