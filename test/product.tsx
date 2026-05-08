/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Footer";

const categories = [
  {
    id: "cctv-cameras",
    title: "CCTV Cameras",
    description: "High-definition surveillance systems",
    icon: "📹",
    products: [
      {
        slug: "ultra-watch-4k",
        name: "UltraWatch 4K",
        price: "UGX 1,650,000",
        image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80",
      },
      {
        slug: "storm-eye-outdoor",
        name: "StormEye Outdoor",
        price: "UGX 1,320,000",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "access-control",
    title: "Access Control",
    description: "Smart entry and visitor management",
    icon: "🔐",
    products: [
      {
        slug: "secure-pass-8",
        name: "SecurePass 8",
        price: "UGX 980,000",
        image: "https://images.unsplash.com/photo-1515871204537-345d4d1f0b9d?auto=format&fit=crop&w=800&q=80",
      },
      {
        slug: "bio-gate-pro",
        name: "BioGate Pro",
        price: "UGX 2,250,000",
        image: "https://images.unsplash.com/photo-1581094462247-3a8029ddecd5?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "intercom-systems",
    title: "Intercom Systems",
    description: "Communication and door entry solutions",
    icon: "📞",
    products: [
      {
        slug: "entrylink-200",
        name: "EntryLink 200",
        price: "UGX 1,100,000",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      },
      {
        slug: "talkpoint-s",
        name: "TalkPoint S",
        price: "UGX 765,000",
        image: "https://images.unsplash.com/photo-1515871204537-345d4d1f0b9d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "perimeter-security",
    title: "Perimeter Security",
    description: "Boundary protection and intrusion detection",
    icon: "🛡️",
    products: [
      {
        slug: "guard-line-sensor",
        name: "GuardLine Sensor",
        price: "UGX 1,450,000",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      },
      {
        slug: "edge-alert-12",
        name: "EdgeAlert 12",
        price: "UGX 1,120,000",
        image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5f6?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("cctv-cameras");

  const activeProducts = categories.find((c) => c.id === activeCategory)?.products || [];

  return (
    <div className="bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">Products</p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight">Enterprise Security Solutions</h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Explore our comprehensive range of surveillance, access control, and perimeter security products designed for modern properties.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:gap-8">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-emerald-500">Browse by category</p>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                    activeCategory === category.id
                      ? "bg-emerald-500 text-zinc-950"
                      : "border border-zinc-200 bg-white text-zinc-900 hover:border-emerald-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
                  }`}
                >
                  {category.icon} {category.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {activeProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white transition hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-emerald-500/20"
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold group-hover:text-emerald-500">{product.name}</h3>
                  <p className="mt-2 text-emerald-500 font-semibold">{product.price}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-500">
                    View details <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-500">Still exploring?</p>
            <h2 className="mt-4 text-3xl font-bold">Need help choosing the right product?</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Our security specialists can guide you through our product range and recommend the best solution for your property.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              Get expert advice
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
