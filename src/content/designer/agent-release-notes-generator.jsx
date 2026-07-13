import React from 'react';

const DesignerAgentReleaseNotesGenerator = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    Release Notes Generator
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            The <strong>Release Notes Generator</strong> agent converts raw commit histories and merged
                            pull request metadata into deployment-ready product release documentation.
                        </p>
<div className="image-wrapper">
<img alt="Release Notes Generator" className="demo-img" src="/assets/images/think-agent/release-notes-1.png"/>
</div>
<div className="para-box">
<h3 className="h3">
                                Core Mechanics
                            </h3>
<ul className="cd-overview-ul">
<li>
<strong>
                                        Change-Log Parsing:
                                    </strong>
<span>
                                        Indexes unstructured raw text inputs, developer commit logs, or pull request
                                        titles directly from the workspace clipboard.
                                    </span>
</li>
<li>
<strong>
                                        Automated Categorization:
                                    </strong>
<span>
                                        Classifies and segments engineering changes into structured public-facing
                                        buckets: Features, Improvements, and Fixes.
                                    </span>
</li>
<li>
<strong>
                                        Breaking Change Highlights:
                                    </strong>
<span>
                                        Scans log contexts to explicitly isolate and call out architectural breaking
                                        changes or backwards-incompatibility risks.
                                    </span>
</li>
<li>
<strong>
                                        Dual-Audience Reporting:
                                    </strong>
<span>
                                        Compiles a dual-view documentation pack featuring polished public release notes
                                        alongside a transparent, candid summary for internal team alignment.
                                    </span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">
                                Step by Step Guide
                            </h3>
<h4 style={{marginTop: '20px'}} className="h4">
                                Step 1: Input Your Engineering Logs
                            </h4>
<p>
                                Paste your raw development logs, recent commit histories, or merged pull request titles
                                directly into the input text interface.
                            </p>
<div className="image-wrapper">
<img alt="Release Notes Generator" className="demo-img" src="/assets/images/think-agent/release-notes-2.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">
                                Step 2: Set the Classification Parameters
                            </h4>
<p>
                                Verify the log boundaries. The generator prepares its internal classification maps to
                                parse engineering shorthand into consumer-friendly language.
                            </p>
</div>
<div className="para-box">
<h4 className="h4">
                                Step 3: Run the Note Synthesis
                            </h4>
<p>
                                Initiate the compiler to process the text. The engine runs through the changes, groups
                                them by project impact, and extracts potential deployment side-effects or breaking
                                updates.
                            </p>
<div className="image-wrapper">
<img alt="Release Notes Generator" className="demo-img" src="/assets/images/think-agent/release-notes-3.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">
                                Step 4: Distribute the Generated Outputs
                            </h4>
<p>
                                Review the compiled documentation outputs for your two target audiences:
                            </p>
<ul style={{marginTop: '10px', marginBottom: '20px'}} className="cd-overview-ul">
<li>
<strong>Public Notes:</strong> Ship these clean, polished summaries directly to your
                                    customer changelog or platform announcement page.
                                </li>
<li>
<strong>Internal Summary:</strong> Share this candid summary with your product, QA,
                                    and support teams to brief them on underlying technical refactors and deployment
                                    nuances.
                                </li>
</ul>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentReleaseNotesGenerator;
