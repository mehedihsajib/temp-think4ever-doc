import React from "react";

const DesignerAgentConfigAuditor = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Config Auditor</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Config Auditor</strong> examines application
              configuration files to identify security risks, misconfigurations,
              and operational gaps that could affect system reliability or
              expose sensitive resources. By auditing commonly used
              configuration files such as environment files, application
              configuration files, and Dockerfiles, it provides prioritized
              remediation recommendations to help development and operations
              teams strengthen application security and deployment practices.
            </p>
            <div>
              <img
                alt="Config Auditor"
                src="/assets/images/think-agent/config-auditor-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Flexible Configuration Selection:</strong>
                  <span>
                    Choose which configuration files to include in the audit,
                    such as application configuration files, environment (.env)
                    files, and Dockerfiles. By default, all supported
                    configuration files are selected for a comprehensive review.
                  </span>
                </li>
                <li>
                  <strong>Controlled Audit Planning:</strong>
                  <span>
                    Generates a structured audit plan outlining the selected
                    files, validation rules, and security checks to be
                    performed. The plan is presented for review and confirmation
                    before the audit begins.
                  </span>
                </li>
                <li>
                  <strong>Automated Configuration Analysis:</strong>
                  <span>
                    Scans each selected file for insecure default settings,
                    missing security controls, exposed credentials, overly
                    permissive configurations, and other common configuration
                    weaknesses based on security best practices.
                  </span>
                </li>
                <li>
                  <strong>Prioritized Remediation Recommendations:</strong>
                  <span>
                    Produces an environment-aware report that prioritizes
                    identified issues based on severity and potential impact.
                    Each finding includes a description of the risk and
                    recommended actions to improve security and configuration
                    quality.
                  </span>
                </li>
                <li>
                  <strong>Multi-Environment Support:</strong>
                  <span>
                    Audits configuration files across development, testing, and
                    production environments, helping ensure consistent and
                    secure configuration practices regardless of deployment
                    target.
                  </span>
                </li>
              </ul>
            </div>
            <h3>Process Workflow</h3>
            <div className="para-box">
              <h4>1. Select Configuration Files</h4>
              <p>
                Choose the configuration files to include in the audit. By
                default, application configuration files, environment files, and
                Dockerfiles are selected.
              </p>
              <div>
                <img
                  alt="Config Auditor"
                  src="/assets/images/think-agent/config-auditor-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>2. Review the Audit Plan</h4>
              <p>
                Examine the generated audit plan, including the selected files
                and security validation rules, to verify that the audit scope
                matches your requirements.
              </p>
              <div>
                <img
                  alt="Config Auditor"
                  src="/assets/images/think-agent/config-auditor-3.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>3. Execute the Configuration Audit</h4>
              <p>
                Confirm the plan to begin processing. The application analyzes
                each selected configuration file for insecure defaults, missing
                security controls, configuration inconsistencies, and other
                potential risks.
              </p>
            </div>
            <div className="para-box">
              <h4>4. Review the Audit Report</h4>
              <p>
                Access the prioritized audit results, including identified
                security issues, affected environments, risk descriptions, and
                recommended remediation actions. Use the findings to improve
                configuration security, maintain compliance, and reduce
                deployment risks.
              </p>
              <div>
                <img
                  alt="Config Auditor"
                  src="/assets/images/think-agent/config-auditor-4.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentConfigAuditor;
