import React from "react";

const DesignerAgentLicenseComplianceScanner = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>License Compliance Scanner</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>License Compliance Scanner</strong> agent scans
              open-source license metadata across your project's dependency
              manifests to identify legal liabilities, copyleft risks, and
              unknown software licenses.
            </p>
            <div>
              <img
                alt="License Compliance Scanner"
                src="/assets/images/think-agent/license-compliance-scanner-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Core Mechanics</h3>
              <ul>
                <li>
                  <strong>Manifest Auto-Discovery:</strong>
                  <span>
                    Targets standard package management files (such as
                    package.json, pom.xml, requirements.txt, or go.mod)
                    throughout your project directory, pre-selecting all
                    manifests by default.
                  </span>
                </li>
                <li>
                  <strong>Pre-Scan Verification:</strong>
                  <span>
                    Generates an initial parsing plan detailing the targeted
                    dependency files and waits for explicit user confirmation
                    before executing the scan.
                  </span>
                </li>
                <li>
                  <strong>Dual-Risk Classification:</strong>
                  <span>
                    Evaluates each discovered dependency against a legal risk
                    matrix, specifically screening for restrictive copyleft
                    obligations (e.g., GPL, AGPL) and non-standard or missing
                    license headers.
                  </span>
                </li>
                <li>
                  <strong>Risk-Graded Dependency Report:</strong>
                  <span>
                    Compiles findings into an actionable dependency inventory
                    dashboard, classifying compliance exposure into clear risk
                    Tiers (Critical, Medium, Low) for swift legal or engineering
                    remediation.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Step by Step Guide</h3>
              <h4>Step 1: Target Your Dependency Manifests</h4>
              <p>
                Review your project directory trees. Leave all manifest files
                checked to perform a complete repository compliance audit, or
                isolate specific package files if you are checking a single
                sub-module.
              </p>
              <div>
                <img
                  alt="License Compliance Scanner"
                  src="/assets/images/think-agent/license-compliance-scanner-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>Step 2: Confirm the Scan Plan</h4>
              <p>
                Examine the initial review plan drafted by the agent. This step
                outlines the specific manifest paths that will be parsed. Click
                confirm to authorize the open-source compliance engine.
              </p>
              <div>
                <img
                  alt="License Compliance Scanner"
                  src="/assets/images/think-agent/license-compliance-scanner-3.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>Step 3: Run the License Audit Scan</h4>
              <p>
                Allow the agent to process your manifest metadata. The engine
                queries license registries and checks package definitions,
                flagging restrictive licensing terms that might legally obligate
                you to open-source your proprietary code.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 4: Evaluate Your Risk-Graded Report</h4>
              <p>
                Open the final compliance inventory to review your exposure:
              </p>
              <ul style={{ marginTop: "10px", marginBottom: "20px" }}>
                <li>
                  <strong>Copyleft &amp; Compliance Risks:</strong> Review any
                  high-risk licenses flagged by the engine and apply the
                  suggested alternatives (e.g., migrating from an AGPL package
                  to an MIT or Apache 2.0 alternative).
                </li>
                <li>
                  <strong>Unknown License Audit:</strong> Inspect dependencies
                  with missing or unverified license strings to resolve legal
                  blind spots before compiling your next production build.
                </li>
              </ul>
              <div>
                <img
                  alt="License Compliance Scanner"
                  src="/assets/images/think-agent/license-compliance-scanner-4.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentLicenseComplianceScanner;
