import React from "react";

const DesignerAgentFaqGenerator = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>FAQ Generator</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>FAQ Generator</strong> transforms raw customer support
              data into structured, client-facing documentation. By analyzing
              recent user inquiries and resolution paths, it automatically
              isolates recurring pain points and synthesizes them into an
              organized, accurate Frequently Asked Questions asset.
            </p>
            <div>
              <img
                alt="FAQ Generator"
                src="/assets/images/think-agent/faq-generator-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Direct Ticket Ingestion:</strong>
                  <span>
                    Securely pulls and reviews your recent customer support
                    histories, chat logs, and ticket data to identify genuine
                    user friction points.
                  </span>
                </li>
                <li>
                  <strong>Strategic Drafting Plan:</strong>
                  <span>
                    Groups similar inquiries and generates a structural
                    blueprint outlining the proposed FAQ categories, pausing for
                    your explicit confirmation before drafting begins.
                  </span>
                </li>
                <li>
                  <strong>Iterative Answer Resolution:</strong>
                  <span>
                    Drafts crisp, technically accurate, and user-friendly
                    answers for each identified recurring question, ensuring
                    solutions align with your current system logic.
                  </span>
                </li>
                <li>
                  <strong>Unified Asset Compilation:</strong>
                  <span>
                    Consolidates individual question-and-answer pairs into a
                    polished, categorized, and fully indexed FAQ document ready
                    for customer distribution or knowledge-base publishing.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Process Workflow</h3>
              <ol>
                <li>
                  <strong>Load Tickets:</strong> Ingest the targeted batch of
                  recent support interactions into the generation pipeline.
                  <div>
                    <img
                      alt="FAQ Generator"
                      src="/assets/images/think-agent/faq-generator-2.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Approve Blueprint:</strong> Review the automatically
                  grouped topic categories and authorize the drafting plan.
                </li>
                <li>
                  <strong>Verify Drafts:</strong> Evaluate the system-generated
                  answers for technical accuracy and clarity.
                </li>
                <li>
                  <strong>Compile Asset:</strong> Export the finalized,
                  structured FAQ document to your deployment channel.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentFaqGenerator;
