import React from "react";

const DesignerAgentNistCsf = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>NIST CSF 2.0 Assessor</h1>
        <section>
          <div className="para-box">
            <p>
              Evaluates security posture against the National Institute of
              Standards and Technology Cybersecurity Framework (NIST CSF)
              version 2.0 (Identify, Protect, Detect, Respond, Recover, Govern).
            </p>
            <div>
              <img
                alt="NIST CSF 2.0 Assessor"
                src="/assets/images/think-agent/NIST-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select code and roles to assess to check to validate the rules
                against &mdash; everything is selected by default; uncheck
                anything to skip.
                <div>
                  <img
                    alt="NIST CSF 2.0 Assessor"
                    src="/assets/images/think-agent/NIST-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Triage</strong> button.
                <div>
                  <img
                    alt="NIST CSF 2.0 Assessor"
                    src="/assets/images/think-agent/NIST-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="NIST CSF 2.0 Assessor"
                    src="/assets/images/think-agent/NIST-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="NIST CSF 2.0 Assessor"
                    src="/assets/images/think-agent/NIST-5.png"
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

export default DesignerAgentNistCsf;
