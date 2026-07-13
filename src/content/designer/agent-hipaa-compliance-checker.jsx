import React from 'react';

const DesignerAgentHipaaComplianceChecker = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    HIPAA Compliance Checker
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            The <strong>HIPAA Compliance Checker</strong> scans your application codebases, database
                            definitions, and structural schemas to identify exposed Protected Health Information (PHI)
                            and Personally Identifiable Information (PII). Operating strictly as a localized utility, it
                            mitigates data privacy risks and ensures regulatory compliance without transmitting
                            sensitive structural data outside your secure infrastructure.
                        </p>
<div className="image-wrapper">
<img alt="HIPAA Compliance Checker" className="demo-img" src="/assets/images/think-agent/hipaa-compliance-checker-1.png"/>
</div>
<div className="para-box">
<h3 className="h3">
                                Key Features
                            </h3>
<ul className="cd-overview-ul">
<li>
<strong>
                                        Flexible Source Selection:
                                    </strong>
<span>
                                        Define specific code repositories, structural files, or schema directories to
                                        include in the compliance scan. By default, the system selects all files within
                                        the active project to guarantee comprehensive coverage.
                                    </span>
</li>
<li>
<strong>
                                        Deep Schema Inspection:
                                    </strong>
<span>
                                        Systematically parses your database architecture to identify column headers,
                                        table fields, and data types that risk exposing unregulated PHI or PII elements.
                                    </span>
</li>
<li>
<strong>
                                        Pre-Execution Blueprint:
                                    </strong>
<span>
                                        Generates a detailed audit plan mapping out targeted code blocks and schemas,
                                        pausing for explicit user authorization before running the compliance scan.
                                    </span>
</li>
<li>
<strong>
                                        In-Project Security Isolation:
                                    </strong>
<span>
                                        Compiles and grades compliance vulnerabilities by severity level while
                                        maintaining complete data localization&mdash;ensuring that zero code, structural logs,
                                        or system findings leave your local project environment.
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
<strong>Target Infrastructure:</strong> Retain the default full-project
                                    configuration or isolate individual files and databases for scanning.
                                    <div className="image-wrapper">
<img alt="HIPAA Compliance Checker" className="demo-img" src="/assets/images/think-agent/hipaa-compliance-checker-2.png"/>
</div>
</li>
<li>
<strong>Authorize Compliance Plan:</strong> Review the structural audit blueprint
                                    and confirm execution to initiate the localized compliance check.
                                    <div className="image-wrapper">
<img alt="HIPAA Compliance Checker" className="demo-img" src="/assets/images/think-agent/hipaa-compliance-checker-3.png"/>
</div>
</li>
<li>
<strong>Analyze Privacy Risks:</strong> Review the flagged schema vulnerabilities
                                    and exposed variables grouped clearly by compliance severity.
                                </li>
<li>
<strong>Remediate Exposures:</strong> Implement the provided security adjustments to
                                    safely isolate or encrypt data fields and enforce strict privacy bounds.
                                    <div className="image-wrapper">
<img alt="HIPAA Compliance Checker" className="demo-img" src="/assets/images/think-agent/hipaa-compliance-checker-4.png"/>
</div>
</li>
</ol>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentHipaaComplianceChecker;
