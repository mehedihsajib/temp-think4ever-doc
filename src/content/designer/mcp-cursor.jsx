import React from "react";

const DesignerMcpCursor = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Cursor</h1>

        <section>
          <div className="para-box">
            <p>
              Cursor supports remote HTTP MCP servers natively using an{" "}
              <code>mcp.json</code>
              configuration file. This allows Cursor's Composer or Agent mode to
              reference your product specifications seamlessly as you edit code.
            </p>
            <div>
              <img alt="Cursor" src="/assets/images/mcp/mcp_cursor.png" />
            </div>
          </div>
          <div className="para-box">
            <h4>Technical Integration</h4>
            <p>
              Follow these configuration steps to register the think4ever MCP
              server within your Cursor IDE environment.
            </p>
          </div>
          <div className="para-box">
            <h4>Step 1</h4>
            <p>
              Add to <code>~/.cursor/mcp.json</code> (global) or{" "}
              <code>.cursor/mcp.json</code> (per project):
            </p>
            <div className="code-block-wrapper">
              <div className="code-block-header">
                <div className="code-block-header-left">
                  <div className="code-block-dots">
                    <span className="code-block-dot dot-red"></span>
                    <span className="code-block-dot dot-yellow"></span>
                    <span className="code-block-dot dot-green"></span>
                  </div>
                  <span className="code-block-lang">JSON</span>
                </div>
                <button
                  className="code-block-copy-btn"
                  onclick="copyToClipboard(this)"
                >
                  <i className="fa-regular fa-copy"></i> Copy
                </button>
              </div>
              <pre>
                <code>
                  &#123;
                  <span className="code-keyword">"mcpServers"</span>: &#123;
                  <span className="code-keyword">"think4ever"</span>: &#123;
                  <span className="code-keyword">"url"</span>:{" "}
                  <span className="code-string">
                    "https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp"
                  </span>
                  ,<span className="code-keyword">"headers"</span>: &#123;{" "}
                  <span className="code-keyword">"Authorization"</span>:{" "}
                  <span className="code-string">
                    "Bearer tf_71b84ebb8284f86491f24b85311a55dfd2b0c9e74c678c7e"
                  </span>{" "}
                  &#125; &#125; &#125; &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="para-box">
            <h4>Step 2</h4>
            <p>
              Open <strong>Settings &rarr; MCP</strong> in Cursor to confirm{" "}
              <code>think4ever</code> shows a green status and lists its tools.
            </p>
          </div>
          <div className="para-box">
            <h4>Step 3</h4>
            <p>
              Use it from <strong>Agent</strong> mode in the chat panel &mdash;
              Cursor decides when to call the tools, and asks before each call
              unless you enable auto-run for the server.
            </p>
          </div>
          <div className="para-box">
            <h4>Tips</h4>
            <p>
              Add a Cursor rule (<code>.cursor/rules</code>) such as &ldquo;
              <em>
                Product specs, tasks and issues live in the think4ever MCP
                server &mdash; consult the active concept before structural
                edits, and file issues there instead of TODO comments.
              </em>
              &rdquo;
            </p>
          </div>
          <div className="para-box">
            <h4>⚠️ Security Warning</h4>
            <p>
              Do not commit a real API token in a per-project
              <code>.cursor/mcp.json</code> file on a shared repository. Prefer
              using the global file in your home directory for private tokens.
            </p>
          </div>
          <div className="para-box">
            <h3>Cursor Use Cases &amp; Sample Prompts</h3>
            <p>
              Cursor operates human-in-the-loop directly inside your editor.
              Connecting it to think4ever allows every edit, refactor, and
              review to be driven by a centralized product brain.
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
                    <strong>UI Designs to Components</strong>
                  </td>
                  <td>
                    <em>
                      "Get the 'Customer Dashboard' UI design from think4ever
                      and implement it as a React page in this repo, matching it
                      pixel for pixel."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>The Design Contract, Enforced</strong>
                  </td>
                  <td>
                    <em>
                      "Fetch the think4ever design contract and restyle this
                      component to comply &mdash; colors, spacing, navigation,
                      and accessibility rules."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Concept as Living Context</strong>
                  </td>
                  <td>
                    <em>
                      "What does the think4ever concept say the notifications
                      module is responsible for? Does this file match it?"
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>ERD-Aware Edits</strong>
                  </td>
                  <td>
                    <em>
                      "Before we change this model, check the think4ever data
                      object for 'reservations' &mdash; relationships,
                      cardinalities, and sensitivities."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Rule Lookup Before Risky Edits</strong>
                  </td>
                  <td>
                    <em>
                      "Pull the think4ever business rules covering cancellations
                      before we change this function, and confirm the change
                      violates none of them."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Tasks Without Tab-Switching</strong>
                  </td>
                  <td>
                    <em>
                      "Create a think4ever task for refactoring this service,
                      medium priority, assigned to me &mdash; and link it to the
                      concept block it touches."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Inline Issue Filing</strong>
                  </td>
                  <td>
                    <em>
                      "File a think4ever issue: this query has an N+1 problem
                      &mdash; include this file and line in the description and
                      tag it performance."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Two-Way Sync</strong>
                  </td>
                  <td>
                    <em>
                      "We merged auth and sessions into one service &mdash;
                      update the think4ever concept blocks accordingly."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Day-One Ramp-Up</strong>
                  </td>
                  <td>
                    <em>
                      "I'm new here &mdash; walk me through the think4ever
                      concept for this project, then show me how this repo maps
                      to it."
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Spec-Cited Reviews</strong>
                  </td>
                  <td>
                    <em>
                      "Summarize this change set citing the think4ever
                      requirements and tasks it implements, ready to paste into
                      the PR."
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

export default DesignerMcpCursor;
