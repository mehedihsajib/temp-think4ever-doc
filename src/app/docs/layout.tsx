import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top Header */}
      <Header />

      {/* Main Container - strictly matching Header max-width and horizontal padding */}
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full gap-8 pt-8 pb-16 items-start">
          {/* Sidebar - Inside container, starts below header at exact same vertical offset as main content */}
          <AppSidebar />

          {/* Main Content Area - Same top content gap, takes remaining width */}
          <main className="min-w-0 flex-1">
            <div className="prose prose-slate max-w-none">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
