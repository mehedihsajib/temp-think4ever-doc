"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export function TopProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const completeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startProgress = () => {
    if (completeTimerRef.current) {
      clearTimeout(completeTimerRef.current);
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setVisible(true);
    setProgress(20);

    // Trickle progress up to ~85%
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 85;
        }
        // Increment by smooth decreasing increments
        const remaining = 85 - prev;
        const step = Math.max(1, Math.floor(remaining * 0.15));
        return prev + step;
      });
    }, 150);
  };

  const finishProgress = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setProgress(100);

    completeTimerRef.current = setTimeout(() => {
      setVisible(false);
      completeTimerRef.current = setTimeout(() => {
        setProgress(0);
      }, 250);
    }, 200);
  };

  // Complete progress on pathname change
  useEffect(() => {
    finishProgress();
  }, [pathname]);

  // Intercept internal link clicks to start progress immediately
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Don't intercept if modifier key is pressed
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented) {
        return;
      }

      // Find closest anchor tag
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external protocols or target="_blank"
      if (
        anchor.target === "_blank" ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      // Ignore in-page hash links (e.g. #score-formula)
      if (href.startsWith("#")) {
        return;
      }

      try {
        const targetUrl = new URL(anchor.href, window.location.href);

        // Check if external domain
        if (targetUrl.origin !== window.location.origin) {
          return;
        }

        // Check if same pathname and search (only hash changed or exact same page clicked)
        const currentPath = window.location.pathname;
        const targetPath = targetUrl.pathname;

        if (
          targetPath === currentPath &&
          targetUrl.search === window.location.search
        ) {
          return;
        }

        // It is an internal page transition
        startProgress();
      } catch {
        // invalid URL, ignore
      }
    };

    const handlePopState = () => {
      startProgress();
    };

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("popstate", handlePopState);
      if (timerRef.current) clearInterval(timerRef.current);
      if (completeTimerRef.current) clearTimeout(completeTimerRef.current);
    };
  }, []);

  if (!visible && progress === 0) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[99999] h-[2.5px] pointer-events-none transition-opacity duration-200 ease-out"
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="h-full bg-gradient-to-r from-[#1D63E0] via-[#38bdf8] to-[#60a5fa] transition-all ease-out shadow-[0_0_10px_rgba(56,189,248,0.8),0_0_4px_rgba(29,99,224,0.6)]"
        style={{
          width: `${progress}%`,
          transitionDuration: progress === 100 ? "180ms" : "200ms",
        }}
      />
    </div>
  );
}
