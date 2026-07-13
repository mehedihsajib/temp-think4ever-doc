import React from "react";

const PortalWorkspace = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Managing Your Projects</h1>

        <section>
          <p>
            The Your Projects screen acts as the primary directory for your
            active workspace builds within the Think4Ever ecosystem. From this
            centralized dashboard, you can open existing initiatives, configure
            system-wide API credentials, or launch completely new software
            development lifecycles.
          </p>
          <div>
            <img
              alt="Manage Projects"
              src="/assets/images/portal/01-manage-project.png"
            />
          </div>
          <h3>Global Navigation &amp; Utility Header</h3>
          <p>
            The top-right header control area gives you immediate access to
            balance details and account session toggles:
          </p>
          <ul>
            <li>
              <strong>Today's Requests:</strong>
              <span>
                Displays the count of AI agent actions processed during the
                current calendar day.
              </span>
            </li>
            <li>
              <strong>Credits Counter:</strong>
              <span>
                Shows your current remaining credit balance across the workspace
                (e.g., Credits: 8,116) to help ensure you have enough resources
                before spinning up heavy builds.
              </span>
            </li>
            <li>
              <strong>+ Create New Project Button:</strong>
              <span>
                Click this blue-bordered button to initialize a new workspace
                environment.
              </span>
            </li>
            <li>
              <strong>Logout Button:</strong>
              <span>
                Click this orange button to securely terminate your active
                session and return to the main login portal.
              </span>
            </li>
          </ul>
          <h3>Workspace View Toggles</h3>
          <p>
            Directly below the main title header, you can switch between two
            core operational modules:
          </p>
          <ul>
            <li>
              <strong>Projects (Current View):</strong>
              <span>Displays your current list of active workspaces. </span>
            </li>
            <li>
              <strong>API Keys &amp; Usage:</strong>
              <span>
                Directs you to the management screen for generating, copying, or
                revoking the authorization tokens required to integrate external
                endpoints with your AI agents.
              </span>
            </li>
          </ul>
          <p>Project Search &amp; Directory</p>
          <ul>
            <li>
              <strong>Search Input Field: </strong>
              <span>
                Use the "Search projects by name..." text bar to quickly filter
                your dashboard cards when managing multiple parallel builds.
              </span>
            </li>
            <li>
              <strong>Project Status Cards:</strong>
              <span>
                Each card represents a standalone, dedicated development
                sandbox. Clicking anywhere on a card launches its underlying
                end-to-end SDLC pipeline dashboard.
              </span>
            </li>
          </ul>
          <p>
            The system layout organizes your builds into structured elements:
          </p>
          <ul>
            <li>
              <strong>Project Icon</strong>
              <span>
                A color-coded block displaying the primary letter of the project
                name for quick visual tracking.
              </span>
            </li>
            <li>
              <strong>Project Title:</strong>
              <span>
                The explicit name assigned to the build (e.g., MCB Customer
                Appointment, Vidanova Retail Lending, First Topup Project).
              </span>
            </li>
            <li>
              <strong>Description Field:</strong>
              <span>
                Houses custom metadata text or details outlining the project
                parameters (defaults to "No description" if blank).
              </span>
            </li>
            <li>
              <strong>Total Project Count:</strong>
              <span>
                Located at the bottom right corner of the footer, this indicates
                your absolute usage volume (e.g., 5 projects), helping you track
                how close you are to your subscription plan maximum project
                ceiling.
              </span>
            </li>
          </ul>
          <div className="content-box">
            <h3>API Keys &amp; Usage</h3>
            <p>
              The API Keys &amp; Usage sub-tab provides a granular overview of
              resource allocation, active expenditures, and usage metrics across
              individual projects over a designated time window.
            </p>
            <div>
              <img
                alt="API Keys and Usage"
                src="/assets/images/portal/01-api-usage.png"
              />
            </div>
            <p>Global Balance &amp; Summary Header</p>
            <ul>
              <li>
                <strong>Credit Balance Card:</strong>
                <span>
                  Displays your current overall reserve asset volume (8,116
                  credits remaining), which is shared dynamically across all
                  active project pipelines
                </span>
                <ul>
                  <li>
                    Click the blue Buy More Credits button to immediately add
                    individual top-up credits to your account.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Global Usage Overview Panel:</strong>
                <span>
                  Aggregates multi-project operational metrics for the selected
                  time range (e.g., Last 30 days dropdown filter):
                </span>
                <ul>
                  <li>
                    <strong>Requests:</strong>
                    <span>
                      Total volume of pipeline calls executed (Sample Data:
                      797).
                    </span>
                  </li>
                  <li>
                    <strong>Tokens:</strong>
                    <span>
                      Absolute quantity of processing data parsed (19.5M).
                    </span>
                  </li>
                  <li>
                    <strong>Credits Used:</strong>
                    <span>
                      The equivalent billing credits consumed by those tokens
                      (Sample data: 7.8K).
                    </span>
                  </li>
                  <li>
                    <strong>Est. Cost</strong>
                    <span>
                      Estimated financial translation of your total monthly
                      consumption (Sample data: $129.27).
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortalWorkspace;
