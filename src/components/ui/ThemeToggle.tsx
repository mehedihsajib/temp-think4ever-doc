"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop, Check } from "lucide-react";

const THEME_OPTIONS = [
  { key: "light", label: "Light", icon: Sun },
  { key: "dark", label: "Dark", icon: Moon },
  { key: "system", label: "System", icon: Laptop },
] as const;

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl bg-white/10 animate-pulse ${className}`} />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all cursor-pointer border border-white/15 shadow-xs"
        aria-label="Toggle theme"
        aria-expanded={isOpen}
        title={`Theme: ${theme || "system"}`}
      >
        {theme === "system" ? (
          <Laptop className="h-4 w-4 text-white transition-transform duration-200 group-hover:scale-110" />
        ) : isDark ? (
          <Moon className="h-4 w-4 text-white transition-transform duration-200 group-hover:scale-110" />
        ) : (
          <Sun className="h-4 w-4 text-white transition-transform duration-200 group-hover:scale-110" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-38 rounded-2xl bg-white dark:bg-[#131417] border border-slate-200 dark:border-neutral-800 shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          {THEME_OPTIONS.map(({ key, label, icon: Icon }) => {
            const isSelected = theme === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setTheme(key);
                  setIsOpen(false);
                }}
                className={`group/opt flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-blue-50 dark:bg-white/[0.08] text-[#1D63E0] dark:text-white font-semibold"
                    : "text-slate-700 dark:text-neutral-300 hover:bg-slate-100/70 dark:hover:bg-white/[0.05] hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    className={`h-4 w-4 shrink-0 transition-colors ${
                      isSelected
                        ? "text-[#1D63E0] dark:text-white"
                        : "text-slate-500 dark:text-neutral-400 group-hover/opt:text-slate-800 dark:group-hover/opt:text-neutral-200"
                    }`}
                  />
                  <span>{label}</span>
                </div>
                {isSelected && (
                  <Check className="h-3.5 w-3.5 text-[#1D63E0] dark:text-white stroke-[2.5]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function MobileThemeSegment() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 rounded-xl bg-slate-100 dark:bg-white/[0.04] animate-pulse" />;
  }

  return (
    <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-[#18191D] border border-slate-200/80 dark:border-neutral-800">
      {THEME_OPTIONS.map(({ key, label, icon: Icon }) => {
        const isSelected = theme === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => setTheme(key)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
              isSelected
                ? "bg-white dark:bg-white/[0.1] text-slate-900 dark:text-white shadow-xs font-semibold"
                : "text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white font-medium"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
