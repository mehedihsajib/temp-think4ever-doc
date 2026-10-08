"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { X, ZoomIn } from "lucide-react";

const SIZE_PRESETS: Record<string, string> = {
  xs: "160px",
  sm: "240px",
  md: "420px",
  lg: "640px",
  xl: "800px",
  full: "100%",
};

export interface DocImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export function DocImage({
  src,
  alt = "Documentation Image",
  width,
  height,
  maxWidth,
  className,
  style,
}: DocImageProps) {
  let cleanSrc = src || "";
  let effectiveMaxWidth: string | number | undefined =
    maxWidth ?? (style as any)?.maxWidth ?? (style as any)?.width;

  // If width is provided (and not maxWidth)
  if (!effectiveMaxWidth && width) {
    effectiveMaxWidth = width;
  }

  // Parse size from URL hash: e.g. /image.png#200px, /image.png#w=200, /image.png#200, /image.png#sm
  if (cleanSrc.includes("#")) {
    const [base, hash] = cleanSrc.split("#");
    if (hash) {
      cleanSrc = base;
      if (!effectiveMaxWidth) {
        const lowerHash = hash.toLowerCase();
        if (SIZE_PRESETS[lowerHash]) {
          effectiveMaxWidth = SIZE_PRESETS[lowerHash];
        } else if (/^\d+(px|%|rem)?$/.test(hash)) {
          effectiveMaxWidth = /^\d+$/.test(hash) ? `${hash}px` : hash;
        } else if (hash.startsWith("w=") || hash.startsWith("max-w=")) {
          const val = hash.split("=")[1];
          effectiveMaxWidth = /^\d+$/.test(val) ? `${val}px` : val;
        }
      }
    }
  }

  // Parse size from URL query string: e.g. /image.png?w=200 or /image.png?maxWidth=200
  if (cleanSrc.includes("?")) {
    const [base, search] = cleanSrc.split("?");
    const params = new URLSearchParams(search);
    const queryWidth =
      params.get("w") ||
      params.get("width") ||
      params.get("maxWidth") ||
      params.get("max-w");
    if (queryWidth && !effectiveMaxWidth) {
      const lowerQuery = queryWidth.toLowerCase();
      effectiveMaxWidth = SIZE_PRESETS[lowerQuery] || (/^\d+$/.test(queryWidth) ? `${queryWidth}px` : queryWidth);
    }
    cleanSrc = base;
  }

  // Check preset string
  if (
    effectiveMaxWidth &&
    typeof effectiveMaxWidth === "string" &&
    SIZE_PRESETS[effectiveMaxWidth.toLowerCase()]
  ) {
    effectiveMaxWidth = SIZE_PRESETS[effectiveMaxWidth.toLowerCase()];
  }

  // Format parsed maxWidth
  const parsedMaxWidth = effectiveMaxWidth
    ? typeof effectiveMaxWidth === "number"
      ? `${effectiveMaxWidth}px`
      : /^\d+$/.test(effectiveMaxWidth)
      ? `${effectiveMaxWidth}px`
      : effectiveMaxWidth
    : undefined;

  const normalizedSrc =
    cleanSrc.startsWith("/") && !cleanSrc.startsWith("/docs/")
      ? `/docs${cleanSrc}`
      : cleanSrc;
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Small delay to trigger smooth transition after render
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <span
        onClick={openModal}
        style={{
          ...style,
          maxWidth: parsedMaxWidth || undefined,
        }}
        className={`group relative block my-2 ${
          parsedMaxWidth ? "" : "max-w-[800px]"
        } rounded-xl overflow-hidden border border-slate-200 dark:border-white/[0.08] shadow-sm cursor-zoom-in select-none bg-slate-50 dark:bg-white/[0.02] transition-all duration-200 hover:shadow-md hover:border-slate-300 dark:hover:border-white/[0.15] ${
          className || ""
        }`}
        title="Click to zoom in"
      >
        <Image
          src={normalizedSrc}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover block transition-transform duration-300 group-hover:scale-[1.01]"
        />

        {/* Hover zoom indicator overlay */}
        <span className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/75 text-white text-xs font-medium backdrop-blur-sm shadow-md">
            <ZoomIn className="h-3.5 w-3.5" />
            <span>Click to enlarge</span>
          </span>
        </span>
      </span>

      {/* Lightbox Modal rendered via Portal */}
      {isOpen &&
        mounted &&
        createPortal(
          <div
            onClick={closeModal}
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 cursor-zoom-out transition-all duration-200 ease-out select-none ${
              isAnimating
                ? "bg-slate-950/85 backdrop-blur-md opacity-100"
                : "bg-slate-950/0 backdrop-blur-none opacity-0"
            }`}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center justify-center p-2.5 rounded-full bg-white/10 text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all cursor-pointer shadow-lg"
              title="Close (Esc)"
              aria-label="Close enlarged image"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Enlarged Image Container */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className={`relative max-w-[94vw] max-h-[90vh] flex flex-col items-center justify-center transition-all duration-200 ease-out transform ${
                isAnimating
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-95 opacity-0 translate-y-2"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={normalizedSrc}
                alt={alt}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
              />

              {alt && alt !== "Documentation Image" && (
                <div className="mt-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-200 text-xs font-medium tracking-wide text-center backdrop-blur-sm max-w-xl truncate">
                  {alt}
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
