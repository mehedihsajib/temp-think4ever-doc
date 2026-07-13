import React from "react";

const DesignerSourceCode = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Source Code</h1>
        <div className="doc-section">
          <p className="cd-overview-p" data-i18n-html="source_code.intro">
            The Source Code dashboard is where your project transitions from
            high-level "Concept" to actual digital infrastructure. This is a
            live file system where Think4Ever manages every script, style, and
            configuration file of any project.
          </p>
          <img
            alt="Source Code Browser"
            src="/assets/images/source-code-1.png"
          />
          <h3 className="cd-sub-heading">Navigation &amp; Structure</h3>
          <p className="cd-overview-p" data-i18n-html="source_code.ns_intro">
            The Files Browser provides a standard, intuitive directory
            structure. In your current view (the insurance folder), the AI has
            organized the project into logical sections:
          </p>
          <ul>
            <li>
              <strong>config/:</strong>
              <span data-i18n-html="source_code.ns_b1_desc">
                Contains environment settings and database connection strings.
              </span>
            </li>
            <li>
              <strong>public/:</strong>
              <span data-i18n-html="source_code.ns_b2_desc">
                The "Front Door" of your app&mdash;houses the HTML, CSS, and
                images the user actually sees.
              </span>
            </li>
            <li>
              <strong>routes/:</strong>
              <span data-i18n-html="source_code.ns_b3_desc">
                The "Traffic Controller"&mdash;defines the paths (URLs) for your
                application (e.g., /dashboard or /expenditures).
              </span>
            </li>
            <li>
              <strong>utils/:</strong>
              <span data-i18n-html="source_code.ns_b4_desc">
                Helper functions and small scripts that handle repetitive tasks.
              </span>
            </li>
          </ul>
          <h3 className="cd-sub-heading">Anatomy of Your Project Files</h3>
          <p className="cd-overview-p" data-i18n-html="source_code.apf_intro">
            Every file listed includes its Type, Size, and the Last Modified
            date, giving you a clear audit trail of development.
          </p>
          <table className="config-table">
            <thead>
              <tr>
                <th>Notable File</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-i18n-html="source_code.apf_r1_1">
                  <strong>db.sql</strong>
                </td>
                <td data-i18n-html="source_code.apf_r1_2">
                  A snapshot of your database structure, often created by the
                  "Export to Source" function.
                </td>
              </tr>
              <tr>
                <td data-i18n-html="source_code.apf_r2_1">
                  <strong>insuranceserver.js</strong>
                </td>
                <td data-i18n-html="source_code.apf_r2_2">
                  The main entry point for your backend server&mdash;this is the
                  "brain" that connects your UI to your data.
                </td>
              </tr>
              <tr>
                <td data-i18n-html="source_code.apf_r3_1">
                  <strong>package.json</strong>
                </td>
                <td data-i18n-html="source_code.apf_r3_2">
                  A manifest file that lists all the technical dependencies your
                  project needs to run.
                </td>
              </tr>
              <tr>
                <td data-i18n-html="source_code.apf_r4_1">
                  <strong>README.md</strong>
                </td>
                <td data-i18n-html="source_code.apf_r4_2">
                  The project's documentation, detailing how to install and use
                  the application.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="cd-overview-p">
            In the <strong>Source Codes</strong> section, navigating and
            managing your technical assets is designed to be as intuitive as a
            standard desktop environment, but with high-end developer tools
            built right in. <strong>View</strong> &mdash; Read-only view in the
            code editor.
          </p>
          <img
            alt="Anatomy and Navigation"
            src="/assets/images/source-code-2.png"
          />
          <h3 className="cd-sub-heading">Navigation &amp; Tracking</h3>
          <ul>
            <li>
              <strong>Breadcrumb Navigation:</strong>
              <span data-i18n-html="source_code.nt_b1_desc">
                Use the dynamic path links (e.g., Root / public / assets) at the
                top of the browser to move instantly between parent and child
                directories.
              </span>
            </li>
            <li>
              <strong>File Metadata:</strong>
              <span>
                Every asset is listed with its
                <strong>Name, Type</strong> (JS, HTML, CSS, etc.),
                <strong>Size</strong>, and the exact
                <strong>Timestamp</strong> of the last modification. This
                provides a clear audit trail for every change the AI agents
                make.
              </span>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "32px",
              marginBottom: "12px",
            }}
          >
            <h3 className="cd-sub-heading">Individual File Action</h3>
            <img
              style={{ height: "60px", objectFit: "contain" }}
              alt="Individual File Actions"
              src="/assets/images/source-code-3.jpg"
            />
          </div>
          <p className="cd-overview-p" data-i18n-html="source_code.ifa_intro">
            For surgical control over your application's files, each row in the
            browser offers four primary actions:
          </p>
          <ul
            style={{ listStyleType: "none", paddingLeft: "0", marginLeft: "0" }}
          >
            <li>
              <strong style={{ fontSize: "1.05rem" }}>
                <i
                  style={{ marginRight: "8px" }}
                  aria-hidden="true"
                  className="fa-solid fa-eye"
                ></i>
                <span>View &mdash; Read-Only Mode</span>
              </strong>
              <ul style={{ marginTop: "8px", marginBottom: "24px" }}>
                <li>
                  <strong>The Function:</strong>
                  <span data-i18n-html="source_code.ifa_b1_d1_desc">
                    Opens a quick-look preview of the file's content.
                  </span>
                </li>
                <li>
                  <strong>The Utility:</strong>
                  <span data-i18n-html="source_code.ifa_b1_d2_desc">
                    Perfect for a "spot check" to verify that a logic fix or a
                    UI update was applied correctly without accidentally
                    changing anything.
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <strong style={{ fontSize: "1.05rem" }}>
                <i
                  style={{ marginRight: "8px" }}
                  aria-hidden="true"
                  className="fa-solid fa-pen-to-square"
                ></i>
                <span>Edit &mdash; Full-Screen Code Editor</span>
              </strong>
              <ul style={{ marginTop: "8px", marginBottom: "24px" }}>
                <li>
                  <strong>The Function:</strong>
                  <span data-i18n-html="source_code.ifa_b2_d1_desc">
                    Launches a professional-grade development environment
                    featuring the high-contrast Catppuccin theme.
                  </span>
                </li>
                <li>
                  <strong>The Utility:</strong>
                  <span data-i18n-html="source_code.ifa_b2_d2_desc">
                    Features full syntax highlighting, making it easy to
                    manually tweak code or add custom comments. It's the
                    ultimate tool for "Final Form" personalization.
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <strong style={{ fontSize: "1.05rem" }}>
                <i
                  style={{ marginRight: "8px" }}
                  aria-hidden="true"
                  className="fa-solid fa-download"
                ></i>
                <span>Download &mdash; Local Export</span>
              </strong>
              <ul style={{ marginTop: "8px", marginBottom: "24px" }}>
                <li>
                  <strong>The Function:</strong>
                  <span data-i18n-html="source_code.ifa_b3_d1_desc">
                    Instantly saves the specific file to your computer.
                  </span>
                </li>
                <li>
                  <strong>The Utility:</strong>
                  <span data-i18n-html="source_code.ifa_b3_d2_desc">
                    Use this if you need to share a specific script with a
                    collaborator or want to keep a local backup of a critical
                    configuration file like db.sql.
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <strong style={{ fontSize: "1.05rem" }}>
                <i
                  style={{ marginRight: "8px" }}
                  aria-hidden="true"
                  className="fa-solid fa-trash"
                ></i>
                <span>Delete &mdash; Secure Removal</span>
              </strong>
              <ul style={{ marginTop: "8px", marginBottom: "24px" }}>
                <li>
                  <strong>The Function:</strong>
                  <span data-i18n-html="source_code.ifa_b4_d1_desc">
                    Removes the file from the project directory.
                  </span>
                </li>
                <li>
                  <strong>The Utility:</strong>
                  <span data-i18n-html="source_code.ifa_b4_d2_desc">
                    Includes a confirmation step to prevent accidental loss of
                    data. Use this to prune legacy files or experimental scripts
                    that are no longer needed.
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default DesignerSourceCode;
