import React from 'react';

export default function FinalSection({ onOpenBooking }) {
  return (
    <section className="final">
      <div className="ring"></div>
      <div className="wrap">
        <div className="lab ondark rv">Let's talk</div>
        <h2 className="rv">Let's build ROI with your content.</h2>
        <p className="rv">Book a 30-minute call. No pitch, just a straight conversation about what you need and how I can help.</p>
        <button className="btn btn-gold rv" onClick={onOpenBooking}>
          Book a call <span className="arw">&rarr;</span>
        </button>
        <div className="contact rv">
          <a href="mailto:bharath@bhxmedia.com">bharath@bhxmedia.com</a>
          &nbsp;·&nbsp;
          <a href="https://www.linkedin.com/in/bharathcs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
