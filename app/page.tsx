import React from "react";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { featuredProducts, CATEGORIES } from "@/data/products";

/* ─────────────────────────────────────────────────────────────────────────────
   Inline SVG stationery illustration — editorial, palette-matched, no emoji
───────────────────────────────────────────────────────────────────────────── */
function StationeryIllustration() {
  return (
    <svg
      viewBox="0 0 480 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* ── Notebook (back) ─────────────────────────────────────────── */}
      <rect x="90" y="80" width="200" height="280" rx="10" fill="#D4CFC8" />
      <rect x="90" y="80" width="22" height="280" rx="4" fill="#B8B2AA" />
      {/* ruled lines */}
      {[140, 160, 180, 200, 220, 240, 260, 280, 300, 320].map((y) => (
        <line key={y} x1="124" y1={y} x2="278" y2={y} stroke="#C4BEB6" strokeWidth="1" />
      ))}

      {/* ── Notebook (front, angled) ─────────────────────────────────── */}
      <g transform="rotate(-8, 300, 250)">
        <rect x="190" y="100" width="200" height="280" rx="10" fill="#E8E2D8" />
        <rect x="190" y="100" width="22" height="280" rx="4" fill="#D0C9BE" />
        {/* cover — embossed label */}
        <rect x="220" y="160" width="130" height="60" rx="6" fill="#DDD7CE" />
        <rect x="232" y="172" width="106" height="2" rx="1" fill="#C8C2B8" />
        <rect x="232" y="182" width="80" height="2" rx="1" fill="#C8C2B8" />
        <rect x="232" y="192" width="95" height="2" rx="1" fill="#C8C2B8" />
      </g>

      {/* ── Pen ─────────────────────────────────────────────────────── */}
      <g transform="rotate(18, 260, 360)">
        <rect x="210" y="320" width="10" height="180" rx="5" fill="#A09080" />
        <rect x="212" y="316" width="6" height="20" rx="3" fill="#8A7A6A" />
        {/* clip */}
        <rect x="218" y="325" width="3" height="80" rx="1.5" fill="#8A7A6A" />
        {/* nib */}
        <polygon points="210,500 220,500 215,516" fill="#8A7A6A" />
      </g>

      {/* ── Second pen ───────────────────────────────────────────────── */}
      <g transform="rotate(10, 140, 380)">
        <rect x="110" y="340" width="9" height="160" rx="4.5" fill="#C4B9AE" />
        <rect x="112" y="337" width="5" height="16" rx="2.5" fill="#B0A498" />
        <polygon points="110,500 119,500 114.5,514" fill="#B0A498" />
      </g>

      {/* ── Paper stack ─────────────────────────────────────────────── */}
      <rect x="60" y="390" width="300" height="6" rx="3" fill="#EAE6E0" />
      <rect x="64" y="384" width="296" height="6" rx="3" fill="#E0DCD6" />
      <rect x="68" y="378" width="292" height="6" rx="3" fill="#D6D2CC" />

      {/* ── Small sticky note ─────────────────────────────────────────── */}
      <g transform="rotate(-6, 340, 200)">
        <rect x="310" y="180" width="90" height="90" rx="4" fill="#E8DFD0" />
        <line x1="326" y1="208" x2="386" y2="208" stroke="#D4C9B8" strokeWidth="1.5" />
        <line x1="326" y1="222" x2="375" y2="222" stroke="#D4C9B8" strokeWidth="1.5" />
        <line x1="326" y1="236" x2="380" y2="236" stroke="#D4C9B8" strokeWidth="1.5" />
        {/* dog-ear */}
        <polygon points="400,180 400,204 376,180" fill="#D4C9B8" />
      </g>

      {/* ── Paperclip ────────────────────────────────────────────────── */}
      <g transform="translate(310, 310) rotate(-20)">
        <path
          d="M0,0 C0,-14 20,-14 20,0 L20,40 C20,58 -4,58 -4,40 L-4,10 C-4,-4 16,-4 16,10 L16,38"
          stroke="#B8B2AA"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* ── Subtle dot-grid background ────────────────────────────────── */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={40 + col * 70}
            cy={50 + row * 70}
            r="1.5"
            fill="#C8C2BA"
            opacity="0.4"
          />
        ))
      )}
    </svg>
  );
}

export default function HomePage() {
  // Show max 6 featured products
  const displayedFeatured = featuredProducts.slice(0, 6);

  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F4F0] border-b border-[#E5E0D8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[540px]">
            {/* Left — Editorial copy */}
            <div className="flex flex-col items-start gap-6 py-20 lg:py-24 lg:pr-12">
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#A09080]">
                Office Stationery &amp; Supplies
              </p>
              <h1
                className="text-5xl sm:text-6xl text-[#2C2C2C] leading-[1.08] tracking-tight"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Everything your
                <br />
                <em>workspace</em> needs.
              </h1>
              <p className="text-[15px] text-[#7A7065] max-w-sm leading-relaxed">
                From premium writing tools to organised filing solutions — curated
                stationery for the modern office.
              </p>
              <div className="flex items-center gap-4 mt-1">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center font-medium rounded-full px-7 py-3 text-sm tracking-wide bg-[#3D3530] !text-white hover:bg-[#2C2825] transition-colors duration-150"
                >
                  Shop Now
                </Link>
                <Link
                  href="/products"
                  className="text-sm font-medium text-[#7A7065] hover:text-[#2C2C2C] transition-colors underline underline-offset-4 decoration-[#D4CFC8]"
                >
                  Browse categories
                </Link>
              </div>
            </div>

            {/* Right — Stationery illustration */}
            <div className="hidden lg:flex items-center justify-center h-full py-12 opacity-90">
              <div className="w-[360px] h-[440px]">
                <StationeryIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A09080] mb-1">
              Shop by type
            </p>
            <h2
              className="text-2xl text-[#2C2C2C]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Browse categories
            </h2>
          </div>
          <Link
            href="/products"
            className="text-[12px] font-medium text-[#A09080] hover:text-[#2C2C2C] transition-colors tracking-wide"
          >
            All products &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={`/products?category=${cat.key}`}
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-[#E5E0D8] hover:border-[#C8C2BA] hover:shadow-[0_4px_16px_rgba(44,44,44,0.08)] transition-all duration-200"
              style={{ backgroundColor: cat.color }}
            >
              {/* Aspect ratio spacer */}
              <div className="aspect-[3/4]" />

              {/* Label overlay */}
              <div className="absolute inset-x-0 bottom-0 px-3.5 pb-3.5 pt-8 bg-gradient-to-t from-black/10 to-transparent">
                <p
                  className="text-[12px] font-semibold text-[#2C2C2C] leading-tight"
                >
                  {cat.label}
                </p>
                <p className="text-[10px] font-medium text-[#2C2C2C]/60 mt-0.5 group-hover:text-[#2C2C2C]/80 transition-colors">
                  Shop &rarr;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────────────────────────── */}
      <section className="border-t border-[#E5E0D8] bg-[#F7F4F0] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A09080] mb-1">
                Handpicked
              </p>
              <h2
                className="text-2xl text-[#2C2C2C]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Featured products
              </h2>
            </div>
            <Link
              href="/products"
              className="text-[12px] font-medium text-[#A09080] hover:text-[#2C2C2C] transition-colors tracking-wide"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedFeatured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Values strip ─────────────────────────────────────────────────── */}
      <section className="border-t border-[#E5E0D8] py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D8]">
          {[
            {
              label: "Delivery",
              heading: "Free on orders over $50",
              body: "Fast, tracked dispatch on all standard orders.",
            },
            {
              label: "Quality",
              heading: "Trusted office brands",
              body: "Every product curated for the modern workplace.",
            },
            {
              label: "Returns",
              heading: "30-day return policy",
              body: "Simple, no-hassle returns on all items.",
            },
          ].map(({ label, heading, body }) => (
            <div key={label} className="px-8 py-6 first:pl-0 last:pr-0 sm:first:pl-0 sm:last:pr-0">
              <p className="text-[9px] font-semibold tracking-[0.22em] uppercase text-[#A09080] mb-2">
                {label}
              </p>
              <p className="text-sm font-semibold text-[#2C2C2C] mb-1">{heading}</p>
              <p className="text-xs text-[#7A7065] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
