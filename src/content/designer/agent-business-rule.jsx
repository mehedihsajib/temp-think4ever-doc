import React from 'react';

const DesignerAgentBusinessRule = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    Business Rule Validator
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            Checks that system logic and application behaviors perfectly match the documented and
                            intended
                            business rules.
                        </p>
<div className="image-wrapper">
<img alt="Business Rule Validator" className="demo-img" src="/assets/images/think-agent/business-rule-validator-start.png"/>
</div>
<ol className="cd-overview-ol">
<li>
                                To run a validation, click on <strong>Start</strong> button.
                            </li>
<li>
                                Select the business flows and data objects to validate the rules against &mdash; everything is
                                selected by default; uncheck
                                anything to skip.

                                <div className="image-wrapper">
<img alt="Business Rule Validator" className="demo-img" src="/assets/images/think-agent/business-rule-running.png"/>
</div>
</li>
<li>
                                Click on the <strong>Next</strong> button.

                                <div className="image-wrapper">
<img alt="Business Rule Validator" className="demo-img" src="/assets/images/think-agent/business-rule-validator-triage.png"/>
</div>
</li>
<li>
                                Review the plan, once all good, click on <strong>Run Validation</strong>.

                                <div className="image-wrapper">
<img alt="Business Rule Validator" className="demo-img" src="/assets/images/think-agent/business-rule-review-plan.png"/>
</div>
</li>
<li>
                                Wait for the system to analyze and will show the result once completed.

                                <div className="image-wrapper">
<img alt="Business Rule Validator" className="demo-img" src="/assets/images/think-agent/business-rule-validating.png"/>
</div>
</li>
</ol>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentBusinessRule;
