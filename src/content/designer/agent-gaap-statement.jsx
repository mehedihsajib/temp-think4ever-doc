import React from "react";

const DesignerAgentGaapStatement = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>GAAP Statement Checker</h1>
        <section>
          <div className="para-box">
            <p>
              Ensures financial outputs conform to U.S. Generally Accepted
              Accounting Principles (GAAP) by reviewing drafted financial
              reports&mdash;including Balance Sheets, Income Statements, and
              Cash Flow Statements&mdash;to verify proper formatting, required
              disclosure compliance, and mathematical accuracy.
            </p>
            <div>
              <img
                alt="GAAP Statement Checker"
                src="/assets/images/think-agent/GAAP-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Tell us which table and columns hold your ledger / trial-balance
                data. SQL assumes conventional names; adjust to match your
                schema.
                <div>
                  <img
                    alt="GAAP Statement Checker"
                    src="/assets/images/think-agent/GAAP-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="GAAP Statement Checker"
                    src="/assets/images/think-agent/GAAP-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="GAAP Statement Checker"
                    src="/assets/images/think-agent/GAAP-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="GAAP Statement Checker"
                    src="/assets/images/think-agent/GAAP-5.png"
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

export default DesignerAgentGaapStatement;
