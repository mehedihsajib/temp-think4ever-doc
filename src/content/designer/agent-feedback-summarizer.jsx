import React from "react";

const DesignerAgentFeedbackSummarizer = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Feedback Summarizer</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Feedback Summarizer</strong> distills vast collections
              of raw user input into clear, high-level strategic insights. By
              structuring qualitative data, it filters out noise to highlight
              recurring user themes and isolate immediate, high-impact
              optimization opportunities.
            </p>
            <div>
              <img
                alt="Feedback Summarizer"
                src="/assets/images/think-agent/summarize-feedback-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Centralized Data Gathering:</strong>
                  <span>
                    Connects to and imports your various user feedback
                    repositories, ensuring all community input, survey
                    responses, and form submissions are evaluated together.
                  </span>
                </li>
                <li>
                  <strong>Structured Assessment Planning:</strong>
                  <span>
                    Outlines a processing blueprint that categorizes the source
                    material and defines the analysis scope, waiting for your
                    explicit approval before execution.
                  </span>
                </li>
                <li>
                  <strong>Dual-Layer Categorization:</strong>
                  <span>
                    Automatically processes every individual feedback item,
                    applying categorical theme tags (e.g., Feature Request, UI
                    Friction, System Performance) alongside precision sentiment
                    markers.
                  </span>
                </li>
                <li>
                  <strong>Strategic Rollup Reporting:</strong>
                  <span>
                    Consolidates the findings into an executive summary that
                    highlights your most dominant user themes paired with a
                    dedicated list of operational "quick wins" for rapid
                    implementation.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Process Workflow</h3>
              <ol>
                <li>
                  <strong>Load Feedback:</strong> Ingest your raw user feedback
                  collections into the summarization module.
                  <div>
                    <img
                      alt="Feedback Summarizer"
                      src="/assets/images/think-agent/summarize-feedback-2.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Confirm Plan:</strong> Review the analytical scope and
                  confirm the plan to initiate data processing.
                  <div>
                    <img
                      alt="Feedback Summarizer"
                      src="/assets/images/think-agent/summarize-feedback-3.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Analyze the report:</strong> Access the consolidated
                  summary report to immediately target high-impact, low-effort
                  product updates.
                  <div>
                    <img
                      alt="Feedback Summarizer"
                      src="/assets/images/think-agent/summarize-feedback-4.png"
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

export default DesignerAgentFeedbackSummarizer;
