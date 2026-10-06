"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsSidebarNav, devSidebarNav, portalSidebarNav } from "@/config/navigation";
import { 
  BookOpen,
  Code,
  ChevronDown, 
  ChevronRight, 
  PanelLeftClose, 
  PanelLeftOpen 
} from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({
    "Create a new Project": true,
  });

  const isDevMode = pathname.startsWith("/dev");
  const isPortalMode = pathname.startsWith("/portal");

  let navGroups = docsSidebarNav;
  let sidebarTitle = "Think4Ever Designer";
  let SidebarIcon = BookOpen;

  if (isDevMode) {
    navGroups = devSidebarNav;
    sidebarTitle = "Think4Ever Developer";
    SidebarIcon = Code;
  } else if (isPortalMode) {
    navGroups = portalSidebarNav;
    sidebarTitle = "Think4Ever Portal";
    SidebarIcon = BookOpen;
  }

  const toggleSubmenu = (title: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside 
      className={`select-none sticky top-20 self-start shrink-0 h-[calc(100vh-5.5rem)] hidden md:flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed 
          ? "w-10 overflow-hidden" 
          : "w-[270px]"
      }`}
    >
      {isCollapsed ? (
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setIsCollapsed(false)}
            className="flex items-center justify-center p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            title="Expand sidebar"
          >
            <PanelLeftOpen className="h-4 w-4 text-slate-600 dark:text-slate-400 cursor-pointer" />
          </button>
        </div>
      ) : (
        <div className="w-full flex flex-col h-full">
          {/* Top Header of Sidebar */}
          <div className="flex items-center justify-between pb-3 mb-2 shrink-0 pr-2">
            <div className="flex items-center gap-2">
              <SidebarIcon className="h-4 w-4 text-[#1D63E0] cursor-pointer" />
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight cursor-default">
                {sidebarTitle}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsCollapsed(true)}
              className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Collapse sidebar"
            >
              <PanelLeftClose className="h-4 w-4 cursor-pointer" />
            </button>
          </div>

          {/* Navigation Groups - ONLY this section scrolls */}
          <nav className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar pr-2 pb-8 space-y-6">
            {navGroups.map((group, groupIdx) => (
              <div key={groupIdx}>
                {group.title && (
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-neutral-100 px-2 mb-2">
                    {group.title}
                  </h4>
                )}
                <ul className="space-y-0.5 list-none m-0 p-0">
                  {group.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    const hasSubmenu = item.items && item.items.length > 0;
                    const isSubmenuOpen = !!openSubmenus[item.title];
                    const isActive = pathname === item.href;

                    return (
                      <li key={itemIdx} className="list-none m-0 p-0">
                        {hasSubmenu ? (
                          <div>
                            <button
                              type="button"
                              onClick={() => toggleSubmenu(item.title)}
                              className={`group flex w-full items-center justify-between px-2.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors cursor-pointer ${
                                isActive
                                  ? "bg-blue-50 dark:bg-white/[0.08] text-blue-600 dark:text-white font-semibold"
                                  : "text-slate-600 dark:text-neutral-400 hover:bg-slate-100/70 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-neutral-100"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 truncate">
                                {Icon && (
                                  <Icon
                                    className={`h-4 w-4 shrink-0 transition-colors cursor-pointer ${
                                      isActive
                                        ? "text-blue-600 dark:text-white"
                                        : "text-slate-400 dark:text-neutral-500 group-hover:text-slate-600 dark:group-hover:text-neutral-300"
                                    }`}
                                  />
                                )}
                                <span className="truncate">{item.title}</span>
                              </div>
                              {isSubmenuOpen ? (
                                <ChevronDown className="h-3.5 w-3.5 text-slate-400 dark:text-neutral-500 cursor-pointer" />
                              ) : (
                                <ChevronRight className="h-3.5 w-3.5 text-slate-400 dark:text-neutral-500 cursor-pointer" />
                              )}
                            </button>

                            {isSubmenuOpen && (
                              <ul className="mt-1 ml-4 pl-3 space-y-1 list-none border-l border-slate-200 dark:border-neutral-800">
                                {item.items!.map((subItem, subIdx) => {
                                  const isSubActive = pathname === subItem.href;
                                  return (
                                    <li key={subIdx} className="list-none">
                                      <Link
                                        href={subItem.href}
                                        className={`group block px-2.5 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                                          isSubActive
                                            ? "bg-blue-50 dark:bg-white/[0.08] text-blue-600 dark:text-white font-semibold"
                                            : "text-slate-600 dark:text-neutral-400 hover:bg-slate-100/70 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-neutral-100"
                                        }`}
                                      >
                                        <div className="font-medium">
                                          {subItem.title}
                                        </div>
                                        {subItem.badge && (
                                          <div className="text-[11px] text-slate-400 dark:text-neutral-500 mt-0.5 font-normal">
                                            ({subItem.badge})
                                          </div>
                                        )}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={`group flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors cursor-pointer ${
                              isActive
                                ? "bg-blue-50 dark:bg-white/[0.08] text-blue-600 dark:text-white font-semibold border-l-2 border-blue-600 dark:border-blue-400 rounded-l-none pl-2"
                                : "text-slate-600 dark:text-neutral-400 hover:bg-slate-100/70 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-neutral-100"
                            }`}
                          >
                            {Icon && (
                              <Icon
                                className={`h-4 w-4 shrink-0 transition-colors cursor-pointer ${
                                  isActive
                                    ? "text-blue-600 dark:text-white"
                                    : "text-slate-400 dark:text-neutral-500 group-hover:text-slate-600 dark:group-hover:text-neutral-300"
                                }`}
                              />
                            )}
                            <span className="truncate">{item.title}</span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      )}
    </aside>
  );
}
