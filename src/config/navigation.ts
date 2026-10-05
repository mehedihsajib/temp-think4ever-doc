import { 
  Play, Code, Palette, Puzzle, Globe, Settings, 
  Rocket, Briefcase, FolderPlus, Terminal,
  ShieldHalf, Users, Store
} from "lucide-react";

export type NavItem = {
  title: string;
  description?: string;
  href?: string;
  icon?: any;
  color?: string;
  columns?: number;
  items?: NavItem[];
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
        href: "/docs/manual_create_project",
        icon: FolderPlus,
        color: "text-emerald-500",
      },
      {
        title: "Think MCP",
        description: "9 - Claude, Codex and Cursor.",
        href: "/docs/manual_think_mcp",
        icon: Puzzle,
        color: "text-amber-500",
      },
      {
        title: "Reverse Engineering",
        description: "4 - Analyze your existing codebase.",
        href: "/docs/manual_analyze_code",
        icon: Settings,
        color: "text-slate-500",
      },
      {
        title: "Think API",
        description: "10 - Programmatically manage tokens.",
        href: "/docs/manual_think_api",
        icon: Terminal,
        color: "text-emerald-500",
      },
      {
        title: "Production Hardening",
        description: "5 - Assess your project's production readiness.",
        href: "/docs/manual_production_hardening",
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
