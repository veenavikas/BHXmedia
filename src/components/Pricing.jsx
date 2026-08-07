import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRICING_TIERS } from '../data/siteData';
import { Check, Sparkles, PhoneCall, Zap, Sliders, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

export default function Pricing({ onOpenBooking, onCursorEnter, onCursorLeave }) {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [vlogCount, setVlogCount] = useState(4);
  const [reelsCount, setReelsCount] = useState(12);

  // Dynamic Calculation Logic for Package Customizer
  const calculatedPrice = (vlogCount * 350) + (reelsCount * 85);
  const discountMultiplier = billingCycle === 'monthly' ? 0.85 : 1;
  const finalCalculatedPrice = Math.round(calculatedPrice * discountMultiplier);

  const calculatedRetention = Math.min(120 + (vlogCount * 12) + (reelsCount * 2), 260);
  const slaDays = vlogCount > 8 || reelsCount > 20 ? '2 Business Days' : '3 Business Days';

  return (
    <section id="pricing" className="section section-bg-alt">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}
        >
          <span className="badge badge-accent" style={{ marginBottom: '0.85rem' }}>
            Transparent Creator Investment
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.04em' }}>
            Interactive Studio <span className="editorial-accent">Package Builder</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Customize your monthly video output volume using our interactive calculator below or choose from our popular creator plans.
          </p>

          {/* Billing Cycle Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              padding: '0.3rem',
              marginTop: '1.5rem',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '0.65rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                backgroundColor: billingCycle === 'monthly' ? 'var(--accent-primary)' : 'transparent',
                color: billingCycle === 'monthly' ? '#FFFFFF' : 'var(--text-primary)',
              }}
            >
              Monthly Retainer (Save 15%)
            </button>
            <button
              onClick={() => setBillingCycle('oneTime')}
              style={{
                padding: '0.65rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                backgroundColor: billingCycle === 'oneTime' ? 'var(--accent-primary)' : 'transparent',
                color: billingCycle === 'oneTime' ? '#FFFFFF' : 'var(--text-primary)',
              }}
            >
              One-Time Project
            </button>
          </div>
        </motion.div>

        {/* INTERACTIVE VIDEO PACKAGE CALCULATOR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-light"
          style={{
            padding: '2.75rem 2.25rem',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            border: '2px solid var(--accent-primary)',
            boxShadow: '0 20px 50px rgba(255, 77, 46, 0.12)',
            maxWidth: '1000px',
            margin: '0 auto 5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sliders size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                Build Your Custom Production Retainer
              </h3>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Adjust video volume to see real-time turnaround SLAs & retention forecasts
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '2.25rem' }}>
            {/* Slider 1: Long Form Vlogs */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Long-Form Vlogs / Videos:
                </label>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                  {vlogCount} / mo
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="16"
                value={vlogCount}
                onChange={(e) => setVlogCount(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-primary)',
                  cursor: 'pointer',
                  height: '8px',
                }}
              />
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Includes pacing, sound design, LUT grading & 4K render
              </div>
            </div>

            {/* Slider 2: Shorts / Reels */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Shorts / Reels / TikToks:
                </label>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                  {reelsCount} / mo
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="40"
                step="2"
                value={reelsCount}
                onChange={(e) => setReelsCount(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-primary)',
                  cursor: 'pointer',
                  height: '8px',
                }}
              />
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Includes kinetic subtitles, audio hooks & 9:16 vertical crop
              </div>
            </div>
          </div>

          {/* Calculator Output Metrics Bar */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '1.75rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Calculated Monthly Investment
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>
                ${finalCalculatedPrice.toLocaleString()}
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>/mo</span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Clock size={14} /> Turnaround SLA
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {slaDays}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <TrendingUp size={14} style={{ color: 'var(--accent-primary)' }} /> Projected Watch-Time Boost
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                +{calculatedRetention}% Increase
              </div>
            </div>

            <button onClick={onOpenBooking} className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>
              <PhoneCall size={18} />
              <span>Lock In Custom Retainer</span>
            </button>
          </div>
        </motion.div>

        {/* 3 Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular;
            const priceVal = billingCycle === 'monthly' ? tier.monthlyPrice : tier.oneTimePrice;

            return (
              <div
                key={tier.id}
                className="card-light"
                style={{
                  padding: '2.5rem 2rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  border: isPopular ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  boxShadow: isPopular ? '0 15px 40px rgba(255, 77, 46, 0.18)' : 'var(--shadow-subtle)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--accent-primary)',
                      color: '#FFFFFF',
                      padding: '0.35rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      boxShadow: '0 4px 14px rgba(255, 77, 46, 0.35)',
                    }}
                  >
                    <Zap size={14} fill="white" />
                    MOST POPULAR CREATOR CHOICE
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {tier.name}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.5, minHeight: '42px' }}>
                    {tier.tagline}
                  </p>

                  <div style={{ marginBottom: '2rem', paddingBottom: '1.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                    {typeof priceVal === 'number' ? (
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>$</span>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '3.25rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1, letterSpacing: '-0.04em' }}>
                          {priceVal.toLocaleString()}
                        </span>
                        <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                          /{billingCycle === 'monthly' ? 'mo' : 'project'}
                        </span>
                      </div>
                    ) : (
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {priceVal}
                      </span>
                    )}
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {tier.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-light)',
                            color: 'var(--accent-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenBooking}
                  className={isPopular ? 'btn btn-primary btn-lg' : 'btn btn-secondary btn-lg'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <PhoneCall size={18} />
                  <span>{tier.cta}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
