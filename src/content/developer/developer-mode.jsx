import React from 'react';

const DeveloperDeveloperMode = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">Developer Mode</h1>

<section className="cd-overview" id="cdHomeOverview">
<p className="cd-overview-text">
            The Developer Mode workspace is a code-first, interactive
            environment designed for engineers and builders to modify system
            logic, view log payloads, and collaborate directly with autonomous
            development agents.
          </p>
<div className="para-box">
<h3 className="h3">Quick Tour</h3>
</div>
<div className="image-wrapper">
<img alt="Developer Mode" className="demo-img" src="/assets/images/dev-doc/26-dev-mode-1.png"/>
<img style={{marginTop: '20px'}} alt="Quick Tour " className="demo-img" src="/assets/images/dev-doc/take-tour.png"/>

</div>
<h3 className="h3">Project Directory &amp; Core Navigation (Left Pane)</h3>
<p>
            The sidebar keeps your overall structure accessible while
            navigating code logic:
          </p>
<ul className="cd-overview-ul">
<li>
              Header Controls: * Displays the parent project folder name
              (e.g., MCB Customer Appointment).
            </li>
<li>
              Features a quick navigation dropdown to switch workspaces
              seamlessly without exiting to the main directory.
            </li>
</ul>
<p>Workspace Navigation:</p>
<ul className="cd-overview-ul">
<li>
<strong>Code Explorer:</strong>
              Expand or collapse the folder directory structure (src/,
              components/, api/) to view, open, and edit specific project
              repository files.
            </li>
<li>
<strong>Build History:</strong>
<span>
                Review past compilation success records, terminal execution
                statuses, and past deployment artifacts.
              </span>
</li>
<li>
<strong>Global Account Toggle:</strong>
<span>
                Located at the base of the directory, allowing you to quickly
                jump back to the platform's root administrative options, such
                as Settings or Billing.
              </span>
</li>
</ul>
<h3 className="h3">Live Agent Log &amp; Execution Monitor (Center Pane)</h3>
<p>
            This dynamic dashboard acts as your primary terminal trace feed,
            capturing real-time updates as backend processes and AI agents
            execute software development lifecycles:
          </p>
<ul className="cd-overview-ul">
<li>
<strong>Code Explorer:</strong>
              Expand or collapse the folder directory structure (src/,
              components/, api/) to view, open, and edit specific project
              repository files.
            </li>
<li>
<strong>Event Log Cards:</strong>
<span>
                Each entry registers an explicit lifecycle step, complete with
                an epoch timestamp identifier (e.g., 12 May 2026 15:39:17), a
                categorized action type header, and a collapsible code payload
                view block:
              </span>
</li>
<li>
<strong>Project Configuration Log:</strong>
<span>
                Confirms project environment mapping updates. Click to see
                underlying code strings or parameter adjustments.
              </span>
</li>
<li>
<strong>Web Service Running Notification:</strong>
<span>
                Confirms the state of background web servers. Provides direct
                endpoint URLs or configuration specs.
              </span>
</li>
<li>
<strong>AI Agent Analysis Step: </strong>
<span>
                Shows the deep-thinking chain of the autonomous agent as it
                parses requirement logic, lists technical parameters, or maps
                out logic paths.
              </span>
</li>
<li>
<strong>Log Navigation Footer:</strong>
<span>
                Toggle through historical event payloads using pagination
                buttons, filter by log severity levels, or adjust rows per
                page options to review long agent runs.
              </span>
</li>
</ul>
<h3 className="h3">AI Copilot Chat Interface (Right Pane)</h3>
<p>
            The side chat window provides a direct channel to prompt, guide,
            and instruct your autonomous engineering agents:
          </p>
<ul className="cd-overview-ul">
<li>
<strong>Chat Conversation Feed: </strong>
              Displays context-aware conversations detailing recent build
              tasks, file generations, and test results.
            </li>
<li>
<strong>System State Indicator:</strong>
<span>Located at the bottom corner, displaying a "Ready for next
                task" status to confirm the background agent has completed its
                last loop and is listening for fresh development inputs.
              </span>
</li>
<li>
<strong>Input Action Bar</strong>
<span>Enter natural language instructions (e.g., "Write a new API
                endpoint for booking confirmation" or "Fix the syntax error in
                the database helper script") to automatically trigger your
                next agent generation cycle.
              </span>
</li>
</ul>
<h3 className="h3">Switch to Developer Mode</h3>
<p>
            Quick access to developer mode can be found on the upper right
            corner of the page when you are currently in Design Mode. Just tap
            on Switch to Developer Mode button.
          </p>
<div className="image-wrapper">
<img alt="Dev Mode" className="demo-img" src="/assets/images/dev-doc/27-switch-to-dev.png"/>
</div>
<h3 className="h3">Switch to Design/Architect Mode</h3>
<p>
            Quick access to Design mode can be found on the upper portion of
            the page when you are currently in Developer Mode. Just tap on
            Switch to Design/Architect Mode button.
          </p>
<div className="image-wrapper">
<img alt="Dev Mode" className="demo-img" src="/assets/images/dev-doc/27-switch-to-design.png"/>
</div>
<p>
            The Developer Mode page serves as the central code-first workbench
            within the Think4Ever ecosystem. Engineered specifically for
            technical builders, this developer-friendly interface grants
            direct access to the project's repository files, allowing
            engineers to write code, modify logic, and deploy updates
            seamlessly in real time.
          </p>
<br/>
<p>
            This workspace supports multiple stages of the Software
            Development Life Cycle (SDLC), including development, testing,
            debugging, architecture review, and deployment preparation.
          </p>
<div className="image-wrapper">
<img alt="Dev Mode" className="demo-img" src="/assets/images/dev-doc/27-dev-mode-3.png"/>
</div>
<h3 className="h3">Navigation buttons</h3>
<div className="image-wrapper">
<img alt="Dev Mode" className="demo-img" src="/assets/images/dev-doc/28-nav-buttons.png"/>
</div>
<div className="para-box">
<h4 className="h4">Switch to Design/Architect Mode</h4>
<ul className="cd-overview-ul">
<li>Allows customer to switch the Design Mode of the portal</li>
</ul>
</div>
<div className="para-box">
<h4 className="h4">Goals &amp; Progress</h4>
<p>
              The Set Goal option enables users to define project objectives,
              requirements, or development targets.
              <br/>
              Users may use this section to:
            </p>
<ul className="cd-overview-ul">
<li>Create project goals</li>
<li>Define feature requirements</li>
<li>Assign development priorities</li>
<li>Establish milestones and expected outcomes</li>
</ul>
<p>
              This helps align development activities with business and
              project requirements.
            </p>
</div>
<div className="para-box">
<h4 style={{marginTop: '20px'}} className="h4">Insights</h4>
<p>
              The Insights dropdown menu is a quick diagnostic tool located in
              the workspace header bar used to audit your project's health. It
              features two options:
            </p>
<ul className="cd-overview-ul">
<li>
<strong>Structure:</strong><span>Opens an interactive blueprint map showing how your current
                  data models, business flows, and UI designs are connected.
                </span>
</li>
<li>
<strong>Issues:</strong><span>Displays a live, centralized log of validation conflicts,
                  sync warnings, or errors that need to be resolved before
                  running background tasks.
                </span>
</li>
</ul>
</div>
<div className="para-box">
<h4 style={{marginTop: '20px'}} className="h4">Tools</h4>
<p>
              The Tools dropdown menu is a centralized development utility
              panel located in the main workspace header bar. It provides
              developers with instant access to the core interactive
              components of their active project environment.
            </p>
<p style={{marginTop: '20px'}}>
              The dropdown contains three primary operational modules:
            </p>
<ul className="cd-overview-ul">
<li>
<strong>Database:</strong><span>Launches an integrated command-line interface within the
                  workspace to execute system tasks, scripts, and local
                  developer commands.
                </span>
</li>
<li>
<strong>VS Code::</strong><span>Bridges the active project space directly with an embedded
                  or linked Visual Studio Code environment for advanced code
                  editing and engineering modifications.
                </span>
</li>
</ul>
</div>
<h3 style={{marginTop: '20px'}} className="h3">
            Connect your project to VSC (Visual Studio Code)
          </h3>
<div className="image-wrapper pb-0">
<img alt="Dev Mode" className="demo-img" src="/assets/images/dev-doc/26-dev-mode-4.png"/>
</div>
<div className="para-box">
<p>To connect your project to VS Code:</p>
<ul className="cd-overview-ul">
<li>
                Click the VS Code button (highlighted in the top-right
                corner).
              </li>
<li>Wait for the environment to initialize.</li>
<li>
                A new browser tab or VS Code workspace will open
                automatically.
              </li>
<li>
                Once opened, your project files will appear in the Explorer
                panel on the left side.
              </li>
<li>
                You can now:
                <ul>
<li>Edit code</li>
<li>Create files/folders</li>
<li>Run commands in the terminal</li>
<li>Install extensions (if supported)</li>
<li>Use Git/version control</li>
</ul>
</li>
</ul>
</div>
<div className="para-box">
<p>
<strong>Troubleshooting: If VS Code does not open automatically
              </strong>
</p>
<p>Try these:</p>
<ul className="cd-overview-ul">
<li>Allow pop-ups in your browser</li>
<li>Refresh the page and click the button again</li>
<li>Check if your browser blocked the redirect</li>
</ul>
</div>
<div className="para-box">
<p>
<strong>Optional: Open Terminal in VS Code </strong>
</p>
<p>Inside VS Code:</p>
<ul className="cd-overview-ul">
<li>Go to Terminal &rarr; New Terminal</li>
<li>
                Or press:

                <ul>
<li>Ctrl + ` (Windows)</li>
<li>Cmd + ` (Mac)</li>
</ul>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">Left Sidebar Menu Navigation</h3>
<p>
              When you switch the Think4Ever platform into
              <strong>Developer Mode</strong>, the primary navigation shifts
              to a streamlined, icon-based left sidebar menu. This specialized
              menu allows technical users to quickly toggle between chat
              interfaces, systemic architecture blueprints, underlying files,
              and integration consoles without losing their active development
              context.
            </p>
<div className="image-wrapper">
<img alt="Left Sidebar Menu Navigation" className="demo-img" src="/assets/images/dev-doc/left-menu-1.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">Account Options</h4>
<p>
              The user profile shortcut, located at the bottom left corner of
              the platform sidebar interface, opens your main administrative
              navigation hub. This pop-up card displays user identification
              details&mdash;such as your account profile name and registered
              organization email address and offers direct pathways to
              personalize settings, manage developer credentials, change work
              modes, and secure your session.
            </p>
</div>
<div className="para-box">
<h4 className="h4">My Profile</h4>
<p>
              Provides direct access to individual user account information.
              Click this option to update personal profile details, modify
              interface preferences, manage individual security parameters
              (such as updating multi-factor authentication or passwords), and
              track your usage history or data access logs across the
              workspace.
            </p>
</div>
<div className="para-box">
<h4 className="h4">Project Settings</h4>
<p>
              Handles high-level configurations and parameters for your active
              workspace project. It allows workspace administrators and
              developers to set default target folder directories, manage team
              user seats, modify workspace execution preferences, and view
              project metadata. It also tracks information like your global
              Credits balance required to run background agent deployment code
              loops.
            </p>
<div className="image-wrapper">
<img alt="Project Settings" className="demo-img" src="/assets/images/dev-doc/left-menu-2.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">API Keys</h4>
<p>
              Acts as your direct administrative portal to configure
              cryptographic access authorization strings. It links directly to
              the Access Tokens management engine. Use this section to
              provision new alphanumeric bearer credentials, set precise
              method scopes (enforcing distinct read or write validation
              parameters per resource block), monitor expiration timelines, or
              instantly revoke active access tokens if security is
              compromised.
            </p>
<div className="image-wrapper">
<img alt="API Keys" className="demo-img" src="/assets/images/dev-doc/left-menu-3.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">Version Control</h4>
<p>
              Manages code persistence, deployment targets, and branching
              pathways for your active engineering builds. It connects your
              visual workspace blueprints directly with cloud repositories or
              underlying project directories. Use this screen to check active
              development branches, inspect local code file structures, map
              changes against a shared source control manifest (such as
              configuring local client .mcp.json parameters), or view
              deployment tracking histories.
            </p>
<div className="image-wrapper">
<img alt="Version Control" className="demo-img" src="/assets/images/dev-doc/left-menu-4.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">Design / Architect mode</h4>
<p>
              Toggles the global operational workspace template into the
              visual ideation and blueprint architecture environment. Select
              this mode to exit low-level code generation panels, file views,
              and terminal log blocks. Switching to Design / Architect mode
              returns your interface to high-level system blueprints,
              including visual drag-and-drop toolboxes for designing UI screen
              concepts, building sequential business flows, mapping relational
              data objects, and declaring global business rules.
            </p>
</div>
<div className="para-box">
<h4 className="h4">Log out</h4>
<p>
              Gracefully terminates your active identity session and closes
              access to the active workspace. It instantly wipes cached
              authentication signatures from your browser session to secure
              project assets, project configurations, and private credentials
              on shared or public workstations.
            </p>
</div>
<div className="para-box">
<h3 className="h3">AI Assistant Panel</h3>
<p>
              The left-side panel contains the integrated AI assistant named
              Think.
            </p>
<p style={{marginTop: '20px'}}>This panel is used for:</p>
<ul>
<li>Code assistance</li>
<li>Debugging support</li>
<li>Task automation</li>
<li>System analysis</li>
<li>Development guidance</li>
</ul>
<div className="image-wrapper">
<img alt="AI Assistant Panel" className="demo-img" src="/assets/images/dev-doc/left-menu-5.png"/>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DeveloperDeveloperMode;
