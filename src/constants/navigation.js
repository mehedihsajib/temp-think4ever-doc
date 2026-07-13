import {
  Smile,
  UserPlus,
  FolderPlus,
  Key,
  Flame,
  FolderOpen,
  Sparkles,
  Cpu,
  PlayCircle,
  TestTube,
  Network,
  AlertTriangle,
  Table,
  Command,
  MessagesSquare,
  Globe,
  ExternalLink,
  Compass,
  Award,
  Paintbrush,
  Home,
  FilePlus2,
  SlidersHorizontal,
  Lock,
  GitFork,
  UserCheck2,
  Boxes,
  FileCheck,
  Brain,
  Workflow,
  Database,
  UserRoundCheck,
  Gavel,
  Route,
  Link2,
  Repeat,
  Clock,
  Monitor,
  GitMerge,
  FileSignature,
  Eye,
  BookOpen,
  MousePointer,
  Laptop,
  SquareCode,
  CheckSquare,
  Server,
  FileCode,
  Package,
  FolderKanban,
  Library,
  Files,
  MessageSquareCode,
  Users,
  Layout,
  HelpCircle,
  Coins,
  Settings,
  CreditCard,
  Layers,
  Zap,
  TrendingUp,
  CalendarCheck,
  MessageSquareDot,
  ShieldCheck,
  Heart,
  Search,
  FileWarning,
  Clipboard,
  HeartPulse,
  Stethoscope,
  ShieldAlert,
  Shield,
  Locate,
  FileLock,
  Fingerprint,
  Activity,
  ShoppingCart,
  Truck,
  Percent,
  Bug,
} from "lucide-react";

export const onboardingNav = [
  { title: "Introduction", path: "/onboarding/introduction", icon: "Smile" },
  {
    title: "Create Account",
    path: "/onboarding/create-account",
    icon: "UserPlus",
  },
  {
    title: "Create Project",
    path: "/onboarding/create-project",
    icon: "FolderPlus",
  },
  { title: "Add API Key", path: "/onboarding/add-api-key", icon: "Key" },
  { title: "Build Project", path: "/onboarding/build-project", icon: "Flame" },
];

export const developerNav = [
  {
    title: "Start a New Project",
    path: "/developer/start-new-project",
    icon: "FolderOpen",
  },
  {
    title: "Generating Concepts",
    path: "/developer/generating-concepts",
    icon: "Sparkles",
  },
  { title: "Developer Mode", path: "/developer/developer-mode", icon: "Cpu" },
  {
    title: "Run the Application",
    path: "/developer/run-application",
    icon: "PlayCircle",
  },
  {
    title: "Testing the Application",
    path: "/developer/testing-application",
    icon: "TestTube",
  },
  { title: "Structure", path: "/developer/structure", icon: "Network" },
  { title: "Issues", path: "/developer/issues", icon: "AlertTriangle" },
  { title: "Database", path: "/developer/database", icon: "Table" },
  { title: "Terminal", path: "/developer/terminal", icon: "Command" },
  {
    title: "AI Assistant",
    path: "/developer/ai-assistant",
    icon: "MessagesSquare",
  },
  { title: "Public Access", path: "/developer/public-access", icon: "Globe" },
  {
    title: "VS Code Integration",
    path: "/developer/vs-code-integration",
    icon: "ExternalLink",
  },
];

export const portalNav = [
  { title: "Dashboard", path: "/portal/dashboard", icon: "Layout" },
  { title: "Workspace", path: "/portal/workspace", icon: "Boxes" },
  { title: "API Keys & Usage", path: "/portal/api-keys-usages", icon: "Key" },
  {
    title: "Usage & Analysis",
    path: "/portal/usage-and-analysis",
    icon: "TrendingUp",
  },
  { title: "Billing", path: "/portal/billing", icon: "CreditCard" },
  { title: "Auto-Top Up", path: "/portal/auto-topup", icon: "Coins" },
  { title: "Support", path: "/portal/support", icon: "HelpCircle" },
  { title: "Settings", path: "/portal/settings", icon: "Settings" },
  {
    title: "Buy More Credits",
    path: "/portal/buy-more-credits",
    icon: "Coins",
  },
];

export const reverseEngineeringNav = [
  { title: "Reverse Engineering", path: "/reverse-engineering", icon: "Cpu" },
];

export const designerNav = [
  {
    items: [
      {
        title: "Introduction",
        path: "/designer/introduction",
        icon: "Compass",
      },
      { title: "Key Features", path: "/designer/key-features", icon: "Award" },
      { title: "Theme", path: "/designer/theme", icon: "Paintbrush" },
      { title: "Dashboard", path: "/designer/dashboard", icon: "Home" },
      {
        title: "Create a new Project",
        path: "/designer/create-project",
        icon: "FilePlus2",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        title: "Project Settings",
        path: "/designer/project-settings",
        icon: "SlidersHorizontal",
      },
      { title: "API Keys", path: "/designer/api-keys", icon: "Lock" },
      {
        title: "Version Control",
        path: "/designer/version-control",
        icon: "GitFork",
      },
      { title: "Sidekick", path: "/designer/sidekick", icon: "UserCheck2" },
      {
        title: "Third-party Ecosystem",
        path: "/designer/ecosystem-integration",
        icon: "Boxes",
      },
    ],
  },
  {
    category: "Structure and Ideation",
    items: [
      {
        title: "Requirements",
        path: "/designer/requirements",
        icon: "FileCheck",
      },
      { title: "Concept", path: "/designer/concept", icon: "Brain" },
      {
        title: "Business Flow",
        path: "/designer/business-flow",
        icon: "Workflow",
      },
      {
        title: "Data Objects",
        path: "/designer/data-objects",
        icon: "Database",
      },
      {
        title: "Roles & Permissions",
        path: "/designer/roles-permissions",
        icon: "UserRoundCheck",
      },
      {
        title: "Business Rules",
        path: "/designer/business-rules",
        icon: "Gavel",
      },
      {
        title: "Integration Maps",
        path: "/designer/integration-maps",
        icon: "Route",
      },
      {
        title: "API Endpoints",
        path: "/designer/api-endpoints",
        icon: "Link2",
      },
      {
        title: "State & Lifecycle",
        path: "/designer/state-lifecycle",
        icon: "Repeat",
      },
      { title: "Events & Jobs", path: "/designer/events-jobs", icon: "Clock" },
    ],
  },
  {
    category: "Design and Docs",
    items: [
      { title: "UI Design", path: "/designer/ui-design", icon: "Monitor" },
      {
        title: "Technical Diagrams",
        path: "/designer/technical-diagrams",
        icon: "GitMerge",
      },
      {
        title: "Requirements Docs",
        path: "/designer/requirements-docs",
        icon: "FileSignature",
      },
    ],
  },
  {
    category: "MCP Connect and Tools",
    items: [
      { title: "Overview", path: "/designer/mcp-overview", icon: "Eye" },
      {
        title: "Claude Code",
        path: "/designer/mcp-claude-code",
        icon: "Flame",
      },
      { title: "Codex", path: "/designer/mcp-codex", icon: "BookOpen" },
      { title: "Cursor", path: "/designer/mcp-cursor", icon: "MousePointer" },
      {
        title: "Claude Desktop",
        path: "/designer/mcp-claude-desktop",
        icon: "Laptop",
      },
      { title: "VS Code", path: "/designer/mcp-vscode", icon: "SquareCode" },
      { title: "Windsurf", path: "/designer/mcp-windsurf", icon: "Compass" },
      { title: "Gemini CLI", path: "/designer/mcp-gemini", icon: "Bot" },
      { title: "AmazonQ", path: "/designer/mcp-amazonq", icon: "Zap" },
    ],
  },
  {
    category: "Think Agents",
    isAccordion: true,
    groups: [
      {
        name: "Financial & Accounting",
        icon: "Coins",
        items: [
          {
            title: "ASC 606 Revenue",
            path: "/designer/agent-asc-606",
            icon: "Coins",
          },
          {
            title: "GAAP Statement",
            path: "/designer/agent-gaap-statement",
            icon: "FileSpreadsheet",
          },
          {
            title: "Expense Policy",
            path: "/designer/agent-expense-policy",
            icon: "FileSignature",
          },
          {
            title: "KPI Digest Compiler",
            path: "/designer/agent-kpi-digest",
            icon: "TrendingUp",
          },
          {
            title: "Obligation Tracker",
            path: "/designer/agent-obligation-tracker",
            icon: "CalendarCheck",
          },
        ],
      },
      {
        name: "Marketing & Sales",
        icon: "TrendingUp",
        items: [
          {
            title: "Brand Voice Checker",
            path: "/designer/agent-brand-voice-checker",
            icon: "MessageSquareDot",
          },
          {
            title: "Lead Qualifier",
            path: "/designer/agent-lead-qualifier",
            icon: "UserCheck2",
          },
          {
            title: "Brand Guideline Verifier",
            path: "/designer/agent-brand-guideline-verifier",
            icon: "ShieldCheck",
          },
        ],
      },
      {
        name: "HR & Compliance",
        icon: "Users",
        items: [
          {
            title: "PTO Policy QA",
            path: "/designer/agent-pto-policy-qa",
            icon: "Heart",
          },
          {
            title: "Resume Screener",
            path: "/designer/agent-resume-screener",
            icon: "Search",
          },
          {
            title: "HR Policy Gap Auditor",
            path: "/designer/agent-hr-policy-gap-auditor",
            icon: "Search",
          },
          {
            title: "HR Policy Compliance",
            path: "/designer/agent-hr-policy-compliance-checker",
            icon: "FileWarning",
          },
        ],
      },
      {
        name: "Healthcare & Life Sciences",
        icon: "HeartPulse",
        items: [
          {
            title: "Clinical Note Summarizer",
            path: "/designer/agent-clinical-note-summarizer",
            icon: "Clipboard",
          },
          {
            title: "Medical Coding Assistant",
            path: "/designer/agent-medical-coding-assistant",
            icon: "HeartPulse",
          },
          {
            title: "Care Gap Finder",
            path: "/designer/agent-care-gap-finder",
            icon: "Stethoscope",
          },
          {
            title: "HIPAA Compliance Checker",
            path: "/designer/agent-hipaa-compliance-checker",
            icon: "ShieldAlert",
          },
          {
            title: "HL7 FHIR Conformance",
            path: "/designer/agent-hl7-fhir-conformance-checker",
            icon: "Shield",
          },
        ],
      },
      {
        name: "Legal & Regulatory",
        icon: "Gavel",
        items: [
          {
            title: "CCPA/CPRA Compliance",
            path: "/designer/agent-ccpa-cpra",
            icon: "Lock",
          },
          {
            title: "GDPR Compliance",
            path: "/designer/agent-gdpr-compliance",
            icon: "Locate",
          },
          {
            title: "HIPAA Safeguards Auditor",
            path: "/designer/agent-hipaa-safeguards",
            icon: "FileLock",
          },
          {
            title: "ISO 27001 Auditor",
            path: "/designer/agent-iso-27001",
            icon: "Fingerprint",
          },
          {
            title: "NIST CSF Assessment",
            path: "/designer/agent-nist-csf",
            icon: "Activity",
          },
          {
            title: "OWASP Top 10 Auditor",
            path: "/designer/agent-owasp-top-10",
            icon: "Terminal",
          },
          {
            title: "PCI DSS Compliance",
            path: "/designer/agent-pci-dss",
            icon: "CreditCard",
          },
          {
            title: "SOC 2 Readiness",
            path: "/designer/agent-soc-2",
            icon: "ShieldCheck",
          },
          {
            title: "SOX ITGC Auditor",
            path: "/designer/agent-sox-itgc",
            icon: "FileCheck",
          },
          {
            title: "Contract Risk Reviewer",
            path: "/designer/agent-contract-risk-reviewer",
            icon: "FileSignature",
          },
        ],
      },
      {
        name: "Manufacturing & Supply Chain",
        icon: "Truck",
        items: [
          {
            title: "Reorder Planner",
            path: "/designer/agent-reorder-planner",
            icon: "ShoppingCart",
          },
          {
            title: "Inventory Report Compiler",
            path: "/designer/agent-inventory-report",
            icon: "FileSpreadsheet",
          },
          {
            title: "Inventory Risk Watcher",
            path: "/designer/agent-inventory-risk-watcher",
            icon: "Package",
          },
          {
            title: "Logistics Delay Tracker",
            path: "/designer/agent-logistics-delay-tracker",
            icon: "Truck",
          },
          {
            title: "PO Anomaly Detector",
            path: "/designer/agent-po-anomaly-detector",
            icon: "AlertTriangle",
          },
          {
            title: "Supplier Scorecard",
            path: "/designer/agent-supplier-scorecard",
            icon: "Award",
          },
        ],
      },
      {
        name: "Real Estate & Property",
        icon: "Home",
        items: [
          {
            title: "Comparable Finder",
            path: "/designer/agent-comparable-finder",
            icon: "Compass",
          },
          {
            title: "Lease Clause Checker",
            path: "/designer/agent-lease-clause-checker",
            icon: "SlidersHorizontal",
          },
          {
            title: "Lease Reviewer",
            path: "/designer/agent-lease-reviewer",
            icon: "BookOpen",
          },
          {
            title: "Property Data Analyzer",
            path: "/designer/agent-property-data-analyzer",
            icon: "Home",
          },
          {
            title: "Rent Roll Report",
            path: "/designer/agent-rent-roll-report",
            icon: "Percent",
          },
          {
            title: "Tenant Screening Summary",
            path: "/designer/agent-tenant-screening-summary",
            icon: "Users",
          },
        ],
      },
      {
        name: "IT & DevOps",
        icon: "Cpu",
        items: [
          {
            title: "Config Auditor",
            path: "/designer/agent-config-auditor",
            icon: "Settings",
          },
          {
            title: "Database Schema Docs",
            path: "/designer/agent-database-schema-docs",
            icon: "Network",
          },
          {
            title: "DB Health Optimizer",
            path: "/designer/agent-db-health-optimizer",
            icon: "Flame",
          },
          {
            title: "Env Secrets Checker",
            path: "/designer/agent-env-secrets-checker",
            icon: "Key",
          },
          {
            title: "Log Error Triage",
            path: "/designer/agent-log-error-triage",
            icon: "Bug",
          },
        ],
      },
    ],
  },
  {
    category: "Development",
    items: [
      { title: "Tasks", path: "/designer/tasks", icon: "CheckSquare" },
      { title: "Database", path: "/designer/database", icon: "Server" },
      { title: "Source Code", path: "/designer/source-code", icon: "FileCode" },
      { title: "Containers", path: "/designer/containers", icon: "Package" },
      { title: "Issues", path: "/designer/issues", icon: "Flame" },
    ],
  },
  {
    category: "Integration",
    items: [{ title: "Jira", path: "/designer/jira", icon: "FolderKanban" }],
  },
  {
    category: "Knowledge and Feedback",
    items: [
      {
        title: "Knowledge & Feedback",
        path: "/designer/knowledge-and-feedback",
        icon: "Library",
      },
      { title: "Pages", path: "/designer/pages", icon: "Files" },
      {
        title: "Feedback",
        path: "/designer/feedback",
        icon: "MessageSquareCode",
      },
      {
        title: "Collaboration",
        path: "/designer/collaboration",
        icon: "Users",
      },
    ],
  },
  {
    category: "Solutions Library",
    items: [
      {
        title: "Structure Templates",
        path: "/designer/structure-templates",
        icon: "Layout",
      },
    ],
  },
  {
    category: "Console & Docs",
    items: [
      { title: "Think API", path: "/designer/think-api", icon: "Network" },
    ],
  },
];
