import React from 'react';

const DesignerTasks = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="tasks.title">Tasks</h1>

<div className="yt-video" data-video-id="ekkKNTi6Nmk"></div>
<div className="doc-section">
<p className="cd-overview-p" data-i18n-html="tasks.intro">
<strong>Tasks dashboard</strong> is the high-velocity command
              center where your project requirements are translated into
              actionable development steps. It provides a real-time audit trail
              of every operation performed by the AI agents&mdash;from deep-system
              analysis to front-end code implementation.
            </p>
<h3 className="cd-sub-heading" data-i18n="tasks.knc_title">
              Key Navigation &amp; Controls
            </h3>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="tasks.knc_b1_title">Status Filters:</strong>
<span data-i18n-html="tasks.knc_b1_desc">Easily toggle between Pending, In Progress, Completed, and
                  Failed tasks to monitor project health.</span>
</li>
<li>
<strong data-i18n="tasks.knc_b2_title">Global Actions:</strong>
<ul style={{marginTop: '8px'}}>
<li>
<strong data-i18n="tasks.knc_b2_1_title">Refresh:</strong>
<span data-i18n-html="tasks.knc_b2_1_desc">Sync the task queue with current agent activity.</span>
</li>
<li>
<strong data-i18n="tasks.knc_b2_2_title">Cancel/Delete All:</strong>
<span data-i18n-html="tasks.knc_b2_2_desc">Manage your task history and halt active processes.</span>
</li>
<li>
<strong data-i18n="tasks.knc_b2_3_title">+ New Task:</strong>
<span data-i18n-html="tasks.knc_b2_3_desc">Manually trigger a new objective, such as a code fix or a
                      new feature request.</span>
</li>
</ul>
</li>
</ul>
<h3 className="cd-sub-heading" data-i18n="tasks.aoc_title">
              Anatomy of a Task Card
            </h3>
<p className="cd-overview-p" data-i18n-html="tasks.aoc_intro">
              Every task provides deep transparency into the AI's "thought
              process" and execution:
            </p>
<table className="config-table">
<thead>
<tr>
<th data-i18n="tasks.aoc_t1">Feature</th>
<th data-i18n="tasks.aoc_t2">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td data-i18n-html="tasks.aoc_r1_1">
<strong>Prompt Overview</strong>
</td>
<td data-i18n-html="tasks.aoc_r1_2">
                    Displays the specific instruction being executed (e.g.,
                    "Perform a comprehensive gap analysis").
                  </td>
</tr>
<tr>
<td data-i18n-html="tasks.aoc_r2_1">
<strong>Agent Assignment</strong>
</td>
<td data-i18n-html="tasks.aoc_r2_2">
                    Identifies which specialized agent is working on the task
                    (e.g.,
                    <strong>Analytical Agent, Task Manager Agent</strong>, or
                    <strong>Developer Agent</strong>).
                  </td>
</tr>
<tr>
<td data-i18n-html="tasks.aoc_r3_1">
<strong>Context Badges</strong>
</td>
<td data-i18n-html="tasks.aoc_r3_2">
                    Shows the specific project folder (e.g.,
                    <strong>studytool</strong>) and the date of execution.
                  </td>
</tr>
<tr>
<td data-i18n-html="tasks.aoc_r4_1">
<strong>Execution Phase</strong>
</td>
<td data-i18n-html="tasks.aoc_r4_2">
                    Blue information boxes break down complex, multi-phase plans
                    (e.g., "This plan was created in 10 phases") to show exactly
                    how the AI is approaching the problem.
                  </td>
</tr>
<tr>
<td data-i18n-html="tasks.aoc_r5_1">
<strong>Output Type</strong>
</td>
<td data-i18n-html="tasks.aoc_r5_2">
                    Special badges like <strong>Analysis</strong> (purple) or
                    <strong>Code</strong> (blue) indicate the nature of the
                    task's result.
                  </td>
</tr>
</tbody>
</table>
<h3 className="cd-sub-heading" data-i18n="tasks.pmf_title">
              Powerful Management Features
            </h3>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="tasks.pmf_b1_title">Gap Analysis &amp; Auditing:</strong>
<span data-i18n-html="tasks.pmf_b1_desc">The system can automatically compare your
                  <strong>Existing Schema</strong> against your
                  <strong>Concept Design</strong> to identify missing tables or
                  logic gaps.</span>
</li>
<li>
<strong data-i18n="tasks.pmf_b2_title">Subtask Branching:</strong>
<span data-i18n-html="tasks.pmf_b2_desc">Use the <strong>+ New Subtask</strong> button to decompose
                  large architectural goals into granular, manageable technical
                  steps.</span>
</li>
<li>
<strong data-i18n="tasks.pmf_b3_title">Version Tracking:</strong>
<span data-i18n-html="tasks.pmf_b3_desc">Icons for <strong>Edit, Rerun</strong>, and
                  <strong>Delete</strong> allow you to iterate on specific
                  prompts until the output matches your exact vision.</span>
</li>
<li>
<strong data-i18n="tasks.pmf_b4_title">File-Level Inspection:</strong>
<span data-i18n-html="tasks.pmf_b4_desc">Tasks provide a transparent look at the specific files being
                  read or modified, including file paths and sizes (e.g.,
                  authController.js - 17290 bytes).</span>
</li>
</ul>
<p className="cd-overview-p" data-i18n-html="tasks.tc_intro">
<strong>Task Controls</strong> found in the upper right corner of
              the Project Tasks dashboard. They allow you to manage the entire
              AI agent queue with a single click.
            </p>
<img alt="Task Controls" className="demo-img" src="/assets/images/task-1.jpg"/>
<h3 style={{marginTop: '32px', fontSize: '1.05rem'}} className="cd-sub-heading" data-i18n="tasks.tc_refresh_title">
              Refresh
            </h3>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="tasks.tc_refresh_1">Function:</strong>
<span data-i18n-html="tasks.tc_refresh_2">Manually updates the task list.</span>
</li>
<li>
<strong data-i18n="tasks.tc_refresh_3">When to use:</strong>
<span data-i18n-html="tasks.tc_refresh_4">If you've just submitted a task or are waiting for an agent
                  to finish a complex coding operation, hit Refresh to see the
                  most current status (e.g., moving from "In Progress" to
                  "Completed").</span>
</li>
</ul>
<h3 style={{marginTop: '32px', fontSize: '1.05rem'}} className="cd-sub-heading" data-i18n="tasks.tc_cancel_title">
              Cancel All
            </h3>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="tasks.tc_cancel_1">Function:</strong>
<span data-i18n-html="tasks.tc_cancel_2">Immediately halts all active and pending agent
                  operations.</span>
</li>
<li>
<strong data-i18n="tasks.tc_cancel_3">When to use:</strong>
<span data-i18n-html="tasks.tc_cancel_4">Use this if you realize a prompt was incorrect or if the AI
                  is heading in a technical direction you want to pivot away
                  from. It prevents the system from wasting resources on tasks
                  you no longer need.</span>
</li>
</ul>
<h3 style={{marginTop: '32px', fontSize: '1.05rem'}} className="cd-sub-heading" data-i18n="tasks.tc_delete_title">
              Delete All
            </h3>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="tasks.tc_delete_1">Function:</strong>
<span data-i18n-html="tasks.tc_delete_2">Clears your entire task history from the dashboard.</span>
</li>
<li>
<strong data-i18n="tasks.tc_delete_3">When to use:</strong>
<span data-i18n-html="tasks.tc_delete_4">Best for "cleaning house" once a major milestone&mdash;like the
                  TransparencySeal core architecture&mdash;is finished and verified.
                  Note: This action is permanent and clears the audit
                  trail.</span>
</li>
</ul>
<h3 style={{marginTop: '32px', fontSize: '1.05rem'}} className="cd-sub-heading" data-i18n="tasks.tc_new_title">
              + New Task
            </h3>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="tasks.tc_new_1">Function:</strong>
<span data-i18n-html="tasks.tc_new_2">Opens the New Task modal.</span>
</li>
<li>
<strong data-i18n="tasks.tc_new_3">When to use:</strong>
<span data-i18n-html="tasks.tc_new_4">This is your primary entry point for delegating work. Use it
                  to trigger everything from a simple UI change to a massive
                  database audit.</span>
</li>
</ul>
<div style={{marginTop: '64px'}}>
<h3 style={{fontSize: '1.3rem'}} className="cd-sub-heading" data-i18n="tasks.cnt_title">
                Creating a New Task
              </h3>
<p className="cd-overview-p" data-i18n-html="tasks.cnt_intro">
                The <strong>New Task</strong> modal is where you delegate
                specific objectives to specialized AI agents. To ensure the best
                results, you must provide a clear description, select the
                appropriate agent for the job, and associate the task with the
                correct project folder.
              </p>
<img alt="New Task Modal" className="demo-img" src="/assets/images/task-2.png"/>
<h3 style={{marginTop: '40px'}} className="cd-sub-heading" data-i18n="tasks.cnt_comp_title">
                Components of New Task window:
              </h3>
<h3 style={{marginTop: '24px', fontSize: '1.05rem'}} className="cd-sub-heading" data-i18n="tasks.cnt_1_title">
                1. Task Description
              </h3>
<p className="cd-overview-p" data-i18n-html="tasks.cnt_1_intro">
                This text area is for your natural language instructions.
              </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="tasks.cnt_1_b1_title">Be Specific:</strong>
<span data-i18n-html="tasks.cnt_1_b1_desc">Instead of saying "Fix the login," try "Fix the
                    authentication logic in authController.js to prevent
                    duplicate session tokens."</span>
</li>
<li>
<strong data-i18n="tasks.cnt_1_b2_title">Reference Assets:</strong>
<span data-i18n-html="tasks.cnt_1_b2_desc">Mention specific database tables, UI components, or
                    documentation files you want the agent to consider.</span>
</li>
</ul>
<h3 style={{marginTop: '32px', fontSize: '1.05rem'}} className="cd-sub-heading" data-i18n="tasks.cnt_2_title">
                2. Assign Agent Type
              </h3>
<p className="cd-overview-p" data-i18n-html="tasks.cnt_2_intro">
                Selecting the right "specialist" ensures the AI uses the correct
                toolset for the job.
              </p>
<table className="config-table">
<thead>
<tr>
<th data-i18n="tasks.cnt_t2_h1">Agent</th>
<th data-i18n="tasks.cnt_t2_h2">Primary Responsibility</th>
</tr>
</thead>
<tbody>
<tr>
<td data-i18n-html="tasks.cnt_t2_r1_1">
<strong>Terminal Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r1_2">
                      Executes command-line instructions, installs dependencies,
                      and manages file systems.
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r2_1">
<strong>Developer Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r2_2">
                      Writes, refactors, and debugs application code (HTML, CSS,
                      JS, etc.).
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r3_1">
<strong>Database Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r3_2">
                      Manages schemas, writes SQL queries, and handles data
                      migrations.
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r4_1">
<strong>Presentation Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r4_2">
                      Focuses on UI/UX layouts, slide decks, and visual concept
                      assets.
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r5_1">
<strong>Document Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r5_2">
                      Drafts and updates Functional Specs, Technical Specs, and
                      User Manuals.
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r6_1">
<strong>Container Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r6_2">
                      Orchestrates Docker/Kubernetes settings and deployment
                      environments.
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r7_1">
<strong>Task Manager Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r7_2">
                      High-level planning; breaks down complex goals into a
                      multi-phase roadmap.
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r8_1">
<strong>QA Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r8_2">
                      Performs quality assurance, identifies UI inconsistencies,
                      and checks logic flows.
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r9_1">
<strong>Video Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r9_2">
                      Generates video tutorials or walkthroughs based on project
                      state.
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r10_1">
<strong>Analytical Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r10_2">
                      Performs "Read-Only" deep dives, such as Gap Analysis or
                      security audits.
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r11_1">
<strong>Security Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r11_2">
                      Scans for vulnerabilities and ensures
                      encryption/authentication compliance.
                    </td>
</tr>
<tr>
<td data-i18n-html="tasks.cnt_t2_r12_1">
<strong>Test Cases Agent</strong>
</td>
<td data-i18n-html="tasks.cnt_t2_r12_2">
                      Automatically generates unit tests and end-to-end testing
                      scripts.
                    </td>
</tr>
</tbody>
</table>
<h3 style={{marginTop: '32px', fontSize: '1.05rem'}} className="cd-sub-heading" data-i18n="tasks.cnt_3_title">
                3. Associated Folder
              </h3>
<p className="cd-overview-p" data-i18n-html="tasks.cnt_3_intro">
                Choose the project directory where the agent should focus its
                work.
              </p>
<ul className="cd-overview-ul">
<li data-i18n-html="tasks.cnt_3_b1">
                  In your current view, the "selected project" folder is
                  selected.
                </li>
<li data-i18n-html="tasks.cnt_3_b2">
                  This ensures the agent doesn't pull context from unrelated
                  projects, keeping the current project's logic separate from
                  other builds.
                </li>
</ul>
<h3 style={{marginTop: '32px', fontSize: '1.05rem'}} className="cd-sub-heading" data-i18n="tasks.cnt_fa_title">
                Final Actions
              </h3>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="tasks.cnt_fa_1_title">Cancel:</strong>
<span data-i18n-html="tasks.cnt_fa_1_desc">Discards the draft and returns you to the Project Tasks
                    dashboard.</span>
</li>
<li>
<strong data-i18n="tasks.cnt_fa_2_title">Create Task:</strong>
<span data-i18n-html="tasks.cnt_fa_2_desc">Submits the prompt to the AI queue. You can track its
                    progress immediately on the main dashboard under the Pending
                    or In Progress tabs.</span>
</li>
</ul>
</div>
</div>
</main>
    </div>
  );
};

export default DesignerTasks;
