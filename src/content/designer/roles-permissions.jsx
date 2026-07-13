import React from 'react';

const DesignerRolesPermissions = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="dev_roles.title">
            Roles &amp; Permissions
          </h1>
<div className="doc-section">
<p className="cd-overview-p" data-i18n="dev_roles.intro">
              Security starts here. Define what different user types can see and
              do within the application.
            </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_roles.f1_title">Example:</strong>
<span data-i18n="dev_roles.f1_desc">An Admin can delete users, while a Student can only view
                  their own study materials.</span>
</li>
<li>
<strong data-i18n="dev_roles.f2_title">Usage:</strong>
<span data-i18n="dev_roles.f2_desc">Establish the Access Control List (ACL) for your API and
                  Frontend.</span>
</li>
</ul>
<img alt="Roles &amp; Permissions Configuration" className="demo-img" src="/assets/images/roles-1.png"/>
</div>
</main>
    </div>
  );
};

export default DesignerRolesPermissions;
