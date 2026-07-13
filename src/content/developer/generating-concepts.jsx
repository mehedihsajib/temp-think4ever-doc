import React from 'react';

const DeveloperGeneratingConcepts = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">
          Generating Concepts and Designs from Source Code
        </h1>

<section className="cd-overview" id="cdHomeOverview">
<p className="cd-overview-text">
            Projects created or imported in Developer Mode may contain
            existing source code. When switching to Designer Mode, either from
            the project workspace or the project list, the system
            automatically checks whether concepts and design artifacts have
            already been generated from the available source code.
          </p>
<p style={{margin: '20px 0'}}>
            If no concepts or design artifacts exist, a confirmation prompt is
            displayed. After confirmation, the system analyzes the source code
            and automatically generates the project's concepts, design
            artifacts, workflows, and related documentation.
          </p>
<p>
            Upon completion, the project opens in Designer Mode, allowing
            users to immediately review and work with the generated concepts,
            designs, and associated artifacts.
          </p>
<div className="image-wrapper">
<img alt="Concept Generation" className="demo-img" src="/assets/images/dev-doc/30-concept-1.png"/>
</div>
<div className="image-wrapper">
<img alt="Concept Generation" className="demo-img" src="/assets/images/dev-doc/30-concept-2.png"/>
</div>
</section>
</main>
    </div>
  );
};

export default DeveloperGeneratingConcepts;
