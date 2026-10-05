"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { headerNav } from '@/config/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  const toggleMobileGroup = (title: string) => {
    setOpenMobileGroup(openMobileGroup === title ? null : title);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#0a2f85] bg-[#093cad] text-white">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="https://think4ever.com" className="hidden md:block">
              <img src="/images/think4ever-logo.svg" alt="Think4Ever" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {headerNav.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.items ? (
                  <>
                    <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                      {item.title}
                      <ChevronDown className="h-4 w-4 text-white/70 group-hover:text-white transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 hidden w-screen max-w-sm rounded-xl bg-white p-2 shadow-xl ring-1 ring-slate-900/5 group-hover:block transition-all opacity-0 group-hover:opacity-100">
                      <div className={`grid gap-1 ${item.columns === 2 ? 'grid-cols-2 max-w-2xl w-[600px]' : 'grid-cols-1 w-72'}`}>
                        {item.items.map((subItem, subIdx) => {
                          const Icon = subItem.icon;
                          return (
                            <Link
                              key={subIdx}
                              href={subItem.href!}
                              className="flex items-start gap-3 rounded-lg p-3 hover:bg-slate-50 transition-colors"
                            >
                              <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 ${subItem.color || 'text-blue-600'}`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-slate-900">{subItem.title}</div>
                                <div className="text-xs text-slate-500 mt-0.5">{subItem.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="https://portal.think4ever.com/#/login"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors px-3 py-2"
            >
              Sign in
            </Link>
            <Link
              href="https://portal.think4ever.com/#/register"
              className="rounded-full bg-[#F4F6FA] text-[#1D63E0] px-6 py-2.5 text-sm font-semibold shadow-sm hover:bg-white transition-colors"
            >
              Start free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link href="https://think4ever.com" className="mr-4 block md:hidden">
              <img src="/images/think4ever-logo.svg" alt="Think4Ever" className="h-7 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white/90 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
            <div className="flex items-center justify-between">
              <Link href="https://think4ever.com" className="-m-1.5 p-1.5">
                <span className="sr-only">Think4Ever</span>
                {/* On light background in mobile menu, use dark logo or standard one */}
                <img src="/images/think4ever-logo.svg" alt="" className="h-8 w-auto filter invert" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  {headerNav.map((item, idx) => (
                    <div key={idx}>
                      {item.items ? (
                        <>
                          <button
                            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                            onClick={() => toggleMobileGroup(item.title)}
                          >
                            {item.title}
                            <ChevronDown
                              className={`h-5 w-5 flex-none transition-transform ${openMobileGroup === item.title ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
                              aria-hidden="true"
                            />
                          </button>
                          {openMobileGroup === item.title && (
                            <div className="mt-2 space-y-2 px-4">
                              {item.items.map((subItem, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={subItem.href!}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href!}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="https://portal.think4ever.com/#/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="https://portal.think4ever.com/#/register"
                    className="mt-4 block rounded-full bg-[#FF7A1A] px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#e66c16]"
                  >
                    Start for free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
