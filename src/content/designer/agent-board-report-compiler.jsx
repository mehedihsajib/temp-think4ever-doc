import React from "react";

const DesignerAgentBoardReportCompiler = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Board Report Compiler</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Board Report Compiler</strong> automates the
              aggregation and synthesis of operational data into strategic,
              executive-ready presentations. By translating live databases into
              structured narratives, it ensures that financial, technical, and
              performance metrics are clearly framed for stakeholders and
              governance reviews.
            </p>
            <div>
              <img
                alt="Board Report Compiler"
                src="/assets/images/think-agent/board-report-compiler-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Configurable Reporting Scope:</strong>
                  <span>
                    Set the specific parameters for the evaluation, including
                    target company entities, operational segments, and the exact
                    reporting period or fiscal quarter.
                  </span>
                </li>
                <li>
                  <strong>Live KPI Integration:</strong>
                  <span>
                    Securely connects to your data repositories to pull
                    real-time Key Performance Indicators, eliminating manual
                    data entry and ensuring absolute metrics accuracy.
                  </span>
                </li>
                <li>
                  <strong>Automated Narrative Synthesis:</strong>
                  <span>
                    Analyzes performance variations to write themed executive
                    commentary, highlight historical milestones, and project
                    data-backed operational outlooks.
                  </span>
                </li>
                <li>
                  <strong>Component-Based Deck Export:</strong>
                  <span>
                    Compiles the finalized narrative into a polished board deck
                    complete with dedicated metric cards, automated trends, and
                    executive summaries.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Process Workflow</h3>
              <ol>
                <li>
                  <strong>Define Parameters:</strong> Set the reporting entity
                  and date ranges for the required presentation.
                  <div>
                    <img
                      alt="Board Report Compiler"
                      src="/assets/images/think-agent/board-report-compiler-2.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Sync Metrics:</strong> Allow the system to safely
                  extract the corresponding live KPIs directly from the
                  connected databases.
                </li>
                <li>
                  <strong>Review Narrative:</strong> Evaluate the automatically
                  generated themed sections and future outlook commentary for
                  strategic alignment.
                </li>
                <li>
                  <strong>Export Board Deck:</strong> Generate the final
                  executive presentation, complete with formatted metric cards,
                  for stakeholder distribution.
                  <div>
                    <img
                      alt="Board Report Compiler"
                      src="/assets/images/think-agent/board-report-compiler-3.png"
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

export default DesignerAgentBoardReportCompiler;
