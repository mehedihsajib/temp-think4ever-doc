import React from "react";

const DesignerAgentPtoPolicyQa = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>PTO &amp; Policy Q&amp;A</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>PTO &amp; Policy Q&amp;A</strong> agent provides
              grounded, accurate answers to internal workforce inquiries
              regarding vacation structures, sick leave, parental benefits, or
              general company guidelines by querying your organization's
              verified policy repository.
            </p>
            <div>
              <img
                alt="PTO &amp; Policy Q&amp;A"
                src="/assets/images/think-agent/pto-policy-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Core Mechanics</h3>
              <ul>
                <li>
                  <strong>Natural Language Inquiries:</strong>
                  <span>
                    Translates conversational, everyday employee questions about
                    workplace rules into precise search parameters.
                  </span>
                </li>
                <li>
                  <strong>Grounded Content Discovery:</strong>
                  <span>
                    Restricts its knowledge base entirely to your team's
                    uploaded and stored policy files, completely preventing
                    external assumptions or general web speculation.
                  </span>
                </li>
                <li>
                  <strong>Source-Cited Answering:</strong>
                  <span>
                    Formulates responses that directly point to specific
                    documents and section headers (e.g., Employee Handbook 2026,
                    Section 4.2).
                  </span>
                </li>
                <li>
                  <strong>Strict Fact Adherence:</strong>
                  <span>
                    Maintains absolute numerical integrity, enforcing a rigid
                    constraint that never invents, approximates, or hallucinates
                    accrual rates, rollover limits, or payout days.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Step by Step Guide</h3>
              <h4>Step 1: Submit Your Policy Question</h4>
              <p>
                Navigate to the Q&amp;A portal and type your question naturally
                using everyday language
                <em>
                  (e.g., "How many days of parental leave do I get?" or "What is
                  the policy for rolling over unused vacation days into next
                  year?")
                </em>
                .
              </p>
              <div>
                <img
                  alt="PTO &amp; Policy Q&amp;A"
                  src="/assets/images/think-agent/pto-policy-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>Step 2: Policy Repository Scanning</h4>
              <p>
                The agent instantly parses your query and scans your active
                organization repository, locating the exact paragraphs, tables,
                and clauses that explicitly outline the rules in question.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 3: Synthesis and Fact Verification</h4>
              <p>
                The engine extracts the relevant policy passages and runs an
                internal audit loop to match numbers, conditions, and
                eligibility rules perfectly against the source text.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 4: Review Your Grounded Answer</h4>
              <p>Read through the generated response panel, which displays:</p>
              <ul style={{ marginTop: "10px", marginBottom: "20px" }}>
                <li>
                  <strong>The Verified Rule:</strong> A clear, concise breakdown
                  of the policy matching your situation.
                </li>
                <li>
                  <strong>Explicit Citations:</strong> Clear source labels
                  showing exactly which document and page the information was
                  retrieved from, ensuring full transparency.
                </li>
              </ul>
              <div>
                <img
                  alt="PTO &amp; Policy Q&amp;A"
                  src="/assets/images/think-agent/pto-policy-3.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentPtoPolicyQa;
