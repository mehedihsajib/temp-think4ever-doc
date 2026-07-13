import React from 'react';

const DesignerAgentHl7FhirConformanceChecker = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    HL7 FHIR Conformance Checker
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            The <strong>HL7 FHIR Conformance Checker</strong> evaluates your application's internal data
                            model against the international HL7 FHIR R4 (Fast Healthcare Interoperability Resources)
                            standard. By analyzing structural blueprints rather than actual records, it establishes
                            interoperability readiness and flags schema gaps while maintaining absolute patient privacy.
                        </p>
<div className="image-wrapper">
<img alt="HL7 FHIR Conformance Checker" className="demo-img" src="/assets/images/think-agent/HL7-FHIR-conformance-checker-1.png"/>
</div>
<div className="para-box">
<h3 className="h3">
                                Key Features
                            </h3>
<ul className="cd-overview-ul">
<li>
<strong>
                                        Strictly Structural Analysis:
                                    </strong>
<span>
                                        Securely reads your data objects and schema definitions using architecture data
                                        only. Active patient health records remain entirely untouched and localized
                                        within your project environment.
                                    </span>
</li>
<li>
<strong>
                                        Intelligent Resource Mapping:
                                    </strong>
<span>
                                        Automatically cross-references your internal data objects and maps them to their
                                        corresponding standard FHIR R4 resources (e.g., mapping a custom account table
                                        to the Patient, Observation, or Encounter resource).
                                    </span>
</li>
<li>
<strong>
                                        Granular Schema Validation:
                                    </strong>
<span>
                                        Deeply inspects your architecture to flag missing required elements, structural
                                        omissions, and core datatype mismatches that would cause interoperability
                                        failures.
                                    </span>
</li>
<li>
<strong>
                                        Interoperability Gap Reporting:
                                    </strong>
<span>
                                        Compiles a technical readiness report detailing exactly how close your data
                                        model is to native compliance, paired with structural adjustment steps.
                                    </span>
</li>
</ul>
</div>
<div className="para-box">
<h3 className="h3">
                                Process Workflow
                            </h3>
<ol className="cd-overview-ol">
<li>
<strong>Select Target Files:</strong> Point the engine toward your data objects,
                                    structural tables, or schema configurations for review.
                                    <div className="image-wrapper">
<img alt="HL7 FHIR Conformance Checker" className="demo-img" src="/assets/images/think-agent/HL7-FHIR-conformance-checker-2.png"/>
</div>
</li>
<li>
<strong>Verify and Execute Resource Mapping:</strong> Allow the system to analyze
                                    structural linkages and align internal objects with the FHIR R4 specifications.
                                    <div className="image-wrapper">
<img alt="HL7 FHIR Conformance Checker" className="demo-img" src="/assets/images/think-agent/HL7-FHIR-conformance-checker-3.png"/>
</div>
</li>
<li>
<strong>Review Mismatches:</strong> Analyze the flagged gaps, focusing on missing
                                    mandatory structural fields and invalid data formatting.
                                </li>
<li>
<strong>Align Data Models:</strong> Implement the structural recommendations to
                                    achieve full HL7 FHIR conformance across your platforms.

                                    <div className="image-wrapper">
<img alt="HL7 FHIR Conformance Checker" className="demo-img" src="/assets/images/think-agent/HL7-FHIR-conformance-checker-4.png"/>
</div>
</li>
</ol>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default DesignerAgentHl7FhirConformanceChecker;
