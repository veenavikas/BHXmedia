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
      backgroundColor: 'rgba(246, 222, 154, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--bhx-border)',
      padding: '16px 0'
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo: Official BHX Logo with Laterite Bindu */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')} 
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <img 
            src="/BHX_standard_ink_yellowbg.svg" 
            alt="BHX Media" 
            style={{ height: '34px', width: 'auto', display: 'block' }} 
          />
        </a>

        {/* Full Nav (Hidden if minimal mode on Studio Landing pages) */}
        {!minimal && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a 
              href="/work" 
              onClick={(e) => handleNavClick(e, '/work')}
              style={{ fontSize: '15px', fontWeight: 600, color: currentPath === '/work' ? 'var(--bhx-laterite)' : 'var(--bhx-text)' }}
            >
              Work
            </a>

            <a 
              href="/about" 
              onClick={(e) => handleNavClick(e, '/about')}
              style={{ fontSize: '15px', fontWeight: 600, color: currentPath === '/about' ? 'var(--bhx-laterite)' : 'var(--bhx-text)' }}
            >
              About
            </a>

            <a 
              href="/insights" 
              onClick={(e) => handleNavClick(e, '/insights')}
              style={{ fontSize: '15px', fontWeight: 600, color: currentPath.startsWith('/insights') ? 'var(--bhx-laterite)' : 'var(--bhx-text)' }}
            >
              Insights
            </a>

            <button 
              onClick={(e) => handleNavClick(e, '/brief')} 
              className="btn-outline" 
              style={{ padding: '8px 18px', fontSize: '13px' }}
            >
              Start a brief
            </button>

            <button 
              onClick={onOpenBooking} 
              className="btn-copper" 
              style={{ padding: '8px 18px', fontSize: '13px' }}
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
            style={{ padding: '8px 18px', fontSize: '13px' }}
          >
            Book a call
          </button>
        )}

      </div>
    </header>
  );
}
