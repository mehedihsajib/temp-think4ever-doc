import React from 'react';

const DesignerIntroduction = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" data-i18n="dev_intro.title" id="cdHomeTitle">
          Introduction
        </h1>

<section className="cd-overview" id="cdHomeOverview">
<p>
            Welcome to the official
            <strong>Think4Ever Documentation</strong> and User Manual!
          </p>
<p style={{marginTop: '20px'}} className="cd-overview-text">
            Think4Ever is an AI-powered, multi-agent Software Development Life
            Cycle (SDLC) platform designed to help you transform ideas and
            code into production-ready systems instantly. By unifying the
            entire development pipeline into a single visual ecosystem,
            Think4Ever eliminates tool-switching and provides total clarity
            into how your applications are built, connected, and deployed.
          </p>
<p style={{marginTop: '20px'}}>
            Whether you are an independent creator launching a new project
            from scratch, a startup team rapidly moving from a pitch deck to
            an MVP, or an enterprise mapping complex legacy systems, this
            documentation will guide you through maximizing the platform's
            multi-agent automation capabilities.
          </p>
<h3 style={{marginTop: '20px'}} className="h3">
            Key Capabilities of the Platform
          </h3>
<p>
            Think4Ever changes how applications are built by shifting focus
            from isolated code generation to complete, connected system
            orchestration:
          </p>
<ul className="cd-overview-ul">
<li>
<strong>System-Wide Visibility:</strong>
<span>Rather than managing scattered files, Think4Ever maps your
                entire project&mdash;including front-end interfaces, back-end logic,
                APIs, and data models&mdash;into a single, unified view.
              </span>
</li>
<li>
<strong>Intelligent Requirements Gathering:</strong>
<span>Work alongside an AI assistant that dynamically analyzes your
                typed ideas or uploaded files to help you map screens,
                workflows, user roles, and business logic before building
                begins.
              </span>
</li>
<li>
<strong>Impact Simulation:</strong>
<span>Modify any component of your project and instantly visualize
                how it affects downstream dependencies, ensuring stability and
                preventing unintended breaks before you deploy.
              </span>
</li>
<li>
<strong>Automated Quality &amp; Delivery:</strong>
<span>Every system built comes with automated QA, structural
                security checks, and continuous workflow validation, keeping
                your software enterprise-ready from day one.
              </span>
</li>
</ul>
<div className="para-box">
<h3 className="h3">Understanding the Workspace Core Modes</h3>
<p style={{marginTop: '20px'}}>
              To accommodate different stages of your development journey, the
              Think4Ever platform operates across two main, easily accessible
              environments:
            </p>
<div className="image-wrapper">
<img alt="Think4Ever Modes" className="demo-img" src="/assets/images/intro-1.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">1. Design / Architect Mode</h4>
<p>
              This mode focuses on upfront planning and blueprint mapping.
              Here, you interact with the AI to refine requirements, map out
              relational data objects, build business flows, define user
              roles, and establish integration maps. It acts as the structural
              brain of your system, ensuring your design is sound before any
              codebase files are generated.
            </p>
</div>
<div className="para-box">
<h4 className="h4">2. Developer Mode</h4>
<p>
              Once your architecture is defined, Developer Mode provides a
              hands-on building environment. This mode features an interactive
              chat panel where you issue natural language commands to create
              or modify features, paired with a real-time file explorer panel
              that visualizes the generated system architecture, folders, and
              assets as they are constructed by the AI agents.
            </p>
</div>
<div className="para-box">
<h4 className="h4">How to Use This Guide</h4>
<p>
              This documentation is designed to walk you step-by-step through
              your project creation journey:
            </p>
<ul className="cd-overview-ul">
<li>
<strong>Getting Started:</strong>
<span>Learn how to create a new project, utilize advanced setup
                  configurations, import existing repositories via Git or ZIP
                  files, and launch your workspace.
                </span>
</li>
<li>
<strong>System Design:</strong>
<span>Explore the tools available in Design / Architect Mode to
                  set up robust business rules, database structures, and
                  permissions profiles.
                </span>
</li>
<li>
<strong>Building &amp; Iterating:</strong>
<span>Master Developer Mode to interactively expand your
                  application features, inspect code structures, run automated
                  workflows, and safely deploy your finalized system.
                </span>
</li>
</ul>
<p>
              Let's begin turning your ideas into production-ready software!
              Use the left navigation sidebar to dive into Workspace Setup:
              <a href="/designer/create-project"><strong>Create a New Project.</strong></a>
</p>
</div>
<div style={{display: 'flex', gap: '10px'}} className="para-box">
<p>
<em><strong>Note:</strong> All screenshots throughout this documentation are captured in Light Mode for
                consistency.</em>
</p>
</div>

<div className="yt-video" data-video-id="CQpIODqNFek"></div>
</section>
</main>
    </div>
  );
};

export default DesignerIntroduction;
