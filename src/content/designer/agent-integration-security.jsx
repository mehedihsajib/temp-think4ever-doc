import React from "react";

const DesignerAgentIntegrationSecurity = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Integration Security Review</h1>
        <section>
          <div className="para-box">
            <p>
              Analyzes connection points, third-party APIs, and data-in-transit
              configurations to ensure external integrations do not expose
              security flaws.
            </p>
            <div>
              <img
                alt="Integration Security Review"
                src="/assets/images/think-agent/INTEGRATION-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select the integration and code that implements them to check to
                validate the rules against &mdash; everything is selected by
                default; uncheck anything to skip.
                <div>
                  <img
                    alt="Integration Security Review"
                    src="/assets/images/think-agent/INTEGRATION-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="Integration Security Review"
                    src="/assets/images/think-agent/INTEGRATION-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Review</strong>.
                <div>
                  <img
                    alt="Integration Security Review"
                    src="/assets/images/think-agent/INTEGRATION-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="Integration Security Review"
                    src="/assets/images/think-agent/INTEGRATION-5.png"
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

export default DesignerAgentIntegrationSecurity;
