import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../data/siteContent';
import Magnet from './Magnet';

export default function Hero({ onOpenBooking }) {
  const { hero } = SITE_CONTENT;

  return (
    <section style={{ paddingTop: '110px', paddingBottom: '60px', borderBottom: '1px solid var(--hairline)', overflow: 'hidden', position: 'relative' }}>
      <div className="wrap">
        
        {/* Eyebrow Label FadeIn */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="mono" 
          style={{ marginBottom: '20px' }}
        >
          {hero.eyebrow}
        </motion.div>

        {/* Main Hero Display Headline FadeIn */}
        <div style={{ overflow: 'hidden', marginBottom: '24px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-headline hero-heading-gradient"
          >
            AI made content cheap. Judgment makes it count<span className="stop">.</span>
          </motion.h1>
        </div>

        {/* Hero Grid with Subhead, Portrait Frame & Bottom Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'end', marginTop: '32px' }}>
          
          {/* Left Positioning Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="body-text" style={{ fontSize: '17px', lineHeight: '1.65', color: '#2F2F31', marginBottom: '28px', maxWidth: '580px' }}>
              {hero.subhead}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Magnet strength={20}>
                <button 
                  onClick={onOpenBooking} 
                  className="btn btn-primary"
                  style={{ fontSize: '14px', padding: '14px 28px' }}
                >
                  {hero.cta}
                </button>
              </Magnet>

              <span className="mono" style={{ fontSize: '10px', color: 'var(--grey)' }}>
                20+ YEARS OPERATOR EXPERIENCE
              </span>
            </div>
          </motion.div>

          {/* Right Hero Interactive Media Frame with Magnetic Mouse Follow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Magnet strength={15} style={{ width: '100%', maxWidth: '420px' }}>
              <div 
                className="editorial-card" 
                style={{ 
                  background: 'linear-gradient(150deg, #1C1C1F 0%, #141416 100%)', 
                  color: '#F6F4EF', 
                  padding: '24px', 
                  borderRadius: '6px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span className="mono" style={{ color: 'var(--red)', fontSize: '10px' }}>BHX PROOF BADGE</span>
                  <span className="mono" style={{ color: 'rgba(246, 244, 239, 0.5)', fontSize: '10px' }}>SOLE PROPRIETOR</span>
                </div>

                <div className="serif" style={{ fontSize: '24px', fontWeight: 500, marginBottom: '12px', lineHeight: '1.2' }}>
                  Bharath C.S.
                </div>

                <p className="body-text" style={{ fontSize: '13px', color: 'rgba(246, 244, 239, 0.75)', lineHeight: '1.5', marginBottom: '20px' }}>
                  "The scarce skill is no longer making content. It is knowing what to make, whether it is good, and whether it converts."
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="mono" style={{ fontSize: '9px', background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '2px', color: '#F6F4EF' }}>Amazon India</span>
                  <span className="mono" style={{ fontSize: '9px', background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '2px', color: '#F6F4EF' }}>58+ Micro-Dramas</span>
                  <span className="mono" style={{ fontSize: '9px', background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '2px', color: '#F6F4EF' }}>50k+ Assets</span>
                </div>
              </div>
            </Magnet>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
