import React from 'react';

const DesignerAgentExpensePolicy = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    Expense Policy Auditor
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            Streamlines corporate spending oversight and Travel &amp; Expense (T&amp;E) management by
                            automatically reviewing employee expense submissions and cross-referencing them with
                            internal company guidelines to instantly flag duplicate claims, missing documentation, or
                            out-of-policy spend.
                        </p>
<div className="image-wrapper">
<img alt="Expense Policy Auditor" className="demo-img" src="/assets/images/think-agent/EXPENSE-1.png"/>
</div>
<ol className="cd-overview-ol">
<li>
                                To Run a validation, click on <strong>Start</strong> button.
                            </li>
<li>
                                Set your policy thresholds and point us at the expenses table. SQL assumes conventional
                                names; adjust to match your schema.

                                <div className="image-wrapper">
<img alt="Expense Policy Auditor" className="demo-img" src="/assets/images/think-agent/EXPENSE-2.png"/>
</div>
</li>
<li>
                                Click on the <strong>Next</strong> button.
                            </li>
<li>
                                Review the plan, once all good, click on <strong>Run Audit</strong>.
                            </li>
<li>
                                Wait for the system to analyze and will show the result once completed.
                            </li>
</ol>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentExpensePolicy;
