import React from 'react';

const DesignerAgentGaapStatement = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    GAAP Statement Checker
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            Ensures financial outputs conform to U.S. Generally Accepted Accounting Principles (GAAP) by
                            reviewing drafted financial reports&mdash;including Balance Sheets, Income Statements, and Cash
                            Flow Statements&mdash;to verify proper formatting, required disclosure compliance, and
                            mathematical accuracy.
                        </p>
<div className="image-wrapper">
<img alt="GAAP Statement Checker" className="demo-img" src="/assets/images/think-agent/GAAP-1.png"/>
</div>
<ol className="cd-overview-ol">
<li>
                                To Run a validation, click on <strong>Start</strong> button.
                            </li>
<li>
                                Tell us which table and columns hold your ledger / trial-balance data. SQL assumes
                                conventional names; adjust to match your schema.

                                <div className="image-wrapper">
<img alt="GAAP Statement Checker" className="demo-img" src="/assets/images/think-agent/GAAP-2.png"/>
</div>
</li>
<li>
                                Click on the <strong>Next</strong> button.

                                <div className="image-wrapper">
<img alt="GAAP Statement Checker" className="demo-img" src="/assets/images/think-agent/GAAP-3.png"/>
</div>
</li>
<li>
                                Review the plan, once all good, click on <strong>Run Audit</strong>.

                                <div className="image-wrapper">
<img alt="GAAP Statement Checker" className="demo-img" src="/assets/images/think-agent/GAAP-4.png"/>
</div>
</li>
<li>
                                Wait for the system to analyze and will show the result once completed.

                                <div className="image-wrapper">
<img alt="GAAP Statement Checker" className="demo-img" src="/assets/images/think-agent/GAAP-5.png"/>
</div>
</li>
</ol>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentGaapStatement;
