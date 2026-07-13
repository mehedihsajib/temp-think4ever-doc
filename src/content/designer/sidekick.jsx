import React from 'react';

const DesignerSidekick = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">
                    Sidekick
                </h1>

<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            Sidekick is your multi-talented, interactive AI chat agent embedded directly within the
                            workspace. Designed to act as a
                            centralized co-pilot, Sidekick helps you build architectures, refine requirements, process
                            context files, and seamlessly
                            bridge external development tools into your platform workflow.
                        </p>
<div className="image-wrapper">
<img alt="Sidekick" className="demo-img" src="/assets/images/sidekick/sidekick-1.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">
                            Accessing Sidekick
                        </h4>
<p>
                            The Sidekick interface appears as a modal overlay within your active project workspace. You
                            can initiate an interaction
                            by selecting any of the quick-start feature cards or by directly typing your instructions
                            into the command bar at the
                            bottom of the window.
                        </p>
</div>
<div className="para-box">
<h3 className="h3">
                            Core Capabilities &amp; Quick-Start Actions
                        </h3>
<h4 className="h4">
                            Chat with me
                        </h4>
<ul className="cd-overview-ul">
<li>
<strong>Purpose</strong> Engage in a standard conversational interface to iterate on
                                project building and modification.
                            </li>
<li>
<strong>Workflow</strong> Select this option to text-chat directly with the agent.
                                Describe what you want to achieve, and Sidekick will help you
                                write, build, or modify project components dynamically.
                            </li>
<li>
<strong>Create Architecture</strong> &ndash; Generate a complete architectural proposal based
                                on the context and requirements you
                                provide.
                            </li>
</ul>
<div className="image-wrapper">
<img alt="Chat with me" className="demo-img" src="/assets/images/sidekick/sidekick-chat-with-me.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">Talk with me</h4>
<ul className="cd-overview-ul">
<li>
<strong>Purpose</strong> Hands-free, real-time voice communication.
                            </li>
<li>
<strong>Workflow</strong> Select this mode to initiate a real-time voice conversation
                                with the assistant. Use this for rapid brainstorming,
                                hands-free prompting, or talking through complex system workflows.
                            </li>
</ul>
<div className="image-wrapper">
<img alt="Talk to me" className="demo-img" src="/assets/images/sidekick/talk-with-me.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">Attach files</h4>
<ul className="cd-overview-ul">
<li>
<strong>Purpose</strong> Contextualize your session with external product documentation,
                                technical layouts, or data structures.
                            </li>
<li>
<strong>Workflow</strong> Use this to upload PDFs, raw images, or plain text files.
                                Sidekick consumes these documents directly, using them as
                                structural context to answer questions or generate platform assets.
                            </li>
</ul>
<div className="image-wrapper">
<img alt="Attach files" className="demo-img" src="/assets/images/sidekick/attach-files.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">Analyze requirements</h4>
<ul className="cd-overview-ul">
<li>
<strong>Purpose</strong> Interactive discovery and refinement of product definitions.
                            </li>
<li>
<strong>Workflow</strong> Sidekick walks you through tailored, guided
                                question-and-answer prompts. Use this mode to catch missing system gaps,
                                clarify user stories, and refine exactly what you want to build before generating
                                schemas.
                            </li>
</ul>
<div className="image-wrapper">
<img alt="Analyze requirements" className="demo-img" src="/assets/images/sidekick/requirement-analysis.png"/>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerSidekick;
