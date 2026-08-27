import React from 'react';

export default function Footer({ onNavigateMeet }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="wrap ft-inner">
        <a href="#top" className="ft-brand">
          <span className="wm">BHX<span className="dot"></span></span>
          <span className="media">Media</span>
        </a>
        <span className="l">Bharath C.S. · Content Business Specialist</span>
        <a 
          href="/meet" 
          className="l" 
          style={{ textDecoration: 'underline', color: 'inherit' }}
          onClick={(e) => { e.preventDefault(); if (onNavigateMeet) onNavigateMeet(); else window.location.href = '/meet'; }}
        >
          Google Meet Link Page
        </a>
        <span className="l">© {currentYear} BHX Media</span>
      </div>
    </footer>
  );
}
