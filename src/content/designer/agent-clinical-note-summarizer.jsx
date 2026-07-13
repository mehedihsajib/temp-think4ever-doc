import React from 'react';

const DesignerAgentClinicalNoteSummarizer = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    Clinical Note Summarizer
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            The <strong>Clinical Note Summarizer</strong> transforms unstructured clinical text and
                            narrative dictations into highly organized, standardized clinical summaries in seconds.
                            Operating completely within your secure project boundaries, it streamlines documentation
                            workflows while serving as a reliable clinical decision support layer.
                        </p>
<div className="image-wrapper">
<img alt="Clinical Note Summarizer" className="demo-img" src="/assets/images/think-agent/clinical-note-summarizer-1.png"/>
</div>
<div className="para-box">
<h3 className="h3">
                                Key Features
                            </h3>
<ul className="cd-overview-ul">
<li>
<strong>
                                        Local Architecture (Zero Data Leakage):
                                    </strong>
<span>
                                        Runs entirely inside your local project ecosystem. Protected Health Information
                                        (PHI) stays put within your secure environment and is never transmitted to
                                        external servers.
                                    </span>
</li>
<li>
<strong>
                                        Automated Clinical Extraction:
                                    </strong>
<span>
                                        Systematically analyzes unstructured medical text to isolate and extract three
                                        core clinical pillars: active Problems, current or changed Medications, and
                                        required Follow-up actions.
                                    </span>
</li>
<li>
<strong>
                                        Clinical Decision Support Framework:
                                    </strong>
<span>
                                        Configured strictly as an assistive tool for healthcare professionals. The
                                        system provides clear data parsing for review, requiring manual verification
                                        against the source note before final validation.
                                    </span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">
                                Process Workflow
                            </h3>
<ol className="cd-overview-ol">
<li>
<strong>Input Narrative Note:</strong> Paste or ingest the raw, unstructured
                                    clinical narrative or dictation text into the summarizer interface.
                                    <div className="image-wrapper">
<img alt="Clinical Note Summarizer" className="demo-img" src="/assets/images/think-agent/clinical-note-summarizer-2.png"/>
</div>
</li>
<li>
<strong>Execute Local Parse:</strong> Run the secure, in-project extraction engine
                                    to process the narrative text without moving PHI outside your network.
                                </li>
<li>
<strong>Review Extracted Elements:</strong> Evaluate the structured breakdown of
                                    isolated problems, medications, and clinical next steps.
                                </li>
<li>
<strong>Verify &amp; Validate:</strong> Cross-reference the system-generated summaries
                                    against the source documentation to confirm clinical accuracy before committing
                                    changes.
                                    <div className="image-wrapper">
<img alt="Clinical Note Summarizer" className="demo-img" src="/assets/images/think-agent/clinical-note-summarizer-3.png"/>
</div>
</li>
</ol>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentClinicalNoteSummarizer;
