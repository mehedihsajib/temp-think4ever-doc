import React from "react";

const DesignerAgentAnomalyFinder = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Anomaly Finder</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Anomaly Finder</strong> agent profiles numeric
              datasets to isolate and surface statistically significant outliers
              that impact operational integrity.
            </p>
            <div>
              <img
                alt="Anomaly Finder"
                src="/assets/images/think-agent/anomaly-finder-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Core Mechanics</h3>
              <ul>
                <li>
                  <strong>Targeted Profiling:</strong>
                  <span>
                    Scans a specific table and designated numeric column chosen
                    from your active workspace environment.
                  </span>
                </li>
                <li>
                  <strong>Live Statistical Computation:</strong>
                  <span>
                    Calculates real-time data distributions, statistical
                    baselines, variance metrics, and top recurring values.
                  </span>
                </li>
                <li>
                  <strong>AI-Powered Outlier Flagging:</strong>
                  <span>
                    Flags data anomalies by evaluating statistical variance,
                    unexpected shifts, and mathematical deviation patterns,
                    assigning a severity rating to each.
                  </span>
                </li>
                <li>
                  <strong>Severity-Branched Reporting:</strong>
                  <span>
                    Organizes findings into an actionable report categorized by
                    risk levels to streamline data cleaning and incident
                    response.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Step by Step Guide</h3>
              <h4>Step 1: Select the Data Target</h4>
              <p>
                Navigate your available database structures or project schemas.
                Select the specific table and the exact numeric column you want
                to audit for inconsistencies.
              </p>
              <div>
                <img
                  alt="Select Data Target"
                  src="/assets/images/think-agent/anomaly-finder-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>Step 2: Compute Baseline Statistics</h4>
              <p>
                Run the profiling tool to analyze your dataset. The system
                processes the column data live, computing standard mathematical
                metrics and extracting top distribution values to establish a
                baseline.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 3: Run the AI Anomaly Flagging</h4>
              <p>
                Initiate the evaluation engine. The agent reviews the data
                distributions, cross-references anomalies against your baseline
                statistics, and rates the severity of each identified outlier.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 4: Review the Severity-Branched Report</h4>
              <p>
                Open the final report to examine the flagged entries. Use the
                branched severity sections (e.g., Critical, Warning, Info) to
                quickly isolate and remediate data entry errors, operational
                bugs, or unexpected transactional spikes.
              </p>
              <div>
                <img
                  alt="Severity-Branched Report"
                  src="/assets/images/think-agent/anomaly-finder-3.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentAnomalyFinder;
