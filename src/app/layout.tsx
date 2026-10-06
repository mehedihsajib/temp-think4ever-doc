import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DocsLayoutShell } from "@/components/layout/DocsLayoutShell";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://think4ever.com/docs"),
  title: "Think4Ever - Designer Documentation",
  description: "Official documentation for Think4Ever Platform.",
  openGraph: {
    title: "Think4Ever - Designer Documentation",
    description: "Official documentation for Think4Ever Platform.",
    url: "https://think4ever.com/docs",
    siteName: "Think4Ever Documentation",
    images: [
      {
        url: "https://think4ever.com/docs/images/og-image.jpg",
        width: 1080,
        height: 1081,
        alt: "Think4Ever Documentation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Think4Ever - Designer Documentation",
    description: "Official documentation for Think4Ever Platform.",
    images: ["https://think4ever.com/docs/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/docs/favicon.ico", sizes: "any" },
      { url: "/docs/favicon.svg", type: "image/svg+xml" },
      { url: "/docs/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/docs/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/docs/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/docs/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/docs/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <DocsLayoutShell>{children}</DocsLayoutShell>
          <Footer />
        </div>
      </body>
    </html>
  );
}
