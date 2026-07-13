import React from 'react';

const DesignerJira = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title">Jira</h1>

<div className="yt-video" data-video-id="MwUo08iZM_0"></div>
<div className="doc-section">
<p className="cd-overview-p">
            The Jira Integration module enables a powerful bi-directional sync
            between your project environment and Jira Cloud. This ensures that
            technical issues, task progress, and status updates remain
            consistent across both platforms, eliminating the need for manual
            duplicate entry.
          </p>
<h3 className="cd-sub-heading">Integration Overview</h3>
<p>
            The dashboard is organized into four key areas to manage and
            monitor your connection:
          </p>
<ul className="cd-overview-ul">
<li>
<strong>Connection:</strong>
<span>The primary setup tab used to link your project to a Jira
                Cloud instance.
              </span>
</li>
<li>
<strong>Field Mapping:</strong>
<span>Define how data points in this platform (e.g., Priority,
                Tracker) correspond to specific Jira fields.
              </span>
</li>
<li>
<strong>Sync Status:</strong>
<span>A real-time monitor showing the health of the connection and
                the timing of the last successful synchronization.
              </span>
</li>
<li>
<strong>Synced Issues:</strong>
<span>A dedicated list of all entries currently being tracked in
                both systems.
              </span>
</li>
</ul>
<img alt="Jira Integration" className="demo-img" src="/assets/images/jira-int.png"/>
<h3 style={{marginTop: '32px', fontSize: '1.05rem'}} className="cd-sub-heading">
            Connecting to Jira Cloud
          </h3>
<p className="cd-overview-p">
            To establish the link for the first time:
          </p>
<ol className="cd-overview-ul number">
<li>
              Navigate to the Integrations section in the left sidebar and
              select Jira.
            </li>
<li>
              Click the purple Connect Jira button in the center of the
              screen.
            </li>
<li>
              Follow the authentication prompts to authorize the connection
              with your Jira Cloud credentials.
            </li>
<li>
              Once connected, you will be able to select the specific Jira
              project you wish to sync with this workspace.
            </li>
</ol>
<img alt="Jira Conection" className="demo-img" src="/assets/images/jira-connect.png"/>
<h3 className="cd-sub-heading">Managing Bi-Directional Sync</h3>
<p>The integration is designed to work both ways:</p>
<ul className="cd-overview-ul">
<li>
<strong>Platform &rarr; Jira:</strong>
<span>TWhen you create a new Issue or Task here, it can
                automatically generate a corresponding ticket in Jira.
              </span>
</li>
<li>
<strong>Jira &rarr; Platform:</strong>
<span>Updates made by external developers in Jira (such as changing
                a status from "In Progress" to "Done") will reflect back in
                your dashboard automatically.
              </span>
</li>
</ul>
<h3 className="cd-sub-heading">Field &amp; Status Mapping</h3>
<p>
            To ensure data integrity, use the Field Mapping tab to align
            workflows:
          </p>
<ul className="cd-overview-ul">
<li>
<strong>Status Transitions:</strong>
<span>Map your internal statuses (e.g., Resolved) to Jira's
                workflow steps (e.g., Fixed).
              </span>
</li>
<li>
<strong>Priority Levels:</strong>
<span>Ensure that an Immediate priority here triggers the highest
                urgency level in Jira.
              </span>
</li>
<li>
<strong>Assignees</strong>
<span>Link user profiles so that task ownership is preserved across
                both environments.
              </span>
</li>
</ul>
</div>
</main>
    </div>
  );
};

export default DesignerJira;
