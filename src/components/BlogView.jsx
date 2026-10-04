import React from 'react';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogView({ onSelectPost, onNavigate }) {
  const handleNav = (path) => {
    if (onNavigate) onNavigate(path);
    else window.location.href = path;
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', padding: '64px 0 96px' }}>
      <div className="wrap">
        
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
          <div className="copper-tag" style={{ marginBottom: '12px' }}>BHX Insights</div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', color: '#F4EFE5', lineHeight: 1.1, marginBottom: '20px' }}>
            Strategy, AI search readiness &amp; content unit economics.
          </h1>
          <p style={{ fontSize: '18px', color: '#B8AE9C', lineHeight: 1.6 }}>
            Restrained, fact-driven analysis on AI content strategy, micro-drama script analysis, and brand film positioning by Bharath C.S.
          </p>
        </div>

        {/* Blog Article Index */}
        <div style={{ display: 'grid', gap: '24px', marginBottom: '64px' }}>
          {BLOG_POSTS.map(post => (
            <article 
              key={post.id}
              onClick={() => onSelectPost ? onSelectPost(post.slug) : handleNav(`/insights/${post.slug}`)}
              style={{
                backgroundColor: '#242220',
                border: '1px solid #33302B',
                borderRadius: '8px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '12px' }}>
                <span className="copper-tag" style={{ fontSize: '11px' }}>
                  ARTICLE . {post.readTime.toUpperCase()}
                </span>
                <span style={{ fontSize: '12px', color: '#8A8275' }}>
                  {post.date}
                </span>
              </div>

              <h2 style={{ fontSize: '22px', color: '#F4EFE5', marginBottom: '10px' }}>
                {post.title}
              </h2>

              <p style={{ fontSize: '15px', color: '#B8AE9C', lineHeight: 1.6, marginBottom: '20px' }}>
                {post.subtitle}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #33302B', paddingTop: '16px', fontSize: '13px' }}>
                <span style={{ color: '#8A8275' }}>
                  BY {post.author.toUpperCase()}
                </span>
                <span style={{ color: '#C6884F', fontWeight: 600 }}>
                  READ INSIGHT &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Brief CTA */}
        <div style={{
          backgroundColor: '#1E1C1A',
          border: '1px solid #33302B',
          borderRadius: '12px',
          padding: '48px 36px',
          textAlign: 'center',
          maxWidth: '640px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '28px', color: '#F4EFE5', marginBottom: '12px' }}>Ready to optimize your content strategy?</h2>
          <p style={{ fontSize: '15px', color: '#B8AE9C', marginBottom: '28px' }}>
            Send us a brief or book a 30-minute intro call to discuss your content pipeline.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => handleNav('/brief')} className="btn-copper">
              Send a Brief &rarr;
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
