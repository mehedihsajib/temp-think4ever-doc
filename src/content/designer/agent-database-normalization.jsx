import React from "react";

const DesignerAgentDatabaseNormalization = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Database Normalization Checker</h1>
        <section>
          <div className="para-box">
            <p>
              Reviews data schemas, tables, and relationships to verify proper
              database normalization principles and prevent structural
              inefficiencies.
            </p>
            <div>
              <img
                alt="Database Normalization Checker"
                src="/assets/images/think-agent/database-normalization-1.png"
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
                    alt="Database Normalization Checker"
                    src="/assets/images/think-agent/database-normalization-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="Database Normalization Checker"
                    src="/assets/images/think-agent/database-normalization-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="Database Normalization Checker"
                    src="/assets/images/think-agent/database-normalization-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="Database Normalization Checker"
                    src="/assets/images/think-agent/database-normalization-3.png"
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

export default DesignerAgentDatabaseNormalization;
