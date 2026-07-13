import React from 'react';

const DesignerBusinessFlow = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="dev_bf.title">Business Flows</h1>
<p className="cd-overview-p" data-i18n="dev_bf.intro">
            Business Flows visualize the step-by-step journey a user takes to
            complete a task.
          </p>

<div className="yt-video" data-video-id="oS5Ot6ek_Yo"></div>
<div className="doc-section">
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_bf.f1_title">Example:</strong>
<span data-i18n="dev_bf.f1_desc">The sequence of events from a student uploading a PDF to the
                  AI generating a summary and quiz.</span>
</li>
<li>
<strong data-i18n="dev_bf.f2_title">Usage:</strong>
<span data-i18n="dev_bf.f2_desc">Identify bottlenecks in the user experience before a single
                  line of code is written.</span>
</li>
</ul>
<img alt="Business Flows Dashboard" className="demo-img" src="/assets/images/business-1.png"/>
</div>
</main>
    </div>
  );
};

export default DesignerBusinessFlow;
