import React from 'react';
import { SITE_DATA } from '../data/siteData';

export default function HowWeWorkView({ onOpenBooking }) {
  const { model } = SITE_DATA;

  const phases = [
    {
      num: "01",
      title: "Category & Audit Mapping",
      desc: "We diagnose your existing content performance, eliminate wasted spend, and identify the exact gap between your current output and your growth goals."
    },
    {
      num: "02",
      title: "1% Specialist Matching",
      desc: "Rather than assigning a generalist in-house team, we match the single best practitioner who has executed your exact category (e.g. food cinema, micro-drama, corporate tech, D2C performance)."
    },
    {
      num: "03",
      title: "Production & Senior Quality Gate",
      desc: "Bharath C.S. oversees concept, script, production, and editing end-to-end with 30 years of media judgment, ensuring world-class craft and brand safety."
    },
    {
      num: "04",
      title: "Distribution & Conversion Scale",
      desc: "Final master files are cut down into multi-format assets optimized for TV broadcast, YouTube, performance ad channels, and vertical social feeds."
    }
  ];

  const comparison = [
    {
      feature: "Talent Assignment",
      agency: "Generalist team learning on your budget",
      inhouse: "Fixed staff stuck in routine patterns",
      bhx: "Exact top 1% specialist matched to your job"
    },
    {
      feature: "Senior Oversight",
      agency: "Junior account executives & managers",
      inhouse: "Variable internal management focus",
      bhx: "Direct direction by 30-yr specialist (Bharath C.S.)"
    },
    {
      feature: "Cost Structure",
      agency: "High retainers & agency overheads",
      inhouse: "High fixed salaries, benefits & equipment",
      bhx: "Pay for fit & scope, less waste, zero bloat"
    },
    {
      feature: "Ramp-up Time",
      agency: "3–6 weeks onboarding & briefing",
      inhouse: "Months of hiring & equipment setup",
      bhx: "Day-one production readiness"
    }
  ];

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="wrap">
        
        {/* Header */}
        <div className="sec-head rv in" style={{ maxWidth: '76ch', marginBottom: '56px' }}>
          <div className="lab gold">How I Work — The 1% Specialist Model</div>
          <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', margin: '16px 0 20px', fontWeight: 600 }}>
            One partner. A network of the top 1%.
          </h1>
          <p style={{ fontSize: '19px', color: 'var(--grey)', lineHeight: '1.6' }}>
            I don't force one team to do everything. I bring the right specialist for your exact job. A restaurant film needs someone who has shot restaurants, not a generalist learning on your budget. The right person for the right work is how quality goes up and waste goes down.
          </p>
        </div>

        {/* 4 Phases Process */}
        <div style={{ marginBottom: '64px' }}>
          <div className="lab gold" style={{ marginBottom: '20px' }}>THE 4-PHASE ENGINE</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {phases.map((p) => (
              <div 
                key={p.num}
                className="rv in"
                style={{
                  background: 'var(--paper-card)',
                  border: '1px solid var(--hair)',
                  borderRadius: '14px',
                  padding: '28px'
                }}
              >
                <div style={{ fontFamily: 'IBM Plex Mono', color: 'var(--gold-strong)', fontWeight: 600, fontSize: '13px', marginBottom: '12px' }}>
                  PHASE {p.num}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: 'var(--ink)' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--grey)', lineHeight: '1.6' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div 
          className="rv in"
          style={{
            background: 'var(--ink-deep)',
            color: 'var(--paper)',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '64px'
          }}
        >
          <div className="lab ondark" style={{ marginBottom: '12px' }}>THE DIFFERENCE</div>
          <h2 style={{ color: '#FFF', fontSize: '32px', fontWeight: 600, marginBottom: '28px' }}>
            Why the 1% Specialist Model Wins
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--hair-dark)' }}>
                  <th style={{ padding: '14px', fontSize: '13px', color: 'var(--grey-dark)', fontFamily: 'IBM Plex Mono' }}>CRITERIA</th>
                  <th style={{ padding: '14px', fontSize: '13px', color: 'var(--grey-dark)', fontFamily: 'IBM Plex Mono' }}>TRADITIONAL AGENCY</th>
                  <th style={{ padding: '14px', fontSize: '13px', color: 'var(--grey-dark)', fontFamily: 'IBM Plex Mono' }}>IN-HOUSE TEAM</th>
                  <th style={{ padding: '14px', fontSize: '13px', color: 'var(--gold-bright)', fontFamily: 'IBM Plex Mono' }}>BHX 1% MODEL</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr key={i} style={{ borderBottom: i === comparison.length - 1 ? 'none' : '1px solid var(--hair-dark)' }}>
                    <td style={{ padding: '16px 14px', fontWeight: 600, color: '#FFF', fontSize: '14.5px' }}>{c.feature}</td>
                    <td style={{ padding: '16px 14px', color: '#B7B3AB', fontSize: '14px' }}>{c.agency}</td>
                    <td style={{ padding: '16px 14px', color: '#B7B3AB', fontSize: '14px' }}>{c.inhouse}</td>
                    <td style={{ padding: '16px 14px', color: 'var(--gold-bright)', fontWeight: 600, fontSize: '14.5px' }}>{c.bhx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Editorial Quote */}
        <div 
          className="rv in"
          style={{
            borderLeft: '3px solid var(--gold)',
            padding: '16px 0 16px 32px',
            marginBottom: '64px'
          }}
        >
          <p style={{ fontFamily: 'Fraunces', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.25 }}>
            "{model.quote}"
          </p>
          <cite style={{ display: 'block', fontStyle: 'normal', fontFamily: 'IBM Plex Mono', fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold-strong)', marginTop: '16px' }}>
            — {model.cite}
          </cite>
        </div>

        {/* CTA */}
        <div 
          className="rv in"
          style={{
            background: 'var(--paper-card)',
            border: '1px solid var(--hair)',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center'
          }}
        >
          <h2 style={{ fontSize: '30px', fontWeight: 600, marginBottom: '14px', color: 'var(--ink)' }}>
            Ready to match the right specialist to your job?
          </h2>
          <p style={{ fontSize: '16.5px', color: 'var(--grey)', maxWidth: '50ch', margin: '0 auto 24px' }}>
            Book a 30-minute introductory call. Straight conversation, zero pitch.
          </p>
          <button className="btn btn-gold" onClick={onOpenBooking}>
            Book a call &rarr;
          </button>
        </div>

      </div>
    </div>
  );
}
