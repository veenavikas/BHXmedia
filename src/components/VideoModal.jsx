import React from 'react';
import { X, Play, Eye, CheckCircle2, Award, Sparkles, PhoneCall } from 'lucide-react';

export default function VideoModal({ item, onClose, onOpenBooking }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '950px', padding: '0' }}>
        {/* Video Player Header Frame */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: '#000000' }}>
          <video
            controls
            autoPlay
            src={item.videoUrl}
            poster={item.thumbnail}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Details Section */}
        <div style={{ padding: '2.25rem' }}>
          {/* Header & Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="badge badge-accent">{item.category}</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>• {item.client}</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Eye size={14} /> {item.views} Views
            </span>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            {item.title}
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {item.summary}
          </p>

          {/* Results & Key Performance Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {/* Results Box */}
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Award size={16} /> Key Metrics Achieved
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {item.results.map((res, idx) => (
                  <li key={idx} style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)' }} />
                    {res}
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables Box */}
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} /> Scope Delivered
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {item.deliverables.map((del, idx) => (
                  <li key={idx} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent-primary)' }} />
                    {del}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Want similar retention results for your channel?</span>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={onClose} className="btn btn-secondary">Close Case Study</button>
              <button onClick={() => { onClose(); onOpenBooking(); }} className="btn btn-primary">
                <PhoneCall size={16} />
                <span>Book a Call For This Style</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
