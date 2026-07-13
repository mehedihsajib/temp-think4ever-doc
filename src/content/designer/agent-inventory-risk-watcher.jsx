import React from 'react';

const DesignerAgentInventoryRiskWatcher = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    Inventory Risk Watcher
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            Identify SKUs that are at risk of stocking out or tying up cash in excess inventory before
                            they impact your business.
                        </p>
<div className="image-wrapper">
<img alt="Inventory Risk Watcher" className="demo-img" src="/assets/images/think-agent/inventory-risk-watcher-1.png"/>
</div>
<div className="para-box">
<h3 className="h3">
                                How it works
                            </h3>
<ol className="cd-overview-ol">
<li>
<strong>
                                        Set Priorities -
                                    </strong>
<span>
                                        Choose what the analysis should prioritize and add any notes or instructions.
                                    </span>
</li>
<li>
<strong>
                                        Review &amp; Confirm -
                                    </strong>
<span>
                                        Review the execution plan and confirm before the analysis begins.
                                    </span>
</li>
<li>
<strong>
                                        Risk Analysis -
                                    </strong>
<span>
                                        Every SKU is evaluated and assigned a score based on its likelihood of stockout
                                        or overstock.
                                    </span>
</li>
<li>
<strong>
                                        Actionable Results &ndash;
                                    </strong>
<span>
                                        Receive an urgency-ranked list of SKUs, with a clear explanation of why each
                                        item was flagged.
                                    </span>
</li>
</ol>
</div>
<div className="para-box">
<h3 className="h3">
                                Output
                            </h3>
<ul className="cd-overview-ul">
<li>
                                    Stockout risk score for each SKU
                                </li>
<li>Overstock risk score for each SKU</li>
<li>Priority-ranked inventory list</li>
<li>Reason for every risk flag</li>
<li>Recommendations to help focus replenishment and inventory reduction efforts</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">
                                Data Source
                            </h3>
<p>
                                Reads data from your project's inventory_items table by default. If your inventory data
                                is stored in a different table,
                                you can modify the SQL query to match your schema.
                            </p>
<div className="image-wrapper">
<img alt="Inventory Risk Watcher" className="demo-img" src="/assets/images/think-agent/inventory-risk-watcher-2.png"/>
</div>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentInventoryRiskWatcher;
