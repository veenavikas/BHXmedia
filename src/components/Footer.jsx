import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="wrap ft-inner">
        <a href="#top" className="ft-brand">
          <span className="wm">BHX<span className="dot"></span></span>
          <span className="media">Media</span>
        </a>
        <span className="l">Bharath C.S. · Content Business Specialist</span>
        <span className="l">© {currentYear} BHX Media</span>
      </div>
    </footer>
  );
}
