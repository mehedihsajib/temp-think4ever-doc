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
    <div className="hidden xl:block w-[270px] shrink-0 sticky top-20 self-start h-[calc(100vh-5.5rem)] overflow-y-auto pl-6 border-l border-slate-100 dark:border-slate-800/80 custom-scrollbar">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 tracking-wide mb-3">
        <AlignLeft className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400 cursor-pointer" />
        <span>On this page</span>
      </div>

      <nav>
        {/* Strictly flat list with zero dots and identical alignment for all items */}
        <ul className="space-y-1 list-none m-0 p-0">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <li
                key={heading.id}
                className="list-none m-0 p-0"
              >
                <button
                  type="button"
                  onClick={() => scrollToHeading(heading.id)}
                  className={`block w-full text-left py-1.5 px-2.5 rounded-md text-xs transition-colors cursor-pointer ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50/80 dark:bg-blue-950/40"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <span className="line-clamp-2">{heading.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
