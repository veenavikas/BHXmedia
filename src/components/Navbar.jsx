import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ activeView, setActiveView, onOpenBooking, onCursorEnter, onCursorLeave }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: 'home', hash: '#home' },
    { label: 'Services', view: 'services', hash: '#services' },
    { label: 'Campaigns', view: 'work', hash: '#work' },
    { label: 'Packages', view: 'pricing', hash: '#pricing' },
    { label: 'Agency', view: 'about', hash: '#about' },
    { label: 'Contact', view: 'contact', hash: '#contact' },
  ];

  const handleNavClick = (view, hash) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    
    if (view === 'home' || hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: '12px',
        left: 0,
        right: 0,
        zIndex: 900,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Floating Centered Glass Pill Container */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '1100px',
          height: '64px',
          borderRadius: '9999px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-subtle)',
          boxShadow: scrolled ? '0 12px 35px rgba(0, 0, 0, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.25rem',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onMouseEnter={onCursorEnter}
          onMouseLeave={onCursorLeave}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home', '#home');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 14px rgba(255, 77, 46, 0.35)',
            }}
          >
            <Video size={18} strokeWidth={2.5} />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.04em', lineHeight: 1 }}>
            BHX<span style={{ color: 'var(--accent-primary)' }}>.</span>MEDIA
          </span>
        </a>

        {/* Desktop Nav Links with Framer Motion Gliding Pill */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-full)',
              padding: '0.25rem',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeView === link.view;
              return (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view, link.hash)}
                  onMouseEnter={onCursorEnter}
                  onMouseLeave={onCursorLeave}
                  style={{
                    position: 'relative',
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                    cursor: 'pointer',
                    padding: '0.45rem 1.15rem',
                    borderRadius: 'var(--radius-full)',
                    zIndex: 1,
                    transition: 'color 0.25s ease',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'var(--accent-primary)',
                        borderRadius: 'var(--radius-full)',
                        zIndex: -1,
                        boxShadow: '0 4px 14px rgba(255, 77, 46, 0.35)',
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Primary Campaign Call CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <button
            onClick={onOpenBooking}
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
            className="btn btn-primary"
            style={{
              padding: '0.6rem 1.35rem',
              fontSize: '0.85rem',
            }}
          >
            <span>Start a Campaign</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Full Screen Animated Mobile Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '84px',
              left: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(24px)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              zIndex: 999,
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view, link.hash)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.6rem',
                  letterSpacing: '-0.03em',
                  color: activeView === link.view ? 'var(--accent-primary)' : 'var(--text-primary)',
                  padding: '0.4rem 0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.label}</span>
                {activeView === link.view && <span style={{ fontSize: '1rem' }}>●</span>}
              </button>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <span>Start a Campaign</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
