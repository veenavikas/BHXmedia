import React from 'react';
import BriefForm from './BriefForm';

export default function BriefView({ onNavigate }) {
  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', padding: '64px 0 96px' }}>
      <div className="wrap" style={{ maxWidth: '760px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="copper-tag" style={{ marginBottom: '12px' }}>Project Submission</div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: '#F4EFE5', marginBottom: '16px' }}>
            Start a Brief with BHX Media
          </h1>
          <p style={{ fontSize: '16px', color: '#B8AE9C', lineHeight: 1.6, maxWidth: '58ch', margin: '0 auto' }}>
            Fill in your project goals below. Whether you need strategy, micro-drama, brand films, or creator campaigns, we review every brief within 24 hours.
          </p>
        </div>

        <div style={{
          backgroundColor: '#1E1C1A',
          border: '1px solid #33302B',
          borderRadius: '12px',
          padding: '36px'
        }}>
          <BriefForm onSubmitSuccess={() => {
            if (onNavigate) onNavigate('/thank-you');
            else window.location.href = '/thank-you';
          }} />
        </div>

      </div>
    </div>
  );
}
