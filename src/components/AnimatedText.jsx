import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedText({ text, className = '', style = {} }) {
  const containerRef = useRef(null);
  const words = text.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25']
  });

  return (
    <p ref={containerRef} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em', ...style }}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + (1 / words.length);
        
        // Transform scroll progress to opacity 0.2 -> 1
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <motion.span key={index} style={{ opacity, display: 'inline-block' }}>
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
