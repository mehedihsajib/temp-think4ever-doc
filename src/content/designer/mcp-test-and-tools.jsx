import CodeBlock from "../../components/CodeBlock";
import React from "react";

const DesignerMcpTestAndTools = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>MCP Tools &amp; Test</h1>

        <section>
          <div className="para-box">
            <p>
              This section details how to verify, inspect, and interact directly
              with the available Model Context Protocol (MCP) endpoints on the
              platform. The Tools &amp; Test dashboard serves as an interactive
              sandbox to test tool discovery and execute raw queries outside of
              an IDE or CLI client.
            </p>
            <div>
              <img
                alt="MCP Tools &amp; Test"
                src="/assets/images/mcp/mcp-test-and-tools.png"
              />
            </div>
          </div>
          <div className="para-b">
            <h4 className="h">Live Endpoint Testing</h4>
            <p>
              Before integrating your AI clients, you can run a direct
              diagnostic test on the live MCP endpoint using your generated
              token.
            </p>
            <ul>
              <li>
                Navigate to the MCP &mdash; Tools &amp; Test dashboard as shown
                in image_8f806d.jpg.
              </li>
              <li>
                Ensure you have generated a token using the blue Create token
                button in the top right.
              </li>
              <li>
                Click the List MCP tools button under the Live test panel to
                execute an in-browser request to the server and ensure the
                endpoint resolves successfully.
              </li>
            </ul>
          </div>
          <div className="para-b">
            <h4 className="h">What the Tools Can Do</h4>
            <p>
              The platform exposes a broad set of tools that directly mirror
              REST capabilities. All connected AI clients obey your active token
              scopes and project limits. These tools are split across several
              functional categories:
            </p>
          </div>
          <div className="para-box">
            <h4 className="h">Project &amp; Concept Management</h4>
            <ul>
              <li>
                list_projects, get_project, create_project, update_project
              </li>
              <li>
                list_concepts, get_concept, create_concept, get_active_concept,
                get_concept_stats, get_concept_flow, list_concept_blocks,
                get_concept_block, add_concept_block, update_concept_block,
                delete_concept_block
              </li>
              <li>list_tech_stack, set_tech_stack, list_technology_options</li>
              <li>list_concept_changes, get_concept_change</li>
            </ul>
          </div>
          <div className="para-box">
            <h4 className="h">Design, Requirements &amp; Rules</h4>
            <ul>
              <li>list_ui_designs, get_ui_design, update_ui_design</li>
              <li>
                list_code_summaries, get_code_summary, get_summary_job,
                rebuild_summaries
              </li>
              <li>
                list_technical_requirements, get_technical_requirement,
                create_technical_requirement, update_technical_requirement,
                delete_technical_requirement
              </li>
              <li>update_technical_requirement_content</li>
            </ul>
          </div>
          <div className="para-box">
            <h4 className="h">Tasks, Issues &amp; Agents</h4>
            <ul>
              <li>
                list_tasks, get_task, create_task, submit_task, set_task_status
              </li>
              <li>
                list_agent_types, list_models, list_folders, submit_agent_run
              </li>
              <li>
                list_issues, get_issue, create_issue, update_issue,
                delete_issue, list_issue_comments, add_issue_comment
              </li>
              <li>
                list_issue_trackers, list_issue_statuses, list_issue_priorities,
                list_issue_categories
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h4 className="h">Workspace File Operations &amp; Logs</h4>
            <ul>
              <li>
                list_folder_files, get_developer_logs, get_database_logs,
                get_project_action_history, get_file_tree
              </li>
              <li>
                read_file, write_file, delete_file, search_files,
                search_in_files, replace_in_file
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h4 className="h">Raw JSON-RPC</h4>
            {/* prettier-ignore */}
            <CodeBlock language="bash" code={`curl -X POST https://cell-ssm-use1-0005.us.portal.think4ever.com/mcp \

  -H "Authorization: Bearer tf_YOUR_TOKEN" \

  -H "Content-Type: application/json" \

  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'`} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerMcpTestAndTools;
