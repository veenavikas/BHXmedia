import React from 'react';

export default function Navbar({ minimal = false, currentPath = '/', onNavigate, onOpenBooking }) {
  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(27, 26, 24, 0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-dark)',
      padding: '16px 0'
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo: Direction B "The Intersection" */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')} 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: '1.5px solid var(--accent)',
            color: 'var(--accent)',
            fontSize: '11px',
            fontWeight: 700
          }}>
            ✦
          </span>
          <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', color: '#F4EFE5' }}>
            BHX <span style={{ fontWeight: 400, color: '#B8AE9C' }}>Media</span>
          </span>
        </a>

        {/* Full Nav (Hidden if minimal mode on Studio Landing pages) */}
        {!minimal && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a 
              href="/work" 
              onClick={(e) => handleNavClick(e, '/work')}
              style={{ fontSize: '14px', fontWeight: 500, color: currentPath === '/work' ? '#C6884F' : '#B8AE9C' }}
            >
              Work
            </a>

            <a 
              href="/about" 
              onClick={(e) => handleNavClick(e, '/about')}
              style={{ fontSize: '14px', fontWeight: 500, color: currentPath === '/about' ? '#C6884F' : '#B8AE9C' }}
            >
              About
            </a>

            <a 
              href="/insights" 
              onClick={(e) => handleNavClick(e, '/insights')}
              style={{ fontSize: '14px', fontWeight: 500, color: currentPath.startsWith('/insights') ? '#C6884F' : '#B8AE9C' }}
            >
              Insights
            </a>

            <button 
              onClick={() => handleNavClick(null, '/brief')} 
              className="btn-outline" 
              style={{ padding: '8px 16px', fontSize: '13px' }}
            >
              Start a brief
            </button>

            <button 
              onClick={onOpenBooking} 
              className="btn-copper" 
              style={{ padding: '8px 16px', fontSize: '13px' }}
            >
              Book a call
            </button>
          </nav>
        )}

        {/* Minimal Mode Call Button */}
        {minimal && (
          <button 
            onClick={onOpenBooking} 
            className="btn-copper" 
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            Book a call
          </button>
        )}

      </div>
    </header>
  );
}
