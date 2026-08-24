import React, { useState } from 'react';
import workData from '../data/work.json';

export default function WorkView({ onOpenVideo, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(workData.map(w => w.category)))];

  const filteredItems = activeCategory === 'All'
    ? workData
    : workData.filter(w => w.category === activeCategory);

  const playIcon = (
    <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'var(--paper)' }}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="wrap">
        
        {/* Page Header */}
        <div className="sec-head rv in" style={{ maxWidth: '80ch', marginBottom: '40px' }}>
          <span className="mono eyebrow">Selected work · 30 Years</span>
          <h2>The work speaks first.</h2>
          <p className="lead">
            Work produced for major platforms and enterprises including Amazon India, Amazon Asia Pacific, Microsoft, Nokia, OnePlus, Kuku TV, Culture Machine, and regional D2C brands. Click any film to watch.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filters rv in" role="tablist" aria-label="Filter work by category" style={{ marginBottom: '2.2rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="work-grid rv in">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              className="card"
              onClick={() => onOpenVideo(item)}
              aria-label={`Play ${item.title}`}
            >
              <div className="card-media">
                <span className="card-tag">{item.category}</span>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="play">
                  <span>{playIcon}</span>
                </div>
              </div>
              <div className="card-body">
                <h3>{item.title}</h3>
                <div className="card-meta">
                  <span className="client">{item.client}</span>
                  <span className="yr">{item.year}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className="rv in"
          style={{
            marginTop: '64px',
            background: 'var(--ink-2)',
            border: '1px solid var(--line)',
            borderRadius: '16px',
            padding: '48px 36px',
            textAlign: 'center'
          }}
        >
          <span className="mono eyebrow" style={{ justifyContent: 'center' }}>Let's build</span>
          <h2 style={{ color: 'var(--paper)', fontSize: '32px', fontWeight: 500, marginBottom: '16px' }}>
            Want to build films or slates like these for your brand?
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px' }}>
            Book a 30-minute introductory call with Bharath C.S.
          </p>
          <button className="btn btn-gold" onClick={onOpenBooking}>
            Book a call &rarr;
          </button>
        </div>

      </div>
    </div>
  );
}
