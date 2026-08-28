import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Settings, ArrowLeft } from 'lucide-react';
import './MeetPage.css';

export default function MeetPage({ onBackToHome }) {
  // Default Meet URL or read from URL query param `?link=...`
  const [meetUrl, setMeetUrl] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const linkParam = params.get('link') || params.get('meet');
    if (linkParam) return linkParam;
    return localStorage.getItem('bhx_meet_url') || 'https://meet.google.com/vxd-hrkm-hxp';
  });

  const [copied, setCopied] = useState(false);
  const [isEditingLink, setIsEditingLink] = useState(false);
  const [tempUrl, setTempUrl] = useState(meetUrl);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(meetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveLink = () => {
    let formatted = tempUrl.trim();
    if (formatted && !formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = 'https://' + formatted;
    }
    if (formatted) {
      setMeetUrl(formatted);
      localStorage.setItem('bhx_meet_url', formatted);
    }
    setIsEditingLink(false);
  };

  const handleJoinMeet = () => {
    window.open(meetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="meet-container">
      {/* Top Bar Navigation */}
      <div className="meet-top-bar">
        {onBackToHome ? (
          <button className="meet-back-btn" onClick={onBackToHome}>
            <ArrowLeft size={16} /> Back to Website
          </button>
        ) : (
          <a href="/" className="meet-back-btn">
            <ArrowLeft size={16} /> Back to Website
          </a>
        )}

        <button 
          className="meet-link-editor-trigger"
          onClick={() => { setTempUrl(meetUrl); setIsEditingLink(true); }}
          title="Configure Google Meet Link"
        >
          <Settings size={14} /> Configure Link
        </button>
      </div>

      <div className="meet-wrapper">
        {/* Left Column: BHX Media Brand Header & Services Grid */}
        <div className="meet-brand-section">
          <div className="meet-brand-header">
            <h1 className="meet-main-logo">
              B H X <span className="media-text">Media<span className="dot-red">.</span></span>
            </h1>
            <p className="meet-sub-tagline">Building ROI with content, at scale.</p>
          </div>

          {/* Sub-Brands & Offerings Grid */}
          <div className="meet-logos-grid">
            {/* 1. BHX Strategy */}
            <div className="sub-logo-item" title="Content Strategy & Positioning">
              <svg className="sub-logo-svg" viewBox="0 0 160 48" fill="none">
                <text x="0" y="24" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" fill="#111">strategy</text>
                <text x="88" y="24" fontFamily="serif" fontStyle="italic" fontWeight="700" fontSize="22" fill="#e53935">fx</text>
                <rect x="0" y="32" width="150" height="12" rx="2" fill="#1a73e8" />
                <text x="4" y="41" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#fff">Positioning &amp; Brand Strategy</text>
              </svg>
            </div>

            {/* 2. Brand Films */}
            <div className="sub-logo-item" title="Brand Films & Media">
              <svg className="sub-logo-svg" viewBox="0 0 140 48" fill="none">
                <path d="M10 12 C 20 2, 35 22, 50 10 C 65 0, 80 20, 95 10" stroke="#e91e63" strokeWidth="2.5" fill="none" />
                <text x="8" y="34" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="600" fontSize="22" fill="#e91e63">Films</text>
                <text x="68" y="34" fontFamily="sans-serif" fontWeight="700" fontSize="20" fill="#e53935">fx</text>
              </svg>
            </div>

            {/* 3. Performance Marketing */}
            <div className="sub-logo-item" title="Performance Marketing">
              <svg className="sub-logo-svg" viewBox="0 0 140 48" fill="none">
                <text x="0" y="26" fontFamily="Impact, Arial Black" fontSize="20" fill="#ff6600">PERFORM</text>
                <text x="86" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="18" fill="#003399">Fx</text>
                <rect x="110" y="10" width="24" height="18" rx="3" fill="#cc0000" />
                <text x="113" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="11" fill="#fff">ROI</text>
              </svg>
            </div>

            {/* 4. Research & Insights */}
            <div className="sub-logo-item" title="Research & Insights">
              <svg className="sub-logo-svg" viewBox="0 0 150 48" fill="none">
                <g fill="#ff9800">
                  <rect x="0" y="12" width="3" height="16" rx="1.5" />
                  <rect x="5" y="6" width="3" height="28" rx="1.5" fill="#f57c00" />
                  <rect x="10" y="2" width="3" height="34" rx="1.5" fill="#e65100" />
                  <rect x="15" y="8" width="3" height="24" rx="1.5" fill="#f57c00" />
                  <rect x="20" y="14" width="3" height="12" rx="1.5" fill="#ff9800" />
                </g>
                <text x="32" y="28" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="16" fill="#1e293b">Research<tspan fill="#e53935">Fx</tspan></text>
              </svg>
            </div>

            {/* 5. BHX Academy */}
            <div className="sub-logo-item" title="Specialist Network & Academy">
              <svg className="sub-logo-svg" viewBox="0 0 150 48" fill="none">
                <text x="0" y="20" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="18" fill="#111">bhx<tspan fill="#e53935">fx</tspan></text>
                <text x="0" y="38" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13" letterSpacing="4" fill="#333">ACADEMY</text>
                <line x1="0" y1="42" x2="135" y2="42" stroke="#e53935" strokeWidth="2" />
              </svg>
            </div>

            {/* 6. White Label Services */}
            <div className="sub-logo-item" title="White Label Content">
              <svg className="sub-logo-svg" viewBox="0 0 150 48" fill="none">
                <text x="0" y="20" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="18" fill="#111">bhx<tspan fill="#e53935">media</tspan></text>
                <text x="0" y="38" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="10" letterSpacing="2" fill="#555">WHITE LABEL</text>
              </svg>
            </div>

            {/* 7. Micro-Drama & Creator */}
            <div className="sub-logo-item" title="Micro-Drama & Creator Content">
              <svg className="sub-logo-svg" viewBox="0 0 140 48" fill="none">
                <text x="0" y="20" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="11" letterSpacing="2" fill="#e53935">CREATOR</text>
                <rect x="0" y="24" width="46" height="20" fill="#e53935" rx="2" />
                <text x="8" y="40" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="17" fill="#ffffff">FX</text>
              </svg>
            </div>

            {/* 8. Employer Branding & PR */}
            <div className="sub-logo-item" title="Employer Branding & PR">
              <svg className="sub-logo-svg" viewBox="0 0 130 48" fill="none">
                <g>
                  <rect x="0" y="6" width="4" height="34" fill="#9c27b0" />
                  <rect x="6" y="12" width="4" height="28" fill="#4caf50" />
                  <rect x="12" y="2" width="4" height="38" fill="#ffeb3b" />
                  <rect x="18" y="18" width="4" height="22" fill="#e91e63" />
                </g>
                <text x="30" y="24" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="20" fill="#222">PR</text>
                <text x="30" y="40" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="16" fill="#e53935">FX</text>
              </svg>
            </div>

            {/* 9. Creative Art & Craft */}
            <div className="sub-logo-item" title="Creative Craft & Design">
              <svg className="sub-logo-svg" viewBox="0 0 130 48" fill="none">
                <text x="10" y="32" fontFamily="Brush Script MT, cursive, Georgia" fontSize="36" fill="#d32f2f">Art</text>
                <path d="M 5 38 Q 45 46 95 36" stroke="#d32f2f" strokeWidth="2.5" fill="none" />
              </svg>
            </div>

            {/* 10. Event Content */}
            <div className="sub-logo-item" title="Event Content & Launch">
              <svg className="sub-logo-svg" viewBox="0 0 140 48" fill="none">
                <text x="0" y="30" fontFamily="Courier New, monospace" fontWeight="900" fontSize="22" letterSpacing="1" fill="#3f51b5">EVENT</text>
                <text x="84" y="30" fontFamily="sans-serif" fontStyle="italic" fontWeight="700" fontSize="20" fill="#e53935">fx</text>
              </svg>
            </div>

            {/* 11. Studio FX */}
            <div className="sub-logo-item" title="BHX Production Studio">
              <svg className="sub-logo-svg" viewBox="0 0 140 48" fill="none">
                <text x="0" y="24" fontFamily="Impact, Arial Black" fontSize="22" letterSpacing="1" fill="#111">STUDIO</text>
                <text x="0" y="44" fontFamily="Arial Black, sans-serif" fontSize="24" fill="#111">FX</text>
                <circle cx="36" cy="38" r="4" fill="#e53935" />
              </svg>
            </div>

            {/* 12. Business Transformation */}
            <div className="sub-logo-item" title="Business Transformation">
              <svg className="sub-logo-svg" viewBox="0 0 160 48" fill="none">
                <text x="0" y="22" fontFamily="Arial Black, sans-serif" fontSize="20" fill="#2e7d32">BHX</text>
                <text x="0" y="42" fontFamily="Arial Black, sans-serif" fontSize="20" fill="#e65100">SCALE</text>
                <text x="54" y="18" fontFamily="sans-serif" fontWeight="bold" fontSize="7" fill="#2e7d32">CONTENT</text>
                <text x="54" y="27" fontFamily="sans-serif" fontWeight="bold" fontSize="7" fill="#2e7d32">BUSINESS</text>
                <text x="54" y="36" fontFamily="sans-serif" fontWeight="bold" fontSize="7" fill="#2e7d32">TRANSFORMATION</text>
                <text x="54" y="45" fontFamily="sans-serif" fontWeight="bold" fontSize="7" fill="#2e7d32">&amp; SCALE</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: Click to Join & Google Meet Badge */}
        <div className="meet-action-section">
          <h2 className="meet-click-label">CLICK TO JOIN</h2>

          <div 
            className="meet-join-card" 
            onClick={handleJoinMeet}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleJoinMeet()}
          >
            {/* Authentic 4-Color Google Meet SVG Icon */}
            <div className="meet-icon-container">
              <svg viewBox="0 0 96 96" width="100%" height="100%" fill="none">
                {/* Yellow Right Top Triangle */}
                <path d="M78 26 L58 42 L58 54 L78 70 C83 73.5 90 69.8 90 63.5 L90 32.5 C90 26.2 83 22.5 78 26 Z" fill="#ffba00" />
                {/* Green Main Camera Body */}
                <path d="M12 22 C6.5 22 2 26.5 2 32 L2 64 C2 69.5 6.5 74 12 74 L50 74 C55.5 74 60 69.5 60 64 L60 32 C60 26.5 55.5 22 50 22 L12 22 Z" fill="#00832d" />
                {/* Blue Top Bar */}
                <path d="M12 22 L50 22 C55.5 22 60 26.5 60 32 L60 48 L12 22 Z" fill="#1a73e8" />
                {/* Red Triangle Overlay */}
                <path d="M60 48 L60 64 C60 69.5 55.5 74 50 74 L32 74 L60 48 Z" fill="#ea4335" />
              </svg>
            </div>

            {/* Google Meet Typography */}
            <div className="google-meet-text">
              Google <span>Meet</span>
            </div>
          </div>

          {/* Options Bar: Copy Link / Direct URL */}
          <div className="meet-options-bar">
            <button className="meet-copy-btn" onClick={handleCopy}>
              {copied ? <Check size={14} color="#00832d" /> : <Copy size={14} />}
              {copied ? 'Link Copied!' : 'Copy Meet Link'}
            </button>

            <a 
              href={meetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="meet-direct-link-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} /> Open Directly
            </a>
          </div>
        </div>
      </div>

      {/* Edit Meet Link Modal */}
      {isEditingLink && (
        <div className="meet-link-modal-overlay" onClick={() => setIsEditingLink(false)}>
          <div className="meet-link-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Set Custom Google Meet Link</h3>
            <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
              Paste your Google Meet room URL (e.g. <code>https://meet.google.com/xyz-abc-def</code>):
            </p>
            <input
              type="text"
              className="meet-link-input"
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              placeholder="https://meet.google.com/..."
              autoFocus
            />
            <div className="meet-modal-actions">
              <button className="meet-modal-cancel" onClick={() => setIsEditingLink(false)}>
                Cancel
              </button>
              <button className="meet-modal-save" onClick={handleSaveLink}>
                Save Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
