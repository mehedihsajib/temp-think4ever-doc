import React from 'react';

const DesignerDataObjects = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="dev_do.title">Data Objects</h1>
<p className="cd-overview-p" data-i18n-html="dev_do.intro">
            This section defines the "nouns" of your system&mdash;the data structures
            that will be stored in your database.
          </p>

<div className="yt-video" data-video-id="GwxF7YvuG9M"></div>
<div className="doc-section">
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_do.f1_title">Examples:</strong>
<span data-i18n="dev_do.f1_desc">User, StudyMaterial, QuizResult, SubscriptionPlan.</span>
</li>
<li>
<strong data-i18n="dev_do.f2_title">Usage:</strong>
<span data-i18n="dev_do.f2_desc">Define properties (e.g., email, timestamp, score) and how
                  these objects relate to one another.</span>
</li>
</ul>
<img alt="Data Objects Schema Visualizer" className="demo-img" src="/assets/images/object-flow-1.png"/>
</div>
</main>
    </div>
  );
};

export default DesignerDataObjects;
