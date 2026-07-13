import React from 'react';

const DesignerAgentCsatAnalyzer = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    CSAT Analyzer
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            The <strong>CSAT Analyzer</strong> processes and evaluates your recent Customer Satisfaction
                            (CSAT) data to pinpoint the exact operational and product drivers behind your scores. By
                            structuring qualitative user feedback, it translates raw ratings and comments into
                            actionable intelligence for product and support optimization.
                        </p>
<div className="image-wrapper">
<img alt="CSAT Analyzer" className="demo-img" src="/assets/images/think-agent/csat-analyzer-1.png"/>
</div>
<div className="para-box">
<h3 className="h3">
                                Key Features
                            </h3>
<ul className="cd-overview-ul">
<li>
<strong>
                                        Automated Data Ingestion:
                                    </strong>
<span>
                                        Connects directly to your feedback pipelines to seamlessly load your most recent
                                        customer satisfaction ratings and accompanying textual reviews.
                                    </span>
</li>
<li>
<strong>
                                        Controlled Analysis Planning:
                                    </strong>
<span>
                                        Generates a structured blueprint mapping out the targeted data sets and analysis
                                        parameters, pausing for explicit user confirmation before processing begins.
                                    </span>
</li>
<li>
<strong>
                                        Granular Feedback Tagging:
                                    </strong>
<span>
                                        Automatically scans customer comments to apply categorical sentiment tags (e.g.,
                                        Positive, Neutral, Negative) and identify the core structural driver (e.g.,
                                        Usability, Speed, Documentation).
                                    </span>
</li>
<li>
<strong>
                                        Consolidated Performance Reports:
                                    </strong>
<span>
                                        Delivers a comprehensive dashboard displaying your aggregate average score, a
                                        breakdown of primary satisfaction and dissatisfaction drivers, and a list of
                                        high-priority operational actions.
                                    </span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">
                                Process Workflow
                            </h3>
<ol className="cd-overview-ol">
<li>
<strong>Ingest Ratings:</strong> Load the latest batch of user feedback and CSAT
                                    metrics into the analyzer module.
                                    <div style={{marginTop: '10px', marginBottom: '10px'}} className="image-wrapper">
<img alt="CSAT Analyzer" className="demo-img" src="/assets/images/think-agent/csat-analyzer-2.png"/>
</div>
</li>
<li>
<strong>Confirm:</strong> Review and approve the data processing plan to initiate
                                    the analytical scan.
                                </li>
<li>
<strong>Categorize Drivers:</strong> Allow the system to automatically isolate
                                    sentiment and map comments to specific operational buckets.
                                </li>
<li>
<strong>Deploy Actions:</strong> Review the aggregate reporting dashboard and
                                    execute the prioritized response strategies.
                                </li>
</ol>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentCsatAnalyzer;
