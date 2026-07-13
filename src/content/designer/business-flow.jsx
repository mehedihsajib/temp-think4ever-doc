import React from "react";

const DesignerBusinessFlow = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Business Flows</h1>
        <p className="cd-overview-p">
          Business Flows visualize the step-by-step journey a user takes to
          complete a task.
        </p>

        <div className="yt-video" data-video-id="oS5Ot6ek_Yo"></div>
        <div className="doc-section">
          <ul>
            <li>
              <strong>Example:</strong>
              <span>
                The sequence of events from a student uploading a PDF to the AI
                generating a summary and quiz.
              </span>
            </li>
            <li>
              <strong>Usage:</strong>
              <span>
                Identify bottlenecks in the user experience before a single line
                of code is written.
              </span>
            </li>
          </ul>
          <img
            alt="Business Flows Dashboard"
            src="/assets/images/business-1.png"
          />
        </div>
      </main>
    </div>
  );
};

export default DesignerBusinessFlow;
