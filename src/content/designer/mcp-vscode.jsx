import CodeBlock from "../../components/CodeBlock";
import React from "react";

const DesignerMcpVscode = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>VS Code</h1>

        <section>
          <div className="para-box">
            <p>
              VS Code&rsquo;s GitHub Copilot agent mode supports remote HTTP MCP
              servers natively (VS Code 1.99+). This integration ensures every
              Copilot developer seat has access to the exact same governed
              product context, regardless of their local machine configuration.
            </p>
            <div>
              <img alt="VS Code" src="/assets/images/mcp/mcp-vscode.png" />
            </div>
          </div>
          <div className="para-box">
            <h4>Technical Integration</h4>
            <p>
              Follow these configuration steps to register the think4ever MCP
              server within your VS Code environment.
            </p>
          </div>
          <div className="para-box">
            <h4>VS Code (GitHub Copilot)</h4>
            <p>
              VS Code's Copilot agent mode supports remote HTTP MCP servers
              natively (VS Code 1.99+).
            </p>
          </div>
          <div className="para-box">
            <h4>Step 1</h4>
            <p>
              Create <code>.vscode/mcp.json</code> in your workspace (note:
              top-level key is
              <code>servers</code>, not <code>mcpServers</code>):
            </p>
            {/* prettier-ignore */}
            <CodeBlock language="json" code={`{
  "servers": {
    "think4ever": {
      "type": "http",
      "url": "https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp",
      "headers": { "Authorization": "Bearer tf_71b84ebb8284f86491f24b85311a55dfd2b0c9e74c678c7e" }
    }
  }
}`} />
            <p>
              Or run <strong>MCP: Add Server</strong> from the Command Palette
              and pick <strong>HTTP</strong>. To make it available in every
              workspace, add it to your user configuration via{" "}
              <strong>MCP: Open User Configuration</strong>.
            </p>
          </div>
          <div className="para-box">
            <h4>Step 2</h4>
            <p>
              Open Copilot Chat in <strong>Agent</strong> mode and click the
              tools icon &mdash; the
              <code>think4ever</code> tools should be listed. Toggle on the ones
              you want active.
            </p>
          </div>
          <div className="para-box">
            <h4>Step 3</h4>
            <p>
              You can also reference tools directly in chat with <code>#</code>{" "}
              (e.g.
              <code>#list_tasks</code>) to force a specific call.
            </p>
          </div>
          <div className="para-box">
            <h4>💡 Tips</h4>
            <p>
              Add standing context to
              <code>.github/copilot-instructions.md</code> to keep Copilot
              aligned: &ldquo;
              <em>
                This project's specs, tasks and issues live in the think4ever
                MCP server; check the active concept before structural changes.
              </em>
              &rdquo;
            </p>
          </div>
          <div className="para-box">
            <h4>⚠️ Security Warning</h4>
            <p>
              Do not commit a real API token in a shared
              <code>.vscode/mcp.json</code> file. VS Code supports an{" "}
              <code>inputs</code> section that prompts for secrets and stores
              them securely&mdash;see the official VS Code MCP documentation for
              advanced secrets management.
            </p>
          </div>
          <div className="para-box">
            <h3>VS Code Copilot Use Cases &amp; Sample Prompts</h3>
            <p>
              Integrating think4ever with GitHub Copilot anchors agent mode
              directly to your specifications, allowing code creation,
              documentation, and task tracking to happen side-by-side inside
              your workspace.
            </p>
            <table className="config-table">
              <thead>
                <tr>
                  <th>Objective</th>
                  <th>Sample Prompt to Try</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Spec-Anchored Agent Runs</strong>
                  </td>
                  <td>
                    <em>
                      "Implement the think4ever requirement 'Bulk user import'
                      in this workspace; follow the stored API contract and ask
                      me before schema changes."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Direct Tool Calls with #</strong>
                  </td>
                  <td>
                    <em>
                      "Try #get_active_concept &mdash; then implement the
                      missing validation this concept block requires."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>The Task Board in Copilot Chat</strong>
                  </td>
                  <td>
                    <em>
                      "List my open think4ever tasks for this project, then mark
                      task 87 as in progress and link this branch in a comment."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Designs to Components, with Tests</strong>
                  </td>
                  <td>
                    <em>
                      "Fetch the 'Settings page' UI design from think4ever and
                      build it with our component library, following the
                      think4ever design contract."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Rule-Aware Refactors</strong>
                  </td>
                  <td>
                    <em>
                      "Refactor this billing service, but first pull the
                      think4ever business rules attached to billing &mdash; the
                      refactor must violate none of them."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Problems Panel &rarr; Tracked Issues</strong>
                  </td>
                  <td>
                    <em>
                      "Create think4ever issues for the three TypeScript errors
                      you just found &mdash; one per root cause, with file and
                      line references."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Cross-Source Answers</strong>
                  </td>
                  <td>
                    <em>
                      "Compare our local config with the deployment config
                      stored in think4ever files and list every difference that
                      matters."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Drift Check Before Merge</strong>
                  </td>
                  <td>
                    <em>
                      "Check this branch against the think4ever concept and API
                      contracts: flag drift, and update the spec where our
                      change is the new truth."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Onboarding Inside the Editor</strong>
                  </td>
                  <td>
                    <em>
                      "I'm new to this codebase &mdash; read the think4ever
                      concept and give me a tour of how this workspace
                      implements it."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>PR Descriptions with Spec Links</strong>
                  </td>
                  <td>
                    <em>
                      "Draft a PR description for this diff referencing the
                      think4ever tasks it closes and the requirements it
                      implements."
                    </em>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerMcpVscode;
