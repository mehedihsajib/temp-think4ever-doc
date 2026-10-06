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
    borderColor: "border-blue-200 dark:border-blue-900/60",
    bgColor: "bg-blue-50/80 dark:bg-blue-950/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    titleColor: "text-blue-900 dark:text-blue-200",
    defaultTitle: "Note",
  },
  info: {
    icon: Info,
    borderColor: "border-blue-200 dark:border-blue-900/60",
    bgColor: "bg-blue-50/80 dark:bg-blue-950/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    titleColor: "text-blue-900 dark:text-blue-200",
    defaultTitle: "Info",
  },
  warning: {
    icon: AlertTriangle,
    borderColor: "border-amber-300 dark:border-amber-900/60",
    bgColor: "bg-amber-50/90 dark:bg-amber-950/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    titleColor: "text-amber-900 dark:text-amber-200",
    defaultTitle: "Warning",
  },
  important: {
    icon: AlertCircle,
    borderColor: "border-rose-300 dark:border-rose-900/60",
    bgColor: "bg-rose-50/90 dark:bg-rose-950/30",
    iconColor: "text-rose-600 dark:text-rose-400",
    titleColor: "text-rose-900 dark:text-rose-200",
    defaultTitle: "Important",
  },
  tip: {
    icon: Lightbulb,
    borderColor: "border-emerald-200 dark:border-emerald-900/60",
    bgColor: "bg-emerald-50/80 dark:bg-emerald-950/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    titleColor: "text-emerald-900 dark:text-emerald-200",
    defaultTitle: "Tip",
  },
  success: {
    icon: CheckCircle2,
    borderColor: "border-emerald-200 dark:border-emerald-900/60",
    bgColor: "bg-emerald-50/80 dark:bg-emerald-950/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    titleColor: "text-emerald-900 dark:text-emerald-200",
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
      <div className="min-w-0 flex-1 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
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
