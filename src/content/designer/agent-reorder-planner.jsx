import React from "react";

const DesignerAgentReorderPlanner = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Reorder Planner</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Reorder Planner</strong> helps organizations maintain
              optimal inventory levels by calculating recommended reorder
              quantities for each stock keeping unit (SKU). Using inventory
              levels, target stock coverage, service level requirements, and
              budget constraints, it generates a prioritized purchasing plan
              that minimizes stockouts while avoiding unnecessary inventory
              investment.
            </p>
            <div>
              <img
                alt="Reorder Planner"
                src="/assets/images/think-agent/reorder-planner-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Configurable Replenishment Parameters:</strong>
                  <span>
                    Define the desired inventory cover period (e.g., days of
                    stock), target service level, and overall purchasing budget.
                    These parameters allow the reorder recommendations to align
                    with operational and financial objectives.
                  </span>
                </li>
                <li>
                  <strong>Controlled Analysis Planning:</strong>
                  <span>
                    Generates a structured execution plan outlining the
                    replenishment parameters, inventory evaluation logic, and
                    SQL query. The plan is presented for review and confirmation
                    before any calculations are performed.
                  </span>
                </li>
                <li>
                  <strong>Automated Reorder Calculation:</strong>
                  <span>
                    Evaluates each SKU based on current inventory levels and
                    replenishment requirements, calculating the recommended
                    order quantity. Suggested quantities are automatically
                    rounded to the nearest pack size to support practical
                    purchasing and warehouse operations.
                  </span>
                </li>
                <li>
                  <strong>Budget-Aware Reorder Recommendations:</strong>
                  <span>
                    Produces a prioritized reorder list that considers inventory
                    urgency and available budget. The report includes
                    recommended order quantities, estimated purchasing totals,
                    and overall budget utilization to support informed
                    procurement decisions.
                  </span>
                </li>
                <li>
                  <strong>Adaptable SQL Schema Layer:</strong>
                  <span>
                    Reads directly from your project's inventory_items table by
                    default. The SQL query can be customized within the
                    interface to accommodate different database schemas or table
                    naming conventions.
                  </span>
                </li>
              </ul>
            </div>
            <h3>Process Workflow</h3>
            <div className="para-box">
              <h4>1. Configure Replenishment Settings</h4>
              <p>
                Specify the desired inventory cover period, target service
                level, and purchasing budget. These parameters determine how
                reorder quantities will be calculated.
              </p>
              <div>
                <img
                  alt="Reorder Planner"
                  src="/assets/images/think-agent/reorder-planner-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>2. Review the Analysis Plan</h4>
              <p>
                Review the generated execution plan, including the SQL query,
                replenishment criteria, and calculation logic, to verify that it
                matches your inventory data and business requirements.
              </p>
            </div>
            <div className="para-box">
              <h4>3. Execute the Reorder Analysis</h4>
              <p>
                Confirm the plan to begin processing. The application evaluates
                each SKU, calculates the recommended reorder quantity, and
                adjusts the quantity to the appropriate pack size where
                applicable.
              </p>
            </div>
            <div className="para-box">
              <h4>4. Review the Reorder Plan</h4>
              <p>
                Access the prioritized, budget-aware reorder list containing
                recommended order quantities, estimated costs, and purchasing
                totals. Use the results to guide procurement activities,
                maintain optimal stock levels, and manage inventory investment
                efficiently.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentReorderPlanner;
