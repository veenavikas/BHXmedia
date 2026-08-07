import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, Video, User, Mail, MessageSquare, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Date & Time, 2: Project Details, 3: Confirmation
  const [selectedDate, setSelectedDate] = useState('2026-08-10');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Vlogging Production',
    budget: '$2,500 – $5,000',
    notes: '',
  });

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:30 AM', '01:30 PM', '03:00 PM', '04:30 PM'
  ];

  const dates = [
    { day: 'Mon', date: 'Aug 10', value: '2026-08-10' },
    { day: 'Tue', date: 'Aug 11', value: '2026-08-11' },
    { day: 'Wed', date: 'Aug 12', value: '2026-08-12' },
    { day: 'Thu', date: 'Aug 13', value: '2026-08-13' },
    { day: 'Fri', date: 'Aug 14', value: '2026-08-14' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
    
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Ignore if confetti fails
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px', padding: '2.5rem' }}>
        {/* Modal Top Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--accent-primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Video size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                Book a Strategy Call
              </h3>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                20-Min Video Consultation with BHX Team
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Step Indicator */}
        {step !== 3 && (
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
            <div style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: 'var(--accent-primary)' }} />
            <div style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: step >= 2 ? 'var(--accent-primary)' : 'var(--border-subtle)' }} />
          </div>
        )}

        {/* STEP 1: DATE & TIME PICKER */}
        {step === 1 && (
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              1. Select a Date & Time Slot
            </h4>

            {/* Dates Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.6rem', marginBottom: '1.5rem' }}>
              {dates.map((d) => (
                <button
                  key={d.value}
                  onClick={() => setSelectedDate(d.value)}
                  style={{
                    padding: '0.75rem 0.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: selectedDate === d.value ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                    backgroundColor: selectedDate === d.value ? 'var(--accent-light)' : '#FFFFFF',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{d.day}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{d.date}</div>
                </button>
              ))}
            </div>

            {/* Time Slots Grid */}
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.6rem' }}>
              Available Time Slots (EST)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.6rem', marginBottom: '2rem' }}>
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  style={{
                    padding: '0.7rem',
                    borderRadius: 'var(--radius-sm)',
                    border: selectedTime === slot ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                    backgroundColor: selectedTime === slot ? 'var(--accent-primary)' : '#FFFFFF',
                    color: selectedTime === slot ? '#FFFFFF' : 'var(--text-primary)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>

            <button onClick={() => setStep(2)} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Continue to Project Details</span>
            </button>
          </div>
        )}

        {/* STEP 2: PROJECT & CONTACT DETAILS */}
        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
              2. Your Details & Project Scope
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Riviera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    outline: 'none',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@creator.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    outline: 'none',
                    fontSize: '0.95rem',
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    outline: 'none',
                    fontSize: '0.95rem',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <option value="Vlogging Production">Vlogging Production</option>
                  <option value="Shorts & Reels Editing">Shorts & Reels Editing</option>
                  <option value="Podcast Production">Podcast Production</option>
                  <option value="Brand & Commercial Shoot">Brand & Commercial Shoot</option>
                  <option value="Post-Production / Color / Sound">Post-Production / Color / Sound</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                  Target Monthly Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    outline: 'none',
                    fontSize: '0.95rem',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <option value="$1,500 – $2,500">$1,500 – $2,500</option>
                  <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                  <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                  <option value="$10,000+ Custom">$10,000+ Custom</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                Channel Link or Brief Notes (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share your YouTube/TikTok link or project requirements..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  outline: 'none',
                  fontSize: '0.95rem',
                  resize: 'vertical',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button type="button" onClick={() => setStep(1)} className="btn btn-secondary">
                Back
              </button>
              <button type="submit" className="btn btn-primary btn-lg" style={{ flex: 1, justifyContent: 'center' }}>
                <Send size={18} />
                <span>Confirm Call Booking</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: CONFIRMATION SUCCESS */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-light)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}
            >
              <CheckCircle size={40} />
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Call Confirmed, {formData.name || 'Creator'}!
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
              We’ve scheduled your 20-min strategy session for <strong>{selectedDate} at {selectedTime}</strong>. Calendar invite sent to <strong>{formData.email || 'your email'}</strong>.
            </p>

            <button onClick={onClose} className="btn btn-primary btn-lg">
              <span>Back to Site</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
