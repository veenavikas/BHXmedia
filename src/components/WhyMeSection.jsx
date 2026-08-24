import React from 'react';
import { SITE_DATA } from '../data/siteData';

export default function WhyMeSection() {
  const { about } = SITE_DATA;

  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="why-grid">
          <div className="rv">
            <span className="mono eyebrow">{about.eyebrow}</span>
            <p className="why-quote">
              Anyone can make content now. The rare skill is knowing <span className="em">what is worth making</span>, and whether it is good enough to ship.
            </p>
            <p className="why-cite">{about.cite}</p>
          </div>

          <div className="proof-list rv">
            {about.proofList.map((item, idx) => (
              <div key={idx} className="proof-row">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="numbers rv">
          {about.numbers.map((num, idx) => (
            <div key={idx} className="num">
              <b>{num.value}</b>
              <span>{num.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
