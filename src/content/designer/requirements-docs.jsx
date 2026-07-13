import React from 'react';

const DesignerRequirementsDocs = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" data-i18n="req_docs.title">
            Requirements Docs
          </h1>

<div className="yt-video" data-video-id="M7NvDD-1tDM"></div>
<div className="doc-section">
<p className="cd-overview-p" data-i18n-html="req_docs.intro">
              The <strong>Requirements Documents</strong> dashboard is the
              central repository for your project's formal specifications and
              documentation. This page allows you to manage, review, and
              regenerate key documents that define the project's scope,
              functionality, and technical framework.
            </p>
<img alt="Requirements Documents" className="demo-img" src="/assets/images/req-doc-1.png"/>
<h3 className="cd-sub-heading" data-i18n="req_docs.adt_title">
              Available Document Types
            </h3>
<p className="cd-overview-p" data-i18n-html="req_docs.adt_intro">
              The dashboard organizes documentation into four primary
              categories, each serving a specific role in the project lifecycle:
            </p>
<table className="config-table">
<thead>
<tr>
<th data-i18n="req_docs.t_h1">Document</th>
<th data-i18n="req_docs.t_h2">Purpose</th>
<th data-i18n="req_docs.t_h3">Key Content</th>
</tr>
</thead>
<tbody>
<tr>
<td data-i18n-html="req_docs.t_r1_1">
<strong>Concept Summary</strong>
</td>
<td data-i18n-html="req_docs.t_r1_2">
                    High-level project vision.
                  </td>
<td data-i18n-html="req_docs.t_r1_3">
                    Visual overviews and core value propositions.
                  </td>
</tr>
<tr>
<td data-i18n-html="req_docs.t_r2_1">
<strong>Functional Specification</strong>
</td>
<td data-i18n-html="req_docs.t_r2_2">
                    User-facing behavior.
                  </td>
<td data-i18n-html="req_docs.t_r2_3">
                    Detailed requirements, user stories, and feature logic.
                  </td>
</tr>
<tr>
<td data-i18n-html="req_docs.t_r3_1">
<strong>Technical Specification</strong>
</td>
<td data-i18n-html="req_docs.t_r3_2">
                    Developer-focused roadmap.
                  </td>
<td data-i18n-html="req_docs.t_r3_3">
                    System architecture, API documentation, and implementation
                    details.
                  </td>
</tr>
<tr>
<td data-i18n-html="req_docs.t_r4_1">
<strong>Database Design</strong>
</td>
<td data-i18n-html="req_docs.t_r4_2">
                    Data structure mapping.
                  </td>
<td data-i18n-html="req_docs.t_r4_3">
                    Database schemas, entity relationships (ERD), and tables.
                  </td>
</tr>
</tbody>
</table>
<h3 style={{marginTop: '48px'}} className="cd-sub-heading" data-i18n="req_docs.dsm_title">
              Document Status &amp; Management
            </h3>
<p className="cd-overview-p" data-i18n-html="req_docs.dsm_intro">
              Each document card features real-time status indicators and
              management tools:
            </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="req_docs.dsm_b1_title">Ready Badge:</strong>
<span data-i18n-html="req_docs.dsm_b1_desc">A green "Ready" indicator confirms that the document has been
                  successfully generated and is up to date with the latest
                  project changes.</span>
</li>
<li>
<strong data-i18n="req_docs.dsm_b2_title">Open:</strong>
<span data-i18n-html="req_docs.dsm_b2_desc">Click this button to view the full document in the built-in
                  reader or to download a local copy.</span>
</li>
<li>
<strong data-i18n="req_docs.dsm_b3_title">Rebuild:</strong>
<span data-i18n-html="req_docs.dsm_b3_desc">This action triggers the AI engine to scan your current
                  project data&mdash;including diagrams, tasks, and code&mdash;to regenerate
                  the document, ensuring it remains synchronized with your
                  latest work.</span>
</li>
<li>
<strong data-i18n="req_docs.dsm_b4_title">Refresh (Global):</strong>
<span data-i18n-html="req_docs.dsm_b4_desc">Use the refresh button at the top-right of the page to check
                  for global status updates across all document types.</span>
</li>
</ul>
<h3 style={{marginTop: '32px'}} className="cd-sub-heading" data-i18n="req_docs.kw_title">
              Key Workflow
            </h3>
<ol style={{listStyleType: 'decimal'}} className="cd-overview-ul">
<li>
<strong data-i18n="req_docs.kw_1_title">Generation:</strong>
<span data-i18n-html="req_docs.kw_1_desc">When you first start a project, use
                  <strong>Rebuild</strong> to create your initial specifications
                  from your concept sketches or technical diagrams.</span>
</li>
<li>
<strong data-i18n="req_docs.kw_2_title">Verification:</strong>
<span data-i18n-html="req_docs.kw_2_desc">Check the <strong>Ready</strong> status before sharing
                  documents with stakeholders to ensure they are
                  finalized.</span>
</li>
<li>
<strong data-i18n="req_docs.kw_3_title">Iteration:</strong>
<span data-i18n-html="req_docs.kw_3_desc">If you modify your <strong>Technical Diagrams</strong> or
                  <strong>UI Designs</strong>, return here and click
                  <strong>Rebuild</strong> on the corresponding document to keep
                  your documentation in sync with your designs.</span>
</li>
</ol>
<img alt="Document Status and Workflow" className="demo-img" src="/assets/images/req-doc-2.png"/>
</div>

<div style={{marginTop: '80px', paddingTop: '20px', borderTop: '1px solid #e2e8f0'}} className="doc-section">
<h1 className="cd-page-title" data-i18n="req_docs.dev_title">
              Development
            </h1>
<img style={{maxWidth: '300px'}} alt="Development Sidebar Menu" className="demo-img" src="/assets/images/req-doc-3.png"/>
<p className="cd-overview-p" data-i18n-html="req_docs.dev_intro">
              The <strong>Development</strong> section is the technical engine
              of your project, providing direct access to the backend
              infrastructure, project management tasks, and the actual codebase.
              This section is designed for developers and engineers to manage
              the build and deployment phases of the project lifecycle.
            </p>
<p style={{marginTop: '24px'}} className="cd-overview-p" data-i18n-html="req_docs.dev_sub_intro">
              There are 4 sub-menus:
            </p>
<h3 style={{marginTop: '24px'}} className="cd-sub-heading" data-i18n-html="req_docs.dev_sub1_title">
              1. Tasks
            </h3>
<p className="cd-overview-p" data-i18n-html="req_docs.dev_sub1_desc">
              The project's central action log, containing all developmental
              "To-Dos," bug reports, and feature requests.
            </p>
<h3 style={{marginTop: '24px'}} className="cd-sub-heading" data-i18n-html="req_docs.dev_sub2_title">
              2. Database
            </h3>
<p className="cd-overview-p" data-i18n-html="req_docs.dev_sub2_desc">
              Access to the data layer, including table structures, stored
              procedures, and data migration scripts.
            </p>
<h3 style={{marginTop: '24px'}} className="cd-sub-heading" data-i18n-html="req_docs.dev_sub3_title">
              3. Source Code
            </h3>
<p className="cd-overview-p" data-i18n-html="req_docs.dev_sub3_desc">
              A repository for the application's logic, scripts, and
              front-end/back-end programming files.
            </p>
<h3 style={{marginTop: '24px'}} className="cd-sub-heading" data-i18n-html="req_docs.dev_sub4_title">
              4. Containers
            </h3>
<p className="cd-overview-p" data-i18n-html="req_docs.dev_sub4_desc">
              Infrastructure management for deployment environments (e.g.,
              Docker or Kubernetes configurations).
            </p>
</div>
</main>
    </div>
  );
};

export default DesignerRequirementsDocs;
