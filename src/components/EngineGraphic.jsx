import React from 'react';

export default function EngineGraphic({ onSelectStudio }) {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '520px', aspectRatio: '1/1', margin: '0 auto' }}>
      <svg viewBox="0 0 500 500" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
        <defs>
          <style>{`
            @keyframes pulseLine {
              0%, 100% { stroke-opacity: 0.35; stroke-dashoffset: 0; }
              50% { stroke-opacity: 0.9; stroke-dashoffset: -20; }
            }
            @keyframes orbitRotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .orbit-ring {
              animation: orbitRotate 40s linear infinite;
              transform-origin: 250px 250px;
            }
            .conn-line {
              stroke: #7A3E2B;
              stroke-width: 1.8;
              stroke-dasharray: 4 4;
              animation: pulseLine 4s ease-in-out infinite;
            }
            .node-card {
              cursor: pointer;
              transition: transform 0.25s ease, filter 0.25s ease;
            }
            .node-card:hover {
              transform: scale(1.05);
            }
          `}</style>
        </defs>

        {/* Orbital Background Circles */}
        <circle cx="250" cy="250" r="170" fill="none" stroke="#E8C870" strokeWidth="1.2" strokeDasharray="6 6" className="orbit-ring" />
        <circle cx="250" cy="250" r="110" fill="none" stroke="#E8C870" strokeWidth="1.2" />

        {/* Connecting Lines from Center to 4 Studios */}
        {/* Top: Longform */}
        <line x1="250" y1="250" x2="250" y2="80" className="conn-line" />
        {/* Right: Cliffhanger */}
        <line x1="250" y1="250" x2="420" y2="250" className="conn-line" />
        {/* Bottom: Frame */}
        <line x1="250" y1="250" x2="250" y2="420" className="conn-line" />
        {/* Left: Creator Circle */}
        <line x1="250" y1="250" x2="80" y2="250" className="conn-line" />

        {/* Center Node: THE ENGINE */}
        <g transform="translate(250, 250)">
          <circle r="60" fill="#1C1A17" stroke="#7A3E2B" strokeWidth="2.5" />
          <circle r="48" fill="#282420" />
          <text x="0" y="-8" textAnchor="middle" fill="#E0A21B" fontSize="10" fontWeight="700" letterSpacing="1.5">THE ENGINE</text>
          <text x="0" y="8" textAnchor="middle" fill="#F4EFE6" fontSize="11" fontWeight="700">CORE STRATEGY</text>
          <text x="0" y="24" textAnchor="middle" fill="#D4CDC3" fontSize="9" fontWeight="500">Scope · Select · Ship</text>
        </g>

        {/* Studio 1: Longform (Top) */}
        <g 
          className="node-card" 
          transform="translate(250, 80)" 
          onClick={() => onSelectStudio && onSelectStudio('longform')}
        >
          <rect x="-70" y="-30" width="140" height="60" rx="8" fill="#FBEBC0" stroke="#E8C870" strokeWidth="1.5" />
          <text x="0" y="-8" textAnchor="middle" fill="#1C1A17" fontSize="13" fontWeight="700">Longform</text>
          <text x="0" y="6" textAnchor="middle" fill="#7A3E2B" fontSize="9" fontWeight="600">by BHX Media</text>
          <text x="0" y="18" textAnchor="middle" fill="#4E4130" fontSize="9">TV &amp; Long-Form Series</text>
        </g>

        {/* Studio 2: Cliffhanger (Right) */}
        <g 
          className="node-card" 
          transform="translate(420, 250)" 
          onClick={() => onSelectStudio && onSelectStudio('cliffhanger')}
        >
          <rect x="-70" y="-30" width="140" height="60" rx="8" fill="#FBEBC0" stroke="#E8C870" strokeWidth="1.5" />
          <text x="0" y="-8" textAnchor="middle" fill="#1C1A17" fontSize="13" fontWeight="700">Cliffhanger</text>
          <text x="0" y="6" textAnchor="middle" fill="#7A3E2B" fontSize="9" fontWeight="600">by BHX Media</text>
          <text x="0" y="18" textAnchor="middle" fill="#4E4130" fontSize="9">AI Micro-Drama</text>
        </g>

        {/* Studio 3: Frame (Bottom) */}
        <g 
          className="node-card" 
          transform="translate(250, 420)" 
          onClick={() => onSelectStudio && onSelectStudio('frame')}
        >
          <rect x="-70" y="-30" width="140" height="60" rx="8" fill="#FBEBC0" stroke="#E8C870" strokeWidth="1.5" />
          <text x="0" y="-8" textAnchor="middle" fill="#1C1A17" fontSize="13" fontWeight="700">Frame</text>
          <text x="0" y="6" textAnchor="middle" fill="#7A3E2B" fontSize="9" fontWeight="600">by BHX Media</text>
          <text x="0" y="18" textAnchor="middle" fill="#4E4130" fontSize="9">Brand Content &amp; Films</text>
        </g>

        {/* Studio 4: Creator Circle (Left) */}
        <g 
          className="node-card" 
          transform="translate(80, 250)" 
          onClick={() => onSelectStudio && onSelectStudio('creator-circle')}
        >
          <rect x="-70" y="-30" width="140" height="60" rx="8" fill="#FBEBC0" stroke="#E8C870" strokeWidth="1.5" />
          <text x="0" y="-8" textAnchor="middle" fill="#1C1A17" fontSize="13" fontWeight="700">Creator Circle</text>
          <text x="0" y="6" textAnchor="middle" fill="#7A3E2B" fontSize="9" fontWeight="600">by BHX Media</text>
          <text x="0" y="18" textAnchor="middle" fill="#4E4130" fontSize="9">Influencer Marketing</text>
        </g>
      </svg>
    </div>
  );
}
