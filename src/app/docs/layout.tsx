import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-brand-fog">
      <Header />
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 overflow-hidden relative">
        <SidebarProvider>
          <AppSidebar />
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <div className="flex items-center px-8 pt-8 md:px-12 md:pt-12 lg:px-16 lg:pt-16 max-w-5xl mx-auto pb-4">
                <SidebarTrigger className="text-slate-500 hover:text-slate-900 mr-2 -ml-2" />
                <span className="text-sm text-slate-500 font-medium">Toggle Sidebar</span>
              </div>
              <main className="px-8 pb-8 md:px-12 md:pb-12 lg:px-16 lg:pb-16 max-w-5xl mx-auto w-full">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
