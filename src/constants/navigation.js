import {
  Smile,
  UserPlus,
  FolderPlus,
  Key,
  Flame,
  Info,
  Star,
  Palette,
  LayoutDashboard,
  Sliders,
  GitBranch,
  UserCheck,
  Zap,
  FileText,
  Lightbulb,
  GitCommit,
  Layers,
  ShieldCheck,
  Scale,
  Map,
  Code,
  RefreshCw,
  Terminal,
  Play,
  CheckCircle,
  Bug,
  Database,
  Globe,
  Bot,
  House,
  CreditCard,
  Coins,
  Settings,
  HelpCircle,
  BookOpen,
  Server,
  FileSpreadsheet,
  Users,
  Compass
} from 'lucide-react';

export const onboardingNav = [
  { title: 'Introduction', path: '/onboarding/introduction', icon: 'Smile' },
  { title: 'Create Account', path: '/onboarding/create-account', icon: 'UserPlus' },
  { title: 'Create Project', path: '/onboarding/create-project', icon: 'FolderPlus' },
  { title: 'Add API Key', path: '/onboarding/add-api-key', icon: 'Key' },
  { title: 'Build Project', path: '/onboarding/build-project', icon: 'Flame' },
];

export const developerNav = [
  { title: 'Start a New Project', path: '/developer/start-new-project', icon: 'FolderPlus' },
  { title: 'Generating Concepts', path: '/developer/generating-concepts', icon: 'Lightbulb' },
  { title: 'Developer Mode', path: '/developer/developer-mode', icon: 'Code' },
  { title: 'Run the Application', path: '/developer/run-application', icon: 'Play' },
  { title: 'Testing the Application', path: '/developer/testing-application', icon: 'CheckCircle' },
  { title: 'Structure', path: '/developer/structure', icon: 'Layers' },
  { title: 'Issues', path: '/developer/issues', icon: 'Bug' },
  { title: 'Database', path: '/developer/database', icon: 'Database' },
  { title: 'Terminal', path: '/developer/terminal', icon: 'Terminal' },
  { title: 'AI Assistant', path: '/developer/ai-assistant', icon: 'Bot' },
  { title: 'Public Access', path: '/developer/public-access', icon: 'Globe' },
  { title: 'VS Code Integration', path: '/developer/vs-code-integration', icon: 'Code' },
];

export const portalNav = [
  { title: 'Dashboard', path: '/portal/dashboard', icon: 'LayoutDashboard' },
  { title: 'Workspace', path: '/portal/workspace', icon: 'Layers' },
  { title: 'API Keys & Usage', path: '/portal/api-keys-usages', icon: 'Key' },
  { title: 'Usage & Analysis', path: '/portal/usage-and-analysis', icon: 'Zap' },
  { title: 'Billing', path: '/portal/billing', icon: 'CreditCard' },
  { title: 'Auto-Top Up', path: '/portal/auto-topup', icon: 'Coins' },
  { title: 'Support', path: '/portal/support', icon: 'HelpCircle' },
  { title: 'Settings', path: '/portal/settings', icon: 'Settings' },
  { title: 'Buy More Credits', path: '/portal/buy-more-credits', icon: 'Coins' },
];

export const reverseEngineeringNav = [
  { title: 'Reverse Engineering', path: '/reverse-engineering', icon: 'Settings' },
];

export const designerNav = [
  {
    category: 'Think4Ever Designer',
    items: [
      { title: 'Introduction', path: '/designer/introduction', icon: 'Info' },
      { title: 'Key Features', path: '/designer/key-features', icon: 'Star' },
      { title: 'Theme', path: '/designer/theme', icon: 'Palette' },
      { title: 'Dashboard', path: '/designer/dashboard', icon: 'LayoutDashboard' },
      { title: 'Create a new Project', path: '/designer/create-project', icon: 'FolderPlus' },
    ]
  },
  {
    category: 'Getting Started',
    items: [
      { title: 'Project Settings', path: '/designer/project-settings', icon: 'Sliders' },
      { title: 'API Keys', path: '/designer/api-keys', icon: 'Key' },
      { title: 'Version Control', path: '/designer/version-control', icon: 'GitBranch' },
      { title: 'Sidekick', path: '/designer/sidekick', icon: 'UserCheck' },
      { title: 'Third-party Ecosystem', path: '/designer/ecosystem-integration', icon: 'Layers' },
    ]
  },
  {
    category: 'Structure and Ideation',
    items: [
      { title: 'Requirements', path: '/designer/requirements', icon: 'FileText' },
      { title: 'Concept', path: '/designer/concept', icon: 'Lightbulb' },
      { title: 'Business Flow', path: '/designer/business-flow', icon: 'GitCommit' },
      { title: 'Data Objects', path: '/designer/data-objects', icon: 'Layers' },
      { title: 'Roles & Permissions', path: '/designer/roles-permissions', icon: 'ShieldCheck' },
      { title: 'Business Rules', path: '/designer/business-rules', icon: 'Scale' },
      { title: 'Integration Maps', path: '/designer/integration-maps', icon: 'Map' },
      { title: 'API Endpoints', path: '/designer/api-endpoints', icon: 'Code' },
      { title: 'State & Lifecycle', path: '/designer/state-lifecycle', icon: 'RefreshCw' },
      { title: 'Events & Jobs', path: '/designer/events-jobs', icon: 'Zap' },
    ]
  },
  {
    category: 'Design and Docs',
    items: [
      { title: 'UI Design', path: '/designer/ui-design', icon: 'Palette' },
      { title: 'Technical Diagrams', path: '/designer/technical-diagrams', icon: 'Layers' },
      { title: 'Requirements Docs', path: '/designer/requirements-docs', icon: 'FileText' },
    ]
  },
  {
    category: 'MCP Connect and Tools',
    items: [
      { title: 'Overview', path: '/designer/mcp-overview', icon: 'Layers' },
      { title: 'Claude Code', path: '/designer/mcp-claude-code', icon: 'Code' },
      { title: 'Codex', path: '/designer/mcp-codex', icon: 'Code' },
      { title: 'Cursor', path: '/designer/mcp-cursor', icon: 'Code' },
      { title: 'Claude Desktop', path: '/designer/mcp-claude-desktop', icon: 'Code' },
      { title: 'VS Code', path: '/designer/mcp-vscode', icon: 'Code' },
      { title: 'Windsurf', path: '/designer/mcp-windsurf', icon: 'Code' },
      { title: 'Gemini CLI', path: '/designer/mcp-gemini', icon: 'Code' },
      { title: 'AmazonQ', path: '/designer/mcp-amazonq', icon: 'Code' },
    ]
  },
  {
    category: 'Think Agents',
    isAccordion: true,
    groups: [
      {
        name: 'Financial & Accounting',
        items: [
          { title: 'ASC 606 Revenue', path: '/designer/agent-asc-606' },
          { title: 'GAAP Statement', path: '/designer/agent-gaap-statement' },
          { title: 'Expense Policy', path: '/designer/agent-expense-policy' },
          { title: 'KPI Digest Compiler', path: '/designer/agent-kpi-digest' },
          { title: 'Obligation Tracker', path: '/designer/agent-obligation-tracker' },
        ]
      },
      {
        name: 'Marketing & Sales',
        items: [
          { title: 'Brand Voice Checker', path: '/designer/agent-brand-voice-checker' },
          { title: 'Lead Qualifier', path: '/designer/agent-lead-qualifier' },
          { title: 'Brand Guideline Verifier', path: '/designer/agent-brand-guideline-verifier' },
        ]
      },
      {
        name: 'HR & Compliance',
        items: [
          { title: 'PTO Policy QA', path: '/designer/agent-pto-policy-qa' },
          { title: 'Resume Screener', path: '/designer/agent-resume-screener' },
          { title: 'HR Policy Gap Auditor', path: '/designer/agent-hr-policy-gap-auditor' },
          { title: 'HR Policy Compliance', path: '/designer/agent-hr-policy-compliance-checker' },
        ]
      },
      {
        name: 'Healthcare & Life Sciences',
        items: [
          { title: 'Clinical Note Summarizer', path: '/designer/agent-clinical-note-summarizer' },
          { title: 'Medical Coding Assistant', path: '/designer/agent-medical-coding-assistant' },
          { title: 'Care Gap Finder', path: '/designer/agent-care-gap-finder' },
          { title: 'HIPAA Compliance Checker', path: '/designer/agent-hipaa-compliance-checker' },
          { title: 'HL7 FHIR Conformance', path: '/designer/agent-hl7-fhir-conformance-checker' },
        ]
      },
      {
        name: 'Legal & Regulatory',
        items: [
          { title: 'CCPA/CPRA Compliance', path: '/designer/agent-ccpa-cpra' },
          { title: 'GDPR Compliance', path: '/designer/agent-gdpr-compliance' },
          { title: 'HIPAA Safeguards Auditor', path: '/designer/agent-hipaa-safeguards' },
          { title: 'ISO 27001 Auditor', path: '/designer/agent-iso-27001' },
          { title: 'NIST CSF Assessment', path: '/designer/agent-nist-csf' },
          { title: 'OWASP Top 10 Auditor', path: '/designer/agent-owasp-top-10' },
          { title: 'PCI DSS Compliance', path: '/designer/agent-pci-dss' },
          { title: 'SOC 2 Readiness', path: '/designer/agent-soc-2' },
          { title: 'SOX ITGC Auditor', path: '/designer/agent-sox-itgc' },
          { title: 'Contract Risk Reviewer', path: '/designer/agent-contract-risk-reviewer' },
        ]
      },
      {
        name: 'Manufacturing & Supply Chain',
        items: [
          { title: 'Reorder Planner', path: '/designer/agent-reorder-planner' },
          { title: 'Inventory Report Compiler', path: '/designer/agent-inventory-report' },
          { title: 'Inventory Risk Watcher', path: '/designer/agent-inventory-risk-watcher' },
          { title: 'Logistics Delay Tracker', path: '/designer/agent-logistics-delay-tracker' },
          { title: 'PO Anomaly Detector', path: '/designer/agent-po-anomaly-detector' },
          { title: 'Supplier Scorecard', path: '/designer/agent-supplier-scorecard' },
        ]
      },
      {
        name: 'Real Estate & Property',
        items: [
          { title: 'Comparable Finder', path: '/designer/agent-comparable-finder' },
          { title: 'Lease Clause Checker', path: '/designer/agent-lease-clause-checker' },
          { title: 'Lease Reviewer', path: '/designer/agent-lease-reviewer' },
          { title: 'Property Data Analyzer', path: '/designer/agent-property-data-analyzer' },
          { title: 'Rent Roll Report', path: '/designer/agent-rent-roll-report' },
          { title: 'Tenant Screening Summary', path: '/designer/agent-tenant-screening-summary' },
        ]
      },
      {
        name: 'IT & DevOps',
        items: [
          { title: 'Config Auditor', path: '/designer/agent-config-auditor' },
          { title: 'Database Schema Docs', path: '/designer/agent-database-schema-docs' },
          { title: 'DB Health Optimizer', path: '/designer/agent-db-health-optimizer' },
          { title: 'Env Secrets Checker', path: '/designer/agent-env-secrets-checker' },
          { title: 'Log Error Triage', path: '/designer/agent-log-error-triage' },
        ]
      }
    ]
  },
  {
    category: 'Development',
    items: [
      { title: 'Tasks', path: '/designer/tasks', icon: 'FileText' },
      { title: 'Database', path: '/designer/database', icon: 'Database' },
      { title: 'Source Code', path: '/designer/source-code', icon: 'Code' },
      { title: 'Containers', path: '/designer/containers', icon: 'Layers' },
      { title: 'Issues', path: '/designer/issues', icon: 'Bug' },
    ]
  },
  {
    category: 'Integration',
    items: [
      { title: 'Jira', path: '/designer/jira', icon: 'Layers' },
    ]
  },
  {
    category: 'Knowledge and Feedback',
    items: [
      { title: 'Knowledge & Feedback', path: '/designer/knowledge-and-feedback', icon: 'BookOpen' },
      { title: 'Pages', path: '/designer/pages', icon: 'FileText' },
      { title: 'Feedback', path: '/designer/feedback', icon: 'Layers' },
      { title: 'Collaboration', path: '/designer/collaboration', icon: 'Users' },
    ]
  },
  {
    category: 'Solutions Library',
    items: [
      { title: 'Structure Templates', path: '/designer/structure-templates', icon: 'Compass' },
    ]
  },
  {
    category: 'Console & Docs',
    items: [
      { title: 'Think API', path: '/designer/think-api', icon: 'Code' },
    ]
  }
];
