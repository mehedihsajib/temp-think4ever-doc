import React from 'react';

const DesignerMcpWindsurf = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">Windsurf</h1>

<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            Windsurf is an AI-powered Integrated Development Environment (IDE) created by Codeium. It is
                            designed to act as an
                            "AI-native" alternative to traditional editors like VS Code, built from the ground up to
                            deeply integrate AI coding
                            assistants into the development workflow.
                        </p>
<p style={{marginTop: '20px'}}>Its standout feature is its AI agent, named
                            <strong>Cascade</strong>, which can
                            operate across two primary modes:
                        </p>
<ul className="cd-overview-ul">
<li>
<strong>Copilot Mode (Human-in-the-loop):</strong>
<span>Acts as an advanced autocomplete and inline coding assistant, completing lines or
                                    blocks of code as you type.</span>
</li>
<li>
<strong>Agent Mode (Autonomous):</strong>
<span>Can independently handle complex, multi-step, multi-file tasks. It can read across
                                    your codebase, plan architectural
                                    changes, execute edits across several files at once, handle terminal commands, and
                                    run tests to verify its own work.</span>
</li>
<li>
<strong>Agent Mode (Autonomous):</strong>
<span>Can independently handle complex, multi-step, multi-file tasks. It can read across
                                    your codebase, plan architectural
                                    changes, execute edits across several files at once, handle terminal commands, and
                                    run tests to verify its own work.</span>
</li>
</ul>
<p style={{marginTop: '20px'}}>
                            In the context of the user manual documentation we've been building, Windsurf natively
                            supports the Model <strong>Context Protocol (MCP)</strong> via its configuration files,
                            allowing its autonomous Cascade agent to directly read your product specifications, business
                            rules, and API contracts straight from a centralized server (like
                            think4ever) while it writes your code.
                        </p>
<div className="image-wrapper">
<img alt="VS Code" className="demo-img" src="/assets/images/mcp/mcp_windsurf.png"/>
</div>
<p style={{marginTop: '20px'}}>Windsurf (Cascade) configures MCP servers using an mcp_config.json
                            configuration file and natively supports remote
                            servers via the serverUrl field. This enables deep, multi-file agent workflows fully
                            anchored to your central product
                            specifications.</p>
</div>
<div className="para-box">
<h4 className="h4">
                            Technical Integration
                        </h4>
<p>Follow these configuration steps to register the think4ever MCP server within your Windsurf
                            IDE environment.</p>
</div>
<div className="para-box">
<h4 className="h4">Step 1</h4>
<p>Add to <code>~/.codeium/windsurf/mcp_config.json</code> (or via <strong>Settings &rarr;
                                Cascade &rarr; MCP servers</strong>):</p>
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
      <span className="code-keyword">"serverUrl"</span>: <span className="code-string">"https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp"</span>,
      <span className="code-keyword">"headers"</span>: &#123; <span className="code-keyword">"Authorization"</span>: <span className="code-string">"Bearer tf_71b84ebb8284f86491f24b85311a55dfd2b0c9e74c678c7e"</span> &#125;
    &#125;
  &#125;
&#125;</code></pre>
</div>
</div>
<div className="para-box">
<h4 className="h4">Step 2</h4>
<p>Click <strong>Refresh</strong> in the Cascade MCP settings panel; the <code>think4ever</code>
                            tools become available to Cascade.</p>
</div>
<div className="para-box">
<h4 className="h4">Step 3</h4>
<p>In a Cascade conversation, reference <code>think4ever</code> explicitly the first time so it
                            discovers the tools, then it will use them on its own.</p>
</div>
<div className="para-box">
<h4 className="h4">💡 Tip</h4>
<p style={{marginTop: '10px'}}>Add a Windsurf rule in <code>.windsurf/rules</code> to keep your
                            Cascade agent grounded during multi-file flows: &ldquo;<em>Concept, requirements, tasks and
                                issues are managed in the think4ever MCP server; keep them in sync with code
                                changes.</em>&rdquo;</p>
</div>
<div className="para-box">
<h4 className="h4">⚠️ Note on Field Discrepancies</h4>
<p style={{marginTop: '10px'}}>Field names differ slightly between clients (e.g., Windsurf uses
                            <code>serverUrl</code> instead of <code>url</code> and does not require a <code>type</code>
                            declaration). However, the underlying core constants&mdash;the endpoint and the Bearer
                            token&mdash;remain identical.
                        </p>
</div>
<div className="para-box">
<h3 className="h3">
                            Windsurf Cascade Use Cases &amp; Sample Prompts
                        </h3>
<p>
                            Cascade&rsquo;s strength lies in its multi-step, multi-file autonomous flows. Connecting it to
                            think4ever allows it to execute complex architectural changes while adhering strictly to
                            your governed specs.
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
<strong>Cascade from the Concept</strong>
</td>
<td>
<em>
                                            "Read the think4ever concept's payments block and add the missing refund
                                            handling across the codebase, following the stored API contracts."
                                        </em>
</td>
</tr>
<tr>
<td>
<strong>Task-Scoped Cascade Runs</strong>
</td>
<td>
<em>
                                            "Take think4ever task 54, implement it as a Cascade flow, and close it with
                                            a summary comment of what changed."
                                        </em>
</td>
</tr>
<tr>
<td>
<strong>Design-to-Code Passes</strong>
</td>
<td>
<em>
                                            "Implement the 'Reports' UI design from think4ever end to end &mdash; the view,
                                            the route, and the API call from the stored contract."
                                        </em>
</td>
</tr>
<tr>
<td>
<strong>ERD-Aware Multi-File Changes</strong>
</td>
<td>
<em>
                                            "Add the 'loyalty points' attribute the think4ever data model defines &mdash;
                                            migrate the schema, update the APIs per the stored contracts, and adjust the
                                            UI."
                                        </em>
</td>
</tr>
<tr>
<td>
<strong>Compliance Sweeps</strong>
</td>
<td>
<em>
                                            "Check this module against the think4ever business rules and report each
                                            violation as a tracked issue &mdash; coverage tied to the spec, not to memory."
                                        </em>
</td>
</tr>
<tr>
<td>
<strong>Fix-and-File Loops</strong>
</td>
<td>
<em>
                                            "Fix this bug; if you spot unrelated problems along the way, file think4ever
                                            issues for them instead of changing them."
                                        </em>
</td>
</tr>
<tr>
<td>
<strong>Role-Access Pass</strong>
</td>
<td>
<em>
                                            "Walk every route in this app against the think4ever roleAccess definitions
                                            and add the missing permission checks."
                                        </em>
</td>
</tr>
<tr>
<td>
<strong>Drift Report</strong>
</td>
<td>
<em>
                                            "Compare this repo to the think4ever concept and list undesigned code and
                                            unbuilt design, ranked by risk."
                                        </em>
</td>
</tr>
<tr>
<td>
<strong>Flow Coverage Before Release</strong>
</td>
<td>
<em>
                                            "Verify this codebase covers every step of the think4ever checkout flow;
                                            file a think4ever issue for each missing branch."
                                        </em>
</td>
</tr>
<tr>
<td>
<strong>Spec Updates as You Ship</strong>
</td>
<td>
<em>
                                            "Now that this feature is merged, update the think4ever concept block and
                                            requirement to describe the implemented behavior."
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

export default DesignerMcpWindsurf;
