import React from "react";

const DesignerAgentRestOpenapi = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>REST / OpenAPI Conformance</h1>
        <section>
          <div className="para-box">
            <p>
              Audits API designs against OpenAPI industry specs and RESTful
              design best practices to ensure consistency, clean routing, and
              correct error handling.
            </p>
            <div>
              <img
                alt="REST / OpenAPI Conformance"
                src="/assets/images/think-agent/REST-1.png"
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
                    alt="REST / OpenAPI Conformance"
                    src="/assets/images/think-agent/REST-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="REST / OpenAPI Conformance"
                    src="/assets/images/think-agent/REST-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="REST / OpenAPI Conformance"
                    src="/assets/images/think-agent/REST-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="REST / OpenAPI Conformance"
                    src="/assets/images/think-agent/REST-5.png"
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

export default DesignerAgentRestOpenapi;
