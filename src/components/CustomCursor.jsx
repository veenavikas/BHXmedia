import React, { useEffect, useState } from 'react';

export default function CustomCursor({ cursorState = 'default', cursorText = '' }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isHovering = cursorState === 'hover';
  const isVideo = cursorState === 'video';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: 'transform 0.05s ease-out',
        display: 'none',
        '@media (pointer: fine)': { display: 'block' }
      }}
      className="custom-cursor-wrapper"
    >
      {/* Core Dot */}
      <div
        style={{
          width: isVideo ? '80px' : isHovering ? '36px' : '8px',
          height: isVideo ? '80px' : isHovering ? '36px' : '8px',
          borderRadius: '50%',
          backgroundColor: isVideo ? 'var(--red)' : isHovering ? 'rgba(192, 54, 44, 0.15)' : 'var(--red)',
          border: isHovering ? '1.5px solid var(--red)' : 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontSize: '11px',
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          boxShadow: isVideo ? '0 10px 25px rgba(192, 54, 44, 0.4)' : 'none'
        }}
      >
        {isVideo && (cursorText || 'PLAY')}
      </div>

      <style>{`
        @media (pointer: fine) {
          .custom-cursor-wrapper { display: block !important; }
        }
      `}</style>
    </div>
  );
}
