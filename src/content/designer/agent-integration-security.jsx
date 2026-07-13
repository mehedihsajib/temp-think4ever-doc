import React from 'react';

const DesignerAgentIntegrationSecurity = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    Integration Security Review
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            Analyzes connection points, third-party APIs, and data-in-transit configurations to ensure
                            external integrations do not expose security flaws.
                        </p>
<div className="image-wrapper">
<img alt="Integration Security Review" className="demo-img" src="/assets/images/think-agent/INTEGRATION-1.png"/>
</div>
<ol className="cd-overview-ol">
<li>
                                To Run a validation, click on <strong>Start</strong> button.
                            </li>
<li>
                                Select the integration and code that implements them to check to validate the rules
                                against &mdash; everything is selected by default; uncheck anything to skip.

                                <div className="image-wrapper">
<img alt="Integration Security Review" className="demo-img" src="/assets/images/think-agent/INTEGRATION-2.png"/>
</div>
</li>
<li>
                                Click on the <strong>Next</strong> button.

                                <div className="image-wrapper">
<img alt="Integration Security Review" className="demo-img" src="/assets/images/think-agent/INTEGRATION-3.png"/>
</div>
</li>
<li>
                                Review the plan, once all good, click on <strong>Run Review</strong>.

                                <div className="image-wrapper">
<img alt="Integration Security Review" className="demo-img" src="/assets/images/think-agent/INTEGRATION-4.png"/>
</div>
</li>
<li>
                                Wait for the system to analyze and will show the result once completed.

                                <div className="image-wrapper">
<img alt="Integration Security Review" className="demo-img" src="/assets/images/think-agent/INTEGRATION-5.png"/>
</div>
</li>
</ol>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentIntegrationSecurity;
