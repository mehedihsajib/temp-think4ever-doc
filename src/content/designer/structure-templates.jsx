import React from "react";

const DesignerStructureTemplates = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Structure Templates</h1>

        <section>
          <p>
            The Structure Templates or also called Solution Designs Library is a
            centralized repository of pre-built solution templates that helps
            users quickly discover and evaluate software solution concepts
            across various industries and business domains.
          </p>

          <div className="yt-video" data-video-id="CQpIODqNFek"></div>
          <ul>
            <li>Search solution designs using keywords.</li>
            <li>Browse solutions by industry categories.</li>
            <li>
              Filter results using functional tags such as Marketplace, SaaS,
              Booking, Analytics, Mobile-first, and Workflow.
            </li>
            <li>
              View solution summaries, key features, and associated
              capabilities.
            </li>
            <li>
              Explore detailed solution designs to support product planning,
              business analysis, and solution architecture.
            </li>
          </ul>
          <p>
            The library enables teams to accelerate solution discovery,
            standardize design approaches, and reuse proven business and
            technical patterns when planning new applications or digital
            products.
          </p>
          <img alt="Structure Templates" src="/assets/images/templates-1.png" />
          <h3>Template Selection and Configuration</h3>
          <p>
            After selecting a solution design template from the Solution Designs
            Library, the system displays a list of available subcategories,
            including application modules, pages, features, and business flows
            associated with the selected template.
          </p>
          <ul>
            <li>
              Review the available components included in the solution design.
            </li>
            <li>
              Select or deselect specific modules based on project requirements.
            </li>
            <li>Customize the scope of the solution before importing.</li>
            <li>
              View related business processes and workflows supported by the
              selected template.
            </li>
          </ul>
          <p>
            Once the desired subcategories are selected, click Import Solution
            Design to add the chosen components to your project.
          </p>
          <img
            alt="Data Objects Schema Visualizer"
            src="/assets/images/templates-2.png"
          />
        </section>
      </main>
    </div>
  );
};

export default DesignerStructureTemplates;
