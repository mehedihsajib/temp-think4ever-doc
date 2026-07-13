import React from "react";

const DesignerAgentWcagAccessibility = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>WCAG Accessibility Auditor</h1>
        <section>
          <div className="para-box">
            <p>
              Audits UI elements, color contrasts, semantic markup, and
              navigation structures against Web Content Accessibility Guidelines
              (WCAG) to ensure digital inclusivity.
            </p>
            <div>
              <img
                alt="WCAG Accessibility Auditor"
                src="/assets/images/think-agent/WCAG-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select what to audit against WCAG 2.2 AA &mdash; everything is
                selected by default; uncheck anything to skip.
                <div>
                  <img
                    alt="WCAG Accessibility Auditor"
                    src="/assets/images/think-agent/WCAG-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="WCAG Accessibility Auditor"
                    src="/assets/images/think-agent/WCAG-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="WCAG Accessibility Auditor"
                    src="/assets/images/think-agent/WCAG-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="WCAG Accessibility Auditor"
                    src="/assets/images/think-agent/WCAG-5.png"
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

export default DesignerAgentWcagAccessibility;
