import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ cursorState, cursorText }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-only
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  // Variants based on hover target state
  const isHovered = cursorState !== 'default';
  const isVideoHover = cursorState === 'video';

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '9999px',
        mixBlendMode: isVideoHover ? 'normal' : 'difference',
        backgroundColor: isVideoHover ? 'var(--accent-primary)' : '#FFFFFF',
        color: isVideoHover ? '#FFFFFF' : '#000000',
        fontWeight: 800,
        fontFamily: 'var(--font-display)',
        fontSize: '0.75rem',
        letterSpacing: '0.05em',
        boxShadow: isVideoHover ? '0 10px 30px rgba(255, 77, 46, 0.45)' : 'none',
      }}
      animate={{
        x: mousePosition.x - (isVideoHover ? 45 : isHovered ? 24 : 10),
        y: mousePosition.y - (isVideoHover ? 45 : isHovered ? 24 : 10),
        width: isVideoHover ? 90 : isHovered ? 48 : 20,
        height: isVideoHover ? 90 : isHovered ? 48 : 20,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
        mass: 0.5,
      }}
    >
      {isVideoHover ? (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{ textAlign: 'center', lineHeight: 1.1, padding: '4px' }}
        >
          {cursorText || 'PLAY REEL'}
        </motion.span>
      ) : null}
    </motion.div>
  );
}
