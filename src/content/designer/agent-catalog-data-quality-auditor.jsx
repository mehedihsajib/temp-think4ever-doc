import React from "react";

const DesignerAgentCatalogDataQualityAuditor = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Catalog Data Quality Auditor</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Catalog Data Quality Auditor</strong> scans your
              product inventory to isolate data omissions, structural
              inaccuracies, and incomplete formatting. By cross-referencing your
              digital catalog against robust SKU criteria, it translates raw
              data gaps into a prioritized operational fix-list, complete with
              machine-drafted remediation values for immediate rollout.
            </p>
            <div>
              <img
                alt="Catalog Data Quality Auditor"
                src="/assets/images/think-agent/catalog-data-quality-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Comprehensive Catalog Ingestion:</strong>
                  <span>
                    Safely connects to and extracts your active item indexes,
                    inventory databases, or e-commerce product catalogs for
                    systematic profiling.
                  </span>
                </li>
                <li>
                  <strong>Multi-Variable Omission Scanning:</strong>
                  <span>
                    Evaluates your catalog data to pinpoint absent product media
                    assets, missing marketing copy, unspecified or zero-value
                    pricing points, and crucial product attributes (such as
                    dimensions, materials, or weight tags).
                  </span>
                </li>
                <li>
                  <strong>Revenue-Impact Prioritization:</strong>
                  <span>
                    Analyzes your structural data gaps and groups the required
                    updates by priority, focusing immediately on
                    high-visibility, high-traffic, or top-selling products where
                    missing data hurts sales velocity most.
                  </span>
                </li>
                <li>
                  <strong>Automated Value Drafting:</strong>
                  <span>
                    Generates targeted, contextually accurate suggested values
                    (including attribute tags, boilerplate copy structural
                    edits, or calculated price baselines) per product to enable
                    bulk updates.
                  </span>
                </li>
              </ul>
            </div>
            <div className="para-box">
              <h3>Process Workflow</h3>
              <ol>
                <li>
                  <strong>Load Digital Catalog:</strong> Connect your target
                  product tables or ingest your catalog data file into the
                  auditor utility.
                  <div>
                    <img
                      alt="Catalog Data Quality Auditor"
                      src="/assets/images/think-agent/catalog-data-quality-2.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Execute Quality Profiling:</strong> Run the automated
                  scan to index structural integrity across imagery,
                  descriptions, and pricing fields.
                </li>
                <li>
                  <strong>Review Prioritized Fix-List:</strong> Evaluate the
                  system-generated inventory dashboard, focusing first on
                  high-priority gaps affecting your core product lines.
                  <div>
                    <img
                      alt="Catalog Data Quality Auditor"
                      src="/assets/images/think-agent/catalog-data-quality-3.png"
                    />
                  </div>
                </li>
                <li>
                  <strong>Apply Drafted Values:</strong> Review the AI-suggested
                  attribute values and approve them to quickly eliminate catalog
                  data gaps.
                  <div>
                    <img
                      alt="Catalog Data Quality Auditor"
                      src="/assets/images/think-agent/catalog-data-quality-4.png"
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

export default DesignerAgentCatalogDataQualityAuditor;
