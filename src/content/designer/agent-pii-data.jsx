import React from 'react';

const DesignerAgentPiiData = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    PII Data Mapper
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            The <strong>PII Data Mapper</strong> agent identifies where personal and sensitive data
                            resides across project codebases and data structures.
                        </p>
<div className="para-box">
<h3 className="h3">
                                Core Mechanics
                            </h3>
<ul className="cd-overview-ul">
<li>
<strong>
                                        Data Discovery:
                                    </strong>
<span>
                                        Scans project repositories to locate and map references to Personally
                                        Identifiable Information (PII) and sensitive data elements.
                                    </span>
</li>
<li>
<strong>
                                        Target Selection:
                                    </strong>
<span>
                                        Maps specific model files, code files, and defined data objects, with all assets
                                        selected by default for complete discovery coverage.
                                    </span>
</li>
<li>
<strong>
                                        Compliance Mapping:
                                    </strong>
<span>
                                        Traces data flows to establish visibility into where sensitive attributes are
                                        processed or stored within the system architecture.
                                    </span>
</li>
<li>
<strong>
                                        Execution Monitoring:
                                    </strong>
<span>
                                        Tracks active data mapping sequences and historical analysis logs through
                                        dedicated execution state controls.
                                    </span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">
                                Step-by-Step Guide
                            </h3>
<h4 style={{marginTop: '20px'}} className="h4">
                                Step 1: Initialize the Target Selection
                            </h4>
<p>
                                Review the central configuration interface to determine the scope of the mapping cycle.
                            </p>
<div className="image-wrapper">
<img alt="PII Data Mapper" className="demo-img" src="/assets/images/think-agent/PII-DATA-1.png"/>
</div>
<ul className="cd-overview-ul">
<li>
                                    By default, the agent automatically selects all model files, source code files, and
                                    data objects within the project workspace to ensure a comprehensive audit.
                                </li>
<li>
                                    If configuration modifications are required from a previous interface state, click
                                    the white <strong>Back</strong> button.
                                </li>
</ul>
<div className="image-wrapper">
<img alt="PII Data Mapper" className="demo-img" src="/assets/images/think-agent/PII-DATA-2.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">
                                Step 2: Trigger the Mapping Analysis
                            </h4>
<p>
                                Conclude the initialization phase and start the discovery routine using the primary
                                controls.
                            </p>
<ul className="cd-overview-ul">
<li>
                                    Click the blue <strong>Run Scan</strong> button on the central card block to
                                    progress to file refinement or execution.
                                </li>
<li>
                                    Alternatively, execute the process immediately by clicking the global
                                    <strong>Run</strong> button located in the upper-right application utility header.
                                </li>
</ul>
<div className="image-wrapper">
<img alt="PII Data Mapper" className="demo-img" src="/assets/images/think-agent/PII-DATA-3.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">
                                Step 3: Track Execution History
                            </h4>
<p>
                                Monitor the progress or review previous mapping outcomes.
                            </p>
<ul className="cd-overview-ul">
<li>
                                    Click the <strong>Runs</strong> button next to the execution trigger to open
                                    historical logs, previous scan details, and compliance reports.
                                </li>
</ul>
</div>
<div className="para-box">
<h4 className="h4">
                                Step 4: Understanding the Scan Result
                            </h4>
<div className="image-wrapper">
<img alt="PII Data Mapper" className="demo-img" src="/assets/images/think-agent/PII-DATA-4.png"/>
</div>
<p style={{marginTop: '15px'}}>
                                The <strong>PII Data Mapper</strong> Report interface provides an analysis of personal,
                                sensitive, and
                                compliance-regulated data discovered within your code repository and configuration
                                files.
                            </p>
</div>
<div className="para-box">
<h3 className="h3">
                                What to do next?
                            </h3>
<p><strong>Evaluate the Risk Summary Banner</strong></p>
<p style={{marginTop: '20px'}}>
                                Review the primary status banner at the top of the report to understand your project's
                                data exposure footprint. Take
                                note of the overall compliance risk tier and the count of specific high-severity
                                findings requiring immediate
                                intervention.
                            </p>
<p style={{marginTop: '20px'}}>
<strong>
                                    Audit High-Risk Credentials and Security Compliance
                                </strong>
</p>
<p style={{marginTop: '20px'}}>
                                Examine findings tagged with HIGH severity flags, such as exposed database usernames and
                                passwords.
                            </p>
<ul className="cd-overview-ul">
<li>
                                    Read the regulatory framework tags to identify which compliance boundaries (e.g.,
                                    GDPR, PCI-DSS) are impacted.
                                </li>
<li>
                                    Inspect the referenced code snippet to locate exactly where the sensitive attributes
                                    are being instantiated or
                                    transmitted.
                                </li>
</ul>
</div>
<div className="para-box">
<p><strong>
                                    Assess Infrastructure and Data Transit Metadata
                                </strong></p>
<p style={{marginTop: '20px'}}>Move down the report to analyze lower-severity or variable risk
                                definitions, such as
                                database host configurations or SQL
                                query parameters in transit. Evaluate whether the current data-handling posture presents
                                potential vectors for implicit
                                data exposure or leakage.</p>
</div>
<div className="para-box">
<p><strong>
                                    Implement Recommended Remediations
                                </strong></p>
<p style={{marginTop: '20px'}}>Utilize the Recommended action lists provided for each
                                individual finding to refactor
                                your system design. Apply the
                                specified security patterns&mdash;such as integrating hardware security modules/secret
                                managers, enabling connection-level SSL
                                options, or setting up strict network perimeter security rules.</p>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentPiiData;
