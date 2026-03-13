"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useCart } from "@/context/CartContext";
import { products, getCategoryColor, type Product } from "@/data/products";
import { use } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

function ProductDetailContent({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const color = getCategoryColor(product.category);
  const isOutOfStock = product.inStock === false;

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#A09080] mb-8">
          <Link href="/" className="hover:text-[#2C2C2C] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#2C2C2C] transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#2C2C2C]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Product Image Placeholder */}
          <div
            className="w-full aspect-square rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <span
              className="text-8xl font-semibold opacity-20 select-none text-[#2C2C2C]"
            >
              {product.name.charAt(0)}
            </span>
          </div>

          {/* Right — Product Details */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Badge category={product.category} />
              {isOutOfStock && (
                <span className="text-xs font-semibold text-red-500 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                  Out of Stock
                </span>
              )}
            </div>

            <h1 className="text-3xl font-semibold text-[#2C2C2C] leading-tight">
              {product.name}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-[#A09080]">
              {product.brand && <span>Brand: <span className="text-[#2C2C2C]">{product.brand}</span></span>}
              {product.sku && <span>SKU: <span className="text-[#2C2C2C]">{product.sku}</span></span>}
              {product.packSize && <span>Pack: <span className="text-[#2C2C2C]">{product.packSize}</span></span>}
            </div>

            {/* Price */}
            <p className="text-4xl font-semibold text-[#2C2C2C]">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="text-sm text-[#7A7065] leading-relaxed border-t border-[#E5E0D8] pt-5">
              {product.description}
            </p>

            {/* Quantity + Add to Cart */}
            {!isOutOfStock && (
              <div className="flex items-center gap-4 border-t border-[#E5E0D8] pt-5">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#E5E0D8] rounded overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-[#2C2C2C] hover:bg-[#F7F4F0] transition-colors text-lg"
                    aria-label="Decrease quantity"
                  >
                    –
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-[#2C2C2C]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-[#2C2C2C] hover:bg-[#F7F4F0] transition-colors text-lg"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  {added ? "✓ Added to Cart" : "Add to Cart"}
                </Button>
              </div>
            )}

            {/* Shipping & Returns Note */}
            <div className="text-xs text-[#A09080] bg-[#F7F4F0] border border-[#E5E0D8] rounded-lg px-4 py-3 mt-1">
              📦 &nbsp;Free delivery on orders over $50. Returns accepted within 30 days.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  if (!product) notFound();
  return <ProductDetailContent product={product} />;
}
