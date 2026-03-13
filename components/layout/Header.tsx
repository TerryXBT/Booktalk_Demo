"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[1.35rem] tracking-normal text-[#2C2C2C] hover:opacity-70 transition-opacity shrink-0 leading-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Book Talk
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-7 text-[13px] font-medium text-[#7A7065] tracking-wide">
          <Link href="/" className="hover:text-[#2C2C2C] transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-[#2C2C2C] transition-colors">
            Products
          </Link>
        </nav>

        {/* Cart */}
        <Link
          href="/cart"
          className="relative flex items-center gap-2 text-[13px] font-medium text-[#7A7065] hover:text-[#2C2C2C] transition-colors"
          aria-label="Shopping cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="hidden sm:inline">Cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-2 sm:-right-5 min-w-[17px] h-[17px] flex items-center justify-center bg-[#3D3530] text-white text-[9px] font-semibold rounded-full px-1 leading-none">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
