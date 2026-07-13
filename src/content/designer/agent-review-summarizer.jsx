import React from "react";

const DesignerAgentReviewSummarizer = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Review Summarizer</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Review Summarizer</strong> transforms customer
              feedback into a structured voice-of-customer report. By analyzing
              product reviews, it identifies customer sentiment, recurring
              themes, common concerns, and improvement opportunities to help
              businesses understand customer experiences and make informed
              decisions.
            </p>
            <div>
              <img
                alt="Review Summarizer"
                src="/assets/images/think-agent/review-summarizer-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Review Data Collection:</strong>
                  <span>
                    Aggregates customer review data from available feedback
                    sources to create a centralized dataset for analysis.
                  </span>
                </li>
                <li>
                  <strong>
                    Automated Sentiment &amp; Theme Classification:
                  </strong>
                  <span>
                    Analyzes each review to identify customer sentiment
                    (positive, neutral, or negative) and categorize feedback
                    into recurring themes such as product quality, service
                    experience, pricing, or usability.
                  </span>
                </li>
                <li>
                  <strong>Pre-Execution Review Map:</strong>
                  <span>
                    Creates an analysis plan outlining the review categories,
                    sentiment criteria, and reporting structure, requiring
                    confirmation before processing the full review collection.
                  </span>
                </li>
                <li>
                  <strong>Voice-of-Customer Reporting:</strong>
                  <span>
                    Generates a summarized report highlighting customer praises,
                    complaints, recurring issues, and improvement suggestions to
                    support product and business decisions.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Process Workflow</h3>
              <ol>
                <li>
                  <strong>Define Review Data Inputs:</strong> Identify and
                  organize the available customer review sources and feedback
                  collections to establish the foundation for analysis.
                  <div>
                    <img
                      alt="Review Summarizer"
                      src="/assets/images/think-agent/review-summarizer-2.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Authorize Analysis Plan:</strong> Review the proposed
                  analysis structure, including sentiment categories and theme
                  classifications, then provide confirmation to begin
                  processing.
                  <div>
                    <img
                      alt="Review Summarizer"
                      src="/assets/images/think-agent/review-summarizer-3.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Analyze Customer Feedback:</strong> Process individual
                  reviews by identifying sentiment patterns, recurring topics,
                  and key customer concerns.
                </li>
                <li>
                  <strong>Generate Voice-of-Customer Report:</strong> Compile
                  analyzed insights into a structured summary of customer
                  satisfaction drivers, complaints, and actionable
                  opportunities.
                  <div>
                    <img
                      alt="Review Summarizer"
                      src="/assets/images/think-agent/review-summarizer-4.png"
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

export default DesignerAgentReviewSummarizer;
