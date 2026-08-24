import React from 'react';

export default function WorkSection({ onOpenVideo }) {
  const handleKeyDown = (e, ytId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenVideo(ytId);
    }
  };

  return (
    <section id="work" className="work">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="lab ondark">The work</div>
          <h2>Three decades of content, across brand, employer, campaigns, product and drama.</h2>
          <p>A selection below. New work added often. Click any film to watch.</p>
        </div>

        {/* FEATURED: Kuku TV micro-drama */}
        <div className="kuku rv">
          <div className="big">15&nbsp;&rarr;&nbsp;58<small>Shows scaled across 4 languages</small></div>
          <div>
            <div className="role">Kuku TV · Content Director</div>
            <h3>Micro-drama, at scale</h3>
            <p>Grew the micro-drama slate from 15 to 58 plus shows across four South Indian languages, building the judgment for what makes short-form drama convert and hold an audience. Show reel available on request.</p>
          </div>
        </div>

        {/* CAREER HIGHLIGHTS */}
        <div className="highlights rv">
          <div className="lab ondark" style={{ marginBottom: '22px' }}>Career highlights</div>
          <div className="hl-stats">
            <div className="hl"><div className="n">6.5 yrs</div><div className="d">At Amazon India marketing. Built the in-house production studio.</div></div>
            <div className="hl"><div className="n">500+</div><div className="d">TVCs and brand films produced.</div></div>
            <div className="hl"><div className="n">50,000+</div><div className="d">Marketing assets delivered at scale.</div></div>
            <div className="hl"><div className="n">80,000</div><div className="d">Subscribers on a Telugu content channel he runs.</div></div>
          </div>
          <div className="hl-more"><b>Also:</b> Head of Content for Amazon's employer brand across Asia Pacific &middot; built a marketing automation tool to run content at industrial scale &middot; South Content Lead at Culture Machine across Sun TV Network, radio and OTT &middot; performance and D2C content, including GI-tagged Indian handicrafts.</div>
        </div>

        {/* CHAPTER: Amazon Employer Brand */}
        <div className="chapter rv">
          <div className="chap-head"><span className="co">Amazon</span><span className="role">Head of Content, Asia Pacific</span><span className="line">Building Amazon's perception as the best place to work across Asia Pacific.</span></div>
          <div className="reel">
            <div className="vid" onClick={() => onOpenVideo('K8pQQWg2gLI')} onKeyDown={(e) => handleKeyDown(e, 'K8pQQWg2gLI')} tabIndex={0} role="button" aria-label="Play: Ads Team, Japan"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/K8pQQWg2gLI/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Ads Team, Japan</div><div className="s">Employer brand</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('hFQHItBtybc')} onKeyDown={(e) => handleKeyDown(e, 'hFQHItBtybc')} tabIndex={0} role="button" aria-label="Play: A Day in the Life"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/hFQHItBtybc/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">A Day in the Life</div><div className="s">Employer brand</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('gDYS-4aoVYM')} onKeyDown={(e) => handleKeyDown(e, 'gDYS-4aoVYM')} tabIndex={0} role="button" aria-label="Play: A Day in the Life"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/gDYS-4aoVYM/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">A Day in the Life</div><div className="s">Employer brand</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('n5yhAn9FEnY')} onKeyDown={(e) => handleKeyDown(e, 'n5yhAn9FEnY')} tabIndex={0} role="button" aria-label="Play: We Are Operations"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/n5yhAn9FEnY/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">We Are Operations</div><div className="s">Employer brand</div></div></div>
          </div>
        </div>

        {/* CHAPTER: Amazon Brand & Campaign Films */}
        <div className="chapter rv">
          <div className="chap-head"><span className="co">Amazon</span><span className="role">Head of Creative Production</span><span className="line">Content strategy built from brand marketing briefs, produced end to end.</span></div>
          <div className="reel">
            <div className="vid" onClick={() => onOpenVideo('B6axexxolTE')} onKeyDown={(e) => handleKeyDown(e, 'B6axexxolTE')} tabIndex={0} role="button" aria-label="Play: Rakshabandhan"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/B6axexxolTE/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Rakshabandhan</div><div className="s">Campaign film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('WSuvZXaGDpo')} onKeyDown={(e) => handleKeyDown(e, 'WSuvZXaGDpo')} tabIndex={0} role="button" aria-label="Play: OnePlus Launch"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/WSuvZXaGDpo/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">OnePlus Launch</div><div className="s">Brand film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('d3aoUUpYE4w')} onKeyDown={(e) => handleKeyDown(e, 'd3aoUUpYE4w')} tabIndex={0} role="button" aria-label="Play: Amazon Seller Film"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/d3aoUUpYE4w/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Amazon Seller Film</div><div className="s">Brand film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('HdkjMzo5GBg')} onKeyDown={(e) => handleKeyDown(e, 'HdkjMzo5GBg')} tabIndex={0} role="button" aria-label="Play: Prime Day 2021"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/HdkjMzo5GBg/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Prime Day 2021</div><div className="s">Campaign film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('GWmTHUHVk9g')} onKeyDown={(e) => handleKeyDown(e, 'GWmTHUHVk9g')} tabIndex={0} role="button" aria-label="Play: Fashion Film 2021"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/GWmTHUHVk9g/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Fashion Film 2021</div><div className="s">Brand film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('sbl6yyNChIk')} onKeyDown={(e) => handleKeyDown(e, 'sbl6yyNChIk')} tabIndex={0} role="button" aria-label="Play: Vernacular Film"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/sbl6yyNChIk/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Vernacular Film</div><div className="s">Regional campaign</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('Q66QtVRokqQ')} onKeyDown={(e) => handleKeyDown(e, 'Q66QtVRokqQ')} tabIndex={0} role="button" aria-label="Play: New Beginning"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/Q66QtVRokqQ/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">New Beginning</div><div className="s">Brand film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('tV3tSy6XfgQ')} onKeyDown={(e) => handleKeyDown(e, 'tV3tSy6XfgQ')} tabIndex={0} role="button" aria-label="Play: Prime Day 2020"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/tV3tSy6XfgQ/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Prime Day 2020</div><div className="s">Campaign film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('M48cFT1r-EU')} onKeyDown={(e) => handleKeyDown(e, 'M48cFT1r-EU')} tabIndex={0} role="button" aria-label="Play: Rakshabandhan"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/M48cFT1r-EU/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Rakshabandhan</div><div className="s">Campaign film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('yzTUAB2hDM0')} onKeyDown={(e) => handleKeyDown(e, 'yzTUAB2hDM0')} tabIndex={0} role="button" aria-label="Play: Diwali Film"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/yzTUAB2hDM0/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Diwali Film</div><div className="s">Campaign film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('mocnDmFsODk')} onKeyDown={(e) => handleKeyDown(e, 'mocnDmFsODk')} tabIndex={0} role="button" aria-label="Play: Nokia Film"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/mocnDmFsODk/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Nokia Film</div><div className="s">Brand film</div></div></div>
          </div>
        </div>

        {/* CHAPTER: Amazon Content Hub */}
        <div className="chapter rv">
          <div className="chap-head"><span className="co">Amazon</span><span className="role">Creative Director</span><span className="line">Built Amazon India's digital content hub to deliver organic brand content.</span></div>
          <div className="reel">
            <div className="vid" onClick={() => onOpenVideo('i_ekxlV_RnU')} onKeyDown={(e) => handleKeyDown(e, 'i_ekxlV_RnU')} tabIndex={0} role="button" aria-label="Play: Product Tips"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/i_ekxlV_RnU/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Product Tips</div><div className="s">Content series</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('0OlnVWGWe3g')} onKeyDown={(e) => handleKeyDown(e, '0OlnVWGWe3g')} tabIndex={0} role="button" aria-label="Play: Product News"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/0OlnVWGWe3g/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Product News</div><div className="s">Content series</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('FRiefcsDDjc')} onKeyDown={(e) => handleKeyDown(e, 'FRiefcsDDjc')} tabIndex={0} role="button" aria-label="Play: Music Video"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/FRiefcsDDjc/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Music Video</div><div className="s">Content series</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('OWZ3_qRTP-g')} onKeyDown={(e) => handleKeyDown(e, 'OWZ3_qRTP-g')} tabIndex={0} role="button" aria-label="Play: Daily Content Idea"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/OWZ3_qRTP-g/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Daily Content Idea</div><div className="s">Content series</div></div></div>
          </div>
        </div>

        {/* CHAPTER: Culture Machine */}
        <div className="chapter rv">
          <div className="chap-head"><span className="co">Culture Machine</span><span className="role">Content Head, South India</span><span className="line">Concept, production and channel management across South Indian content.</span></div>
          <div className="reel">
            <div className="vid" onClick={() => onOpenVideo('_a8LTbUKZt0')} onKeyDown={(e) => handleKeyDown(e, '_a8LTbUKZt0')} tabIndex={0} role="button" aria-label="Play: Channel Promo"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/_a8LTbUKZt0/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Channel Promo</div><div className="s">Channel</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('DYIUjbbjgdg')} onKeyDown={(e) => handleKeyDown(e, 'DYIUjbbjgdg')} tabIndex={0} role="button" aria-label="Play: Movie Skit"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/DYIUjbbjgdg/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Movie Skit Promotion</div><div className="s">Entertainment</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('BA-1iNaYzl4')} onKeyDown={(e) => handleKeyDown(e, 'BA-1iNaYzl4')} tabIndex={0} role="button" aria-label="Play: Music Video"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/BA-1iNaYzl4/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Music Video</div><div className="s">Entertainment</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('OqWsafUmzSE')} onKeyDown={(e) => handleKeyDown(e, 'OqWsafUmzSE')} tabIndex={0} role="button" aria-label="Play: 101 Unboxing"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/OqWsafUmzSE/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">101 Product Unboxing</div><div className="s">Product content</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('QhaUWCxXZ0E')} onKeyDown={(e) => handleKeyDown(e, 'QhaUWCxXZ0E')} tabIndex={0} role="button" aria-label="Play: Interview"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/QhaUWCxXZ0E/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Celebrity Interview</div><div className="s">Entertainment</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('rvAvDy4KdZE')} onKeyDown={(e) => handleKeyDown(e, 'rvAvDy4KdZE')} tabIndex={0} role="button" aria-label="Play: Vox Pop"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/rvAvDy4KdZE/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Vox Pop Concept</div><div className="s">Format</div></div></div>
          </div>
        </div>

        {/* CHAPTER: Freelance */}
        <div className="chapter rv">
          <div className="chap-head"><span className="co">Freelance</span><span className="role">Director &amp; Editor</span><span className="line">Films for Microsoft, Lonza, GMR and real estate brands.</span></div>
          <div className="reel">
            <div className="vid" onClick={() => onOpenVideo('IuH1phJNPrI')} onKeyDown={(e) => handleKeyDown(e, 'IuH1phJNPrI')} tabIndex={0} role="button" aria-label="Play: Microsoft"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/IuH1phJNPrI/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Microsoft</div><div className="s">Corporate film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('7Icj0IJfWj4')} onKeyDown={(e) => handleKeyDown(e, '7Icj0IJfWj4')} tabIndex={0} role="button" aria-label="Play: Lonza"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/7Icj0IJfWj4/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Lonza</div><div className="s">Corporate film</div></div></div>
            <div className="vid" onClick={() => onOpenVideo('flzFMYUNXoM')} onKeyDown={(e) => handleKeyDown(e, 'flzFMYUNXoM')} tabIndex={0} role="button" aria-label="Play: GMR Aero Park"><div className="thumb"><img loading="lazy" src="https://img.youtube.com/vi/flzFMYUNXoM/hqdefault.jpg" alt=""/><div className="play"><span></span></div></div><div className="vmeta"><div className="t">GMR Aero Park</div><div className="s">Corporate film</div></div></div>
            <a className="vid ext" href="https://vimeopro.com/raythonesinc/real-estate/video/1043668265" target="_blank" rel="noopener noreferrer" aria-label="Watch Real Estate Film 1 on Vimeo"><div className="thumb"><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Real Estate Film 1</div><div className="s">Vimeo · opens new tab</div></div></a>
            <a className="vid ext" href="https://vimeopro.com/raythonesinc/real-estate/video/1043668284" target="_blank" rel="noopener noreferrer" aria-label="Watch Real Estate Film 2 on Vimeo"><div className="thumb"><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Real Estate Film 2</div><div className="s">Vimeo · opens new tab</div></div></a>
            <a className="vid ext" href="https://vimeopro.com/raythonesinc/real-estate/video/1043668294" target="_blank" rel="noopener noreferrer" aria-label="Watch Real Estate Film 3 on Vimeo"><div className="thumb"><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Real Estate Film 3</div><div className="s">Vimeo · opens new tab</div></div></a>
            <a className="vid ext" href="https://vimeopro.com/raythonesinc/real-estate/video/1043668386" target="_blank" rel="noopener noreferrer" aria-label="Watch Real Estate Film 4 on Vimeo"><div className="thumb"><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Real Estate Film 4</div><div className="s">Vimeo · opens new tab</div></div></a>
            <a className="vid ext" href="https://vimeopro.com/raythonesinc/real-estate/video/1043668318" target="_blank" rel="noopener noreferrer" aria-label="Watch Real Estate Film 5 on Vimeo"><div className="thumb"><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Real Estate Film 5</div><div className="s">Vimeo · opens new tab</div></div></a>
            <a className="vid ext" href="https://vimeopro.com/raythonesinc/real-estate/video/1043668419" target="_blank" rel="noopener noreferrer" aria-label="Watch Real Estate Film 6 on Vimeo"><div className="thumb"><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Real Estate Film 6</div><div className="s">Vimeo · opens new tab</div></div></a>
            <a className="vid ext" href="https://vimeopro.com/raythonesinc/real-estate/video/1043668472" target="_blank" rel="noopener noreferrer" aria-label="Watch Real Estate Film 7 on Vimeo"><div className="thumb"><div className="play"><span></span></div></div><div className="vmeta"><div className="t">Real Estate Film 7</div><div className="s">Vimeo · opens new tab</div></div></a>
          </div>
        </div>

      </div>
    </section>
  );
}
