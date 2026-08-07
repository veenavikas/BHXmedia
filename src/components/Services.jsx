import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/siteData';
import ServiceModal from './ServiceModal';
import { Video, Sparkles, Smartphone, Mic, Camera, Sliders, ArrowRight, Check } from 'lucide-react';

const iconMap = {
  Video: Video,
  Sparkles: Sparkles,
  Smartphone: Smartphone,
  Mic: Mic,
  Camera: Camera,
  Sliders: Sliders,
};

export default function Services({ onOpenBooking }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section section-bg-alt">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem' }}>
          <span className="badge badge-accent" style={{ marginBottom: '0.85rem' }}>
            Capabilities & Deliverables
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Our Studio Service Suite
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Modular creative production and retention-engineered post-production services tailored for content creators, podcasts, and digital-first brands.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || Video;
            return (
              <div
                key={service.id}
                className="card-light"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  position: 'relative',
                }}
              >
                <div>
                  {/* Service Editorial Code & Price Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1rem',
                          fontWeight: 800,
                          color: 'var(--accent-primary)',
                          backgroundColor: 'var(--accent-light)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                        }}
                      >
                        [{service.code}]
                      </span>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        <IconComponent size={22} />
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '0.35rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {service.price}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.55 }}>
                    {service.subtitle}
                  </p>

                  {/* Feature Bullets */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <Check size={14} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="btn btn-outline"
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    padding: '0.75rem 1.25rem',
                  }}
                >
                  <span>Explore Service Scope</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenBooking={onOpenBooking}
        />
      )}
    </section>
  );
}
