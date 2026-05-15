import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-[#94a3b8] py-10 px-6 lg:px-12 border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-8 gap-y-4 text-[13px] font-medium tracking-wide translate-y-1">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/product" className="hover:text-white transition-colors">
            How it Works
          </Link>
          <Link
            href="/#build-new"
            className="hover:text-white transition-colors"
          >
            Solutions
          </Link>
          <Link href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-white transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors text-gray-400"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-[12px] tracking-wide opacity-60">
          © {new Date().getFullYear()} Think4ever™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
