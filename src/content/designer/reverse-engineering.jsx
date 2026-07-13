import React from 'react';

const DesignerReverseEngineering = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="dev_re.title">
          Reverse Engineering
        </h1>
<div className="doc-section">
<h2 className="doc-heading" data-i18n="dev_re.overview_title">
            Overview
          </h2>
<p className="cd-overview-p" data-i18n-html="dev_re.overview_desc">
            The Reverse Engineer module utilizes AI-powered analysis to
            deconstruct your existing codebase, database schemas, or legacy
            documentation. It transforms raw data into
            <strong>Structured Concepts</strong>, allowing the platform to
            understand your current logic and build upon it without manual
            data entry.
          </p>
<img alt="Reverse Engineering Dashboard" className="demo-img" src="/assets/images/reverse-engineering-1.jpg"/>
<h2 className="doc-heading" data-i18n="dev_re.tasks_title">
            Diffusion Vision Tasks
          </h2>
<p className="cd-overview-p" data-i18n="dev_re.tasks_intro">
            This dashboard manages your reverse engineering workflows.
          </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_re.tasks_f1_title">Task Status:</strong>
<span data-i18n-html="dev_re.tasks_f1_desc">If no analysis has been performed, the screen displays "No
                reverse engineering tasks yet." *
                <strong>Process Flow:</strong> Once a task is initiated, this
                area will track the progress of the AI's analysis, displaying
                task names, timestamps, and completion statuses.</span>
</li>
</ul>
<h2 className="doc-heading" data-i18n="dev_re.features_title">
            Key Features &amp; Functionality
          </h2>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_re.features_f1_title">Codebase Analysis:</strong>
<span data-i18n-html="dev_re.features_f1_desc">Upload or link existing source code to identify data
                structures, API endpoints, and business logic.</span>
</li>
<li>
<strong data-i18n="dev_re.features_f2_title">Schema Mapping:</strong>
<span data-i18n-html="dev_re.features_f2_desc">Ingest database SQL files to automatically generate
                <strong>Data Objects</strong> within the platform.</span>
</li>
<li>
<strong data-i18n="dev_re.features_f3_title">Structured Concept Generation:</strong>
<span data-i18n-html="dev_re.features_f3_desc">The AI converts its findings into high-level concepts that
                populate the Concept, Business Flows, and Data Objects
                sections in the sidebar.</span>
</li>
</ul>
<div className="image-row">
<h2 style={{margin: '0', minWidth: '300px'}} className="doc-heading" data-i18n="dev_re.start_title">
              How to Start Reverse Engineering
            </h2>
<img style={{maxWidth: '250px', boxShadow: 'none', border: 'none', background: 'transparent', padding: '0'}} alt="Start Button" className="demo-img" src="/assets/images/reverse-engineering-2.jpg"/>
</div>
<p className="cd-overview-p" data-i18n="dev_re.start_intro">
            To begin an analysis task:
          </p>
<ol className="cd-overview-ol">
<li>
<span data-i18n="dev_re.start_step1">Click the blue "Start Reverse Engineer" button (found both in
                the center of the screen and the top-right corner).</span>
</li>
<li>
<span data-i18n-html="dev_re.start_step2">Select your <strong>Source Type</strong> (e.g., File Upload,
                Git Repository Link, or Database Connection).</span>
</li>
<li>
<span data-i18n-html="dev_re.start_step3">Configure the <strong>Scope</strong> of the analysis by
                selecting specific folders or tables to include.</span>
</li>
<li>
<span data-i18n-html="dev_re.start_step4">Launch the task and monitor the
                <strong>Diffusion Vision Tasks</strong> list for real-time
                updates.</span>
</li>
</ol>
<h2 className="doc-heading" data-i18n="dev_re.why_title">
            Why Use Reverse Engineering?
          </h2>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_re.why_f1_title">Accelerated Onboarding:</strong>
<span data-i18n="dev_re.why_f1_desc">Quickly bring an existing project or legacy system into the
                platform for modernization.</span>
</li>
<li>
<strong data-i18n="dev_re.why_f2_title">Consistency:</strong>
<span data-i18n-html="dev_re.why_f2_desc">Ensure that new features developed in the
                <strong>Development</strong> section are 100% compatible with
                your existing data structures.</span>
</li>
<li>
<strong data-i18n="dev_re.why_f3_title">Documentation Recovery:</strong>
<span data-i18n-html="dev_re.why_f3_desc">Generate fresh <strong>Requirements Docs</strong> and
                <strong>Technical Diagrams</strong> for projects that
                currently lack them.</span>
</li>
</ul>
</div>

<h1 className="cd-page-title blue-variant" data-i18n="dev_struc.title" id="structure-ideation">
          Structure &amp; Ideation
        </h1>
<div className="doc-section">
<img style={{marginBottom: '24px'}} alt="Structure Menu" className="demo-img" src="/assets/images/reverse-engineering-3.jpg"/>
<p className="cd-overview-p" data-i18n-html="dev_struc.intro_1">
            The <strong>Structure &amp; Ideation</strong> section is the
            architectural heart of the platform. It is here that the
            high-level goals defined in your <strong>Requirements</strong> are
            decomposed into functional, technical, and logical building
            blocks.
          </p>
<p className="cd-overview-p" data-i18n="dev_struc.intro_2">
            This section serves as a bridge, turning "what" the system should
            do into "how" it will actually work.
          </p>
<img alt="Structure and Ideation Dashboard" className="demo-img" src="/assets/images/reverse-engineering-4.jpg"/>
</div>
</main>
    </div>
  );
};

export default DesignerReverseEngineering;
