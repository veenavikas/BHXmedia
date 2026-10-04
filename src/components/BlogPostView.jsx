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
    <article style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', padding: '64px 0 96px' }}>
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
            <span className="copper-tag" style={{ fontSize: '11px' }}>ARTICLE</span>
            <span style={{ fontSize: '12px', color: '#8A8275' }}>{post.date}</span>
            <span style={{ fontSize: '12px', color: '#8A8275' }}>{post.readTime}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#F4EFE5', lineHeight: 1.15, marginBottom: '16px' }}>
            {post.title}
          </h1>

          <p style={{ fontSize: '18px', color: '#B8AE9C', lineHeight: 1.5 }}>
            {post.subtitle}
          </p>
        </div>

        {/* One-line Definition Callout Box (Section 10 of Brief) */}
        <div style={{
          backgroundColor: '#242220',
          border: '1px solid #33302B',
          borderLeft: '4px solid #C6884F',
          padding: '20px 24px',
          margin: '28px 0',
          borderRadius: '4px'
        }}>
          <span className="copper-tag" style={{ fontSize: '10px', display: 'block', marginBottom: '4px' }}>
            PLAIN DEFINITION
          </span>
          <p style={{ fontSize: '15.5px', fontWeight: 500, color: '#F4EFE5', lineHeight: 1.5 }}>
            {post.definition}
          </p>
        </div>

        {/* Article Body */}
        <div style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#B8AE9C', marginTop: '32px' }}>
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} style={{ fontSize: '24px', color: '#F4EFE5', margin: '36px 0 16px' }}>
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} style={{ fontSize: '19px', color: '#F4EFE5', margin: '24px 0 12px' }}>
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
                  borderLeft: '2px solid #C6884F',
                  color: '#F4EFE5'
                }}>
                  {paragraph.replace('> ', '')}
                </blockquote>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={index} style={{ margin: '16px 0', paddingLeft: '24px', display: 'grid', gap: '8px' }}>
                  {paragraph.split('\n').map((li, idx) => (
                    <li key={idx} style={{ fontSize: '16px', color: '#B8AE9C' }}>
                      {li.replace('- ', '')}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} style={{ marginBottom: '20px' }}>
                {paragraph.replace('# ', '')}
              </p>
            );
          })}
        </div>

        {/* Article Author Footer & CTA */}
        <div style={{
          marginTop: '56px',
          padding: '32px',
          backgroundColor: '#1E1C1A',
          border: '1px solid #33302B',
          borderRadius: '8px'
        }}>
          <span className="copper-tag" style={{ display: 'block', marginBottom: '8px' }}>ABOUT THE AUTHOR</span>
          <h3 style={{ fontSize: '22px', color: '#F4EFE5', marginBottom: '8px' }}>
            Bharath C.S.
          </h3>
          <p style={{ fontSize: '14px', color: '#B8AE9C', marginBottom: '24px', lineHeight: 1.6 }}>
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
