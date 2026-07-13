import React from "react";

const DesignerContainers = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Containers</h1>
        <div className="doc-section">
          <p className="cd-overview-p" data-i18n-html="containers.intro">
            The <strong>Containers</strong> module is where your application
            transitions from a collection of files into a portable,
            production-ready system. By leveraging <strong>Docker</strong>,
            Think4Ever AI ensures that your project &mdash; runs identically on
            your local machine, a staging server, or the cloud.
          </p>
          <img alt="Containers Dashboard" src="/assets/images/containers.png" />
          <p
            style={{ marginTop: "32px", fontWeight: "600", color: "#000" }}
            className="cd-overview-p"
            data-i18n-html="containers.fpt_title"
          >
            There are four powerful tabs:
          </p>
          <table className="config-table">
            <thead>
              <tr>
                <th>Tab</th>
                <th>What it enables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-i18n-html="containers.r1_c1">
                  <strong>Configuration</strong>
                </td>
                <td data-i18n-html="containers.r1_c2">
                  View your docker-compose.yml file. Toggle to
                  <strong>Visual Mode</strong> to see your servers as
                  interactive cards.
                </td>
              </tr>
              <tr>
                <td data-i18n-html="containers.r2_c1">
                  <strong>Assistant Agent</strong>
                </td>
                <td data-i18n-html="containers.r2_c2">
                  Don't like a setting? Just tell the AI:
                  <em>"Change the database port to 3306"</em> or
                  <em>"Add a backup service."</em>
                </td>
              </tr>
              <tr>
                <td data-i18n-html="containers.r3_c1">
                  <strong>History</strong>
                </td>
                <td data-i18n-html="containers.r3_c2">
                  A "Time Machine" for your infrastructure. If a change breaks
                  the build, roll back to a previous version instantly.
                </td>
              </tr>
              <tr>
                <td data-i18n-html="containers.r4_c1">
                  <strong>Builds</strong>
                </td>
                <td data-i18n-html="containers.r4_c2">
                  The final step. <strong>Download as ZIP</strong> for your
                  local machine or <strong>Push to Source</strong> to add it to
                  your project files.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DesignerContainers;
