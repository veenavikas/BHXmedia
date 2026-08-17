import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SITE_CONTENT } from '../data/siteContent';

const EMAILJS_SERVICE_ID = 'service_wxe35ln';
const EMAILJS_TEMPLATE_ID = 'template_wj7l5d4';
const EMAILJS_PUBLIC_KEY = 'iNvbvLAiTusygW_J6';

export default function ContactView({ onOpenBooking }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    company: '', 
    phone: '', 
    email: '', 
    message: '', 
    honeypot: '' 
  });
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

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      user_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,
      company: formData.company || 'N/A',
      phone: formData.phone || 'N/A',
      message: formData.message
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', company: '', phone: '', email: '', message: '', honeypot: '' });
    } catch (err) {
      console.error('EmailJS error, attempting mailto fallback:', err);
      const mailBody = `Name: ${formData.name}\nCompany: ${formData.company || 'N/A'}\nPhone: ${formData.phone || 'N/A'}\nEmail: ${formData.email}\n\nGoals / Message:\n${formData.message}`;
      window.location.href = `mailto:bharath@bhxmedia.com?subject=Contact%20from%20${encodeURIComponent(formData.name)}%20(${encodeURIComponent(formData.company || 'Direct')})&body=${encodeURIComponent(mailBody)}`;
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
          <button onClick={onOpenBooking} className="btn btn-primary" style={{ width: '100%', padding: '14px', marginBottom: '12px' }}>
            Open Booking Calendar →
          </button>
          <div style={{ textAlign: 'center' }}>
            <a 
              href={SITE_CONTENT.brand.calendlyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mono" 
              style={{ fontSize: '12px', color: 'var(--grey)', textDecoration: 'underline' }}
            >
              Or open directly on Calendly.com ↗
            </a>
          </div>
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
                <label className="form-label">Your Name *</label>
                <input 
                  type="text" 
                  className="form-input"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Bharath C.S."
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Company / Brand</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
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
                <label className="form-label">Content Goals & Challenges *</label>
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
