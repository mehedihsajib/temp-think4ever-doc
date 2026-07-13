import CodeBlock from "../../components/CodeBlock";
import React from "react";

const DesignerMcpGemini = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Gemini CLI Integration Manual (Model Context Protocol)</h1>

        <section>
          <div className="para-box">
            <p>
              This section guides you through connecting the{" "}
              <strong>Gemini CLI</strong> to the platform using the Model
              Context Protocol (MCP). Connecting your client allows a terminal
              agent to leverage a large context window over your entire project
              toolchain to analyze requirements, track tasks, and audit code
              repositories.
            </p>
            <div>
              <img alt="Gemini CLI" src="/assets/images/mcp/mcp-gemini.png" />
            </div>
            <p>
              <strong>Prerequisites &amp; Access Token Generation</strong>
            </p>
            <p>
              Before configuring the CLI, you must generate a secure access
              token. This token serves as your REST API key and authenticates
              your MCP session.
            </p>
            <ul>
              <li>
                Navigate to the MCP &mdash; <strong>Gemini CLI</strong>{" "}
                dashboard.
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
              only displayed once. Do not commit your active token to a shared
              repository. If you are using a per-project configuration file
              within a shared repository, prefer using a global file in your
              home directory instead.
            </p>
          </div>
          <div className="para-box">
            <h4>Configuration Setup</h4>
            <p>
              Gemini CLI reads its server profiles from a JSON configuration
              file. You can define this configuration globally or on a
              per-project basis.
            </p>
            <p>
              <strong>Configuration File Paths</strong>
            </p>
            <ul>
              <li>
                <strong>Global Configuration:</strong>
                <code>~/.gemini/settings.json</code>
              </li>
              <li>
                <strong>Per-Project Configuration:</strong>
                <code>./.gemini/settings.json</code>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h4>JSON Configuration Block</h4>
            <p>
              Add the following block to your settings.json file, replacing
              tf_YOUR_TOKEN with the access token you generated:
            </p>
            <p>
              Gemini CLI configures MCP servers in{" "}
              <code>~/.gemini/settings.json</code> (global) or 
              <code>.gemini/settings.json</code> (per project) and supports
              remote HTTP servers via httpUrl.
            </p>
          </div>
          <div className="para-box">
            <h4>Step 1</h4>
            <p>Add this to the settings file:</p>
            {/* prettier-ignore */}
            <CodeBlock language="json" code={`{
  "mcpServers": {
    "think4ever": {
      "httpUrl": "https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp",
      "headers": { "Authorization": "Bearer tf_YOUR_TOKEN" }
    }
  }
}`} />
          </div>
          <div className="para-box">
            <h4>Step 2</h4>
            <p>
              Restart Gemini CLI and run <code>/mcp</code> to confirm the{" "}
              <code>think4ever</code> server is connected and its tools are
              listed.
            </p>
          </div>
          <div className="para-box">
            <h4>Step 3</h4>
            <p>
              Use <code>/mcp desc</code> to see tool descriptions, and mention
              think4ever in your prompt so the model reaches for the right
              tools.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerMcpGemini;
