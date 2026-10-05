import React from 'react';

export default function Footer({ onNavigate }) {
  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <footer className="band-dark" style={{
      backgroundColor: '#1C1A17',
      borderTop: '1px solid #33302B',
      padding: '56px 0 36px',
      color: '#F4EFE6',
      fontSize: '14px'
    }}>
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Top Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              {/* Footer Logo with Turmeric bindu on Ink band */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span style={{
                  display: 'inline-block',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#E0A21B'
                }}></span>
                <span style={{ fontSize: '20px', fontWeight: 700, color: '#F4EFE6', letterSpacing: '-0.02em' }}>
                  BHX <span style={{ fontWeight: 400, color: '#D4CDC3' }}>Media</span>
                </span>
              </div>
              <p style={{ maxWidth: '340px', fontSize: '14px', color: '#D4CDC3', lineHeight: 1.5 }}>
                BHX Media is a creative strategy company. We decide what content is worth making, then make it pay.
              </p>
            </div>

            {/* Links Columns */}
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ color: '#E0A21B', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>Studios</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px', fontSize: '13.5px' }}>
                  <li><a href="/studios/longform" onClick={(e) => handleNavClick(e, '/studios/longform')} style={{ color: '#F4EFE6' }}>Longform by BHX</a></li>
                  <li><a href="/studios/cliffhanger" onClick={(e) => handleNavClick(e, '/studios/cliffhanger')} style={{ color: '#F4EFE6' }}>Cliffhanger by BHX</a></li>
                  <li><a href="/studios/frame" onClick={(e) => handleNavClick(e, '/studios/frame')} style={{ color: '#F4EFE6' }}>Frame by BHX</a></li>
                  <li><a href="/studios/creator-circle" onClick={(e) => handleNavClick(e, '/studios/creator-circle')} style={{ color: '#F4EFE6' }}>Creator Circle by BHX</a></li>
                </ul>
              </div>

              <div>
                <div style={{ color: '#E0A21B', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>Company</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px', fontSize: '13.5px' }}>
                  <li><a href="/work" onClick={(e) => handleNavClick(e, '/work')} style={{ color: '#F4EFE6' }}>Work Index</a></li>
                  <li><a href="/about" onClick={(e) => handleNavClick(e, '/about')} style={{ color: '#F4EFE6' }}>About Bharath C.S.</a></li>
                  <li><a href="/insights" onClick={(e) => handleNavClick(e, '/insights')} style={{ color: '#F4EFE6' }}>Insights</a></li>
                  <li><a href="/brief" onClick={(e) => handleNavClick(e, '/brief')} style={{ color: '#F4EFE6' }}>Start a Brief</a></li>
                  <li><a href="/privacy" onClick={(e) => handleNavClick(e, '/privacy')} style={{ color: '#F4EFE6' }}>Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mandatory Partner Statement */}
          <div style={{
            padding: '16px 20px',
            borderRadius: '6px',
            background: '#24211D',
            border: '1px solid #3A352F',
            fontSize: '13.5px',
            color: '#D4CDC3'
          }}>
            Every BHX studio is led by BHX strategy and delivered with specialist partners.
          </div>

          {/* Bottom Copyright */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid #2E2A25',
            fontSize: '13px',
            color: '#A89E90'
          }}>
            <div>© {new Date().getFullYear()} BHX Media. All rights reserved.</div>
            <div>
              <a href="https://www.linkedin.com/in/bharathcs-bhx/" target="_blank" rel="noopener noreferrer" style={{ color: '#E0A21B', textDecoration: 'underline' }}>
                Bharath C.S. on LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
