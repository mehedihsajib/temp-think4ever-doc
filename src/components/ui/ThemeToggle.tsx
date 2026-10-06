"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop, Check } from "lucide-react";

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
      <div className={`w-9 h-9 rounded-lg bg-white/10 animate-pulse ${className}`} />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-white transition-all cursor-pointer border border-white/15 dark:border-slate-700 shadow-xs active:scale-95"
        aria-label="Toggle theme"
        title={`Theme: ${theme || "system"}`}
      >
        {theme === "system" ? (
          <Laptop className="h-4 w-4 text-white" />
        ) : isDark ? (
          <Moon className="h-4 w-4 text-blue-300" />
        ) : (
          <Sun className="h-4 w-4 text-amber-300" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <button
            type="button"
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className={`flex items-center justify-between w-full px-3 py-2 text-xs font-medium transition-colors cursor-pointer ${
              theme === "light"
                ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Sun className="h-3.5 w-3.5 text-amber-500" />
              <span>Light</span>
            </div>
            {theme === "light" && <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />}
          </button>

          <button
            type="button"
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
            className={`flex items-center justify-between w-full px-3 py-2 text-xs font-medium transition-colors cursor-pointer ${
              theme === "dark"
                ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Moon className="h-3.5 w-3.5 text-blue-400" />
              <span>Dark</span>
            </div>
            {theme === "dark" && <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />}
          </button>

          <button
            type="button"
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
            className={`flex items-center justify-between w-full px-3 py-2 text-xs font-medium transition-colors cursor-pointer ${
              theme === "system"
                ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Laptop className="h-3.5 w-3.5 text-slate-400" />
              <span>System</span>
            </div>
            {theme === "system" && <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />}
          </button>
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
    return <div className="h-10 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse" />;
  }

  return (
    <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
          theme === "light"
            ? "bg-white text-slate-900 shadow-xs font-semibold"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        <Sun className="h-3.5 w-3.5 text-amber-500" />
        <span>Light</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
          theme === "dark"
            ? "bg-slate-900 dark:bg-[#1E293B] text-white shadow-xs font-semibold"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        <Moon className="h-3.5 w-3.5 text-blue-400" />
        <span>Dark</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
          theme === "system"
            ? "bg-white dark:bg-[#1E293B] text-slate-900 dark:text-white shadow-xs font-semibold"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        <Laptop className="h-3.5 w-3.5 text-slate-400" />
        <span>System</span>
      </button>
    </div>
  );
}
