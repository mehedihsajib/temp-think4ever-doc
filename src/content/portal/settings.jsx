import React from "react";

const PortalSettings = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Settings</h1>

        <section>
          <p>
            The Settings dashboard allows you to manage your personal profile
            attributes, view global system environment configurations, and audit
            your core account tier capacity restrictions.
          </p>
          <div className="content-box">
            <div>
              <img alt="Settings" src="/assets/images/portal/07-settings.png" />
            </div>
            <h3>Profile Information Module</h3>
            <p>
              This card displays your active identity details and localized
              server environment variables:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>
                <span>
                  The primary registered email address utilized for system
                  access, critical billing alerts, and infrastructure alerts
                  (e.g., amar.nanduri2@moadbus.com).
                </span>
              </li>
              <li>
                <strong>Name:</strong>
                <span>
                  Your custom profile display name (defaults to an empty state
                  &mdash; if not manually configured). populates with an
                  interactive table tracking ticket IDs, categories, dates
                  created, and live resolution statuses.
                </span>
              </li>
              <li>
                <strong>Company:</strong>
                <span>
                  The name of your corporate workspace or enterprise group
                  (defaults to an empty state &mdash; if unconfigured).
                </span>
              </li>
              <li>
                <strong>Phone:</strong>
                <span>
                  Optional contact number for account communications or voice
                  security verifications.
                </span>
              </li>
              <li>
                <strong>Timezone:</strong>
                <span>
                  The standardized baseline time zone used to synchronize your
                  dashboard charts and usage logs (e.g., UTC).
                </span>
              </li>
              <li>
                <strong>Locale:</strong>
                <span>
                  The preferred default interface language setting for your user
                  profile text (e.g., en for English).
                </span>
              </li>
              <li>
                <strong>Region:</strong>
                <span>
                  The backend geographic data center cluster hosting your active
                  development server pipelines (e.g., ca-central-1).
                </span>
              </li>
            </ul>
            <h3>Plan Limits Module</h3>
            <p>
              This card outlines the maximum execution ceilings dictated by your
              active subscription tier:
            </p>
            <ul>
              <li>
                <strong>Max Projects:</strong>
                <span>
                  The hard threshold limit of separate, concurrent workspaces or
                  active development branches allowed on your account (e.g., 5).
                  If you hit this limit, you must delete an idle project or
                  upgrade your tier before initializing a new build.
                </span>
              </li>
              <li>
                <strong>Monthly Tokens:</strong>
                <span>
                  The maximum allotment of processing credits included per
                  calendar billing cycle (e.g., 5.0M tokens). Keep an eye on
                  this baseline alongside your Usage &amp; Analytics matrix to
                  plan manual top-ups or tier modifications accordingly.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortalSettings;
