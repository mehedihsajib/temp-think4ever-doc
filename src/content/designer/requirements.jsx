import React from "react";

const DesignerRequirements = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Requirements</h1>

        <div className="yt-video" data-video-id="kqRaUoV8K-E"></div>
        <h3 className="cd-sub-heading" id="navigation-structure">
          Structure &amp; Ideation
        </h3>
        <img
          style={{ maxWidth: "300px" }}
          alt="structure"
          src="/assets/images/structure-and-ideation.png"
        />
        <p className="cd-overview-p">
          The <strong>Structure &amp; Ideation</strong> section is the
          architectural heart of the platform. It is here that the high-level
          goals defined in your <strong>Requirements</strong> are decomposed
          into functional, technical, and logical building blocks.
        </p>
        <div className="doc-section">
          <img
            alt="structure"
            src="/assets/images/structure-and-ideation-2.png"
          />
          <p className="cd-overview-p">
            This section serves as a bridge, turning "what" the system should do
            into "how" it will actually work.
          </p>
          <h3 className="cd-sub-heading" id="navigation-structure">
            Structure &amp; Ideation has the following submenus:
          </h3>
          <p className="cd-overview-p">
            <strong>Requirements</strong>
          </p>
          <p className="cd-overview-p">
            As the entry point for this category, this page stores the core
            vision of your project. It acts as the "Source of Truth." Every
            other item in this menu is derived from the text provided here.
          </p>
          <ul>
            <li>
              <strong>Usage:</strong>
              <span>
                Define your MVP (Minimum Viable Product) features and user
                roles.
              </span>
            </li>
          </ul>

          <p className="cd-overview-p">
            In this section, you can modify or add new requirements. Once all
            good, click on <strong>Save Requirements</strong> button.
          </p>
          <img
            alt="structure"
            src="/assets/images/structure-and-ideation-4.png"
          />
        </div>
      </main>
    </div>
  );
};

export default DesignerRequirements;
