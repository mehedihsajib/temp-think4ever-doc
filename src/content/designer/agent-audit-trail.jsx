import React from "react";

const DesignerAgentAuditTrail = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Audit Trail Verifier</h1>
        <section>
          <div className="para-box">
            <p>
              Maintains data integrity and prepares systems for external audits
              by automatically scanning chronological system logs and financial
              transaction histories to detect missing entries, unauthorized
              alterations, or gaps in the historical record.
            </p>
            <div>
              <img
                alt="Audit Trail Verifier"
                src="/assets/images/think-agent/AUDIT-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select the data to verify &mdash; everything is selected by
                default; uncheck anything to skip.
                <div>
                  <img
                    alt="Audit Trail Verifier"
                    src="/assets/images/think-agent/AUDIT-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="Audit Trail Verifier"
                    src="/assets/images/think-agent/AUDIT-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="Audit Trail Verifier"
                    src="/assets/images/think-agent/AUDIT-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="Audit Trail Verifier"
                    src="/assets/images/think-agent/AUDIT-5.png"
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

export default DesignerAgentAuditTrail;
