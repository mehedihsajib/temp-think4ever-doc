import React from "react";

const DesignerAgentIso27001 = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>ISO 27001 Annex A Mapper</h1>
        <section>
          <div className="para-box">
            <p>
              Maps your project architecture and organizational controls to the
              information security management controls outlined in ISO/IEC 27001
              Annex A.
            </p>
            <div>
              <img
                alt="ISO 27001 Annex A Mapper"
                src="/assets/images/think-agent/ISO-27001-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select code and roles to asses to validate the rules against
                &mdash; everything is selected by default; uncheck anything to
                skip.
                <div>
                  <img
                    alt="ISO 27001 Annex A Mapper"
                    src="/assets/images/think-agent/ISO-27001-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Triage</strong> button.
                <div>
                  <img
                    alt="ISO 27001 Annex A Mapper"
                    src="/assets/images/think-agent/ISO-27001-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Mapping</strong>.
                <div>
                  <img
                    alt="ISO 27001 Annex A Mapper"
                    src="/assets/images/think-agent/ISO-27001-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="ISO 27001 Annex A Mapper"
                    src="/assets/images/think-agent/ISO-27001-5.png"
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

export default DesignerAgentIso27001;
