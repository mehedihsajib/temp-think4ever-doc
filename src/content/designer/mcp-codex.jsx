import CodeBlock from "../../components/CodeBlock";
import React from "react";

const DesignerMcpCodex = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Codex</h1>

        <section>
          <div className="para-box">
            <p>
              Codex configures MCP servers using a local configuration file. For
              a remote HTTP server like think4ever, Codex utilizes the{" "}
              <code>mcp-remote</code> bridge utility to translate the HTTP
              endpoint into its local transport protocol.
            </p>
            <div>
              <img alt="Codex" src="/assets/images/mcp/mcp-codex.png" />
            </div>
          </div>
          <div className="para-box">
            <h4>Technical Integration</h4>
            <p>
              Follow these steps to add the think4ever MCP server to your local
              Codex environment.
            </p>
          </div>
          <div className="para-box">
            <h4>Codex (OpenAI CLI)</h4>
            <p>
              Codex configures MCP servers in <code>~/.codex/config.toml.</code>{" "}
              For a remote HTTP server, use the mcp-remote bridge (it turns the
              HTTP endpoint into the local transport Codex speaks).
            </p>
          </div>
          <div className="para-box">
            <h4>Step 1</h4>
            <p>
              Add this block to <code>~/.codex/config.toml</code>:
            </p>
            {/* prettier-ignore */}
            <CodeBlock language="toml" code={`[mcp_servers.think4ever]
command = "npx"
args = [
  "-y", "mcp-remote",
  "https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp",
  "--header", "Authorization: Bearer tf_71b84ebb8284f86491f24b85311a55dfd2b0c9e74c678c7e"
]`} />
          </div>
          <div className="para-box">
            <h4>Step 2</h4>
            <p>
              Requires Node.js (for <code>npx</code>). Restart Codex; the{" "}
              <code>think4ever</code> tools become available to the agent.
            </p>
          </div>
          <div className="para-box">
            <h4>Step 3</h4>
            <p>
              Verify inside a Codex session &mdash; ask it to list its available
              tools, or just give it a think4ever-touching instruction and watch
              the tool calls.
            </p>
          </div>
          <div className="para-box">
            <h4>Tips</h4>
            <p>
              Codex reads <code>AGENTS.md</code> for standing instructions
              &mdash; add a line like &ldquo;
              <em>
                Specs and tasks live in think4ever(MCP server think4ever); read
                the active concept before structural changes.
              </em>
              &rdquo; so every session starts anchored.
            </p>
          </div>
          <div className="para-box">
            <h3>Codex Use Cases &amp; Sample Prompts</h3>
            <p>
              Codex is designed for autonomous, sandboxed runs and parallel
              cloud tasks. Using the think4ever MCP server keeps these
              standalone tasks completely aligned with your central product
              specifications.
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
                    <strong>Spec-First Autonomous Runs</strong>
                  </td>
                  <td>
                    <em>
                      "Implement the think4ever technical requirement 'CSV
                      export' end-to-end, tests included, and mark it
                      implemented when the suite passes."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Parallel Runs</strong>
                  </td>
                  <td>
                    <em>
                      "For each open think4ever task labeled 'api', implement
                      the stored API contract exactly &mdash; don't invent
                      fields that aren't in the spec."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Batch Through Backlog</strong>
                  </td>
                  <td>
                    <em>
                      "Work through all open think4ever tasks labeled 'small';
                      set each to done or blocked with a comment explaining the
                      outcome."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Repro &amp; Fix from Issues</strong>
                  </td>
                  <td>
                    <em>
                      "Take think4ever issue #42, reproduce it, fix it, and
                      comment on the issue with exactly what you changed and
                      why."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Greenfield from Concept</strong>
                  </td>
                  <td>
                    <em>
                      "Read the think4ever concept and tech stack, then
                      bootstrap this empty repo to match &mdash; structure,
                      dependencies, and base modules."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Compliance Sweep</strong>
                  </td>
                  <td>
                    <em>
                      "Audit this codebase against every named business rule in
                      think4ever and file a think4ever issue for each violation
                      you find."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Drift Report</strong>
                  </td>
                  <td>
                    <em>
                      "Compare this repo against the think4ever concept and
                      produce a drift report: code without spec, spec without
                      code, and contracts that don't match."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Role-Access Enforcement</strong>
                  </td>
                  <td>
                    <em>
                      "Check every route in this app against the think4ever
                      roleAccess definitions and fix any missing permission
                      checks."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Log-Driven Diagnosis</strong>
                  </td>
                  <td>
                    <em>
                      "Fetch the latest think4ever developer logs and tell me
                      why last night's build agent failed, then fix the cause."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Document What It Built</strong>
                  </td>
                  <td>
                    <em>
                      "After finishing, create a think4ever technical
                      requirement documenting the new module's behavior and link
                      it to the task you completed."
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

export default DesignerMcpCodex;
