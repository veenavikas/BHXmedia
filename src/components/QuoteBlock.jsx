import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';
import AnimatedText from './AnimatedText';

export default function QuoteBlock() {
  const { quote } = SITE_CONTENT;

  return (
    <section className="quote-block">
      <div className="wrap">
        <div style={{ maxWidth: '900px' }}>
          
          <AnimatedText 
            text={`"${quote.text}."`} 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontWeight: 500, 
              fontSize: 'clamp(26px, 4vw, 42px)', 
              lineHeight: '1.2', 
              letterSpacing: '-0.01em', 
              color: 'var(--ink)' 
            }}
          />

          <div className="attr">
            — {quote.attribution}
          </div>
          
        </div>
      </div>
    </section>
  );
}
