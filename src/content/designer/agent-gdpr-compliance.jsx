import React from "react";

const DesignerAgentGdprCompliance = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>GDPR Compliance Auditor</h1>
        <section>
          <div className="para-box">
            <p>
              Audits project systems, storage, and user-consent tracking logic
              to ensure alignment with European Union General Data Protection
              Regulation (GDPR) requirements.
            </p>
            <div>
              <img
                alt="GDPR Compliance Auditor"
                src="/assets/images/think-agent/GDPR-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select code and roles to check to validate the rules against
                &mdash; everything is selected by default; uncheck anything to
                skip.
                <div>
                  <img
                    alt="GDPR Compliance Auditor"
                    src="/assets/images/think-agent/GDPR-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="GDPR Compliance Auditor"
                    src="/assets/images/think-agent/GDPR-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="GDPR Compliance Auditor"
                    src="/assets/images/think-agent/GDPR-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="GDPR Compliance Auditor"
                    src="/assets/images/think-agent/GDPR-5.png"
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

export default DesignerAgentGdprCompliance;
