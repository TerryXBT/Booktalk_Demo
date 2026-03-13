"use client";

import React from "react";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { getCategoryColor } from "@/data/products";

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();

  if (totalItems === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 flex flex-col items-center gap-6 text-center">
          <div className="w-16 h-16 bg-[#F7F4F0] border border-[#E5E0D8] rounded-full flex items-center justify-center text-2xl">
            🛒
          </div>
          <h1 className="text-2xl font-semibold text-[#2C2C2C]">Your cart is empty</h1>
          <p className="text-sm text-[#7A7065] max-w-xs">
            You haven&apos;t added anything yet. Browse our range of office stationery to get started.
          </p>
          <Link href="/products">
            <Button size="lg">Browse Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
        <h1 className="text-3xl font-semibold text-[#2C2C2C] mb-8">
          Shopping Cart
          <span className="ml-3 text-base font-normal text-[#A09080]">
            ({totalItems} {totalItems === 1 ? "item" : "items"})
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Line Items */}
          <div className="lg:col-span-2 flex flex-col divide-y divide-[#E5E0D8]">
            {items.map(({ product, quantity }) => {
              const color = getCategoryColor(product.category);
              return (
                <div key={product.id} className="flex gap-5 py-5">
                  {/* Thumbnail */}
                  <Link href={`/products/${product.id}`}>
                    <div
                      className="w-20 h-20 rounded-lg shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: color }}
                    >
                      <span className="text-2xl font-bold opacity-25 text-[#2C2C2C]">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex flex-col flex-1 min-w-0 gap-1">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-sm font-semibold text-[#2C2C2C] truncate hover:text-[#A09080] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    {product.packSize && (
                      <p className="text-xs text-[#A09080]">{product.packSize}</p>
                    )}
                    <p className="text-xs text-[#A09080]">{product.brand}</p>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#E5E0D8] rounded overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#2C2C2C] hover:bg-[#F7F4F0] transition-colors text-base"
                          aria-label="Decrease quantity"
                        >
                          –
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-[#2C2C2C]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#2C2C2C] hover:bg-[#F7F4F0] transition-colors text-base"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Price + Remove */}
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-[#2C2C2C]">
                          ${(product.price * quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-xs text-[#A09080] hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#F7F4F0] border border-[#E5E0D8] rounded-xl p-6 sticky top-24 flex flex-col gap-4">
              <h2 className="text-base font-semibold text-[#2C2C2C]">Order Summary</h2>

              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between text-[#7A7065]">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#7A7065]">
                  <span>Delivery</span>
                  <span>{totalPrice >= 50 ? "Free" : "$7.95"}</span>
                </div>
                <div className="border-t border-[#E5E0D8] pt-3 flex justify-between font-semibold text-[#2C2C2C]">
                  <span>Total</span>
                  <span>
                    ${(totalPrice + (totalPrice >= 50 ? 0 : 7.95)).toFixed(2)}
                  </span>
                </div>
              </div>

              {totalPrice < 50 && (
                <p className="text-xs text-[#A09080] bg-white border border-[#E5E0D8] rounded-lg px-3 py-2">
                  Add ${(50 - totalPrice).toFixed(2)} more for free delivery.
                </p>
              )}

              <Link href="/checkout">
                <Button fullWidth size="lg">
                  Proceed to Checkout →
                </Button>
              </Link>

              <Link href="/products" className="text-center text-sm text-[#A09080] hover:text-[#2C2C2C] transition-colors">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
