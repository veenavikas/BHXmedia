import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, Flame } from 'lucide-react';

export default function CtaBanner({ onOpenBooking }) {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)', padding: '5rem 0' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--accent-light)',
            border: '2px solid rgba(255, 77, 46, 0.25)',
            borderRadius: 'var(--radius-xl)',
            padding: '4rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(255, 77, 46, 0.12)',
          }}
        >
          {/* Decorative Subtle Accent Blobs */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 77, 46, 0.08)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
            <div
              className="badge badge-accent"
              style={{ marginBottom: '1.25rem', backgroundColor: '#FFFFFF', border: '1px solid var(--accent-primary)' }}
            >
              <Flame size={14} fill="var(--accent-primary)" />
              <span>Let’s Build Something Iconic</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Ready to make your next video <span style={{ color: 'var(--accent-primary)' }}>hit different?</span>
            </h2>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2.25rem', lineHeight: 1.6 }}>
              Stop wasting hours editing or settling for dry corporate videos. Partner with a studio that knows how to capture attention and grow channels.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn btn-primary btn-lg" style={{ boxShadow: '0 6px 20px rgba(255, 77, 46, 0.4)' }}>
                <PhoneCall size={20} />
                <span>Book a Free 20-Min Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
