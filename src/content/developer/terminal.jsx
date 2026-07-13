import React from "react";

const DeveloperTerminal = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Terminal</h1>

        <section>
          <p>
            By clicking on Terminal button you can open the integrated terminal
            to run shell commands. This terminal is particularly useful for
            running Think4Ever specific CLI commands.
          </p>
          <p>
            You will be using this terminal to run command like start server,
            stop server, reset cache etc.
          </p>
          <div>
            <img
              alt="Terminal Tab"
              src="/assets/images/dev-doc/17-termnial.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeveloperTerminal;
