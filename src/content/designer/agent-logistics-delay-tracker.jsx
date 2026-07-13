import React from "react";

const DesignerAgentLogisticsDelayTracker = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Logistics Delay Tracker</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Logistics Delay Tracker</strong> monitors shipment
              progress and identifies deliveries that are delayed or at risk of
              missing their expected arrival dates (ETAs). By comparing shipment
              records against scheduled delivery timelines, it provides
              logistics and operations teams with a prioritized view of shipment
              status, enabling timely intervention to minimize disruptions and
              improve delivery performance.
            </p>
            <div>
              <img
                alt="Logistics Delay Tracker"
                src="/assets/images/think-agent/logistic-delay-tracker-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Customizable Monitoring Priorities:</strong>
                  <span>
                    Define the focus of the analysis, such as high-priority
                    shipments, specific carriers, regions, or delivery windows.
                    Users can also include operational notes to provide
                    additional context for the analysis.
                  </span>
                </li>
                <li>
                  <strong>Controlled Analysis Planning:</strong>
                  <span>
                    Generates a structured execution plan outlining the shipment
                    data, evaluation criteria, and SQL query to be used. Users
                    review and confirm the plan before processing begins.
                  </span>
                </li>
                <li>
                  <strong>Automated ETA Assessment:</strong>
                  <span>
                    Sequentially evaluates each shipment by comparing its
                    current status against its expected arrival date (ETA),
                    identifying shipments that are on schedule, at risk of
                    delay, or already overdue.
                  </span>
                </li>
                <li>
                  <strong>Priority-Based Shipment Dashboard:</strong>
                  <span>
                    Produces a status-ranked table categorizing shipments as
                    Late, At Risk, or On Time, allowing operations teams to
                    quickly identify deliveries requiring immediate attention.
                  </span>
                </li>
                <li>
                  <strong>Adaptable SQL Schema Layer:</strong>
                  <span>
                    Reads directly from your project's shipments table by
                    default. The SQL query can be modified within the interface
                    to accommodate different table names or database schemas.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Process Workflow</h3>
              <ol>
                <li>
                  <strong>Define Monitoring Priorities:</strong> Select the
                  shipment criteria to evaluate and provide any operational
                  notes or special instructions that should be considered during
                  the analysis.
                  <div>
                    <img
                      alt="Logistics Delay Tracker"
                      src="/assets/images/think-agent/logistic-delay-tracker-2.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Review Analysis Plan:</strong> Examine the generated
                  execution plan, including the SQL query and shipment
                  evaluation logic, to verify that it aligns with your data
                  structure and monitoring requirements.
                </li>
                <li>
                  <strong>Execute Shipment Assessment:</strong> Confirm the plan
                  to begin processing. The application evaluates each shipment
                  against its expected arrival date (ETA) and determines its
                  delivery status.
                </li>
                <li>
                  <strong>Review Shipment Status Report:</strong> View the
                  generated status-ranked table displaying Late, At Risk, and On
                  Time shipments. Use the results to prioritize follow-up
                  actions, manage delivery exceptions, and improve logistics
                  planning.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentLogisticsDelayTracker;
