import React from 'react';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogView({ onSelectPost, onOpenBooking }) {
  return (
    <div className="wrap" style={{ paddingTop: '110px', paddingBottom: '100px' }}>
      
      <div className="mono sec-header">
        <span className="num">03</span> JOURNAL & INSIGHTS
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>
          The content brain journal<span className="stop">.</span>
        </h1>
        <p className="body-text" style={{ fontSize: '18px', color: 'var(--grey)', maxWidth: '640px' }}>
          Restrained, fact-driven analysis on AI content strategy, ROI unit economics, and quality control frameworks.
        </p>
      </div>

      {/* Blog Article Index */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {BLOG_POSTS.map(post => (
          <article 
            key={post.id}
            className="editorial-card"
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectPost(post.slug)}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <div className="mono" style={{ color: 'var(--red)' }}>
                ARTICLE / {post.readTime.toUpperCase()}
              </div>
              <div className="mono" style={{ color: 'var(--grey)' }}>
                {post.date}
              </div>
            </div>

            <h2 className="card-title" style={{ fontSize: '24px', marginBottom: '10px' }}>
              {post.title}
            </h2>

            <p className="body-text" style={{ fontSize: '15px', color: '#2F2F31', marginBottom: '16px' }}>
              {post.subtitle}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--hairline)', paddingTop: '12px' }}>
              <span className="mono" style={{ fontSize: '11px', color: 'var(--grey)' }}>
                BY {post.author.toUpperCase()}
              </span>
              <span className="mono" style={{ fontSize: '11px', color: 'var(--ink)' }}>
                READ ARTICLE →
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* RSS Link */}
      <div style={{ marginTop: '48px', paddingTop: '20px', borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="mono">SYNDICATION & CITATIONS</span>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="mono" style={{ color: 'var(--red)', textDecoration: 'underline' }}>
          Subscribe via RSS Feed ↗
        </a>
      </div>

    </div>
  );
}
