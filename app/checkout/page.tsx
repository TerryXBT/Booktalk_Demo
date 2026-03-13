"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

function generateOrderNumber(): string {
  return `BT-${Date.now().toString(36).toUpperCase()}`;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, totalItems, clearCart } = useCart();

  const deliveryCost = totalPrice >= 50 ? 0 : 7.95;
  const grandTotal = totalPrice + deliveryCost;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
    country: "Australia",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const orderNumber = generateOrderNumber();
    clearCart(); // Clear cart in submit handler
    router.push(`/order-confirmation?order=${orderNumber}`);
  }

  if (totalItems === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 text-center">
          <h1 className="text-2xl font-semibold text-[#2C2C2C] mb-4">Your cart is empty</h1>
          <a href="/products" className="text-sm text-[#A09080] hover:text-[#2C2C2C] underline">
            Browse Products
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10">
        <h1 className="text-3xl font-semibold text-[#2C2C2C] mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* ── Left: Delivery + Payment ─────────────────────────── */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              {/* Delivery */}
              <section>
                <h2 className="text-base font-semibold text-[#2C2C2C] mb-4 pb-3 border-b border-[#E5E0D8]">
                  Delivery Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Jane"
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Smith"
                  />
                  <div className="sm:col-span-2">
                    <Input
                      label="Company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Optional"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      label="Street Address"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      placeholder="123 Office Park Dr"
                    />
                  </div>
                  <Input
                    label="City"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Sydney"
                  />
                  <Input
                    label="Postcode"
                    name="postcode"
                    value={form.postcode}
                    onChange={handleChange}
                    required
                    placeholder="2000"
                  />
                  <div className="sm:col-span-2">
                    <Input
                      label="Country"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Payment (Stub) */}
              <section>
                <h2 className="text-base font-semibold text-[#2C2C2C] mb-1 pb-3 border-b border-[#E5E0D8]">
                  Payment Details
                </h2>
                <p className="text-xs text-[#A09080] mb-4">
                  Demo only — no real payment is processed.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-3">
                    <Input
                      label="Card Number"
                      name="cardNumber"
                      value={form.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      label="Expiry Date"
                      name="expiry"
                      value={form.expiry}
                      onChange={handleChange}
                      placeholder="MM / YY"
                      maxLength={7}
                    />
                  </div>
                  <Input
                    label="CVV"
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </section>

              <Button type="submit" size="lg" fullWidth>
                Place Order →
              </Button>
            </div>

            {/* ── Right: Order Summary ─────────────────────────────── */}
            <aside className="lg:col-span-2">
              <div className="bg-[#F7F4F0] border border-[#E5E0D8] rounded-xl p-6 sticky top-24">
                <h2 className="text-base font-semibold text-[#2C2C2C] mb-4">
                  Order Summary
                </h2>

                <ul className="divide-y divide-[#E5E0D8] mb-4">
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className="flex justify-between py-2.5 text-sm">
                      <span className="text-[#2C2C2C] truncate max-w-[65%]">
                        {product.name}
                        <span className="text-[#A09080] ml-1">× {quantity}</span>
                      </span>
                      <span className="font-medium text-[#2C2C2C] shrink-0">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#E5E0D8] pt-4 flex flex-col gap-2 text-sm">
                  <div className="flex justify-between text-[#7A7065]">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#7A7065]">
                    <span>Delivery</span>
                    <span>{deliveryCost === 0 ? "Free" : `$${deliveryCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-[#2C2C2C] text-base pt-2 border-t border-[#E5E0D8]">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </form>
      </div>
    </Layout>
  );
}
