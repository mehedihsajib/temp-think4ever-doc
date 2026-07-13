import React from "react";

const DesignerAgentAccessReviewSod = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
        <h1 className="cd-page-title" id="cdHomeTitle">
          Access Review &amp; SoD
        </h1>
        <section className="cd-overview" id="cdHomeOverview">
          <div className="para-box">
            <p>
              The <strong>Access Review &amp; SoD</strong> (Separation of
              Duties) engine identifies compliance risks and conflicting
              authorization privileges within your system architecture. By
              cross-referencing user permissions against strict security rules,
              it flags toxic access combinations per role to prevent internal
              fraud, operational risk, and data breaches.
            </p>
            <div className="image-wrapper">
              <img
                alt="Access Review &amp; SoD"
                className="demo-img"
                src="/assets/images/think-agent/access-review-1.png"
              />
            </div>
            <div className="para-box">
              <h3 className="h3">Key Features</h3>
              <ul className="cd-overview-ul">
                <li>
                  <strong>Flexible Scope Selection:</strong>
                  <span>
                    Filter and isolate specific system roles or access groups
                    for evaluation. By default, the system automatically
                    includes all configured roles to ensure comprehensive
                    security coverage.
                  </span>
                </li>
                <li>
                  <strong>Relational Schema Loading:</strong>
                  <span>
                    Automatically ingests and maps your internal access control
                    structures, user-to-role mappings, and permission tables
                    into the verification engine.
                  </span>
                </li>
                <li>
                  <strong>Pre-Scan Execution Plan:</strong>
                  <span>
                    Generates a detailed audit blueprint outlining the target
                    roles and active policy rules, pausing for explicit user
                    confirmation before running the security scan.
                  </span>
                </li>
                <li>
                  <strong>Targeted Conflict Resolution:</strong>
                  <span>
                    Delivers a granular breakdown of flagged Separation of
                    Duties conflicts isolated by role, pairing each security
                    risk with a concrete remediation recommendation.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3 className="h3">Step by Step Guide</h3>
              <ol className="cd-overview-ol">
                <li>
                  <strong>Select Target Roles:</strong> Keep the default
                  full-system role configuration or specify target access
                  profiles for evaluation.
                  <div className="image-wrapper">
                    <img
                      alt="Access Review &amp; SoD"
                      className="demo-img"
                      src="/assets/images/think-agent/access-review-2.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Confirm Schema Plan:</strong> Review the structural
                  audit blueprint and authorize the execution plan to initiate
                  the compliance scan.
                  <div className="image-wrapper">
                    <img
                      alt="Access Review &amp; SoD"
                      className="demo-img"
                      src="/assets/images/think-agent/access-review-3.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Analyze Conflicts:</strong> Review the flagged toxic
                  permission combinations isolated within individual system
                  roles.
                </li>
                <li>
                  <strong>Remediate Risks:</strong> Apply the system's concrete
                  access recommendations to safely separate conflicting duties
                  and enforce least-privilege principles.
                  <div className="image-wrapper">
                    <img
                      alt="Access Review &amp; SoD"
                      className="demo-img"
                      src="/assets/images/think-agent/access-review-4.png"
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

export default DesignerAgentAccessReviewSod;
