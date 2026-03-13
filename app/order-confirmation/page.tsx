"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") ?? "BT-DEMO";

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-24 flex flex-col items-center text-center gap-6">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-[#F7F4F0] border-2 border-[#E5E0D8] rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#2C2C2C"
            strokeWidth={1.75}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <div>
          <h1
            className="text-4xl text-[#2C2C2C] mb-2"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Order Confirmed
          </h1>
          <p className="text-sm text-[#7A7065]">
            Thank you for your order. Your stationery is on its way!
          </p>
        </div>

        {/* Order Number */}
        <div className="bg-[#F7F4F0] border border-[#E5E0D8] rounded-xl px-6 py-4 w-full max-w-xs">
          <p className="text-xs text-[#A09080] mb-1 uppercase tracking-wider font-medium">Order Number</p>
          <p className="text-lg font-semibold text-[#2C2C2C] tracking-wide font-mono">
            {orderNumber}
          </p>
          <p className="text-xs text-[#A09080] mt-1">
            Generated for demo purposes only
          </p>
        </div>

        {/* Info Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-sm text-[#7A7065] border-t border-[#E5E0D8] pt-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-lg">📧</span>
            <span className="font-medium text-[#2C2C2C] text-xs">Confirmation Email</span>
            <span className="text-xs">Sent to your inbox</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-lg">📦</span>
            <span className="font-medium text-[#2C2C2C] text-xs">Processing</span>
            <span className="text-xs">1–2 business days</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-lg">🚚</span>
            <span className="font-medium text-[#2C2C2C] text-xs">Dispatch</span>
            <span className="text-xs">3–5 business days</span>
          </div>
        </div>

        <Link href="/products" className="mt-2">
          <Button variant="primary" size="lg">
            Continue Shopping
          </Button>
        </Link>

        <Link
          href="/products"
          className="text-sm text-[#A09080] hover:text-[#2C2C2C] transition-colors"
        >
          ← Back to Products
        </Link>
      </div>
    </Layout>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#A09080]">Loading...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
