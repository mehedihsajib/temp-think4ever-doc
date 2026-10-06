import React from "react";
import { Info, AlertTriangle, AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";

export type CalloutType = "note" | "info" | "warning" | "important" | "tip" | "success";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config = {
  note: {
    icon: Info,
    borderColor: "border-blue-200 dark:border-blue-500/20",
    bgColor: "bg-blue-50/80 dark:bg-blue-500/[0.06]",
    iconColor: "text-blue-600 dark:text-blue-400",
    titleColor: "text-blue-900 dark:text-blue-300",
    defaultTitle: "Note",
  },
  info: {
    icon: Info,
    borderColor: "border-blue-200 dark:border-blue-500/20",
    bgColor: "bg-blue-50/80 dark:bg-blue-500/[0.06]",
    iconColor: "text-blue-600 dark:text-blue-400",
    titleColor: "text-blue-900 dark:text-blue-300",
    defaultTitle: "Info",
  },
  warning: {
    icon: AlertTriangle,
    borderColor: "border-amber-300 dark:border-amber-500/20",
    bgColor: "bg-amber-50/90 dark:bg-amber-500/[0.06]",
    iconColor: "text-amber-600 dark:text-amber-400",
    titleColor: "text-amber-900 dark:text-amber-300",
    defaultTitle: "Warning",
  },
  important: {
    icon: AlertCircle,
    borderColor: "border-rose-300 dark:border-rose-500/20",
    bgColor: "bg-rose-50/90 dark:bg-rose-500/[0.06]",
    iconColor: "text-rose-600 dark:text-rose-400",
    titleColor: "text-rose-900 dark:text-rose-300",
    defaultTitle: "Important",
  },
  tip: {
    icon: Lightbulb,
    borderColor: "border-emerald-200 dark:border-emerald-500/20",
    bgColor: "bg-emerald-50/80 dark:bg-emerald-500/[0.06]",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    titleColor: "text-emerald-900 dark:text-emerald-300",
    defaultTitle: "Tip",
  },
  success: {
    icon: CheckCircle2,
    borderColor: "border-emerald-200 dark:border-emerald-500/20",
    bgColor: "bg-emerald-50/80 dark:bg-emerald-500/[0.06]",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    titleColor: "text-emerald-900 dark:text-emerald-300",
    defaultTitle: "Success",
  },
};

export function Callout({ type = "note", title, children }: CalloutProps) {
  const c = config[type] || config.note;
  const Icon = c.icon;

  return (
    <div className={`my-5 flex gap-3.5 rounded-xl border p-4 shadow-xs transition-colors ${c.borderColor} ${c.bgColor}`}>
      <div className="shrink-0 pt-0.5">
        <Icon className={`h-5 w-5 ${c.iconColor}`} />
      </div>
      <div className="min-w-0 flex-1 text-sm leading-relaxed text-slate-800 dark:text-neutral-300">
        {title && (
          <div className={`font-semibold mb-1 ${c.titleColor}`}>
            {title}
          </div>
        )}
        <div className="prose-p:my-1 prose-p:leading-relaxed [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}
