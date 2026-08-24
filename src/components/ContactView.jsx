import React from 'react';
import { SITE_DATA } from '../data/siteData';
import FAQSection from './FAQSection';

export default function ContactView({ onOpenBooking }) {
  const { brand } = SITE_DATA;

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="wrap">
        
        {/* Header */}
        <div className="sec-head rv in" style={{ maxWidth: '78ch', marginBottom: '48px' }}>
          <div className="lab gold">Contact — Let's Talk</div>
          <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', margin: '16px 0 20px', fontWeight: 600 }}>
            Start with a free 30-minute call.
          </h1>
          <p style={{ fontSize: '19px', color: 'var(--grey)', lineHeight: '1.6' }}>
            No long pitch. We talk through your goals, and if Bharath C.S. can help, we pick the right way to work together.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '64px' }}>
          
          <div className="rate feat rv in" style={{ padding: '32px' }}>
            <span className="lab gold">FASTEST RESPONSE</span>
            <h3 style={{ fontSize: '24px', margin: '12px 0 6px' }}>Book a Call</h3>
            <p style={{ color: 'var(--grey)', fontSize: '15px', marginBottom: '20px' }}>
              Pick a convenient time directly on Calendly for a 30-minute introductory conversation.
            </p>
            <button className="btn btn-gold" onClick={onOpenBooking}>
              Book 30-min Call &rarr;
            </button>
          </div>

          <div className="rate rv in" style={{ padding: '32px' }}>
            <span className="lab gold">DIRECT EMAIL</span>
            <h3 style={{ fontSize: '24px', margin: '12px 0 6px' }}>Send an Email</h3>
            <p style={{ color: 'var(--grey)', fontSize: '15px', marginBottom: '20px' }}>
              Prefer to send your brief or project inquiry via email? Reach Bharath directly.
            </p>
            <a href={`mailto:${brand.email}?subject=Inquiry%20for%20BHX%20Media`} className="btn btn-line" style={{ display: 'inline-flex' }}>
              {brand.email} &rarr;
            </a>
          </div>

          <div className="rate rv in" style={{ padding: '32px' }}>
            <span className="lab gold">LINKEDIN</span>
            <h3 style={{ fontSize: '24px', margin: '12px 0 6px' }}>Connect on LinkedIn</h3>
            <p style={{ color: 'var(--grey)', fontSize: '15px', marginBottom: '20px' }}>
              View Bharath C.S.'s professional trajectory and background.
            </p>
            <a href={brand.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-line" style={{ display: 'inline-flex' }}>
              View LinkedIn Profile &rarr;
            </a>
          </div>

        </div>

        {/* FAQ Section */}
        <FAQSection />

      </div>
    </div>
  );
}
