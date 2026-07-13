import React from 'react';

const DesignerThinkMcp = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">Think MCP</h1>

<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<h3 className="h3">Overview</h3>
<p>
              The <strong>Think MCP Console</strong> implements the
              open-source Model Context Protocol (MCP) standard directly into
              Think4Ever&rsquo;s integration framework via the Connect &amp; Tools
              panel. Think MCP serves as a secure, live communication bridge,
              exposing the platform's architectural design capabilities as
              standard tools that an external AI client can call dynamically.
            </p>
<p style={{marginTop: '20px'}}>
              Instead of operating in an isolated terminal workspace without
              structural awareness, external AI development assistants can
              connect directly to this single HTTPS endpoint. This unified
              context layer allows local agents to safely query project
              properties, database objects, and active milestones, ensuring
              all generated code remains strictly aligned with the centralized
              blueprint.
            </p>
<div className="image-wrapper">
<img alt="MCP Overview" className="demo-img" src="/assets/images/mcp-overview.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">Technical Protocol Architecture</h4>
<p>
              Think MCP functions natively as an <strong>MCP Server</strong>,
              utilizing an optimized
              <strong>Streamable HTTP</strong> transport mechanism to
              communicate with external applications.
            </p>
</div>
<div className="para-box">
<h4 className="h4">Global Endpoint Metadata</h4>
<ul className="cd-overview-ul">
<li>
<strong>MCP Server Endpoint Route:</strong>
<span>https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp
                </span>
</li>
<li>
<strong>Transport Protocol Type:</strong>
<span>Streamable HTTP </span>
</li>
</ul>
</div>
<div className="para-box">
<h4 className="h4">Universal Core Method Set</h4>
<p style={{marginTop: '20px'}}>
              Once an external developer tool binds to the server interface,
              it automatically inherits programmatic context capabilities
              spanning the entire platform architecture:
            </p>
<ul className="cd-overview-ul">
<li>
<strong>Project Models: </strong>
<span>list_projects, get_project, list_concepts, and
                  get_concept_flow.
                </span>
</li>
<li>
<strong>Block System Engineering:</strong>
<span>list_concept_blocks, get_concept_block, add_concept_block,
                  and update_concept_block.
                </span>
</li>
<li>
<strong>Milestone Coordination:</strong>
<span>list_tasks, get_task, create_task, and set_task_status.
                </span>
</li>
<li>
<strong>Agent Infrastructure Execution:</strong>
<span>submit_agent_run and list_folders. </span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">Establishing Connection Authentication</h3>
<p>
              The Think MCP engine shares its underlying authentication token
              pool with the core REST API layer. To connect an external
              development client safely, complete the following procedural
              phases:
            </p>
</div>
<div className="para-box">
<h4 className="h4">Step 1: Create a Secure Token</h4>
<p>
              Navigate to either the platform's global top bar configuration
              panel or navigate through API $\rightarrow$ Access Tokens.
              Alternatively, click the blue Create token action element
              positioned inside the header layout of the MCP Console tab.
            </p>
</div>
<div className="para-box">
<h4 className="h4">Recommended Token Security Scopes</h4>
<p>
              For typical local client integrations, configuring your token
              with a combined permission layer of read + write + agents:submit
              is highly recommended to support automated code asset
              verification. For increased team security, toggle access
              constraints to explicitly restrict the key's authorization scope
              to your active project instance exclusively.
            </p>
</div>
<div className="para-box">
<h4 className="h4">Step 2: Register the Server inside Your Client</h4>
<p>
              Copy the auto-generated connection string parameters from the
              console tab window, then access your local development
              application configurations to attach the remote Think MCP URL
              alongside your secure bearer key string (tf_YOUR_TOKEN).
            </p>
</div>
<div className="para-box">
<h4 className="h4">Step 3: Execute Connection Diagnostics</h4>
<p>
              Open the <strong>Tools &amp; test</strong> sub-tab inside your
              workspace panel. Trigger a live connection verification pass to
              force-list available system schemas and ensure the background
              RPC channel is functioning flawlessly.
            </p>
</div>
<div className="para-box">
<h3 className="h3">Think MCP &amp; Claude Code Integration Manual</h3>
<p>
              The <strong>Think MCP Console</strong> seamlessly connects
              native terminal assistants to your centralized project workspace
              using the open-source Model Context Protocol (MCP) standard. By
              linking <strong>Claude Code (CLI)</strong> directly to your live
              environment, you provide your local AI engineer with complete
              context over your application's architecture, data models, and
              milestones, eliminating isolated or broken code generation.
            </p>
<div className="image-wrapper">
<img alt="Claude Code Integration" className="demo-img" src="/assets/images/mcp-claude-cli.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">Establishing Client Authentication</h4>
<p>
              Think MCP and the standard REST API draw from a unified token
              pool. Before running terminal commands, you must provision an
              access token to authorize your local client.
            </p>
<ul className="cd-overview-ul">
<li>
<strong>Token Provisioning:</strong>
<span>Navigate to the top bar of the platform interface or head
                  to API $\rightarrow$ <strong>Access Tokens</strong>.
                  Alternatively, use the <strong>Create token</strong> button
                  inside your current console workspace.
                </span>
</li>
<li>
<strong>Recommended Scopes:</strong>
<span>For seamless Claude Code synchronization, ensure your token
                  is granted read + write + agents:submit privileges</span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">Mounting Think MCP in Claude Code</h3>
<p>
              Claude Code supports remote HTTP MCP servers natively out of the
              box. You can register the Think4Ever server directly within your
              terminal workspace using two distinct methods.
            </p>
<div className="image-wrapper">
<img alt="Claude Code Integration" className="demo-img" src="/assets/images/mcp-claude-cli-2.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">Option A: Direct Terminal Registration</h4>
<p>
              Execute the following transport configuration sequence directly
              inside your active command-line terminal to register the server:
            </p>
<div className="image-wrapper">
<img alt="Claude Code Integration" className="demo-img" src="/assets/images/mcp-claude-cli-3.png"/>
</div>
<ul className="cd-overview-ul">
<li>
<strong> Global Access Scope: </strong>
<span>
                  Append the --scope user modifier flag to the end of the
                  command to make the Think4Ever server context universally
                  available across all terminal directories on your machine.
                </span>
<div className="image-wrapper">
<img alt="Claude Code Integration" className="demo-img" src="/assets/images/mcp-claude-cli-4.png"/>
</div>
</li>
<li>
<strong> Project Access Scope: </strong>
<span>
                  Append the --scope project modifier flag instead to write a
                  localized, shared environment bridge into your active
                  development folder.
                </span>
<div className="image-wrapper">
<img alt="Claude Code Integration" className="demo-img" src="/assets/images/mcp-claude-cli-4.png"/>
</div>
</li>
</ul>
</div>
<div className="para-box">
<h4 className="h4">
              Option B: Root Repository Configuration Manifest
            </h4>
<p>
              For engineering teams looking to standardize architectural
              context across multiple contributors, you can bypass manual
              terminal commands by committing a dedicated project config file
              named .mcp.json directly into the root directory of your source
              code repository:
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
<button className="code-block-copy-btn" onclick="copyToClipboard(this)">
<i className="fa-regular fa-copy"></i> Copy
                </button>
</div>
<pre><code>&#123;
  <span className="code-keyword">"mcpServers"</span>: &#123;
    <span className="code-keyword">"think4ever"</span>: &#123;
      <span className="code-keyword">"type"</span>: <span className="code-string">"http"</span>,
      <span className="code-keyword">"url"</span>: <span className="code-string">"https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp"</span>,
      <span className="code-keyword">"headers"</span>: &#123;
        <span className="code-keyword">"Authorization"</span>: <span className="code-string">"Bearer tf_YOUR_TOKEN"</span>
      &#125;
    &#125;
  &#125;
&#125;</code></pre>
</div>
</div>
<div className="para-box">
<h4 className="h4">Connection Verification Protocols</h4>
<p>
              Once you have applied your configuration via the terminal or a
              local JSON manifest, verify that the RPC connection channel is
              successfully initialized.
            </p>
<ul className="cd-overview-ul">
<li>
<strong>Step 1:</strong>
<span>
                  Run the protocol list command in your terminal to ensure the
                  client recognizes the tool mapping:
                </span>
<div className="image-wrapper">
<img alt="Agent and Task Interfaces" className="demo-img" src="/assets/images/mcp-claude-cli-6.png"/>
</div>
</li>
<li>
<strong> Step 2: </strong>
<span>Start a fresh interactive session with your assistant, and
                  run the inline diagnostic check to confirm live tool
                  synchronization:
                </span>
<p><strong>Bash / Claude Code Command:</strong></p>
<div className="code-block-wrapper">
<div className="code-block-header">
<div className="code-block-header-left">
<div className="code-block-dots">
<span className="code-block-dot dot-red"></span>
<span className="code-block-dot dot-yellow"></span>
<span className="code-block-dot dot-green"></span>
</div>
<span className="code-block-lang">Claude Code</span>
</div>
<button className="code-block-copy-btn" onclick="copyToClipboard(this)">
<i className="fa-regular fa-copy"></i> Copy
                    </button>
</div>
<pre><code>/mcp</code></pre>
</div>
<div className="image-wrapper">
<img alt="Agent and Task Interfaces" className="demo-img" src="/assets/images/mcp-claude-cli-7.png"/>
</div>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">Security &amp; Version Control Guardrails</h3>
<h4 className="h4">Operational Safety Notice</h4>
<p>
<strong>
                Never commit a live, unencrypted authentication token directly
                to a shared version control repository (such as public GitHub
                branches).
              </strong>
</p>
<p style={{marginTop: '20px'}}>
              If you are utilizing a committed <code>.mcp.json</code> file at
              your repository root to coordinate team environments, keep the
              token out of version control by running
              <code>claude mcp add --scope user</code>
              locally, or reference a secured local environment variable
              mapping (<code>$THINK4EVER_TOKEN</code>) within your client
              configuration strings instead.
            </p>
</div>
<div className="para-box">
<h3 className="h3">Troubleshooting Guide</h3>
<p>
              This centralized guide provides technical diagnostics,
              step-by-step resolution pathways, and error code definitions for
              both the <strong>Think API</strong> and
              <strong>Think MCP</strong> runtime environments. Follow these
              procedures if your automated scripts, continuous integration
              pipelines, or local AI terminal assistants fail to connect or
              execute tasks.
            </p>
</div>
<div className="para-box">
<h4 className="h4">Core API Status &amp; Error Code Reference</h4>
<p>
              When an external client or programmatic pipeline receives an
              error, parse the outer JSON response envelope ("ok": false) and
              examine the returned error.code against the official status
              matrix:
            </p>
<table className="config-table">
<thead>
<tr>
<th>HTTP Status</th>
<th>error.code</th>
<th>Meaning / Core Resolution Context</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>400 </strong>
</td>
<td>BAD_REQUEST</td>
<td>
<strong>Missing/Invalid parameters:</strong> The request
                    body payload or query string variables fail strict schema
                    validation.
                  </td>
</tr>
<tr>
<td>
<strong>401 </strong>
</td>
<td>UNAUTHORIZED</td>
<td>
<strong>Missing/invalid token:</strong> The required
                    Authorization header is missing, malformed, or the
                    cryptographic token does not match known records.
                  </td>
</tr>
<tr>
<td>
<strong>402 </strong>
</td>
<td>INSUFFICIENT_CREDITS</td>
<td>
<strong>Out of credits: </strong> Programmatic agent
                    initializations and pipeline execution queues require
                    active server resource capacity and are gated by your
                    remaining account balance.
                  </td>
</tr>
<tr>
<td>
<strong>403 </strong>
</td>
<td>FORBIDDEN</td>
<td>
<strong>Token missing a scope / project mismatch:
                    </strong>
                    The token signature is authenticated, but it lacks the
                    necessary method privileges or project-level boundaries
                    required for the request.
                  </td>
</tr>
<tr>
<td>
<strong>404 </strong>
</td>
<td>NOT_FOUND</td>
<td>
<strong>Resource missing or not accessible:</strong> The
                    target URL path, project ID, block component, or task
                    tracking identifier does not exist or has been deleted.
                  </td>
</tr>
<tr>
<td>
<strong>409 </strong>
</td>
<td>CONFLICT</td>
<td>
<strong>State conflict: </strong>
                    The payload introduces changes that conflict with the
                    current system state, such as attempting to inject an item
                    with a duplicate block ID.
                  </td>
</tr>
<tr>
<td>
<strong>500 </strong>
</td>
<td>INTERNAL</td>
<td>
<strong>Unexpected server error: </strong>
                    An unhandled exception occurred within the platform
                    engine. If this error persists, contact system support.
                  </td>
</tr>
</tbody>
</table>
</div>
<div className="para-box">
<p style={{marginTop: '20px'}}>
<strong>Resolving 401 UNAUTHORIZED Errors </strong>
</p>
<ul className="cd-overview-ul">
<li>
<strong>The Root Cause:</strong><span>The platform cannot validate your identity because the
                  token is expired, missing, or malformed.
                </span>
</li>
<li>
<strong>The Fix: </strong>
<ol>
<li>
                    Navigate to the Access Tokens manager tab inside the
                    console interface.
                  </li>
<li>
                    Confirm your token is active. If it has expired or been
                    revoked, generate a new bearer string.
                  </li>
<li>
                    Verify your script's HTTP header formatting. The token
                    must be passed exactly as follows (including the single
                    space after Bearer):
                  </li>
</ol>
</li>
</ul>
<div className="code-block-wrapper">
<div className="code-block-header">
<div className="code-block-header-left">
<div className="code-block-dots">
<span className="code-block-dot dot-red"></span>
<span className="code-block-dot dot-yellow"></span>
<span className="code-block-dot dot-green"></span>
</div>
<span className="code-block-lang">HTTP</span>
</div>
<button className="code-block-copy-btn" onclick="copyToClipboard(this)">
<i className="fa-regular fa-copy"></i> Copy
                </button>
</div>
<pre><code><span className="code-header-param">Authorization:</span> <span className="code-string">Bearer tf_YOUR_TOKEN</span></code></pre>
</div>
</div>
<div className="para-box">
<p style={{marginTop: '20px'}}>
<strong>Resolving 403 FORBIDDEN Errors </strong>
</p>
<ul className="cd-overview-ul">
<li>
<strong>The Root Cause:</strong><span>Your token is cryptographically authentic, but it lacks the
                  precise functional permission level (scope) or
                  project-specific access required to execute the action.
                </span>
</li>
<li>
<strong>The Fix: </strong>
<ol>
<li>
                    Check the Scope column in your console definitions to
                    identify the exact permission required for your target
                    endpoint (e.g., agents:submit or tasks:write).
                  </li>
<li>
                    Return to the <strong> Access Tokens </strong> tab and
                    provision a new token.
                  </li>
<li>
                    Explicitly check the necessary read/write method scopes
                    and make sure the token's project boundary matches the
                    active target project ID. For full local client
                    capabilities, configuring read + write + agents:submit is
                    highly recommended.
                  </li>
</ol>
</li>
</ul>
</div>
<div className="para-box">
<p style={{marginTop: '20px'}}>
<strong>Resolving 402 INSUFFICIENT_CREDITS Errors </strong>
</p>
<ul className="cd-overview-ul">
<li>
<strong>The Root Cause:</strong><span>The request is authorized, but the background multi-agent
                  compilation engine or execution queue has been throttled due
                  to an empty resource balance.
                </span>
</li>
<li>
<strong>The Fix: </strong>
<ol>
<li>
                    Check the top-right corner of the web interface workspace
                    to find your active <strong>Credits</strong> counter.
                  </li>
<li>
                    If your account balance is depleted, navigate to your
                    team's billing and subscription profile to allocate
                    additional infrastructure points before retrying queue
                    tasks.
                  </li>
</ol>
</li>
</ul>
</div>
<div className="para-box">
<p style={{marginTop: '20px'}}>
<strong>Resolving 400 BAD_REQUEST Errors </strong>
</p>
<ul className="cd-overview-ul">
<li>
<strong>The Root Cause:</strong><span>The request body structure or path variables failed
                  automated system parsing schemas.
                </span>
</li>
<li>
<strong>The Fix: </strong>
<ol>
<li>
                    Ensure you are not hardcoding outdated or mock parameter
                    records into your automated scripts.
                  </li>
<li>
                    You must fetch valid parameter keys dynamically from the
                    environment before submitting a task execution payload.
                    For example, query <code>/v1/agent-types</code> to pull a
                    valid <code>agent_type_id</code>, and fetch
                    <code>/v1/projects/:id/folders</code> to identify the
                    correct target <code>folder_id</code>.
                  </li>
</ol>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">Think MCP Client &amp; Transport Diagnostics</h3>
<p>
              If local developer utilities&mdash;such as Claude Code (CLI), Cursor,
              or Codex&mdash;fail to establish a connection loop with the Model
              Context Protocol background layer, run through these protocol
              checks.
            </p>
<p style={{marginTop: '20px'}}>
              Client Fails to Bind / Transport Socket Timeouts
            </p>
<ul className="cd-overview-ul">
<li>
<strong>The Root Cause:</strong>
<span>
                  Support for remote HTTP MCP server endpoints varies
                  depending on your IDE software and active build version.
                  Some third-party clients can only communicate natively using
                  local standard input/output (stdio) pipelines.
                </span>
</li>
<li>
<strong>The Fix:</strong>
<span>
                  If your client does not natively process streamable remote
                  HTTP transport connections, you must use an explicit Node.js
                  bridge to map stdio streams over to the live server
                  endpoint. Update your application's global configuration
                  file (e.g., <code>claude_desktop_config.json</code>) to
                  invoke the <code>mcp-remote</code> proxy module:
                </span>
</li>
</ul>
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
<button className="code-block-copy-btn" onclick="copyToClipboard(this)">
<i className="fa-regular fa-copy"></i> Copy
                </button>
</div>
<pre><code>&#123;
  <span className="code-keyword">"mcpServers"</span>: &#123;
    <span className="code-keyword">"think4ever"</span>: &#123;
      <span className="code-keyword">"command"</span>: <span className="code-string">"npx"</span>,
      <span className="code-keyword">"args"</span>: [
        <span className="code-string">"-y"</span>,
        <span className="code-string">"mcp-remote"</span>,
        <span className="code-string">"https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp"</span>,
        <span className="code-string">"--header"</span>,
        <span className="code-string">"Authorization: Bearer tf_YOUR_TOKEN"</span>
      ]
    &#125;
  &#125;
&#125;</code></pre>
</div>
</div>
<div className="para-box">
<h3 className="h3">Context Alignment Failures inside Claude Code</h3>
<p>
<strong>The Root Cause: </strong> The transport server setup was
              bound using highly restrictive localized scopes, which prevents
              the terminal assistant from fetching the architecture maps when
              you navigate away from a specific folder.
            </p>
<p style={{marginTop: '20px'}}>The Fix:</p>
<ul className="cd-overview-ul">
<li>
<strong>To make the server globally accessible:</strong>
<span>
                  If you want your system context universally available across
                  every terminal directory and codebase workspace on your
                  machine, register the tool with the user-level scope flag:
                </span>
<div style={{marginTop: '12px'}} className="code-block-wrapper">
<div className="code-block-header">
<div className="code-block-header-left">
<div className="code-block-dots">
<span className="code-block-dot dot-red"></span>
<span className="code-block-dot dot-yellow"></span>
<span className="code-block-dot dot-green"></span>
</div>
<span className="code-block-lang">Bash</span>
</div>
<button className="code-block-copy-btn" onclick="copyToClipboard(this)">
<i className="fa-regular fa-copy"></i> Copy
                    </button>
</div>
<pre><code>claude mcp add --transport http think4ever https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp --header "Authorization: Bearer tf_YOUR_TOKEN" --scope user</code></pre>
</div>
</li>
<li>
<strong>To isolate configuration states safely:</strong>
<span>
                  If you prefer to purposefully lock the API credentials to an
                  isolated repository so your team can collaborate securely
                  without leaking personal tokens, run the command with the
                  project-level scope flag instead. This writes a localized,
                  self-contained <code>.mcp.json</code> manifest directly into
                  the current repository root directory:
                </span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">Sandbox Connectivity Verification Checklist</h3>
<p>
              Use these three quick terminal diagnostics to completely rule
              out network firewalls, DNS routing blocks, or hidden syntax bugs
              before launching continuous delivery pipelines or complex
              multi-agent runs:
            </p>
</div>
<div className="para-box">
<h4 className="h4">Step 1: Base URL Cluster Ping</h4>
<p>
              Dispatch a clean head request from your local command line
              against your assigned workspace cluster instance path:
            </p>
<p style={{marginTop: '20px'}}>
<em>
                Verify that the cluster responds with an expected 200 OK or
                401 Unauthorized block payload to confirm that the endpoint is
                reachable from your network.
              </em>
</p>
</div>
<div className="para-box">
<h4 className="h4">Step 2: Live RPC Schema Enumeration</h4>
<p>
              Test your token validation accuracy and remote transport
              capabilities simultaneously by manually dispatching a raw
              JSON-RPC tools/list sequence over the streamable HTTP channel:
            </p>
<p style={{marginTop: '20px'}}>
<em>
                Verify that the cluster responds with an expected 200 OK or
                401 Unauthorized block payload to confirm that the endpoint is
                reachable from your network.
              </em>
</p>
<div className="code-block-wrapper">
<div className="code-block-header">
<div className="code-block-header-left">
<div className="code-block-dots">
<span className="code-block-dot dot-red"></span>
<span className="code-block-dot dot-yellow"></span>
<span className="code-block-dot dot-green"></span>
</div>
<span className="code-block-lang">Bash</span>
</div>
<button className="code-block-copy-btn" onclick="copyToClipboard(this)">
<i className="fa-regular fa-copy"></i> Copy
                </button>
</div>
<pre><code><span className="code-keyword">curl</span> -X POST https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp \
  -H <span className="code-header-param">"Authorization: Bearer tf_YOUR_TOKEN"</span> \
  -H <span className="code-header-param">"Content-Type: application/json"</span> \
  -d <span className="code-string">'&#123;"jsonrpc":"2.0","id":1,"method":"tools/list"&#125;'</span></code></pre>
</div>
<p style={{marginTop: '20px'}}>
<em>
                Review the response stream. A pristine connection will
                instantly return a clean JSON payload mapping out your
                project's active tool schema arrays (including
                <code>list_projects</code>, <code>get_concept_flow</code>, and
                <code>submit_agent_run</code>).
              </em>
</p>
</div>
<div className="para-box">
<h4 className="h4">Step 3: Console Live Diagnostics Pass</h4>
<p>
              If your local tool's terminal log streams remain unpopulated,
              open your web browser and navigate directly to the
              <strong>Tools</strong> &amp; test sub-tab inside the
              <strong>Connect &amp; Tools</strong> sidebar menu. Trigger a live
              connection check to view the real-time RPC transport frame
              directly on your screen, letting you isolate version disparities
              or syntax mismatches instantly.
            </p>
</div>

<div className="yt-video" data-video-id="CQpIODqNFek"></div>
</section>
</main>
    </div>
  );
};

export default DesignerThinkMcp;
