import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BookOpen, Map, Settings, LayoutTemplate } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        url: "/docs/introduction",
        icon: BookOpen,
      },
    ],
  },
  {
    title: "Core Modules",
    items: [
      {
        title: "UI Designs",
        url: "/docs/ui-designs",
        icon: LayoutTemplate,
      },
      {
        title: "Functional Architecture",
        url: "/docs/functional-architecture",
        icon: Map,
      },
      {
        title: "Roles & Permissions",
        url: "/docs/roles-permissions",
        icon: Settings,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border bg-brand-fog">
      <SidebarContent className="pt-6">
        {navItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton render={<Link href={item.url} />} tooltip={item.title} className="hover:bg-brand-sky/20 hover:text-brand-blue data-[active=true]:bg-brand-sky/30 data-[active=true]:text-brand-blue transition-colors">
                      <item.icon className="h-4 w-4 mr-2" />
                      <span className="font-medium text-sm">{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
