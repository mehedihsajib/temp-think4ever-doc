import React from 'react';

const DesignerAgentEnvSecretsChecker = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    Env Secrets Checker
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            The <strong>Env Secrets Checker</strong> scans application environment and configuration
                            files to identify exposed secrets, weak credentials, and insecure configuration values that
                            may pose a security risk. By inspecting files such as .env and other configuration files, it
                            helps development and operations teams detect sensitive information that should be secured
                            or rotated, reducing the risk of unauthorized access and credential compromise.
                        </p>
<div className="image-wrapper">
<img alt="Env Secrets Checker" className="demo-img" src="/assets/images/think-agent/env-secret-checker-1.png"/>
</div>
<div className="para-box">
<h3 className="h3">
                                Key Features
                            </h3>
<ul className="cd-overview-ul">
<li>
<strong>
                                        Flexible File Selection:
                                    </strong>
<span>
                                        Choose the environment (.env) and configuration files to include in the scan. By
                                        default, all supported files are selected to provide a comprehensive security
                                        assessment.
                                    </span>
</li>
<li>
<strong>
                                        Controlled Scan Planning:
                                    </strong>
<span>
                                        Generates a structured scan plan outlining the selected files and the security
                                        checks to be performed. The plan is presented for review and confirmation before
                                        scanning begins.
                                    </span>
</li>
<li>
<strong>
                                        Automated Secret Detection:
                                    </strong>
<span>
                                        Examines each selected file for exposed API keys, passwords, access tokens,
                                        encryption keys, connection strings, default credentials, weak secret values,
                                        and other sensitive configuration data.
                                    </span>
</li>
<li>
<strong>
                                        Targeted Secret Rotation Report:
                                    </strong>
<span>
                                        Produces a detailed report identifying exposed or weak secrets, along with
                                        recommendations on which credentials should be rotated or replaced. Each finding
                                        includes the affected file and the type of secret detected.
                                    </span>
</li>
<li>
<strong>
                                        Secure Configuration Assessment:
                                    </strong>
<span>
                                        Evaluates configuration files for common security weaknesses and helps
                                        organizations improve secret management practices by identifying credentials
                                        that should be removed from source code or migrated to secure secret management
                                        solutions.
                                    </span>
</li>
</ul>
</div>
<h3 className="h3">
                            Process Workflow
                        </h3>
<div className="para-box">
<h4 className="h4">1. Select Files for Scanning</h4>
<p>
                                Choose the environment and configuration files to analyze. By default, all supported
                                .env and configuration files are selected.
                            </p>
<div className="image-wrapper">
<img alt="Env Secrets Checker" className="demo-img" src="/assets/images/think-agent/env-secret-checker-2.png"/>
</div>
</div>
<div className="para-box">
<h4 className="h4">2. Review the Scan Plan</h4>
<p>
                                Examine the generated scan plan, including the selected files and security checks, to
                                verify that the scope matches your requirements.
                            </p>
</div>
<div className="para-box">
<h4 className="h4">3. Execute the Secret Scan</h4>
<p>
                                Confirm the plan to begin processing. The application scans each selected file for
                                exposed credentials, weak secret values, and insecure configuration settings.
                            </p>
</div>
<div className="para-box">
<h4 className="h4">4. Review the Secret Exposure Report</h4>
<p>
                                Access the generated report containing detected secrets, affected files, and recommended
                                rotation actions. Use the findings to rotate compromised credentials, strengthen secret
                                management practices, and improve the overall security of your application
                                configuration.
                            </p>
<div className="image-wrapper">
<img alt="Env Secrets Checker" className="demo-img" src="/assets/images/think-agent/env-secret-checker-3.png"/>
</div>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentEnvSecretsChecker;
