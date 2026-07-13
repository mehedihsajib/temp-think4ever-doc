import React from "react";

const DesignerConcept = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Concept</h1>

        <div className="yt-video" data-video-id="o0vO3k-Z3cg"></div>
        <div className="doc-section">
          <p className="cd-overview-p" data-i18n-html="dev_concept.intro">
            This module breaks your requirements down into individual
            <strong>Concept Blocks</strong>. For a project like "Study Tool,"
            concepts might include <em>User Authentication</em>,
            <em>Document Parsing</em>, or <em>Adaptive Algorithm</em>.
          </p>
          <ul>
            <li>
              <strong>Usage:</strong>
              <span data-i18n-html="dev_concept.f1_desc">
                Map out the "big ideas" of your software to ensure all required
                functionality is accounted for.
              </span>
            </li>
          </ul>
          <img
            alt="Concept Blocks Flowchart"
            src="/assets/images/concept-1.png"
          />
          <img
            alt="Concept Blocks Flowchart"
            src="/assets/images/concept-2.png"
          />
        </div>
      </main>
    </div>
  );
};

export default DesignerConcept;
