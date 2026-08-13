import React, { useState } from 'react';
import { SITE_CONTENT } from '../data/siteContent';

export default function ContactView({ onOpenBooking }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot bot protection check
    if (formData.honeypot) {
      console.warn('Spam detected via honeypot.');
      setStatus('success'); // Pretend success to bot
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        // Direct email fallback if backend endpoint isn't live
        window.location.href = `mailto:bharath@bhxmedia.com?subject=Contact%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
        setStatus('success');
      }
    } catch (err) {
      // Direct mailto fallback on fetch error
      window.location.href = `mailto:bharath@bhxmedia.com?subject=Contact%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
      setStatus('success');
    }
  };

  return (
    <div className="wrap" style={{ paddingTop: '110px', paddingBottom: '100px' }}>
      
      <div className="mono sec-header">
        <span className="num">05</span> CONTACT & BOOKING
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>
          Let's discuss your content engine<span className="stop">.</span>
        </h1>
        <p className="body-text" style={{ fontSize: '18px', color: 'var(--grey)', maxWidth: '640px' }}>
          Schedule a 30-minute content audit or send a direct inquiry to discuss fractional content strategy or custom engagements.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
        
        {/* Primary CTA Box: Booking Audit */}
        <div className="editorial-card" style={{ background: '#FFFFFF', padding: '32px' }}>
          <span className="mono" style={{ color: 'var(--red)', marginBottom: '8px', display: 'block' }}>
            PRIMARY ACTION
          </span>
          <h2 className="card-title" style={{ fontSize: '24px', marginBottom: '16px' }}>
            Book a 30-minute content audit
          </h2>
          <p className="body-text" style={{ fontSize: '15px', color: '#2F2F31', marginBottom: '24px' }}>
            Diagnose where your content leaks money, evaluate your AI output quality, and get a clear strategic plan.
          </p>
          <button onClick={onOpenBooking} className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
            Open Booking Calendar →
          </button>
        </div>

        {/* Secondary Contact Form */}
        <div className="editorial-card" style={{ padding: '32px' }}>
          <span className="mono" style={{ color: 'var(--grey)', marginBottom: '8px', display: 'block' }}>
            DIRECT INQUIRY
          </span>
          <h2 className="card-title" style={{ fontSize: '24px', marginBottom: '20px' }}>
            Send a message
          </h2>

          {status === 'success' ? (
            <div style={{ background: 'var(--paper)', border: '1px solid var(--hairline)', padding: '24px', borderRadius: '2px' }}>
              <span className="mono" style={{ color: 'var(--red)', display: 'block', marginBottom: '8px' }}>MESSAGE RECEIVED</span>
              <p className="serif" style={{ fontSize: '20px', fontWeight: 500, color: 'var(--ink)' }}>
                Thank you for reaching out<span className="stop">.</span>
              </p>
              <p className="body-text" style={{ fontSize: '14px', color: 'var(--grey)', marginTop: '8px' }}>
                Bharath will review your message and reply within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* Anti-spam Honeypot */}
              <input 
                type="text" 
                name="b_hp_check" 
                className="honey-field"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex="-1"
                autocomplete="off"
              />

              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input 
                  type="text" 
                  className="form-input"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Bharath C.S."
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message / Goal</label>
                <textarea 
                  className="form-textarea"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your content goals or current challenges..."
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-ghost" 
                style={{ width: '100%', marginTop: '8px' }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Direct Message'}
              </button>
            </form>
          )}

          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--hairline)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="mono">DIRECT CHANNELS</span>
            <a href="mailto:bharath@bhxmedia.com" style={{ color: 'var(--ink)', fontSize: '14px', textDecoration: 'underline' }}>
              bharath@bhxmedia.com
            </a>
            <a href={SITE_CONTENT.brand.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--grey)', fontSize: '14px' }}>
              LinkedIn Profile ↗
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
