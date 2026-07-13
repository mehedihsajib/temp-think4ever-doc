import React from "react";

const DesignerAgentLogErrorTriage = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Log Error Triage</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Log Error Triage</strong> analyzes raw application and
              system logs to identify, categorize, and prioritize errors that
              require attention. By grouping recurring error patterns and
              evaluating their frequency and context, it transforms large
              volumes of log data into an organized incident report with
              probable root causes, confidence levels, and actionable
              recommendations, enabling developers and operations teams to
              diagnose and resolve issues more efficiently.
            </p>
            <div>
              <img
                alt="Log Error Triage"
                src="/assets/images/think-agent/log-error-triage-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Context-Aware Log Analysis:</strong>
                  <span>
                    Paste raw application or system log output and provide
                    optional contextual information, such as recent deployments,
                    configuration changes, or affected environments, to improve
                    the accuracy of the analysis.
                  </span>
                </li>
                <li>
                  <strong>Automated Error Grouping:</strong>
                  <span>
                    Detects and groups repeated or related error messages,
                    reducing noise and allowing recurring issues to be analyzed
                    as a single incident instead of multiple individual log
                    entries.
                  </span>
                </li>
                <li>
                  <strong>Root Cause Identification:</strong>
                  <span>
                    Evaluates each error group to determine the most likely
                    underlying cause and assigns a confidence level based on the
                    available log evidence and detected patterns.
                  </span>
                </li>
                <li>
                  <strong>Prioritized Incident Report:</strong>
                  <span>
                    Produces a ranked list of identified issues based on
                    severity, frequency, and operational impact, enabling teams
                    to focus on the most critical problems first.
                  </span>
                </li>
                <li>
                  <strong>Actionable Resolution Guidance:</strong>
                  <span>
                    Provides concrete troubleshooting steps and recommended
                    remediation actions for each identified issue, helping teams
                    resolve incidents more quickly and reduce system downtime.
                  </span>
                </li>
              </ul>
            </div>
            <h3>Process Workflow</h3>
            <div className="para-box">
              <h4>1. Provide Log Data</h4>
              <p>
                Paste the raw application or system log output and include any
                relevant context, such as recent system changes, deployment
                information, or observed symptoms.
              </p>
              <div>
                <img
                  alt="Log Error Triage"
                  src="/assets/images/think-agent/log-error-triage-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>2. Review the Analysis Plan</h4>
              <p>
                Examine the generated analysis plan, including the log
                processing scope and evaluation criteria, before proceeding.
              </p>
            </div>
            <div className="para-box">
              <h4>3. Execute the Log Analysis</h4>
              <p>
                Confirm the plan to begin processing. The application groups
                recurring errors, analyzes error patterns, identifies likely
                root causes, and assigns confidence levels to each finding.
              </p>
            </div>
            <div className="para-box">
              <h4>4. Review the Incident Report</h4>
              <p>
                Access the prioritized incident report containing grouped
                errors, probable root causes, confidence ratings, and
                recommended troubleshooting steps. Use the results to accelerate
                issue diagnosis, prioritize remediation efforts, and improve
                application stability.
              </p>
              <div>
                <img
                  alt="Log Error Triage"
                  src="/assets/images/think-agent/log-error-triage-3.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentLogErrorTriage;
