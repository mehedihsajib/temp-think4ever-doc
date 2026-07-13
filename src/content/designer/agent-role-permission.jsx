import React from "react";

const DesignerAgentRolePermission = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Role / Permission &amp; SoD Matrix</h1>
        <section>
          <div className="para-box">
            <p>
              Evaluates authorization schemas to verify robust user permissions
              and proper Segregation of Duties (SoD) to prevent security
              conflicts or privilege escalation.
            </p>
            <div>
              <img
                alt="Role / Permission &amp; SoD Matrix"
                src="/assets/images/think-agent/ROLE-1.png"
              />
            </div>
            <ol>
              <li>
                To Run a validation, click on <strong>Start</strong> button.
              </li>
              <li>
                Select the roles and the resources (screens, flows) they act on
                to validate the rules against &mdash; everything is selected by
                default; uncheck anything to skip.
                <div>
                  <img
                    alt="Role / Permission &amp; SoD Matrix"
                    src="/assets/images/think-agent/ROLE-2.png"
                  />
                </div>
              </li>
              <li>
                Click on the <strong>Next</strong> button.
                <div>
                  <img
                    alt="Role / Permission &amp; SoD Matrix"
                    src="/assets/images/think-agent/ROLE-3.png"
                  />
                </div>
              </li>
              <li>
                Review the plan, once all good, click on{" "}
                <strong>Run Audit</strong>.
                <div>
                  <img
                    alt="Role / Permission &amp; SoD Matrix"
                    src="/assets/images/think-agent/ROLE-4.png"
                  />
                </div>
              </li>
              <li>
                Wait for the system to analyze and will show the result once
                completed.
                <div>
                  <img
                    alt="Role / Permission &amp; SoD Matrix"
                    src="/assets/images/think-agent/ROLE-5.png"
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

export default DesignerAgentRolePermission;
