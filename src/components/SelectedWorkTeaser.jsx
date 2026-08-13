import React, { useState } from 'react';
import workData from '../data/work.json';
import VideoModal from './VideoModal';
import Card3D from './Card3D';

export default function SelectedWorkTeaser({ onSelectWork, onCursorVideoEnter, onCursorLeave }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const teaserWorks = workData.slice(0, 3);

  return (
    <section style={{ padding: '64px 0', borderBottom: '1px solid var(--hairline)' }}>
      <div className="wrap">
        
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
          <div>
            <div className="mono sec-header" style={{ marginBottom: '8px' }}>
              <span className="num">04</span> SELECTED WORK
            </div>
            <h2 className="section-title">
              Proof of authority<span className="stop">.</span>
            </h2>
          </div>

          <button onClick={onSelectWork} className="btn btn-ghost" style={{ fontSize: '12px' }}>
            View full work index →
          </button>
        </div>

        {/* 3D Tilt Work Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {teaserWorks.map((item) => (
            <Card3D key={item.id}>
              <div className="editorial-card" style={{ padding: '16px', height: '100%' }}>
                
                <div 
                  className="work-thumb"
                  onClick={() => setSelectedVideo(item)}
                  onMouseEnter={() => onCursorVideoEnter && onCursorVideoEnter('WATCH')}
                  onMouseLeave={onCursorLeave}
                  style={{ marginBottom: '16px' }}
                >
                  {item.thumbnail && (
                    <img src={item.thumbnail} alt={item.title} loading="lazy" />
                  )}
                  <span className="fmt">{item.format}</span>
                  <span className="play" aria-label="Play video">
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                  </span>
                </div>

                <span className="mono" style={{ color: 'var(--red)', fontSize: '10px', display: 'block', marginBottom: '6px' }}>
                  {item.format}
                </span>

                <h3 className="card-title" style={{ fontSize: '18px', marginBottom: '8px' }}>
                  {item.title}
                </h3>

                {item.result && (
                  <p className="body-text" style={{ fontSize: '13px', color: 'var(--grey)' }}>
                    {item.result}
                  </p>
                )}

              </div>
            </Card3D>
          ))}
        </div>

      </div>

      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoItem={selectedVideo} 
      />
    </section>
  );
}
