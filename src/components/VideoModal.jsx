import React, { useEffect } from 'react';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);

  if (!video) return null;

  const videoId = typeof video === 'object' ? video.id : video;
  const title = typeof video === 'object' ? video.title : 'Featured Work';
  const subtitle = typeof video === 'object' ? video.subtitle : 'BHX Media';
  const authorName = 'Bharath C.S.';

  const iframeSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(28, 26, 23, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }} 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        maxWidth: '860px',
        width: '100%',
        backgroundColor: '#1C1A17',
        borderRadius: '12px',
        padding: '24px',
        color: '#F4EFE6',
        border: '1px solid #3A352F',
        boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#E0A21B', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              {subtitle ? `${subtitle} · ` : ''}{authorName}
            </span>
            <h3 style={{ fontSize: '22px', color: '#F4EFE6', margin: 0, fontWeight: 700 }}>
              {title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', fontSize: '28px', color: '#D4CDC3', cursor: 'pointer', lineHeight: 1 }}
            aria-label="Close video"
          >
            &times;
          </button>
        </div>

        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#000000' }}>
          <iframe
            src={iframeSrc}
            title={`${title} - ${authorName}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
