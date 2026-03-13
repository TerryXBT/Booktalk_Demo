# Book Talk — Office Stationery & Supplies Demo

A polished ecommerce demo for everyday office stationery and supplies, built with Next.js, Tailwind CSS, and TypeScript. All data is local mock JSON — no backend required.

---

## Quick Start

```bash
cd book-talk-demo
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, category highlights, featured products |
| Product Listing | `/products` | Full grid with category filter tabs |
| Product Detail | `/products/[id]` | Image placeholder, details, Add to Cart |
| Cart | `/cart` | Line items, quantity controls, order summary |
| Checkout | `/checkout` | Delivery form, stub payment, place order |
| Order Confirmation | `/order-confirmation` | Success, demo order number, return CTA |

---

## Folder Structure

```
book-talk-demo/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home
│   ├── layout.tsx              # Root layout (fonts, CartProvider)
│   ├── globals.css             # Design tokens, base styles
│   ├── products/
│   │   ├── page.tsx            # Product listing
│   │   └── [id]/page.tsx       # Product detail
│   ├── cart/page.tsx           # Cart
│   ├── checkout/page.tsx       # Checkout
│   └── order-confirmation/     # Order confirmation
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # primary / secondary / ghost
│   │   ├── Input.tsx           # label + error state
│   │   └── Badge.tsx           # category pill
│   ├── layout/
│   │   ├── Header.tsx          # sticky, logo, nav, cart badge
│   │   ├── Footer.tsx          # minimal footer
│   │   └── Layout.tsx          # page wrapper
│   └── ProductCard.tsx         # card with image, price, Add to Cart
├── context/
│   └── CartContext.tsx         # React Context + localStorage cart
├── data/
│   └── products.ts             # 24 mock products, category config
└── public/
    └── images/products/        # (empty — swap in real images here)
```

---

## How to Edit

### Change product data
Edit `/data/products.ts`. Each product follows this interface:
```ts
{
  id: string         // used in the URL: /products/[id]
  name: string
  category: string   // must match a key in CATEGORIES array
  price: number      // e.g. 9.99
  description: string
  image: string      // hex color (placeholder) or /images/products/filename.jpg
  featured?: boolean // shows on homepage featured row
  brand?: string
  sku?: string
  packSize?: string
  inStock?: boolean  // set false to show Out of Stock
}
```

### Swap placeholder images for real images
1. Add product images to `/public/images/products/` (e.g. `copy-paper-a4.jpg`)
2. Update the `image` field in `products.ts` to the path: `"/images/products/copy-paper-a4.jpg"`
3. Update `ProductCard.tsx` and the detail page to render `<img src={product.image} />` instead of the color div

### Change colors
Edit the `@theme inline` block in `app/globals.css`:
- `--color-bt-charcoal` — primary text and button color
- `--color-bt-warm` — warm off-white background sections
- `--color-bt-accent` — accent / muted highlights
- `--color-bt-border` — borders and dividers

### Change fonts
Fonts are loaded via Google Fonts in `globals.css`. To swap fonts, update the `@import url(...)` line and the `--font-inter` / `--font-serif` token values.

---

## Key Design Decisions

| Decision | Value |
|----------|-------|
| Brand name | **Book Talk** |
| Color palette | White + warm off-white + charcoal (Palette B) |
| Body font | Inter |
| Heading accent | Instrument Serif |
| Cart state | React Context + localStorage |
| Images | Solid color placeholders (swap to real in polish) |
| Checkout | Stub form — no payment processing |
| Order number | Client-side pseudo-generated `BT-XXXXXXXX` |

---

## v2 Ideas

- Search bar on homepage and product listing
- Real product photography
- User accounts and order history
- Wishlist / saved items
- Promo code support
- Stock level indicators
- Backend / headless CMS integration

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Data:** Local mock JSON (no database)
- **State:** React Context API + localStorage
