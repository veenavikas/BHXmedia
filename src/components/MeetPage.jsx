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
        {/* Left Column: BHX Media Brand Header & 4 Studios Grid */}
        <div className="meet-brand-section">
          <div className="meet-brand-header">
            {/* Official Vector Logo with Laterite Bindu */}
            <a href="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
              <img 
                src="/BHX_standard_ink_yellowbg.svg" 
                alt="BHX Media" 
                style={{ height: '48px', width: 'auto', display: 'block' }} 
              />
            </a>
            <p className="meet-sub-tagline">
              We decide what is worth making. Then we make it pay.
            </p>
          </div>

          {/* 4 Specialized BHX Studios Grid */}
          <div className="meet-studios-grid">
            {/* 1. Longform */}
            <div className="meet-studio-card">
              <div className="meet-studio-title">Longform</div>
              <div className="meet-studio-tag">by BHX Media</div>
              <p className="meet-studio-desc">TV shows &amp; long-form series engineered for ratings.</p>
            </div>

            {/* 2. Cliffhanger */}
            <div className="meet-studio-card">
              <div className="meet-studio-title">Cliffhanger</div>
              <div className="meet-studio-tag">by BHX Media</div>
              <p className="meet-studio-desc">AI micro-drama &amp; Script Intelligence reports.</p>
            </div>

            {/* 3. Frame */}
            <div className="meet-studio-card">
              <div className="meet-studio-title">Frame</div>
              <div className="meet-studio-tag">by BHX Media</div>
              <p className="meet-studio-desc">Brand content &amp; commercial films that sell.</p>
            </div>

            {/* 4. Creator Circle */}
            <div className="meet-studio-card">
              <div className="meet-studio-title">Creator Circle</div>
              <div className="meet-studio-tag">by BHX Media</div>
              <p className="meet-studio-desc">Influencer marketing driven by transparent ROAS.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Click to Join & Google Meet Badge */}
        <div className="meet-action-section">
          <div className="meet-click-label">CLICK TO JOIN CALL</div>

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
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Link Copied!' : 'Copy Meet Link'}
            </button>

            <a 
              href={meetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="meet-direct-link-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} /> Open Directly
            </a>
          </div>
        </div>
      </div>

      {/* Edit Meet Link Modal */}
      {isEditingLink && (
        <div className="meet-link-modal-overlay" onClick={() => setIsEditingLink(false)}>
          <div className="meet-link-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Set Custom Google Meet Link</h3>
            <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--bhx-muted)' }}>
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
