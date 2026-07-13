import React from "react";

const DeveloperStartNewProject = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Start a new project</h1>

        <section>
          <p>
            You can select a existing project to continue or create a new one.
            Select "Create a New Project" to create a brand new project. Select
            an existing project to open a project you are already working on
          </p>

          <h3 className="h3 mt-20">Creating a new project</h3>
          <p>Click on create new project button to create a new project.</p>

          <ol>
            <li>
              In the Dashboard, click on
              <strong>Create a New Project</strong> button
            </li>
            <li>Describe the project you want to create.</li>
            <li>
              Click on <strong>Continue</strong> button.
              <div>
                <img
                  alt="How to Create Project"
                  src="/assets/images/create-project-1.png"
                />
              </div>
            </li>
            <li>
              The application will analyze the description of the app and will
              generate suggestion, thus this screen popup will appear.
              <div>
                <img
                  alt="How to Create Project"
                  src="/assets/images/create-project-2.1.png"
                />
              </div>
            </li>
            <li>
              Select any option or simply choose the recommended option, then
              tap on <strong>Open Architect</strong> button.
            </li>
            <li>
              AI will generate a couple of questions for
              <strong>Requirements Analysis</strong>
              <div>
                <img
                  alt="How to Create Project"
                  src="/assets/images/create-project-2.2.png"
                />
              </div>
            </li>
            <li>
              Once all set, click on <strong>Submit Answers</strong> button.
            </li>
            <li>
              Once all set, a summary of requirements will be generated for your
              review and approval to build the app.
              <div>
                <img
                  alt="How to Create Project"
                  src="/assets/images/create-project-2.3.png"
                />
              </div>
            </li>
            <li>Think4Ever will analyze the requirements for a few minutes.</li>
          </ol>
          <div className="section-details">
            <h3>Choose how you would like to start.</h3>
            <p>
              Start fresh with a new build or import an existing project to keep
              going.
            </p>
            <div>
              <img
                alt="Dashboard"
                src="/assets/images/dev-doc/26-dev-mode-1.png"
              />
            </div>

            <div className="bento-grid">
              <div className="bento-card">
                <div className="card-body">
                  <h4>Manually choose stacks</h4>
                </div>
                <div className="image-wrapper pb-0">
                  <img
                    alt="Connect Github"
                    src="/assets/images/dev-doc/07-stack-list.png"
                  />
                </div>
              </div>
            </div>
            <h3>Developer Dashboard</h3>
            <p>
              Once you choose 'Developer Mode' it will take you to the developer
              dashboard.
            </p>
            <div>
              <img
                alt=""
                src="/assets/images/dev-doc/06-initial-dashboard.png"
              />
            </div>
            <h3>Write Prompt</h3>
            <p>
              Once the dashboard loads, you are ready to begin writing your
              requirements. You also have the option to upload your
              requirements.
            </p>
            <div className="bento-grid has-margin-top">
              <div className="bento-card">
                <div className="card-body">
                  <div className="image-wrapper pb-0">
                    <img
                      alt="Write Prompt"
                      src="/assets/images/dev-doc/07-prompt-dashboard-2.png"
                    />
                  </div>
                </div>
              </div>
              <div className="bento-card">
                <div className="card-body">
                  <div className="image-wrapper pb-0">
                    <img
                      alt="Write Prompt"
                      src="/assets/images/dev-doc/07-prompt-dashboard-3.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3>Generating Code</h3>
            <p>
              Once you answer all the questions Think4Ever will get an overall
              picture of the project and will start generating the code. You can
              see the code generation in real time. Once the code generation is
              complete The platform will come up with a few suggestions on
              moving forward. In the screenshot the platform asks the end user
              to make a decision based on the options provided.
            </p>
            <div>
              <img
                style={{ maxHeight: "600px" }}
                alt="Generating Code"
                src="/assets/images/dev-doc/25-generating-folder.png"
              />
            </div>
            <div className="image-wrapper pt-0">
              <img
                alt="Generating Code"
                src="/assets/images/dev-doc/10-code-generation.png"
              />
            </div>
            <div className="image-wrapper pt-0">
              <img
                alt="Generating Code"
                src="/assets/images/dev-doc/24-run-application-2.png"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeveloperStartNewProject;
