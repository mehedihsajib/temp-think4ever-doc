import React from 'react';

const DesignerDatabase = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" data-i18n="database.title">Database</h1>
<div className="doc-section">
<p className="cd-overview-p" data-i18n-html="database.intro">
              The <strong>Database Connections</strong> module is the technical
              foundation of your application. In a high-integrity project like
              <strong>TransparencySeal</strong>, this is where the "Source of
              Truth" is defined and managed. It transforms a raw database into a
              visual, browsable asset that the AI can use to write code and
              generate reports.
            </p>
<img alt="Database Connections" className="demo-img" src="/assets/images/database-1.png"/>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '32px', marginBottom: '12px'}}>
<h3 style={{margin: '0'}} className="cd-sub-heading" data-i18n="database.actions_title">
                Actions
              </h3>
<img style={{height: '60px', objectFit: 'contain'}} alt="Database Actions Icons" src="/assets/images/download.jpg"/>
</div>
<ul className="cd-overview-ul">
<li>
<strong data-i18n="database.act_b1_title">Export &amp; Download (Blue Icon)</strong>
<p style={{marginTop: '4px'}} data-i18n-html="database.act_b1_desc">
                  It packages your entire database (tables, constraints, and
                  rows) into a single <code>.sql</code> file and downloads it to
                  your computer.
                </p>
</li>
<li>
<strong data-i18n="database.act_b2_title">Export to Source (Orange Icon)</strong>
<p style={{marginTop: '4px'}} data-i18n-html="database.act_b2_desc">
                  Saves the database schema directly into the project's internal
                  file system.
                </p>
</li>
<li>
<strong data-i18n="database.act_b3_title">Connect &amp; Browse (Green Icon)</strong>
<p style={{marginTop: '4px'}} data-i18n-html="database.act_b3_desc">
                  Activates the Schema Explorer for the selected connection.
                </p>
</li>
</ul>
<div style={{marginTop: '64px'}}>
<h3 style={{fontSize: '1.5rem'}} className="cd-sub-heading" data-i18n="database.td_title">
                Table Details
              </h3>
<p className="cd-overview-p" data-i18n-html="database.td_intro">
                When you click a database block (or "tile") from the main
                inventory, the <strong>Table Details</strong> overlay acts as a
                deep-dive X-ray into that specific entity. This view is critical
                for auditing the structural integrity of your application,
                ensuring that the AI has mapped your business logic correctly.
              </p>
<img alt="Table Details" className="demo-img" src="/assets/images/database-2.jpg"/>
<h3 style={{marginTop: '40px'}} className="cd-sub-heading" data-i18n="database.ts_title">
                The Structure Table (Schema View)
              </h3>
<table className="config-table">
<thead>
<tr>
<th data-i18n="database.ts_h1">Column</th>
<th data-i18n="database.ts_h2">Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td data-i18n-html="database.ts_r1_1">
<strong>Column</strong>
</td>
<td data-i18n-html="database.ts_r1_2">
                      The unique name for each data field (e.g.,
                      <code>claim_number</code>, <code>loss_type</code>).
                    </td>
</tr>
<tr>
<td data-i18n-html="database.ts_r2_1">
<strong>Type</strong>
</td>
<td data-i18n-html="database.ts_r2_2">
                      The technical format of the data. Notice
                      <code>int</code> for numbers, <code>varchar</code> for
                      text, <code>date</code> for time, and
                      <code>decimal(15,2)</code> for precise currency values.
                    </td>
</tr>
<tr>
<td data-i18n-html="database.ts_r3_1">
<strong>Nullable</strong>
</td>
<td data-i18n-html="database.ts_r3_2">
                      Indicates if the field can be left empty
                      (<strong>Yes</strong>) or if it is mandatory
                      (<strong>No</strong>). Fields like
                      <code>claim_id</code> and <code>policy_id</code> are
                      mandatory to ensure data integrity.
                    </td>
</tr>
<tr>
<td data-i18n-html="database.ts_r4_1">
<strong>Default</strong>
</td>
<td data-i18n-html="database.ts_r4_2">
                      The value assigned if no data is provided (e.g., status
                      defaults to <code>'OPEN'</code>).
                    </td>
</tr>
<tr>
<td data-i18n-html="database.ts_r5_1">
<strong>Key</strong>
</td>
<td data-i18n-html="database.ts_r5_2">
                      Represents the Primary Key (the gold key icon 🔑). This is
                      the unique identifier (like a social security number) for
                      that specific record.
                    </td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
    </div>
  );
};

export default DesignerDatabase;
