import React from "react";

const DesignerAgentSupplierScorecard = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Supplier Scorecard</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Supplier Scorecard</strong> evaluates supplier
              performance using configurable scoring criteria to provide a
              comprehensive assessment of vendor reliability and effectiveness.
              By grading each supplier based on weighted performance metrics, it
              highlights strengths, identifies potential risks, and recommends
              appropriate actions, enabling procurement teams to make informed
              sourcing decisions and strengthen supplier relationships.
            </p>
            <div>
              <img
                alt="Supplier Scorecard"
                src="/assets/images/think-agent/supplier-scorecard-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Customizable Scoring Criteria:</strong>
                  <span>
                    Define the weighting of supplier evaluation factors, such as
                    delivery performance, product quality, pricing,
                    responsiveness, or compliance. Users can also include
                    operational notes or business-specific considerations to
                    tailor the assessment.
                  </span>
                </li>
                <li>
                  <strong>Controlled Analysis Planning:</strong>
                  <span>
                    Generates a structured execution plan outlining the selected
                    grading criteria, scoring methodology, supplier evaluation
                    logic, and SQL query. The plan is presented for review and
                    confirmation before processing begins.
                  </span>
                </li>
                <li>
                  <strong>Automated Supplier Performance Evaluation:</strong>
                  <span>
                    Assesses each supplier using the configured weighted scoring
                    model and assigns an overall performance grade ranging from
                    A to F. Each evaluation includes identified strengths,
                    potential risks, and a recommended course of action.
                  </span>
                </li>
                <li>
                  <strong>Ranked Supplier Performance Report:</strong>
                  <span>
                    Produces a comprehensive scorecard ranking suppliers from
                    highest to lowest performance. The report highlights
                    top-performing vendors, identifies underperforming
                    suppliers, and provides actionable insights to support
                    supplier development, contract reviews, and sourcing
                    decisions.
                  </span>
                </li>
                <li>
                  <strong>Adaptable SQL Schema Layer:</strong>
                  <span>
                    Reads directly from your project's suppliers table by
                    default. The SQL query can be customized within the
                    interface to accommodate different database schemas or table
                    naming conventions.
                  </span>
                </li>
              </ul>
            </div>
            <h3>Process Workflow</h3>
            <div className="para-box">
              <h4>1. Configure Evaluation Criteria</h4>
              <p>
                Define the weighting for the supplier performance metrics and
                provide any additional notes or business-specific evaluation
                requirements.
              </p>
              <div>
                <img
                  alt="Supplier Scorecard"
                  src="/assets/images/think-agent/supplier-scorecard-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>2. Review the Analysis Plan</h4>
              <p>
                Examine the generated execution plan, including the SQL query,
                scoring methodology, and grading criteria, to verify that they
                align with your supplier data and evaluation objectives.
              </p>
            </div>
            <div className="para-box">
              <h4>3. Execute the Supplier Assessment</h4>
              <p>
                Confirm the plan to begin processing. The application evaluates
                each supplier, calculates the weighted performance score,
                assigns a letter grade (A&ndash;F), and identifies key
                strengths, risks, and recommended actions.
              </p>
            </div>
            <div className="para-box">
              <h4>4. Review the Supplier Scorecard</h4>
              <p>
                Access the ranked supplier scorecard highlighting overall
                grades, top-performing and lowest-performing vendors, identified
                strengths and risks, and recommended actions. Use the results to
                support supplier performance reviews, procurement strategies,
                and vendor relationship management.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentSupplierScorecard;
