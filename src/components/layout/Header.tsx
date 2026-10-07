"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerNav, docsSidebarNav, devSidebarNav, portalSidebarNav } from '@/config/navigation';
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X, 
  BookOpen, 
  Code, 
  LayoutDashboard,
  Compass,
  ArrowRight
} from 'lucide-react';
import { ThemeToggle, MobileThemeSegment } from '@/components/ui/ThemeToggle';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState<'docs' | 'menu'>('menu');
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>("Product");
  const [openDocSubmenus, setOpenDocSubmenus] = useState<Record<string, boolean>>({
    "Create a new Project": true,
  });

  const isDevMode = pathname.startsWith("/dev");
  const isPortalMode = pathname.startsWith("/portal");
  const isDocsPage = true;
  const docGroups = isDevMode ? devSidebarNav : isPortalMode ? portalSidebarNav : docsSidebarNav;

  // Auto-select docs tab if on docs route
  useEffect(() => {
    setActiveMobileTab('docs');
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileGroup = (title: string) => {
    setOpenMobileGroup(openMobileGroup === title ? null : title);
  };

  const toggleDocSubmenu = (title: string) => {
    setOpenDocSubmenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#0a2f85] bg-[#093cad] text-white">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo - Aligned left across all viewports */}
          <div className="flex items-center gap-3">
            <Link 
              href="https://think4ever.com" 
              className="flex items-center transition-opacity hover:opacity-90 cursor-pointer"
            >
              <img 
                src="/docs/images/think4ever-logo.svg" 
                alt="Think4Ever" 
                className="h-7 sm:h-8 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation - 100% untouched */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {headerNav.map((item, idx) => {
              const isTwoCol = item.columns === 2;
              const isCentered = isTwoCol || item.title === "Resources";

              return (
                <div key={idx} className="relative group">
                  {item.items ? (
                    <>
                      <button 
                        type="button"
                        className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        {item.title}
                        <ChevronDown className="h-4 w-4 text-white/70 group-hover:text-white transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      {/* Dropdown Panel with Smooth Glide & Fade Transition */}
                      <div 
                        className={`absolute top-full mt-1.5 z-50 rounded-2xl bg-white dark:bg-[#121316] p-2 shadow-2xl border border-slate-200/90 dark:border-white/[0.1] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-[''] ${
                          isCentered ? 'left-1/2 t4e-dropdown-menu-centered' : 'left-0 t4e-dropdown-menu'
                        } ${isTwoCol ? 'w-[590px]' : 'w-[270px]'}`}
                        role="menu"
                      >
                        <div className={`grid gap-1 ${isTwoCol ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {item.items.map((subItem, subIdx) => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subIdx}
                                href={subItem.href!}
                                className="group/item flex items-start gap-2.5 rounded-xl p-2 transition-colors hover:bg-[#2563eb]/10 dark:hover:bg-white/[0.06] cursor-pointer"
                                role="menuitem"
                              >
                                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f1f5f9] dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/[0.08] text-[#3A5690] dark:text-blue-400 group-hover/item:bg-white dark:group-hover/item:bg-white/[0.12] transition-colors">
                                  <Icon className="h-3.5 w-3.5 text-[#3A5690] dark:text-blue-400" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs font-bold text-[#0B1B3A] dark:text-neutral-100 group-hover/item:text-[#1D63E0] dark:group-hover/item:text-blue-400 transition-colors leading-snug">
                                    {subItem.title}
                                  </div>
                                  <div className="text-[10px] font-medium text-[#3A5690] dark:text-neutral-400 leading-tight mt-0.5">
                                    {subItem.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <div className="h-4 w-px bg-white/20 mx-0.5" />
            <Link 
              href="https://portal.think4ever.com/#/login"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors px-3 py-2 cursor-pointer"
            >
              Sign in
            </Link>
            <Link
              href="https://portal.think4ever.com/#/register"
              className="rounded-full bg-[#F4F6FA] text-[#1D63E0] px-6 py-2.5 text-sm font-semibold shadow-sm hover:bg-white transition-colors cursor-pointer"
            >
              Start free
            </Link>
          </div>

          {/* Mobile Header Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Link 
              href="https://portal.think4ever.com/#/login"
              className="text-xs font-semibold text-white/90 hover:text-white px-2 py-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              Sign in
            </Link>
            <button
              type="button"
              className="flex items-center justify-center p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Production-Grade Mobile Drawer (Slide-Over) */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop Overlay with Smooth Fade */}
        <div 
          className={`fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)} 
        />

        {/* Slide-Out Drawer Panel */}
        <div 
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-[340px] sm:max-w-sm bg-white dark:bg-[#0C0D0E] border-l border-transparent dark:border-white/[0.08] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Top Header - Brand blue matching header */}
          <div className="bg-[#093cad] text-white px-5 py-4 flex items-center justify-between border-b border-[#0a2f85] shrink-0">
            <Link 
              href="https://think4ever.com" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <img 
                src="/docs/images/think4ever-logo.svg" 
                alt="Think4Ever" 
                className="h-7 w-auto" 
              />
            </Link>
            <button
              type="button"
              className="flex items-center justify-center h-8 w-8 rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Segmented Tab Switcher (Documentation vs Main Menu) */}
          <div className="p-3 bg-slate-50 dark:bg-[#121316] border-b border-slate-200/80 dark:border-white/[0.08] shrink-0">
            <div className="flex rounded-xl bg-slate-200/70 dark:bg-white/[0.05] p-1">
              <button
                type="button"
                onClick={() => setActiveMobileTab('docs')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeMobileTab === 'docs'
                    ? 'bg-white dark:bg-white/[0.1] text-[#1D63E0] dark:text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Docs Menu</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMobileTab('menu')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeMobileTab === 'menu'
                    ? 'bg-white dark:bg-white/[0.1] text-[#1D63E0] dark:text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Compass className="h-3.5 w-3.5" />
                <span>Site Menu</span>
              </button>
            </div>
          </div>

          {/* Drawer Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-4 py-3.5">
            {activeMobileTab === 'docs' ? (
              /* Documentation Navigation View */
              <div className="space-y-4">
                {/* Designer vs Developer Switcher */}
                <div className="p-2.5 rounded-xl bg-blue-50/70 dark:bg-white/[0.04] border border-blue-100/70 dark:border-white/[0.08]">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-800/70 dark:text-neutral-400 mb-1.5 px-1">
                    Documentation Mode
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <Link
                      href="/introduction"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-center gap-1 py-2 px-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        !isDevMode && !isPortalMode
                          ? "bg-[#1D63E0] text-white shadow-xs font-bold"
                          : "bg-white dark:bg-white/[0.05] text-slate-700 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-white/[0.08] border border-slate-200/80 dark:border-white/[0.08]"
                      }`}
                    >
                      <BookOpen className="h-3.5 w-3.5 shrink-0" />
                      <span>Designer</span>
                    </Link>
                    <Link
                      href="/dev/developer_mode"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-center gap-1 py-2 px-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isDevMode
                          ? "bg-[#1D63E0] text-white shadow-xs font-bold"
                          : "bg-white dark:bg-white/[0.05] text-slate-700 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-white/[0.08] border border-slate-200/80 dark:border-white/[0.08]"
                      }`}
                    >
                      <Code className="h-3.5 w-3.5 shrink-0" />
                      <span>Developer</span>
                    </Link>
                    <Link
                      href="/portal/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-center gap-1 py-2 px-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isPortalMode
                          ? "bg-[#1D63E0] text-white shadow-xs font-bold"
                          : "bg-white dark:bg-white/[0.05] text-slate-700 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-white/[0.08] border border-slate-200/80 dark:border-white/[0.08]"
                      }`}
                    >
                      <LayoutDashboard className="h-3.5 w-3.5 shrink-0" />
                      <span>Portal</span>
                    </Link>
                  </div>
                </div>

                {/* Doc Navigation Tree */}
                <div className="space-y-4 pt-1">
                  {docGroups.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-1">
                      {group.title && (
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-neutral-100 px-2 mb-1.5">
                          {group.title}
                        </h4>
                      )}
                      <div className="space-y-0.5">
                        {group.items.map((item, itemIdx) => {
                          const Icon = item.icon;
                          const hasSubmenu = item.items && item.items.length > 0;
                          const isSubOpen = !!openDocSubmenus[item.title];
                          const isActive = pathname === item.href;

                          return (
                            <div key={itemIdx}>
                              {hasSubmenu ? (
                                <div>
                                  <button
                                    type="button"
                                    onClick={() => toggleDocSubmenu(item.title)}
                                    className={`group flex w-full items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                                      isActive
                                        ? "bg-blue-50 dark:bg-white/[0.08] text-blue-600 dark:text-white font-semibold"
                                        : "text-slate-700 dark:text-neutral-400 hover:bg-slate-100 dark:hover:bg-white/[0.04] hover:text-slate-900 dark:hover:text-white"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2 truncate">
                                      {Icon && (
                                        <Icon className="h-3.5 w-3.5 shrink-0 text-slate-500 dark:text-neutral-400" />
                                      )}
                                      <span className="truncate">{item.title}</span>
                                    </div>
                                    {isSubOpen ? (
                                      <ChevronDown className="h-3.5 w-3.5 text-slate-400 dark:text-neutral-400" />
                                    ) : (
                                      <ChevronRight className="h-3.5 w-3.5 text-slate-400 dark:text-neutral-400" />
                                    )}
                                  </button>

                                  {isSubOpen && (
                                    <div className="mt-1 ml-4 pl-2 border-l border-slate-200 dark:border-white/[0.08] space-y-0.5">
                                      {item.items!.map((subItem, subIdx) => {
                                        const isSubActive = pathname === subItem.href;
                                        return (
                                          <Link
                                            key={subIdx}
                                            href={subItem.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`block px-2.5 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                                              isSubActive
                                                ? "bg-blue-50 dark:bg-white/[0.08] text-blue-600 dark:text-white font-semibold"
                                                : "text-slate-600 dark:text-neutral-400 hover:bg-slate-100 dark:hover:bg-white/[0.04] hover:text-slate-900 dark:hover:text-white"
                                            }`}
                                          >
                                            <div>{subItem.title}</div>
                                            {subItem.badge && (
                                              <div className="text-[10px] text-slate-400 dark:text-neutral-500 font-normal">
                                                ({subItem.badge})
                                              </div>
                                            )}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                                    isActive
                                      ? "bg-blue-50 dark:bg-white/[0.08] text-blue-600 dark:text-white font-semibold border-l-2 border-blue-600 dark:border-white rounded-l-none pl-2"
                                      : "text-slate-700 dark:text-neutral-400 hover:bg-slate-100 dark:hover:bg-white/[0.04] hover:text-slate-900 dark:hover:text-white"
                                  }`}
                                >
                                  {Icon && (
                                    <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-blue-600 dark:text-white" : "text-slate-400 dark:text-neutral-400"}`} />
                                  )}
                                  <span className="truncate">{item.title}</span>
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Site Navigation View */
              <div className="space-y-1">
                {headerNav.map((item, idx) => (
                  <div key={idx} className="border-b border-slate-100 dark:border-white/[0.08] pb-1 mb-1 last:border-b-0">
                    {item.items ? (
                      <div>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-neutral-200 hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors cursor-pointer"
                          onClick={() => toggleMobileGroup(item.title)}
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-slate-400 dark:text-neutral-400 transition-transform duration-200 ${
                              openMobileGroup === item.title ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                            }`}
                          />
                        </button>

                        {openMobileGroup === item.title && (
                          <div className="mt-1 space-y-1 px-1 pb-2">
                            {item.items.map((subItem, subIdx) => {
                              const Icon = subItem.icon;
                              return (
                                <Link
                                  key={subIdx}
                                  href={subItem.href!}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-start gap-2.5 rounded-xl p-2 hover:bg-blue-50/60 dark:hover:bg-white/[0.04] transition-colors cursor-pointer"
                                >
                                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-[#3A5690] dark:text-blue-400">
                                    <Icon className="h-3.5 w-3.5" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="text-xs font-bold text-slate-900 dark:text-neutral-100 leading-snug">
                                      {subItem.title}
                                    </div>
                                    <div className="text-[11px] font-medium text-slate-500 dark:text-neutral-400 leading-tight mt-0.5">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-neutral-200 hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        <span>{item.title}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 dark:text-neutral-400" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer with Authentic Brand CTAs & Theme Selector */}
          <div className="p-4 bg-slate-50 dark:bg-[#121316] border-t border-slate-200 dark:border-white/[0.08] shrink-0 space-y-2">
            <div className="mb-2">
              <MobileThemeSegment />
            </div>
            <Link
              href="https://portal.think4ever.com/#/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold text-slate-700 dark:text-neutral-200 bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.1] hover:text-slate-900 dark:hover:text-white transition-colors block cursor-pointer"
            >
              Sign in
            </Link>
            <Link
              href="https://portal.think4ever.com/#/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-white bg-[#1D63E0] hover:bg-[#1550b8] shadow-sm transition-all active:scale-[0.98] block cursor-pointer"
            >
              Start free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
