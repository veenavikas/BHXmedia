import React from 'react';

export default function ModelSection() {
  return (
    <section id="model" className="model">
      <div className="bg-wm">BHX.</div>
      <div className="wrap">
        <div className="eyebrow-row rv">
          <span className="d"></span>
          <span className="lab ondark">How I work</span>
        </div>
        <div className="model-grid">
          <div className="rv">
            <h2>One partner. A network of the top 1%.</h2>
            <p className="lead">
              I don't force one team to do everything. I bring the right specialist for your exact job. A restaurant film needs someone who has shot restaurants, not a generalist learning on your budget. The right person for the right work is how quality goes up and waste goes down.
            </p>
            <div className="mpoints">
              <div className="mpoint">
                <span className="mk">&bull;</span>
                <div>
                  <b>Matched talent.</b> <span>The specialist who has done exactly your kind of work before.</span>
                </div>
              </div>
              <div className="mpoint">
                <span className="mk">&bull;</span>
                <div>
                  <b>No learning curve on your budget.</b> <span>They start sharp, not from scratch.</span>
                </div>
              </div>
              <div className="mpoint">
                <span className="mk">&bull;</span>
                <div>
                  <b>Quality by fit.</b> <span>Right talent for right work pushes the quality boundary every time.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rv">
            <div className="quote">
              <p>"Play where you can make a difference."</p>
              <cite>Piyush Pandey</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
