import React from "react";

const OnboardingCreateProject = () => {
  return (
    <div className="doc-page-content">
      <div>
        <div className="content-header">
          <h2 className="main-title">Create your first project</h2>
          <p className="main-description">
            Add a project to organize your work, tasks, and team resources
            efficiently.
          </p>
        </div>
        <div className="bento-grid">
          <section className="bento-card">
            <div className="card-body">
              <div className="card-badge">Step 01</div>
              <h3 className="card-title">Go to workspace</h3>
              <p className="card-text">
                From your dashboard click on 'Enter Workspace'
              </p>
            </div>
            <div>
              <img
                alt=""
                src="/assets/images/customer-onboard/07-enter-workspace.png"
              />
            </div>
          </section>
          <section className="bento-card">
            <div className="card-body">
              <div className="card-badge">Step 02</div>
              <h3 className="card-title">Create new project</h3>
              <p className="card-text">
                From top right corner click on 'Create a new project'
              </p>
            </div>
            <div>
              <img
                alt=""
                src="/assets/images/customer-onboard/9.1-create-project.png"
              />
            </div>
          </section>
          <section className="bento-card">
            <div className="card-body">
              <div className="card-badge">Step 03</div>
              <h3 className="card-title">Project details</h3>
              <p className="card-text">
                Fill up the required information to create a new project.
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <img alt="" src="/assets/images/create-project-1.png" />
              <img alt="" src="/assets/images/create-project-2.1.png" />
              <img alt="" src="/assets/images/create-project-2.2.png" />
              <img alt="" src="/assets/images/create-project-2.3.png" />
            </div>
          </section>
          <section className="bento-card">
            <div className="card-body">
              <div className="card-badge">Step 04</div>
              <h3 className="card-title">Choose Project Mode</h3>
              <p className="card-text">
                You can choose between Design/Architect or Developer Mode
              </p>
            </div>
            <div>
              <img
                alt=""
                src="/assets/images/customer-onboard/10-project-mode.png"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCreateProject;
