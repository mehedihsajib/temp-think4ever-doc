import React from 'react';

const DeveloperTestingApplication = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">
          Testing the Application
        </h1>

<section className="cd-overview" id="cdHomeOverview">
<p className="cd-overview-text">
            The Platform has the ability to automatically test newly created
            functionality as well as perform regression testing on the entire
            application. The user can also ask the platform to perform
            specific testing on the entire application at any time. The
            platform will not only test the flows but also verify that the
            data is correctly represented in the database for CRUD
            applications.
          </p>

<div className="image-wrapper">
<img alt="Testing" className="demo-img" src="/assets/images/dev-doc/22-testing-application-2.png"/>
</div>
</section>
</main>
    </div>
  );
};

export default DeveloperTestingApplication;
