import React from "react";

const DesignerAgentCisControls = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>CIS Controls v8 Checker</h1>
        <section>
          <div className="para-box">
            <p>
              Assesses system configurations, access controls, and
              infrastructure policies against the Center for Internet Security
              (CIS) Controls version 8 cybersecurity benchmarks.
            </p>
            <div>
              <img
                alt="CIS Controls v8 Checker"
                src="/assets/images/think-agent/CIS-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select the code and roles to check to validate the rules against
                &mdash; everything is selected by default; uncheck anything to
                skip.
                <div>
                  <img
                    alt="CIS Controls v8 Checker"
                    src="/assets/images/think-agent/CIS-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Triage</strong> button.
                <div>
                  <img
                    alt="CIS Controls v8 Checker"
                    src="/assets/images/think-agent/CIS-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Check</strong>.
                <div>
                  <img
                    alt="CIS Controls v8 Checker"
                    src="/assets/images/think-agent/CIS-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="CIS Controls v8 Checker"
                    src="/assets/images/think-agent/CIS-5.png"
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

export default DesignerAgentCisControls;
