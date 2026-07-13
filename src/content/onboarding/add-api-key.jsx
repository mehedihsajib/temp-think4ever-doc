import React from 'react';

const OnboardingAddApiKey = () => {
  return (
    <div className="doc-page-content">
      <div className="step-content" id="step-3" style="display: none">
<div className="content-header">
<h2 className="main-title">Add your API key</h2>
<p className="main-description">
              API Keys from LLM providers like Anthropic, Google or Open AI
              are required
            </p>
</div>
<div className="bento-grid">
<section className="bento-card">
<div className="card-body">
<div className="card-badge">Step 01</div>
<h3 className="card-title">Add API Key</h3>
<p className="card-text">
                  You need to add API key to move forward. Copy your API key
                  from the developer settings and paste it here.
                </p>
</div>
<div className="image-wrapper">
<img alt="" src="/assets/images/customer-onboard/11-setup-api-key.png"/>
</div>
</section>
<section className="bento-card">
<div className="card-body">
<div className="card-badge">Step 02</div>
<h3 className="card-title">Add Multiple API Key</h3>
<p className="card-text">
                  You can add multiple API Keys to your project. We recommend
                  that you provide at least 2 keys from different LLM
                  providers. All your information is stored securely in your
                  workspace and inaccessible for anyone else, including
                  Think4Ever. This is a BYOD model. We support LLMs from
                  different providers. Select the LLM and provide the Keys
                  that you have registered with the external LLM providers.
                </p>
</div>
<div className="image-wrapper">
<img alt="" src="/assets/images/customer-onboard/12-mutiple-api-key.png"/>
</div>
</section>
</div>
</div>
    </div>
  );
};

export default OnboardingAddApiKey;
