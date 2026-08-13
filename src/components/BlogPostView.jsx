import React, { useEffect } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogPostView({ postSlug, onBack, onOpenBooking }) {
  const post = BLOG_POSTS.find(p => p.slug === postSlug) || BLOG_POSTS[0];

  useEffect(() => {
    // Dynamic Meta Tags & JSON-LD injection
    document.title = post.metaTitle;
    
    // Inject per-post JSON-LD
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

  return (
    <article className="wrap" style={{ paddingTop: '110px', paddingBottom: '100px', maxWidth: '820px' }}>
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="btn btn-ghost"
        style={{ fontSize: '12px', marginBottom: '32px' }}
      >
        ← Back to Blog Index
      </button>

      {/* Metadata Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
          <span className="mono" style={{ color: 'var(--red)' }}>ARTICLE</span>
          <span className="mono" style={{ color: 'var(--grey)' }}>{post.date}</span>
          <span className="mono" style={{ color: 'var(--grey)' }}>{post.readTime}</span>
        </div>

        <h1 className="hero-headline" style={{ fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '16px' }}>
          {post.title}
        </h1>

        <p className="body-text" style={{ fontSize: '20px', color: 'var(--grey)', lineHeight: '1.4' }}>
          {post.subtitle}
        </p>
      </div>

      <hr className="rule" />

      {/* One-line Definition Callout Box */}
      <div style={{ background: '#FFFFFF', border: '1px solid var(--hairline)', borderLeft: '4px solid var(--red)', padding: '20px 24px', margin: '28px 0', borderRadius: '2px' }}>
        <span className="mono" style={{ color: 'var(--red)', fontSize: '10px', display: 'block', marginBottom: '4px' }}>
          CORE DEFINITION
        </span>
        <p className="body-text" style={{ fontSize: '16px', fontWeight: 500, color: 'var(--ink)' }}>
          {post.definition}
        </p>
      </div>

      {/* Render Markdown Content */}
      <div 
        className="article-body"
        style={{ fontSize: '17px', lineHeight: '1.7', color: '#2F2F31' }}
      >
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="section-title" style={{ fontSize: '26px', margin: '36px 0 16px' }}>
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={index} className="card-title" style={{ fontSize: '20px', margin: '24px 0 12px' }}>
                {paragraph.replace('### ', '')}
              </h3>
            );
          }
          if (paragraph.startsWith('> ')) {
            return (
              <blockquote key={index} className="serif" style={{ fontSize: '22px', fontStyle: 'italic', margin: '24px 0', paddingLeft: '16px', borderLeft: '2px solid var(--red)', color: 'var(--ink)' }}>
                {paragraph.replace('> ', '')}
              </blockquote>
            );
          }
          if (paragraph.startsWith('- ')) {
            return (
              <ul key={index} style={{ margin: '16px 0', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {paragraph.split('\n').map((li, idx) => (
                  <li key={idx} className="body-text" style={{ fontSize: '16px' }}>
                    {li.replace('- ', '')}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={index} className="body-text" style={{ fontSize: '17px', marginBottom: '20px' }}>
              {paragraph.replace('# ', '')}
            </p>
          );
        })}
      </div>

      {/* Article Author Footer & CTA */}
      <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid var(--hairline)', background: '#FFFFFF', padding: '32px', borderRadius: '2px' }}>
        <span className="mono" style={{ color: 'var(--red)', display: 'block', marginBottom: '8px' }}>ABOUT THE AUTHOR</span>
        <h3 className="serif" style={{ fontSize: '22px', fontWeight: 500, marginBottom: '8px' }}>
          Bharath C.S.
        </h3>
        <p className="body-text" style={{ fontSize: '14px', color: 'var(--grey)', marginBottom: '20px' }}>
          20+ years running content at scale across Amazon India, Sun TV Network, and major micro-drama slates. Providing senior content judgment for the AI era.
        </p>
        <button onClick={onOpenBooking} className="btn btn-primary">
          Book a 30-minute content audit
        </button>
      </div>

    </article>
  );
}
