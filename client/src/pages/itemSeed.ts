// src/data/itemsSeed.ts
export type Item = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  inStock: boolean;
  rating: number;
};

export const itemsSeed: Item[] = [
  {
    _id: "it-001",
    title: "Wireless Noise-Canceling Headphones",
    description: "Over-ear Bluetooth headphones with active noise cancellation and 30h battery.",
    price: 189.99,
    category: "Electronics",
    imageUrl: "https://picsum.photos/id/10/800/600",
    inStock: true,
    rating: 4.6
  },
  {
    _id: "it-002",
    title: "Smart LED Desk Lamp",
    description: "Adjustable color temperature with USB charging port and memory function.",
    price: 39.95,
    category: "Home & Kitchen",
    imageUrl: "https://picsum.photos/id/12/800/600",
    inStock: true,
    rating: 4.3
  },
  {
    _id: "it-003",
    title: "Insulated Stainless Steel Water Bottle",
    description: "Keeps drinks cold for 24h or hot for 12h. BPA-free, leak-proof lid.",
    price: 24.5,
    category: "Outdoors",
    imageUrl: "https://picsum.photos/id/14/800/600",
    inStock: true,
    rating: 4.8
  },
  {
    _id: "it-004",
    title: "Minimalist Analog Watch",
    description: "Slim stainless steel case with leather band. Water resistant 3ATM.",
    price: 74.0,
    category: "Fashion",
    imageUrl: "https://picsum.photos/id/16/800/600",
    inStock: true,
    rating: 4.2
  },
  {
    _id: "it-005",
    title: "Ergonomic Office Chair",
    description: "Lumbar support, breathable mesh back, adjustable height and tilt.",
    price: 229.0,
    category: "Office",
    imageUrl: "https://picsum.photos/id/18/800/600",
    inStock: true,
    rating: 4.5
  },
  {
    _id: "it-006",
    title: "Cast Iron Skillet 12-inch",
    description: "Pre-seasoned skillet perfect for searing, sautéing, baking, and frying.",
    price: 36.99,
    category: "Home & Kitchen",
    imageUrl: "https://picsum.photos/id/20/800/600",
    inStock: true,
    rating: 4.7
  },
  {
    _id: "it-007",
    title: "Bluetooth Portable Speaker",
    description: "IPX7 waterproof, rich bass, 12-hour playtime, USB-C charging.",
    price: 59.99,
    category: "Electronics",
    imageUrl: "https://picsum.photos/id/22/800/600",
    inStock: true,
    rating: 4.4
  },
  {
    _id: "it-008",
    title: "Trail Running Shoes",
    description: "Lightweight with aggressive lugs for gripping technical terrain.",
    price: 99.0,
    category: "Sports",
    imageUrl: "https://picsum.photos/id/24/800/600",
    inStock: true,
    rating: 4.1
  },
  {
    _id: "it-009",
    title: "Hardcover Notebook (A5)",
    description: "Dot grid, 160gsm no-bleed pages, lay-flat binding, elastic closure.",
    price: 17.25,
    category: "Office",
    imageUrl: "https://picsum.photos/id/29/800/600",
    inStock: true,
    rating: 4.9
  },
  {
    _id: "it-010",
    title: "Organic Arabica Coffee Beans",
    description: "Medium roast with notes of caramel and citrus. 1 lb whole beans.",
    price: 14.99,
    category: "Grocery",
    imageUrl: "https://picsum.photos/id/34/800/600",
    inStock: true,
    rating: 4.0
  },
  {
    _id: "it-011",
    title: "E-reader with Front Light",
    description: "Glare-free 6-inch display, adjustable warm light, weeks-long battery.",
    price: 119.0,
    category: "Electronics",
    imageUrl: "https://picsum.photos/id/37/800/600",
    inStock: true,
    rating: 4.6
  },
  {
    _id: "it-012",
    title: "Nonstick Baking Sheet Set",
    description: "Heavy-gauge steel for even heating. Set of 2 with easy-release coating.",
    price: 21.5,
    category: "Home & Kitchen",
    imageUrl: "https://picsum.photos/id/41/800/600",
    inStock: true,
    rating: 4.3
  },
  {
    _id: "it-013",
    title: "Compact Mirrorless Camera",
    description: "24MP APS-C sensor, 4K video, flip screen, and fast autofocus.",
    price: 649.0,
    category: "Electronics",
    imageUrl: "https://picsum.photos/id/45/800/600",
    inStock: false,
    rating: 4.5
  },
  {
    _id: "it-014",
    title: "Yoga Mat (5mm)",
    description: "Non-slip texture, cushioned support, comes with carrying strap.",
    price: 28.0,
    category: "Sports",
    imageUrl: "https://picsum.photos/id/52/800/600",
    inStock: true,
    rating: 4.2
  },
  {
    _id: "it-015",
    title: "Classic Denim Jacket",
    description: "Timeless medium-wash denim with a comfortable relaxed fit.",
    price: 64.99,
    category: "Fashion",
    imageUrl: "https://picsum.photos/id/55/800/600",
    inStock: true,
    rating: 4.1
  },
  {
    _id: "it-016",
    title: "Fantasy Novel: The Crystal Spire",
    description: "An epic adventure through ancient ruins and arcane mysteries.",
    price: 12.5,
    category: "Books",
    imageUrl: "https://picsum.photos/id/61/800/600",
    inStock: true,
    rating: 4.4
  },
  {
    _id: "it-017",
    title: "STEM Building Blocks Kit",
    description: "Creative engineering kit for kids ages 7+, 120 pieces and guidebook.",
    price: 26.0,
    category: "Toys",
    imageUrl: "https://picsum.photos/id/66/800/600",
    inStock: true,
    rating: 4.7
  },
  {
    _id: "it-018",
    title: "Vitamin C Serum",
    description: "Brightening facial serum with hyaluronic acid, 30ml dropper bottle.",
    price: 18.99,
    category: "Beauty",
    imageUrl: "https://picsum.photos/id/72/800/600",
    inStock: true,
    rating: 4.3
  },
  {
    _id: "it-019",
    title: "Camping Hammock with Straps",
    description: "Lightweight, quick-dry nylon, supports up to 400 lbs, easy setup.",
    price: 32.0,
    category: "Outdoors",
    imageUrl: "https://picsum.photos/id/77/800/600",
    inStock: true,
    rating: 4.6
  },
  {
    _id: "it-020",
    title: "Cookbook: Everyday Mediterranean",
    description: "120 simple recipes focused on fresh, healthy ingredients.",
    price: 22.0,
    category: "Books",
    imageUrl: "https://picsum.photos/id/82/800/600",
    inStock: true,
    rating: 4.5
  },

  // Added items (it-021 to it-030)
  {
    _id: "it-021",
    title: "Smart Plug (2-Pack)",
    description: "Wi‑Fi smart plugs compatible with Alexa and Google Assistant, energy monitoring.",
    price: 24.99,
    category: "Smart Home",
    imageUrl: "https://picsum.photos/id/88/800/600",
    inStock: true,
    rating: 4.4
  },
  {
    _id: "it-022",
    title: "Electric Kettle with Temperature Control",
    description: "Gooseneck stainless steel kettle, 900W, 5 presets for coffee and tea.",
    price: 49.0,
    category: "Home & Kitchen",
    imageUrl: "https://picsum.photos/id/90/800/600",
    inStock: true,
    rating: 4.6
  },
  {
    _id: "it-023",
    title: "Mechanical Gaming Keyboard",
    description: "Hot-swappable switches, RGB backlight, compact 75% layout, USB‑C.",
    price: 79.99,
    category: "Electronics",
    imageUrl: "https://picsum.photos/id/92/800/600",
    inStock: true,
    rating: 4.5
  },
  {
    _id: "it-024",
    title: "Cordless Drill/Driver Kit",
    description: "20V lithium-ion drill with 2 batteries, fast charger, and 30-piece bit set.",
    price: 89.0,
    category: "Tools",
    imageUrl: "https://picsum.photos/id/95/800/600",
    inStock: true,
    rating: 4.4
  },
  {
    _id: "it-025",
    title: "Indoor Herb Garden Starter Kit",
    description: "Basil, cilantro, parsley seeds with biodegradable pots and soil disks.",
    price: 21.99,
    category: "Gardening",
    imageUrl: "https://picsum.photos/id/96/800/600",
    inStock: true,
    rating: 4.2
  },
  {
    _id: "it-026",
    title: "Dash Cam 1080p",
    description: "Wide-angle lens, G-sensor, loop recording, night vision, 32GB card included.",
    price: 59.0,
    category: "Automotive",
    imageUrl: "https://picsum.photos/id/98/800/600",
    inStock: false,
    rating: 4.3
  },
  {
    _id: "it-027",
    title: "Acoustic Guitar Bundle",
    description: "Full-size dreadnought, gig bag, tuner, picks, strap, and extra strings.",
    price: 139.0,
    category: "Music",
    imageUrl: "https://picsum.photos/id/101/800/600",
    inStock: true,
    rating: 4.1
  },
  {
    _id: "it-028",
    title: "Adjustable Dumbbell Set (25 lb)",
    description: "Space-saving weights for quick at-home workouts with secure locking dial.",
    price: 119.0,
    category: "Sports",
    imageUrl: "https://picsum.photos/id/103/800/600",
    inStock: true,
    rating: 4.5
  },
  {
    _id: "it-029",
    title: "Pet Grooming Kit",
    description: "Low-noise clipper with 4 guard combs, slicker brush, nail trimmer set.",
    price: 34.5,
    category: "Pet Supplies",
    imageUrl: "https://picsum.photos/id/105/800/600",
    inStock: true,
    rating: 4.4
  },
  {
    _id: "it-030",
    title: "Acrylic Paint Set",
    description: "24 vibrant colors, non-toxic, quick-dry formula with 12 brushes and palette.",
    price: 26.99,
    category: "Arts & Crafts",
    imageUrl: "https://picsum.photos/id/107/800/600",
    inStock: true,
    rating: 4.6
  }
];