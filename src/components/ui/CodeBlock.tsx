"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  children?: any;
  className?: string;
  [key: string]: any;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const extractText = (node: any): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (node && node.props && node.props.children) {
      return extractText(node.props.children);
    }
    return "";
  };

  const rawCode = extractText(children).trim();

  const languageMatch = className?.match(/language-(\w+)/) || 
    (children?.props?.className?.match(/language-(\w+)/));
  const language = languageMatch ? languageMatch[1] : "";

  const handleCopy = () => {
    if (!rawCode) return;
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-5 overflow-hidden rounded-xl border border-slate-800/90 bg-slate-900 shadow-md">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 bg-slate-950/70">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Terminal className="h-3.5 w-3.5 text-slate-500" />
          <span>{language || "code"}</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-mono text-[11px]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span className="font-mono text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto p-4 text-[13px] leading-relaxed font-mono text-slate-100">
        <pre className="!bg-transparent !p-0 !m-0 !border-0 font-mono text-slate-100" {...props}>
          {children}
        </pre>
      </div>
    </div>
  );
}
