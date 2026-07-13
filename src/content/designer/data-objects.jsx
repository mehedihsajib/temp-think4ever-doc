import React from "react";

const DesignerDataObjects = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Data Objects</h1>
        <p className="cd-overview-p" data-i18n-html="dev_do.intro">
          This section defines the "nouns" of your system&mdash;the data
          structures that will be stored in your database.
        </p>

        <div className="yt-video" data-video-id="GwxF7YvuG9M"></div>
        <div className="doc-section">
          <ul>
            <li>
              <strong>Examples:</strong>
              <span>User, StudyMaterial, QuizResult, SubscriptionPlan.</span>
            </li>
            <li>
              <strong>Usage:</strong>
              <span>
                Define properties (e.g., email, timestamp, score) and how these
                objects relate to one another.
              </span>
            </li>
          </ul>
          <img
            alt="Data Objects Schema Visualizer"
            src="/assets/images/object-flow-1.png"
          />
        </div>
      </main>
    </div>
  );
};

export default DesignerDataObjects;
