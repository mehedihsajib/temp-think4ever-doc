import React from 'react';
import Link from 'next/link';
import { footerNav } from '@/config/navigation';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-50 border-t border-slate-200 pt-16 pb-8 font-sans">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-5 md:col-span-4 lg:col-span-5">
            <Link href="https://think4ever.com/" className="inline-block">
              <img 
                src="https://think4ever.com/docs/assets/images/think4ever-logo-footer.png" 
                alt="Think4Ever" 
                className="h-10 w-auto object-contain mb-1"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              {footerNav.brand.description}
            </p>
            <div className="flex items-center gap-3 mt-1">
              {footerNav.brand.socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue"
                >
                  {social.icon === 'youtube' && (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )}
                  {social.icon === 'linkedin' && (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 lg:col-span-7">
            {footerNav.groups.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-3 text-sm">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-900">
                  {group.title}
                </h4>
                {group.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="text-brand-deep-blue transition-colors duration-200 hover:text-brand-blue"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-xs font-medium text-slate-500 m-0">
            © 2026 Think4Ever Global Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs font-semibold text-slate-600">
              Think4Ever Inc.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
