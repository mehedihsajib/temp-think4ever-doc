"use client";

import React, { useEffect, useState } from "react";
import { AlignLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export interface HeadingItem {
  id: string;
  title: string;
  level?: number;
}

interface OnThisPageProps {
  initialHeadings?: HeadingItem[];
}

export function OnThisPage({ initialHeadings = [] }: OnThisPageProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>(initialHeadings);
  const [activeId, setActiveId] = useState<string>(initialHeadings[0]?.id || "");
  const pathname = usePathname();

  useEffect(() => {
    // Scan only top-level H2 headings - no nested submenus
    const headingElements = Array.from(
      document.querySelectorAll("main h2, article h2, .prose h2")
    );

    if (headingElements.length > 0) {
      const items: HeadingItem[] = headingElements
        .map((el) => {
          const id = el.id || el.textContent?.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") || "";
          if (!el.id && id) {
            el.id = id;
          }
          return {
            id,
            title: el.textContent?.replace(/#$/, "").trim() || "",
            level: 2,
          };
        })
        .filter((item) => item.id && item.title);

      setHeadings(items);
      if (items.length > 0 && !activeId) {
        setActiveId(items[0].id);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0% -60% 0%",
        threshold: 0.1,
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  if (headings.length === 0) {
    return null;
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <aside className="hidden xl:block w-[220px] shrink-0 sticky top-20 self-start h-[calc(100vh-5.5rem)] overflow-y-auto pl-5 border-l border-slate-200/80 dark:border-neutral-800/80 custom-scrollbar text-xs">
      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-neutral-500 mb-2.5">
        <AlignLeft className="h-3 w-3 text-slate-400 dark:text-neutral-500" />
        <span>On this page</span>
      </div>

      <nav aria-label="Table of contents">
        <ul className="space-y-0.5 list-none m-0 p-0">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <li key={heading.id} className="list-none m-0 p-0">
                <button
                  type="button"
                  onClick={() => scrollToHeading(heading.id)}
                  className={`block w-full text-left py-1 px-2 rounded-md text-[12px] leading-snug transition-colors cursor-pointer ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50/70 dark:bg-blue-950/30"
                      : "text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200 hover:bg-slate-100/60 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="line-clamp-2">{heading.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
