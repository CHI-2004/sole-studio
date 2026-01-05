// 1. Import all local images from your assets folder
import ab from '../assets/ab.png';
import black from '../assets/black.png';
import bmen from '../assets/bmen.jpg';
import brown from '../assets/brown.png';
import current from '../assets/current.png';
import double from '../assets/double.png';
import hero12 from '../assets/hero12.png';
import menshoes from '../assets/menshoes.png';
import nike from '../assets/nike.png';
import nike1 from '../assets/nike1.png';
import pngtree from '../assets/pngtree.png';
import spot1 from '../assets/spot1.png';
import three from '../assets/three.png';
import tinywow from '../assets/tinywow.png';
import white from '../assets/white.png';
import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import black1 from '../assets/black1.jpg';
import two from '../assets/two.jpg';
import spot from '../assets/spot.jpg';
import Jordan1 from '../assets/Jordan1.jpg';
import jordan2 from '../assets/Jordan 2.jpg';
import jordan3 from '../assets/Jordan3.jpg';
import jordan4 from '../assets/Jordan4.jpg';
import jordan5 from '../assets/Jordan5.jpg';
import jordan6 from '../assets/Jordan6.jpg';
import jordan7 from '../assets/jordan7.jpg';
import jordan9 from '../assets/jordan9.jpg';
import office1 from '../assets/office1.jpg';
import office2 from '../assets/office2.jpg';
import office3 from '../assets/office3.jpg';
import office4 from '../assets/office4.jpg';
import office5 from '../assets/office5.jpg';
import office6 from '../assets/office6.jpg';
import office7 from '../assets/office7.jpg';
import office8 from '../assets/office8.jpg';
import off1 from '../assets/off1.jpg';
import off2 from '../assets/off2.jpg';
import off3 from '../assets/off3.jpg';
import off4 from '../assets/off4.jpg';
import off5 from '../assets/off5.jpg';
import kid1 from '../assets/kid.jpg';
import kid2 from '../assets/kid2.jpg';
import kid3 from '../assets/kid3.jpg';
import kid4 from '../assets/kid4.jpg';
import kid5 from '../assets/kid5.jpg';
import kid6 from '../assets/kid6.jpg';
import kid7 from '../assets/kid7.jpg';
import kid8 from '../assets/kid8.jpg';
import nike2 from '../assets/nike2.jpg';
import nike5 from '../assets/nike5.jpg';
import nike3 from '../assets/nike3.jpg';
import nike4 from '../assets/nike4.jpg';
import nike6 from '../assets/nike6.jpg';
import nike7 from '../assets/nike7.jpg';
import nike8 from '../assets/nike8.jpg';
import nike9 from '../assets/nike9.jpg';
import nike10 from '../assets/nike10.jpg';
import nike11 from '../assets/nike11.jpg';
import nike12 from '../assets/nike12.jpg';
import nike13 from '../assets/nike13.jpg';

export const products = [
  {
    id: 1,
    name: "Air Max Pulse",
    brand: "Nike",
    price: 160,
    oldPrice: 200, // Added for Jumia strike-through effect
    discount: 20, // Unique discount percentage
    images: [nike, nike1],
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Red", "Black", "White"],
    description: "Inspired by the energy of London's music scene.",
    stock: 15,
    itemsLeft: 5, // For the "5 items left" text
    stockPercentage: 33 // For the orange progress bar fill
  },
  {
    id: 2,
    name: "Ultraboost Light",
    brand: "Adidas",
    price: 190,
    oldPrice: 228,
    discount: 17,
    images: [black, current],
    sizes: [38, 39, 40, 41, 42],
    colors: ["Cloud White", "Core Black"],
    description: "Experience epic energy with our lightest shoe.",
    stock: 8,
    itemsLeft: 3,
    stockPercentage: 38
  },
  {
    id: 3,
    name: "Classic Leather",
    brand: "Reebok",
    price: 85,
    oldPrice: 110,
    discount: 22,
    images: [white, brown],
    sizes: [40, 41, 42, 43, 44],
    colors: ["White", "Gum"],
    description: "Clean lines and soft leather for a timeless look.",
    stock: 25,
    itemsLeft: 12,
    stockPercentage: 48
  },
  {
    id: 4,
    name: "RS-X Efekt",
    brand: "Puma",
    price: 110,
    oldPrice: 150,
    discount: 26,
    images: [spot1, pngtree],
    sizes: [41, 42, 43, 44, 45],
    colors: ["Grey", "Blue", "Orange"],
    description: "Future-retro silhouette that made waves.",
    stock: 12,
    itemsLeft: 8,
    stockPercentage: 66
  },
  {
    id: 5,
    name: "SoleStyle High",
    brand: "Jordan",
    price: 170,
    oldPrice: 210,
    discount: 19,
    images: [b, double],
    sizes: [40, 41, 42, 43, 44],
    colors: ["Blue", "White"],
    description: "Premium university blue colorway.",
    stock: 10,
    itemsLeft: 2,
    stockPercentage: 20
  },
  {
    id: 6,
    name: "Rugged Explorer",
    brand: "Outdoor",
    price: 140,
    oldPrice: 180,
    discount: 22,
    images: [hero12, menshoes],
    sizes: [41, 42, 43, 44, 45],
    colors: ["Tan", "Brown"],
    description: "Durable design for any terrain.",
    stock: 14,
    itemsLeft: 9,
    stockPercentage: 64
  },
  {
    id: 7,
    name: "RS-X Efekt (Classic)",
    brand: "Puma",
    price: 110,
    oldPrice: 165,
    discount: 33,
    images: [ spot, two],
    sizes: [41, 42, 43, 44, 45],
    colors: ["Grey", "Blue", "Orange"],
    rating: 4.7,
    numberOfReviews: 56,
    gender: "Men",
    description: "The RS-X is back. This future-retro silhouette made waves when it dropped in 2018.",
    stock: 12,
    itemsLeft: 4,
    stockPercentage: 33
  },
    {
    id: 8,
    name: "Rugged Explorer",
    brand: "Outdoor",
    price: 140,
    oldPrice: 180,
    discount: 22,
    images: [tinywow, three.png],
    sizes: [41, 42, 43, 44, 45],
    colors: ["Tan", "Brown"],
    description: "Durable design for any terrain.",
    stock: 14,
    itemsLeft: 9,
    stockPercentage: 64
  },
 {
    id: 70,
    name: "Rugged Explorer",
    brand: "Outdoor",
    price: 140,
    oldPrice: 180,
    discount: 22,
    images: [Jordan1, jordan7],
    sizes: [41, 42, 43, 44, 45],
    colors: ["Tan", "Brown"],
    description: "Durable design for any terrain.",
    stock: 14,
    itemsLeft: 9,
    stockPercentage: 64
  },
  {
    id: 9,
    name: "Air Jordan 4 'Brick by Brick'",
    brand: "Jordan",
    price: 225,
    oldPrice: 280,
    discount: 20,
    images: [c, black1],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    colors: ["Red", "Grey", "Black"],
    description: "The 2025 Nigel Sylvester collaboration featuring 'Bike Air' branding and durable toe materials.",
    stock: 20,
    itemsLeft: 4,
    stockPercentage: 20
  },
  {
    id: 10,
    name: "Samba OG 'Cloud White'",
    brand: "Adidas",
    price: 100,
    oldPrice: 130,
    discount: 23,
    images: [bmen,a],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["White", "Black", "Gum"],
    description: "The classic terrace icon returns in its most popular 2025 colorway.",
    stock: 50,
    itemsLeft: 12,
    stockPercentage: 24
  },
  {
    id: 11,
    name: "Air Jordan 1 High OG 'Bred'",
    brand: "Jordan",
    price: 250,
    oldPrice: 300,
    discount: 16,
    images: [nike2, nike5],
    sizes: [41, 42, 43, 44, 45],
    colors: ["Black", "Varsity Red"],
    description: "The legendary 1985 silhouette remastered for the 40th anniversary in 2025.",
    stock: 15,
    itemsLeft: 2,
    stockPercentage: 13
  },
  {
    id: 12,
    name: "Air Force 1 '07 LV8",
    brand: "Nike",
    price: 125,
    oldPrice: 160,
    discount: 22,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    nike9],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["White", "Silver"],
    description: "Elevated materials and fresh 2025 branding on the timeless street classic.",
    stock: 30,
    itemsLeft: 18,
    stockPercentage: 60
  },
  {
    id: 13, // Keep increasing this number for each new one
    name: "Air Jordan Retro New",
    brand: "Jordan", // This MUST be "Jordan" for the filter to work
    price: 210,
    oldPrice: 250,
    discount: 16,
    images: [jordan7, jordan2], // You can reuse your imported images
    sizes: [41, 42, 43, 44, 45],
    colors: ["Black", "White"],
    description: "New 2026 Edition.",
    stock: 10,
    itemsLeft: 5,
    stockPercentage: 50
  },
  {
    id: 14, // Keep increasing this number for each new one
    name: "Air Jordan Retro New",
    brand: "Jordan", // This MUST be "Jordan" for the filter to work
    price: 210,
    oldPrice: 250,
    discount: 16,
    images: [Jordan1, jordan7], // You can reuse your imported images
    sizes: [41, 42, 43, 44, 45],
    colors: ["Black", "White"],
    description: "New 2026 Edition.",
    stock: 10,
    itemsLeft: 5,
    stockPercentage: 50
  },
  {
    id: 15, // Keep increasing this number for each new one
    name: "Air Jordan Retro New",
    brand: "Jordan", // This MUST be "Jordan" for the filter to work
    price: 210,
    oldPrice: 250,
    discount: 16,
    images: [jordan2, jordan3], // You can reuse your imported images
    sizes: [41, 42, 43, 44, 45],
    colors: ["Black", "White"],
    description: "New 2026 Edition.",
    stock: 10,
    itemsLeft: 5,
    stockPercentage: 50
  },
  {
    id: 16, // Keep increasing this number for each new one
    name: "Air Jordan Retro New",
    brand: "Jordan", // This MUST be "Jordan" for the filter to work
    price: 210,
    oldPrice: 250,
    discount: 16,
    images: [jordan3, jordan4], // You can reuse your imported images
    sizes: [41, 42, 43, 44, 45],
    colors: ["Black", "White"],
    description: "New 2026 Edition.",
    stock: 10,
    itemsLeft: 5,
    stockPercentage: 50
  },
  {
    id: 17, // Keep increasing this number for each new one
    name: "Air Jordan Retro New",
    brand: "Jordan", // This MUST be "Jordan" for the filter to work
    price: 210,
    oldPrice: 250,
    discount: 16,
    images: [jordan4, jordan5], // You can reuse your imported images
    sizes: [41, 42, 43, 44, 45],
    colors: ["Black", "White"],
    description: "New 2026 Edition.",
    stock: 10,
    itemsLeft: 5,
    stockPercentage: 50
  },
  {
    id: 18, // Keep increasing this number for each new one
    name: "Air Jordan Retro New",
    brand: "Jordan", // This MUST be "Jordan" for the filter to work
    price: 210,
    oldPrice: 250,
    discount: 16,
    images: [jordan5, jordan6], // You can reuse your imported images
    sizes: [41, 42, 43, 44, 45],
    colors: ["Black", "White"],
    description: "New 2026 Edition.",
    stock: 10,
    itemsLeft: 5,
    stockPercentage: 50
  },
  {
    id: 19, // Keep increasing this number for each new one
    name: "Air Jordan Retro New",
    brand: "Jordan", // This MUST be "Jordan" for the filter to work
    price: 210,
    oldPrice: 250,
    discount: 16,
    images: [jordan6, jordan9], // You can reuse your imported images
    sizes: [41, 42, 43, 44, 45],
    colors: ["Black", "White"],
    description: "New 2026 Edition.",
    stock: 10,
    itemsLeft: 5,
    stockPercentage: 50
  },

  // --- OFFICE CATEGORY (Items 20-35) ---
  {
    id: 20,
    name: "Executive Oxford",
    brand: "SoleStyle",
    category: "Office",
    price: 45000,
    oldPrice: 55000,
    discount: 18,
    images: [office1, office2],
    sizes: [40, 41, 42, 43, 44],
    colors: ["Black", "Brown"],
    description: "Premium leather for professional settings.",
    stock: 10, itemsLeft: 4, stockPercentage: 40
  },
  {
    id: 21,
    name: "Classic Derby",
    brand: "SoleStyle",
    category: "Office",
    price: 42000,
    oldPrice: 50000,
    discount: 16,
    images: [office3, office4],
    sizes: [40, 41, 42, 43],
    colors: ["Tan", "Black"],
    description: "Elegant design with a comfortable sole.",
    stock: 15, itemsLeft: 6, stockPercentage: 60
  },
  {
    id: 22,
    name: "Formal Loafer",
    brand: "SoleStyle",
    category: "Office",
    price: 43500,
    oldPrice: 52000,
    discount: 16,
    images: [office5, office6],
    sizes: [40, 41, 42, 43],
    colors: ["Black"],
    description: "Slip-on convenience with a sharp look.",
    stock: 12, itemsLeft: 2, stockPercentage: 20
  },
  {
    id: 23,
    name: "Modern Monk Strap",
    brand: "SoleStyle",
    category: "Office",
    price: 47000,
    oldPrice: 58000,
    discount: 19,
    images: [office7, office8],
    sizes: [41, 42, 43, 44],
    colors: ["Dark Brown"],
    description: "Sophisticated double buckle design.",
    stock: 8, itemsLeft: 3, stockPercentage: 35
  },

  // --- KIDS CATEGORY (Items 31-45) ---
  {
    id: 31,
    name: "Junior Sprint",
    brand: "Nike",
    category: "Kids",
    price: 25000,
    oldPrice: 32000,
    discount: 22,
    images: [kid1, kid2],
    sizes: [30, 31, 32, 33, 34],
    colors: ["Blue", "Red"],
    description: "Durable and breathable for active kids.",
    stock: 20, itemsLeft: 8, stockPercentage: 40
  },
  {
    id: 32,
    name: "Playtime Pro",
    brand: "Adidas",
    category: "Kids",
    price: 21000,
    oldPrice: 28000,
    discount: 25,
    images: [kid3, kid4],
    sizes: [28, 29, 30],
    colors: ["White", "Pink"],
    description: "Easy-on velcro straps for toddlers.",
    stock: 12, itemsLeft: 3, stockPercentage: 25
  },
  {
    id: 33,
    name: "Tiny Trainer",
    brand: "Puma",
    category: "Kids",
    price: 19500,
    oldPrice: 25000,
    discount: 22,
    images: [kid5, kid6],
    sizes: [25, 26, 27, 28],
    colors: ["Green", "Yellow"],
    description: "Lightweight and flexible for first steps.",
    stock: 18, itemsLeft: 10, stockPercentage: 55
  },

  // --- NIKE COLLECTION (Items 46-60) ---
  {
    id: 46,
    name: "Air Max Infinity",
    brand: "Nike",
    category: "Sport",
    price: 125000,
    oldPrice: 150000,
    discount: 16,
    images: [nike10, nike11],
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Volt", "Black"],
    description: "Ultimate cushioning for long-distance runs.",
    stock: 18, itemsLeft: 5, stockPercentage: 30
  },
  {
    id: 47,
    name: "Zoom Pegasus",
    brand: "Nike",
    category: "Sport",
    price: 110000,
    oldPrice: 135000,
    discount: 18,
    images: [nike12, nike13],
    sizes: [41, 42, 43, 44],
    colors: ["White", "Blue"],
    description: "The workhorse with wings returns.",
    stock: 22, itemsLeft: 7, stockPercentage: 32
  },
  {
    id: 48,
    name: "Nike Court Legacy",
    brand: "Nike",
    category: "Casual",
    price: 75000,
    oldPrice: 90000,
    discount: 16,
    images: [nike3, nike4],
    sizes: [39, 40, 41, 42, 43],
    colors: ["Black", "White"],
    description: "Classic tennis-inspired street style.",
    stock: 15, itemsLeft: 4, stockPercentage: 25
  },

  // --- CASUAL / OFF CATEGORY (Items 61-85) ---
  {
    id: 61,
    name: "Urban Explorer",
    brand: "Off-White",
    category: "Casual",
    price: 85000,
    oldPrice: 110000,
    discount: 22,
    images: [off1, off2],
    sizes: [40, 41, 42, 43, 44],
    colors: ["Beige", "Grey"],
    description: "Modern street style with premium comfort.",
    stock: 30, itemsLeft: 15, stockPercentage: 50
  },
  {
    id: 62,
    name: "Street Suede",
    brand: "Off-White",
    category: "Casual",
    price: 92000,
    oldPrice: 120000,
    discount: 23,
    images: [off3, off4],
    sizes: [41, 42, 43, 44],
    colors: ["Olive", "Tan"],
    description: "High-top luxury casual footwear.",
    stock: 14, itemsLeft: 4, stockPercentage: 28
  },
  {
    id: 63,
    name: "Daily Driver",
    brand: "Vans",
    category: "Casual",
    price: 45000,
    oldPrice: 60000,
    discount: 25,
    images: [off5, ab],
    sizes: [40, 41, 42, 43],
    colors: ["Navy"],
    description: "Simple, durable, and stylish.",
    stock: 40, itemsLeft: 20, stockPercentage: 50
  },
  // --- Continue adding until ID 85 using remaining assets (h1-h6, bmen, tinywow, etc.) ---
  {
    id: 85,
    name: "Final Edition Sport",
    brand: "Nike",
    category: "Sport",
    price: 130000,
    oldPrice: 160000,
    discount: 18,
    images: [nike9, nike],
    sizes: [40, 41, 42, 43, 44],
    colors: ["Black"],
    description: "The peak of performance.",
    stock: 5, itemsLeft: 1, stockPercentage: 20
  }
];