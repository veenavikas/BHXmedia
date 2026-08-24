import React from 'react';

export default function WhoSection() {
  return (
    <section id="who">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="lab gold">Who I work with</div>
          <h2>If it can be built with content, I can help.</h2>
        </div>
        <div className="grid-who">
          <div className="whocard rv">
            <span className="tg">Brands &amp; product owners</span>
            <h3>Content that performs</h3>
            <p>Brand films, positioning and performance content that drives real results.</p>
          </div>
          <div className="whocard rv">
            <span className="tg">Marketing teams &amp; GCCs</span>
            <h3>Scale, done right</h3>
            <p>A senior partner to raise the bar and set up content, including new work in India.</p>
          </div>
          <div className="whocard rv">
            <span className="tg">Studios &amp; platforms</span>
            <h3>Micro-drama &amp; TV</h3>
            <p>Slate strategy and production from someone who has scaled shows at volume.</p>
          </div>
          <div className="whocard rv">
            <span className="tg">Founders building at scale</span>
            <h3>Content as an engine</h3>
            <p>Stand up a content machine that grows a new business fast.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
