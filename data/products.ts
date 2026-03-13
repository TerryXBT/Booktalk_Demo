export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string; // placeholder color hex or /public path
  featured?: boolean;
  brand?: string;
  sku?: string;
  packSize?: string;
  inStock?: boolean;
}

export const CATEGORIES = [
  { key: "paper-notebooks",  label: "Paper & Notebooks",  color: "#D4C9B8" },
  { key: "pens-writing",     label: "Pens & Writing",     color: "#B8C9D4" },
  { key: "folders-filing",   label: "Folders & Filing",   color: "#C9D4B8" },
  { key: "desk-accessories", label: "Desk Accessories",   color: "#D4B8C9" },
  { key: "tape-adhesives",   label: "Tape & Adhesives",   color: "#D4D0B8" },
  { key: "staplers-tools",   label: "Staplers & Tools",   color: "#B8C9C9" },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

export function getCategoryColor(key: string): string {
  return CATEGORIES.find((c) => c.key === key)?.color ?? "#E5E0D8";
}

export function getCategoryLabel(key: string): string {
  return CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

export const products: Product[] = [
  // ── Paper & Notebooks ──────────────────────────────────────────────
  {
    id: "copy-paper-a4-500",
    name: "A4 Copy Paper",
    category: "paper-notebooks",
    price: 9.99,
    description:
      "High-quality 80gsm A4 copy paper suitable for everyday office printing and copying. Jam-free performance in all printers.",
    image: "#D4C9B8",
    brand: "Reflex",
    sku: "SKU-0001",
    packSize: "Box of 500 sheets",
    inStock: true,
    featured: true,
  },
  {
    id: "spiral-notebook-a5",
    name: "Spiral Notebook A5",
    category: "paper-notebooks",
    price: 5.49,
    description:
      "Lay-flat spiral-bound notebook with 120 ruled pages. Ideal for meeting notes, daily journaling, and desk use.",
    image: "#D4C9B8",
    brand: "Mead",
    sku: "SKU-0002",
    packSize: "120 pages",
    inStock: true,
  },
  {
    id: "ruled-yellow-pad-a4",
    name: "Yellow Ruled Legal Pad",
    category: "paper-notebooks",
    price: 3.99,
    description:
      "Classic yellow legal pad with 80 ruled pages and a stiff backing for comfortable writing in any setting.",
    image: "#D4C9B8",
    brand: "Meridian",
    sku: "SKU-0003",
    packSize: "Pack of 3",
    inStock: true,
  },
  {
    id: "sticky-note-cube",
    name: "Sticky Note Cube",
    category: "paper-notebooks",
    price: 4.49,
    description:
      "Compact sticky note cube with 400 sheets per side. Strong adhesive, repositionable. Perfect for quick desk reminders.",
    image: "#D4C9B8",
    brand: "Post-it",
    sku: "SKU-0004",
    packSize: "400 sheets",
    inStock: true,
  },

  // ── Pens & Writing ─────────────────────────────────────────────────
  {
    id: "ballpoint-pen-10pk",
    name: "Ballpoint Pen 10-Pack",
    category: "pens-writing",
    price: 5.99,
    description:
      "Smooth 1.0mm ballpoint pens with comfortable grip and reliable ink flow. Available in black. Office essential.",
    image: "#B8C9D4",
    brand: "Staedtler",
    sku: "SKU-0011",
    packSize: "Pack of 10",
    inStock: true,
    featured: true,
  },
  {
    id: "pastel-highlighter-6pk",
    name: "Pastel Highlighter Set",
    category: "pens-writing",
    price: 7.49,
    description:
      "Six soft pastel highlighters in a zip case. Chisel tip for fine lines and broad strokes. Smear-resistant on most inks.",
    image: "#B8C9D4",
    brand: "Zebra",
    sku: "SKU-0012",
    packSize: "Set of 6",
    inStock: true,
  },
  {
    id: "permanent-marker-set",
    name: "Permanent Marker Set",
    category: "pens-writing",
    price: 8.99,
    description:
      "12 dual-tip permanent markers with fine and chisel ends. Water-resistant, vibrant ink suitable for paper, plastic, and card.",
    image: "#B8C9D4",
    brand: "Sharpie",
    sku: "SKU-0013",
    packSize: "Set of 12",
    inStock: true,
  },
  {
    id: "correction-tape",
    name: "Correction Tape",
    category: "pens-writing",
    price: 3.49,
    description:
      "Smooth-glide correction tape with a compact roller design. Instantly covers errors on paper — no drying time needed.",
    image: "#B8C9D4",
    brand: "Tipp-Ex",
    sku: "SKU-0014",
    packSize: "Pack of 2",
    inStock: true,
  },

  // ── Folders & Filing ───────────────────────────────────────────────
  {
    id: "ring-binder-a4-2inch",
    name: "A4 Ring Binder 2-Inch",
    category: "folders-filing",
    price: 11.99,
    description:
      "Heavy-duty A4 ring binder with a 2-inch D-ring mechanism. Holds up to 450 sheets. Rigid cover with label holder.",
    image: "#C9D4B8",
    brand: "Esselte",
    sku: "SKU-0021",
    packSize: "Single",
    inStock: true,
    featured: true,
  },
  {
    id: "document-wallet-clear-10pk",
    name: "Clear Document Wallets",
    category: "folders-filing",
    price: 6.99,
    description:
      "Durable clear A4 document wallets with press-stud closure. Protects documents from dust and moisture.",
    image: "#C9D4B8",
    brand: "Marbig",
    sku: "SKU-0022",
    packSize: "Pack of 10",
    inStock: true,
  },
  {
    id: "hanging-file-folder-set",
    name: "Hanging File Folder Set",
    category: "folders-filing",
    price: 13.49,
    description:
      "Set of 25 letter-size hanging file folders with adjustable tabs and labels included. Fits standard filing cabinets.",
    image: "#C9D4B8",
    brand: "Pendaflex",
    sku: "SKU-0023",
    packSize: "Set of 25",
    inStock: true,
  },
  {
    id: "tab-dividers-10pk",
    name: "Index Tab Dividers",
    category: "folders-filing",
    price: 2.99,
    description:
      "A4 dividers with 10 numbered tabs and printable label inserts. Reinforced edges resist tearing with regular use.",
    image: "#C9D4B8",
    brand: "Avery",
    sku: "SKU-0024",
    packSize: "Pack of 10 tabs",
    inStock: true,
  },

  // ── Desk Accessories ───────────────────────────────────────────────
  {
    id: "mesh-pen-cup",
    name: "Mesh Pen Cup",
    category: "desk-accessories",
    price: 8.99,
    description:
      "Sturdy steel mesh pen and pencil cup for a tidy desk. Open-top design allows quick access to your most-used writing tools.",
    image: "#D4B8C9",
    brand: "Fellowes",
    sku: "SKU-0031",
    inStock: true,
    featured: true,
  },
  {
    id: "3-tier-desktop-tray",
    name: "3-Tier Desktop Document Tray",
    category: "desk-accessories",
    price: 24.99,
    description:
      "Three-level stackable document tray set in a sleek charcoal finish. Keeps paperwork organised and within easy reach.",
    image: "#D4B8C9",
    brand: "Fellowes",
    sku: "SKU-0032",
    inStock: true,
  },
  {
    id: "monitor-riser",
    name: "Adjustable Monitor Riser",
    category: "desk-accessories",
    price: 49.99,
    description:
      "Bamboo and steel monitor stand with adjustable height settings. Includes a pull-out drawer for keyboard and mouse storage.",
    image: "#D4B8C9",
    brand: "Ergoflex",
    sku: "SKU-0033",
    inStock: true,
  },
  {
    id: "cable-management-clips",
    name: "Cable Management Clip Set",
    category: "desk-accessories",
    price: 5.99,
    description:
      "Self-adhesive cable management clips to keep desk cables tidy and off the floor. Holds up to 3 cables per clip.",
    image: "#D4B8C9",
    brand: "Allocacoc",
    sku: "SKU-0034",
    packSize: "Pack of 20",
    inStock: true,
  },

  // ── Tape & Adhesives ───────────────────────────────────────────────
  {
    id: "clear-scotch-tape-3pk",
    name: "Clear Scotch Tape 3-Pack",
    category: "tape-adhesives",
    price: 4.99,
    description:
      "Crystal-clear adhesive tape on a compact dispenser-ready roll. Invisible on paper — ideal for wrapping, sealing, and everyday repairs.",
    image: "#D4D0B8",
    brand: "Scotch",
    sku: "SKU-0041",
    packSize: "3 × 33m rolls",
    inStock: true,
    featured: true,
  },
  {
    id: "double-sided-tape",
    name: "Double-Sided Tape",
    category: "tape-adhesives",
    price: 3.99,
    description:
      "Strong double-sided adhesive tape for mounting, crafting, and document binding. Clean removal from most surfaces.",
    image: "#D4D0B8",
    brand: "Scotch",
    sku: "SKU-0042",
    packSize: "2 × 15m rolls",
    inStock: true,
  },
  {
    id: "glue-stick-6pk",
    name: "Glue Stick 6-Pack",
    category: "tape-adhesives",
    price: 5.49,
    description:
      "Non-toxic, washable glue sticks suitable for paper, card, and fabric. Smooth, consistent application with a twist-up barrel.",
    image: "#D4D0B8",
    brand: "Pritt",
    sku: "SKU-0043",
    packSize: "Pack of 6 × 21g",
    inStock: true,
  },
  {
    id: "adhesive-dots-roll",
    name: "Adhesive Dots Roll",
    category: "tape-adhesives",
    price: 2.99,
    description:
      "Pre-cut adhesive dots on a roll — permanent bond, no mess. Ideal for card making, labelling, and photo mounting.",
    image: "#D4D0B8",
    brand: "Avery",
    sku: "SKU-0044",
    packSize: "Roll of 500 dots",
    inStock: true,
  },

  // ── Staplers & Tools ───────────────────────────────────────────────
  {
    id: "compact-stapler-kit",
    name: "Compact Stapler + Staples Kit",
    category: "staplers-tools",
    price: 12.99,
    description:
      "Ergonomic compact stapler with jam-resistant mechanism. Includes 1,000 standard staples. Staples up to 20 sheets.",
    image: "#B8C9C9",
    brand: "Swingline",
    sku: "SKU-0051",
    packSize: "Stapler + 1000 staples",
    inStock: true,
    featured: true,
  },
  {
    id: "heavy-duty-hole-punch",
    name: "Heavy-Duty Hole Punch",
    category: "staplers-tools",
    price: 19.99,
    description:
      "Two-hole punch with a capacity of up to 30 sheets. Integrated ruler guide and chip tray for clean, accurate punching.",
    image: "#B8C9C9",
    brand: "Leitz",
    sku: "SKU-0052",
    inStock: true,
  },
  {
    id: "stainless-scissors",
    name: "Stainless Steel Scissors 21cm",
    category: "staplers-tools",
    price: 8.49,
    description:
      "Sharp, durable 21cm scissors with offset handles for comfortable cutting. Suitable for paper, card, and light packaging.",
    image: "#B8C9C9",
    brand: "Fiskars",
    sku: "SKU-0053",
    inStock: true,
  },
  {
    id: "30cm-ruler",
    name: "30cm Clear Ruler",
    category: "staplers-tools",
    price: 1.99,
    description:
      "Shatterproof 30cm transparent ruler with mm and cm markings. Anti-slip edge for precise, clean lines every time.",
    image: "#B8C9C9",
    brand: "Staedtler",
    sku: "SKU-0054",
    inStock: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
