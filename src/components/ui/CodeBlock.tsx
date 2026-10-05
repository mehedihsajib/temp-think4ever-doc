"use client";

import React, { useState, useMemo } from "react";
import { Check, Copy } from "lucide-react";
import Prism from "prismjs";

// Import commonly used language grammars
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-toml";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-markdown";

interface CodeBlockProps {
  children?: any;
  className?: string;
  [key: string]: any;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract raw text and language
  const { code: rawCode, lang } = useMemo(() => {
    let detectedLang = "";
    if (className?.match(/language-(\w+)/)) {
      detectedLang = className.match(/language-(\w+)/)![1];
    } else if (children?.props?.className?.match(/language-(\w+)/)) {
      detectedLang = children.props.className.match(/language-(\w+)/)![1];
    }

    const extractText = (node: any): string => {
      if (typeof node === "string") return node;
      if (Array.isArray(node)) return node.map(extractText).join("");
      if (node && typeof node === "object" && node.props && node.props.children) {
        return extractText(node.props.children);
      }
      return "";
    };

    const text = extractText(children).trim();

    // Auto-detect if language is missing
    if (!detectedLang) {
      if (text.startsWith("{") || (text.startsWith("[") && text.includes("\":"))) {
        detectedLang = "json";
      } else if (text.startsWith("[") && (text.includes("command") || text.includes("mcp"))) {
        detectedLang = "toml";
      } else if (
        text.startsWith("curl") || 
        text.startsWith("claude") || 
        text.startsWith("npm") || 
        text.startsWith("npx") || 
        text.startsWith("#") ||
        text.startsWith("git ")
      ) {
        detectedLang = "bash";
      }
    }

    return { code: text, lang: detectedLang.toLowerCase() || "text" };
  }, [children, className]);

  // Syntax highlight with Prism
  const highlightedHtml = useMemo(() => {
    if (!rawCode) return "";
    const grammar = Prism.languages[lang] || Prism.languages.text;
    if (!grammar) return rawCode;
    try {
      return Prism.highlight(rawCode, grammar, lang);
    } catch {
      return rawCode;
    }
  }, [rawCode, lang]);

  const handleCopy = () => {
    if (!rawCode) return;
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-xl border border-slate-200/90 bg-[#fafafa] shadow-xs transition-all duration-200 hover:border-slate-300 hover:shadow-sm">
      {/* Light Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-2.5 bg-slate-50/90 select-none">
        <div className="flex items-center gap-3">
          {/* Mac-style Window Dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200 transition-colors group-hover:bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200 transition-colors group-hover:bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200 transition-colors group-hover:bg-[#27c93f]" />
          </div>
          {/* Language Badge */}
          <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-500">
            {lang === "text" ? "Code" : lang}
          </span>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-xs hover:bg-slate-50 hover:text-slate-900 active:scale-95 transition-all cursor-pointer"
          title="Copy code"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <span className="text-emerald-600 font-mono text-[11px] font-bold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-slate-500" />
              <span className="font-mono text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body with Light Theme Syntax Highlighting */}
      <div className="overflow-x-auto p-4 text-[13px] leading-relaxed font-mono text-slate-800 bg-white">
        <pre className="!bg-transparent !p-0 !m-0 !border-0 font-mono text-slate-800" {...props}>
          <code 
            className={`font-mono text-slate-800 language-${lang}`}
            dangerouslySetInnerHTML={{ __html: highlightedHtml || rawCode }}
          />
        </pre>
      </div>
    </div>
  );
}
