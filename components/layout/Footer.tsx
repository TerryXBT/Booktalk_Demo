import React from "react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E0D8] bg-[#F7F4F0] mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-[#7A7065]">
        {/* Brand */}
        <div>
          <span
            className="text-base text-[#2C2C2C]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Book Talk
          </span>
          <span className="ml-2 text-xs text-[#A09080]">
            Office Stationery & Supplies
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-5">
          <Link href="/" className="hover:text-[#2C2C2C] transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-[#2C2C2C] transition-colors">
            Products
          </Link>
          <Link href="/cart" className="hover:text-[#2C2C2C] transition-colors">
            Cart
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-[#A09080]">
          &copy; {year} Book Talk. Demo only.
        </p>
      </div>
    </footer>
  );
}
