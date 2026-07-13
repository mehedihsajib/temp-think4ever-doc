import React from "react";

const DesignerAgentConceptVsCode = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Concept vs Code Gap Analysis</h1>
        <section>
          <div className="para-box">
            <p>
              Compares original conceptual designs and architecture
              specifications against the actual code implementation to pinpoint
              drift or missing features.
            </p>
            <div>
              <img
                alt="Concept vs Code Gap Analysis"
                src="/assets/images/think-agent/concept-code-gap-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select the design layers and the code to reconcile to validate
                the rules against &mdash; everything is selected by default;
                uncheck anything to skip.
                <div>
                  <img
                    alt="Concept vs Code Gap Analysis"
                    src="/assets/images/think-agent/concept-code-gap-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="Concept vs Code Gap Analysis"
                    src="/assets/images/think-agent/concept-code-gap-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Analysis</strong>.
                <div>
                  <img
                    alt="Concept vs Code Gap Analysis"
                    src="/assets/images/think-agent/concept-code-gap-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="Concept vs Code Gap Analysis"
                    src="/assets/images/think-agent/concept-code-gap-5.png"
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

export default DesignerAgentConceptVsCode;
