import React from "react";

const DesignerAgentUiConcept = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>UI / Concept Consistency</h1>
        <section>
          <div className="para-box">
            <p>
              Reviews developed interfaces against original visual concepts,
              design systems, and wireframes to ensure brand and layout
              consistency.
            </p>
            <div>
              <img
                alt="UI / Concept Consistency"
                src="/assets/images/think-agent/UI-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select the UI screens to reconcile with the concept &mdash;
                everything is selected by default; uncheck anything to skip.
                <div>
                  <img
                    alt="UI / Concept Consistency"
                    src="/assets/images/think-agent/UI-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Triage</strong> button.
                <div>
                  <img
                    alt="UI / Concept Consistency"
                    src="/assets/images/think-agent/UI-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="UI / Concept Consistency"
                    src="/assets/images/think-agent/UI-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="UI / Concept Consistency"
                    src="/assets/images/think-agent/UI-5.png"
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

export default DesignerAgentUiConcept;
