"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Logo from "@/public/assets/images/think4ever-logo.png";
import { FileText, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const RESOURCES_DATA = [
  {
    title: "Blog",
    desc: "Insights, updates, and deep dives into agentic development.",
    href: "/blog",
    icon: FileText,
  },
];

const DOCS_DATA = [
  {
    title: "Customer Onboarding",
    desc: "Get started with Think4Ever and set up your environment.",
    href: "https://think4ever.com/docs/onboarding.html",
    icon: FileText,
  },
  {
    title: "Think4ever Designer",
    desc: "Learn how to use the Designer to map your systems.",
    href: "https://think4ever.com/docs/manual_introduction.html",
    icon: FileText,
  },
  {
    title: "Think4ever Developer",
    desc: "Technical guide for developers building with Think4Ever.",
    href: "https://think4ever.com/docs/dev/start_new_project.html",
    icon: FileText,
  },
];

const ListItem = React.forwardRef(
  ({ className, title, children, icon: Icon, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 group",
              className,
            )}
            {...props}
          >
            <div className="flex items-center gap-3">
              {Icon && (
                <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all aspect-square">
                  <Icon className="h-4.5 w-4.5 text-gray-400 group-hover:text-[#3b82f6]" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-bold leading-tight text-gray-900 group-hover:text-[#3b82f6] transition-colors mb-1">
                  {title}
                </div>
                <p className="text-[11.5px] leading-relaxed text-gray-400 font-medium">
                  {children}
                </p>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md py-3 px-4 sm:px-6 lg:px-12 flex items-center justify-between transition-all">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-0 font-bold tracking-tight cursor-pointer relative z-50 shrink-0"
      >
        <Image
          src={Logo}
          alt="Think4ever"
          width={180}
          height={45}
          className="w-auto h-9 sm:h-11"
          priority
        />
        <span className="text-[16px] sm:text-[20px] font-bold text-gray-500 -ml-0.5 mt-0.5 self-start">
          ™
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/")
                    ? "bg-[#f0f4ff] text-[#3b82f6] hover:bg-[#e6eeff] hover:text-[#3b82f6]"
                    : "text-gray-500 hover:text-gray-900 bg-transparent",
                  "font-semibold px-4 transition-colors",
                )}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/product")
                    ? "bg-[#f0f4ff] text-[#3b82f6] hover:bg-[#e6eeff] hover:text-[#3b82f6]"
                    : "text-gray-500 hover:text-gray-900 bg-transparent",
                  "font-semibold px-4 transition-colors",
                )}
              >
                <Link href="/product">How it Works</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/pricing")
                    ? "bg-[#f0f4ff] text-[#3b82f6] hover:bg-[#e6eeff] hover:text-[#3b82f6]"
                    : "text-gray-500 hover:text-gray-900 bg-transparent",
                  "font-medium transition-colors",
                )}
              >
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "transition-colors",
                  isActive("/docs")
                    ? "text-[#3b82f6]"
                    : "text-gray-500 hover:text-gray-900",
                )}
              >
                Docs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 outline-none">
                  {DOCS_DATA.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      icon={item.icon}
                      href={item.href}
                    >
                      {item.desc}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "transition-colors",
                  isActive("/blog") || isActive("/docs")
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900",
                )}
              >
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="left-auto right-0">
                <ul className="grid w-[400px] gap-2 p-4 outline-none">
                  {RESOURCES_DATA.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      icon={item.icon}
                      href={item.href}
                    >
                      {item.desc}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/contact-us")
                    ? "bg-[#f0f4ff] text-[#3b82f6] hover:bg-[#e6eeff] hover:text-[#3b82f6]"
                    : "text-gray-500 hover:text-gray-900 bg-transparent",
                  "font-medium transition-colors",
                )}
              >
                <Link href="/contact-us">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTA & Mobile Toggle */}
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="orange"
          className="hidden sm:flex font-semibold px-5 py-2 h-9 text-sm rounded-md transition-all whitespace-nowrap shadow-sm"
        >
          <Link href="https://portal.think4ever.com">Get Early Access</Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-[380px] p-0 flex flex-col h-full border-l bg-white"
          >
            <SheetHeader className="p-6 border-b text-left shrink-0">
              <SheetTitle>
                <SheetClose asChild>
                  <Link href="/" className="inline-flex items-center gap-0">
                    <Image
                      src={Logo}
                      alt="Think4ever"
                      width={140}
                      height={35}
                      className="w-auto h-8"
                    />
                    <span className="text-[12px] font-bold text-gray-500 -ml-0.5 mt-0.5 self-start">
                      ™
                    </span>
                  </Link>
                </SheetClose>
              </SheetTitle>
              <SheetDescription className="sr-only">
                Think4Ever Mobile Navigation Menu
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* Home */}
                <AccordionItem value="home" className="border-0">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className={cn(
                        "flex py-3 text-[18px] font-bold transition-colors",
                        isActive("/") ? "text-[#3b82f6]" : "text-gray-900",
                      )}
                    >
                      Home
                    </Link>
                  </SheetClose>
                </AccordionItem>

                {/* Product */}
                <AccordionItem value="product" className="border-0">
                  <SheetClose asChild>
                    <Link
                      href="/product"
                      className={cn(
                        "flex py-3 text-[18px] font-bold transition-colors",
                        isActive("/product")
                          ? "text-[#3b82f6]"
                          : "text-gray-900",
                      )}
                    >
                      How it Works
                    </Link>
                  </SheetClose>
                </AccordionItem>

                {/* Pricing */}
                <AccordionItem value="pricing" className="border-0">
                  <SheetClose asChild>
                    <Link
                      href="/pricing"
                      className={cn(
                        "flex py-3 text-[18px] font-bold transition-colors",
                        isActive("/pricing")
                          ? "text-[#3b82f6]"
                          : "text-gray-900",
                      )}
                    >
                      Pricing
                    </Link>
                  </SheetClose>
                </AccordionItem>

                {/* Docs */}
                <AccordionItem value="docs" className="border-0">
                  <AccordionTrigger className="py-3 hover:no-underline text-[18px] font-bold text-gray-900">
                    Docs
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="grid gap-4 pl-4 border-l border-gray-100 ml-1">
                      {DOCS_DATA.map((item) => (
                        <SheetClose key={item.title} asChild>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                          >
                            <span className="block text-[15px] font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                              {item.title}
                            </span>
                            <span className="block text-xs text-gray-500 mt-0.5">
                              {item.desc}
                            </span>
                          </a>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Resources */}
                <AccordionItem value="resources" className="border-0">
                  <AccordionTrigger className="py-3 hover:no-underline text-[18px] font-bold text-gray-900">
                    Resources
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="grid gap-4 pl-4 border-l border-gray-100 ml-1">
                      {RESOURCES_DATA.map((item) => (
                        <SheetClose key={item.title} asChild>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                          >
                            <span className="block text-[15px] font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                              {item.title}
                            </span>
                            <span className="block text-xs text-gray-500 mt-0.5">
                              {item.desc}
                            </span>
                          </a>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Contact Us */}
                <AccordionItem value="contact" className="border-0">
                  <SheetClose asChild>
                    <Link
                      href="/contact-us"
                      className={cn(
                        "flex py-3 text-[18px] font-bold transition-colors",
                        isActive("/get-early-access")
                          ? "text-[#3b82f6]"
                          : "text-gray-900",
                      )}
                    >
                      Contact Us
                    </Link>
                  </SheetClose>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="p-6 border-t mt-auto">
              <Button
                asChild
                variant="orange"
                className="w-full font-bold py-6 rounded-lg text-lg shadow-xl shadow-orange-500/20"
              >
                <Link href="https://portal.think4ever.com">
                  Get Early Access
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
