import React from "react";

const DesignerAgentAuthAccess = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Auth &amp; Access Reviewer</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Auth &amp; Access Reviewer</strong> agent identifies
              over-privilege and Segregation of Duties (SoD) risks within system
              architecture role designs.
            </p>
            <div className="para-box">
              <h3>Core Mechanics</h3>
              <ul>
                <li>
                  <strong>Role Selection:</strong>
                  <span>
                    Evaluates targeted roles across the system design workspace
                    to flag access rights that exceed operational requirements.
                  </span>
                </li>
                <li>
                  <strong>Over-Privilege Assessment:</strong>
                  <span>
                    Scans for profiles or user groups granted broader
                    permissions than necessary for their designated functions.
                  </span>
                </li>
                <li>
                  <strong>Segregation of Duties (SoD) Detection:</strong>
                  <span>
                    EvPinpoints conflicting permission configurations that would
                    allow a single role to execute unauthorized or high-risk
                    end-to-end business transactions.
                  </span>
                </li>
                <li>
                  <strong>Execution Monitoring:</strong>
                  <span>
                    Tracks active analysis cycles and historical review states
                    through dedicated execution logs.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Step-by-Step Guide to Running a Review</h3>
              <h4>Step 1: Access the Auth &amp; Access Agent</h4>
              <p>
                Navigate to the Think Agents menu in your top navigation toolbar
                and select the
                <strong>Auth &amp; Access</strong> Reviewer from your available
                agent library.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 2: Click on Start button</h4>
              <div>
                <img
                  alt="Auth &amp; Access Reviewer"
                  src="/assets/images/think-agent/auth-access-reviewer-1.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>Step 3: Understand the Objective</h4>
              <p>
                The central interface configuration card explicitly outlines the
                scope of the evaluation:
              </p>
              <p>
                Auth &amp; Access Reviewer Reviews access design for
                over-privilege and SoD risk.
              </p>
              <p>
                Before proceeding, ensure your underlying roles, permissions, or
                system data objects have been populated within your project
                settings so the agent has sufficient data to parse.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 4: Select Roles for Review</h4>
              <p>
                As noted in the interface, the agent is configured to pick the
                roles to review.
              </p>
              <ul>
                <li>
                  By default, all roles are selected to ensure a comprehensive,
                  platform-wide risk assessment.
                </li>
                <li>
                  If you need to move backward or adjust previous structural
                  configurations, click the white Back button.
                  <div>
                    <img
                      alt="Auth &amp; Access Reviewer"
                      src="/assets/images/think-agent/auth-access-reviewer-2.png"
                    />
                  </div>
                  <div>
                    <img
                      alt="Auth &amp; Access Reviewer"
                      src="/assets/images/think-agent/auth-access-reviewer-3.png"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h4>Step 5: Initiate the Evaluation</h4>
              <p>Once you are ready to begin the analysis:</p>
              <ol>
                <li>
                  Click the blue <strong>Review</strong> button located at the
                  bottom right of the central card configuration block.
                </li>
                <li>
                  Alternatively, you can click the <strong>Run</strong> button
                  in the top-right control header to trigger the agent's
                  automated analysis.
                  <div>
                    <img
                      alt="Auth &amp; Access Reviewer"
                      src="/assets/images/think-agent/auth-access-reviewer-4.png"
                    />
                  </div>
                </li>
              </ol>
            </div>
            <div className="para-box">
              <h3>Understanding the Results</h3>
              <p>
                Once initiated, the <strong>Auth &amp; Access</strong> Reviewer
                will evaluate your access management design matrix against
                standard security heuristics to flag:
              </p>
              <ul>
                <li>
                  <strong>Over-Privilege:</strong>
                  <span>
                    Users or roles assigned permissions beyond what is strictly
                    required for their functional requirements.
                  </span>
                </li>
                <li>
                  <strong>Segregation of Duties (SoD) Risks:</strong>
                  <span>
                    Overlapping permissions that allow a single role to execute
                    conflicting or sensitive business combinations (e.g., both
                    initiating and approving a financial transaction).
                  </span>
                </li>
              </ul>
              <p>
                Review logs and historical summaries can be accessed at any time
                by clicking the Runs button in the upper right corner.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentAuthAccess;
