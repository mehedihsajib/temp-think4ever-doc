import React from "react";

const DesignerProjectSettings = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Getting Started</h1>
        <section>
          <p>
            This module is the essential configuration phase where you define
            the core identity and technical DNA of your application. This
            section bridges the gap between conceptualization and development by
            establishing the project's parameters, security protocols, and
            integration points.
          </p>

          <div className="yt-video" data-video-id="kqRaUoV8K-E"></div>
          <h3 style={{ color: "#0f172a" }} className="sub-heading">
            Core Objectives:
          </h3>
          <ul>
            <li>
              <strong>Architectural Alignment:</strong>
              <span>
                By selecting your specific Technology Stack (such as Node.js,
                Python, or C#), you calibrate the AI agents to generate code and
                documentation compatible with your preferred ecosystem.
              </span>
            </li>
            <li>
              <strong>Environment Readiness:</strong>
              <span>
                Configure API Keys and Version Control to ensure your project is
                securely connected to external services and your codebase is
                tracked from day one.
              </span>
            </li>
            <li>
              <strong>Legacy Integration:</strong>
              <span>
                Utilize the Reverse Engineer tool to ingest existing data or
                code, allowing the platform to understand and build upon your
                current technical foundation rather than starting from scratch.
              </span>
            </li>
          </ul>
          <img
            alt="Project Settings Initial"
            src="/assets/images/get-started-1.png"
          />
          <h2
            style={{ border: "none", marginBottom: "0" }}
            className="section-heading"
          >
            Getting started has the following core submenus:
          </h2>
          <img
            style={{ maxWidth: "250px", marginTop: "16px" }}
            alt="Submenus"
            src="/assets/images/get-started-2.png"
          />
          <div className="feature-box">
            <h4>Project Settings</h4>
            <p
              style={{
                fontFamily: "Inter&quot;, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.6",
                marginTop: "8px",
              }}
            >
              This is the command center for your application's identity. Use
              this section to define your Project Name and Description, and most
              importantly, configure your Technology Stack. By selecting your
              specific backend (e.g., Node.js), database, and frontend
              frameworks, you provide the necessary context for the AI agents to
              generate code and documentation that aligns with your environment.
            </p>
          </div>
          <div className="feature-box">
            <h4>API Keys</h4>
            <p
              style={{
                fontFamily: "Inter&quot;, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.6",
                marginTop: "8px",
              }}
            >
              Manage your secure connections and third-party integrations here.
              This section allows you to generate, store, and rotate
              Authentication Keys required for external services. Ensuring your
              API keys are correctly configured is essential for enabling
              seamless communication between your project and outside platforms.
            </p>
          </div>
          <div className="feature-box">
            <h4>Version Control</h4>
            <p
              style={{
                fontFamily: "Inter&quot;, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.6",
                marginTop: "8px",
              }}
            >
              Connect your project to your preferred Git provider (such as
              GitHub, GitLab, or Bitbucket). This section handles the
              synchronization between your local development environment and
              your remote repositories. You can track branch deployments, manage
              commits, and ensure that your codebase is properly versioned as
              you progress.
            </p>
          </div>
          <div className="feature-box">
            <h4>Reverse Engineer</h4>
            <p
              style={{
                fontFamily: "Inter&quot;, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.6",
                marginTop: "8px",
              }}
            >
              Accelerate your development by importing existing assets. This
              tool allows you to upload current codebases, database schemas, or
              documentation so the platform can "read" your existing work. It
              maps out your current architecture, making it easier to build new
              features that are consistent with your established logic and
              structure.
            </p>
          </div>
          <h2 style={{ fontSize: "1.5rem" }} className="section-heading">
            Project Settings
          </h2>
          <p>
            The Project Settings page is where you establish the high-level
            identity of your project and calibrate the AI engine. The selections
            made here act as a "North Star" for all subsequent automated
            generations, ensuring that the code, diagrams, and business logic
            produced later are compatible with your specific environment.
          </p>
          <h3 style={{ textDecoration: "underline" }} className="sub-heading">
            1. General Information
          </h3>

          <div className="yt-video" data-video-id="GY_y-n18gm4"></div>
          <p style={{ marginBottom: "20px" }}>
            This subsection defines the metadata for your project.
          </p>
          <ul>
            <li>
              <strong>Project Name:</strong>
              <span>
                Enter a unique identifier for your application (e.g.,
                Study_Tool). This name will appear across all exported
                documentation and reports.
              </span>
            </li>
            <li>
              <strong>Description:</strong>
              <span>
                Provide a concise summary of the project's purpose. A
                well-defined description helps the AI contextualize the
                functional requirements and user roles it will generate later in
                the process.
              </span>
            </li>
          </ul>
          <img
            alt="General Information"
            src="/assets/images/get-started-3.jpg"
          />
          <h3 style={{ textDecoration: "underline" }} className="sub-heading">
            2. Technology Stack Configuration
          </h3>
          <p>
            The Technology Stack is the most critical component of the settings.
            It guides the AI agents in producing framework-specific syntax and
            architectural patterns.
          </p>
          <img alt="Technology Stack" src="/assets/images/get-started-4.jpg" />
          <h4 className="sub-heading">2.1 Server / Backend</h4>
          <p>
            Select the primary language and framework that will power your
            application logic. The system supports a wide array of environments,
            including:
          </p>
          <ul>
            <li data-i18n-html="dev_project_settings.ps_2_1_l1">
              <strong>JavaScript/TypeScript:</strong> Node.js (Express, NestJS,
              Fastify, Koa, Hapi, AdonisJS).
            </li>
            <li data-i18n-html="dev_project_settings.ps_2_1_l2">
              <strong>Python:</strong> Django, Flask, FastAPI, Tornado, Pyramid,
              Bottle, Sanic.
            </li>
            <li data-i18n-html="dev_project_settings.ps_2_1_l3">
              <strong>PHP:</strong> Laravel, Symfony, Slim, CodeIgniter, Yii,
              CakePHP, Lumen.
            </li>
            <li data-i18n-html="dev_project_settings.ps_2_1_l4">
              <strong>C#:</strong> ASP.NET Core, ASP.NET MVC, Web API, Blazor,
              Minimal API.
            </li>
          </ul>
          <h4 className="sub-heading">2.2 Database</h4>
          <p>
            Identify the data persistence layer for your project. This selection
            informs how Data Objects and Database Schemas are visualized and
            scripted (e.g., SQL-based relational models vs. NoSQL document
            structures).
          </p>
          <img
            alt="Database Selection"
            src="/assets/images/get-started-5.jpg"
          />
          <h4 className="sub-heading">2.3 UI / Frontend Configuration</h4>
          <p>
            The UI/Frontend section is dedicated to defining the "Client Side"
            of your application. This configuration ensures that the
            AI-generated user interfaces, component libraries, and frontend
            logic are consistent with modern web or mobile standards.
          </p>
          <img
            alt="Frontend Selection"
            src="/assets/images/get-started-6.jpg"
          />
          <div className="bp-box">
            <h3 style={{ textDecoration: "underline" }}>
              Implementation Best Practices
            </h3>
            <p
              style={{
                fontFamily: "Inter&quot;, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              To ensure the highest accuracy in your project outputs, follow
              these guidelines:
            </p>
            <ul style={{ marginBottom: "0" }}>
              <li>
                <strong>Precision Matters:</strong>
                <span>
                  Selecting a specific framework (like Node.js - NestJS) rather
                  than a generic runtime (like Node.js) allows the system to
                  generate more precise boilerplate code and folder structures.
                </span>
              </li>
              <li>
                <strong>Save Changes:</strong>
                <span>
                  Always click the Save Changes button in the top-right corner
                  before navigating to other sections like API Keys or Business
                  Flows to avoid losing your configuration.
                </span>
              </li>
              <li>
                <strong>Iterative Updates:</strong>
                <span>
                  You can return to this section at any time to update your
                  stack if your project requirements pivot during the ideation
                  phase.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerProjectSettings;
