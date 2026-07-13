import React from "react";

const DesignerFeedback = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Feedback</h1>
        <p className="cd-overview-p">
          The <strong>Feedback</strong> module is a specialized tool for
          gathering qualitative data from users, stakeholders, and team members.
          It allows you to create custom forms, collect structured responses,
          and analyze sentiment to drive project improvements.
        </p>

        <div className="yt-video" data-video-id="Wlb99hJK6c0"></div>
        <div className="doc-section">
          <p className="cd-overview-p">
            The Feedback dashboard is organized into four main tabs to help you
            manage the entire lifecycle of a submission:
          </p>
          <ul>
            <li>
              <strong>All Forms:</strong>
              <span>
                A central repository of every feedback form created for the
                project.
              </span>
            </li>
            <li>
              <strong>Submissions:</strong>
              <span>
                View and manage the individual responses collected from your
                active forms.
              </span>
            </li>
            <li>
              <strong>Analytics:</strong>
              <span>
                Access visual data and trends to understand overall user
                satisfaction and common themes.
              </span>
            </li>
            <li>
              <strong>Share Links:</strong>
              <span>
                Manage the URLs used to distribute your forms to external
                stakeholders or internal teams.
              </span>
            </li>
          </ul>
          <h4 className="cd-sub-heading">Creating a Feedback Form</h4>
          <p className="cd-overview-p">
            To start collecting data, click either the + New Form button or the
            + Create Form button in the center of the dashboard. This opens the
            New Feedback Form configuration modal.
          </p>
          <h5 className="cd-sub-heading">Form Details</h5>
          <ul>
            <li>
              <strong>Form Title:</strong>
              <span>
                Enter a clear name for your form (e.g., "Post-Alpha UI Survey").
              </span>
            </li>
            <li>
              <strong>Description (Optional):</strong>
              <span>
                Provide context or instructions for the respondents to explain
                the purpose of the feedback.
              </span>
            </li>
          </ul>
          <img alt="Feedback modal" src="/assets/images/feedback-modal.png" />
          <h5 className="cd-sub-heading">Form Types</h5>
          <p className="cd-overview-p">
            Choosing the correct Form Type ensures the data is categorized
            properly for your analytics. Available types include:
          </p>
          <ul>
            <li>
              <strong>Feedback:</strong>
              <span>
                General input regarding the project or specific features.
              </span>
            </li>
            <li>
              <strong>Survey:</strong>
              <span>Structured questions for broader data collection.</span>
            </li>
            <li>
              <strong>Poll:</strong>
              <span>
                Quick, single-question votes for rapid decision-making.
              </span>
            </li>
            <li>
              <strong>NPS (Net Promoter Score):</strong>
              <span>
                A specific metric used to measure user loyalty and the
                likelihood of recommendation.
              </span>
            </li>
            <li>
              <strong>Bug Report:</strong>
              <span>
                A streamlined form for users to report technical glitches.
              </span>
            </li>
            <li>
              <strong>Feature Request:</strong>
              <span>Allows stakeholders to suggest new functionality.</span>
            </li>
            <li>
              <strong>General:</strong>
              <span>
                A flexible format for any input that doesn't fit the above
                categories.
              </span>
            </li>
          </ul>
          <h4 className="cd-sub-heading">Collecting and Analyzing Data</h4>
          <p className="cd-overview-p">Once a form is created and shared:</p>
          <ul>
            <li>
              <strong>Monitor Submissions:</strong>
              <span>
                Check the Submissions tab regularly to see new entries in
                real-time.
              </span>
            </li>
            <li>
              <strong>Evaluate Trends:</strong>
              <span>
                Use the Analytics tab to identify recurring issues or highly
                requested features.
              </span>
            </li>
            <li>
              <strong>Bridge to Development:</strong>
              <span>
                High-priority items identified in Feedback can be manually
                transitioned into the Issues module for technical resolution.
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default DesignerFeedback;
