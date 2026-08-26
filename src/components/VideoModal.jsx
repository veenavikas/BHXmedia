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
  const subtitle = typeof video === 'object' ? video.subtitle : 'Content Business';
  const authorName = 'Bharath C.S. · BHX Media';

  const iframeSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="modal open" id="modal" aria-hidden="false" onClick={(e) => { if (e.target.id === 'modal') onClose(); }}>
      <div className="modal-box">
        {/* Custom Header: Title & Bharath C.S. as default */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span className="lab gold" style={{ fontSize: '11px', display: 'block', marginBottom: '4px' }}>
              {subtitle ? `${subtitle} · ` : ''}{authorName}
            </span>
            <h3 style={{ fontSize: '20px', color: '#FFFFFF', margin: 0, fontWeight: 600 }}>
              {title}
            </h3>
          </div>
          <button className="modal-close" style={{ position: 'static' }} id="modalClose" aria-label="Close video" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-frame">
          <iframe
            id="modalIframe"
            src={iframeSrc}
            title={`${title} - ${authorName}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
