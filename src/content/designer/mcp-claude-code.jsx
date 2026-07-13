import React from "react";

const DesignerMcpClaudeCode = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Claude Code</h1>

        <section>
          <div className="para-box">
            <p>
              <strong>Claude Code</strong> natively supports remote HTTP MCP
              servers, allowing it to interface directly with your think4ever
              project architecture without requiring a local bridge.
            </p>
          </div>
          <div className="para-box">
            <h4>Technical Integration</h4>
            <p>
              Follow these configuration steps to connect the platform context
              directly to Claude Code via your terminal or repository settings.
            </p>
          </div>
          <div className="para-box">
            <h4>Add the Server via Terminal</h4>
            <p>
              Run the following initialization command in your terminal to
              register the think4ever MCP server globally or locally:
            </p>
            <div>
              <img
                alt="Claude Code"
                src="/assets/images/mcp/mcp-claude-code.png"
              />
            </div>
          </div>
          <div className="para-box">
            <h3>Claude Code (CLI)</h3>
            <p>
              Claude Code supports remote HTTP MCP servers natively &mdash; no
              bridge needed.
            </p>
          </div>
          <div className="para-box">
            <h4>Step 1</h4>
            <p>Add the server (run in your terminal):</p>
            <div className="code-block-wrapper">
              <div className="code-block-header">
                <div className="code-block-header-left">
                  <div className="code-block-dots">
                    <span className="code-block-dot dot-red"></span>
                    <span className="code-block-dot dot-yellow"></span>
                    <span className="code-block-dot dot-green"></span>
                  </div>
                  <span className="code-block-lang">BASH</span>
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
                  claude mcp add think4ever \ --transport http
                  https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp \
                  --header{" "}
                  <span className="code-string">
                    "Authorization: Bearer
                    tf_71b84ebb8284f86491f24b85311a55dfd2b0c9e74c678c7e"
                  </span>
                </code>
              </pre>
            </div>
            <ul>
              <li>
                <strong>Global Access:</strong>
                <span>
                  Append <code>--scope user</code> to make the think4ever tools
                  available across all of your projects.
                </span>
              </li>
              <li>
                <strong>Project Specific:</strong>
                <span>
                  Append <code>--scope project</code> to write a shared{" "}
                  <code>.mcp.json</code> file into your active repository root.
                </span>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h4>Step 2</h4>
            <p>Verify:</p>
            <div className="code-block-wrapper">
              <div className="code-block-header">
                <div className="code-block-header-left">
                  <div className="code-block-dots">
                    <span className="code-block-dot dot-red"></span>
                    <span className="code-block-dot dot-yellow"></span>
                    <span className="code-block-dot dot-green"></span>
                  </div>
                  <span className="code-block-lang">BASH</span>
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
                  claude mcp list
                  <span className="code-comment">
                    # then, inside Claude Code, run:
                  </span>
                  /mcp
                </code>
              </pre>
            </div>
          </div>
          <div className="para-box">
            <h4>Step 3</h4>
            <p>
              Or commit a project config file <code>.mcp.json</code> at the repo
              root:
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
                  <span className="code-keyword">"type"</span>:{" "}
                  <span className="code-string">"http"</span>,
                  <span className="code-keyword">"url"</span>:{" "}
                  <span className="code-string">
                    "https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp"
                  </span>
                  ,<span className="code-keyword">"headers"</span>: &#123;
                  <span className="code-keyword">"Authorization"</span>:{" "}
                  <span className="code-string">
                    "Bearer tf_71b84ebb8284f86491f24b85311a55dfd2b0c9e74c678c7e"
                  </span>
                  &#125; &#125; &#125; &#125;
                </code>
              </pre>
            </div>
            <p
              style={{
                marginTop: "16px",
                color: "#475569",
                fontFamily: "Inter&quot;, sans-serif",
                lineHeight: "1.6",
              }}
            >
              <strong>Tip:</strong> Mention the think4ever project by name (or
              ID) in your first prompt so the agent calls{" "}
              <code>list_projects</code> / <code>get_project</code> and anchors
              itself. You can also add a line to your <code>CLAUDE.md</code>{" "}
              like &ldquo;Project specs live in think4ever project #163 &mdash;
              read the active concept before large changes.&rdquo;
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerMcpClaudeCode;
