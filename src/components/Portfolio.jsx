import React, { useState } from 'react';
import workData from '../data/work.json';
import VideoModal from './VideoModal';
import Card3D from './Card3D';

export default function Portfolio({ onOpenBooking, onCursorVideoEnter, onCursorLeave }) {
  const [selectedFormat, setSelectedFormat] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const formats = [
    'All',
    'Micro-drama',
    'Commercial and ad films',
    'Digital ads',
    'Employer-brand content',
    'TV non-fiction',
    'TV fiction'
  ];

  const filteredWork = selectedFormat === 'All' 
    ? workData 
    : workData.filter(item => item.format === selectedFormat);

  const getThumbnail = (item) => {
    if (item.thumbnail) return item.thumbnail;
    if (item.url && item.url.includes('youtube.com')) {
      const vId = item.url.split('v=')[1]?.split('&')[0];
      if (vId) return `https://img.youtube.com/vi/${vId}/hqdefault.jpg`;
    }
    return 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80';
  };

  return (
    <div className="wrap" style={{ paddingTop: '110px', paddingBottom: '100px' }}>
      
      <div className="mono sec-header">
        <span className="num">02</span> PORTFOLIO & PROOF
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>
          Selected work & capability proof<span className="stop">.</span>
        </h1>
        <p className="body-text" style={{ fontSize: '18px', color: 'var(--grey)', maxWidth: '640px' }}>
          Real work, built across 20+ years of operation. Grouped by capability formats. Click any item to watch in lightbox.
        </p>
      </div>

      {/* Capability Filter Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px', paddingBottom: '20px', borderBottom: '1px solid var(--hairline)' }}>
        {formats.map(fmt => (
          <button 
            key={fmt}
            onClick={() => setSelectedFormat(fmt)}
            className={`chiptag ${selectedFormat === fmt ? 'active' : ''}`}
          >
            {fmt}
          </button>
        ))}
      </div>

      {/* 3D Tilt Work Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
        {filteredWork.map(item => (
          <Card3D key={item.id}>
            <div className="editorial-card" style={{ padding: '18px', height: '100%' }}>
              
              <div 
                className="work-thumb"
                onClick={() => setSelectedVideo(item)}
                onMouseEnter={() => onCursorVideoEnter && onCursorVideoEnter('WATCH')}
                onMouseLeave={onCursorLeave}
                style={{ marginBottom: '16px' }}
              >
                <img src={getThumbnail(item)} alt={item.title} loading="lazy" />
                <span className="fmt">{item.format}</span>
                <span className="play" aria-label="Play video lightbox">
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                  </svg>
                </span>
              </div>

              <span className="mono" style={{ color: 'var(--red)', fontSize: '11px', display: 'block', marginBottom: '6px' }}>
                {item.format}
              </span>

              <h3 className="card-title" style={{ fontSize: '20px', marginBottom: '8px' }}>
                {item.title}
              </h3>

              {item.client && (
                <span className="mono" style={{ fontSize: '10px', color: 'var(--grey)', display: 'block', marginBottom: '8px' }}>
                  CLIENT / CONTEXT: {item.client.toUpperCase()}
                </span>
              )}

              {item.result && (
                <p className="body-text" style={{ fontSize: '13px', color: '#2F2F31', borderTop: '1px solid var(--hairline)', paddingTop: '10px', marginTop: '10px' }}>
                  {item.result}
                </p>
              )}

            </div>
          </Card3D>
        ))}
      </div>

      {/* CTA Bottom Bar */}
      <div style={{ marginTop: '64px', padding: '36px 28px', border: '1px solid var(--hairline)', background: '#FFFFFF', borderRadius: '4px', textAlign: 'center' }}>
        <h3 className="serif" style={{ fontSize: '24px', fontWeight: 500, marginBottom: '12px' }}>
          Ready to elevate your content quality<span className="stop">.</span>
        </h3>
        <button onClick={onOpenBooking} className="btn btn-primary">
          Book a 30-minute content audit
        </button>
      </div>

      {/* Lightbox Video Player */}
      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoItem={selectedVideo} 
      />

    </div>
  );
}
