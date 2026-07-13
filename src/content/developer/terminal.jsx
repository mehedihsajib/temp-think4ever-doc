import React from 'react';

const DeveloperTerminal = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">Terminal</h1>

<section className="cd-overview" id="cdHomeOverview">
<p className="cd-overview-text">
            By clicking on Terminal button you can open the integrated
            terminal to run shell commands. This terminal is particularly
            useful for running Think4Ever specific CLI commands.
          </p>
<p style={{marginTop: '20px'}}>
            You will be using this terminal to run command like start server,
            stop server, reset cache etc.
          </p>
<div className="image-wrapper">
<img alt="Terminal Tab" className="demo-img" src="/assets/images/dev-doc/17-termnial.png"/>
</div>
</section>
</main>
    </div>
  );
};

export default DeveloperTerminal;
