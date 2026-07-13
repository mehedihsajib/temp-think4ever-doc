import React from 'react';

const DesignerAgentMedicalCodingAssistant = () => {
  return (
    <div className="doc-page-content">
      <main className="cd-main-content" id="cd-main">
<h1 className="cd-page-title" id="cdHomeTitle">
                    Medical Coding Assistant
                </h1>
<section className="cd-overview" id="cdHomeOverview">
<div className="para-box">
<p>
                            The <strong>Medical Coding Assistant</strong> accelerates administrative and billing
                            workflows by translating unstructured clinical descriptions into standard medical codes.
                            Operating with strict validation guardrails, it acts as an intelligent pre-billing
                            verification layer to optimize revenue cycle accuracy.
                        </p>
<div className="image-wrapper">
<img alt="Medical Coding Assistant" className="demo-img" src="/assets/images/think-agent/medical-coding-assistant-1.png"/>
</div>
<div className="para-box">
<h3 className="h3">
                                Key Features
                            </h3>
<ul className="cd-overview-ul">
<li>
<strong>
                                        In-Project Text Processing:
                                    </strong>
<span>
                                        Processes all narrative text, physician notes, and procedural descriptions
                                        completely within your secure project boundaries. Patient privacy is fully
                                        maintained as no data is transmitted externally.
                                    </span>
</li>
<li>
<strong>
                                        Dual-Classification Suggestions:
                                    </strong>
<span>
                                        Evaluates clinical descriptions to simultaneously recommend standard ICD-10-CM
                                        (diagnoses) and CPT (procedures/services) alphanumeric codes.
                                    </span>
</li>
<li>
<strong>
                                        Transparent Justification:
                                    </strong>
<span>
                                        Pairs every suggested medical code with an automated confidence score and a
                                        clear clinical rationale, explaining exactly how the text mirrors official
                                        coding guidelines.
                                    </span>
</li>
<li>
<strong>
                                        Compliance Enforcement Boundary:
                                    </strong>
<span>
                                        Configured strictly as an advisory system. To protect against compliance risks
                                        and billing denials, all outputs include a mandatory verification prompt
                                        requiring a certified coder's sign-off.
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
<strong>Input Clinical Description:</strong> Paste the narrative documentation,
                                    operative report, or discharge summary into the assistant module.
                                    <div className="image-wrapper">
<img alt="Medical Coding Assistant" className="demo-img" src="/assets/images/think-agent/medical-coding-assistant-2.png"/>
</div>
</li>
<li>
<strong>Execute Local Parse:</strong> Allow the localized engine to evaluate the
                                    text and extract corresponding medical concepts.
                                </li>
<li>
<strong>Review Code Rationale:</strong> Analyze the recommended ICD-10 and CPT codes
                                    along with their associated confidence scores and justifications.
                                </li>
<li>
<strong>Certified Verification:</strong> Submit the system-generated selections to a
                                    certified medical coder for final audit and validation prior to billing submission.
                                    <div className="image-wrapper">
<img alt="Medical Coding Assistant" className="demo-img" src="/assets/images/think-agent/medical-coding-assistant-3.png"/>
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

export default DesignerAgentMedicalCodingAssistant;
