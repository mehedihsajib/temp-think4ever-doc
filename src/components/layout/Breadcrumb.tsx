"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { docsSidebarNav, devSidebarNav, portalSidebarNav } from "@/config/navigation";

export interface BreadcrumbCrumb {
  label: string;
  href?: string;
}

function resolveBreadcrumbs(pathname: string): BreadcrumbCrumb[] {
  const crumbs: BreadcrumbCrumb[] = [];

  // Developer Mode
  if (pathname.startsWith("/dev")) {
    crumbs.push({
      label: "Think4Ever Developer",
      href: "/dev/developer_mode",
    });

    // Search devSidebarNav
    for (const group of devSidebarNav) {
      for (const item of group.items) {
        if (item.href === pathname) {
          crumbs.push({ label: item.title });
          return crumbs;
        }
      }
    }

    // Fallback: format slug
    const filename = pathname.split("/").pop() || "";
    const label = filename
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ label });
    return crumbs;
  }

  // Portal Mode
  if (pathname.startsWith("/portal")) {
    crumbs.push({
      label: "Think4Ever Portal",
      href: "/portal/dashboard",
    });

    // Search portalSidebarNav
    for (const group of portalSidebarNav) {
      for (const item of group.items) {
        if (item.href === pathname) {
          crumbs.push({ label: item.title });
          return crumbs;
        }
      }
    }

    const filename = pathname.split("/").pop() || "";
    const label = filename
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ label });
    return crumbs;
  }

  // Designer Mode (Default)
  crumbs.push({ label: "Think4Ever Designer", href: "/introduction" });

  // Search docsSidebarNav
  for (const group of docsSidebarNav) {
    for (const item of group.items) {
      // Check direct match
      if (item.href === pathname) {
        if (group.title) {
          crumbs.push({ label: group.title });
        }
        crumbs.push({ label: item.title });
        return crumbs;
      }

      // Check nested sub-items (e.g. Create a new Project -> Reverse Engineering)
      if (item.items) {
        for (const subItem of item.items) {
          if (subItem.href === pathname) {
            if (group.title) {
              crumbs.push({ label: group.title });
            }
            crumbs.push({ label: item.title, href: item.href });
            crumbs.push({ label: subItem.title });
            return crumbs;
          }
        }
      }
    }
  }

  // Fallback for any other doc slug
  const lastPart =
    pathname
      .replace(/^\/?/, "")
      .split("/")
      .pop() || "";
  if (lastPart && lastPart !== "introduction") {
    const label = lastPart
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ label });
  }

  return crumbs;
}

export function Breadcrumb({ customPath }: { customPath?: string }) {
  const currentPath = usePathname();
  const path = customPath || currentPath || "/introduction";
  const crumbs = resolveBreadcrumbs(path);

  return (
    <nav aria-label="Breadcrumb" className="mb-4 select-none">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 list-none m-0 p-0 mt-0"
      >
        {/* Home Root Icon */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <Link
            href="/"
            itemProp="item"
            className="flex items-center text-slate-400 hover:text-blue-600 transition-colors cursor-pointer p-0.5 rounded-sm hover:bg-slate-100"
            title="Home"
            aria-label="Home"
          >
            <Home className="h-3.5 w-3.5" />
            <span itemProp="name" className="sr-only">
              Home
            </span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          const position = idx + 2;

          return (
            <React.Fragment key={idx}>
              <li
                aria-hidden="true"
                className="flex items-center text-slate-300"
              >
                <ChevronRight className="h-3 w-3 stroke-[2]" />
              </li>

              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="flex items-center min-w-0"
              >
                {isLast ? (
                  <span
                    itemProp="name"
                    aria-current="page"
                    className="font-medium text-slate-800 truncate"
                  >
                    {crumb.label}
                  </span>
                ) : crumb.href ? (
                  <Link
                    href={crumb.href}
                    itemProp="item"
                    className="text-slate-500 hover:text-blue-600 font-medium transition-colors cursor-pointer truncate"
                  >
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                ) : (
                  <span
                    itemProp="name"
                    className="text-slate-500 font-medium truncate"
                  >
                    {crumb.label}
                  </span>
                )}
                <meta itemProp="position" content={String(position)} />
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
