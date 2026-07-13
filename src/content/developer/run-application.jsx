import React from "react";

const DeveloperRunApplication = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Run the Application</h1>

        <section>
          <p>
            You can give a prompt to run the application. The platform starts
            the services and deploys the application. Then it comes back with a
            series of prompts asking the customer for the next command to
            execute.
          </p>
          <div>
            <img
              alt="Run Application"
              src="/assets/images/dev-doc/23-run-application-1.png"
            />
          </div>
          <div>
            <img
              alt="Run Application"
              src="/assets/images/dev-doc/24-run-application-2.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeveloperRunApplication;
