import React from "react";

const OnboardingCreateAccount = () => {
  return (
    <div className="doc-page-content">
      <div>
        <div className="content-header">
          <h2 className="main-title">Create Account</h2>
          <p className="main-description">
            Welcome to Think4ever, the entirely agentic full-cycle development
            platform. To begin building your software development lifecycle
            pipeline, you first need to register or access your dashboard.
          </p>
        </div>
        <div className="bento-grid">
          <section style={{ gridColumn: "1 / -1" }} className="bento-card">
            <div
              style={{
                width: "100%",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
              }}
            >
              <img
                style={{ width: "100%", height: "auto" }}
                alt="Landing Page"
                src="/assets/images/customer-onboard/t4e-website-main.png"
              />
            </div>
          </section>
          <section className="bento-card">
            <div className="card-body">
              <div className="card-badge">Option 1</div>
              <h3 className="card-title">Top Navigation Bar</h3>
              <p className="card-text">
                Click the blue <strong>Get Started</strong> button located in
                the top right-hand corner of the page.
              </p>
            </div>
            <div>
              <img
                alt="Think4Ever Portal Home"
                src="/assets/images/customer-onboard/t4e-portal-home-light.png"
              />
            </div>
          </section>
          <section className="bento-card">
            <div className="card-body">
              <div className="card-badge">Option 2</div>
              <h3 className="card-title">Main Hero Section</h3>
              <p className="card-text">
                Click the central blue <strong>Start Building</strong> button
                located right below the main headline text.
              </p>
              <div className="terms-box">
                <p style={{ fontSize: "0.85rem", fontStyle: "italic" }}>
                  💡 Tip: Both options lead to the same registration pipeline.
                  Whether you prefer the dark mode theme or the light mode
                  theme, these buttons remain in the same structural locations.
                </p>
              </div>
            </div>
            <div>
              <img
                alt="Think4Ever Portal Home"
                src="/assets/images/customer-onboard/t4e-portal-home-dark.png"
              />
            </div>
          </section>
          <div className="content-box">
            <h3>Think4ever Create your Account Form</h3>
            <p>
              <strong>Step-by-Step Registration Guide:</strong> To create your
              account, please fill out the following fields on the registration
              screen.
            </p>
            <div style={{ maxWidth: "300px" }}>
              <img
                alt="Registration Form"
                src="/assets/images/customer-onboard/t4e-registration-form.png"
              />
            </div>
            <h4>Personal Information</h4>
            <ul>
              <li>
                <strong>First Name:</strong> Enter your given name in the first
                field.
              </li>
              <li>
                <strong>Last Name:</strong> Enter your surname in the second
                field.
              </li>
            </ul>
            <h4>Account &amp; Company Details</h4>
            <ul>
              <li>
                <strong>Email (Required):</strong> Enter your professional or
                preferred email address (e.g., you@company.com).
              </li>
              <li>
                <strong>Company Name:</strong> Enter the legal or operational
                name of your organization.
              </li>
            </ul>
            <h4>Server Region</h4>
            <p>
              Select your preferred data residency and deployment region from
              the available buttons:
            </p>
            <ul>
              <li>🇺🇸 United States</li>
              <li>🇨🇦 Canada</li>
              <li>🇪🇺 Europe</li>
              <li>🇮🇳 India</li>
              <li>🇦🇺 Australia</li>
            </ul>
            <h4>Security &amp; Password Selection</h4>
            <ul>
              <li>
                <strong>Password (Required):</strong> Create a strong password.
                It must meet the following criteria checklist:
                <ul>
                  <li>At least 10 characters</li>
                  <li>Lowercase letter</li>
                  <li>Symbol (!@#$...)</li>
                  <li>Uppercase letter</li>
                  <li>Number</li>
                </ul>
              </li>
              <li>
                <strong>Confirm Password (Required):</strong> Re-enter your
                password exactly as typed above to ensure accuracy.
              </li>
            </ul>
            <h4>Human Verification</h4>
            <ul>
              <li>
                <strong>Slide to Verify:</strong> Click and drag the blue arrow
                button ➔ completely to the right where it says "Slide right to
                verify you're human".
              </li>
            </ul>
            <h4>Preferences &amp; Agreements</h4>
            <ul>
              <li>
                <strong>Marketing Optional Checkbox:</strong> (Optional) Check
                this box if you would like to receive product updates, tips, and
                offers from Think4ever. Leaving this unchecked will not affect
                your account status.
              </li>
              <li>
                <strong>Terms of Service:</strong> Note that by clicking the
                final registration button, you automatically agree to the
                platform's Terms of Service and Privacy Policy. Read and accept
                the Terms and Conditions.
              </li>
            </ul>
            <h4>OTP Verification</h4>
            <p>
              An email containing a One-Time Password (OTP) will be sent to the
              email address you used during registration to verify your
              identity. Enter the OTP to complete the verification process.
            </p>
          </div>
          <section className="bento-card">
            <div className="card-body">
              <div className="card-badge">Completed</div>
              <h3 className="card-title">Portal Dashboard</h3>
              <p className="card-text">
                And you are taken to your Think4ever portal Dashboard! You are
                ready to start building your software development lifecycle
                pipeline.
              </p>
            </div>
            <div>
              <img
                alt="Dashboard"
                src="/assets/images/customer-onboard/t4e-portal-dashboard.png"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCreateAccount;
