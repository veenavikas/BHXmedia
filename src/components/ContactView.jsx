import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactView({ onOpenBooking }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Vlogging Production',
    budget: '$2,500 – $5,000',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '3rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
          <span className="badge badge-accent" style={{ marginBottom: '0.85rem' }}>
            Get in Touch
          </span>
          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.8rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Start Your Next Video Project
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Ready to upgrade your editing pipeline or schedule an on-location shoot? Send us a message below or book a calendar call directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Direct Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div className="card-light" style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--accent-primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Calendar size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>Instant Call Booking</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Skip the email back-and-forth</span>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                Select a 20-minute video slot directly on our team calendar for immediate onboarding.
              </p>

              <button onClick={onOpenBooking} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Open Calendar Picker</span>
              </button>
            </div>

            {/* Direct Contact Links */}
            <div className="card-light" style={{ padding: '2rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Direct Studio Contacts
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Inquiries Email</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>hello@bhxmedia.com</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Response SLA</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Under 4 Business Hours</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Studio Hubs</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Los Angeles, CA • London, UK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-light" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <CheckCircle size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Message Received!
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Thanks <strong>{formData.name}</strong>. Our senior producer will review your brief and reply to <strong>{formData.email}</strong> within 4 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                  Send a Project Inquiry
                </h3>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name or channel name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      outline: 'none',
                      fontSize: '0.95rem',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      outline: 'none',
                      fontSize: '0.95rem',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                      Primary Service
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="Vlogging Production">Vlogging Production</option>
                      <option value="Shorts & Reels Editing">Shorts & Reels Editing</option>
                      <option value="Podcast Production">Podcast Production</option>
                      <option value="Brand & Commercial Shoot">Brand & Commercial Shoot</option>
                      <option value="Post-Production / Color / Sound">Post-Production / Color / Sound</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                      Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="$1,500 – $2,500">$1,500 – $2,500</option>
                      <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                      <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                      <option value="$10,000+ Custom">$10,000+ Custom</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                    Project Brief / Notes *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your channel goals, upload frequency, or footage details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      outline: 'none',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={18} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
