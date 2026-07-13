import React from 'react';

const DesignerAgentDataQualitySentinel = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    Data Quality Sentinel
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            The <strong>Data Quality Sentinel</strong> agent provides an automated data-quality review
                            of your system data objects to identify structural gaps, completeness issues, and data
                            integrity risks.
                        </p>
<div className="image-wrapper">
<img alt="Data Quality Sentinel" className="demo-img" src="/assets/images/think-agent/data-quality-sentinel-1.png"/>
</div>
<div className="para-box">
<h3 className="h3">
                                Core Mechanics
                            </h3>
<ul className="cd-overview-ul">
<li>
<strong>
                                        Data Object Scoping:
                                    </strong>
<span>
                                        Audits targeted data schemas, tables, or structural definitions across your
                                        project configuration, pre-selecting all data objects by default for a complete
                                        workspace assessment.
                                    </span>
</li>
<li>
<strong>
                                        Pre-Review Planning:
                                    </strong>
<span>
                                        Generates a preliminary assessment blueprint detailing the targeted boundaries
                                        and waits for explicit user confirmation before initiating the review.
                                    </span>
</li>
<li>
<strong>
                                        Completeness &amp; Integrity Grading:
                                    </strong>
<span>
                                        Evaluates every chosen object against data health rules, checking for missing
                                        field requirements, validation gaps, and relational integrity risks.
                                    </span>
</li>
<li>
<strong>
                                        A&ndash;F Quality Scorecard:
                                    </strong>
<span>
                                        Delivers a clear, high-level structural scorecard mapping grades from A to F
                                        alongside a targeted callout of the single most critical issue discovered per
                                        object.
                                    </span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">
                                Step by Step Guide
                            </h3>
<h4 style={{marginTop: '20px'}} className="h4">
                                Step 1: Select Your Data Objects
                            </h4>
<p>
                                Review your workspace project settings and data schemas. Leave all objects checked to
                                run a comprehensive system review, or adjust your selection to focus on specific new
                                data schemas or transaction modules.
                            </p>
<div className="image-wrapper">
<img alt="Data Quality Sentinel" className="demo-img" src="/assets/images/think-agent/data-quality-sentinel-2.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">
                                Step 2: Approve the Quality Assessment Plan
                            </h4>
<p>
                                Examine the initial review plan drafted by the agent. This layout verifies the chosen
                                data object boundaries. Confirm the plan to authorize the data-quality engine to begin
                                its analysis.
                            </p>
<div className="image-wrapper">
<img alt="Data Quality Sentinel" className="demo-img" src="/assets/images/think-agent/data-quality-sentinel-3.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">
                                Step 3: Run the Health and Validation Scan
                            </h4>
<p>
                                Allow the agent to evaluate your data schemas by clicking on Run review button. The
                                engine parses the attributes of each object to check for validation logic flaws,
                                unhandled null values, or loose relational constraints.
                            </p>
<div className="image-wrapper">
<img alt="Data Quality Sentinel" className="demo-img" src="/assets/images/think-agent/data-quality-sentinel-4.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">
                                Step 4: Review the A&ndash;F Scorecard
                            </h4>
<p>
                                Open the finalized report to evaluate your system's data health. Check the overall
                                letter grades assigned to your objects and use the highlighted "top issue" summaries to
                                patch critical data integrity vulnerabilities first.
                            </p>
<div className="image-wrapper">
<img alt="Data Quality Sentinel" className="demo-img" src="/assets/images/think-agent/data-quality-sentinel-5.png"/>
</div>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentDataQualitySentinel;
