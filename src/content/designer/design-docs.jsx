import React from 'react';

const DesignerDesignDocs = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="dev_dd.title">
          Design and Docs
        </h1>
<div className="doc-section">
<img alt="Design and Docs Sidebar Menu" className="demo-img" src="/assets/images/design-and-docs.jpg"/>
<p className="cd-overview-p" data-i18n-html="dev_dd.intro_1">
<strong>Design &amp; Docs</strong>, serves as a centralized hub for
            managing project-related visual and technical documentation. It
            provides a quick overview of the assets currently associated with
            your project.
          </p>
<p style={{fontWeight: '700', color: '#0f172a'}} className="cd-overview-p" data-i18n="dev_dd.intro_2">
            It has 3 submenus:
          </p>
<h3 className="cd-sub-heading" data-i18n="dev_dd.sub1_title">
            UI Designs
          </h3>
<p className="cd-overview-p" data-i18n="dev_dd.sub1_desc">
            This submenu is your primary workspace for all
            <strong>visual assets</strong> related to the user interface. It
            is currently highlighted, indicating it is the active view.
          </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_dd.purpose">Purpose:</strong>
<span data-i18n="dev_dd.sub1_p">Stores high-fidelity mockups, wireframes, and interactive
                prototypes.</span>
</li>
<li>
<strong data-i18n="dev_dd.count">Current Count:</strong>
<span data-i18n-html="dev_dd.sub1_c"><strong>30</strong> items.</span>
</li>
<li>
<strong data-i18n="dev_dd.best_for">Best For:</strong>
<span data-i18n="dev_dd.sub1_b">Reviewing screen layouts, branding elements, and user flow
                animations.</span>
</li>
</ul>
<h3 className="cd-sub-heading" data-i18n="dev_dd.sub2_title">
            Technical Diagrams
          </h3>
<p className="cd-overview-p" data-i18n-html="dev_dd.sub2_desc">
            This submenu organizes the
            <strong>structural and logic-based</strong> visualizations of the
            project.
          </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_dd.purpose">Purpose:</strong>
<span data-i18n="dev_dd.sub2_p">Houses system architecture maps, flowcharts,
                entity-relationship diagrams (ERDs), and sequence
                diagrams.</span>
</li>
<li>
<strong data-i18n="dev_dd.count">Current Count:</strong>
<span data-i18n-html="dev_dd.sub2_c"><strong>14</strong> items.</span>
</li>
<li>
<strong data-i18n="dev_dd.best_for">Best For:</strong>
<span data-i18n="dev_dd.sub2_b">Understanding the underlying technical framework and how data
                moves through the system.</span>
</li>
</ul>
<h3 className="cd-sub-heading" data-i18n="dev_dd.sub3_title">
            Requirements Docs
          </h3>
<p className="cd-overview-p" data-i18n-html="dev_dd.sub3_desc">
            This submenu acts as the repository for
            <strong>formal project documentation</strong> and written
            specifications.
          </p>
</div>
</main>
    </div>
  );
};

export default DesignerDesignDocs;
