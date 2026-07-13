import React from 'react';

const DesignerTheme = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">
                    Theme
                </h1>

<section className="cd-overview" id="cdHomeOverview">
<p>
                        Our product offers a modern and responsive user interface with support for both
                        <strong>Dark</strong> and <strong>Light (Daylight)</strong> modes, allowing you to choose the
                        appearance
                        that best suits your preferences and working environment.
                    </p>
<p style={{marginTop: '20px'}} className="cd-overview-text">
                        By default, the application is set to <strong>Dark mode</strong>, providing a sleek and modern
                        aesthetic that reduces eye strain. You can easily switch to Light mode for a brighter,
                        high-contrast experience in daylight conditions.
                    </p>
<div style={{marginTop: '15px'}} className="image-wrapper">
<img alt="Theme Switch" className="demo-img" src="/assets/images/theme-switch.png"/>
</div>
<div style={{marginTop: '30px'}} className="para-box">
<h3 className="h3">Dark Mode (Default)</h3>
<p>The default dark mode reduces eye strain and provides a sleek, modern look.</p>
<div style={{marginTop: '15px'}} className="image-wrapper">

<img alt="Dark Mode Theme" className="demo-img" src="/assets/images/dark-mode.png"/>
</div>
</div>
<div style={{marginTop: '30px'}} className="para-box">
<h3 className="h3">Light Mode</h3>
<p>The light mode offers high contrast and readability for daylight environments.</p>
<div style={{marginTop: '15px'}} className="image-wrapper">
<img alt="Light Mode Theme" className="demo-img" src="/assets/images/light-mode.png"/>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerTheme;
