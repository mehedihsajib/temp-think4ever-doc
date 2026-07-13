import React from "react";

const DesignerAgentPciDss = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>PCI-DSS v4.0 Auditor</h1>
        <section>
          <div className="para-box">
            <p>
              Validates payment processing workflows, encryption methods, and
              system environment configurations against the latest Payment Card
              Industry Data Security Standard (PCI-DSS) version 4.0.
            </p>
            <div>
              <img
                alt="PCI-DSS v4.0 Auditor"
                src="/assets/images/think-agent/PCI-DSS-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select code and the data model to audit to validate the rules
                against &mdash; everything is selected by default; uncheck
                anything to skip.
                <div>
                  <img
                    alt="PCI-DSS v4.0 Auditor"
                    src="/assets/images/think-agent/PCI-DSS-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Triage</strong> button.
                <div>
                  <img
                    alt="PCI-DSS v4.0 Auditor"
                    src="/assets/images/think-agent/PCI-DSS-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="PCI-DSS v4.0 Auditor"
                    src="/assets/images/think-agent/PCI-DSS-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="PCI-DSS v4.0 Auditor"
                    src="/assets/images/think-agent/PCI-DSS-5.png"
                  />
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentPciDss;
