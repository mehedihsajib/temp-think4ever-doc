import React from 'react';

const ReverseEngineeringReverseEngineering = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">Reverse Engineering</h1>

<section className="cd-overview" id="cdHomeOverview">
<p className="cd-overview-text">
            Reverse engineering allows you to analyze and understand existing
            systems or components, often to facilitate maintenance,
            improvement, or integration.
          </p>
<h3 style={{marginTop: '30px'}} className="h3">Create New Project</h3>
<p>
            The first screen allows users to define the basic project
            information.
          </p>
<ol className="cd-overview-ul">
<li>
              In the Dashboard, click on
              <strong>Create a New Project</strong> button
            </li>
<li>Describe the project you want to create.</li>
<li>
              Click on <strong>Continue</strong> button.
              <div className="image-wrapper">
<img alt="How to Create Project" className="demo-img" src="/assets/images/create-project-1.png"/>
</div>
</li>
<li>
              The application will analyze the description of the app and will
              generate suggestion, thus this screen popup will appear.
              <div className="image-wrapper">
<img alt="How to Create Project" className="demo-img" src="/assets/images/create-project-2.1.png"/>
</div>
</li>
<li>
              Select any option or simply choose the recommended option, then
              tap on <strong>Open Architect</strong> button.
            </li>
<li>
              AI will generate a couple of questions for
              <strong>Requirements Analysis</strong>
<div className="image-wrapper">
<img alt="How to Create Project" className="demo-img" src="/assets/images/create-project-2.2.png"/>
</div>
</li>
<li>
              Once all set, click on <strong>Submit Answers</strong> button.
            </li>
<li>
              Once all set, a summary of requirements will be generated for
              your review and approval to build the app.

              <div className="image-wrapper">
<img alt="How to Create Project" className="demo-img" src="/assets/images/create-project-2.3.png"/>
</div>
</li>
<li>
              Think4Ever will analyze the requirements for a few minutes.
            </li>
</ol>
<h4 style={{marginTop: '20px'}} className="h4">Components</h4>
<div className="para-box">
<p><strong>Project Name Field</strong></p>
<p>Enter the name of the project to be created.</p>
</div>
<div className="para-box">
<p><strong>Example</strong></p>
<p>Midlands Clinic Appointment System</p>
</div>
<p>
            This name will be used throughout the platform to identify the
            project.
          </p>
<div className="para-box">
<p><strong>Description Field</strong></p>
<p>Provides an optional summary or overview of the project.</p>
</div>
<p>Users may include:</p>
<ul className="cd-overview-ul">
<li>Project purpose</li>
<li>Business objectives</li>
<li>System overview</li>
<li>Functional scope</li>
</ul>
<div className="para-box">
<p><strong>Example</strong></p>
<p>Clinic appointment and patient scheduling platform.</p>
</div>
<div className="para-box">
<p><strong>Cancel Button</strong></p>
<p>Closes the dialog without creating a project.</p>
</div>
<div className="para-box">
<p><strong>Create Project Button</strong></p>
<p>
              Creates the new project and proceeds to the next setup step.
            </p>
</div>



<h3 style={{marginTop: '20px'}} className="h3">
            Import an Existing Project
          </h3>
<p>
            Imports an existing application or codebase into the platform.
          </p>
<div className="para-box">
<p><strong>Supported Sources</strong></p>
<ul className="cd-overview-ul">
<li>Version control repositories</li>
<li>Public GitHub repositories</li>
<li>ZIP archive files</li>
</ul>
</div>
<div className="para-box">
<p><strong>Recommended For</strong></p>
<ul className="cd-overview-ul">
<li>Existing applications</li>
<li>Legacy systems</li>
<li>Ongoing development projects&nbsp;</li>
<li>Previously developed source code</li>
</ul>
</div>
<div className="para-box">
<p><strong>Action</strong></p>
<p>
              Click Choose Source to continue to the import options screen.
            </p>
</div>
<div className="image-wrapper pb-0">
<img alt="Create Project" className="demo-img" src="/assets/images/re/02-create-project-2.png"/>
</div>


<div className="para-box">
<p>
<strong>Customer can import projects from 3 options:</strong>
</p>
<ul className="cd-overview-ul">
<li>Public GitHub URL</li>
<li>ZIP File</li>
<li>Git Provider (advanced)</li>
</ul>
<p>
              This page is typically accessed when creating a new project or
              adding source code to an existing workspace.
            </p>
</div>
<div className="para-box">
<p><strong>These options allow customers to: </strong></p>
<ul className="cd-overview-ul">
<li>Integrate existing applications into the platform</li>
<li>Continue development from external repositories</li>
<li>Upload archived project files</li>
<li>Synchronize source code with version control systems</li>
</ul>
</div>
<h3 className="h3">Option 1 - Public GitHub URL</h3>
<div className="para-box">
<p>
<strong>Importing Source Code via Public GitHub URL </strong>
</p>
<p>
              When you choose to seed an empty workspace using an existing
              project repository, the platform provides a dedicated wizard to
              pull code seamlessly from open-source version control.
            </p>
<br/>
<p>
              This option imports source code from a publicly accessible
              GitHub repository.
            </p>
<div className="image-wrapper">
<img alt="Create Project" className="demo-img" src="/assets/images/re/03-import-source-2.png"/>
</div>
</div>
<div className="para-box">
<p><strong>Functions</strong></p>
<ul className="cd-overview-ul">
<li>Download project snapshots</li>
<li>Clone public repositories</li>
<li>Import application source files into the workspace</li>
</ul>
</div>
<div className="para-box">
<p><strong>User Requirement </strong></p>
<p>The user must provide a valid public GitHub repository URL.</p>
</div>
<div className="para-box">
<p><strong>Parameter Configurations &amp; Rules </strong></p>
<ul className="cd-overview-ul">
<li>
                Repository URL: Paste the complete, publicly accessible HTTP
                link to your target repository (e.g.,
                https://github.com/expressjs/express). Private repositories
                requiring SSH key encryption or explicit developer tokens are
                not supported by this basic link wizard.
              </li>
<li>
                Branch Specification: Define the explicit branch string you
                want to target (e.g., main or development). If you leave this
                field empty, or if the specified branch cannot be found in the
                repository index, the system automatically falls back to
                pulling from the default master branch.
              </li>
</ul>
</div>
<div className="para-box">
<p><strong>Executing the Repository Sync </strong></p>
<ol className="cd-overview-ul">
<li>
                Enter your specific repository location and target branch into
                the modal text blocks.
              </li>
<li>
                Click the white &larr; Back button to return to the source
                selection menu if you need to choose an alternative upload
                path (like a local ZIP archive).
              </li>
<li>
                Click the solid purple 📥 Import repository action button to
                start the automated transfer.
              </li>
<li>
                The platform will automatically connect to GitHub, download a
                snapshot of the codebase, extract the file structure, and
                initialize the project components directly within your working
                developer canvas.
              </li>
</ol>
</div>
<h3 className="h3">Option 2 - ZIP File</h3>
<div className="para-box">
<p><strong>Importing Source Code via ZIP Archive </strong></p>
<br/>
<p>
              When setting up a project workspace from an existing codebase,
              the platform provides a local file upload wizard as an
              alternative to external version control tracking.
            </p>
<p>
              This option allows you to upload a compressed archive directly
              from your local computer. The system will automatically unpack
              and map the contained directories into your designated project
              folder.
            </p>
</div>
<div className="image-wrapper">
<img alt="Upload Zip" className="demo-img" src="/assets/images/re/07-upload-zip.png"/>
</div>
<div className="para-box">
<p><strong>Features: </strong></p>
<ul className="cd-overview-ul">
<li>Upload local project archives</li>
<li>Extract application files automatically</li>
<li>Import existing codebases into the workspace</li>
</ul>
</div>
<div className="para-box">
<p><strong>Supported Content</strong></p>
<p>ZIP files containing:</p>
<ul className="cd-overview-ul">
<li>Source code</li>
<li>Assets</li>
<li>Configuration files</li>
<li>Project folders</li>
</ul>
</div>
<div className="para-box">
<p><strong>Core Functions </strong></p>
<ul className="cd-overview-ul">
<li>
<strong>Upload Local Project Archives: </strong>
<span>Browse your local directories to select and transmit
                  bundled application code structures.</span>
</li>
<li>
<strong>Extract Application Files Automatically:</strong>
<span>The backend system instantly runs an unzipping routine upon
                  completing the upload, parsing your file trees without
                  requiring manual terminal extraction commands.
                </span>
</li>
<li>
<strong>Import Existing Codebases into the Workspace:</strong>
<span>Populates your empty developer environment with your
                  historical logic blocks, configuration settings, and static
                  assets in one step.
                </span>
</li>
</ul>
</div>
<div className="para-box">
<p><strong>Step-by-Step Upload Procedure </strong></p>
<ol className="cd-overview-ul">
<li>
                Click the <strong>Choose File</strong> target button within
                the configuration modal to trigger your operating system's
                native file explorer.
              </li>
<li>
                Locate and select the targeted .zip archive containing your
                application files.
              </li>
<li>
                Verify that the correct archive filename appears next to the
                selection button.
              </li>
<li>
                If you need to switch to an alternative seed method (such as
                pulling from a public GitHub URL), click the white &larr; Back
                button.
              </li>
<li>
                Click the solid purple 📤
                <strong>Upload &amp; Extract</strong> action button to initiate
                the transfer process.
              </li>
<li>
                Keep your browser window open while the file is processed;
                once complete, your unpacked folder architecture will populate
                directly into the left side of your developer canvas.
              </li>
</ol>
</div>
<h3 className="h3">Option 3 &ndash; Git Provider (advanced)</h3>
<p>
            The Git Provider (Advanced) option allows users to connect the
            project directly to a remote Version Control System (VCS)
            repository such as GitHub, GitLab, or Bitbucket using
            authenticated credentials.
          </p>
<br/>
<p>
            This option is recommended for projects that are actively
            maintained in a source control repository and require secure
            access.
          </p>
<div className="image-wrapper">
<img alt="Git Provider" className="demo-img" src="/assets/images/re/06-git-provider.png"/>
</div>
<div className="para-box">
<h3 className="h3">What is a VCS?</h3>
<p>VCS stands for Version Control System.</p>
</div>
<div className="para-box">
<p>
<strong>A Version Control System is a tool used to: </strong>
</p>
<ul className="cd-overview-ul">
<li>Store and manage source code</li>
<li>Track file and code changes over time</li>
<li>Support collaboration between multiple developers</li>
<li>Maintain version history and backups</li>
<li>Restore previous versions when needed</li>
</ul>
</div>
<div className="para-box">
<p>
<strong>Common VCS platforms include: </strong>
</p>
<ul className="cd-overview-ul">
<li>GitHub</li>
<li>GitLab</li>
<li>Bitbucket</li>
</ul>
</div>
<div className="para-box">
<p>
<strong>How to Connect Project using VCS: </strong>
</p>
<ul className="cd-overview-ul">
<li>Select Connect my version control.</li>
<li>Authenticate with the repository provider.</li>
<li>Select the repository to import.</li>
<li>
                Confirm synchronization settings by clicking on Save
                Integrations.
              </li>
</ul>
</div>
<h3 className="h3">Components</h3>
<div className="para-box">
<p><strong>Project Folder</strong></p>
<p>
              Displays the target project workspace where the repository will
              be connected.
            </p>
</div>
<div className="para-box">
<p><strong>Purpose</strong></p>
<p>
              Determines which local project folder will synchronize with the
              Git repository.
            </p>
</div>
<div className="para-box">
<p><strong>Example </strong></p>
<p>midlands_clinic_appointment_system</p>
</div>
<h4 style={{marginTop: '20px'}} className="h4">System Type</h4>
<p>Specifies the version control system type.</p>
<p>Supported Example</p>
<ul className="cd-overview-ul">
<li>Git</li>
</ul>
<div className="para-box">
<p><strong>Purpose</strong></p>
<p>Defines the repository protocol and integration type.</p>
</div>
<div className="para-box">
<p><strong>Integration Name </strong></p>
<p>
              Allows users to assign a custom name for the repository
              connection.
            </p>
</div>
<div className="para-box">
<p><strong>Example </strong></p>
<p>Main Repository</p>
</div>
<div className="para-box">
<p><strong>Purpose </strong></p>
<p>Helps identify repository integrations within the platform.</p>
</div>
<div className="para-box">
<p><strong>Default Branch </strong></p>
<p>
              Specifies the primary branch that the workspace will synchronize
              with.
            </p>
</div>
<div className="para-box">
<p><strong>Example </strong></p>
<p>Smain</p>
</div>
<p>Common Branch Names</p>
<ul className="cd-overview-ul">
<li>main</li>
<li>master</li>
<li>develop</li>
</ul>
<div className="para-box">
<p><strong>Repository URL </strong></p>
<p>Field used to enter the Git repository address.</p>
</div>
<div className="para-box">
<p><strong>Example </strong></p>
<p>https://github.com/username/repo.git</p>
</div>
<div className="para-box">
<p><strong>Purpose </strong></p>
<p>
              Identifies the remote repository to connect and synchronize
              with.
            </p>
</div>
<div className="para-box">
<p><strong>Authentication Method </strong></p>
<p>
              Specifies how the system authenticates with the repository
              provider.
            </p>
</div>
<div className="para-box">
<p><strong>Example </strong></p>
<p>Access token</p>
</div>
<div className="para-box">
<p><strong>Supported Authentication Types </strong></p>
<p>May include:</p>
<ul className="cd-overview-ul">
<li>Access Token</li>
<li>SSH Key</li>
<li>Username and Password</li>
<li>OAuth Authentication</li>
</ul>
</div>
<div className="para-box">
<p><strong>Personal Access Token </strong></p>
<p>Secure field used to enter the repository access token.</p>
</div>
<div className="para-box">
<p><strong>Purpose </strong></p>
<p>Provides secure authentication for:</p>
<ul className="cd-overview-ul">
<li>Pull operations</li>
<li>Push operations</li>
<li>Repository synchronization</li>
</ul>
<p>
              Access tokens should be kept confidential and securely managed.
            </p>
</div>
<div className="para-box">
<p><strong>Enable Auto-Sync </strong></p>
<p>
              Checkbox option that automatically synchronizes repository
              updates.
            </p>
</div>
<div className="para-box">
<p><strong>Functions </strong></p>
<ul className="cd-overview-ul">
<li>Automatically pull repository changes</li>
<li>Keep workspace updated</li>
<li>Simplify collaboration workflows</li>
</ul>
</div>
<div className="para-box">
<p><strong>Back Button </strong></p>
<p>
              Returns the user to the previous setup screen without saving
              changes.
            </p>
</div>
<div className="para-box">
<p><strong>Save Integration Button </strong></p>
<p>
              Saves the repository configuration and establishes the
              connection.
            </p>
</div>
<div className="para-box">
<p><strong>Notes and Recommendations </strong></p>
<p>
              Saves the repository configuration and establishes the
              connection.
            </p>
<ul className="cd-overview-ul">
<li>Ensure the repository URL is valid and accessible.</li>
<li>
                Verify that the access token has sufficient permissions.
              </li>
<li>
                Use auto-sync for active collaborative development projects.
              </li>
<li>
                Protect access tokens and avoid sharing credentials publicly.
              </li>
<li>
                Confirm the correct default branch before saving the
                integration.
              </li>
</ul>
</div>

</section>
<section aria-labelledby="re-open-project-title" className="re-open-project-section">
<div className="re-open-project-shell">
<div className="re-open-project-head">
<p className="re-open-project-kicker">OPEN PROJECT</p>
<button aria-label="Close" className="re-open-project-close" type="button">
                &times;
              </button>
</div>
<h3 className="re-open-project-title" id="re-open-project-title">
              Midlands Clinic Appointment System
            </h3>
<p className="re-open-project-subtitle">
              Pick how you want to work on this project. Same data, same files
              &mdash; different interface.
            </p>
<div className="re-open-project-cards">
<a className="re-open-project-card re-open-project-card-design" href="/designer/introduction">
<div className="re-open-project-icon re-open-project-icon-design">
<i aria-hidden="true" className="fa-solid fa-compass-drafting"></i>
</div>
<span className="re-open-project-badge">LAST USED</span>
<h4>Design / Architect</h4>
<p>
                  Concepts, requirements, page designs, architecture. The
                  high-level view.
                </p>
<span className="re-open-project-link re-open-project-link-design">
                  Open
                  <i aria-hidden="true" className="fa-solid fa-arrow-right"></i>
</span>
</a>
<a className="re-open-project-card re-open-project-card-dev" href="/developer/start-new-project#devDashboard">
<div className="re-open-project-icon re-open-project-icon-dev">
<i aria-hidden="true" className="fa-solid fa-code"></i>
</div>
<h4>Developer Mode</h4>
<p>
                  Hands-on coding, file editing, run services, AI dev agents.
                </p>
<span className="re-open-project-link re-open-project-link-dev">
                  Open
                  <i aria-hidden="true" className="fa-solid fa-arrow-right"></i>
</span>
</a>
</div>
<p className="re-open-project-footnote">
              Same project, same database &mdash; just a different workspace.
            </p>
</div>
</section>
</main>
    </div>
  );
};

export default ReverseEngineeringReverseEngineering;
