import React from 'react';

export default function PrivacyView() {
  return (
    <div style={{ backgroundColor: 'var(--bhx-bg-reading)', minHeight: '100vh', padding: '64px 0 96px', color: 'var(--bhx-text)' }}>
      <div className="wrap" style={{ maxWidth: '800px' }}>
        
        <div className="laterite-tag" style={{ marginBottom: '12px' }}>Legal &amp; Compliance</div>
        <h1 style={{ fontSize: '36px', color: 'var(--bhx-text)', marginBottom: '24px' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--bhx-muted)', marginBottom: '40px' }}>
          Last Updated: October 2, 2026
        </p>

        <div style={{ display: 'grid', gap: '28px', color: 'var(--bhx-muted)', fontSize: '15.5px', lineHeight: 1.7 }}>
          <section>
            <h2 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>1. Information We Collect</h2>
            <p>
              When you submit a brief or contact request on BHX Media (bhxmedia.com), we collect personal information necessary to respond to your inquiry and evaluate project scope. This includes your name, company, role, email address, country, phone number (if provided), project budget, timeline, and brief description.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>2. How We Use Your Data</h2>
            <p>
              We use your submitted data exclusively to evaluate your creative strategy request, schedule scoping conversations, communicate project proposals, and maintain client records. We do not sell, rent, or share your personal data with third-party advertisers.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>3. Analytics &amp; Tracking</h2>
            <p>
              We collect anonymised usage statistics via analytics tools (Google Analytics 4, LinkedIn Insight Tag) to improve site performance and measure marketing campaign efficacy. We capture campaign UTM parameters to identify referral sources.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>4. Data Security &amp; Retention</h2>
            <p>
              We maintain strict technical and operational safeguards to protect your personal data. Submitted briefs are retained only for as long as necessary to fulfill project evaluation or ongoing business relationships.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '22px', color: 'var(--bhx-text)', marginBottom: '12px' }}>5. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to update or delete your submitted information, please contact Bharath C.S. at <a href="mailto:bharath@bhxmedia.com" style={{ color: 'var(--bhx-laterite)', fontWeight: 600 }}>bharath@bhxmedia.com</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
