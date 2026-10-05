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
    <footer style={{
      backgroundColor: '#141312',
      borderTop: '1px solid var(--border-dark)',
      padding: '48px 0 32px',
      color: 'var(--text-muted-dark)',
      fontSize: '14px'
    }}>
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Top Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✦</span>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#F4EFE5' }}>
                  BHX <span style={{ fontWeight: 400, color: '#B8AE9C' }}>Media</span>
                </span>
              </div>
              <p style={{ maxWidth: '340px', fontSize: '14px', color: '#B8AE9C' }}>
                BHX Media is a creative strategy company. We decide what content is worth making, then make it pay.
              </p>
            </div>

            {/* Links Columns */}
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              <div>
                <div className="copper-tag" style={{ marginBottom: '12px', fontSize: '11px' }}>Studios</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px', fontSize: '13.5px' }}>
                  <li><a href="/studios/longform" onClick={(e) => handleNavClick(e, '/studios/longform')}>Longform by BHX</a></li>
                  <li><a href="/studios/cliffhanger" onClick={(e) => handleNavClick(e, '/studios/cliffhanger')}>Cliffhanger by BHX</a></li>
                  <li><a href="/studios/frame" onClick={(e) => handleNavClick(e, '/studios/frame')}>Frame by BHX</a></li>
                  <li><a href="/studios/creator-circle" onClick={(e) => handleNavClick(e, '/studios/creator-circle')}>Creator Circle by BHX</a></li>
                </ul>
              </div>

              <div>
                <div className="copper-tag" style={{ marginBottom: '12px', fontSize: '11px' }}>Company</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px', fontSize: '13.5px' }}>
                  <li><a href="/work" onClick={(e) => handleNavClick(e, '/work')}>Work Index</a></li>
                  <li><a href="/about" onClick={(e) => handleNavClick(e, '/about')}>About Bharath C.S.</a></li>
                  <li><a href="/insights" onClick={(e) => handleNavClick(e, '/insights')}>Insights</a></li>
                  <li><a href="/brief" onClick={(e) => handleNavClick(e, '/brief')}>Start a Brief</a></li>
                  <li><a href="/privacy" onClick={(e) => handleNavClick(e, '/privacy')}>Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mandatory Partner Statement */}
          <div style={{
            padding: '16px 20px',
            borderRadius: '6px',
            background: '#1B1A18',
            border: '1px solid #33302B',
            fontSize: '13.5px',
            color: '#B8AE9C'
          }}>
            Every BHX studio is led by BHX strategy and delivered with specialist partners.
          </div>

          {/* Bottom Copyright */}
          <div style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid #282623',
            fontSize: '13px',
            color: '#8A8275'
          }}>
            <div>© {new Date().getFullYear()} BHX Media. All rights reserved.</div>
            <div>
              <a href="https://www.linkedin.com/in/bharathcs-bhx/" target="_blank" rel="noopener noreferrer" style={{ color: '#B8AE9C', textDecoration: 'underline' }}>
                Bharath C.S. on LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
