import React from 'react';

const DesignerVersionControl = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="dev_vc.title">
            Version Control
          </h1>
<p className="cd-overview-p" data-i18n="dev_vc.intro">
            The Version Control page is where you manage your project's
            integration with Git-based platforms (e.g., GitHub, GitLab,
            Bitbucket). By connecting a repository, you enable the platform to
            push updates, track changes, and maintain a "Source of Truth" for
            your application's codebase.
          </p>
<img alt="Version Control Dashboard" className="demo-img" src="/assets/images/version-1.png"/>
<div style={{marginTop: '32px'}} className="doc-section">
<h2 style={{border: 'none', fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px'}} className="doc-heading" data-i18n="dev_vc.table_title">
              Version Control Integrations Table
            </h2>
<p className="cd-overview-p" data-i18n="dev_vc.table_intro">
              The main dashboard displays all active repository connections. The
              table includes the following key information:
            </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_vc.table_f1_title">Integration:</strong>
<span data-i18n-html="dev_vc.table_f1_desc">The name of the connection (e.g., <em>Main Repository</em>).
                  A folder icon indicates the specific directory mapping within
                  the repository.</span>
</li>
<li>
<strong data-i18n="dev_vc.table_f2_title">Repository:</strong>
<span data-i18n="dev_vc.table_f2_desc">The full URL path to your remote Git repository (e.g.,
                  https://gitlab.com/.../studytool.git).</span>
</li>
<li>
<strong data-i18n="dev_vc.table_f3_title">Branch:</strong>
<span data-i18n="dev_vc.table_f3_desc">The specific branch currently targeted for synchronization
                  (e.g., main).</span>
</li>
<li>
<strong data-i18n="dev_vc.table_f4_title">Status:</strong>
<span data-i18n-html="dev_vc.table_f4_desc">Indicates the current health of the connection. A
                  <strong>CONNECTED</strong> badge signifies that the platform
                  has successful read/write access.</span>
</li>
<li>
<strong data-i18n="dev_vc.table_f5_title">Last Sync:</strong>
<span data-i18n="dev_vc.table_f5_desc">Displays the timestamp of the most recent data exchange
                  between the platform and your repository.</span>
</li>
</ul>
</div>
<div className="doc-section">
<h2 style={{border: 'none', fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px'}} className="doc-heading" data-i18n="dev_vc.actions_title">
              Management Actions
            </h2>
<p className="cd-overview-p" data-i18n="dev_vc.actions_intro">
              On the right side of each integration row, you will find several
              quick-action icons to manage your repository:
            </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_vc.actions_f1_title">Sync History (Clock Icon):</strong>
<span data-i18n="dev_vc.actions_f1_desc">View a log of previous synchronization events, including
                  commits and updates.</span>
</li>
<li>
<strong data-i18n="dev_vc.actions_f2_title">Push/Pull (Upload/Download Icons):</strong>
<span data-i18n-html="dev_vc.actions_f2_desc">Manually trigger a data transfer. Use
                  <strong>Push</strong> to send platform changes to your Git
                  provider, or <strong>Pull</strong> to update the platform with
                  external changes.</span>
</li>
<li>
<strong data-i18n="dev_vc.actions_f3_title">Edit Integration (Pencil Icon):</strong>
<span data-i18n="dev_vc.actions_f3_desc">Modify the connection settings, such as changing the target
                  branch or updating credentials.</span>
</li>
<li>
<strong data-i18n="dev_vc.actions_f4_title">Delete (Trash Icon):</strong>
<span data-i18n-html="dev_vc.actions_f4_desc">Remove the integration from the project.
                  <em>Note: This will stop synchronization but will not delete
                    the code from your Git provider.</em></span>
</li>
</ul>
</div>
<div className="bp-box">
<h3 style={{fontWeight: '700'}} data-i18n="dev_vc.bp_title">
              Best Practices
            </h3>
<ul style={{marginBottom: '0'}} className="cd-overview-ul">
<li>
<strong data-i18n="dev_vc.bp_1_title">Target Specific Branches:</strong>
<span data-i18n="dev_vc.bp_1_desc">It is highly recommended to use a dedicated development or
                  "staging" branch rather than your primary production branch to
                  safely review generated code before merging.</span>
</li>
<li>
<strong data-i18n="dev_vc.bp_2_title">Check Sync Status:</strong>
<span data-i18n-html="dev_vc.bp_2_desc">Always verify the <strong>Last Sync</strong> time before
                  starting a new design or ideation session to ensure you are
                  working with the most recent version of your project.</span>
</li>
<li>
<strong data-i18n="dev_vc.bp_3_title">Manual Refresh:</strong>
<span data-i18n-html="dev_vc.bp_3_desc">Use the <strong>Refresh</strong> icon in the top-right corner
                  of the panel to update the connection status if you have
                  recently made changes on your Git provider's website.</span>
</li>
</ul>
</div>
</main>
    </div>
  );
};

export default DesignerVersionControl;
