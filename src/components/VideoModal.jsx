import React, { useEffect } from 'react';

export default function VideoModal({ isOpen, onClose, videoItem }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !videoItem) return null;

  // Helper to extract YouTube embed URL
  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      let videoId = '';
      if (url.includes('youtu.be')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      } else if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        videoId = urlParams.get('v');
      }
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
    }
    if (url.includes('vimeo.com')) {
      const vimeoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return vimeoId ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1` : url;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoItem.url);
  const isDirectVideo = embedUrl.endsWith('.mp4') || embedUrl.endsWith('.webm') || embedUrl.endsWith('.mov');

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-box" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '960px', padding: 0, overflow: 'hidden', background: '#141416', borderRadius: '4px' }}
      >
        
        {/* Modal Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid #2A2A2E', color: '#F6F4EF' }}>
          <div>
            <span className="mono" style={{ color: 'var(--red)', fontSize: '10px', display: 'block' }}>
              {videoItem.format}
            </span>
            <span className="serif" style={{ fontSize: '18px', fontWeight: 500 }}>
              {videoItem.title}
            </span>
          </div>

          <button 
            onClick={onClose}
            style={{ background: 'none', border: '1px solid #444', color: '#FFF', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
            aria-label="Close modal"
          >
            <span className="mono" style={{ color: '#FFF', fontSize: '11px' }}>CLOSE ✕</span>
          </button>
        </div>

        {/* Video Player Container */}
        <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}>
          {isDirectVideo ? (
            <video 
              src={embedUrl} 
              controls 
              autoPlay 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <iframe 
              src={embedUrl} 
              title={videoItem.title}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Modal Footer with Case Result */}
        {videoItem.result && (
          <div style={{ padding: '16px 20px', background: '#1C1C1F', color: '#D1D0C9', fontSize: '14px' }}>
            <span className="mono" style={{ color: 'var(--grey)', marginRight: '8px' }}>RESULT:</span>
            {videoItem.result}
          </div>
        )}

      </div>
    </div>
  );
}
