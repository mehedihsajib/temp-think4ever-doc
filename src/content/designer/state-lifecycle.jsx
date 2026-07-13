import React from "react";

const DesignerStateLifecycle = () => {
  return (
    <div className="doc-page-content">
      <main>
        <h1>State &amp; Lifecycle Management</h1>
        <section>
          <p>
            Welcome to the <strong>State &amp; Lifecycle</strong> management
            module. This tool allows product managers, developers, and
            operations teams to map out, visualize, and manage state transitions
            across various core business workflows.
          </p>
          <div>
            <img
              alt="State &amp; Lifecycle Management"
              src="/assets/images/state-lifecycle.png"
            />
          </div>
          <div className="para-box">
            <h3>Interface Overview</h3>
            <p>The workspace is split into two primary areas:</p>
            <ul>
              <li>
                <strong>Left Navigation Panel (Sidebar):</strong> Displays a
                searchable catalog of all managed lifecycles. It provides a
                quick glance at the number of defined states per lifecycle
                (e.g., Order Lifecycle, Payment Lifecycle, Shipment / Delivery
                Lifecycle).
              </li>
              <li>
                <strong>Main Canvas Board:</strong> A column-based kanban/flow
                view where each selected lifecycle is expanded into a detailed
                card showing available states (color-coded badges) and
                sequential text-based transition logs below them.
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h3>Core Components of a Lifecycle Card</h3>
            <p>
              Every lifecycle column on the board consists of three distinct
              elements:
            </p>
            <ol>
              <li>
                <strong>Header &amp; Target Badges:</strong> Indicates the
                entity type (e.g., order, payment, shipment) and the field being
                tracked (e.g., status).
              </li>
              <li>
                <strong>State Pool:</strong> Visual pills showing all possible
                milestones or states an entity can inhabit during its life.
                Different colors represent distinct phases (e.g., green for
                successful/completed steps, red for failures or cancellations,
                orange for pending actions).
              </li>
              <li>
                <strong>Transition Mapping Rules:</strong> A structural list
                mapping exactly how a state shifts from Origin &rarr;
                Destination, accompanied by the action alias and the designated
                Actors allowed to trigger it.
              </li>
            </ol>
          </div>
          <div className="para-box">
            <h3>Understanding the Main Lifecycles of an Existing Project</h3>
            <p>
              Let&rsquo;s take this sample project, the platform handles three
              core transactional workflows:
            </p>
            <h4>📑 Order Lifecycle</h4>
            <p>
              Manages the progression of a customer order from placement to
              completion or reversal.
            </p>
            <ul>
              <li>
                <strong>Key States:</strong> Draft, Pending Payment, Paid,
                Processing, Ready for Pickup, Shipped, Delivered, Cancelled,
                Return Requested, Returned, Refunded, Failed.
              </li>
              <li>
                <strong>Example Rule:</strong> pending_payment &rarr; paid via
                Payment Succeeded, triggered by the system.
              </li>
            </ul>
            <h4>💳 Payment Lifecycle</h4>
            <p>
              Tracks the financial transaction state attached to a checkout
              flow.
            </p>
            <ul>
              <li>
                <strong>Key States:</strong> Pending, Authorized, Captured,
                Partially Refunded, Refunded, Failed, Voided, Disputed, Dispute
                Won, Dispute Lost.
              </li>
              <li>
                <strong>Example Rule:</strong> authorized &rarr; captured via
                Capture, triggered by admin, system.
              </li>
            </ul>
            <h4>📦 Shipment / Delivery Lifecycle</h4>
            <p>
              Traces physical fulfillment milestones for packages post-purchase.
            </p>
            <ul>
              <li>
                <strong>Key States:</strong> Created, Label Generated, Picked
                Up, In Transit, Out for Delivery, Delivered, Delivery Failed,
                Returned to Sender, Lost, Cancelled.
              </li>
              <li>
                <strong>Example Rule:</strong> out_for_delivery &rarr; delivered
                via Delivered, triggered by system.
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h3>How to Read and Define Transition Rules</h3>
            <p>
              The text blocks beneath the state pills use a rigid formatting
              syntax to define system architecture logic:
            </p>
            <div
              style={{
                background: "#f8fafc",
                padding: "15px",
                borderRadius: "6px",
                fontFamily: "monospace",
                textAlign: "center",
                margin: "15px 0",
              }}
            >
              [Current State] &rarr; [Next State] <em>Event Name</em> &Omega;
              [Allowed Actor(s)]
            </div>
            <h3>Component Breakdown</h3>
            <ul>
              <li>
                <strong>Origin state (left):</strong> The required state the
                entity must currently hold.
              </li>
              <li>
                <strong>Arrow (&rarr;):</strong> Indicates the unidirectional
                movement path.
              </li>
              <li>
                <strong>Target state (right):</strong> The destination state
                resulting from a successful action.
              </li>
              <li>
                <strong>Italicized Text:</strong> The human-readable event or
                API trigger causing the shift (e.g., Courier Pickup,
                Auto-Timeout).
              </li>
              <li>
                <strong>User Icon (&Omega;):</strong> Displays the permission
                role required to fire the event (e.g., customer, admin, system,
                cs-agent, fulfillment_ops).
              </li>
            </ul>
          </div>
          <div className="para-box">
            <h3>Tips for Managing Lifecycles</h3>
            <ul>
              <li>
                <strong>Searching Objects:</strong> Use the input field at the
                top left of the sidebar (Search all objects...) to isolate
                specific lifecycles when your system scales.
              </li>
              <li>
                <strong>Audit Permissions carefully:</strong> When reviewing
                routes, ensure sensitive transitions (such as captured &rarr;
                refunded) restrictedly list the correct privileged roles like
                admin or cs-agent to prevent system vulnerabilities.
              </li>
              <li>
                <strong>Identifying Dead Ends:</strong> Look for states in the
                visual pool that lack corresponding transition rules beneath
                them; these represent end-states (terminal nodes) like
                Delivered, Refunded, or Cancelled.
              </li>
            </ul>
            <div
              style={{
                background: "#eff6ff",
                borderLeft: "4px solid #3b82f6",
                padding: "15px",
                margin: "20px 0",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <strong>IMPORTANT:</strong> The beauty of a state and lifecycle
              engine like the one built into the Think4ever AI platform is that
              it isn't hardcoded or rigid&mdash;it is entirely custom-tailored
              to the specific application, business model, and operational rules
              you are running.
            </div>
            <p>
              Depending on your application, the lifecycle configurations might
              shift entirely:
            </p>
            <ul>
              <li>
                <strong>Fintech &amp; Banking Platforms:</strong> If you are
                building transactional wallets or core ledger applications, your
                states would revolve around validation pipelines, ledger
                holding, and virtual processing blocks (e.g., KYC_Pending &rarr;
                Wallet_Active or Entry_Posted &rarr; Reconciled).
              </li>
              <li>
                <strong>Content &amp; Media Portals:</strong> If the application
                manages digital assets or tutorials, the lifecycle shifts to
                track creative assets through states like Draft &rarr; Review
                &rarr; Published &rarr; Archived.
              </li>
              <li>
                <strong>Ticket &amp; Bug Tracking Systems:</strong> For internal
                operations, states would reflect QA and issue tracking, mapping
                progress directly across roles from development to verification
                (e.g., Open &rarr; In_Testing &rarr; Not_Fixed or Resolved).
              </li>
            </ul>
            <p>
              Ultimately, these cards serve as a visual blueprint of your
              system's back-end state machine. By mapping them out here, the
              engine ensures that no entity can bypass your defined paths,
              keeping your system data secure, predictable, and aligned with
              your real-world business rules.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignerStateLifecycle;
