import React from "react";

const DeveloperAiAssistant = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>AI Assistant Panel</h1>

        <section>
          <p>
            The left-side panel contains the integrated AI assistant named
            Think.
          </p>
          <div className="para-box">
            <p>This panel is used for:</p>
            <ul>
              <li>Code assistance</li>
              <li>Debugging support</li>
              <li>Task automation</li>
              <li>System analysis</li>
              <li>Development guidance</li>
            </ul>
          </div>
          <div className="image-wrapper pb-0">
            <img
              alt="AI Assistant Panel"
              src="/assets/images/dev-doc/29-ai-pannel-1.png"
            />
          </div>
          <h3>Components of AI Assistant Panel:</h3>
          <div className="para-box">
            <h3>A. Conversation Area</h3>
            <p>Displays interactions between the user and the AI assistant.</p>
            <p>Examples include:</p>
            <ul>
              <li>Test execution summaries</li>
              <li>Route validation checks</li>
              <li>Error analysis</li>
              <li>Suggested fixes</li>
              <li>Development recommendations</li>
            </ul>
            <div>
              <img
                alt="AI Assistant"
                src="/assets/images/dev-doc/29-ai-pannel-2.png"
              />
            </div>
          </div>
          <div className="para-box">
            <h3>B. User Instructions</h3>
            <p>
              User requests appear as highlighted in blue instruction blocks.
            </p>
            <p>Typical requests may include:</p>
            <ul>
              <li>Reviewing route files</li>
              <li>Fixing export mismatches</li>
              <li>Restarting applications</li>
              <li>Running automated tests</li>
            </ul>
          </div>
          <div className="para-box">
            <h3>C. AI Responses</h3>
            <p>
              AI-generated responses provide analysis, findings, and recommended
              actions.
            </p>
            <div>
              <img
                alt="AI Assistant"
                src="/assets/images/dev-doc/29-ai-pannel-3.png"
              />
            </div>
            <p>The assistant may:</p>
            <ul>
              <li>Review project files</li>
              <li>Analyze logs</li>
              <li>Detect coding issues</li>
              <li>Recommend fixes</li>
              <li>Perform troubleshooting</li>
            </ul>
          </div>
          <div className="para-box">
            <h3>D. Task Status Indicators</h3>
            <p>Status labels display the progress of AI tasks.</p>
            <p>Common statuses:</p>
            <ul>
              <li>Done</li>
              <li>Running</li>
              <li>Review</li>
            </ul>
          </div>
          <div className="para-box">
            <h3>E. AI Command Input</h3>
            <p>Located at the bottom of the AI panel.</p>
            <p>Users may enter commands or requests such as:</p>
            <ul>
              <li>Create files</li>
              <li>Modify source code</li>
              <li>Explore project structure</li>
              <li>Investigate errors</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeveloperAiAssistant;
