import React from 'react';
import { SITE_DATA } from '../data/siteData';

export default function ServicesView({ onOpenBooking }) {
  const { services } = SITE_DATA;

  const detailedServices = [
    {
      num: "01",
      title: "Micro-Drama (Live Action & AI Production)",
      tagline: "Vertical short-form drama slates combining live-action shoots and generative AI production.",
      desc: "Operator-level experience scaling vertical short-form drama slates (58+ shows across 4 South Indian languages at Kuku TV). We combine live action location shoots with state-of-the-art AI video generation pipeline workflows for fast episode iteration, cliffhanger retention, and slate scaling.",
      deliverables: [
        "Micro-Drama Slate Concepting & Series Bible",
        "Live Action Cinema Shoot & Direction",
        "AI Video Generation & VFX Enhancement Pipeline",
        "Retention Pacing, Cliffhanger & Audio Dubbing"
      ],
      bestFor: "OTT platforms, micro-drama apps, content studios & brand entertainment."
    },
    {
      num: "02",
      title: "Influencers & Creator Marketing",
      tagline: "End-to-end influencer strategy, creator sourcing, creative direction, and campaign execution.",
      desc: "We bridge brand marketing objectives with authentic creator voices. Having run an 80,000-subscriber content channel, Bharath C.S. manages creators from both sides—sourcing the right influencers, structuring performance briefs, and managing full multi-creator campaign deployment.",
      deliverables: [
        "Influencer Selection & Audience Alignment",
        "Creative Briefing & Format Direction",
        "Multi-Platform Campaign Execution (Reels/YouTube/Shorts)",
        "Performance Tracking & ROAS Attribution"
      ],
      bestFor: "D2C brands, consumer tech, lifestyle, and high-growth consumer apps."
    },
    {
      num: "03",
      title: "AI Production for Ad Films",
      tagline: "Generative AI workflows for high-impact TVCs, brand commercials, and creative variations.",
      desc: "Leveraging cutting-edge AI tools alongside cinema craft to produce ad films faster and at higher creative scale. From realistic AI storyboarding and synthetic environment creation to rapid video creative A/B testing variations for digital & television ads.",
      deliverables: [
        "AI Concepting, Photorealistic Pre-Viz & Storyboarding",
        "Generative AI Video & Virtual Set Commercial Production",
        "Rapid Batch Ad Variations (15s / 30s / 60s)",
        "Cinematic Color Grading & AI Audio Mastering"
      ],
      bestFor: "Brands, ad agencies, and marketing leaders launching major ad campaigns."
    },
    {
      num: "04",
      title: "Brand Content & Commercial Films",
      tagline: "Concept to finished film — high-concept ads, brand stories, and product launch assets.",
      desc: "Commercial films conceived from brand marketing briefs. From narrative scripting and location cinema shoots to DaVinci color grading and master sound design, we produce films that elevate your brand.",
      deliverables: [
        "Scriptwriting & Commercial Storyboards",
        "Director & Cinema DP Crew",
        "16:9 Master Cut + 9:16 Social Cutdowns",
        "Licensed Broadcast Soundtrack"
      ],
      bestFor: "Marketing teams & enterprise brands launching new products or campaigns."
    },
    {
      num: "05",
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
      num: "06",
      title: "Employer Branding & Content Engine Scale",
      tagline: "Show senior talent why your company is the best place to build their career.",
      desc: "Leveraging Bharath C.S.'s experience leading Amazon's employer brand across Asia Pacific, we craft authentic employee narratives, recruitment content, and scalable in-house content engines.",
      deliverables: [
        "Day in the Life & Team Spotlight Films",
        "Leadership & Engineering Culture Series",
        "APAC Regional Localization & Dubbing",
        "In-House Studio Setup & Content Automation"
      ],
      bestFor: "Global Capability Centers (GCCs), tech enterprises & high-growth scaleups."
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
