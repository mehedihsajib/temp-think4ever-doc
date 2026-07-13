import React from "react";

const DesignerAgentLeaseClauseChecker = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Lease Clause Checker</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Lease Clause Checker</strong> reviews multiple lease
              documents to identify important contractual clauses, missing
              protections, and potential risks. By extracting and comparing
              lease terms against a defined checklist, it helps organizations
              quickly assess agreements and uncover areas requiring attention.
            </p>
            <div>
              <img
                alt="Lease Clause Checker"
                src="/assets/images/think-agent/lease-clause-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Lease Document Processing:</strong>
                  <span>
                    Uploads and organizes selected lease documents while
                    verifying that each file contains valid lease agreements
                    before analysis begins.
                  </span>
                </li>
                <li>
                  <strong>Automated Clause Extraction:</strong>
                  <span>
                    Identifies and extracts essential lease provisions,
                    including payment terms, renewal conditions, termination
                    rights, responsibilities, and other critical contractual
                    clauses.
                  </span>
                </li>
                <li>
                  <strong>Pre-Execution Document Validation:</strong>
                  <span>
                    Confirms the selected lease files and establishes the review
                    checklist before processing the documents to ensure accurate
                    analysis.
                  </span>
                </li>
                <li>
                  <strong>Risk &amp; Protection Assessment:</strong>
                  <span>
                    Highlights missing protections, unfavorable terms, and
                    potential risks by referencing the exact lease wording where
                    issues are detected.
                  </span>
                </li>
              </ul>
            </div>
            <h3>Process Workflow</h3>
            <div className="para-box">
              <h4>1. Select Lease Documents</h4>
              <p>
                Choose the lease files to be reviewed and organize the documents
                for automated contract analysis.
              </p>
              <div>
                <img
                  alt="Lease Clause Checker"
                  src="/assets/images/think-agent/lease-clause-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>2. Validate Document Selection</h4>
              <p>
                Verify that the selected files are valid lease agreements before
                extracting and reviewing contract information.
              </p>
              <div>
                <img
                  alt="Lease Clause Checker"
                  src="/assets/images/think-agent/lease-clause-3.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>3. Analyze Lease Clauses</h4>
              <p>
                Extract key clauses from each lease and compare them against the
                predefined review checklist to identify important terms and
                gaps.
              </p>
            </div>
            <div className="para-box">
              <h4>4. Generate Risk Assessment Report</h4>
              <p>
                Produce a structured report highlighting missing protections,
                risky provisions, and relevant lease wording for further review.
              </p>
              <div>
                <img
                  alt="Lease Clause Checker"
                  src="/assets/images/think-agent/lease-clause-4.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentLeaseClauseChecker;
