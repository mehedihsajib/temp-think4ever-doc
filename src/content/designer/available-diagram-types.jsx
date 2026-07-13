import React from 'react';

const DesignerAvailableDiagramTypes = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="avail_diag.title">
            Available Diagram Types
          </h1>
<div className="doc-section">
<p className="cd-overview-p" data-i18n-html="avail_diag.intro">
              The dashboard is divided into several specialized categories to
              cover the full development lifecycle:
            </p>
<table className="config-table">
<thead>
<tr>
<th data-i18n="avail_diag.table_h1">Category</th>
<th data-i18n="avail_diag.table_h2">
                    Specific Diagrams Included
                  </th>
</tr>
</thead>
<tbody>
<tr>
<td data-i18n-html="avail_diag.t_c1_1">
<strong>System Architecture</strong>
</td>
<td data-i18n-html="avail_diag.t_c1_2">
                    Technology Stack, Security Architecture, Infrastructure,
                    Deployment, High-Level System Architecture.
                  </td>
</tr>
<tr>
<td data-i18n-html="avail_diag.t_c2_1">
<strong>Data &amp; Logic</strong>
</td>
<td data-i18n-html="avail_diag.t_c2_2">
                    Entity Relationship Diagram (ERD), Database Schema, Data
                    Flow Diagram (DFD).
                  </td>
</tr>
<tr>
<td data-i18n-html="avail_diag.t_c3_1">
<strong>Process &amp; Flow</strong>
</td>
<td data-i18n-html="avail_diag.t_c3_2">
                    Sequence Diagram, Process Flow / Business Flow, Use Case
                    Diagram, User Flow Diagram.
                  </td>
</tr>
<tr>
<td data-i18n-html="avail_diag.t_c4_1">
<strong>Structural Design</strong>
</td>
<td data-i18n-html="avail_diag.t_c4_2">
                    API Architecture, Component Diagram.
                  </td>
</tr>
</tbody>
</table>
<h3 className="cd-sub-heading" data-i18n="avail_diag.kac_title">
              Key Action Commands
            </h3>
<p className="cd-overview-p" data-i18n-html="avail_diag.kac_intro">
              Located at the top-right of the dashboard, these controls allow
              for active project management:
            </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="avail_diag.k1_title">Build Architecture Diagrams:</strong>
<span data-i18n-html="avail_diag.k1_desc">Launches the automated builder tool to generate diagrams
                  based on existing system data or code structures.</span>
</li>
<li>
<strong data-i18n="avail_diag.k2_title">Add Diagram:</strong>
<span data-i18n-html="avail_diag.k2_desc">Opens a manual upload or creation interface to introduce a
                  new visualization to the project.</span>
</li>
</ul>
<img alt="Key Action Commands" className="demo-img" src="/assets/images/diagram-1.png"/>

<div style={{marginTop: '64px'}}>
<h3 className="cd-sub-heading-orange" data-i18n="avail_diag.ad_title">
                Add Diagram
              </h3>
<p className="cd-overview-p" data-i18n-html="avail_diag.ad_intro">
                This button is for
                <strong>manual entry and custom creation</strong>.
              </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="avail_diag.ad_hw_title">How it works:</strong>
<span data-i18n-html="avail_diag.ad_hw_desc">It opens a template gallery or a blank canvas where you can
                    choose a specific diagram type (e.g., Sequence Diagram, ERD,
                    or Flowchart).</span>
</li>
<li>
<strong data-i18n="avail_diag.ad_res_title">Result:</strong>
<span data-i18n-html="avail_diag.ad_res_desc">You manually define the logic, shapes, and connections. It
                    can also be used to upload an existing image file (like a
                    PNG or PDF) from your local drive.</span>
</li>
<li>
<strong data-i18n="avail_diag.ad_best_title">Best for:</strong>
<span data-i18n-html="avail_diag.ad_best_desc">Conceptualizing new ideas, documenting specific business
                    rules, or adding external reference diagrams that aren't
                    derived from the project's code.</span>
</li>
</ul>
<img alt="Add Diagram Details" className="demo-img" src="/assets/images/diagram-2.png"/>
<img alt="Build Architecture Diagrams Details" className="demo-img" src="/assets/images/diagram-3.png"/>
</div>

<div style={{marginTop: '64px'}}>
<h3 className="cd-sub-heading-orange" data-i18n="avail_diag.bad_title">
                Build Architecture Diagrams
              </h3>
<p className="cd-overview-p" data-i18n-html="avail_diag.bad_intro">
                This button triggers an
                <strong>automated generation process</strong>.
              </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="avail_diag.bad_hw_title">How it works:</strong>
<span data-i18n-html="avail_diag.bad_hw_desc">It uses the platform's AI or system analysis tools to scan
                    your existing project data, codebases, or infrastructure
                    configurations.</span>
</li>
<li>
<strong data-i18n="avail_diag.bad_res_title">Result:</strong>
<span data-i18n-html="avail_diag.bad_res_desc">It automatically creates a "High-Level System Architecture"
                    or "Technology Stack" diagram based on actual project
                    facts.</span>
</li>
<li>
<strong data-i18n="avail_diag.bad_best_title">Best for:</strong>
<span data-i18n-html="avail_diag.bad_best_desc">Rapidly documenting complex systems without drawing every
                    line manually, or keeping diagrams in sync with real-time
                    code changes.</span>
</li>
</ul>
<img alt="Interactive Diagram Viewer" className="demo-img" src="/assets/images/diagram-4.png"/>
<img alt="Toolbar Features" className="demo-img" src="/assets/images/diagram-5.jpg"/>
</div>

<div style={{marginTop: '64px'}}>
<h3 className="cd-sub-heading-orange" data-i18n="avail_diag.idv_title">
                Interactive Diagram Viewer
              </h3>
<p className="cd-overview-p" data-i18n-html="avail_diag.idv_intro">
                The <strong>Interactive Viewer</strong> allows you to transition
                from a high-level overview of your project's architecture to a
                detailed, editable workspace for any specific technical diagram.
              </p>
<h3 style={{fontSize: '1.05rem', marginTop: '24px'}} className="cd-sub-heading" data-i18n="avail_diag.nw_title">
                Navigation Workflow
              </h3>
<ol style={{listStyleType: 'decimal'}} className="cd-overview-ul">
<li>
<strong data-i18n="avail_diag.nw_s1_title">Select:</strong>
<span data-i18n-html="avail_diag.nw_s1_desc">From the <strong>Technical Diagrams</strong> dashboard,
                    click on any of the active diagram cards (e.g.,
                    <strong>Data Flow Diagram [DFD]</strong>).</span>
</li>
<li>
<strong data-i18n="avail_diag.nw_s2_title">Open:</strong>
<span data-i18n-html="avail_diag.nw_s2_desc">The system launches a dedicated canvas overlay, centered on
                    that specific data model or workflow.</span>
</li>
<li>
<strong data-i18n="avail_diag.nw_s3_title">Explore:</strong>
<span data-i18n-html="avail_diag.nw_s3_desc">Use the sidebar on the left to quickly jump between
                    different diagram types within the same session without
                    returning to the main dashboard.</span>
</li>
</ol>
<h3 style={{fontSize: '1.05rem', marginTop: '48px'}} className="cd-sub-heading" data-i18n="avail_diag.wc_title">
                Workspace Components
              </h3>
<table className="config-table">
<thead>
<tr>
<th data-i18n="avail_diag.wc_t1">Area</th>
<th data-i18n="avail_diag.wc_t2">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td data-i18n-html="avail_diag.wc_r1_1">
<strong>Element Toolbar</strong>
</td>
<td data-i18n-html="avail_diag.wc_r1_2">
                      Located at the top, this bar provides drag-and-drop
                      components specific to the diagram type, such as
                      <strong>Start, Process, Decision, Database</strong>, and
                      <strong>API</strong> nodes.
                    </td>
</tr>
<tr>
<td data-i18n-html="avail_diag.wc_r2_1">
<strong>Logic Canvas</strong>
</td>
<td data-i18n-html="avail_diag.wc_r2_2">
                      The primary area where the workflow is visualized. It
                      supports complex branching, layered layouts, and
                      multi-node connections.
                    </td>
</tr>
<tr>
<td data-i18n-html="avail_diag.wc_r3_1">
<strong>Editor Sidebar</strong>
</td>
<td data-i18n-html="avail_diag.wc_r3_2">
                      Lists all available diagram categories for the current
                      project. Numerical indicators show how many iterations or
                      sub-diagrams exist for each type (e.g.,
                      <strong>High-Level System Architecture: 42</strong>).
                    </td>
</tr>
<tr>
<td data-i18n-html="avail_diag.wc_r4_1">
<strong>Action Suite</strong>
</td>
<td data-i18n-html="avail_diag.wc_r4_2">
                      A specialized set of buttons for canvas management,
                      including
                      <strong>Auto Layout, Voice Assistant, Clear All</strong>,
                      and zoom controls (<strong>100%, Fit</strong>).
                    </td>
</tr>
</tbody>
</table>
<img alt="Toolbar Features" className="demo-img" src="/assets/images/diagram-6.png"/>
<img alt="Toolbar Features" className="demo-img" src="/assets/images/diagram-7.png"/>
<h3 style={{fontSize: '1.05rem', marginTop: '40px'}} className="cd-sub-heading" data-i18n="avail_diag.kf_title">
                Key Features
              </h3>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="avail_diag.kf_ce_title">Contextual Elements:</strong>
<span data-i18n-html="avail_diag.kf_ce_desc">The toolbar automatically updates based on the diagram type
                    selected, ensuring you use the correct notation (e.g.,
                    diamonds for Decisions in a DFD).</span>
</li>
<li>
<strong data-i18n="avail_diag.kf_lm_title">Layout Management:</strong>
<span data-i18n-html="avail_diag.kf_lm_desc">Use the <strong>Layered Layout</strong> and
                    <strong>Direction</strong> (Top to Bottom) dropdowns to
                    instantly reorganize complex "spaghetti" diagrams into
                    clean, readable structures.</span>
</li>
<li>
<strong data-i18n="avail_diag.kf_ce2_title">Collaboration &amp; Export:</strong>
<span data-i18n-html="avail_diag.kf_ce2_desc">Once your diagram is finalized, use the
                    <strong>Export</strong> button to download the visualization
                    for external documentation or presentations.</span>
</li>
</ul>
<p style={{marginTop: '24px', fontWeight: '500', fontStyle: 'italic'}} className="cd-overview-p" data-i18n-html="avail_diag.idv_tip">
<strong>Tip:</strong> Enable the
                <strong>AI Assistant</strong> to make rapid changes to your
                diagrams using natural language commands, similar to the Modify
                Page tool.
              </p>

<h3 style={{fontSize: '1.05rem', marginTop: '48px'}} className="cd-sub-heading-orange" data-i18n="avail_diag.tb_title">
                Toolbar
              </h3>
<img alt="Toolbar Features" className="demo-img" src="/assets/images/diagram-8.png"/>
<p className="cd-overview-p" data-i18n-html="avail_diag.tb_intro">
                The top toolbar in the Diagram Editor is divided into three
                functional zones:
                <strong>Node Creation, Layout Management, and Canvas
                  Utilities.</strong>
                These tools allow you to build and organize complex data flows
                with precision.
              </p>
<h3 style={{fontSize: '1.05rem', marginTop: '24px'}} className="cd-sub-heading" data-i18n="avail_diag.nct_title">
                Node Creation Tools
              </h3>
<p className="cd-overview-p" data-i18n-html="avail_diag.nct_intro">
                These buttons add specific logic elements to your canvas. Each
                follows standard technical diagramming notation:
              </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="avail_diag.nct1_title">+ Start:</strong>
<span data-i18n-html="avail_diag.nct1_desc">Inserts a terminal node representing the beginning of a
                    process or entry point.</span>
</li>
<li>
<strong data-i18n="avail_diag.nct2_title">+ Process:</strong>
<span data-i18n-html="avail_diag.nct2_desc">Adds a rectangular node to represent a specific action,
                    computation, or system task.</span>
</li>
<li>
<strong data-i18n="avail_diag.nct3_title">+ Decision:</strong>
<span data-i18n-html="avail_diag.nct3_desc">Inserts a diamond-shaped node used for branching logic and
                    "If/Then" scenarios.</span>
</li>
<li>
<strong data-i18n="avail_diag.nct4_title">+ Database:</strong>
<span data-i18n-html="avail_diag.nct4_desc">Adds a cylinder-shaped node representing data storage,
                    tables, or repositories.</span>
</li>
<li>
<strong data-i18n="avail_diag.nct5_title">+ API:</strong>
<span data-i18n-html="avail_diag.nct5_desc">Inserts a node specifically for external service
                    integrations or interface endpoints.</span>
</li>
<li>
<strong data-i18n="avail_diag.nct6_title">+ End:</strong>
<span data-i18n-html="avail_diag.nct6_desc">Represents the exit point or completion of a specific
                    workflow.</span>
</li>
</ul>
<h3 style={{fontSize: '1.05rem', marginTop: '24px'}} className="cd-sub-heading" data-i18n="avail_diag.ldc_title">
                Layout &amp; Direction Controls
              </h3>
<p className="cd-overview-p" data-i18n-html="avail_diag.ldc_intro">
                Use these dropdowns to define the global visual structure of
                your diagram:
              </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="avail_diag.ldc1_title">Layered Layout (Dropdown):</strong>
<span data-i18n-html="avail_diag.ldc1_desc">Choose between different algorithmic styles, such as
                    "Layered," "Tree," or "Organic," to best fit your data's
                    structure.</span>
</li>
<li>
<strong data-i18n="avail_diag.ldc2_title">Direction (Dropdown):</strong>
<span data-i18n-html="avail_diag.ldc2_desc">Sets the flow orientation (e.g., Top to Bottom, Left to
                    Right) to ensure logical readability.</span>
</li>
</ul>
<h3 style={{fontSize: '1.05rem', marginTop: '24px'}} className="cd-sub-heading" data-i18n="avail_diag.cus_title">
                Canvas Utility Suite
              </h3>
<p className="cd-overview-p" data-i18n-html="avail_diag.cus_intro">
                These buttons provide advanced management and accessibility
                features:
              </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="avail_diag.cus1_title">Auto Layout:</strong>
<span data-i18n-html="avail_diag.cus1_desc">Instantly snaps all nodes and connectors into an organized
                    grid based on your selected direction and layout
                    style.</span>
</li>
<li>
<strong data-i18n="avail_diag.cus2_title">Show Grid:</strong>
<span data-i18n-html="avail_diag.cus2_desc">Toggles a background grid to assist with manual alignment
                    and spacing.</span>
</li>
<li>
<strong data-i18n="avail_diag.cus3_title">Sidekick / Voice Assistant:</strong>
<span data-i18n-html="avail_diag.cus3_desc">Activates AI-driven support, allowing you to modify the
                    diagram or add elements using natural language
                    commands.</span>
</li>
<li>
<strong data-i18n="avail_diag.cus4_title">Clear All:</strong>
<span data-i18n-html="avail_diag.cus4_desc">Wipes the entire canvas to start a new design from
                    scratch.</span>
</li>
</ul>
<h3 style={{fontSize: '1.05rem', marginTop: '24px'}} className="cd-sub-heading" data-i18n="avail_diag.ne_title">
                Navigation &amp; Export
              </h3>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="avail_diag.ne1_title">Zoom Controls (+ / 100% / - / Fit):</strong>
<span data-i18n-html="avail_diag.ne1_desc">Adjust your view of the canvas.
                    <strong>Fit</strong> automatically scales the diagram to
                    fill the visible screen area.</span>
</li>
<li>
<strong data-i18n="avail_diag.ne2_title">Export:</strong>
<span data-i18n-html="avail_diag.ne2_desc">Saves the current visualization as a high-resolution image
                    (PNG/SVG) or a document (PDF) for external use.</span>
</li>
</ul>
</div>
</div>
</main>
    </div>
  );
};

export default DesignerAvailableDiagramTypes;
