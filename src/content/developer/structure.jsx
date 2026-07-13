import React from "react";

const DeveloperStructure = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Structure</h1>

        <section>
          <p>
            "View Canvas" button will provide a complete structure map of the
            application and provides a high level view of the application.
            Selecting this button will create/show the structure map and is the
            brains behind the Application. End user will get a visual
            understanding of their application.
          </p>
          <div className="bento-grid">
            <div className="bento-card">
              <div className="card-body">
                <h4>Dashboard</h4>
              </div>
              <div>
                <img
                  alt="Goto Structure"
                  src="/assets/images/dev-doc/13-goto-structure.png"
                />
              </div>
            </div>
            <div className="bento-card">
              <div className="card-body">
                <h4>Analyze Structure</h4>
              </div>
              <div className="image-wrapper pb-0">
                <img
                  alt="Analyze Structure"
                  src="/assets/images/dev-doc/12-structure-analyze.png"
                />
              </div>
            </div>
          </div>
          <p>
            <b>Sync to Project Concept:</b>This is a very important
            functionality. When the end user want to switch from developer to
            design mode and vice versa, the Project has to be synced so that the
            design is in sync across the platform. THIS STEP SHOULD NOT BE
            MISSED.
          </p>
          <div className="bento-grid">
            <div className="bento-card">
              <div className="card-body">
                <h4>Structure Map</h4>
              </div>
              <div className="image-wrapper pb-0">
                <img
                  alt="Goto Structure"
                  src="/assets/images/dev-doc/12-structure-tree.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeveloperStructure;
