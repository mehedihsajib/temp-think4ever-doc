import React from "react";

const DesignerAgentTwelveFactor = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Twelve-Factor App Auditor</h1>
        <section>
          <div className="para-box">
            <p>
              Evaluates modern cloud-native architectures against the
              industry-standard Twelve-Factor App methodology for building
              declarative, scalable, and portable software.
            </p>
            <div>
              <img
                alt="Twelve-Factor App Auditor"
                src="/assets/images/think-agent/TWELVE-FACTOR-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select what to audit against Twelve-Factor &mdash; everything is
                selected by default; uncheck anything to skip.
                <div>
                  <img
                    alt="Twelve-Factor App Auditor"
                    src="/assets/images/think-agent/TWELVE-FACTOR-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="Twelve-Factor App Auditor"
                    src="/assets/images/think-agent/TWELVE-FACTOR-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="Twelve-Factor App Auditor"
                    src="/assets/images/think-agent/TWELVE-FACTOR-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="Twelve-Factor App Auditor"
                    src="/assets/images/think-agent/TWELVE-FACTOR-5.png"
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

export default DesignerAgentTwelveFactor;
