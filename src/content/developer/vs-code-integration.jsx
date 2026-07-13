import React from "react";

const DeveloperVsCodeIntegration = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Connect your project to VSC (Visual Studio Code)</h1>

        <section>
          <div>
            <img
              alt="VS Code Integration"
              src="/assets/images/dev-doc/vscode-1.png"
            />
          </div>
          <div className="para-box">
            <p>
              To connect your project to <strong>VS Code:</strong>
            </p>
            <ol>
              <li>
                Click the <strong>VS Code</strong> button (highlighted in the
                top-right corner).
              </li>
              <li>
                VS Code Integration popup will be prompted.
                <div>
                  <img
                    alt="VS Code Integration"
                    src="/assets/images/dev-doc/vscode-2.png"
                  />
                </div>
              </li>
              <li>
                Ensure the VS Code extension is installed on your browser. If
                not, click the <strong>Download.vsix</strong> button then
                install.
              </li>
              <li>
                Once installed, click on the extension icon in the sidebar, then
                select <strong>Think4Ever</strong> icon.
              </li>
              <li>
                Click the ... <strong>(More Actions)</strong> icon at the top of
                the Extensions pane.
              </li>
              <li>
                <strong>Click Install</strong> from VSIX
                <div>
                  <img
                    alt="VS Code Integration"
                    src="/assets/images/dev-doc/vscode-3.png"
                  />
                </div>
              </li>
              <li>
                Choose your .vsix file from the file explorer to complete the
                installation.-
              </li>
              <li>
                Once opened, your project files will appear in the Explorer
                panel on the left side.
                <div>
                  <img
                    alt="VS Code Integration"
                    src="/assets/images/dev-doc/vscode-4.png"
                  />
                </div>
              </li>
            </ol>
          </div>
          <div className="para-box">
            <h4>Troubleshooting: If VS Code does not open automatically</h4>
            <p>Try these:</p>
            <ul>
              <li>Allow pop-ups in your browser</li>
              <li>Refresh the page and click the button again</li>
              <li>Check if your browser blocked the redirect</li>
            </ul>
          </div>
          <div className="para-box">
            <h4>Optional: Open Terminal in VS Code</h4>
            <p>Inside VS Code:</p>
            <ul>
              <li>
                Go to <strong>Terminal &rarr; New Terminal</strong>
              </li>
              <li>
                Or press:
                <ul>
                  <li>
                    <strong>Ctrl +</strong> ` (Windows)
                  </li>
                  <li>
                    <strong>Cmd +</strong> ` (Mac)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeveloperVsCodeIntegration;
