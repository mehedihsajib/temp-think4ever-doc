import React from "react";

const DesignerAgentDependencyCve = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Dependency CVE Auditor</h1>
        <section>
          <div className="para-box">
            <p>
              The Dependency CVE Auditor plugin audits chosen dependency
              manifests for known security risks and vulnerabilities.
            </p>
            <div>
              <img
                alt="Dependency CVE Auditor Overview"
                src="/assets/images/think-agent/dependency-CVE-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Core Mechanics</h3>
              <ul>
                <li>
                  <strong>Manifest Scanning:</strong>
                  <span>
                    Targets standard dependency manifest files across the
                    project workspace, including package.json, requirements.txt,
                    pom.xml, and go.mod.
                  </span>
                </li>
                <li>
                  <strong>Target Selection:</strong>
                  <span>
                    Allows specific selection of manifest files for targeted
                    audits, with all files selected by default for complete
                    coverage.
                  </span>
                </li>
                <li>
                  <strong>Vulnerability Detection:</strong>
                  <span>
                    Cross-references the detected dependencies and their
                    versions against known CVE (Common Vulnerabilities and
                    Exposures) databases to identify security risks.
                  </span>
                </li>
                <li>
                  <strong>Execution Monitoring:</strong>
                  <span>
                    Tracks active scanning cycles, historical audit states, and
                    previous analysis runs through dedicated execution logs.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Step-by-Step Guide</h3>
              <h4>Step 1: Select Target Manifests</h4>
              <p>
                Navigate the directory tree under Files &amp; folders to choose
                which items to audit.
              </p>
              <ul>
                <li>
                  Use the Filter files... search bar to quickly locate specific
                  directories or filenames.
                </li>
                <li>
                  Check the boxes next to individual files or entire folders to
                  include them.
                </li>
                <li>
                  Use the Select all or None shortcuts to clear or reset your
                  selections. By default, all detected manifests are included.
                </li>
              </ul>
              <div>
                <img
                  alt="Dependency CVE Auditor Overview"
                  src="/assets/images/think-agent/dependency-CVE-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>Step 2: Set the Primary Ecosystem</h4>
              <p>
                Define the package management environment for the audit under
                Primary ecosystem.
              </p>
              <ul>
                <li>
                  Keep auto-detect active to let the system automatically
                  identify the ecosystem based on the selected files.
                </li>
                <li>
                  Alternatively, manually force a specific environment by
                  clicking on one of the supported buttons: npm, pip, maven, go,
                  gem, composer, or nuget.
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h4>Step 3: Add Custom Scanning Instructions (Optional)</h4>
              <p>
                Refine the scope of the vulnerability scan using the Anything
                specific to look for? text field.
              </p>
              <ul>
                <li>
                  Provide natural language constraints to tailor the analysis,
                  such as instructing the auditor to look only at production
                  dependencies or to ignore devDependencies.
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h4>Step 4: Execute or Abort the Run</h4>
              <p>
                Conclude the configuration using the control buttons at the
                bottom right.
              </p>
              <ul>
                <li>
                  Click <strong>Next</strong> to save your configurations and
                  advance to the execution phase.
                </li>
                <li>
                  Click <strong>Cancel</strong> run to discard your selections
                  and return to the previous screen.
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h4>
                Step 5: Review the plan, then click <strong>Run Scan</strong>
              </h4>
              <div>
                <img
                  alt="Dependency CVE Auditor Overview"
                  src="/assets/images/think-agent/dependency-CVE-3.png"
                />
              </div>
              <div>
                <img
                  alt="Dependency CVE Auditor Overview"
                  src="/assets/images/think-agent/dependency-CVE-4.png"
                />
              </div>
              <div>
                <img
                  alt="Dependency CVE Auditor Overview"
                  src="/assets/images/think-agent/dependency-CVE-5.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentDependencyCve;
