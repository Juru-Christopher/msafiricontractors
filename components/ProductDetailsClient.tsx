"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Product, formatPrice } from "@/lib/products";

interface ProductDetailsClientProps {
  product: Product;
  recommended: Product[];
}

export default function ProductDetailsClient({ product, recommended }: ProductDetailsClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <section className="bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex self-start rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 mb-4">
              {product.category.replace("-", " ").toUpperCase()}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">{product.title}</h1>
            <p className="mt-4 text-xl font-semibold text-emerald-600 dark:text-emerald-400">{formatPrice(Number(product.price))}</p>
            <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-5 py-3 text-sm text-zinc-900 dark:text-white transition hover:bg-zinc-50 dark:hover:bg-zinc-800">
                Back to products
              </Link>
              <Link href="/contact" className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
                Enquire now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/10">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                width={600}
                height={600}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`shrink-0 overflow-hidden rounded-3xl border transition ${
                    selectedImage === index
                      ? "border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-400"
                      : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} - Image ${index + 1}`}
                    width={120}
                    height={120}
                    sizes="120px"
                    className="h-20 w-28 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 p-8 shadow-xl shadow-zinc-200/30 dark:shadow-black/10">
              <p className="uppercase tracking-[0.3em] text-emerald-500 text-xs font-semibold">Product overview</p>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{product.description}</p>
              {(product.features || product.specifications || product.brand || product.warranty) && (
                <div className="mt-6 space-y-3 text-sm">
                  {product.brand && (
                    <div>
                      <span className="font-semibold text-zinc-900 dark:text-white">Brand:</span>
                      <p className="text-zinc-600 dark:text-zinc-400">{product.brand}</p>
                    </div>
                  )}
                  {product.warranty && (
                    <div>
                      <span className="font-semibold text-zinc-900 dark:text-white">Warranty:</span>
                      <p className="text-zinc-600 dark:text-zinc-400">{product.warranty}</p>
                    </div>
                  )}
                  {product.delivery && (
                    <div>
                      <span className="font-semibold text-zinc-900 dark:text-white">Delivery:</span>
                      <p className="text-zinc-600 dark:text-zinc-400">{product.delivery}</p>
                    </div>
                  )}
                  {product.inStock ? (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      In Stock
                    </div>
                  ) : (
                    <div className="text-red-600 dark:text-red-400 font-medium">Out of Stock</div>
                  )}
                </div>
              )}
            </div>

            {recommended.length > 0 && (
              <div className="rounded-[2rem] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 p-8 shadow-xl shadow-zinc-200/30 dark:shadow-black/10">
                <p className="uppercase tracking-[0.3em] text-emerald-500 text-xs font-semibold">Recommended products</p>
                <div className="mt-6 space-y-3">
                  {recommended.slice(0, 4).map((item) => (
                    <Link
                      key={item.id}
                      href={`/products/${item.id}`}
                      className="block rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 text-sm text-zinc-900 dark:text-white transition hover:border-emerald-400 hover:bg-emerald-50 dark:hover:border-emerald-500 dark:hover:bg-emerald-950/30"
                    >
                      <p className="font-semibold line-clamp-2">{item.title}</p>
                      <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">{formatPrice(item.price)}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
