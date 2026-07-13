import CodeBlock from "../../components/CodeBlock";
import React from "react";

const DesignerMcpClaudeDesktop = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Claude Desktop</h1>

        <section>
          <div className="para-box">
            <p>
              Claude Desktop runs local (stdio) servers natively. To connect to
              think4ever's remote HTTP server, Claude Desktop utilizes the
              mcp-remote bridge utility via Node.js to bridge the communication
              transport layer.
            </p>
            <div>
              <img
                alt="Claude Desktop"
                src="/assets/images/mcp/mcp-claude-desktop.png"
              />
            </div>
          </div>
          <div className="para-box">
            <h4>Technical Integration</h4>
            <p>
              Follow these configuration steps to register the think4ever MCP
              server within your Claude Desktop application.
            </p>
            <p>
              Desktop runs local (stdio) servers, so use the 
              <code>mcp-remote</code> bridge (requires Node.js for npx).
            </p>
          </div>
          <div className="para-box">
            <h4>Step 1</h4>
            <p>
              Edit <code>claude_desktop_config.json</code> (Settings &rarr;
              Developer &rarr; Edit Config):
            </p>
            {/* prettier-ignore */}
            <CodeBlock language="json" code={`{
  "mcpServers": {
    "think4ever": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp",
               "--header", "Authorization: Bearer tf_71b84ebb8284f86491f24b85311a55dfd2b0c9e74c678c7e"]
    }
  }
}`} />
          </div>
          <div className="para-box">
            <h4>Step 2</h4>
            <p>
              Restart Claude Desktop &mdash; the <code>think4ever</code> tools
              appear in the tools menu. (On Pro/Team, you can alternatively add
              it as a custom Connector in settings.)
            </p>
          </div>
          <div className="para-box">
            <h4>Step 3</h4>
            <p>
              Start a chat and mention your project &mdash; Claude will ask
              permission the first time it uses each tool.
            </p>
          </div>
          <div className="para-box">
            <h4>💡 Who is this for?</h4>
            <p>
              Claude Desktop is specifically optimized for the non-coding side
              of a project workspace. It provides product owners, business
              analysts, and project leads a straightforward way to interact with
              the project structure, review concepts, plan work sprint
              schedules, and triage issues without launching a code editor.
            </p>
          </div>
          <div className="para-box">
            <h3>Claude Desktop Use Cases &amp; Sample Prompts</h3>
            <p>
              By connecting Claude Desktop to think4ever, the platform spec
              becomes an interactive asset for stakeholders, analysts, and
              leadership to keep design, business logic, and project management
              tasks in total sync.
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
                    <strong>Project Status Digest</strong>
                  </td>
                  <td>
                    <em>
                      "Summarize the current state of my think4ever project
                      &mdash; what's open, what changed this week, what's
                      blocked and why."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Meeting Notes &rarr; Tasks</strong>
                  </td>
                  <td>
                    <em>
                      "Here are today's standup notes &mdash; create think4ever
                      tasks for each action item with sensible priorities and
                      assignees."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Concept Walkthroughs</strong>
                  </td>
                  <td>
                    <em>
                      "Walk me through the think4ever concept layer by layer and
                      point out anything underspecified or contradictory."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Draft Requirements Together</strong>
                  </td>
                  <td>
                    <em>
                      "We discussed a referral program &mdash; draft it as a
                      think4ever technical requirement with acceptance criteria,
                      linked to the loyalty concept block."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Issue Triage Sessions</strong>
                  </td>
                  <td>
                    <em>
                      "Go through the open think4ever issues, group duplicates,
                      set priorities, add triage comments explaining the call,
                      and propose a priority for each."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Flows in Plain Language</strong>
                  </td>
                  <td>
                    <em>
                      "Explain the onboarding flow from think4ever in plain
                      words I can show to the client, and flag any step that
                      overlaps with the signup flow."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Weekly Change Review</strong>
                  </td>
                  <td>
                    <em>
                      "List this week's think4ever concept changes and summarize
                      for the steering meeting what was added, what changed, and
                      why it matters."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Sprint Planning from Board</strong>
                  </td>
                  <td>
                    <em>
                      "Plan next sprint from the open think4ever tasks: propose
                      scope and priorities, flag overload, then update the task
                      priorities we agree on."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Executive Narratives</strong>
                  </td>
                  <td>
                    <em>
                      "Using the think4ever concept, write a one-page brief for
                      the board describing the product's current scope, recent
                      progress, and open risks."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Client Sign-Off Prep</strong>
                  </td>
                  <td>
                    <em>
                      "Prepare a sign-off summary of the think4ever concept for
                      the client: flows, screens, and business rules in
                      non-technical language."
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

export default DesignerMcpClaudeDesktop;
