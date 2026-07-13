import React from "react";

const DesignerMcpOverview = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Overview</h1>

        <section>
          <div className="para-box">
            <p>
              The <strong>MCP Connect &amp; Tools</strong> panel allows users to
              connect external AI clients (coding agents, IDE extensions, or
              terminal assistants) to the platform using the{" "}
              <strong>Model Context Protocol (MCP)</strong>. By serving as a
              centralized context and tool provider, it ensures that any
              connected AI client has direct, real-time access to the product
              spec, concept blocks, data models, tasks, and requirements.
            </p>
            <div>
              <img
                alt="MCP Overview"
                src="/assets/images/mcp/mcp-overview.png"
              />
            </div>
          </div>
          <div className="para-box">
            <h3>Top Navigation &amp; Action Bar</h3>
            <ul>
              <li>
                <strong>Breadcrumb Navigation:</strong>
                <span>
                  Shows the current location or path within the workspace
                </span>
              </li>
              <li>
                <strong>Header Section:</strong>
                <span>
                  Displays the main title MCP Connect &amp; Tools alongside a
                  brief subtitle explaining that AI clients connect via MCP
                  using the same token as the REST API.
                </span>
              </li>
              <li>
                <strong>Token Management:</strong>
                <span>
                  * A blue "Create token" button is located in the upper right
                  corner.
                </span>
                <ul>
                  <li>
                    An informational banner reminds users that the setup
                    snippets below populate automatically once a token is
                    generated, and that the token is only shown once.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Credits &amp; Profile:</strong>
                <span>
                  Displays available credits (e.g., Credits 15,941) and a toggle
                  to "Switch to
                  <strong>Developer Mode.</strong>"
                </span>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h3>
              Technical Setup &amp; Connection Details ("What is thinkMCP")
            </h3>
            <p>
              This section provides the exact technical configuration details
              required to link an external AI client to the platform&rsquo;s MCP
              server.
            </p>
            <ul>
              <li>
                <strong>Server Endpoint Details:</strong>
                <ul>
                  <li>
                    <strong>Endpoint:</strong>
                    <span>
                      The dedicated URL string for the MCP connection{" "}
                      <em>
                        (e.g.,
                        https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp).
                      </em>
                    </span>
                  </li>
                  <li>
                    <strong>Transport Type:</strong>
                    <span>
                      Specifies Streamable HTTP as the single HTTPS endpoint
                      transport mechanism.
                    </span>
                  </li>
                  <li>
                    <strong>Auth:</strong>
                    <span>
                      Specifies the authentication header format{" "}
                      <em>(Authorization: Bearer tf_...).</em>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Connection Instructions:</strong>
                <ul>
                  <li>
                    <strong>Create a token:</strong>
                    <span>
                      Generate a token via the top bar or API -&gt; Access
                      Tokens. Recommended scopes for MCP are{" "}
                      <code>read + write + agents:submit</code>.
                    </span>
                  </li>
                  <li>
                    <strong>Add the server to your client:</strong>
                    <span>
                      Configure the endpoint and token within your chosen AI
                      tool{" "}
                      <em>
                        (e.g., Claude Code, Cursor, VS Code, Windsurf, Gemini
                        CLI, etc.).
                      </em>
                    </span>
                  </li>
                  <li>
                    <strong>Verify the tools load:</strong>
                    <span>
                      Navigate to the Tools &amp; Test menu entry to list active
                      tools and run a live check.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Compatibility Warning Note:</strong>
                <span>
                  A highlighted warning banner alerts users that native
                  remote-HTTP MCP support varies by client. If a client only
                  supports local (stdio) servers, users should use the
                  mcp-remote-bridge or check client-specific documentation.
                </span>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h3>How to Create a Token</h3>
            <p>
              To connect your external AI clients (like coding agents, IDE
              extensions, or terminal assistants) to think4ever via the Model
              Context Protocol (MCP), you must first generate a secure access
              token.
            </p>
          </div>
          <div className="para-box">
            <h4>Accessing the Creation Utility</h4>
            <p>
              Navigate to the <strong>MCP Connect &amp; Tools</strong> section
              using the left sidebar menu under the active project workspace.
            </p>
          </div>
          <div className="para-box">
            <h4>Step-by-Step Generation</h4>
            <p>
              <strong>Locate the Action Button:</strong> Find the blue Create
              token button located in the upper right-hand corner of the main
              dashboard area.
            </p>
            <div>
              <img alt="MCP Token" src="/assets/images/mcp/mcp-token.png" />
            </div>
            <p>
              <strong>Copy the Value Immediately:</strong> for the green success
              banner titled "Token created &mdash; copy it now; it won't be
              shown again."
            </p>
            <p>
              <strong>Secure the Token:</strong> Click the Copy button next to
              the text field displaying your new token string (e.g.,
              tf_71b84ebb8284f...).
            </p>
            <p>
              ⚠️ <strong>Important Security Note:</strong> This token is only
              shown once upon creation for security purposes. Make sure to paste
              it directly into your AI client configuration or save it securely
              immediately. If you lose it, you will need to generate a new one.
            </p>
          </div>
          <div className="para-box">
            <h3>Token Scope &amp; Management</h3>
            <p>
              <strong>Recommended Scopes:</strong> For a typical MCP
              configuration, the token uses
              <code>read + write + agents:submit</code> permissions by default.
              You can restrict the token to specific projects if needed during
              manual creation.
            </p>
            <p>
              <strong>Revoking and Managing:</strong> If you ever need to audit,
              manage, or revoke existing tokens, navigate to the top-bar
              settings or follow the path{" "}
              <strong>API &rarr; Access Tokens.</strong>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerMcpOverview;
