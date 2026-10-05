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

  const isDevMode = pathname.startsWith("/docs/dev");
  const isPortalMode = pathname.startsWith("/docs/portal");

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
            className="flex items-center justify-center p-2 rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-blue-600 transition-colors cursor-pointer"
            title="Expand sidebar"
          >
            <PanelLeftOpen className="h-4 w-4 text-slate-600 cursor-pointer" />
          </button>
        </div>
      ) : (
        <div className="w-full flex flex-col h-full">
          {/* Top Header of Sidebar - FIXED at the top of the sidebar, never scrolls away and never under a scrollbar */}
          <div className="flex items-center justify-between pb-3 mb-2 shrink-0 pr-2">
            <div className="flex items-center gap-2">
              <SidebarIcon className="h-4 w-4 text-[#1D63E0] cursor-pointer" />
              <span className="text-sm font-bold text-slate-800 tracking-tight cursor-default">
                {sidebarTitle}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsCollapsed(true)}
              className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
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
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
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
                                  ? "bg-blue-50 text-blue-600 font-semibold"
                                  : "text-slate-700 hover:bg-slate-100/70 hover:text-slate-900"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 truncate">
                                {Icon && (
                                  <Icon
                                    className={`h-4 w-4 shrink-0 transition-colors cursor-pointer ${
                                      isActive
                                        ? "text-blue-600"
                                        : "text-slate-400 group-hover:text-slate-600"
                                    }`}
                                  />
                                )}
                                <span className="truncate">{item.title}</span>
                              </div>
                              {isSubmenuOpen ? (
                                <ChevronDown className="h-3.5 w-3.5 text-slate-400 cursor-pointer" />
                              ) : (
                                <ChevronRight className="h-3.5 w-3.5 text-slate-400 cursor-pointer" />
                              )}
                            </button>

                            {isSubmenuOpen && (
                              <ul className="mt-1 ml-4 pl-3 space-y-1 list-none">
                                {item.items!.map((subItem, subIdx) => {
                                  const isSubActive = pathname === subItem.href;
                                  return (
                                    <li key={subIdx} className="list-none">
                                      <Link
                                        href={subItem.href}
                                        className={`group block px-2.5 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                                          isSubActive
                                            ? "bg-blue-50 text-blue-600 font-semibold"
                                            : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
                                        }`}
                                      >
                                        <div className="font-medium">
                                          {subItem.title}
                                        </div>
                                        {subItem.badge && (
                                          <div className="text-[11px] text-slate-400 mt-0.5 font-normal">
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
                                ? "bg-blue-50 text-blue-600 font-semibold border-l-2 border-blue-600 rounded-l-none pl-2"
                                : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
                            }`}
                          >
                            {Icon && (
                              <Icon
                                className={`h-4 w-4 shrink-0 transition-colors cursor-pointer ${
                                  isActive
                                    ? "text-blue-600"
                                    : "text-slate-400 group-hover:text-slate-600"
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
