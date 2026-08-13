import React, { useEffect } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', padding: '32px' }}>
        
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid var(--hairline)', paddingBottom: '16px' }}>
          <div>
            <span className="mono" style={{ color: 'var(--red)' }}>DIRECT BOOKING</span>
            <h2 className="section-title" style={{ fontSize: '24px' }}>
              Book a 30-minute content audit<span className="stop">.</span>
            </h2>
          </div>

          <button 
            onClick={onClose}
            className="btn btn-ghost"
            style={{ fontSize: '11px', padding: '6px 12px' }}
            aria-label="Close booking modal"
          >
            ✕ CLOSE
          </button>
        </div>

        <p className="body-text" style={{ fontSize: '15px', color: 'var(--grey)', marginBottom: '24px' }}>
          Select a time for a 30-minute diagnosis of your current content engine. We will identify where content leaks money and deliver a clear action plan.
        </p>

        {/* Embedded Cal.com / Calendly Widget Frame */}
        <div style={{ border: '1px solid var(--hairline)', borderRadius: '2px', overflow: 'hidden', height: '480px', background: '#FFFFFF' }}>
          <iframe 
            src="https://cal.com/embed/bhxmedia/30min" 
            title="Book a 30-minute content audit with Bharath C.S."
            style={{ width: '100%', height: '100%', border: 'none' }}
            onError={(e) => {
              // Fallback placeholder if embed fails in local test
              e.target.style.display = 'none';
            }}
          />
          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--grey)' }} className="iframe-fallback">
            <p className="body-text" style={{ marginBottom: '16px' }}>
              Prefer to book directly or send a message?
            </p>
            <a href="mailto:bharath@bhxmedia.com" className="btn btn-primary">
              Email bharath@bhxmedia.com
            </a>
          </div>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <span className="mono" style={{ fontSize: '11px' }}>Direct contact: bharath@bhxmedia.com</span>
        </div>

      </div>
    </div>
  );
}
