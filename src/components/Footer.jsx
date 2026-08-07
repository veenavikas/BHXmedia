import React, { useState } from 'react';
import { Video, Send, Heart, ArrowRight } from 'lucide-react';

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Footer({ setActiveView, onOpenBooking }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Video size={20} strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem' }}>
                BHX<span style={{ color: 'var(--accent-primary)' }}>.</span>MEDIA
              </span>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The high-energy video partner for creators and brands. Vlogging production, Reels/Shorts, podcasts, and commercial shoots engineered for performance.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: YoutubeIcon, label: 'YouTube', href: '#' },
                { icon: InstagramIcon, label: 'Instagram', href: '#' },
                { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  aria-label={soc.label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  <soc.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', view: 'home' },
                { label: 'Services', view: 'services' },
                { label: 'Work & Portfolio', view: 'work' },
                { label: 'Pricing Plans', view: 'pricing' },
                { label: 'About Studio', view: 'about' },
                { label: 'Book a Call', action: onOpenBooking },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (link.action) {
                        link.action();
                      } else {
                        setActiveView(link.view);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Vlogging Production', 'Shorts & Reels Editing', 'Podcast Production', 'Brand Shoots', 'Color & Sound Post'].map((serv, idx) => (
                <li key={idx} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  {serv}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup Form */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Retention Digest
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
              Get our monthly breakdown of video retention strategies, YouTube algorithm updates, and edit breakdowns.
            </p>

            {subscribed ? (
              <div style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem', fontWeight: 600 }}>
                ✓ You’re subscribed to the digest!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-subtle)',
                    outline: 'none',
                    fontSize: '0.88rem',
                    backgroundColor: '#FFFFFF',
                  }}
                />
                <button type="submit" className="btn btn-primary btn-sm" style={{ padding: '0.65rem 1rem' }}>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} BHX Media Agency Ltd. All rights reserved. Light Mode Strict Visual Standard.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
