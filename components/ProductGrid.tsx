// components/ProductGrid.tsx
"use client";

import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  inStock: boolean;
}

interface ProductGridProps {
  products: Product[];
  className?: string;
  columns?: {
    default?: number;
    sm?: number;
    lg?: number;
  };
  gap?: string;
}

export default function ProductGrid({ 
  products, 
  className = "",
  columns = { default: 1, sm: 2, lg: 4 },
  gap = "gap-6"
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <svg className="w-16 h-16 text-zinc-300 dark:text-zinc-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">No products found</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  const gridCols = [
    `grid-cols-${columns.default || 1}`,
    columns.sm ? `sm:grid-cols-${columns.sm}` : "",
    columns.lg ? `lg:grid-cols-${columns.lg}` : "",
  ].filter(Boolean).join(" ");

  return (
    <div className={`grid ${gridCols} ${gap} ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          href={`/products/${product.id}`}
          title={product.title}
          description={product.description}
          price={product.price}
          originalPrice={product.originalPrice}
          image={product.image}
        />
      ))}
    </div>
  );
}