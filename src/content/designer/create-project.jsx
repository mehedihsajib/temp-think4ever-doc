import React from "react";

const DesignerCreateProject = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Create a New Project</h1>

        <section>
          <p>
            The Create a New Project interface serves as the primary input layer
            where users define the foundational goals of their target
            application, platform, or business solution. Users can enter a
            business idea, project requirements, or technical descriptions
            directly into the main description text field.
          </p>
          <div>
            <img
              alt="How to Create Project"
              src="/assets/images/create-project-button.png"
            />
          </div>

          <div className="yt-video" data-video-id="6wmwLtcdV6k"></div>
          <div className="para-box">
            <h3>Key features</h3>
            <p>
              <strong>Automated System Analysis </strong>
            </p>
            <p>
              Upon submission, the platform&rsquo;s analysis engine evaluates
              the provided text to automatically determine:
            </p>
            <ul>
              <li>A suitable project name.</li>
              <li>The most efficient project setup path.</li>
              <li>
                The initial structure and workspace layout.
                <div>
                  <img
                    style={{ maxWidth: "400px" }}
                    alt="How to Create Project"
                    src="/assets/images/create-project-left.png"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h3>Integrating Existing Resources</h3>
            <p>
              If you have pre-existing assets, you can explicitly mention them
              within your description. This includes specifying existing source
              code, active Git repositories, preferred technologies, or strict
              implementation requirements. The system processes these details to
              customize your setup and guide you through the appropriate
              creation workflow.
            </p>
            <div>
              <img
                style={{ maxWidth: "400px" }}
                alt="Integrating Existing Resources"
                src="/assets/images/create-existing-project.png"
              />
            </div>
            <p>
              <em>
                The platform's analysis engine can process diverse file types
                uploaded during initialization, extraction, or advanced setup
                configurations. Once your files are uploaded, the AI
                automatically handles the setup.
              </em>
            </p>
          </div>
          <div className="para-box">
            <h3>How to Create a New Project</h3>
            <p>
              1. In the Dashboard, click on{" "}
              <strong>Create a New Project</strong> button
            </p>
            <div>
              <img
                alt="How to Create Project"
                src="/assets/images/create-project-button.png"
              />
            </div>
          </div>
          <div className="para-box">
            <p>2. Describe the project you want to create.</p>
            <div>
              <img
                alt="Describe the project you want to create"
                src="/assets/images/create-project-description.png"
              />
            </div>
          </div>
          <div className="para-box">
            <p>
              3. Click on <strong>Send</strong> button.
            </p>
            <div>
              <img
                alt="Click on Send button"
                src="/assets/images/create-project-send.png"
              />
            </div>
          </div>
          <div className="para-box">
            <p>
              4. After system has analyzed the initial requirements, it will
              display clarificatory questions
            </p>
            <div>
              <img
                alt="Clarificatory questions"
                src="/assets/images/create-project-question.png"
              />
            </div>
          </div>
          <div className="para-box">
            <p>
              5. System will process your answers and start to generate concepts
              and structures
            </p>
            <div>
              <img
                alt="System will process your answers"
                src="/assets/images/create-project-processing.png"
              />
            </div>
          </div>
          <div className="para-box">
            <p>
              <em>
                IMPORTANT: Analysis process may take 15 minutes or more
                depending on the complexity of your project.
              </em>
            </p>
            <p>
              Once the project has been initially created, you will be taken to
              Designer/Architect mode of your project where you can customize
              and modify the project created.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerCreateProject;
