import React from "react";

const DesignerAgentDpiaBuilder = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>DPIA Builder</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>DPIA Builder</strong> agent drafts structured,
              audit-ready Data Protection Impact Assessments (DPIAs) to satisfy
              GDPR Article 35 compliance requirements for high-risk processing
              operations.
            </p>
            <div>
              <img
                alt="DPIA Builder"
                src="/assets/images/think-agent/dpia-builder-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Core Mechanics</h3>
              <ul>
                <li>
                  <strong>Processing Activity Scoping:</strong>
                  <span>
                    Analyzes a short-form description of your proposed data
                    processing operation, tracking how personal data flows, is
                    stored, and is secured.
                  </span>
                </li>
                <li>
                  <strong>GDPR Core Principle Alignment:</strong>
                  <span>
                    Automatically evaluates your processing activity against
                    core GDPR mandates, including data minimization, purpose
                    limitation, and lawful basis for processing.
                  </span>
                </li>
                <li>
                  <strong>Two-Dimensional Risk Matrix:</strong>
                  <span>
                    Identifies systemic privacy risks, scoring each by its
                    likelihood and impact to establish a clear risk profile.
                  </span>
                </li>
                <li>
                  <strong>Actionable Compliance Recommendation:</strong>
                  <span>
                    Generates a complete, structured DPIA report culminating in
                    a clear "Proceed," "Modify," or "Halt" compliance
                    recommendation.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Step by Step Guide</h3>
              <h4>Step 1: Describe Your Data Processing Activity</h4>
              <p>
                Provide a brief summary of your proposed data processing
                operation in the text interface. Focus on outlining what
                personal data you are collecting, who the data subjects are, and
                why this processing is necessary.
              </p>
              <div>
                <img
                  alt="DPIA Builder"
                  src="/assets/images/think-agent/DPIA-builder-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>Step 2: Run the GDPR Compliance Evaluation</h4>
              <p>
                Click Build DPIA. The agent cross-references your description
                against GDPR principles, checking for potential compliance
                friction points like long data retention periods or lack of
                explicit consent mechanisms.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 3: Analyze the Risk Matrix</h4>
              <p>
                Review the automatically compiled risk ledger. The builder
                isolates data security, access control, and privacy threats,
                assigning a mathematical score to each threat based on its
                operational likelihood and severity of impact.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 4: Export Your DPIA and Recommendation</h4>
              <p>
                Open the completed compliance document. Review the graded
                privacy risks, implement the suggested mitigation measures, and
                use the final compliance recommendation to secure necessary
                internal sign-offs or data protection officer approvals.
              </p>
              <div>
                <img
                  alt="DPIA Builder"
                  src="/assets/images/think-agent/DPIA-builder-3.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentDpiaBuilder;
