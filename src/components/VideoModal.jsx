import React, { useEffect } from 'react';

export default function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (videoId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  const iframeSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div className="modal open" id="modal" aria-hidden="false" onClick={(e) => { if (e.target.id === 'modal') onClose(); }}>
      <div className="modal-box">
        <div className="modal-frame">
          <button className="modal-close" id="modalClose" aria-label="Close video" onClick={onClose}>
            &times;
          </button>
          <iframe
            id="modalIframe"
            src={iframeSrc}
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
