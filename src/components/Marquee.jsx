import React from 'react';
import { SITE_DATA } from '../data/siteData';

export default function Marquee() {
  const { trustCompanies } = SITE_DATA.hero;

  return (
    <div className="trust" aria-label="Selected clients and platforms">
      <div className="trust-track">
        {[...trustCompanies, ...trustCompanies, ...trustCompanies].map((company, idx) => (
          <span key={idx} className="trust-item">
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}
