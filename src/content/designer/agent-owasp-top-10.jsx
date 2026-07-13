import React from "react";

const DesignerAgentOwaspTop10 = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>OWASP Top 10 Auditor</h1>
        <section>
          <div className="para-box">
            <p>
              Scans application structures, logic, and code configurations to
              detect vulnerabilities related to the current OWASP Top 10 web
              application security risks.
            </p>
            <div>
              <img
                alt="OWASP Top 10 Auditor"
                src="/assets/images/think-agent/OWASP-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select code and roles to audit to validate the rules against
                &mdash; everything is selected by default; uncheck anything to
                skip.
                <div>
                  <img
                    alt="OWASP Top 10 Auditor"
                    src="/assets/images/think-agent/OWASP-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Triage</strong> button.
                <div>
                  <img
                    alt="OWASP Top 10 Auditor"
                    src="/assets/images/think-agent/OWASP-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="OWASP Top 10 Auditor"
                    src="/assets/images/think-agent/OWASP-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="OWASP Top 10 Auditor"
                    src="/assets/images/think-agent/OWASP-5.png"
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

export default DesignerAgentOwaspTop10;
