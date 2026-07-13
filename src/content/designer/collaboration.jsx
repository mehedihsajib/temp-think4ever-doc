import React from "react";

const DesignerCollaboration = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Collaboration</h1>

        <div className="doc-section">
          <p className="cd-overview-p">
            The Collaboration module is the communication engine of the
            platform. It centralizes all discussions, feedback loops, and shared
            permissions across your pages and workspaces, ensuring that team
            members can interact without leaving the project environment.
          </p>
          <p className="cd-overview-p">
            The dashboard is organized into four key areas to manage and monitor
            your connection:
          </p>
          <ul>
            <li>
              <strong>Connection:</strong>
              <span>
                The primary setup tab used to link your project to a Jira Cloud
                instance.
              </span>
            </li>
            <li>
              <strong>Field Mapping:</strong>
              <span>
                Define how data points in this platform (e.g., Priority,
                Tracker) correspond to specific Jira fields.
              </span>
            </li>
            <li>
              <strong>Sync Status:</strong>
              <span>
                A real-time monitor showing the health of the connection and the
                timing of the last successful synchronization.
              </span>
            </li>
            <li>
              <strong>Synced Issues:</strong>
              <span>
                A dedicated list of all entries currently being tracked in both
                systems.
              </span>
            </li>
          </ul>
          <img
            alt="Collaboration Tabs"
            src="/assets/images/collaburation-tabs.png"
          />
          <h3 className="cd-sub-heading">Connecting to Jira Cloud</h3>
          <p className="cd-overview-p">
            To establish the link for the first time:
          </p>
          <ol className="cd-overview-ul number">
            <li>
              Navigate to the Integrations section in the left sidebar and
              select Jira.
            </li>
            <li>
              Click the purple Connect Jira button in the center of the screen.
            </li>
            <li>
              Follow the authentication prompts to authorize the connection with
              your Jira Cloud credentials.
            </li>
            <li>
              Once connected, you will be able to select the specific Jira
              project you wish to sync with this workspace.
            </li>
          </ol>
          <h3 className="cd-sub-heading">Managing Bi-Directional Sync</h3>
          <p className="cd-overview-p">
            The integration is designed to work both ways:
          </p>
          <ul>
            <li>
              <strong>Platform &rarr; Jira:</strong>
              <span>
                When you create a new Issue or Task here, it can automatically
                generate a corresponding ticket in Jira.
              </span>
            </li>
            <li>
              <strong>Jira &rarr; Platform:</strong>
              <span>
                Updates made by external developers in Jira (such as changing a
                status from "In Progress" to "Done") will reflect back in your
                dashboard automatically.
              </span>
            </li>
          </ul>
          <h3 className="cd-sub-heading">Field &amp; Status Mapping</h3>
          <p className="cd-overview-p">
            To ensure data integrity, use the Field Mapping tab to align
            workflows:
          </p>
          <ul>
            <li>
              <strong>Status Transitions:</strong>
              <span>
                Map your internal statuses (e.g., Resolved) to Jira's workflow
                steps (e.g., Fixed).
              </span>
            </li>
            <li>
              <strong>Priority Levels:</strong>
              <span>
                Ensure that an Immediate priority here triggers the highest
                urgency level in Jira.
              </span>
            </li>
            <li>
              <strong>Assignees:</strong>
              <span>
                Link user profiles so that task ownership is preserved across
                both environments.
              </span>
            </li>
          </ul>
          <h3 className="cd-sub-heading">Benefits of Integration</h3>
          <ul>
            <li>
              <strong>Real-Time Collaboration:</strong>
              <span>
                Your technical team can work in Jira while project managers and
                stakeholders monitor progress directly from the Knowledge &amp;
                Feedback modules.
              </span>
            </li>
            <li>
              <strong>Consolidated Reporting:</strong>
              <span>
                View Jira-based task completion rates within your internal
                Analytics and Summary views.
              </span>
            </li>
            <li>
              <strong>Single Source of Truth:</strong>
              <span>
                Avoid version conflicts by ensuring that comments and
                attachments added in one system are visible in the other.
              </span>
            </li>
          </ul>
          <p className="cd-overview-p">
            <em>
              Note: For the integration to function correctly, ensure your Jira
              API tokens are active and that the connected user has "Write"
              permissions in the target Jira project.
            </em>
          </p>
        </div>
      </main>
    </div>
  );
};

export default DesignerCollaboration;
