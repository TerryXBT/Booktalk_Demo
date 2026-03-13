"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products, CATEGORIES } from "@/data/products";

const ALL_KEY = "all";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get("category") ?? ALL_KEY;
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  useEffect(() => {
    const cat = searchParams.get("category") ?? ALL_KEY;
    setActiveCategory(cat);
  }, [searchParams]);

  function handleCategoryChange(key: string) {
    setActiveCategory(key);
    const params = new URLSearchParams();
    if (key !== ALL_KEY) params.set("category", key);
    router.replace(`/products${params.toString() ? `?${params}` : ""}`, { scroll: false });
  }

  const filtered =
    activeCategory === ALL_KEY
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* ── Products Header area with soft tint ────────────────────────────── */}
      <section className="bg-[#F7F4F0] border-b border-[#E5E0D8] pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="mb-8">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A09080] mb-1">
              Catalogue
            </p>
            <h1
              className="text-4xl text-[#2C2C2C] tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              All products
            </h1>
          </div>

          {/* Elegant Filter Chips */}
          <div className="flex flex-wrap gap-2.5">
            <button
              id="filter-all"
              onClick={() => handleCategoryChange(ALL_KEY)}
              className={[
                "px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 border border-transparent",
                activeCategory === ALL_KEY
                  ? "bg-[#E8E4DD] text-[#2C2C2C] shadow-sm"
                  : "bg-transparent text-[#7A7065] hover:bg-[#E8E4DD]/50 hover:text-[#2C2C2C]",
              ].join(" ")}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                id={`filter-${cat.key}`}
                onClick={() => handleCategoryChange(cat.key)}
                className={[
                  "px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 border border-transparent",
                  activeCategory === cat.key
                    ? "bg-[#E8E4DD] text-[#2C2C2C] shadow-sm"
                    : "bg-transparent text-[#7A7065] hover:bg-[#E8E4DD]/50 hover:text-[#2C2C2C]",
                ].join(" ")}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Grid ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#A09080]">
            {filtered.length} {filtered.length === 1 ? "Item" : "Items"}
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 text-[#A09080]">
            <p className="text-2xl mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>—</p>
            <p className="text-sm font-medium">No products in this category yet.</p>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#A09080]">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
