import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SITE_CONTENT } from '../data/siteContent';

function OfferCard({ tier, index, totalTiers }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start']
  });

  const targetScale = 1 - (totalTiers - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, targetScale]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        position: 'sticky',
        top: `${90 + index * 24}px`,
        zIndex: index + 1
      }}
      className="editorial-card"
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '24px', alignItems: 'start' }}>
        <div className="mono" style={{ fontSize: '14px', color: 'var(--red)', paddingTop: '4px' }}>
          {tier.num}
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap', marginBottom: '8px' }}>
            <h3 className="card-title">{tier.name}</h3>
            <span className="mono" style={{ fontSize: '10px', color: 'var(--grey)', border: '1px solid var(--hairline)', padding: '2px 8px', borderRadius: '2px' }}>
              {tier.badge}
            </span>
          </div>

          <p className="body-text" style={{ fontSize: '15px', color: '#2F2F31', marginBottom: tier.capabilities ? '16px' : '0' }}>
            {tier.desc}
          </p>

          {tier.capabilities && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
              {tier.capabilities.map((cap, idx) => (
                <span key={idx} className="mono" style={{ fontSize: '10px', background: 'var(--paper)', border: '1px solid var(--hairline)', padding: '4px 10px', borderRadius: '2px', color: 'var(--ink)' }}>
                  {cap}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function OfferLadder() {
  const { offerLadder } = SITE_CONTENT;

  return (
    <section style={{ padding: '64px 0', borderBottom: '1px solid var(--hairline)' }}>
      <div className="wrap">
        
        <div className="mono sec-header">
          <span className="num">02</span> {offerLadder.eyebrow}
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>
            {offerLadder.title}<span className="stop">.</span>
          </h2>
          <p className="body-text" style={{ color: 'var(--grey)' }}>
            {offerLadder.subtitle}
          </p>
        </div>

        {/* Sticky Stacking Offer Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px', position: 'relative' }}>
          {offerLadder.tiers.map((tier, index) => (
            <OfferCard 
              key={tier.num} 
              tier={tier} 
              index={index} 
              totalTiers={offerLadder.tiers.length} 
            />
          ))}
        </div>

        {/* Underneath Standout Lines */}
        <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p className="serif" style={{ fontSize: '20px', fontWeight: 500, color: 'var(--ink)' }}>
            "{offerLadder.bottomLine1}"<span className="stop">.</span>
          </p>
          <p className="body-text" style={{ fontSize: '14px', color: 'var(--grey)' }}>
            {offerLadder.bottomLine2}
          </p>
        </div>

      </div>
    </section>
  );
}
