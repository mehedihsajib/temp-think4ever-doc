"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DocNavButtonProps {
  href: string;
  label?: string;
  title?: string;
  eyebrow?: string;
}

export function DocNavButton({
  href,
  label,
  title,
  eyebrow = "Next",
}: DocNavButtonProps) {
  const displayLabel = label || title || "Continue";

  return (
    <div className="not-prose mt-12 pt-8 border-t border-slate-200/80 flex justify-end">
      <Link
        href={href}
        className="group inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-[#1D63E0] text-white shadow-xs hover:bg-[#1554c2] hover:shadow-md hover:shadow-blue-500/15 active:scale-[0.99] transition-all duration-200 cursor-pointer"
        aria-label={`${eyebrow}: ${displayLabel}`}
      >
        <div className="flex flex-col items-start text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-200/90 leading-tight">
            {eyebrow}
          </span>
          <span className="text-sm font-semibold text-white leading-snug">
            {displayLabel}
          </span>
        </div>
        <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 group-hover:bg-white/25">
          <ArrowRight className="h-4 w-4 text-white" />
        </div>
      </Link>
    </div>
  );
}

export default DocNavButton;
