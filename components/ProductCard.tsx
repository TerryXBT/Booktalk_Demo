"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CATEGORIES, type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

/* ── SVG Placeholders by Category ────────────────────────────────────────── */
function CategorySilhouette({ categoryKey }: { categoryKey: string }) {
  const className = "w-16 h-16 text-[#A09080] opacity-25 transition-transform duration-500 ease-out group-hover:scale-110";
  
  switch (categoryKey) {
    case "pens-writing":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.89 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.89l12.675-12.675z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125L16.875 4.5" />
        </svg>
      );
    case "paper-notebooks":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      );
    case "folders-filing":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
      );
    case "desk-accessories":
    case "tape-adhesives":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
        </svg>
      );
    case "staplers-tools":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      );
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  
  // Find current quantity in cart for this specific product
  const cartItem = items.find((i) => i.product.id === product.id);
  const currentQuantity = cartItem ? cartItem.quantity : 0;

  // Category styling
  const categoryConfig = CATEGORIES.find(c => c.key === product.category);
  const categoryColor = categoryConfig?.color || "#E5E0D8";
  const bgColor = product.image.startsWith("#") ? product.image : "#F7F4F0";

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    addItem(product);
  }

  function handleIncrement(e: React.MouseEvent) {
    e.preventDefault();
    updateQuantity(product.id, currentQuantity + 1);
  }

  function handleDecrement(e: React.MouseEvent) {
    e.preventDefault();
    updateQuantity(product.id, currentQuantity - 1);
  }

  return (
    <div 
      className="group flex flex-col bg-white border border-[#E5E0D8] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(44,44,44,0.06)] hover:border-[#C8C2BA]"
      style={{ borderTopWidth: '2.5px', borderTopColor: categoryColor }}
    >
      {/* ── Image Area ────────────────────────────────────────────────────── */}
      <Link href={`/products/${product.id}`} className="block relative overflow-hidden bg-white">
        <div
          className="w-full aspect-square flex flex-col items-center justify-center relative p-6 transition-colors duration-500 group-hover:bg-opacity-80"
          style={{ backgroundColor: bgColor }}
        >
          {/* Minimal line-art placeholder */}
          <CategorySilhouette categoryKey={product.category} />
          
          {/* Subdued original typographic brand/name treatment behind */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 pointer-events-none mix-blend-multiply">
            {product.brand && (
              <span className="mb-2 text-[8px] tracking-[0.25em] uppercase font-bold text-[#A09080]">
                {product.brand}
              </span>
            )}
            <span
              className="px-6 text-center leading-tight text-[#A09080]"
              style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.5rem" }}
            >
              {product.name}
            </span>
          </div>
        </div>
      </Link>

      {/* ── Details Area ──────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-4 gap-1.5 relative bg-white">
        {/* Category label */}
        <p className="text-[9px] tracking-[0.15em] uppercase text-[#A09080] font-semibold">
          {product.category.replace(/-/g, " ")}
        </p>

        {/* Product name */}
        <Link href={`/products/${product.id}`} className="mt-0.5 mb-1">
          <h3 className="text-[13px] font-semibold text-[#2C2C2C] leading-snug group-hover:text-[#5C544D] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Pack size */}
        {product.packSize && (
          <p className="text-[11px] text-[#A09080]">{product.packSize}</p>
        )}

        {/* Price + Inline Cart Control */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#F0EDE9]/60">
          <span className="font-semibold text-[#2C2C2C] text-sm tracking-tight">
            ${product.price.toFixed(2)}
          </span>

          {product.inStock === false ? (
            <span className="text-[11px] text-[#A09080] font-medium">Out of stock</span>
          ) : currentQuantity > 0 ? (
            /* Inline Stepper */
            <div className="flex items-center gap-3 bg-[#F7F4F0] border border-[#E5E0D8] rounded-full px-1.5 py-1">
              <button 
                onClick={handleDecrement}
                className="w-5 h-5 flex items-center justify-center text-[#7A7065] hover:text-[#2C2C2C] hover:bg-white rounded-full transition-colors"
                aria-label="Decrease quantity"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14" />
                </svg>
              </button>
              
              <span className="text-[11px] font-semibold text-[#2C2C2C] min-w-[12px] text-center select-none">
                {currentQuantity}
              </span>
              
              <button 
                onClick={handleIncrement}
                className="w-5 h-5 flex items-center justify-center text-[#7A7065] hover:text-[#2C2C2C] hover:bg-white rounded-full transition-colors"
                aria-label="Increase quantity"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          ) : (
            /* Standard Soft Add to Cart Button */
            <button
              onClick={handleAdd}
              className="inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 text-[11px] tracking-wide bg-[#5C544D] !text-white hover:bg-[#463F3A] active:scale-95 px-3.5 py-1.5 shadow-sm"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
