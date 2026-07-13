import React from "react";

const DesignerEventsJobs = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>Events &amp; Jobs</h1>

        <section>
          <p>
            Welcome to the <strong>Events &amp; Jobs</strong> management module
            of the platform. This module allows you to configure, monitor, and
            automate background processes that drive your application's state
            lifecycles.
          </p>
          <div>
            <img
              alt=" Events &amp; Jobs"
              src="/assets/images/events-and-jobs.png"
            />
          </div>
          <div className="para-box">
            <h3>Interface Overview</h3>
            <p>The workspace consists of two main sections:</p>
            <ul>
              <li>
                <strong>Left Navigation Panel:</strong> A searchable, scrollable
                sidebar showing a comprehensive directory of all configured
                events and cron jobs. It indicates the count of active triggers
                and lists shorthand endpoint details or cron frequencies.
              </li>
              <li>
                <strong>Main Workspace Grid:</strong> A canvas displaying
                interactive cards for each event or job. Each card specifies the
                execution type, precise triggering conditions, a technical
                operational description, and associated service tags.
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h3>Types of Tasks</h3>
            <p>
              The system categorizes asynchronous tasks into two primary
              execution formats, distinguished by their card headers and icons:
            </p>
            <h4>🕒 Scheduled Jobs (Cron Tasks)</h4>
            <p>
              These jobs run automatically at specific time intervals defined by
              traditional cron expressions. They are ideal for sweeping data
              tables, catching expired statuses, or cleaning up stale records.
            </p>
            <ul>
              <li>
                <strong>Visual Indicator:</strong> Orange clock icon with a
                "Scheduled" badge.
              </li>
              <li>
                <strong>Key Information Displayed:</strong> The exact cron
                syntax along with a human-readable execution frequency (e.g.,
                every minute or daily 02:00).
              </li>
            </ul>
            <h4>🔗 Webhook Handlers (Event-Driven Triggers)</h4>
            <p>
              These handlers listen for real-time HTTP POST requests sent by
              external third-party microservices (such as payment gateways or
              shipping carriers) to instantly push updates to your application.
            </p>
            <ul>
              <li>
                <strong>Visual Indicator:</strong> Blue chain-link icon with a
                "Webhook" badge.
              </li>
              <li>
                <strong>Key Information Displayed:</strong> The dedicated API
                routing endpoint path (e.g., POST /api/v1/webhooks/stripe).
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h3>Core Functional Configurations</h3>
            <p>
              Based on the environment shown in the reference image, the system
              is split across several core operations:
            </p>
            <h4>A. Payment &amp; Dispute Automation (Stripe Integration)</h4>
            <p>
              The system tracks payment intents and disputes through real-time
              webhook listeners and scheduled sweeps:
            </p>
            <ul>
              <li>
                <strong>Stripe payment_intent.succeeded Handler:</strong>{" "}
                Verifies the payment signature, transitions the payment state,
                and marks the attached order as paid.
              </li>
              <li>
                <strong>Stripe payment_intent.payment_failed Handler:</strong>{" "}
                Captures transaction declines to transition the order state and
                notify the customer.
              </li>
              <li>
                <strong>Stripe charge.dispute.created Handler:</strong>{" "}
                Automatically freezes related orders when a chargeback is
                initiated, alerting admins and customer service teams to gather
                evidence.
              </li>
              <li>
                <strong>Order Pending-Payment Timeout Check:</strong> A
                background cron running every minute to automatically cancel
                orders stuck in a pending payment state for more than 30
                minutes, freeing up inventory.
              </li>
            </ul>
            <h4>B. Shipping &amp; Logistics Automation</h4>
            <p>
              Tracks physical fulfillment updates by consuming webhooks from
              shipping providers or tracking aggregators:
            </p>
            <ul>
              <li>
                <strong>Courier Tracking Updated Handler:</strong> Processes
                incoming status scans to step through shipment milestones.
              </li>
              <li>
                <strong>Courier Delivered Handler:</strong> Stores the Proof of
                Delivery (POD) URL, updates the status to delivered, and
                schedules automated post-purchase customer follow-ups.
              </li>
              <li>
                <strong>Courier Exception Handler:</strong> Manages transit
                errors. It increments delivery attempt counts, schedules retries
                if under the threshold, or marks the status as returned to
                sender.
              </li>
              <li>
                <strong>Shipment No-Scan Lost Check:</strong> A daily cron job
                that flags shipments with no carrier scans for 7 days as
                potentially lost, initiating automated insurance claims.
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h3>Understanding Card Anatomy</h3>
            <p>
              Every card in the workspace grid breaks down complex backend logic
              into a highly readable template:
            </p>
            <div>
              <img
                alt="API Endpoints"
                className="Events &amp; Jobs"
                src="/assets/images/events-and-jobs-card.png"
              />
            </div>
            <div
              style={{
                background: "#eff6ff",
                borderLeft: "4px solid #3b82f6",
                padding: "15px",
                margin: "20px 0",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <strong>The Importance of Service Tags:</strong> At the bottom of
              each card, blue metadata badges indicate which entities or
              third-party services are impacted by the block. For instance, a
              card tagged with <code>stripe</code> and <code>sendgrid</code>{" "}
              indicates that the code queries your payment processor and
              triggers automated transactional emails.
            </div>
          </div>
          <div className="para-box">
            <h3>Best Practices for Modifying Events</h3>
            <ul>
              <li>
                <strong>Filter with Context:</strong> Use the search bar in the
                left navigation panel to isolate tasks belonging to specific
                microservices or endpoints.
              </li>
              <li>
                <strong>Prevent State Deadlocks:</strong> Ensure that the
                conditions defined in your Scheduled Jobs (e.g., timing out an
                order) exactly align with the valid paths established within
                your State Lifecycle rules.
              </li>
              <li>
                <strong>Verify Webhook Signatures:</strong> When creating or
                modifying a Webhook Handler, always include a signature
                verification step in the Action definition to ensure inbound
                traffic originates securely from trusted providers like Stripe
                or your courier service.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerEventsJobs;
