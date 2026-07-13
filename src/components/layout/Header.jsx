import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Puzzle, 
  Code, 
  Terminal, 
  Plug, 
  Rocket, 
  Palette, 
  Users, 
  Cog, 
  FileText, 
  HelpCircle,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

const DropdownLink = ({ href, to, icon: Icon, title, description, onClick }) => {
  const className = "flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors";
  
  const innerContent = (
    <>
      <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 dark:bg-slate-900 dark:border-slate-800 text-slate-400">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{title}</h4>
        <p className="text-[11px] text-slate-400 mt-1">{description}</p>
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={className}>
        {innerContent}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {innerContent}
    </a>
  );
};

const Header = ({ toggleSidebar, darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAll = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
      <div className="flex h-16 items-center justify-between px-6 max-w-full">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleSidebar}
            className="text-slate-500 hover:text-slate-600 focus:outline-none lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <a href="https://think4ever.com" className="flex items-center min-w-[240px]">
            <img src="/assets/images/think4ever-logo.png" alt="Think4Ever" className="h-11 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-5 flex-1">
          <a href="https://think4ever.com/how-it-works/" className="px-4 py-2 text-sm font-semibold text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            How it Works
          </a>

          <div className="group relative">
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span>3rd Party Integration</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 pt-2 w-80 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-20">
              <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 dark:bg-slate-800 dark:border-slate-700 space-y-1">
                <DropdownLink 
                  href="https://think4ever.com/third-party-integration#think-mcp"
                  icon={Puzzle}
                  title="Think MCP"
                  description="Work in harmony with Claude Code, Codex, and other AI clients."
                />
                <DropdownLink 
                  href="https://think4ever.com/third-party-integration#vscode-plugin"
                  icon={Code}
                  title="VS Code Plugin"
                  description="Access T4E directly inside your VS Code editor."
                />
                <DropdownLink 
                  href="https://think4ever.com/third-party-integration#vscode-plugin"
                  icon={Terminal}
                  title="Think API"
                  description="A standard REST interface to programmatically manage tokens."
                />
                <DropdownLink 
                  href="https://think4ever.com/third-party-integration#vscode-plugin"
                  icon={Plug}
                  title="Ecosystem Integration"
                  description="Connect external tools like Jira, Slack, GitHub, and Figma."
                />
              </div>
            </div>
          </div>

          <div className="group relative">
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span>Docs</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 pt-2 w-[640px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-20">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 dark:bg-slate-800 dark:border-slate-700 grid grid-cols-2 gap-3">
                <DropdownLink 
                  to="/onboarding/introduction"
                  icon={Rocket}
                  title="Customer Onboarding"
                  description="Get started with Think4Ever and set up your environment."
                  onClick={closeAll}
                />
                <DropdownLink 
                  to="/designer/introduction"
                  icon={Palette}
                  title="Think4Ever Designer"
                  description="Learn how to use the Designer to map your systems."
                  onClick={closeAll}
                />
                <DropdownLink 
                  to="/developer/start-new-project"
                  icon={Code}
                  title="Think4Ever Developer"
                  description="Technical guide for developers building with Think4Ever."
                  onClick={closeAll}
                />
                <DropdownLink 
                  to="/portal/dashboard"
                  icon={Users}
                  title="Think4Ever Portal"
                  description="Learn how to use the Think4Ever Portal."
                  onClick={closeAll}
                />
                <DropdownLink 
                  to="/reverse-engineering"
                  icon={Plug}
                  title="Reverse Engineering"
                  description="Learn how to reverse engineer with Think4Ever."
                  onClick={closeAll}
                />
                <DropdownLink 
                  to="/designer/mcp-overview"
                  icon={Puzzle}
                  title="Think MCP"
                  description="Work in harmony with Claude Code, Codex, and other AI clients."
                  onClick={closeAll}
                />
                <DropdownLink 
                  to="/developer/vs-code-integration"
                  icon={Code}
                  title="VS Code Plugin"
                  description="Access T4E directly inside your VS Code editor."
                  onClick={closeAll}
                />
                <DropdownLink 
                  to="/designer/think-api"
                  icon={Terminal}
                  title="Think API"
                  description="A standard REST interface to programmatically manage tokens."
                  onClick={closeAll}
                />
              </div>
            </div>
          </div>

          <a href="https://think4ever.com/#pricing" className="px-4 py-2 text-sm font-semibold text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Pricing
          </a>

          <div className="group relative">
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span>Resources</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 pt-2 w-80 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-20">
              <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 dark:bg-slate-800 dark:border-slate-700 space-y-1">
                <DropdownLink 
                  href="https://think4ever.com/blog"
                  icon={FileText}
                  title="Blog"
                  description="Insights, updates, and deep dives into agentic development."
                />
                <DropdownLink 
                  href="https://think4ever.com/faq"
                  icon={HelpCircle}
                  title="FAQ"
                  description="Frequently asked questions and detailed answers."
                />
              </div>
            </div>
          </div>

          <a href="https://think4ever.com/contact-us" className="px-4 py-2 text-sm font-semibold text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Contact Us
          </a>
        </nav>

        {/* CTA and mobile menu toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="https://portal.think4ever.com"
            className="hidden sm:inline-flex items-center justify-center h-[35px] px-[15px] rounded-[100px] bg-[#093cad] hover:bg-[#072f8a] text-white font-semibold text-sm transition-all shadow-sm"
          >
            Get Early Access
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-500 hover:text-slate-600 lg:hidden rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-white dark:bg-slate-900 lg:hidden overflow-y-auto px-6 py-4 flex flex-col gap-4 border-t border-slate-100 dark:border-slate-800">
          <a href="https://think4ever.com/how-it-works/" className="py-2 text-sm font-bold text-slate-500 dark:text-slate-400">
            How it Works
          </a>
          
          <div className="border-b border-slate-100 pb-2 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">3rd Party Integration</span>
            <div className="mt-2 pl-3 flex flex-col gap-2">
              <a href="https://think4ever.com/third-party-integration#think-mcp" className="text-sm font-semibold text-slate-600 dark:text-slate-300">Think MCP</a>
              <a href="https://think4ever.com/third-party-integration#vscode-plugin" className="text-sm font-semibold text-slate-600 dark:text-slate-300">VS Code Plugin</a>
              <a href="https://think4ever.com/third-party-integration#vscode-plugin" className="text-sm font-semibold text-slate-600 dark:text-slate-300">Think API</a>
            </div>
          </div>

          <div className="border-b border-slate-100 pb-2 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Documentation</span>
            <div className="mt-2 pl-3 flex flex-col gap-2">
              <Link to="/onboarding/introduction" onClick={closeAll} className="text-sm font-semibold text-slate-600 dark:text-slate-300">Customer Onboarding</Link>
              <Link to="/designer/introduction" onClick={closeAll} className="text-sm font-semibold text-slate-600 dark:text-slate-300">Think4Ever Designer</Link>
              <Link to="/developer/start-new-project" onClick={closeAll} className="text-sm font-semibold text-slate-600 dark:text-slate-300">Think4Ever Developer</Link>
              <Link to="/portal/dashboard" onClick={closeAll} className="text-sm font-semibold text-slate-600 dark:text-slate-300">Think4Ever Portal</Link>
              <Link to="/reverse-engineering" onClick={closeAll} className="text-sm font-semibold text-slate-600 dark:text-slate-300">Reverse Engineering</Link>
            </div>
          </div>

          <a href="https://think4ever.com/#pricing" className="py-2 text-sm font-bold text-slate-500 dark:text-slate-400">
            Pricing
          </a>

          <a href="https://think4ever.com/contact-us" className="py-2 text-sm font-bold text-slate-500 dark:text-slate-400">
            Contact Us
          </a>

          <a
            href="https://portal.think4ever.com"
            className="w-full flex items-center justify-center h-12 rounded-xl bg-orange-600 text-white font-extrabold shadow-md mt-4"
          >
            Get Early Access
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
