import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';
import { UploadCloud, Wand2, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';

const iconMap = {
  UploadCloud: UploadCloud,
  Wand2: Wand2,
  CheckCircle2: CheckCircle2,
  Rocket: Rocket,
};

export default function Process({ onOpenBooking }) {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4.5rem' }}>
          <span className="badge badge-accent" style={{ marginBottom: '0.85rem' }}>
            Simple Workflow
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            How We Partner With You
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            A streamlined 4-step pipeline designed for speed, clarity, and zero stress. You record — we handle the heavy lifting.
          </p>
        </div>

        {/* 4 Process Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.75rem',
            position: 'relative',
          }}
        >
          {PROCESS_STEPS.map((step, idx) => {
            const IconComp = iconMap[step.icon] || UploadCloud;
            return (
              <div
                key={step.number}
                className="card-light"
                style={{
                  padding: '2.25rem 1.75rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Step Number Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.25rem',
                      fontWeight: 800,
                      color: 'var(--accent-primary)',
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>

                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Workflow Bottom Callout */}
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            backgroundColor: 'var(--bg-secondary)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 0.25rem 0', color: 'var(--text-primary)' }}>
              Have custom workflow requirements?
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
              We integrate directly into your Dropbox, Google Drive, Notion, or Frame.io workspace.
            </p>
          </div>

          <button onClick={onOpenBooking} className="btn btn-primary">
            <span>Book a Workflow Call</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
