import React from "react";
import { 
  Play, Code, Palette, Puzzle, Globe, Settings, 
  Rocket, Briefcase, FolderPlus, Terminal,
  ShieldHalf, Users, Store,
  Info, Star, LayoutDashboard, SlidersHorizontal,
  Key, GitBranch, Share2, MoreHorizontal, Bot,
  Plug, ListChecks, Network, Lightbulb, Workflow,
  ShieldCheck, Scale, Layers, Boxes, Map, RefreshCw,
  Zap, Sliders, FileText,
  PlusCircle, PlayCircle, CheckCircle2, Bug, Database, FileCode,
  BookOpen, MessageSquare, Wrench,
  Home, CreditCard, Coins, BarChart3, Headphones, FolderOpen
} from "lucide-react";

// MCP Custom Brand SVG Icons
const ClaudeIcon = ({ className }: { className?: string }) => (
  <img src="/images/icons/claude.svg" alt="Claude" className={`${className || "h-4 w-4"} object-contain`} />
);
const CodexIcon = ({ className }: { className?: string }) => (
  <img src="/images/icons/codex.svg" alt="Codex" className={`${className || "h-4 w-4"} object-contain`} />
);
const CursorIcon = ({ className }: { className?: string }) => (
  <img src="/images/icons/cursor.svg" alt="Cursor" className={`${className || "h-4 w-4"} object-contain`} />
);
const ClaudeDesktopIcon = ({ className }: { className?: string }) => (
  <img src="/images/icons/claude-desktop.svg" alt="Claude Desktop" className={`${className || "h-4 w-4"} object-contain`} />
);
const VSCodeIcon = ({ className }: { className?: string }) => (
  <img src="/images/icons/vscode.svg" alt="VS Code" className={`${className || "h-4 w-4"} object-contain`} />
);
const WindsurfIcon = ({ className }: { className?: string }) => (
  <img src="/images/icons/windsurf.svg" alt="Windsurf" className={`${className || "h-4 w-4"} object-contain`} />
);
const GeminiIcon = ({ className }: { className?: string }) => (
  <img src="/images/icons/gemini.svg" alt="Gemini" className={`${className || "h-4 w-4"} object-contain`} />
);
const AmazonQIcon = ({ className }: { className?: string }) => (
  <img src="/images/icons/amazonq.svg" alt="Amazon Q" className={`${className || "h-4 w-4"} object-contain`} />
);
const KiroIcon = ({ className }: { className?: string }) => (
  <img src="/images/icons/kiro.svg" alt="Kiro" className={`${className || "h-4 w-4"} object-contain`} />
);

export type NavItem = {
  title: string;
  description?: string;
  href?: string;
  icon?: any;
  color?: string;
  columns?: number;
  items?: NavItem[];
};

export type SidebarItem = {
  title: string;
  href: string;
  badge?: string;
  icon?: any;
  items?: SidebarItem[];
};

export type SidebarGroup = {
  title?: string;
  items: SidebarItem[];
};

export const headerNav: NavItem[] = [
  {
    title: "Product",
    items: [
      {
        title: "How it works",
        description: "Watch how Think4Ever builds systems",
        href: "https://think4ever.com/how-it-works",
        icon: Play,
      },
      {
        title: "Code to Design",
        description: "Reverse engineer code to visuals",
        href: "https://think4ever.com/code-to-design",
        icon: Code,
      },
      {
        title: "Design to Code",
        description: "Turn systems into actual code",
        href: "https://think4ever.com/design-to-code",
        icon: Palette,
      },
    ],
  },
  {
    title: "Integrations",
    href: "https://think4ever.com/integrations",
  },
  {
    title: "Resources",
    items: [
      {
        title: "Resource Library",
        description: "Explore our collection of resources.",
        href: "https://think4ever.com/resources",
        icon: Puzzle,
      },
      {
        title: "Blog",
        description: "Read the latest news and articles.",
        href: "https://think4ever.com/blog",
        icon: Globe,
      },
      {
        title: "FAQ",
        description: "Frequently asked questions.",
        href: "https://think4ever.com/faq",
        icon: Settings,
      },
    ],
  },
  {
    title: "Docs",
    columns: 2,
    items: [
      {
        title: "Customer Onboarding",
        description: "1 - Get Started with Think4ever.",
        href: "/docs/onboarding",
        icon: Rocket,
        color: "text-blue-500",
      },
      {
        title: "Think4ever Designer",
        description: "7 - Learn how to map systems.",
        href: "/docs/introduction",
        icon: Palette,
        color: "text-blue-500",
      },
      {
        title: "Customer Workspace",
        description: "2 - Managing your Workspace",
        href: "/docs/portal/workspace",
        icon: Briefcase,
        color: "text-indigo-500",
      },
      {
        title: "Think4ever Developer",
        description: "8 - Technical guide for developers.",
        href: "/docs/dev/developer_mode",
        icon: Code,
        color: "text-indigo-500",
      },
      {
        title: "Build a New Project",
        description: "3 - Create your new project.",
        href: "/docs/create_project",
        icon: FolderPlus,
        color: "text-emerald-500",
      },
      {
        title: "Think MCP",
        description: "9 - Claude, Codex and Cursor.",
        href: "/docs/think_mcp",
        icon: Puzzle,
        color: "text-amber-500",
      },
      {
        title: "Reverse Engineering",
        description: "4 - Analyze your existing codebase.",
        href: "/docs/analyze_code",
        icon: Settings,
        color: "text-slate-500",
      },
      {
        title: "Think API",
        description: "10 - Programmatically manage tokens.",
        href: "/docs/think_api",
        icon: Terminal,
        color: "text-emerald-500",
      },
      {
        title: "Production Hardening",
        description: "5 - Assess your project's production readiness.",
        href: "/docs/production_hardening",
        icon: ShieldHalf,
        color: "text-rose-500",
      },
      {
        title: "Think4ever Portal",
        description: "11 - Manage your team dashboard",
        href: "/docs/portal/dashboard",
        icon: Users,
        color: "text-blue-500",
      },
      {
        title: "Marketplace",
        description: "6 - Find freelancers, hire, or get hired.",
        href: "/docs/portal/marketplace",
        icon: Store,
        color: "text-amber-500",
      },
      {
        title: "VS Code Plugin",
        description: "12 - Access T4E inside VS Code.",
        href: "/docs/dev/vs_code_integration",
        icon: Code,
        color: "text-blue-500",
      },
    ],
  },
  {
    title: "Pricing",
    href: "https://think4ever.com/pricing",
  },
];

export const footerNav = {
  brand: {
    description: "Turn a codebase into a shared, reviewable system map in minutes—then keep every change aligned with business intent.",
    socials: [
      { name: "YouTube", href: "https://www.youtube.com/@Think4EverInc", icon: "youtube" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/think4ever-global-inc/", icon: "linkedin" },
    ],
  },
  groups: [
    {
      title: "Product",
      links: [
        { title: "How it works", href: "https://think4ever.com/how-it-works" },
        { title: "Code → Design", href: "https://think4ever.com/code-to-design" },
        { title: "Design → Code", href: "https://think4ever.com/design-to-code" },
        { title: "Integrations", href: "https://think4ever.com/integrations" },
        { title: "Pricing", href: "https://think4ever.com/pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Resource Library", href: "https://think4ever.com/resources" },
        { title: "Blog", href: "https://think4ever.com/blog" },
        { title: "FAQ", href: "https://think4ever.com/faq" },
        { title: "Security & Trust", href: "https://think4ever.com/security" },
      ],
    },
    {
      title: "Legal & Privacy",
      links: [
        { title: "Contact Us", href: "https://think4ever.com/contact-us" },
        { title: "Privacy Policy", href: "https://think4ever.com/privacy-policy" },
        { title: "Terms & Conditions", href: "https://think4ever.com/terms-and-conditions" },
      ],
    },
  ],
};

export const docsSidebarNav: SidebarGroup[] = [
  {
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
        icon: Info,
      },
      {
        title: "Key Features",
        href: "/docs/key_features",
        icon: Star,
      },
      {
        title: "Theme",
        href: "/docs/theme",
        icon: Palette,
      },
      {
        title: "Dashboard",
        href: "/docs/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Create a new Project",
        href: "/docs/create_project",
        icon: FolderPlus,
        items: [
          {
            title: "Reverse Engineering",
            badge: "Analyze Existing Code",
            href: "/docs/analyze_code",
          },
          {
            title: "Production Hardening",
            badge: "Prod Readiness check",
            href: "/docs/production_hardening",
          },
          {
            title: "Design from Intent",
            badge: "Design from scratch",
            href: "/docs/design_from_intent",
          },
        ],
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        title: "Project Settings",
        href: "/docs/project_settings",
        icon: SlidersHorizontal,
      },
      {
        title: "API Keys",
        href: "/docs/api_keys",
        icon: Key,
      },
      {
        title: "Version Control",
        href: "/docs/version_control",
        icon: GitBranch,
      },
      {
        title: "Marketplace",
        href: "/docs/portal/marketplace",
        icon: Store,
      },
      {
        title: "View & Share",
        href: "/docs/view-and-share",
        icon: Share2,
      },
      {
        title: "Other",
        href: "/docs/others",
        icon: MoreHorizontal,
      },
      {
        title: "Sidekick",
        href: "/docs/sidekick",
        icon: Bot,
      },
      {
        title: "Third-party Ecosystem Integration",
        href: "/docs/ecosystem_integration",
        icon: Plug,
      },
    ],
  },
  {
    title: "Structure and Ideation",
    items: [
      {
        title: "Requirements",
        href: "/docs/requirements",
        icon: ListChecks,
      },
      {
        title: "Functional Architecture",
        href: "/docs/functional-architecture",
        icon: Network,
      },
      {
        title: "Concept",
        href: "/docs/concept",
        icon: Lightbulb,
      },
      {
        title: "Business Flow",
        href: "/docs/business_flow",
        icon: Workflow,
      },
      {
        title: "Roles & Permissions",
        href: "/docs/roles_permissions",
        icon: ShieldCheck,
      },
      {
        title: "Business Rules",
        href: "/docs/business_rules",
        icon: Scale,
      },
    ],
  },
  {
    title: "More Options",
    items: [
      {
        title: "Concept Summary",
        href: "/docs/concept-summary",
        icon: Layers,
      },
      {
        title: "Data Objects",
        href: "/docs/data_objects",
        icon: Boxes,
      },
      {
        title: "Integration Maps",
        href: "/docs/integration_maps",
        icon: Map,
      },
      {
        title: "API Endpoints",
        href: "/docs/api_endpoints",
        icon: Code,
      },
      {
        title: "State & Lifecycle",
        href: "/docs/state_lifecycle",
        icon: RefreshCw,
      },
      {
        title: "Events & Jobs",
        href: "/docs/events_jobs",
        icon: Zap,
      },
      {
        title: "Environment & Config",
        href: "/docs/environment_config",
        icon: Sliders,
      },
    ],
  },
  {
    title: "Design and Docs",
    items: [
      {
        title: "UI Design",
        href: "/docs/ui_design",
        icon: Palette,
      },
      {
        title: "Technical Diagrams",
        href: "/docs/technical_diagrams",
        icon: Network,
      },
      {
        title: "Requirements Docs",
        href: "/docs/requirements_docs",
        icon: FileText,
      },
      {
        title: "Agents Documents",
        href: "/docs/agents-documents",
        icon: Bot,
      },
    ],
  },
  {
    title: "MCP Connect and Tools",
    items: [
      {
        title: "Overview",
        href: "/docs/mcp_overview",
        icon: Layers,
      },
      {
        title: "Claude Code",
        href: "/docs/mcp_claude_code",
        icon: ClaudeIcon,
      },
      {
        title: "Codex",
        href: "/docs/mcp_codex",
        icon: CodexIcon,
      },
      {
        title: "Cursor",
        href: "/docs/mcp_cursor",
        icon: CursorIcon,
      },
      {
        title: "Claude Desktop",
        href: "/docs/mcp_claude_desktop",
        icon: ClaudeDesktopIcon,
      },
      {
        title: "VS Code",
        href: "/docs/mcp_vscode",
        icon: VSCodeIcon,
      },
      {
        title: "Windsurf",
        href: "/docs/mcp_windsurf",
        icon: WindsurfIcon,
      },
      {
        title: "Gemini CLI",
        href: "/docs/mcp_gemini",
        icon: GeminiIcon,
      },
      {
        title: "Amazon Q",
        href: "/docs/mcp_amazonq",
        icon: AmazonQIcon,
      },
      {
        title: "Kiro",
        href: "/docs/mcp_kiro",
        icon: KiroIcon,
      },
      {
        title: "Test & Tools",
        href: "/docs/mcp_test_and_tools",
        icon: Wrench,
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        title: "Tasks",
        href: "/docs/tasks",
        icon: ListChecks,
      },
    ],
  },
  {
    title: "Integration",
    items: [
      {
        title: "Jira",
        href: "/docs/jira",
        icon: Plug,
      },
    ],
  },
  {
    title: "Knowledge and Feedback",
    items: [
      {
        title: "Knowledge and Feedback",
        href: "/docs/knowledge-and-feedback",
        icon: BookOpen,
      },
      {
        title: "Feedback",
        href: "/docs/feedback",
        icon: MessageSquare,
      },
      {
        title: "Collaboration",
        href: "/docs/collaboration",
        icon: Users,
      },
    ],
  },
  {
    title: "Console & Docs",
    items: [
      {
        title: "Think API",
        href: "/docs/think_api",
        icon: Terminal,
      },
    ],
  },
];

export const devSidebarNav: SidebarGroup[] = [
  {
    items: [
      {
        title: "Developer Mode",
        href: "/docs/dev/developer_mode",
        icon: Code,
      },
      {
        title: "Start a New Project",
        href: "/docs/dev/start_new_project",
        icon: PlusCircle,
      },
      {
        title: "Generating Concepts and Designs",
        href: "/docs/dev/generating_concepts",
        icon: Lightbulb,
      },
      {
        title: "Run the Application",
        href: "/docs/dev/run_application",
        icon: PlayCircle,
      },
      {
        title: "Testing the Application",
        href: "/docs/dev/testing_application",
        icon: CheckCircle2,
      },
      {
        title: "Structure",
        href: "/docs/dev/structure",
        icon: Network,
      },
      {
        title: "Issues",
        href: "/docs/dev/issues",
        icon: Bug,
      },
      {
        title: "Database",
        href: "/docs/dev/database",
        icon: Database,
      },
      {
        title: "Terminal",
        href: "/docs/dev/terminal",
        icon: Terminal,
      },
      {
        title: "AI Assistant",
        href: "/docs/dev/ai_assistant",
        icon: Bot,
      },
      {
        title: "Public Access",
        href: "/docs/dev/public_access",
        icon: Globe,
      },
      {
        title: "VS Code Integration",
        href: "/docs/dev/vs_code_integration",
        icon: FileCode,
      },
    ],
  },
];

export const portalSidebarNav: SidebarGroup[] = [
  {
    items: [
      {
        title: "Dashboard",
        href: "/docs/portal/dashboard",
        icon: Home,
      },
      {
        title: "Multi-Language Support",
        href: "/docs/portal/multilang",
        icon: Globe,
      },
      {
        title: "Workspace",
        href: "/docs/portal/workspace",
        icon: FolderOpen,
      },
      {
        title: "API Keys & Usage",
        href: "/docs/portal/api_keys_usages",
        icon: Key,
      },
      {
        title: "Marketplace",
        href: "/docs/portal/marketplace",
        icon: Store,
      },
      {
        title: "Usage & Analysis",
        href: "/docs/portal/usage_and_analysis",
        icon: BarChart3,
      },
      {
        title: "Billing",
        href: "/docs/portal/billing",
        icon: CreditCard,
      },
      {
        title: "Buy More Credits",
        href: "/docs/portal/buy_more_credits",
        icon: Coins,
      },
      {
        title: "Auto-Top Up",
        href: "/docs/portal/auto-topup",
        icon: RefreshCw,
      },
      {
        title: "Support",
        href: "/docs/portal/support",
        icon: Headphones,
      },
      {
        title: "Settings",
        href: "/docs/portal/settings",
        icon: Settings,
      },
    ],
  },
];
