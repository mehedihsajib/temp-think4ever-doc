import React from 'react';

const DesignerIssues = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title">Issues</h1>
<p className="cd-overview-p">
          The <strong>Issues</strong> module is a comprehensive tracking
          system designed to help you identify, report, and resolve bugs,
          tasks, and feature enhancements throughout the project lifecycle.
        </p>

<div className="yt-video" data-video-id="KI1HGXgxZ58"></div>
<div className="doc-section">
<h3 className="cd-sub-heading">Issues Dashboard Overview</h3>
<p>
            The main interface allows you to toggle between three distinct
            views to monitor your project's health:
          </p>
<ul className="cd-overview-ul">
<li>
<strong>List View:</strong>
<span>A tabular format for quick scanning of all entries, providing
                key details like Tracker type, Subject, Status, and Priority.
              </span>
</li>
<li>
<strong>Board View:</strong>
<span>A Kanban-style layout for visual workflow management (e.g.,
                New &rarr; In Progress &rarr; Resolved).
              </span>
</li>
<li>
<strong>Summary View:</strong>
<span>A high-level data dashboard showing the distribution of
                issues by priority levels and category.
              </span>
</li>
</ul>
<img alt="Issues Tabs" className="demo-img" src="/assets/images/issues-tabs.png"/>
<h3 style={{marginTop: '32px', fontSize: '1.05rem'}} className="cd-sub-heading">
            Filtering and Searching
          </h3>
<p className="cd-overview-p">
            To locate specific issues within a large project, use the global
            search bar or the quick-filters:
          </p>
<ul className="cd-overview-ul">
<li>
<strong>Status:</strong>
<span>Filter by Open, Closed, or All issues. </span>
</li>
<li>
<strong>Tracker:</strong>
<span>View specific types (e.g., only Bugs or only Features).
              </span>
</li>
<li>
<strong>Priority:</strong>
<span>Focus on critical items by filtering for "Immediate" or
                "Urgent" tasks.
              </span>
</li>
<li>
<strong>Assigned To:</strong>
<span>View tasks assigned to specific team members. </span>
</li>
</ul>
<img alt="Issue Filtering" className="demo-img" src="/assets/images/issues-filter.png"/>
<h3 className="cd-sub-heading">Reporting a New Issue</h3>
<p>
            To log a new entry, click the <strong>+ New Issue</strong> button.
            Fill out the following mandatory and optional fields:
          </p>
<table className="config-table">
<thead>
<th>Field</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td>Tracker</td>
<td>
                  Categorize the entry (Bug, Feature, Task, Support, or
                  Improvement).
                </td>
</tr>
<tr>
<td>Priority</td>
<td>Set the urgency level from Low to Immediate.</td>
</tr>
<tr>
<td>Subject</td>
<td>A short, descriptive title of the issue.</td>
</tr>
<tr>
<td>Description</td>
<td>
                  Detailed information, including "Steps to Replicate" for
                  bugs.
                </td>
</tr>
<tr>
<td>Assigned To</td>
<td>Select the team member responsible for the task.</td>
</tr>
<tr>
<td>Target Version</td>
<td>
                  Link the issue to a specific software release (e.g., v1.0).
                </td>
</tr>
</tbody>
</table>
<img alt="Creating a New Issue" className="demo-img" src="/assets/images/issues-create-new.png"/>
<p>
            The <strong>Status</strong> field is used to track the lifecycle
            of an issue from discovery to resolution. Based on the dropdown
            menu in the "New Issue" modal, here are the available status
            options:
          </p>
<ul className="cd-overview-ul">
<li>
<strong>New:</strong>
<span>The initial state of an issue upon creation; it is awaiting
                review or triaging.
              </span>
</li>
<li>
<strong>In Progress:</strong>
<span>Work has officially started. The assigned developer or team
                member is actively addressing the issue.
              </span>
</li>
<li>
<strong>Resolved:</strong>
<span>The fix has been implemented or the task completed. It is
                usually ready for Quality Assurance (QA) testing.
              </span>
</li>
<li>
<strong>Feedback:</strong>
<span>The issue requires more information from the reporter, or the
                fix was tested and needs further refinement.
              </span>
</li>
<li>
<strong>Closed:</strong>
<span>The issue has been verified as fixed or completed and
                requires no further action.
              </span>
</li>
<li>
<strong>Rejected:</strong>
<span>The issue was determined to be invalid, a duplicate, or
                "working as intended."
              </span>
</li>
<li>
<strong>Reopened:</strong>
<span>A previously closed or resolved issue that has recurred or
                was not fixed successfully.
              </span>
</li>
</ul>
<img alt="Issue Status" className="demo-img" src="/assets/images/issues-status.png"/>
</div>
</main>
    </div>
  );
};

export default DesignerIssues;
