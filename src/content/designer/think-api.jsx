import React from "react";

const DesignerThinkApi = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Think API</h1>

        <section>
          <div className="para-box">
            <h3>Overview</h3>
            <p>
              The <strong>Think API Console</strong> provides a professional,
              standard REST interface to programmatically manage access tokens
              and seamlessly drive your project configurations. While the visual
              web workspace serves as your centralized hub for organizing
              application architectures and business logic, the Think API
              exposes these assets programmatically on a granular level.
              Concepts are accessed block-by-block&mdash;ensuring that dense,
              large concept design documents are never transferred over the wire
              in bulk, maximizing throughput and reducing structural latency.
            </p>
            <div>
              <img alt="API Overview" src="/assets/images/api-overview.png" />
            </div>
          </div>
          <div className="para-box">
            <h4>Global Base Settings &amp; Request Formats</h4>
            <p>
              Integrating your external workflows, script triggers, or
              third-party monitoring services with a project requires using
              standard base configurations and response definitions.
            </p>
          </div>
          <div className="para-box">
            <h4>Global Endpoint Metadata</h4>
            <ul>
              <li>
                <strong>REST Base Route URL:</strong>
                <span>
                  https://cell-ssm-use1-0005.us.portal.think4ever.com/v1
                </span>
              </li>
              <li>
                <strong>OpenAPI Schema Specification:</strong>
                <span>
                  https://cell-ssm-use1-0005.us.portal.think4ever.com/v1/openapi.json
                </span>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h3>Access Tokens</h3>
            <p>
              Tokens are managed directly under the Access Tokens manager tab
              within the console interface. For granular operational security,
              tokens are scoped per individual method (enforcing explicit
              read/write privileges per resource block) and can be tightly
              restricted to specific target projects. The platform records these
              values strictly as cryptographically secure HMAC hashes, processes
              default expiration cycles automatically, and supports immediate
              revocation at any point.
            </p>
            <div>
              <img
                alt="API Access Tokens"
                src="/assets/images/api-access-tokens.png"
              />
            </div>
          </div>
          <div className="para-box">
            <h4>Standardized Response Envelope</h4>
            <p>
              The Think API wraps execution responses inside a predictable JSON
              layout format, facilitating clean runtime exception handling and
              uniform metadata parsing:
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
                  <span className="code-comment">
                    // Successful Handshake Layout
                  </span>
                  &#123;
                  <span className="code-string">"ok"</span>:{" "}
                  <span className="code-boolean">true</span>,
                  <span className="code-string">"data"</span>: &#123; ...
                  &#125;,
                  <span className="code-string">"meta"</span>: &#123; ... &#125;
                  &#125;
                  <span className="code-comment">
                    // Operational Exception Layout
                  </span>
                  &#123;
                  <span className="code-string">"ok"</span>:{" "}
                  <span className="code-boolean">false</span>,
                  <span className="code-string">"error"</span>: &#123;
                  <span className="code-string">"code"</span>:{" "}
                  <span className="code-string">"ERROR_CODE"</span>,
                  <span className="code-string">"message"</span>:{" "}
                  <span className="code-string">
                    "Detailed description outlining the underlying validation or
                    execution exception."
                  </span>
                  &#125; &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="para-box">
            <h4>Platform Core Navigation Pathways</h4>
            <p>
              The API splits its programmatic routes across distinct structural
              tabs based on your specific implementation requirements:
            </p>
            <ul>
              <li>
                <strong>Overview: </strong>
                <span>
                  High-level platform settings, base endpoint definitions, and
                  security model summaries.
                </span>
              </li>
              <li>
                <strong>Access Tokens:</strong>
                <span>
                  Interface for provisioning, monitoring, and revoking secure
                  cryptographic bearer keys.
                </span>
              </li>
              <li>
                <strong>REST Methods:</strong>
                <span>
                  Central operational routes governing base environmental
                  states, administrative attributes, and project profiles.
                </span>
              </li>
              <li>
                <strong>Concepts &amp; Blocks: </strong>
                <span>
                  Granular endpoints designed to read, create, update, or remove
                  explicit structural elements (e.g., individual screen fields,
                  roles, or business rule blocks).
                </span>
              </li>
              <li>
                <strong>Agents &amp; Tasks:</strong>
                <span>
                  Operational pipeline layers used to manage, schedule, and
                  verify autonomous code generation runs.
                </span>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h4>Agent Task Orchestration &amp; Pipeline Automation</h4>
            <p>
              Through the Agents &amp; Tasks panel, deployment configurations
              can programmatically delegate development goals to the system's
              background generation engine. Spawning an agent run instantiates
              an isolated task execution loop directed at a specific codebase
              subdirectory folder.
            </p>
            <p>Task Orchestration Endpoints Matrix</p>
            <table className="config-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route Path</th>
                  <th>Operational Action</th>
                  <th>Token Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>POST </strong>
                  </td>
                  <td>/v1/projects/:id/agent-runs</td>
                  <td>
                    Registers an engineering assignment targeting a specific
                    folder, instantly creating the task entity and queuing it
                    for execution.
                  </td>
                  <td>agents:submit</td>
                </tr>
                <tr>
                  <td>
                    <strong>GET </strong>
                  </td>
                  <td>/v1/projects/:id/tasks</td>
                  <td>
                    Pulls down a hierarchical, structural tracking list of all
                    tasks assigned to the current project.
                  </td>
                  <td>tasks:read</td>
                </tr>
                <tr>
                  <td>
                    <strong>POST </strong>
                  </td>
                  <td>/v1/projects/:id/tasks</td>
                  <td>
                    Explicitly maps a standalone task or manual development
                    milestone directly onto the tracking board (?submit=true).
                  </td>
                  <td>tasks:write</td>
                </tr>
                <tr>
                  <td>
                    <strong>GET </strong>
                  </td>
                  <td>/v1/tasks/:id</td>
                  <td>
                    Requests a comprehensive status card along with the final
                    compilation results for a single task identifier.
                  </td>
                  <td>tasks:read</td>
                </tr>
                <tr>
                  <td>
                    <strong>POST </strong>
                  </td>
                  <td>/v1/tasks/:id/submit</td>
                  <td>
                    Forces an immediate queue execution pass or pushes a retry
                    cycle for a previously configured task definition.
                  </td>
                  <td>tasks:write</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="para-box">
            <h4>Developer Implementation Blueprint</h4>
            <p>Submitting a Developer Agent Run</p>
            <p>
              To trigger a remote background compilation assignment from a shell
              environment, local script pipeline, or continuous deployment
              server, dispatch an authenticated POST request to the project's
              agent run endpoint:
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
                <button
                  className="code-block-copy-btn"
                  onclick="copyToClipboard(this)"
                >
                  <i className="fa-regular fa-copy"></i> Copy
                </button>
              </div>
              <pre>
                <code>
                  <span className="code-keyword">curl</span> -X POST
                  http://localhost:3005/v1/projects/160/agent-runs \ -H{" "}
                  <span className="code-header-param">
                    "Authorization: Bearer tf_YOUR_TOKEN"
                  </span>{" "}
                  \ -H{" "}
                  <span className="code-header-param">
                    "Content-Type: application/json"
                  </span>{" "}
                  \ -d{" "}
                  <span className="code-string">
                    '&#123; "agent_type_id": 1, "folder_id": 1,
                    "task_description": "Implement the login page" &#125;'
                  </span>
                </code>
              </pre>
            </div>
          </div>
          <div className="para-box">
            <p>Infrastructure Credit Guardrails &amp; Prerequisites</p>
            <p>
              Background task compilation loops and automated agent execution
              threads consume direct server capacity. Programmatic placement
              into the active execution queue is strictly gated based on your
              account's remaining credit balance. To ensure smooth pipeline
              execution, verify that your scripts fetch valid resource
              definitions (agent_type_id via /v1/agent-types and target
              folder_id via /v1/projects/:id/folders) before attempting to pass
              payload instructions to the run queue.
            </p>
            <p>
              <strong>Architectural Interaction Pathways</strong>
            </p>
            <p>
              The Think API securely exposes system architecture through a
              series of discrete programmatic interfaces:
            </p>
            <div>
              <img
                alt="Agent and Task Interfaces"
                src="/assets/images/api-agent-and-task.png"
              />
            </div>
          </div>
          <div className="para-box">
            <h3>REST Methods</h3>
            <p>
              Standardized HTTP endpoints designed to retrieve project schemas,
              execute mutations, and update structural variables
              programmatically.
            </p>
            <div>
              <img
                alt="Rest Methodd"
                src="/assets/images/api-rest-methods.png"
              />
              <img
                alt="Rest Methods"
                src="/assets/images/api-rest-methods-2.png"
              />
              <img
                alt="Rest Method"
                src="/assets/images/api-rest-methods-3.png"
              />
            </div>
          </div>
          <div className="para-box">
            <h3>Concepts &amp; Blocks</h3>
            <p>
              Direct granular endpoints that allow external applications to
              parse, modify, or extend explicit design modules (such as specific
              screens, user roles, or validation rules) rather than processing
              the entire system layout in bulk.
            </p>
            <div>
              <img
                alt="Concept Block"
                src="/assets/images/api-concept-block-1.png"
              />
              <img
                alt="Concept Block"
                src="/assets/images/api-concept-block-2.png"
              />
            </div>
          </div>
          <div className="para-box">
            <h3>Agents &amp; Tasks</h3>
            <p>
              Operational endpoints that manage the pipeline's execution layer,
              allowing external environments to command, assign, or monitor
              automated agent development scripts.
            </p>
            <div>
              <img
                alt="Agent &amp; Tasks"
                src="/assets/images/api-agent-task.png"
              />
            </div>
          </div>
          <div className="para-box">
            <h4>Executing Agent Tasks Programmatically</h4>
            <p>
              The API allows teams to submit localized or pipeline-driven
              instructions directly to Think4Ever's background multi-agent
              compiler. When an external application passes a task definition,
              it queues an asynchronous execution cycle targeting a specific
              code repository subdirectory.
            </p>
          </div>
          <div className="para-box">
            <h4>Authentication and Request Construction</h4>
            <p>
              All interactions with the platform's endpoints utilize standard
              token-based headers. Before sending payloads, developers must
              generate a unique bearer token (tf_YOUR_TOKEN) within the Access
              Tokens manager sub-menu.
            </p>
          </div>
          <div className="para-box">
            <h4>Task Management Endpoints Matrix</h4>
            <div>
              <img
                alt="Agent &amp; Tasks"
                src="/assets/images/api-agent-and-task.png"
              />
            </div>
            <table className="config-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route Path</th>
                  <th>Operational Action</th>
                  <th>Token Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>POST </strong>
                  </td>
                  <td>/v1/projects/:id/agent-runs</td>
                  <td>
                    Dispatches a new coding assignment to an internal developer
                    agent targeting a specific folder workspace.
                  </td>
                  <td>agents:submit</td>
                </tr>
                <tr>
                  <td>
                    <strong>GET </strong>
                  </td>
                  <td>/v1/projects/:id/tasks</td>
                  <td>
                    Returns a hierarchical structural list of all active,
                    pending, or completed tasks tied to the project instance.
                  </td>
                  <td>tasks:read</td>
                </tr>
                <tr>
                  <td>
                    <strong>POST </strong>
                  </td>
                  <td>/v1/projects/:id/tasks</td>
                  <td>
                    Explicitly maps a new development milestone or sub-task to
                    the project tracker dashboard.
                  </td>
                  <td>tasks:write</td>
                </tr>
                <tr>
                  <td>
                    <strong>GET </strong>
                  </td>
                  <td>/v1/tasks/:id</td>
                  <td>
                    Requests a detailed status summary and resolution output for
                    a singular designated task identifier.
                  </td>
                  <td>tasks:read</td>
                </tr>
                <tr>
                  <td>
                    <strong>POST </strong>
                  </td>
                  <td>/v1/tasks/:id/submit</td>
                  <td>
                    Forces an immediate queue execution cycle or redeployment
                    pass for an existing task definition.
                  </td>
                  <td>tasks:write</td>
                </tr>
                <tr>
                  <td>
                    <strong>PUT </strong>
                  </td>
                  <td>/v1/tasks/:id/status</td>
                  <td>
                    Modifies the operational state parameters of an active task
                    (e.g., manually canceling a run or resetting an assignment).
                  </td>
                  <td>tasks:write</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="para-box">
            <h3>Error and Status Code Handling</h3>
            <p>
              The Think API utilizes standardized HTTP status codes paired with
              clear semantic error strings to represent execution results. When
              an operation returns a non-200 status, inspect the JSON response
              envelope's error.code to identify the block lifecycle exception.
            </p>
            <div>
              <img
                alt="Error and Status Code"
                src="/assets/images/api-errors.png"
              />
            </div>
          </div>
          <div className="para-box">
            <h3>Think API Troubleshooting Guide</h3>
            <p>
              This troubleshooting guide provides clear, actionable steps to
              diagnose and resolve errors encountered while programmatically
              interacting with the Think API Console.
            </p>
            <p>
              <strong> Direct Resolution Steps for Core Status Codes </strong>
            </p>
            <p>
              When an external pipeline script, curl command, or integration
              tool receives an error, check the HTTP status code and error.code
              string in the JSON response envelope to pinpoint the solution.
            </p>
            <p>
              <strong>401 UNAUTHORIZED / Missing or Invalid Token </strong>
            </p>
            <ul>
              <li>
                <strong>The Problem: </strong>
                <span>
                  The API cannot validate your credentials. The token is either
                  missing from the headers, malformed, or has expired.
                </span>
              </li>
              <li>
                <strong>How to Fix: </strong>
                <span>
                  * Open the Access Tokens tab in the console and verify if your
                  token is still active. If it has expired or been revoked,
                  generate a new one.
                </span>
                <ul>
                  <li>
                    Check your script or curl syntax. Ensure the token is passed
                    exactly as an HTTP header with the proper capitalization and
                    spacing: Authorization: Bearer tf_YOUR_TOKEN.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <p>
              <strong>403 FORBIDDEN / Token Missing a Scope </strong>
            </p>
            <ul>
              <li>
                <strong>The Problem: </strong>
                <span>
                  Your token is cryptographically valid, but it does not have
                  permission to execute this specific action or access this
                  specific project. For example, you sent a POST request to
                  create a task using a token restricted only to read actions.
                </span>
              </li>
              <li>
                <strong>How to Fix: </strong>
                <span>
                  * Review the Scope column in your console references to see
                  what permission your endpoint requires (e.g., agents:submit or
                  tasks:write).
                </span>
                <ul>
                  <li>
                    Navigate to the Access Tokens tab and create a new token.
                    Explicitly check the required method scopes (read/write per
                    resource) and make sure the token is authorized to access
                    the specific project ID you are targetting.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <p>
              <strong>402 INSUFFICIENT_CREDITS / Out of Credits </strong>
            </p>
            <ul>
              <li>
                <strong>The Problem: </strong>
                <span>
                  Your authentication is completely correct, but the system
                  blocked your background task or agent execution run because
                  the project's credit balance is empty.
                </span>
              </li>
              <li>
                <strong>How to Fix: </strong>
                <span>
                  * Check the top-right corner of the Think4Ever web platform to
                  view your active Credits balance.
                </span>
                <ul>
                  <li>
                    If the balance is depleted, navigate to your account billing
                    management settings to top up your infrastructure allocation
                    before re-triggering programmatic queue operations.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <p>
              <strong>400 BAD_REQUEST / Missing or Invalid Parameters</strong>
            </p>
            <ul>
              <li>
                <strong>The Problem: </strong>
                <span>
                  The platform server received your payload, but the JSON data
                  structure failed validation requirements.
                </span>
              </li>
              <li>
                <strong>How to Fix: </strong>
                <span>
                  * Check for syntax errors such as missing commas, unmatched
                  brackets, or trailing spaces in your payload JSON.
                </span>
                <ul>
                  <li>
                    Look beneath your example scripts in the console to ensure
                    you are referencing existing, live platform parameters. If
                    you are submitting an agent run, you must pass valid,
                    numerical IDs for agent_type_id and folder_id. Query
                    /v1/agent-types and /v1/projects/:id/folders first to cache
                    real environment values.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <p>
              <strong>
                404 NOT_FOUND / Resource Missing or Not Accessible
              </strong>
            </p>
            <ul>
              <li>
                <strong>The Problem: </strong>
                <span>
                  The server cannot locate the specific URL path, project ID,
                  block component, or task ID specified in your request.
                </span>
              </li>
              <li>
                <strong>How to Fix: </strong>
                <span>
                  * Double-check your URL parameter variables. For example,
                  ensure that :id in your path matches your actual project ID
                  (e.g., changing /v1/projects/:id/tasks to
                  /v1/projects/160/tasks).
                </span>
                <ul>
                  <li>
                    If you are querying a specific block inside Concepts &amp;
                    blocks, verify through the web interface that the component
                    hasn't been deleted or renamed by another teammate.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <p>
              <strong>409 CONFLICT / State Conflict </strong>
            </p>
            <ul>
              <li>
                <strong>The Problem: </strong>
                <span>
                  The payload values you sent conflict with the current state of
                  your project architecture. This frequently happens if your
                  script attempts to inject a block with a duplicate ID that
                  already exists in the blueprint.
                </span>
              </li>
              <li>
                <strong>How to Fix: </strong>
                <span>
                  * Run a GET request on your concept blocks layout to verify
                  existing assets before issuing a write command.
                </span>
                <ul>
                  <li>
                    Ensure that your external automated changes strictly respect
                    the structural rules mapped out in your Think4Ever workspace
                    to prevent architecture fragmentation.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="para-box">
            <p>
              <strong>Quick Diagnostics Checklist </strong>
            </p>
            <p>
              If your automated pipeline scripts or local tool integrations fail
              unexpectedly, quickly run down this three-step checklist:
            </p>
            <ol>
              <li>
                <strong>Test the Base URL Connection:</strong>
                <span>
                  Ensure your scripts are hitting the exact REST base path
                  assigned to your workspace instance cluster:
                  https://cell-ssm-use1-0005.us.portal.think4ever.com/v1.
                </span>
              </li>
              <li>
                <strong>Validate the Raw OpenAPI Specification:</strong>
                <span>
                  If your tool setup or code-generation engine acts confused
                  about payload properties, point your integration engine to the
                  absolute OpenAPI directory layout link (/v1/openapi.json) to
                  force-sync all available properties.
                </span>
              </li>
              <li>
                <strong>Verify Response Formats: </strong>
                <span>
                  Ensure your script's exception-catching logic checks for the
                  platform's standard outer JSON wrapper. A failed execution
                  will always return "ok": false and contain an explicit error
                  key tracking back to the core status directory table.
                </span>
              </li>
            </ol>
          </div>

          <div className="yt-video" data-video-id="CQpIODqNFek"></div>
        </section>
      </main>
    </div>
  );
};

export default DesignerThinkApi;
