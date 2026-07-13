import React from "react";

const DesignerAgentReqTraceability = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Requirements Traceability Matrix</h1>
        <section>
          <div className="para-box">
            <p>
              Cross-references development outputs back to their baseline
              operational requirements, ensuring every technical component has a
              clear business justification.
            </p>
            <div>
              <img
                alt="Requirements Traceability Matrix"
                src="/assets/images/think-agent/TRACEABILITY-1.png"
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
                    alt="Requirements Traceability Matrix"
                    src="/assets/images/think-agent/TRACEABILITY-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="Requirements Traceability Matrix"
                    src="/assets/images/think-agent/TRACEABILITY-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Trace</strong>.
                <div>
                  <img
                    alt="Requirements Traceability Matrix"
                    src="/assets/images/think-agent/TRACEABILITY-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="Requirements Traceability Matrix"
                    src="/assets/images/think-agent/TRACEABILITY-5.png"
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

export default DesignerAgentReqTraceability;
