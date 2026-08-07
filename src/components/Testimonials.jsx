import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/siteData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-accent" style={{ marginBottom: '0.85rem' }}>
            Social Proof
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Trusted by Creators & Brands You Watch
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Hear how our editing and video production pipelines turned casual viewers into loyal channel subscribers and paying customers.
          </p>
        </div>

        {/* Testimonials Carousel & Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="card-light"
              style={{
                padding: '2.25rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem', color: '#FFB800' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#FFB800" stroke="#FFB800" />
                    ))}
                  </div>
                  <Quote size={28} style={{ color: 'var(--accent-light)', fill: 'var(--accent-light)' }} />
                </div>

                {/* Quote Text */}
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  "{t.quote}"
                </p>
              </div>

              <div>
                {/* Result Pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: 'var(--accent-light)',
                    color: 'var(--accent-primary)',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    marginBottom: '1.25rem',
                  }}
                >
                  <CheckCircle size={14} />
                  <span>{t.result}</span>
                </div>

                {/* Author Info Strip */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <img
                    src={t.photo}
                    alt={t.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-primary)' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>{t.name}</h4>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {t.role} • <span style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>{t.followers}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
