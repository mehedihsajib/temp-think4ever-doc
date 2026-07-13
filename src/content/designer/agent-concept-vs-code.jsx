import React from 'react';

const DesignerAgentConceptVsCode = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    Concept vs Code Gap Analysis
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            Compares original conceptual designs and architecture specifications against the actual code
                            implementation to pinpoint drift or missing features.
                        </p>
<div className="image-wrapper">
<img alt="Concept vs Code Gap Analysis" className="demo-img" src="/assets/images/think-agent/concept-code-gap-1.png"/>
</div>
<ol className="cd-overview-ol">
<li>
                                To Run a validation, click on <strong>Start</strong> button.
                            </li>
<li>
                                Select the design layers and the code to reconcile to validate the rules against &mdash;
                                everything is selected by default; uncheck anything to skip.

                                <div className="image-wrapper">
<img alt="Concept vs Code Gap Analysis" className="demo-img" src="/assets/images/think-agent/concept-code-gap-2.png"/>
</div>
</li>
<li>
                                Click on the <strong>Next</strong> button.

                                <div className="image-wrapper">
<img alt="Concept vs Code Gap Analysis" className="demo-img" src="/assets/images/think-agent/concept-code-gap-3.png"/>
</div>
</li>
<li>
                                Review the plan, once all good, click on <strong>Run Analysis</strong>.

                                <div className="image-wrapper">
<img alt="Concept vs Code Gap Analysis" className="demo-img" src="/assets/images/think-agent/concept-code-gap-4.png"/>
</div>
</li>
<li>
                                Wait for the system to analyze and will show the result once completed.

                                <div className="image-wrapper">
<img alt="Concept vs Code Gap Analysis" className="demo-img" src="/assets/images/think-agent/concept-code-gap-5.png"/>
</div>
</li>
</ol>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentConceptVsCode;
