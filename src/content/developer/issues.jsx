import React from "react";

const DeveloperIssues = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Issues</h1>

        <section>
          <p>
            By clicking 'Issues' button you can open the issue popup from where
            you can create and track issues.
          </p>
          <div>
            <img
              alt="Goto Issue"
              src="/assets/images/dev-doc/14-goto-issue.png"
            />
          </div>
          <p>
            From this issue tab you can create new issues or track existing
            issues. How many open issues are there in total, how many are closed
            and total issues are displayed in the header.
          </p>
          <div>
            <img alt="Issues" src="/assets/images/dev-doc/15-issue-list.png" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeveloperIssues;
