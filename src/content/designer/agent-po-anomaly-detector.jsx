import React from 'react';

const DesignerAgentPoAnomalyDetector = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    PO Anomaly Detector
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            The <strong>PO Anomaly Detector</strong> analyzes purchase order transactions to identify
                            unusual procurement activities that may indicate errors, policy violations, or potential
                            fraud. By auditing purchase orders across suppliers within a specified review period, it
                            detects anomalies such as duplicate orders, abnormal price increases, and split purchases,
                            helping procurement and finance teams improve purchasing oversight and reduce financial
                            risk.
                        </p>
<div className="image-wrapper">
<img alt="PO Anomaly Detector" className="demo-img" src="/assets/images/think-agent/po-anomaly-detector-1.png"/>
</div>
<div className="para-box">
<h3 className="h3">
                                Key Features
                            </h3>
<ul className="cd-overview-ul">
<li>
<strong>
                                        Configurable Review Period:
                                    </strong>
<span>
                                        Specify a lookback window (for example, the last 30, 60, or 90 days) to
                                        determine the range of purchase orders included in the analysis. Users may also
                                        provide operational notes or audit-specific instructions to guide the
                                        evaluation.
                                    </span>
</li>
<li>
<strong>
                                        Controlled Analysis Planning:
                                    </strong>
<span>
                                        Generates a structured execution plan outlining the review period, supplier
                                        grouping strategy, anomaly detection criteria, and SQL query. The plan is
                                        presented for user verification before processing begins.
                                    </span>
</li>
<li>
<strong>
                                        Automated Supplier-Based Auditing:
                                    </strong>
<span>
                                        Groups purchase orders by supplier and systematically analyzes each group to
                                        identify suspicious procurement patterns, including duplicate purchase orders,
                                        significant price spikes, and potential split orders designed to bypass approval
                                        thresholds.
                                    </span>
</li>
<li>
<strong>
                                        Severity-Ranked Anomaly Report:
                                    </strong>
<span>
                                        Produces a prioritized list of detected anomalies ranked by severity, enabling
                                        procurement and compliance teams to focus on the highest-risk transactions
                                        first. Each flagged purchase order includes the detected anomaly type and
                                        supporting details.
                                    </span>
</li>
<li>
<strong>
                                        Adaptable SQL Schema Layer:
                                    </strong>
<span>
                                        Reads directly from your project's purchase_orders table by default. The SQL
                                        query can be customized within the interface to support different database
                                        schemas or table naming conventions.
                                    </span>
</li>
</ul>
</div>
<h3 className="h3">
                            Process Workflow
                        </h3>
<div className="para-box">
<h4 className="h4">1. Configure the Review Perio</h4>
<p>
                                Select the desired lookback window for the audit and enter any relevant notes or
                                investigation criteria.
                            </p>
<div className="image-wrapper">
<img alt="PO Anomaly Detector" className="demo-img" src="/assets/images/think-agent/po-anomaly-detector-1.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">2. Review the Analysis Plan</h4>
<p>
                                Examine the generated execution plan, including the SQL query, supplier grouping logic,
                                and anomaly detection rules, to
                                verify that they align with your procurement data.
                            </p>
</div>
<div className="para-box">
<h4 className="h4">3. Execute the Purchase Order Audit</h4>
<p>
                                Confirm the plan to begin processing. The application groups purchase orders by supplier
                                and evaluates each group for
                                duplicate orders, price anomalies, and split purchasing patterns.
                            </p>
</div>
<div className="para-box">
<h4 className="h4">4. Review the Anomaly Report</h4>
<p>
                                Access the severity-ranked results highlighting detected purchase order anomalies. Use
                                the findings to investigate
                                suspicious transactions, strengthen procurement controls, and support compliance or
                                financial audits.
                            </p>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentPoAnomalyDetector;
