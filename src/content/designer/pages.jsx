import React from "react";

const DesignerPages = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Pages</h1>
        <p style={{ marginBottom: "26px" }}>
          The <strong>Pages</strong> module serves as the central internal
          knowledge base for your project. Utilizing a block-based editor, it
          allows teams to document processes, store meeting notes, and create
          structured project wikis organized by dedicated workspaces.
        </p>

        <section>
          <p style={{ textAlign: "justify" }}></p>
          <div className="doc-section">
            <p className="cd-overview-p">
              The dashboard is designed to help you organize and retrieve
              information quickly. Upon entering the module, you have several
              primary navigation options:
            </p>
            <ul>
              <li>
                <strong>All Pages:</strong>
                <span>
                  The default view showing every document you have access to.
                </span>
              </li>
              <li>
                <strong>Tree View:</strong>
                <span>
                  A hierarchical folder-style structure to visualize how pages
                  and sub-pages are nested.
                </span>
              </li>
              <li>
                <strong>Recent:</strong>
                <span>
                  Quickly jump back into the documents you've edited or viewed
                  most recently.
                </span>
              </li>
              <li>
                <strong>Templates:</strong>
                <span>
                  Access pre-defined layouts to standardize documentation (e.g.,
                  API docs, meeting minutes).
                </span>
              </li>
            </ul>
            <img alt="Page Tabs" src="/assets/images/page-tabs.png" />
            <h3 className="cd-sub-heading" id="key-features">
              Key Features:
            </h3>
            <h3 className="cd-sub-heading" id="organizing-information">
              Organizing Information
            </h3>
            <p className="cd-overview-p">
              To keep the knowledge base clean and searchable, information is
              grouped into two main levels:
            </p>
            <ul>
              <li>
                <strong>Workspaces:</strong>
                <span>
                  Click + New Workspace to create high-level containers (e.g.,
                  "Engineering," "Marketing," or "Legal"). Each workspace acts
                  as a separate environment for related documents.
                </span>
              </li>
              <li>
                <strong>Pages:</strong>
                <span>
                  Within a workspace, click <strong>+ New Page</strong> to start
                  a new document. You can tag pages, attach files, and bookmark
                  important ones for instant access.
                </span>
              </li>
            </ul>
            <h3 className="cd-sub-heading" id="using-block-editor">
              Using the Block-Based Editor
            </h3>
            <p className="cd-overview-p">
              The editor allows for flexible content creation by treating every
              element (text, images, code snippets) as a "block."
            </p>
            <ul>
              <li>
                <strong>Dynamic Layouts:</strong>
                <span>
                  Easily rearrange content by dragging and dropping blocks.
                </span>
              </li>
              <li>
                <strong>Rich Media Support:</strong>
                <span>
                  Embed images, videos, and technical diagrams directly into
                  your documentation.
                </span>
              </li>
              <li>
                <strong>Collaborative Features:</strong>
                <span>
                  Use the Collaboration sub-menu to see who is currently working
                  on a document and track version history.
                </span>
              </li>
            </ul>
            <h3 className="cd-sub-heading" id="search-discovery">
              Search and Discovery
            </h3>
            <p className="cd-overview-p">
              As your knowledge base grows, use the secondary navigation bar to
              find specific assets:
            </p>
            <ul>
              <li>
                <strong>Tags:</strong>
                <span>
                  Filter pages based on custom keywords (e.g., #SprintPlanning).
                </span>
              </li>
              <li>
                <strong>Files:</strong>
                <span>
                  A centralized view of all documents and images uploaded across
                  various pages.
                </span>
              </li>
              <li>
                <strong>Bookmarks:</strong>
                <span>
                  Access your "pinned" pages that require frequent reference.
                </span>
              </li>
              <li>
                <strong>Search Bar:</strong>
                <span>
                  Use the global search in the top-right corner to find specific
                  text strings across all workspaces.
                </span>
              </li>
            </ul>
            <h3 className="cd-sub-heading" id="management-actions">
              Management Actions
            </h3>
            <p className="cd-overview-p">
              If your knowledge base is empty, as shown in the initial setup,
              you can use the + Create First Page button in the center of the
              screen to begin building your project's repository.
            </p>
            <h3 className="cd-sub-heading">Create a Page</h3>
            <p className="cd-overview-p">
              To create a page within the
              <strong>Think4Ever AI</strong> ecosystem, follow these steps to
              organize your documentation and knowledge base effectively.
            </p>
            <ol className="cd-overview-ul number">
              <li>
                <strong>Navigate to the Pages Module</strong>
                <br />
                On the left-hand sidebar, scroll down to the
                <strong>KNOWLEDGE &amp; FEEDBACK</strong> section and click on
                <strong> Pages</strong>. This will open your knowledge base
                dashboard.
              </li>
              <li>
                <strong>Choose Your Starting Point</strong>
                <br />
                Depending on the current state of your project, you have two
                ways to begin:
                <ul>
                  <li>
                    <strong> If the workspace is empty:</strong> Click the large
                    purple <strong>+ Create First Page</strong> button in the
                    center of the screen.
                  </li>
                  <li>
                    <strong>If you already have documentation:</strong> Click
                    the <strong>+ New Page</strong>
                    button located in the top-left corner of the header.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Select a Workspace</strong>
                <br />
                Before the editor opens, you may be prompted to select which
                <strong> Workspace</strong> (e.g., Engineering, Marketing, or
                General) the page should belong to.
                <br />
                <em>
                  Note: If you haven't created a workspace yet, click
                  <strong>+ New Workspace</strong> first to create a container
                  for your new pages.
                </em>
              </li>
              <li>
                <strong>Configure Page Details</strong>
                <br />
                Once the editor loads, you will typically define the following:
                <ul>
                  <li>
                    <strong>Title:</strong> Give your page a clear, searchable
                    name (e.g., "API Integration Guide").
                  </li>
                  <li>
                    <strong>Icon/Cover:</strong> (Optional) Add a visual
                    identifier to make the page stand out in the Tree View.
                  </li>
                  <li>
                    <strong>Tags:</strong> Add keywords like #documentation or
                    #sprint1 to help with filtering later.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Add Content using Blocks</strong>
                <br />
                The editor is <strong>block-based</strong>, meaning you can
                insert different types of content by typing / or clicking the
                add icon:
                <ul>
                  <li>
                    <strong>Text Blocks:</strong> Standard headings and
                    paragraphs.
                  </li>
                  <li>
                    <strong>Media Blocks:</strong> Drag and drop images or
                    videos directly onto the page.
                  </li>
                  <li>
                    <strong>Technical Blocks:</strong> Insert code snippets or
                    link to existing Technical Diagrams from your project
                    sidebar.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Save and Organize</strong>
                <br />
                <ul>
                  <li>
                    <strong>Auto-Save:</strong> Most changes are saved in
                    real-time.
                  </li>
                  <li>
                    <strong>Tree View:</strong> Use the "Tree View" tab in the
                    dashboard to drag and drop your new page into a specific
                    hierarchy or nest it under a parent page.
                  </li>
                  <li>
                    <strong>Bookmarks:</strong> If this is a page you will refer
                    to often, click the <strong>Bookmark</strong> icon to pin it
                    to your favorites list.
                  </li>
                </ul>
                <br />
                <em>
                  Quick Tip: If you're unsure where to start, click the
                  Templates tab before creating a new page to see pre-formatted
                  layouts for meeting notes or project requirements.
                </em>
              </li>
            </ol>
            <img alt="Create Page" src="/assets/images/page-create.jpg" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerPages;
