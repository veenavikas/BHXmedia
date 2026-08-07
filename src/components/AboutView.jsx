import React from 'react';
import { TEAM_MEMBERS } from '../data/siteData';
import { Video, ShieldCheck, Zap, Award, Flame, PhoneCall } from 'lucide-react';

export default function AboutView({ onOpenBooking }) {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '2rem' }}>
      {/* About Hero Section */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="badge badge-accent" style={{ marginBottom: '1rem' }}>
            The BHX Story
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
            We are the video partner built for the modern creator economy.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            BHX Media is a lean, high-energy creative studio based in Los Angeles & London. We bridge the gap between Hollywood-grade post-production aesthetics and algorithmic retention hacks.
          </p>
        </div>
      </section>

      {/* Studio Philosophy & Values */}
      <section className="section section-bg-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card-light" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Retention-First Engineering
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We don't just edit videos to look pretty. Every cut, audio cue, and graphic insert is placed strategically to maximize watch time and viewer engagement.
              </p>
            </div>

            <div className="card-light" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Zero Agency Bloat
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                No slow account managers or multi-week delays. You get direct access to dedicated lead editors and producers via a shared Slack channel.
              </p>
            </div>

            <div className="card-light" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Full Creative Rights
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                You own 100% of the raw footage, project files, and rendered assets. All commercial music tracks are fully licensed for worldwide monetization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.85rem' }}>
              The Minds Behind BHX
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Meet Our Core Studio Team
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Senior directors, colorists, and retention editors who live and breathe digital video.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="card-light" style={{ overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
                <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: 'var(--bg-secondary)' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>
                    {member.name}
                  </h3>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.85rem' }}>
                    {member.role}
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
