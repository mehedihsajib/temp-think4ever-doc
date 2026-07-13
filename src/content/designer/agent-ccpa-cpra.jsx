import React from "react";

const DesignerAgentCcpaCpra = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>CCPA / CPRA Checker</h1>
        <section>
          <div className="para-box">
            <p>
              Reviews project architecture, workflows, and data handling
              practices against California Consumer Privacy Act (CCPA) and
              California Privacy Rights Act (CPRA) data privacy mandates.
            </p>
            <div>
              <img
                alt=" CCPA / CPRA Checker"
                src="/assets/images/think-agent/CCPA-CPRA-1.png"
              />
            </div>
            <ol>
              <li>
                To run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                <strong>Select</strong> what to audit against CCPA/CPRA to
                validate the rules against &mdash; everything is selected by
                default; uncheck anything to skip.
                <div>
                  <img
                    alt=" CCPA / CPRA Checker"
                    src="/assets/images/think-agent/CCPA-CPRA-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt=" CCPA / CPRA Checker"
                    src="/assets/images/think-agent/CCPA-CPRA-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit.</strong>.
                <div>
                  <img
                    alt=" CCPA / CPRA Checker"
                    src="/assets/images/think-agent/CCPA-CPRA-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt=" CCPA / CPRA Checker"
                    src="/assets/images/think-agent/CCPA-CPRA-5.png"
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

export default DesignerAgentCcpaCpra;
