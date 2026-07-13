import React from "react";

const DeveloperTestingApplication = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Testing the Application</h1>

        <section>
          <p>
            The Platform has the ability to automatically test newly created
            functionality as well as perform regression testing on the entire
            application. The user can also ask the platform to perform specific
            testing on the entire application at any time. The platform will not
            only test the flows but also verify that the data is correctly
            represented in the database for CRUD applications.
          </p>

          <div>
            <img
              alt="Testing"
              src="/assets/images/dev-doc/22-testing-application-2.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeveloperTestingApplication;
