import React from "react";

const DesignerAgentSoc2 = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>SOC 2 Trust Criteria Readiness</h1>
        <section>
          <div className="para-box">
            <p>
              Prepares your system for a SOC 2 audit by evaluating architecture
              security, availability, processing integrity, confidentiality, and
              privacy controls.
            </p>
            <div>
              <img
                alt="SOC 2 Trust Criteria Readiness"
                src="/assets/images/think-agent/SOC2-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select code and roles to assess to validate the rules against
                &mdash; everything is selected by default; uncheck anything to
                skip.
                <div>
                  <img
                    alt="SOC 2 Trust Criteria Readiness"
                    src="/assets/images/think-agent/SOC2-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Triage</strong> button.
                <div>
                  <img
                    alt="SOC 2 Trust Criteria Readiness"
                    src="/assets/images/think-agent/SOC2-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="SOC 2 Trust Criteria Readiness"
                    src="/assets/images/think-agent/SOC2-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="SOC 2 Trust Criteria Readiness"
                    src="/assets/images/think-agent/SOC2-5.png"
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

export default DesignerAgentSoc2;
