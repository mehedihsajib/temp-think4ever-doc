import React from 'react';

const DesignerMcpAmazonq = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">Amazon Q Developer Integration Manual (Model Context
                    Protocol)</h1>

<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            This section guides you through connecting <strong>Amazon Q Developer (CLI &amp; IDE)</strong>
                            to the platform
                            using the Model Context
                            Protocol (MCP). Connecting your client allows Amazon Q to utilize a comprehensive context
                            window over your project
                            definition, contracts, rules, and data model&mdash;empowering it to manage AWS-centric building,
                            security scanning, and
                            infrastructure tracking.
                        </p>
<div className="image-wrapper">
<img alt="Amazon Q" className="demo-img" src="/assets/images/mcp/mcp-amazonq.png"/>
</div>
<p style={{marginTop: '20px'}}>
<strong>Prerequisites &amp; Access Token Generation</strong>
</p>
<p>Before configuring the CLI or IDE plugins, you must generate a secure access token. This
                            token serves as your REST API key and authenticates your MCP session.</p>
<ul className="cd-overview-ul">
<li>
                                Navigate to the <strong> MCP &mdash; Amazon Q Developer</strong> dashboard as shown in
                                image_8f900a.jpg.
                            </li>
<li>
                                Click the blue <strong>Create token</strong> button located in the upper-right corner of
                                the instruction panel.
                            </li>
<li>
                                Copy the generated token immediately.
                            </li>
</ul>
</div>
<div className="para-box">
<p style={{marginTop: '20px'}}>
                            ⚠️ <strong>Important Security Note:</strong> The token configuration snippet fills in
                            automatically upon creation and is only displayed once. Handle it securely and avoid
                            exposing your active token in shared environments.
                        </p>
</div>
<div className="para-box">
<h4 className="h4">
                            Configuration Setup
                        </h4>
<p>
                            Amazon Q Developer configures MCP servers in <code>~/.aws/amazonq/mcp.json</code> (global,
                            all projects) or <code>.amazonq/mcp.json</code> (workspace). The same files are read by the
                            Q CLI and the Q IDE plugins. Use the <code>mcp-remote</code> bridge for the remote HTTP
                            endpoint (requires Node.js for <code>npx</code>).
                        </p>
</div>
<div className="para-box">
<h4 className="h4">Step 1</h4>
<p>Add this to <code>~/.aws/amazonq/mcp.json</code>:</p>
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
      <span className="code-keyword">"args"</span>: [<span className="code-string">"-y"</span>, <span className="code-string">"mcp-remote"</span>, <span className="code-string">"https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp"</span>,
               <span className="code-string">"--header"</span>, <span className="code-string">"Authorization: Bearer tf_YOUR_TOKEN"</span>]
    &#125;
  &#125;
&#125;</code></pre>
</div>
</div>
<div className="para-box">
<h4 className="h4">Step 2</h4>
<p>Verify &mdash; in the CLI run <code>q mcp list</code>, then inside a <code>q chat</code> session
                            run <code>/tools</code> to see the <code>think4ever</code> tools. In the IDE plugin, check
                            the MCP section of the Q panel.</p>
</div>
<div className="para-box">
<h4 className="h4">Step 3</h4>
<p>Use <code>/tools trust</code> in <code>q chat</code> to pre-approve specific think4ever tools
                            so Q doesn't ask on every call.</p>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerMcpAmazonq;
