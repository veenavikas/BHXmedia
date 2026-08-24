import React from 'react';
import { SITE_DATA } from '../data/siteData';

export default function ServicesView({ onOpenBooking }) {
  const { services } = SITE_DATA;

  const detailedServices = [
    {
      num: "01",
      title: "Content Strategy & Positioning",
      tagline: "Decide what to make, for whom, and to what specific business outcome.",
      desc: "Before shooting a single frame, we define your content positioning so every piece has a clear job and a measurable return. We eliminate wasteful production and align content to real commercial goals.",
      deliverables: [
        "Executive Content Positioning Blueprint",
        "Channel Architecture & Format Mix",
        "Audience Persona & Retention Framework",
        "Quarterly Content Roadmap"
      ],
      bestFor: "Brands, product owners & founders scaling their content investment."
    },
    {
      num: "02",
      title: "Brand Content & Commercial Films",
      tagline: "Concept to finished film — ads, brand films, and campaign launch assets.",
      desc: "High-concept commercial films conceived from marketing briefs. From narrative scripting and location cinema shoots to DaVinci color grading and master sound design, we produce films that elevate your brand.",
      deliverables: [
        "Scriptwriting & Storyboards",
        "Director & Cinema DP Crew",
        "16:9 Master Cut + 9:16 Social Cutdowns",
        "Licensed Broadcast Soundtrack"
      ],
      bestFor: "Marketing teams & agencies launching new products or major campaigns."
    },
    {
      num: "03",
      title: "Performance Marketing & Conversion Content",
      tagline: "Creatives built to convert, and campaigns engineered to pay back.",
      desc: "Content engineered specifically for performance marketing. We combine high-retention creative hooks, dynamic visual typography, and systematic creative testing to lower your CAC and lift ROAS.",
      deliverables: [
        "Batch Vertical Ad Creative Packs (15s / 30s)",
        "Hook A/B Variation Testing Matrix",
        "Product Demo & D2C Conversion Videos",
        "Paid Social Format Optimization"
      ],
      bestFor: "D2C brands, e-commerce stores & growth marketing leads."
    },
    {
      num: "04",
      title: "Employer Branding & Talent Storytelling",
      tagline: "Show senior talent why your company is the best place to build their career.",
      desc: "Leveraging Bharath C.S.'s experience leading Amazon's employer brand across Asia Pacific, we craft authentic employee narratives and recruitment content that attracts top 1% talent.",
      deliverables: [
        "Day in the Life & Team Spotlight Films",
        "Leadership & Engineering Culture Series",
        "APAC Regional Localization & Dubbing",
        "Recruitment Campaign Video Assets"
      ],
      bestFor: "Global Capability Centers (GCCs), tech enterprises & high-growth scaleups."
    },
    {
      num: "05",
      title: "Micro-Drama & Serialized TV Content",
      tagline: "Short vertical drama slates and broadcast TV programming at scale.",
      desc: "Operator-level experience scaling vertical short-form drama slates (58+ shows across 4 South Indian languages at Kuku TV) and running regional broadcast TV programming at Culture Machine.",
      deliverables: [
        "Micro-Drama Slate Concepting & Bible",
        "High-Volume Episode Scripting & Shooting",
        "Retention Pacing & Cliffhanger Engineering",
        "Multi-Language Audio Dubbing"
      ],
      bestFor: "OTT platforms, micro-drama apps & television networks."
    },
    {
      num: "06",
      title: "Content Engine Scale & Business Transformation",
      tagline: "Stand up a content machine that grows a new business fast.",
      desc: "We build scalable content engines for companies that need to increase production volume dramatically without sacrificing craft quality or inflating fixed headcount costs.",
      deliverables: [
        "In-House Studio Setup & Workflow Blueprint",
        "Marketing Automation & Asset Pipeline Setup",
        "1% Specialist Network Access & Matching",
        "Team SOPs & Quality Gating Protocols"
      ],
      bestFor: "Founders, enterprise CMOs & media business leaders."
    }
  ];

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="wrap">
        
        {/* Page Header */}
        <div className="sec-head rv in" style={{ maxWidth: '78ch', marginBottom: '56px' }}>
          <div className="lab gold">What I Do — Detailed Services</div>
          <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', margin: '16px 0 20px', fontWeight: 600 }}>
            One partner. Across everything content.
          </h1>
          <p style={{ fontSize: '19px', color: 'var(--grey)', lineHeight: '1.6' }}>
            From single hero brand films to full content transformation engines. Bharath C.S. brings the exact 1% specialist for your specific discipline, ensuring maximum quality with zero agency overhead.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div style={{ display: 'grid', gap: '32px' }}>
          {detailedServices.map((svc) => (
            <div 
              key={svc.num}
              className="rv in"
              style={{
                background: 'var(--paper-card)',
                border: '1px solid var(--hair)',
                borderRadius: '16px',
                padding: '36px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                alignItems: 'start'
              }}
            >
              <div>
                <span className="lab gold" style={{ fontSize: '13px', fontWeight: 600 }}>{svc.num} / SERVICE</span>
                <h2 style={{ fontSize: '28px', fontWeight: 600, margin: '12px 0 8px', color: 'var(--ink)' }}>
                  {svc.title}
                </h2>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--gold-strong)', marginBottom: '16px' }}>
                  {svc.tagline}
                </div>
                <p style={{ fontSize: '15.5px', color: 'var(--grey)', lineHeight: '1.65' }}>
                  {svc.desc}
                </p>
              </div>

              <div style={{ background: 'var(--paper)', border: '1px solid var(--hair)', borderRadius: '12px', padding: '24px' }}>
                <div className="lab" style={{ marginBottom: '14px', color: 'var(--grey)' }}>KEY DELIVERABLES</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                  {svc.deliverables.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '14.5px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--gold-strong)', fontWeight: 'bold' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--hair)', fontSize: '13px', color: 'var(--grey-dark)' }}>
                  <b style={{ color: 'var(--ink)' }}>Best for:</b> {svc.bestFor}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div 
          className="rv in"
          style={{
            marginTop: '64px',
            background: 'var(--ink)',
            color: 'var(--paper)',
            borderRadius: '20px',
            padding: '48px 36px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className="lab ondark" style={{ marginBottom: '12px' }}>Next Step</div>
          <h2 style={{ color: '#FFF', fontSize: '36px', fontWeight: 600, marginBottom: '16px' }}>
            Need a tailored content strategy for your brand?
          </h2>
          <p style={{ fontSize: '17px', color: '#CFCCC4', maxWidth: '54ch', margin: '0 auto 28px' }}>
            Book a free 30-minute intro call with Bharath C.S. We will review your goals and determine the right scope.
          </p>
          <button className="btn btn-gold" onClick={onOpenBooking}>
            Book a 30-min call &rarr;
          </button>
        </div>

      </div>
    </div>
  );
}
