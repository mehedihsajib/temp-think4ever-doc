import React from "react";

const DesignerAgentInventoryReport = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Inventory Report</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Inventory Report</strong> agent scans your warehouse
              metrics to isolate stock deficiencies, high-turnover items, and
              excess capital tied up in overstock. By cross-referencing your
              digital catalog against real-time sales performance and reorder
              thresholds, it translates raw logistics data into a prioritized
              operational fix-list, complete with machine-drafted reorder
              recommendations for immediate rollout.
            </p>
            <div>
              <img
                alt="Inventory Report"
                src="/assets/images/think-agent/inventory-report-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Comprehensive Logistics Ingestion:</strong>
                  <span>
                    Safely connects to and extracts your active stock counts,
                    established reorder points, and sales velocity metrics for
                    systematic profiling.
                  </span>
                </li>
                <li>
                  <strong>Multi-Variable Stock Statusing:</strong>
                  <span>
                    Evaluates your inventory data to pinpoint and flag critical
                    reorder-now situations, borderline watch items, and
                    inefficient overstock levels.
                  </span>
                </li>
                <li>
                  <strong>Prioritized Action Planning:</strong>
                  <span>
                    Analyzes your structural stock gaps, groups the required
                    supply chain updates by urgency, and pauses for your
                    approval before drafting a fulfillment plan.
                  </span>
                </li>
                <li>
                  <strong>Automated Purchase Recommendations:</strong>
                  <span>
                    Generates targeted, contextually accurate suggested reorder
                    volumes and actions per flagged item to ensure rapid bulk
                    ordering.
                  </span>
                </li>
                <li>
                  <strong>Fulfillment Reporting:</strong>
                  <span>
                    Formulates a comprehensive final report that matches every
                    identified inventory discrepancy with its newly suggested
                    operational plan for quick review.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Process Workflow</h3>
              <ol>
                <li>
                  <strong>Configure and Load Stock:</strong> Select your Target
                  weeks of cover (2, 4, 6, or 8), provide optional instructions
                  in the Anything specific? field, and click Next to load your
                  stock metrics and flag items.
                  <div>
                    <img
                      alt="Inventory Report"
                      src="/assets/images/think-agent/inventory-report-2.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Scan for Flags:</strong> The system automatically
                  profiles your inventory, categorizing items into
                  "reorder-now," "watch," or "overstock" to build a prioritized
                  fix-list.
                </li>
                <li>
                  <strong>Approve the Plan:</strong> Review the prioritized
                  operational layout on your screen. The system will pause and
                  wait for you to click the confirmation prompt to proceed.
                </li>
                <li>
                  <strong>Review and Roll Out:</strong> The tool automatically
                  drafts targeted reorder recommendations for every flagged
                  item. Review the generated plan, make any final tweaks, and
                  approve it for immediate operational execution.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentInventoryReport;
