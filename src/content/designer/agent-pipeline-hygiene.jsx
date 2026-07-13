import React from "react";

const DesignerAgentPipelineHygiene = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Pipeline Hygiene</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Pipeline Hygiene</strong> engine ensures CRM data
              integrity and accurate forecasting by systematically scanning your
              active sales pipelines. By identifying stalled negotiations and
              unaddressed accounts, it flags at-risk opportunities and assigns
              corrective actions to keep revenue projections realistic.
            </p>
            <div>
              <img
                alt="Pipeline Hygiene"
                src="/assets/images/think-agent/pipeline-hygiene-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Customizable Staleness Thresholds:</strong>
                  <span>
                    Define your precise parameters for deal stagnation (e.g.,
                    age of the deal, number of days without communication, or
                    missed close dates) to match your team's specific sales
                    velocity.
                  </span>
                </li>
                <li>
                  <strong>Direct Deal Extraction:</strong>
                  <span>
                    Connects securely to your sales database or CRM tables to
                    evaluate live, open opportunities without requiring manual
                    exports or data manipulation.
                  </span>
                </li>
                <li>
                  <strong>Severity-Graded Risk Analysis:</strong>
                  <span>
                    Inspects every open opportunity and categorizes risks into
                    clear severity tiers, instantly separating minor
                    communication lags from critical, near-dead pipeline
                    entries.
                  </span>
                </li>
                <li>
                  <strong>Prescriptive Action Blueprints:</strong>
                  <span>
                    Pairs each flagged, at-risk deal with a concrete,
                    data-backed remediation step (such as automated
                    re-engagement triggers, executive sponsorship escalations,
                    or pipeline disqualification).
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Process Workflow</h3>
              <h4>Step 1: Configure Thresholds</h4>
              <p>
                Set the target inactivity limits and close-date buffers that
                constitute a stalled or at-risk opportunity.
              </p>
              <div>
                <img
                  alt="Pipeline Hygiene"
                  src="/assets/images/think-agent/pipeline-hygiene-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>Step 2: Sync Pipeline Data</h4>
              <p>
                Allow the engine to securely ingest open deal structures
                directly from the connected repository.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 3: Audit Risk Severities</h4>
              <p>
                Review the flagged opportunities on the hygiene dashboard,
                sorted from highest structural risk to lowest.
              </p>
            </div>
            <div className="para-box">
              <h4>Step 4: Execute Remediations</h4>
              <p>
                Deploy the system's recommended actions to re-engage active
                opportunities or purge stale data from the pipeline.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentPipelineHygiene;
