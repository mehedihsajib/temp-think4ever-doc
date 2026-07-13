import React from "react";

const PortalSupport = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Support</h1>

        <section>
          <p>
            The Support page provides a direct channel to log technical platform
            issues, track ongoing resolutions, and coordinate with the
            Think4Ever engineering team.
          </p>
          <div className="content-box">
            <div>
              <img alt="Support" src="/assets/images/portal/06-support.png" />
            </div>
            <h3>Tickets Hub Overview</h3>
            <p>This section serves as your historical ticket ledger:</p>
            <ul>
              <li>
                <strong>Your Tickets:</strong>
                <span>
                  The primary workspace window where your active, pending, and
                  resolved support issues are listed.
                </span>
              </li>
              <li>
                <strong>Empty State View:</strong>
                <span>
                  If you haven't opened any support requests yet, this window
                  displays a "No support tickets" placeholder message with a
                  brief instruction prompt ("Need help? Create a new ticket.").
                  Once tickets are submitted, this section populates with an
                  interactive table tracking ticket IDs, categories, dates
                  created, and live resolution statuses.
                </span>
              </li>
            </ul>
            <h3>Creating a Support Ticket</h3>
            <p>To initiate a new technical request or report a bug:</p>
            <div>
              <img
                alt="Support"
                src="/assets/images/portal/06-support-ticket.png"
              />
            </div>
            <ol className="cd-overview-ul numbered">
              <li>
                Locate the blue + New Ticket button in the top right corner of
                the support dashboard.
              </li>
              <li>
                Click the button to launch the ticket submission modal overlay.
              </li>
              <li>
                Complete the request parameters:
                <ul>
                  <li>
                    <strong>Category:</strong>
                    <span>
                      Choose the appropriate tag (e.g., Billing,
                      Infrastructure/Server, AI Agent Execution Error, or
                      Feature Request).
                    </span>
                  </li>
                  <li>
                    <strong>Subject:</strong>
                    <span>
                      Provide a clear, concise headline detailing the issue.
                    </span>
                  </li>
                  <li>
                    <strong>Priority:</strong>
                    <span>
                      Refers to the severity of the issue to be reported.
                    </span>
                  </li>
                  <li>
                    <strong>Message:</strong>
                    <span>
                      Detail the specific steps to reproduce your problem, error
                      log outputs, or unexpected pipeline behaviors.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                Click Submit to send the request directly to the support triage
                queue. You will receive an immediate tracking ID to monitor
                responses right inside this dashboard.
              </li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortalSupport;
