import React from "react";

const PortalDashboard = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Dashboard</h1>

        <section>
          <p>
            The Dashboard serves as your central control hub for monitoring
            platform resource consumption, tracking active builds, and accessing
            your agent workspaces.
          </p>
          <div>
            <img alt="Dashboard" src="/assets/images/portal/00-dashboard.png" />
          </div>
          <h3>Metrics Bar</h3>
          <p>
            This section gives you an at-a-glance overview of your current usage
            data and active projects:
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
              <strong>Credits Used (Month):</strong>
              <span>
                Shows your cumulative credit consumption for the current billing
                cycle, along with the corresponding equivalent token volume
                (e.g., 19.5M tokens).
              </span>
            </li>
            <li>
              <strong>Active Projects:</strong>
              <span>
                Indicates the total number of live development workspaces
                currently configured on your account.
              </span>
            </li>
            <li>
              <strong>Available Credits:</strong>
              <span>
                Shows your total remaining credit balance across your account.
              </span>
            </li>
          </ul>
          <div className="section-details">
            <h3>Credits Breakdown Section</h3>
            <p>
              This card provides a detailed look at your subscription plan
              allowances and consumption vs. included credits:
            </p>
            <ul>
              <li>
                <strong>Available:</strong>
                <span>
                  Your absolute remaining credits ready for allocation.
                </span>
              </li>
              <li>
                <strong>This Month:</strong>
                <span>
                  Tracks your usage for the current billing cycle against your
                  baseline. A red visual progress bar indicates high resource
                  consumption relative to your base plan.
                </span>
              </li>
              <li>
                <strong>Plan: </strong>
                <span>
                  Displays your current active subscription tier (e.g., Think
                  New).
                </span>
              </li>
              <li>
                <strong>Included / Month: </strong>
                <span>
                  The standard baseline credit allocation assigned to your
                  specific plan tier each month.
                </span>
              </li>
              <li>
                <strong>Buy More Credits: </strong>
                <span>
                  Click this blue button to immediately add individual top-up
                  credits to your balance without changing your base tier plan.
                </span>
              </li>
            </ul>
            <h3>Server Status &amp; Workspace Access</h3>
            <p>
              This card lets you track your underlying infrastructure status and
              directly access your agent pipelines:
            </p>
            <ul>
              <li>
                <strong>Infrastructure ID: :</strong>
                <span>
                  Displays your active background server cluster identifier
                  (e.g., child-20260510-0753) along with an immediate
                  operational status tag (e.g., Health: healthy).
                </span>
              </li>
              <li>
                <strong>Assigned User:</strong>
                <span>
                  Shows the primary registered administrator email address
                  managing the server node.
                </span>
              </li>
              <li>
                <strong>Last Heartbeat:</strong>
                <span>
                  Tracks the exact time elapsed since the server last
                  communicated and verified its active status with the platform
                  (e.g., 2m ago).
                </span>
              </li>
              <li>
                <strong>Enter Workspace:</strong>
                <span>
                  Click this large blue button to jump straight into your
                  end-to-end SDLC pipeline, agent configurations, and deployment
                  settings.
                </span>
              </li>
              <li>
                <strong>View Detailed Analytics:</strong>
                <span>
                  Click this button to review granular, time-series data charts
                  regarding your infrastructure usage and token distributions
                  over time.
                </span>
              </li>
            </ul>
            <h3>Buy More Credits</h3>
            <p>
              Tapping the Buy more credits button will display a list of
              available credit packages for purchase.
            </p>
            <div>
              <img
                alt="Buy More Credits"
                src="/assets/images/portal/00-buy-credits-1.png"
              />
              <img
                alt="Buy More Credits"
                src="/assets/images/portal/00-buy-credits-2.png"
              />
            </div>
            <h3>Enter Workspace</h3>
            <p>
              User will be taken to Think4Ever Dev site where projects can be
              created and managed.
            </p>
            <div>
              <img
                alt="Enter Workspace"
                src="/assets/images/portal/00-enter-workspace.png"
              />
              <img
                alt="Enter Workspace"
                src="/assets/images/portal/00-workspace-loading.png"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortalDashboard;
