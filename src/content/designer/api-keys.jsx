import React from 'react';

const DesignerApiKeys = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="dev_api_keys.title">API Keys</h1>

<div className="yt-video" data-video-id="pXEXoWqDPys"></div>
<p className="cd-overview-p" data-i18n="dev_api_keys.intro">
            The API Keys section is the central hub for managing your
            application's secure access to integrated AI models and third-party
            services. This page is split into two primary areas:
          </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_api_keys.area1_title">Key Management:</strong>
<span data-i18n="dev_api_keys.area1_desc">Where you can view, create, and secure your personal API
                keys.</span>
</li>
<li>
<strong data-i18n="dev_api_keys.area2_title">Usage Dashboard:</strong>
<span data-i18n="dev_api_keys.area2_desc">Where you can track api requests, token consumption, and
                associated costs across all active models in real-time.</span>
</li>
</ul>
<img alt="API Keys Overview" className="demo-img" src="/assets/images/api-keys-1.png"/>
<p className="cd-overview-p" data-i18n-html="dev_api_keys.access_note">
            Access this section from the main sidebar under the
            <strong>Getting Started</strong> category.
          </p>

<div className="doc-section">
<h2 className="doc-heading" data-i18n="dev_api_keys.managing_title">
              Managing Your Personal API Keys
            </h2>
<p className="cd-overview-p" data-i18n="dev_api_keys.managing_intro">
              This section, found at the top of the page, lists all API keys
              currently configured for your account.
            </p>
<h3 className="doc-subheading" data-i18n="dev_api_keys.viewing_keys_title">
              1. Viewing Keys
            </h3>
<ul style={{marginBottom: '8px'}} className="cd-overview-ul">
<li data-i18n-html="dev_api_keys.viewing_keys_desc">
                If no keys have been set up yet, the dashboard will display a
                key icon with the message "No personal API keys configured."
              </li>
</ul>
<img style={{maxWidth: '600px'}} alt="No API Keys configured" className="demo-img" src="/assets/images/api-keys-2.jpg"/>
<h3 className="doc-subheading" data-i18n="dev_api_keys.creating_keys_title">
              2. Creating a New Key
            </h3>
<ol style={{marginBottom: '8px'}} className="cd-overview-ol">
<li data-i18n-html="dev_api_keys.creating_keys_step1">
                Click the blue <strong>"+ Add New Key"</strong> button.
              </li>
</ol>
<img style={{maxWidth: '600px'}} alt="Add New Key Button" className="demo-img" src="/assets/images/api-keys-3.png"/>
<ol className="cd-overview-ol" start="2">
<li data-i18n="dev_api_keys.creating_keys_step2">
                Follow the prompt to name and configure your new API key.
              </li>
<li style={{color: '#b91c1c !important'}} className="warning" data-i18n-html="dev_api_keys.creating_keys_step3">
<strong className="warning">Warning:</strong>
                Ensure you copy and securely store the key upon creation. For
                security reasons, the full key may not be displayed again.
              </li>
</ol>
<img style={{maxWidth: '400px'}} alt="Add API Key Modal" className="demo-img" src="/assets/images/api-keys-4.png"/>
</div>

<div className="doc-section">
<h2 className="doc-heading" data-i18n="dev_api_keys.dashboard_title">
              3. Usage Dashboard (Scrollable Section)
            </h2>
<p className="cd-overview-p" data-i18n="dev_api_keys.dashboard_intro">
              The Usage Dashboard provides granular, real-time analytics on your
              project's interaction with the integrated AI services (e.g.,
              Claude, Gemini).
            </p>
<h3 style={{textDecoration: 'underline'}} className="doc-sub-subheading" data-i18n="dev_api_keys.dashboard_3_1_title">
              3.1. Filter and Control
            </h3>
<p style={{marginTop: '0'}} className="cd-overview-p" data-i18n="dev_api_keys.dashboard_3_1_intro">
              Located in the top-right corner of the dashboard panel.
            </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_api_keys.dashboard_3_1_f1_title">Timeframe Filter:</strong>
<span data-i18n="dev_api_keys.dashboard_3_1_f1_desc">Use the dropdown menu (e.g., "Last 30 days") to change the
                  period for which data is displayed.</span>
</li>
<li>
<strong data-i18n="dev_api_keys.dashboard_3_1_f2_title">Refresh Button:</strong>
<span data-i18n="dev_api_keys.dashboard_3_1_f2_desc">Click this icon to instantly update all dashboard metrics
                  with the latest data.</span>
</li>
</ul>
<h3 style={{textDecoration: 'underline'}} className="doc-sub-subheading" data-i18n="dev_api_keys.dashboard_3_2_title">
              3.2. Key Metrics Overview
            </h3>
<p style={{marginTop: '0'}} className="cd-overview-p" data-i18n="dev_api_keys.dashboard_3_2_intro">
              Four key metric cards summarize the activity for the selected
              timeframe.
            </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_api_keys.dashboard_3_2_f1_title">Total Requests:</strong>
<span data-i18n="dev_api_keys.dashboard_3_2_f1_desc">The aggregate number of distinct calls made to all API
                  models.</span>
</li>
<li>
<strong data-i18n="dev_api_keys.dashboard_3_2_f2_title">Total Tokens:</strong>
<span data-i18n="dev_api_keys.dashboard_3_2_f2_desc">The total combined number of tokens processed (Prompt +
                  Completion).</span>
</li>
<li>
<strong data-i18n="dev_api_keys.dashboard_3_2_f3_title">Approx. Cost:</strong>
<span data-i18n="dev_api_keys.dashboard_3_2_f3_desc">The estimated financial cost, in USD, accrued based on the
                  current usage period.</span>
</li>
<li>
<strong data-i18n="dev_api_keys.dashboard_3_2_f4_title">Cache Read Tokens:</strong>
<span data-i18n="dev_api_keys.dashboard_3_2_f4_desc">The number of tokens retrieved from the cache, which often
                  saves time and cost.</span>
</li>
</ul>
<img alt="Usage Dashboard Metrics" className="demo-img" src="/assets/images/api-keys-5.png"/>
</div>

<div className="doc-section">
<h2 className="doc-heading" data-i18n="dev_api_keys.analyzing_title">
              4. Analyzing Usage Data
            </h2>
<p className="cd-overview-p" data-i18n="dev_api_keys.analyzing_intro">
              Below the key metric cards are detailed visualizations and tables
              for deeper analysis.
            </p>
<h3 style={{textDecoration: 'underline'}} className="doc-sub-subheading" data-i18n="dev_api_keys.analyzing_4_1_title">
              4.1. Daily Usage Chart
            </h3>
<p style={{marginTop: '0'}} className="cd-overview-p" data-i18n="dev_api_keys.analyzing_4_1_intro">
              This bar chart illustrates your Daily Usage (Tokens) over time.
            </p>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_api_keys.analyzing_4_1_f1_title">Hovering:</strong>
<span data-i18n="dev_api_keys.analyzing_4_1_f1_desc">Hover over individual bars to see the exact token breakdown
                  for that specific day, segmented by model.</span>
</li>
<li>
<strong data-i18n="dev_api_keys.analyzing_4_1_f2_title">Legend:</strong>
<span data-i18n="dev_api_keys.analyzing_4_1_f2_desc">The legend (e.g., claude-opus-4-x, gemini-1-5-pro-preview)
                  shows which models are contributing to the daily volume.</span>
</li>
</ul>
<h3 style={{textDecoration: 'underline'}} className="doc-sub-subheading" data-i18n="dev_api_keys.analyzing_4_2_title">
              4.2. Usage by Model
            </h3>
<p style={{marginTop: '0'}} className="cd-overview-p" data-i18n="dev_api_keys.analyzing_4_2_intro">
              This detailed table breaks down performance metrics by specific AI
              model:
            </p>
<ul className="cd-overview-ul">
<li data-i18n-html="dev_api_keys.model_cols.0">
<strong>MODEL:</strong> The name and provider of the AI model.
              </li>
<li data-i18n-html="dev_api_keys.model_cols.1">
<strong>REQUESTS:</strong> Number of requests made to this
                specific model.
              </li>
<li data-i18n-html="dev_api_keys.model_cols.2">
<strong>PROMPT TOKENS:</strong> Tokens sent to the model
                (input).
              </li>
<li data-i18n-html="dev_api_keys.model_cols.3">
<strong>COMPLETION TOKENS:</strong> Tokens generated by the
                model (output).
              </li>
<li data-i18n-html="dev_api_keys.model_cols.4">
<strong>TOTAL TOKENS:</strong> The sum of prompt and completion
                tokens.
              </li>
<li data-i18n-html="dev_api_keys.model_cols.5">
<strong>CACHE READ/WRITE:</strong> Tokens retrieved from cache
                versus those written to cache.
              </li>
<li data-i18n-html="dev_api_keys.model_cols.6">
<strong>AVG TIME:</strong> Average latency (response time) for
                requests.
              </li>
<li data-i18n-html="dev_api_keys.model_cols.7">
<strong>COST:</strong> The specific cost associated with using
                that individual model.
              </li>
</ul>
<img alt="Usage by Model Table" className="demo-img" src="/assets/images/api-keys-6.png"/>
<h3 style={{marginTop: '48px'}} className="doc-subheading" data-i18n="dev_api_keys.transaction_title">
              4.3. Transaction History (Detailed Logs)
            </h3>
<p style={{marginTop: '0'}} className="cd-overview-p" data-i18n="dev_api_keys.transaction_intro">
              Located at the bottom of the page (scroll down), this table
              provides a high-level transaction log for every single request.
            </p>
<strong style={{display: 'block', marginTop: '24px', fontFamily: 'Inter', color: '#1e293b'}} data-i18n="dev_api_keys.filtering_title">Filtering and Sorting</strong>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="dev_api_keys.filtering_f1_title">All Models Dropdown:</strong>
<span data-i18n="dev_api_keys.filtering_f1_desc">Filter the log to show only transactions for a specific model
                  (e.g., view only Claude logs).</span>
</li>
<li>
<strong data-i18n="dev_api_keys.filtering_f2_title">All Status Dropdown:</strong>
<span data-i18n="dev_api_keys.filtering_f2_desc">Filter by transaction status (e.g., view only "Success" or
                  "Error" transactions).</span>
</li>
</ul>
<strong style={{display: 'block', marginTop: '24px', fontFamily: 'Inter', color: '#1e293b'}} data-i18n="dev_api_keys.log_title">Log Data Columns</strong>
<ul className="cd-overview-ul">
<li data-i18n-html="dev_api_keys.log_cols.0">
<strong>TIME:</strong> The exact timestamp of the request.
              </li>
<li data-i18n-html="dev_api_keys.log_cols.1">
<strong>TOTAL TOKENS:</strong> The tokens used in that specific
                request.
              </li>
<li data-i18n-html="dev_api_keys.log_cols.2">
<strong>CACHE READ/WRITE:</strong> Cache performance for that
                specific request.
              </li>
<li data-i18n-html="dev_api_keys.log_cols.3">
<strong>TIME (MS):</strong> The total execution time of the
                request in milliseconds.
              </li>
<li data-i18n-html="dev_api_keys.log_cols.4">
<strong>COST:</strong> The exact cost, in USD, incurred by this
                single transaction.
              </li>
</ul>
<img alt="Transaction History" className="demo-img" src="/assets/images/api-keys-7.png"/>
</div>
</main>
    </div>
  );
};

export default DesignerApiKeys;
