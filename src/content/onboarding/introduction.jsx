import React from "react";

const OnboardingIntroduction = () => {
  return (
    <div className="doc-page-content">
      <div>
        <div className="content-header">
          <h2 className="main-title">Introduction</h2>
          <p className="main-description">
            The Think4Ever Home Page serves as the main landing page of the
            platform. It introduces users to the platform&rsquo;s AI-powered
            software development capabilities and provides quick access to key
            sections such as Features, Packages, Sign In, and Getting Started.
          </p>
        </div>
        <div className="bento-grid">
          <section className="bento-card">
            <div>
              <img
                alt=""
                src="/assets/images/customer-onboard/00-homepage.png"
              />
            </div>
          </section>
        </div>
        <h3>Navigation Bar</h3>
        <p>
          Located at the top of the page, the navigation bar provides quick
          access to important sections of the platform.
        </p>
        <p>Available Menu Options</p>
        <ul>
          <li>
            Features &ndash; Displays the platform capabilities and tools.
          </li>
          <li>
            How It Works &ndash; Explains the Think4Ever workflow and AI-driven
            process.
          </li>
          <li>
            How It Works &ndash; Explains the Think4Ever workflow and AI-driven
            process.
          </li>
          <li>
            Packages &ndash; Shows available subscription plans or service
            offerings.
          </li>
        </ul>
        <h4>Action Buttons</h4>
        <ul>
          <li>Sign In &ndash; Redirects users to the login page.</li>
          <li>
            Get Started &ndash; Begins the onboarding or registration process
            for new users.
          </li>
        </ul>
        <h4>How to Use the Home Page</h4>
        <p>For Existing Users</p>
        <ol>
          <li>Click Sign In.</li>
          <li>Enter your credentials on the Login page.</li>
          <li>Access your dashboard and projects.</li>
        </ol>
        <p>For New Users</p>
        <ol>
          <li>Click Get Started.</li>
          <li>Complete the registration or onboarding process.</li>
          <li>Begin creating projects using the platform tools.</li>
        </ol>
        <p>To Learn About the Platform</p>
        <ul>
          <li>Use the Features menu to explore platform capabilities.</li>
          <li>Select How It Works to understand the AI-assisted workflow.</li>
          <li>Review Packages for available plans and services.</li>
        </ul>
      </div>
    </div>
  );
};

export default OnboardingIntroduction;
