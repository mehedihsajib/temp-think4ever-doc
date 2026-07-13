import React from 'react';

const DesignerApiEndpoints = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" data-i18n="dev_intro.title" id="cdHomeTitle">
                    API Endpoint
                </h1>

<section className="cd-overview" id="cdHomeOverview">
<p>
<strong>The API Endpoints</strong> sidebar provides quick access to view and manage all backend
                        service routes available in your project
                        configuration. The
                    </p>
<div className="image-wrapper">
<img alt="API Endpoints" className="demo-img" src="/assets/images/api_endpoints.png"/>
</div>
<div className="para-box">
<p>Here is a detailed breakdown of each element in the API endpoint card component, structured
                            for clear inclusion in a
                            user manual or technical documentation.</p>
<div className="image-wrapper">
<img alt="API Endpoints" className="demo-img" src="/assets/images/api_endpoint_details.png"/>
</div>
</div>
<div className="para-box">
<h3 className="h4">API Header Section</h3>
<ul className="cd-overview-ul">
<li>
<strong>HTTP Method Badge (POST):</strong>
<span>A blue badge indicating the HTTP request method used for this endpoint.</span>
</li>
<li>
<strong>Endpoint Path (/api/v1/auth/signup):</strong>
<span>The relative URL path for the API request.</span>
</li>
<li>
<strong>Visibility/Access Badge (public):</strong>
<span>
                                    A grey pill badge featuring an open padlock icon, signifying that this endpoint is
                                    publicly accessible and does not
                                    require an active authentication token to call.
                                </span>
</li>
<li>
<strong>Comment/Discussion Icon:</strong>
<span>A speech bubble icon located on the far right, used to view or add notes,
                                    comments, or discussions related to this
                                    specific endpoint.
                                </span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h4">Endpoint Details Section</h3>
<ul className="cd-overview-ul">
<li>
<strong>Endpoint Title (Signup):</strong>
<span>The user-friendly name of the API operation.</span>
</li>
<li>
<strong>Description (Create new customer account.):</strong>
<span>A brief summary explaining the functional purpose of the endpoint.</span>
</li>
<li>
<strong>Request Fields Counter (&darr; 6 req fields):</strong>
<span>
                                    A badge with a downward-facing arrow indicating that the incoming API request
                                    payload contains or expects 6 request
                                    fields.
                                </span>
</li>
<li>
<strong>Response Fields Counter (&uarr; 6 res fields):</strong>
<span>A badge with an upward-facing arrow indicating that the outgoing API response
                                    payload returns 6 response fields.
                                </span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h4">Metadata &amp; Dependencies Tags</h3>
<p>
                            The bottom section displays the underlying architecture, data models, and integrations
                            associated with the endpoint,
                            categorized by their distinct icons:
                        </p>
</div>
<div className="para-box">
<h3 className="h4">Data Models (Database Icon)</h3>
<ul className="cd-overview-ul">
<li>
<strong>customer:</strong>
<span>Indicates a dependency on or modification of the customer data
                                    entity/table.</span>
</li>
<li>
<strong>session:</strong>
<span>Indicates the endpoint interacts with or generates session-related data
                                    models.</span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h4">Business Logic / Workflows (Flow/Node Icon)</h3>
<ul className="cd-overview-ul">
<li>
<strong>auth-signup-flow:</strong>
<span>Represents the underlying automated workflow or business rule execution map
                                    triggered by this endpoint.</span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h4">User Interface (Monitor Icon)</h3>
<ul className="cd-overview-ul">
<li>
<strong>signup-screen:</strong>
<span>Maps the technical API endpoint directly to its corresponding UI view or frontend
                                    component.</span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h4">Integrations / Third-Party Services (Plug Icon)</h3>
<ul className="cd-overview-ul">
<li>
<strong>auth0:</strong>
<span>Indicates an external integration with Auth0 for identity verification and
                                    credential management.</span>
</li>
<li>
<strong>sendgrid:</strong>
<span>Indicates an external integration with SendGrid, likely used to trigger
                                    transactional emails (e.g., welcome emails or
                                    verification links) upon successful signup.</span>
</li>
</ul>
</div>

<div className="yt-video" data-video-id="CQpIODqNFek"></div>
</section>
</main>
    </div>
  );
};

export default DesignerApiEndpoints;
