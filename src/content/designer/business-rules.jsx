import React from "react";

const DesignerBusinessRules = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Business Rules</h1>
        <p className="cd-overview-p" data-i18n-html="dev_br.intro">
          Business Rules are the "if/then" logic that governs your app's
          behavior, independent of the code.
        </p>

        <div className="yt-video" data-video-id="kWxnCu0vh_I"></div>
        <div className="doc-section">
          <ul>
            <li>
              <strong>Example:</strong>
              <span data-i18n-html="dev_br.f1_desc">
                "If a user has a Free tier account, they can only upload 1
                document per month."
              </span>
            </li>
            <li>
              <strong>Usage:</strong>
              <span data-i18n-html="dev_br.f2_desc">
                Centralize the logic that determines how the business operates.
              </span>
            </li>
          </ul>
          <img
            alt="Business Rules Configuration"
            src="/assets/images/b-rules.png"
          />
        </div>
      </main>
    </div>
  );
};

export default DesignerBusinessRules;
