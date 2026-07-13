import React from "react";

const DesignerEcosystemIntegration = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Third-party Ecosystem Integration</h1>
        <div className="para-box">
          <h3>Connect &amp; Tools</h3>
          <ul>
            <li>
              <strong>Purpose</strong> Third-party ecosystem integration.
            </li>
            <li>
              <strong>Workflow</strong> Link external developer platforms like
              Jira, Figma, GitHub, and more. Once connected, you can manually
              map specific objects or let the AI automatically reference and
              orchestrate data across your external tools.
            </li>
          </ul>
          <div className="para-box">
            <p>
              We need to setup oauth connections in order to connect to Third
              Party Tools . Provide the Client ID and Client Secret values for
              each integration.
            </p>
            <ul>
              <li>
                <strong>Jira + Confluence (one app) - </strong>
                <span>
                  register at{" "}
                  <a
                    className="doc-ex-link"
                    href="https://developer.atlassian.com/console/myapps"
                    target="_blank"
                  >
                    https://developer.atlassian.com/console/myapps
                  </a>{" "}
                  (OAuth 2.0 integration, add Jira + Confluence scopes and
                  offline_access) &mdash; send back Client ID and Client Secret.
                </span>
              </li>
              <li>
                <strong>GitHub - </strong>
                <span>
                  register at{" "}
                  <a
                    className="doc-ex-link"
                    href="https://github.com/settings/developers"
                    target="_blank"
                  >
                    github.com
                  </a>{" "}
                  &rarr; Settings &rarr; Developer settings &rarr; OAuth Apps
                  &mdash; send back Client ID and Client Secret.
                </span>
              </li>
              <li>
                <strong>Slack - </strong>
                <span>
                  register at{" "}
                  <a
                    className="doc-ex-link"
                    href="https://api.slack.com/apps"
                    target="_blank"
                  >
                    api.slack.com/apps
                  </a>{" "}
                  (add scopes channels:read, channels:history, chat:write)
                  &mdash; send back Client ID and Client Secret.
                </span>
              </li>
              <li>
                <strong>Notion - </strong>
                <span>
                  register at{" "}
                  <a
                    className="doc-ex-link"
                    href="https://notion.so/my-integrations"
                    target="_blank"
                  >
                    notion.so/my-integrations
                  </a>{" "}
                  (make it a Public integration) &mdash; send back Client ID and
                  Client Secret.
                </span>
              </li>
              <li>
                <strong>Linear - </strong>
                <span>
                  register at{" "}
                  <a
                    className="doc-ex-link"
                    href="https://linear.app"
                    target="_blank"
                  >
                    linear.app
                  </a>{" "}
                  &rarr; Settings &rarr; API &rarr; OAuth applications &mdash;
                  send back Client ID and Client Secret.
                </span>
              </li>
              <li>
                <strong>Figma - </strong>
                <span>
                  register at{" "}
                  <a
                    className="doc-ex-link"
                    href="https://figma.com/developers/apps"
                    target="_blank"
                  >
                    figma.com/developers/apps
                  </a>{" "}
                  &mdash; send back Client ID and Client Secret.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            alt="Connect &amp; Tools"
            src="/assets/images/sidekick/connect-tools.png"
          />
        </div>
        <div className="para-box">
          <h3>Connect &amp; Tools: Submenu Options</h3>
          <p>
            <strong>The Connect &amp; Tools</strong> integration panel acts as a
            bridge between Sidekick&rsquo;s core intelligence and your team's
            broader tech stack. When authenticated, Sidekick can read across
            these environments, making it a highly context-aware assistant for
            everything from product discovery to infrastructure management.
          </p>
          <div>
            <img
              alt="Connect &amp; Tools"
              src="/assets/images/sidekick/connect-tools-2.png"
            />
          </div>
          <p>
            The following sections detail what each individual submenu
            integration allows Sidekick to do:
          </p>
        </div>
        <div className="para-box">
          <h3>Project Management &amp; Issue Tracking</h3>
          <h3>Jira</h3>
          <ul>
            <li>
              <strong>Capabilities:</strong> Connecting Jira allows Sidekick to
              browse active engineering projects and epics, attach specific
              tickets directly into your chat conversation for context, and
              independently search, read, create, or comment on issues.
            </li>
            <li>
              <strong>Best Used For:</strong> Synchronizing high-level product
              definitions with real-world development backlogs without manually
              jumping back and forth between tools.
            </li>
          </ul>
          <div>
            <img alt="Jira" src="/assets/images/sidekick/jira.png" />
          </div>
          <div>
            <img alt="Atlassian" src="/assets/images/sidekick/atlasian.png" />
          </div>
        </div>
        <div className="para-box">
          <h3>Confluence</h3>
          <ul>
            <li>
              <strong>Capabilities:</strong> Sidekick can crawl your designated
              Confluence spaces, pull historical project wiki pages, and map out
              existing company guidelines.
            </li>
            <li>
              <strong>Best Used For:</strong> Feeding dense internal knowledge
              bases into the AI's active context window when drafting brand-new
              system definitions or onboarding onto complex ecosystems.
            </li>
          </ul>
          <div>
            <img
              alt="Confluence"
              src="/assets/images/sidekick/confluence.png"
            />
          </div>
          <div>
            <img
              alt="Confluence"
              src="/assets/images/sidekick/confluence-login.png"
            />
          </div>
        </div>
        <div className="para-box">
          <h3>Figma</h3>
          <ul>
            <li>
              <strong>Capabilities:</strong> Connecting Figma enables Sidekick
              to read specific canvas components, extract layout details, and
              pull exact screen blueprints straight into the design phase.
            </li>
            <li>
              <strong>Best Used For:</strong> Validating that your technical
              specification structures align perfectly with your UI design
              contracts before code implementation begins.
            </li>
          </ul>
          <div>
            <img alt="Figma" src="/assets/images/sidekick/figma.png" />
          </div>
          <div>
            <img alt="Figma" src="/assets/images/sidekick/figma-login.png" />
          </div>
        </div>
        <div className="para-box">
          <h3>GitHub</h3>
          <ul>
            <li>
              <strong>Capabilities:</strong> Sidekick bridges directly into your
              codebase repositories to inspect file structures, read code,
              analyze repository configurations, and track structural changes.
            </li>
            <li>
              <strong>Best Used For:</strong> Performing comprehensive "rules
              vs. reality" audits&mdash;checking that live code configurations
              actually obey your high-level written business rules.
            </li>
          </ul>
          <div>
            <img alt="GitHub" src="/assets/images/sidekick/github.png" />
          </div>
          <div>
            <img alt="GitHub" src="/assets/images/sidekick/github-login.png" />
          </div>
        </div>
        <div className="para-box">
          <h3>Slack</h3>
          <ul>
            <li>
              <strong>Capabilities:</strong> This integration allows Sidekick to
              push workspace notifications, share generated technical summaries,
              or even receive direct commands from designated Slack channels.
            </li>
            <li>
              <strong>Best Used For:</strong> Keeping non-technical stakeholders
              updated automatically when core platform requirements or project
              statuses evolve.
            </li>
          </ul>
          <div>
            <img alt="Slack" src="/assets/images/sidekick/slack.png" />
          </div>
          <div>
            <img alt="Slack" src="/assets/images/sidekick/slack-login.png" />
          </div>
        </div>
        <div className="para-box">
          <h3>Notion</h3>
          <ul>
            <li>
              <strong>Capabilities:</strong>Linking Notion grants Sidekick
              access to your shared team workspaces, project roadmaps, and
              collaborative research databases.
            </li>
            <li>
              <strong>Best Used For:</strong> Instantly cross-referencing messy
              product brainstorming notes with your platform's live data models.
            </li>
          </ul>
          <div>
            <img alt="Notion" src="/assets/images/sidekick/notion.png" />
          </div>
          <div>
            <img alt="Notion" src="/assets/images/sidekick/notion-login.png" />
          </div>
        </div>
        <div className="para-box">
          <h3>Linear</h3>
          <ul>
            <li>
              <strong>Capabilities:</strong> This integration bridges Linear's
              high-speed issue tracking into your chat workspace. Sidekick can
              monitor active sprint cycles, extract task lists, check progress,
              and modify ticket statuses directly from natural language
              commands.
            </li>
            <li>
              <strong>Best Used For:</strong> Maintaining continuous, real-time
              momentum on engineering tasks directly from your development
              canvas.
            </li>
          </ul>
          <div>
            <img alt="Linear " src="/assets/images/sidekick/linear.png" />
          </div>
          <div>
            <img alt="Linear " src="/assets/images/sidekick/linear-login.png" />
          </div>
        </div>
        <div className="para-box">
          <h3>Sentry</h3>
          <ul>
            <li>
              <strong>Capabilities:</strong> Sidekick monitors real-time error
              tracking logs and application crash reports captured by Sentry.
            </li>
            <li>
              <strong>Best Used For:</strong> Issue pattern
              mining&mdash;allowing Sidekick to analyze recurring production
              bugs and translate them back into explicit, preventative system
              requirements to guide the next development cycle.
            </li>
          </ul>
          <div>
            <img alt="Sentry" src="/assets/images/sidekick/sentry.png" />
          </div>
          <div>
            <img alt="Sentry" src="/assets/images/sidekick/sentry-login.png" />
          </div>
        </div>
        <div className="para-box">
          <h3>Google Drive &amp; OneDrive</h3>
          <ul>
            <li>
              <strong>Capabilities:</strong> Both submenus function as external
              data pipelines, allowing Sidekick to seamlessly pull down and
              parse PDFs, images, architectural diagrams, spreadsheets, and text
              documents.
            </li>
            <li>
              <strong>Best Used For:</strong> Injecting large quantities of
              pre-existing product documentation or client assets into
              Sidekick's large context window.
            </li>
          </ul>
          <div>
            <img
              alt="Google Drive"
              src="/assets/images/sidekick/google-drive.png"
            />
          </div>
          <div>
            <img alt="OneDrive" src="/assets/images/sidekick/one-drive.png" />
          </div>
        </div>
        <div className="para-box">
          <h3>Interface Quick Commands</h3>
          <p>
            The unified text field at the bottom allows you to pass multi-modal
            commands directly to Sidekick on the fly:
          </p>
          <ul>
            <li>
              <strong>Text Input Field::</strong> Type any project objective
              directly into the prompt box (e.g.,{" "}
              <strong>"Describe the project you want to create..."</strong>).
            </li>
            <li>
              <strong>Paperclip Icon:</strong> Quickly attach local context
              files without exiting your active chat thread.
            </li>
            <li>
              <strong>Plug/Network Icon:</strong> Access and manage external
              tool integrations and connection scopes.
            </li>
            <li>
              <strong>Microphone Icon:</strong> Toggle instant voice-to-text
              dictation or switch directly to voice mode.
            </li>
            <li>
              <strong>Send Arrow:</strong> Submit your text prompt,
              configurations, or uploaded attachments to execute the action.
            </li>
          </ul>
          <div>
            <img
              alt="Interface Quick Commands"
              src="/assets/images/sidekick/quick-icons.png"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesignerEcosystemIntegration;
