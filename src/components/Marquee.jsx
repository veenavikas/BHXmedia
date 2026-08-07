import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Marquee() {
  const row1 = [
    "VLOGGING PRODUCTION",
    "REELS & SHORTS",
    "PODCAST EDITING",
    "BRAND SHOOTS",
    "RETENTION PACING",
  ];

  const row2 = [
    "COLOR GRADING",
    "SOUND DESIGN",
    "HIGH-CTR THUMBNAILS",
    "VIRAL REELS",
    "CINEMATIC DIRECTING",
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '1.25rem 0',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
      }}
    >
      {/* Top Row Marquee (Scrolls Left) */}
      <div className="animate-marquee-left">
        {[...row1, ...row1, ...row1, ...row1].map((text, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2rem',
              paddingRight: '2rem',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.95rem',
                letterSpacing: '0.08em',
                color: idx % 2 === 0 ? 'var(--accent-primary)' : 'var(--text-primary)',
              }}
            >
              {text}
            </span>
            <Sparkles size={12} style={{ color: 'var(--text-muted)' }} />
          </div>
        ))}
      </div>

      {/* Bottom Row Marquee (Scrolls Right) */}
      <div className="animate-marquee-right">
        {[...row2, ...row2, ...row2, ...row2].map((text, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2rem',
              paddingRight: '2rem',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.95rem',
                letterSpacing: '0.08em',
                color: idx % 3 === 0 ? 'var(--accent-primary)' : 'var(--text-primary)',
              }}
            >
              {text}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>///</span>
          </div>
        ))}
      </div>
    </div>
  );
}
