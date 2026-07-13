import React from "react";

const PortalApiKeysUsages = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>API Keys &amp; Usage</h1>

        <section>
          <p>
            The API Keys &amp; Usage sub-tab provides a granular overview of
            resource allocation, active expenditures, and usage metrics across
            individual projects over a designated time window.
          </p>
          <div className="content-box">
            <div>
              <img
                alt="API Keys and Usage"
                src="/assets/images/portal/01-api-usage.png"
              />
            </div>
            <h3>Global Balance &amp; Summary Header</h3>
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
            <h3>Usage by Project Ledger</h3>
            <p>
              This interactive data table itemizes execution metrics segmented
              by individual development environments inside the selected
              tracking window:
            </p>
            <table className="config-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Requests</th>
                  <th>Tokens</th>
                  <th>Credits</th>
                  <th>Avg Time</th>
                  <th>Last Used</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vidanova Retail Lending Origination</td>
                  <td>460</td>
                  <td>10.5M</td>
                  <td>4.2K</td>
                  <td>14.5s</td>
                  <td>5d ago</td>
                </tr>
                <tr>
                  <td>Vidanova Retail Lending Origination</td>
                  <td>301</td>
                  <td>7.7M</td>
                  <td>3.1K</td>
                  <td>12.7s</td>
                  <td>5d ago</td>
                </tr>
                <tr>
                  <td>Vidanova Retail Lending Originate</td>
                  <td>34</td>
                  <td>1.3M</td>
                  <td>518</td>
                  <td>32.2s</td>
                  <td>5d ago</td>
                </tr>
                <tr>
                  <td>First Topup Project</td>
                  <td>2</td>
                  <td>60.3K</td>
                  <td>25</td>
                  <td>1.4m</td>
                  <td>6d ago</td>
                </tr>
              </tbody>
            </table>
            <h3>Daily Usage Time-Series Chart</h3>
            <p>
              Located at the base of the console, the Daily Usage bar chart
              visualizes day-over-day token consumption scaling over time.
              Hovering over individual time nodes (e.g., 5/13) reveals specific
              model clusters or background agent processing instances (e.g.,
              claude-cpus...) driving your usage peaks.
            </p>
            <h3>Credit Purchase Modal Overlays</h3>
            <p>
              When a user attempts to add funds or interacting with a
              low-balance alert from within a project development view, the
              system handles the purchase flow using modal overlays. This allows
              users to quickly replenish resources without breaking their
              current development workflow context.
            </p>
            <div>
              <img
                alt="API Keys and Usage"
                src="/assets/images/portal/01-credit-balance.png"
              />
            </div>
            <h4>Credit Balance Warning / Status Modal</h4>
            <p>
              This pop-up overlay triggers as a prompt when reviewing usage logs
              or when the system detects a balance check action:
            </p>
            <ul>
              <li>
                <strong>Header Elements:</strong>
                <span>
                  Features a quick-glance credit coin icon next to the title
                  text context "Your credit balance". A close button (✕) is
                  placed in the top right to let users dismiss the window
                  immediately.
                </span>
              </li>
              <li>
                <strong>Status Message Description:</strong>
                <span>
                  Explicitly details the parent workspace's real-time financial
                  health status ("Current balance: 8,116 credit(s). Tap 'Buy
                  More Credits' to top up at the parent portal.").
                </span>
              </li>
              <li>
                <strong>Available Metrics Block:</strong>
                <span>
                  Displays your exact runtime credit volume ready for
                  consumption inside a bold callout container box (Sample Data:
                  8,116 AVAILABLE).
                </span>
              </li>
              <li>
                Action Footer Toggles
                <ul>
                  <li>
                    <strong>Maybe later Button:</strong>
                    <span>
                      Dismisses the overlay prompt window and returns the user
                      to their active background project view screen.
                    </span>
                  </li>
                  <li>
                    <strong>Buy More Credits Button:</strong>
                    <span>
                      A solid blue action item that redirects the user instantly
                      to the payment execution or package selection drawer to
                      finalize a manual overage transaction.
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

export default PortalApiKeysUsages;
