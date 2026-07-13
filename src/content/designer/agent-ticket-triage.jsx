import React from "react";

const DesignerAgentTicketTriage = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Ticket Triage</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Ticket Triage</strong> engine automates the initial
              assessment, classification, and routing of your incoming customer
              support queues. By leveraging intelligent classification models
              directly against your live database, it reduces manual review
              overhead and establishes a structured, priority-driven resolution
              pipeline.
            </p>
            <div>
              <img
                alt="Ticket Triage"
                src="/assets/images/think-agent/ticket-triage-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Direct Database Integration:</strong>
                  <span>
                    Securely connects to and pulls open support entries directly
                    from your active project databases, minimizing latency and
                    eliminating manual data exports.
                  </span>
                </li>
                <li>
                  <strong>Pre-Execution Strategy Plan:</strong>
                  <span>
                    Maps out a processing blueprint defining the selected queues
                    and classification rules, pausing for explicit user
                    authorization before running the triage operation.
                  </span>
                </li>
                <li>
                  <strong>Multi-Variable Classification:</strong>
                  <span>
                    Evaluates every individual ticket concurrently across four
                    critical diagnostic layers: Category (system area), Priority
                    Level (severity), Target Team (routing), and User Sentiment.
                  </span>
                </li>
                <li>
                  <strong>Centralized Urgency Grouping:</strong>
                  <span>
                    Commits the categorized triage data back to a dedicated
                    collection, automatically clustering tickets by operational
                    urgency to highlight immediate roadblocks.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Process Workflow</h3>
              <ol>
                <li>
                  <strong>Pull Open Tickets:</strong> Fetch live, unassigned
                  support entries directly from the connected project database.
                  <div>
                    <img
                      alt="Ticket Triage"
                      src="/assets/images/think-agent/ticket-triage-2.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Authorize Routing Plan:</strong> Review the target
                  data set and confirm the execution plan to initiate the triage
                  scan.
                </li>
                <li>
                  <strong>Automate Classification:</strong> Allow the system to
                  process the queue, assigning sentiment, urgency, and technical
                  ownership tags.
                </li>
                <li>
                  <strong>Access Organized Queues:</strong> Open the updated
                  triage collection to deploy engineering resources based on
                  clear urgency groupings.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentTicketTriage;
