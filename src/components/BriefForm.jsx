import React, { useState, useEffect } from 'react';

export default function BriefForm({ preselectedStudio = '', onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    country: 'India',
    phone: '',
    studios: preselectedStudio ? [preselectedStudio] : [],
    objective: '',
    budget: '',
    timeline: 'Within 1 month',
    linkOrFile: '',
    referralSource: 'LinkedIn',
    privacyConsent: false,
    utmSource: '',
    utmMedium: '',
    utmCampaign: ''
  });

  useEffect(() => {
    // Capture URL UTM parameters if available
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || ''
    }));
  }, []);

  const handleStudioToggle = (studioName) => {
    setFormData(prev => {
      const exists = prev.studios.includes(studioName);
      if (exists) {
        return { ...prev, studios: prev.studios.filter(s => s !== studioName) };
      } else {
        return { ...prev, studios: [...prev.studios, studioName] };
      }
    });
  };

  const isIndia = formData.country === 'India';

  const budgetOptions = isIndia ? [
    '₹1.5L - ₹5L',
    '₹5L - ₹15L',
    '₹15L - ₹50L',
    '₹50L+'
  ] : [
    '$2,500 - $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      alert('Please accept the privacy policy consent to submit.');
      return;
    }

    // Save to local storage log for persistence
    const existing = JSON.parse(localStorage.getItem('bhx_briefs') || '[]');
    existing.push({ ...formData, submittedAt: new Date().toISOString() });
    localStorage.setItem('bhx_briefs', JSON.stringify(existing));

    if (onSubmitSuccess) {
      onSubmitSuccess();
    } else {
      window.location.href = '/thank-you';
    }
  };

  const studiosList = [
    'The Engine',
    'Longform',
    'Cliffhanger',
    'Frame',
    'Creator Circle',
    'Not sure'
  ];

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px', textAlign: 'left' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
            Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
            Company / Organization *
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Company name"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
            Role *
          </label>
          <input
            type="text"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            placeholder="e.g. CMO, Founder, Producer"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
            Work Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
            Country *
          </label>
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value, budget: '' })}
            style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px' }}
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Singapore">Singapore</option>
            <option value="UAE">United Arab Emirates</option>
            <option value="Other">Other International</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px' }}
          />
        </div>
      </div>

      {/* Multi-select Studio */}
      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '8px', color: 'var(--text-muted-dark)' }}>
          Studios Needed (Multi-select)
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {studiosList.map(st => {
            const selected = formData.studios.includes(st);
            return (
              <button
                type="button"
                key={st}
                onClick={() => handleStudioToggle(st)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 500,
                  border: selected ? '1px solid #C6884F' : '1px solid #33302B',
                  background: selected ? 'rgba(198, 136, 79, 0.15)' : '#242220',
                  color: selected ? '#C6884F' : '#B8AE9C',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {selected ? '✓ ' : ''}{st}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
          What do you want to achieve? *
        </label>
        <textarea
          required
          rows={3}
          value={formData.objective}
          onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
          placeholder="Briefly describe your goals, commercial problem, or content needs..."
          style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px', resize: 'vertical' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
            Budget Range ({isIndia ? 'INR' : 'USD'})
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px' }}
          >
            <option value="">Select budget range...</option>
            {budgetOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
            Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px' }}
          >
            <option value="Immediate / 1-2 weeks">Immediate / 1-2 weeks</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="Exploring / Planning phase">Exploring / Planning phase</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
            Link or Reference Doc (Optional)
          </label>
          <input
            type="text"
            value={formData.linkOrFile}
            onChange={(e) => setFormData({ ...formData, linkOrFile: e.target.value })}
            placeholder="https://drive.google.com/..."
            style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--text-muted-dark)' }}>
            How did you hear about us?
          </label>
          <select
            value={formData.referralSource}
            onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
            style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', background: '#242220', border: '1px solid #33302B', color: '#F4EFE5', fontSize: '14px' }}
          >
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referral / Word of mouth">Referral / Word of mouth</option>
            <option value="Google Search">Google Search</option>
            <option value="Twitter / X">Twitter / X</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Hidden UTM inputs */}
      <input type="hidden" name="utm_source" value={formData.utmSource} />
      <input type="hidden" name="utm_medium" value={formData.utmMedium} />
      <input type="hidden" name="utm_campaign" value={formData.utmCampaign} />

      {/* Consent Checkbox */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
        <input
          type="checkbox"
          id="privacyConsent"
          required
          checked={formData.privacyConsent}
          onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
          style={{ marginTop: '3px', accentColor: '#C6884F' }}
        />
        <label htmlFor="privacyConsent" style={{ fontSize: '13px', color: '#B8AE9C', lineHeight: 1.4 }}>
          I agree to BHX Media handling my submitted project details as described in the <a href="/privacy" style={{ color: '#C6884F', textDecoration: 'underline' }}>Privacy Policy</a>.
        </label>
      </div>

      <button type="submit" className="btn-copper" style={{ width: '100%', padding: '14px', fontSize: '15px', fontWeight: 700, marginTop: '8px' }}>
        Submit Brief &rarr;
      </button>
    </form>
  );
}
