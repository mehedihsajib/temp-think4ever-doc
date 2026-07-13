import React from 'react';

const PortalBilling = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">

<h1 className="cd-page-title" id="cdHomeTitle">Billing</h1>

<section className="cd-overview" id="cdHomeOverview">
<p className="cd-overview-text">
            The Billing module allows you to track your current subscription
            tier, monitor overall account balances, handle manual overages,
            and manage promotional coupon codes.
          </p>
<div className="content-box">
<div className="image-wrapper">
<img alt="Billing" className="demo-img" src="/assets/images/portal/04-billing.png"/>
</div>
<h3 className="h3">Sub-Tab Navigation Bar</h3>
<ul className="cd-overview-ul">
<li>
<strong>Overview (Current View):</strong>
<span>A high-level view showing your active plan pricing and a
                  snapshot of your account's financial standing.
                </span>
</li>
<li>
<strong>Payments:</strong>
<span>A portal to view historical receipts, download transaction
                  invoices, and track past charges.
                </span>
</li>
<li>
<strong>By Model:</strong>
<span>Breaks down consumption data based on the specific AI model
                  engines processing your requests.
                </span>
</li>
<li>
<strong>Methods:</strong>
<span>The interface to add, remove, or modify your saved payment
                  sources (e.g., credit cards or digital wallets).
                </span>
</li>
</ul>
<h3 className="h3">Subscription Details Card</h3>
<p>
              This panel outlines the parameters of your operational service
              contract with Think4Ever:
            </p>
<ul className="cd-overview-ul">
<li>
<strong>Plan:</strong>
<span>Identifies your current tier (e.g., Think New). </span>
</li>
<li>
<strong>Status:</strong>
<span>The deployment health of your plan (e.g., a green active
                  badge means your pipeline processing is fully enabled).
                </span>
</li>
<li>
<strong>Billing Period:</strong>
<span>The flat rate charged at the start of each cycle (e.g.,
                  $25.00/mo).
                </span>
</li>
<li>
<strong>Base Price:</strong>
<span>The interface to add, remove, or modify your saved payment
                  sources (e.g., credit cards or digital wallets).
                </span>
</li>
<li>
<strong>Current Period Ends: </strong>
<span>The precise date your next renewal invoice generates (e.g.,
                  Jun 13, 2026).
                </span>
</li>
<li>
<strong>Action Buttons: </strong>
<span>Change Plan: Clicking this opens up an overlay menu to
                  scale up to higher-volume tiers or downscale based on your
                  team's shifting technical needs.
                </span>
<ul>
<li>
<strong>Cancel</strong>
<span>Clicking this will initiate the termination flow for
                      your active subscription at the end of the current
                      billing cycle.
                    </span>
</li>
</ul>
</li>
</ul>
<h3 className="h3">Account Balance Card</h3>
<p>
              This panel summarizes your immediate asset reserves and
              short-term liabilities:
            </p>
<ul className="cd-overview-ul">
<li>
<strong>Available Credits:</strong>
<span>The total volume of operational currency remaining on the
                  account (e.g., 8,116).
                </span>
</li>
<li>
<strong>Used This Month:</strong>
<span>
                  Tracks your usage relative to the base plan allotment (e.g.,
                  11,584 / 500 included).
                </span>
</li>
<li>
<strong>Lifetime Purchased:</strong>
<span>
                  The historical total of all baseline and on-demand credits
                  added to this account since creation (e.g., 27,700).
                </span>
</li>
<li>
<strong>Pending USD Charges: </strong>
<span>
                  The current unbilled dollar amount accumulated due to
                  metered credit overages outside your base plan flat rate
                  (e.g., $0.00).
                </span>
</li>
<li>
<strong>Status:</strong>
<span>An administrative indicator showing if your financial
                  standing is clear (e.g., a green clear badge confirms no
                  overdue invoice amounts).
                </span>
</li>
<li>
<strong>Auto-pay:</strong>
<span>
                  Displays whether automatic billing is activated for renewals
                  and overages (e.g., a green checkmark indicating Enabled).
                </span>
</li>
<li>
<strong>Buy More Credits:</strong>
<span>Clicking this blue button allows you to instantly purchase
                  a one-off batch of additional credits to replenish your
                  balance
                </span>
</li>
</ul>
<h3 className="h3">Promotional Module</h3>
<ul className="cd-overview-ul">
<li>
<strong>Apply Coupon:</strong>
<span>Located at the bottom of the balance section, this
                  sub-module allows you to enter alphanumeric promotional or
                  discount codes. Input your text into the Enter coupon code
                  input field and click the Apply button to update your
                  billing parameters or add bonus credits.
                </span>
</li>
</ul>
<h3 className="h3">Payments</h3>
<p>
              This is where user can view historical receipts, download
              transaction invoices, and track past charges.
            </p>
<div className="image-wrapper">
<img alt="Payments" className="demo-img" src="/assets/images/portal/04-payments.png"/>
</div>
<h3 className="h3">Methods</h3>
<p>
              The interface to add, remove, or modify your saved payment
              sources (e.g., credit cards or digital wallets).
            </p>
<div className="image-wrapper">
<img alt="Methods" className="demo-img" src="/assets/images/portal/04-methods.png"/>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default PortalBilling;
