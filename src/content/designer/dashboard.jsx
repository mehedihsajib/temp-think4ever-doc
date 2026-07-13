import React from 'react';

const DesignerDashboard = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" data-i18n="dev_dashboard.title" id="cdHomeTitle">
            Dashboard
          </h1>

<div className="yt-video" data-video-id="CQpIODqNFek"></div>

<section className="cd-overview" id="cdHomeOverview">
<p className="cd-overview-text" data-i18n="dev_dashboard.intro">
              This dashboard provides a clear, organized view of all your
              projects in one place. Key features include:
            </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_dashboard.f1_title">Project Overview:</strong>
<span data-i18n="dev_dashboard.f1_desc">Each project is displayed as a card showing the project name
                  and a brief description. This allows for quick recognition and
                  easy access.</span>
</li>
<li>
<strong data-i18n="dev_dashboard.f2_title">Search Functionality:</strong>
<span data-i18n="dev_dashboard.f2_desc">A search bar at the top lets you find projects quickly by
                  name.</span>
</li>
<li>
<strong data-i18n="dev_dashboard.f3_title">Create &amp; Manage Projects:</strong>
<span data-i18n="dev_dashboard.f3_desc">Easily start a new project with the "Create New Project"
                  button or log out with a single click.</span>
</li>
<li>
<strong data-i18n="dev_dashboard.f4_title">Project Navigation:</strong>
<span data-i18n="dev_dashboard.f4_desc">Clicking on a project card takes you directly to that
                  project's workspace for further management and
                  development.</span>
</li>
<li>
<strong data-i18n="dev_dashboard.f5_title">Clean &amp; Minimal Layout:</strong>
<span data-i18n="dev_dashboard.f5_desc">The interface is simple and intuitive, focusing on
                  productivity without distractions.</span>
</li>
<li>
<strong data-i18n="dev_dashboard.f6_title">Project Count Indicator:</strong>
<span data-i18n="dev_dashboard.f6_desc">Displays the total number of projects at the bottom right,
                  helping users track their workload.</span>
</li>
</ul>
<p className="cd-overview-text" data-i18n="dev_dashboard.outro">
              This dashboard acts as a central hub for managing, accessing, and
              launching all your ongoing projects efficiently.
            </p>
<div style={{marginTop: '40px', marginBottom: '40px', padding: '20px', textAlign: 'center'}} className="image-wrapper">
<img style={{maxWidth: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'}} alt="Dashboard Overview Diagram" className="demo-img" src="/assets/images/dashboard.png"/>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerDashboard;
