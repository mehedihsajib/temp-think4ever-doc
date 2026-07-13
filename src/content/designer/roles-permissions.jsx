import React from "react";

const DesignerRolesPermissions = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Roles &amp; Permissions</h1>
        <div className="doc-section">
          <p className="cd-overview-p">
            Security starts here. Define what different user types can see and
            do within the application.
          </p>
          <ul>
            <li>
              <strong>Example:</strong>
              <span>
                An Admin can delete users, while a Student can only view their
                own study materials.
              </span>
            </li>
            <li>
              <strong>Usage:</strong>
              <span>
                Establish the Access Control List (ACL) for your API and
                Frontend.
              </span>
            </li>
          </ul>
          <img
            alt="Roles &amp; Permissions Configuration"
            src="/assets/images/roles-1.png"
          />
        </div>
      </main>
    </div>
  );
};

export default DesignerRolesPermissions;
