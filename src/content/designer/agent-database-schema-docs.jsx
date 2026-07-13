import React from "react";

const DesignerAgentDatabaseSchemaDocs = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Database Schema Docs</h1>
        <section>
          <div className="para-box">
            <p>
              The <strong>Database Schema Docs</strong> automatically generates
              comprehensive documentation for your database by analyzing its
              schema and relationships. It inspects database tables, columns,
              data types, primary and foreign keys, and translates the technical
              structure into clear, human-readable documentation. The resulting
              data dictionary helps developers, database administrators, and
              business analysts understand the database design, improve
              collaboration, and accelerate system maintenance.
            </p>
            <div>
              <img
                alt="Database Schema Docs"
                src="/assets/images/think-agent/database-schema-docs-1.png"
              />
            </div>
            <div className="para-box">
              <h3>Key Features</h3>
              <ul>
                <li>
                  <strong>Configurable Documentation Detail:</strong>
                  <span>
                    Select the desired level of documentation, ranging from
                    high-level table summaries to detailed column-level
                    descriptions and relationship mappings.
                  </span>
                </li>
                <li>
                  <strong>Automated Schema Discovery:</strong>
                  <span>
                    Connects to the live database and automatically inspects
                    tables, columns, data types, primary keys, foreign keys, and
                    other structural metadata without requiring manual input.
                  </span>
                </li>
                <li>
                  <strong>Plain-Language Table Descriptions:</strong>
                  <span>
                    Generates concise, easy-to-understand descriptions for each
                    database table, explaining its purpose and the type of
                    information it stores.
                  </span>
                </li>
                <li>
                  <strong>Relationship Mapping:</strong>
                  <span>
                    Identifies and documents relationships between tables using
                    foreign keys, providing a clear view of how data is
                    connected throughout the database.
                  </span>
                </li>
                <li>
                  <strong>Structured Data Dictionary Output:</strong>
                  <span>
                    Produces organized documentation that includes table
                    definitions, column descriptions, key constraints,
                    relationships, and other schema metadata, making it suitable
                    for technical reference, onboarding, and system
                    documentation.
                  </span>
                </li>
              </ul>
            </div>
            <h3>Process Workflow</h3>
            <div className="para-box">
              <h4>1. Select the Documentation Level</h4>
              <p>
                Choose the desired level of detail for the generated
                documentation based on your documentation requirements.
              </p>
              <div>
                <img
                  alt="Database Schema Docs"
                  src="/assets/images/think-agent/database-schema-docs-2.png"
                />
              </div>
            </div>
            <div className="para-box">
              <h4>2. Review the Documentation Plan</h4>
              <p>
                Examine the generated plan, including the selected documentation
                scope and schema discovery process, before proceeding.
              </p>
            </div>
            <div className="para-box">
              <h4>3. Generate the Database Documentation</h4>
              <p>
                Confirm the plan to allow the application to inspect the live
                database schema, analyze tables, columns, and foreign key
                relationships, and generate descriptive documentation.
              </p>
            </div>
            <div className="para-box">
              <h4>4. Review the Generated Data Dictionary</h4>
              <p>
                Access the structured database documentation containing
                plain-language table descriptions, column definitions, primary
                and foreign key information, and relationship diagrams or
                mappings. Use the documentation to support database maintenance,
                system design, developer onboarding, and technical documentation
                efforts.
              </p>
              <div>
                <img
                  alt="Database Schema Docs"
                  src="/assets/images/think-agent/database-schema-docs-3.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerAgentDatabaseSchemaDocs;
