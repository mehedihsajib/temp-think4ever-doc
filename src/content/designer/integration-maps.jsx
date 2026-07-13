import React from 'react';

const DesignerIntegrationMaps = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="dev_int.title">
            Integration Maps
          </h1>
<p className="cd-overview-p" data-i18n-html="dev_int.intro">
            This tool outlines how your application communicates with external
            systems.
          </p>

<div className="yt-video" data-video-id="BZK9Prej4Jc"></div>
<div className="doc-section">
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_int.f1_title">Example:</strong>
<span data-i18n-html="dev_int.f1_desc">How your app talks to a Payment Gateway (Stripe) or an AI
                  Model (OpenAI/Claude).</span>
</li>
<li>
<strong data-i18n="dev_int.f2_title">Usage:</strong>
<span data-i18n-html="dev_int.f2_desc">Visualize the data exchange points between your system and
                  the outside world.</span>
</li>
</ul>
<img alt="Integration Maps Configuration" className="demo-img" src="/assets/images/intregation-maps.png"/>
</div>
</main>
    </div>
  );
};

export default DesignerIntegrationMaps;
