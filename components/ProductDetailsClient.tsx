/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";

interface Product {
  slug: string;
  name: string;
  price: string;
  short: string;
  description: string;
  images: string[];
  category: string;
  categoryId: string;
}

interface ProductDetailsClientProps {
  product: Product;
  recommended: Product[];
}

export default function ProductDetailsClient({ product, recommended }: ProductDetailsClientProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">Product details</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{product.name}</h1>
            <p className="mt-4 text-xl font-semibold text-emerald-400">{product.price}</p>
            <p className="mt-6 text-base leading-8 text-zinc-300">{product.short}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/20">
                Back to products
              </Link>
              <Link href="/contact" className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300">
                Enquire now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/10">
              <img src={product.images[activeImage]} alt={product.name} className="h-[420px] w-full object-cover" />
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(index)}
                  className={`shrink-0 overflow-hidden rounded-3xl border transition ${
                    activeImage === index
                      ? "border-emerald-500 bg-emerald-500/10"
                      : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="h-20 w-28 object-cover" />
                </button>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 shadow-xl shadow-zinc-200/30 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/10">
              <p className="uppercase tracking-[0.3em] text-emerald-500">Product overview</p>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{product.description}</p>
              <div className="mt-6 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
                <div>
                  <span className="font-semibold">Category:</span> {product.category}
                </div>
                <div>
                  <span className="font-semibold">Availability:</span> In stock, ready for installation.
                </div>
                <div>
                  <span className="font-semibold">Support:</span> Local service and warranty included.
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 shadow-xl shadow-zinc-200/30 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/10">
              <p className="uppercase tracking-[0.3em] text-emerald-500">Recommended</p>
              <div className="mt-6 space-y-4">
                {recommended.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/products/${item.slug}`}
                    className="block rounded-3xl border border-zinc-200 bg-white p-4 text-sm text-zinc-900 transition hover:border-emerald-400 hover:bg-emerald-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{item.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
