import React from "react";

const DesignerAgentHipaaSafeguards = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>HIPAA Safeguards Auditor</h1>
        <section>
          <div className="para-box">
            <p>
              Evaluates application infrastructure, access protocols, and data
              logs against the administrative, physical, and technical
              safeguards required for healthcare data (HIPAA).
            </p>
            <div>
              <img
                alt="HIPAA Safeguards Auditor"
                src="/assets/images/think-agent/HIPAA-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select what to audit against HIPAA to validate the rules against
                &mdash; everything is selected by default; uncheck anything to
                skip.
                <div>
                  <img
                    alt="HIPAA Safeguards Auditor"
                    src="/assets/images/think-agent/HIPAA-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="HIPAA Safeguards Auditor"
                    src="/assets/images/think-agent/HIPAA-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="HIPAA Safeguards Auditor"
                    src="/assets/images/think-agent/HIPAA-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="HIPAA Safeguards Auditor"
                    src="/assets/images/think-agent/HIPAA-5.png"
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

export default DesignerAgentHipaaSafeguards;
