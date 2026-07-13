import React from "react";

const DesignerDashboard = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Dashboard</h1>

        <div className="yt-video" data-video-id="CQpIODqNFek"></div>

        <section>
          <p>
            This dashboard provides a clear, organized view of all your projects
            in one place. Key features include:
          </p>
          <ul>
            <li>
              <strong>Project Overview:</strong>
              <span>
                Each project is displayed as a card showing the project name and
                a brief description. This allows for quick recognition and easy
                access.
              </span>
            </li>
            <li>
              <strong>Search Functionality:</strong>
              <span>
                A search bar at the top lets you find projects quickly by name.
              </span>
            </li>
            <li>
              <strong>Create &amp; Manage Projects:</strong>
              <span>
                Easily start a new project with the "Create New Project" button
                or log out with a single click.
              </span>
            </li>
            <li>
              <strong>Project Navigation:</strong>
              <span>
                Clicking on a project card takes you directly to that project's
                workspace for further management and development.
              </span>
            </li>
            <li>
              <strong>Clean &amp; Minimal Layout:</strong>
              <span>
                The interface is simple and intuitive, focusing on productivity
                without distractions.
              </span>
            </li>
            <li>
              <strong>Project Count Indicator:</strong>
              <span>
                Displays the total number of projects at the bottom right,
                helping users track their workload.
              </span>
            </li>
          </ul>
          <p>
            This dashboard acts as a central hub for managing, accessing, and
            launching all your ongoing projects efficiently.
          </p>
          <div
            style={{
              marginTop: "40px",
              marginBottom: "40px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <img
              style={{
                maxWidth: "100%",
                borderRadius: "8px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              alt="Dashboard Overview Diagram"
              src="/assets/images/dashboard.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerDashboard;
