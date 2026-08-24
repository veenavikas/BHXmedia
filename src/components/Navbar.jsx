import React from 'react';

export default function Navbar({ onOpenBooking }) {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand">
          <span className="wm">BHX<span className="dot"></span></span>
          <span className="media">Media</span>
        </a>
        <nav className="nav-links">
          <a className="lnk" href="#work">Work</a>
          <a className="lnk" href="#services">Services</a>
          <a className="lnk" href="#model">How I work</a>
          <button className="btn btn-gold nav-cta" onClick={onOpenBooking}>
            Book a call
          </button>
        </nav>
      </div>
    </header>
  );
}
