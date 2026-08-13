import React, { useState } from 'react';
import Magnet from './Magnet';

export default function Navbar({ activeView, setActiveView, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (viewId) => {
    setActiveView(viewId);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Portfolio' },
    { id: 'blog', label: 'Journal' },
    { id: 'about', label: 'Proof' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="floating-nav-container">
      
      {/* Floating Centered Glass Pill Navbar Bar */}
      <div className="floating-nav-pill">
        
        {/* Brand Logo & Subtitle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button 
            onClick={() => handleNavClick('home')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
            aria-label="BHX Media Home"
          >
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '28px', letterSpacing: '-0.01em', color: 'var(--ink)' }}>
              BHX<span className="stop">.</span>
            </span>
          </button>
          <span className="mono brand-sub" style={{ fontSize: '11px', color: 'var(--grey)', display: 'none', letterSpacing: '0.12em' }}>
            Better. Human. eXecution.
          </span>
        </div>

        {/* Focused Desktop Navigation Links with Active Pill Highlights */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          {navLinks.map(link => {
            const isActive = activeView === link.id;
            return (
              <button 
                key={link.id}
                onClick={() => handleNavClick(link.id)} 
                style={{ 
                  background: isActive ? 'var(--ink)' : 'transparent', 
                  color: isActive ? 'var(--paper)' : 'var(--ink)',
                  border: 'none', 
                  cursor: 'pointer', 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '14px', 
                  fontWeight: isActive ? 600 : 500, 
                  padding: '6px 14px',
                  borderRadius: '999px',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {isActive && <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--red)' }} />}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Magnet strength={12}>
            <button 
              onClick={onOpenBooking} 
              className="btn btn-primary"
              style={{ fontSize: '13px', padding: '10px 18px', fontWeight: 600 }}
            >
              Book a 30-min audit
            </button>
          </Magnet>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: '1px solid var(--hairline)', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', display: 'none' }}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
          >
            <span className="mono" style={{ fontSize: '11px', fontWeight: 600 }}>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{ marginTop: '8px', padding: '20px', backgroundColor: 'rgba(246, 244, 239, 0.96)', backdropFilter: 'blur(16px)', border: '1px solid var(--hairline)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '14px', boxShadow: '0 12px 36px rgba(0,0,0,0.12)' }}>
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => handleNavClick(link.id)} 
              style={{ 
                textAlign: 'left', 
                background: 'none', 
                border: 'none', 
                fontSize: '16px', 
                fontWeight: activeView === link.id ? 600 : 400,
                color: activeView === link.id ? 'var(--red)' : 'var(--ink)'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .brand-sub { display: inline !important; }
        }
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
