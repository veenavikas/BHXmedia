import React, { useEffect } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogPostView({ postSlug, onBack, onNavigate, onOpenBooking }) {
  const post = BLOG_POSTS.find(p => p.slug === postSlug) || BLOG_POSTS[0];

  useEffect(() => {
    document.title = `${post.metaTitle} | BHX Media`;
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'post-jsonld';
    script.innerHTML = JSON.stringify(post.jsonLdSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('post-jsonld');
      if (existingScript) existingScript.remove();
    };
  }, [post]);

  const handleNav = (path) => {
    if (onNavigate) onNavigate(path);
    else window.location.href = path;
  };

  return (
    <article style={{ backgroundColor: 'var(--bhx-bg-reading)', minHeight: '100vh', padding: '64px 0 96px', color: 'var(--bhx-text)' }}>
      <div className="wrap" style={{ maxWidth: '800px' }}>
        
        {/* Back Button */}
        <button 
          onClick={onBack ? onBack : () => handleNav('/insights')}
          className="btn-outline"
          style={{ padding: '6px 14px', fontSize: '13px', marginBottom: '32px' }}
        >
          &larr; Back to Insights
        </button>

        {/* Metadata Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
            <span className="laterite-tag" style={{ fontSize: '11px' }}>ARTICLE</span>
            <span style={{ fontSize: '12px', color: 'var(--bhx-muted)' }}>{post.date}</span>
            <span style={{ fontSize: '12px', color: 'var(--bhx-muted)' }}>{post.readTime}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--bhx-text)', lineHeight: 1.15, marginBottom: '16px' }}>
            {post.title}
          </h1>

          <p style={{ fontSize: '18px', color: 'var(--bhx-muted)', lineHeight: 1.5 }}>
            {post.subtitle}
          </p>
        </div>

        {/* One-line Definition Callout Box (Section 10 of Brief) */}
        <div style={{
          backgroundColor: 'var(--bhx-surface)',
          border: '1px solid var(--bhx-border)',
          borderLeft: '4px solid var(--bhx-laterite)',
          padding: '20px 24px',
          margin: '28px 0',
          borderRadius: '4px'
        }}>
          <span className="laterite-tag" style={{ fontSize: '10px', display: 'block', marginBottom: '4px' }}>
            PLAIN DEFINITION
          </span>
          <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--bhx-text)', lineHeight: 1.5 }}>
            {post.definition}
          </p>
        </div>

        {/* Article Body */}
        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--bhx-text)', marginTop: '32px' }}>
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} style={{ fontSize: '24px', color: 'var(--bhx-text)', margin: '36px 0 16px' }}>
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} style={{ fontSize: '19px', color: 'var(--bhx-text)', margin: '24px 0 12px' }}>
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('> ')) {
              return (
                <blockquote key={index} style={{
                  fontSize: '18px',
                  fontStyle: 'italic',
                  margin: '24px 0',
                  paddingLeft: '16px',
                  borderLeft: '3px solid var(--bhx-laterite)',
                  color: 'var(--bhx-text)'
                }}>
                  {paragraph.replace('> ', '')}
                </blockquote>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={index} style={{ margin: '16px 0', paddingLeft: '24px', display: 'grid', gap: '8px' }}>
                  {paragraph.split('\n').map((li, idx) => (
                    <li key={idx} style={{ fontSize: '16.5px', color: 'var(--bhx-muted)' }}>
                      {li.replace('- ', '')}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} style={{ marginBottom: '20px', color: 'var(--bhx-text)' }}>
                {paragraph.replace('# ', '')}
              </p>
            );
          })}
        </div>

        {/* Article Author Footer & CTA */}
        <div style={{
          marginTop: '56px',
          padding: '32px',
          backgroundColor: 'var(--bhx-surface)',
          border: '1px solid var(--bhx-border)',
          borderRadius: '8px'
        }}>
          <span className="laterite-tag" style={{ display: 'block', marginBottom: '8px' }}>ABOUT THE AUTHOR</span>
          <h3 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '8px' }}>
            Bharath C.S.
          </h3>
          <p style={{ fontSize: '14.5px', color: 'var(--bhx-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
            20+ years running content engines at scale across Amazon India, Sun TV Network, and Kuku TV micro-drama slates. Providing creative strategy and AI quality control for brands and platforms.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => handleNav('/brief')} className="btn-copper">
              Send a Brief &rarr;
            </button>
            <button onClick={onOpenBooking} className="btn-outline">
              Book a call
            </button>
          </div>
        </div>

      </div>
    </article>
  );
}
