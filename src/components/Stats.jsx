import React from 'react';
import { STATS_DATA } from '../data/siteData';
import { Award, TrendingUp, Users, Video } from 'lucide-react';

const icons = [Users, TrendingUp, Award, Video];

export default function Stats() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '4.5rem 0' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            textAlign: 'center',
          }}
        >
          {STATS_DATA.map((stat, idx) => {
            const IconComp = icons[idx] || Users;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '1.5rem 1rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--accent-light)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <IconComp size={24} strokeWidth={2.2} />
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                  }}
                >
                  {stat.value}
                  <span style={{ color: 'var(--accent-primary)' }}>{stat.suffix}</span>
                </div>

                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
