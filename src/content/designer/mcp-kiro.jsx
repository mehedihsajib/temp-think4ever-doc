import React from "react";

const DesignerMcpKiro = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Kiro (Amazon Agentic IDE)</h1>

        <section>
          <div className="para-box">
            <p>
              This section guides you through connecting the{" "}
              <strong>Kiro Agentic IDE</strong> to the platform using the Model
              Context Protocol (MCP). Kiro is spec-driven by
              design&mdash;mapping requirements, designs, and tasks directly to
              the platform's structure so that your development specs are
              derived directly from the global product standard rather than
              written from scratch.
            </p>
            <div>
              <img alt="Kiro" src="/assets/images/mcp/mcp-kiro.png" />
            </div>
            <p>
              <strong>Prerequisites &amp; Access Token Generation</strong>
            </p>
            <p>
              Before configuring Kiro, you must generate a secure access token.
              This token serves as your REST API key and authenticates your MCP
              session.
            </p>
            <ul>
              <li>
                Navigate to the <strong>MCP &mdash; Kiro</strong> dashboard.
              </li>
              <li>
                Click the blue <strong>Create token</strong> button located in
                the upper-right corner of the instruction panel.
              </li>
              <li>Copy the generated token immediately.</li>
            </ul>
          </div>
          <div className="para-box">
            <p>
              ⚠️ <strong>Important Security Note:</strong> The token
              configuration snippet fills in automatically upon creation and is
              only displayed once. Do not commit a real token inside a workspace
              configuration on a shared repository. Prefer using the user-level
              file in your home directory instead.
            </p>
          </div>
          <div className="para-box">
            <h4>Configuration Setup</h4>
            <p>
              Kiro configures MCP servers in{" "}
              <code>~/.kiro/settings/mcp.json</code> (user, all projects) or{" "}
              <code>.kiro/settings/mcp.json</code> (workspace). Use the{" "}
              <code>mcp-remote</code> bridge for the remote HTTP endpoint
              (requires Node.js for <code>npx</code>).
            </p>
          </div>
          <div className="para-box">
            <h4>Step 1</h4>
            <p>
              Add this to the settings file (or open the{" "}
              <strong>MCP Servers</strong> view in Kiro's feature panel and edit
              the config from there):
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
                  <span className="code-keyword">"command"</span>:{" "}
                  <span className="code-string">"npx"</span>,
                  <span className="code-keyword">"args"</span>: [
                  <span className="code-string">"-y"</span>,{" "}
                  <span className="code-string">"mcp-remote"</span>,{" "}
                  <span className="code-string">
                    "https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp"
                  </span>
                  ,<span className="code-string">"--header"</span>,{" "}
                  <span className="code-string">
                    "Authorization: Bearer tf_YOUR_TOKEN"
                  </span>
                  ],
                  <span className="code-keyword">"disabled"</span>:{" "}
                  <span className="code-boolean">false</span>,
                  <span className="code-keyword">"autoApprove"</span>: [] &#125;
                  &#125; &#125;
                </code>
              </pre>
            </div>
            <p>
              Add tool names to <code>autoApprove</code> (e.g.
              <code>"list_projects"</code>, <code>"get_concept"</code>) to let
              Kiro call them without asking each time.
            </p>
          </div>
          <div className="para-box">
            <h4>Step 2</h4>
            <p>
              Kiro picks up config changes automatically (or reconnect from the{" "}
              <strong>MCP Servers</strong> view); the <code>think4ever</code>{" "}
              tools become available in chat and specs.
            </p>
          </div>
          <div className="para-box">
            <h4>Step 3</h4>
            <p>
              For standing behavior, add a steering file in{" "}
              <code>.kiro/steering/</code> telling Kiro to treat think4ever as
              the source of specs and work items.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerMcpKiro;
