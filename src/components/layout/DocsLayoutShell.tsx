"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/layout/AppSidebar";

interface DocsLayoutShellProps {
  children: React.ReactNode;
}

export function DocsLayoutShell({ children }: DocsLayoutShellProps) {
  const pathname = usePathname();
  const isOnboarding = pathname === "/onboarding" || pathname.startsWith("/onboarding/");

  if (isOnboarding) {
    return <main className="flex-1 w-full">{children}</main>;
  }

  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-1 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full gap-8 pt-8 pb-16 items-start">
        <AppSidebar />
        <main className="min-w-0 flex-1">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
