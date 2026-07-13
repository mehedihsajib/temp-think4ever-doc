import React from "react";

const DesignerAgentRiskRegisterManager = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Risk Register Manager</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Risk Register Manager</strong> provides a dynamic
              workspace for tracking, scoring, and visualizing operational,
              financial, and technical hazards. By maintaining a centralized
              repository of potential liabilities, the system automatically
              translates raw risk scores into an interactive matrix, ensuring
              stakeholders can monitor exposure levels in real time.
            </p>
            <div>
              <img
                alt="Risk Register Manager"
                src="/assets/images/think-agent/risk-register-manager-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Flexible Entry Architecture:</strong>
                  <span>
                    Seamlessly log a new risk entry by defining its parameter
                    metrics, or leave the entry fields blank to securely pull
                    and view your existing ledger without adding data.
                  </span>
                </li>
                <li>
                  <strong>Automated Heatmap Generation:</strong>
                  <span>
                    Instantly updates and plots your risk profiles onto a
                    dynamic, visual Likelihood-by-Impact Heatmap, immediately
                    highlighting critical, high-exposure threats.
                  </span>
                </li>
                <li>
                  <strong>Comprehensive Scored Registry:</strong>
                  <span>
                    Displays your complete operational inventory, showing
                    calculated risk severity scores alongside historical
                    context, mitigation paths, and ownership assignments.
                  </span>
                </li>
                <li>
                  <strong>Persistent Collection Storage:</strong>
                  <span>
                    Commits all entries, modifications, and historical scores
                    securely to a dedicated risks collection, maintaining a
                    clean data trail for compliance audits.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Process Workflow</h3>
              <ol>
                <li>
                  <strong>Input or View Risk:</strong> Log a new threat profile
                  into the register interface, or proceed with a blank title to
                  view current system states.
                  <div>
                    <img
                      alt="Risk Register Manager"
                      src="/assets/images/think-agent/risk-register-manager-2.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Refresh Visual Matrix:</strong> Allow the engine to
                  recalculate risk scores and update the Likelihood-by-Impact
                  heatmap placement.
                </li>
                <li>
                  <strong>Audit Scored Register:</strong> Review the complete,
                  prioritized ledger to evaluate individual risk profiles and
                  mitigation priorities.
                </li>
                <li>
                  <strong>Maintain Collection:</strong> Track ongoing updates
                  securely within the centralized risks data collection.
                  <div>
                    <img
                      alt="Risk Register Manager"
                      src="/assets/images/think-agent/risk-register-manager-3.png"
                    />
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentRiskRegisterManager;
