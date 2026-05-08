"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id?: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image?: string;
  href?: string;
  inStock?: boolean;
  category?: string;
  brand?: string;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({ 
  id, 
  title, 
  description, 
  price, 
  originalPrice, 
  image, 
  href, 
  inStock = true,
  category,
  brand
}: ProductCardProps) {
  const imageSrc = image || "/images/products/placeholder.jpg";
  const hasDiscount = originalPrice && originalPrice > price;
  const discountPercentage = hasDiscount ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  // Use the provided href, or fallback to id-based URL
  const linkHref = href || (id ? `/products/${id}` : "#");

  // Debug log to see what's happening
  console.log(`ProductCard: ${title} -> ${linkHref}`);

  // Get category color
  const getCategoryColor = (cat?: string) => {
    switch(cat) {
      case "cctv":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "access-control":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
      case "automatic-gates":
        return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20";
      case "electric-fence":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20";
      case "alarms":
        return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
      case "intercom":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
      default:
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    }
  };

  // Handle quick inquiry
  const handleQuickInquiry = () => {
    const salesEmail = "sales@msafiricontractors.co.ke";
    const subject = encodeURIComponent(`Inquiry about ${title}`);
    const body = encodeURIComponent(`I'm interested in:
      
Product: ${title}
Price: ${formatPrice(price)}
Product ID: ${id || 'N/A'}

Please contact me with more information.`);
    window.location.href = `mailto:${salesEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="group bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 hover:-translate-y-1 flex flex-col h-full">
      {/* Product Image - Fixed height section */}
      <Link href={linkHref} className="relative h-48 sm:h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-800 block flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Out of Stock Overlay */}
        {!inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Out of Stock
            </span>
          </div>
        )}
        
        {/* Discount Percentage Badge - Top Left */}
        {hasDiscount && inStock && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2.5 py-1.5 rounded-lg shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
              <span className="text-xs font-bold leading-none">-{discountPercentage}% OFF</span>
            </div>
          </div>
        )}

        {/* Category Badge - Top Right */}
        {category && (
          <div className="absolute top-3 right-3 z-10">
            <div className={`px-2.5 py-1 rounded-lg text-xs font-medium border backdrop-blur-sm ${getCategoryColor(category)}`}>
              {category.replace("-", " ").toUpperCase()}
            </div>
          </div>
        )}
      </Link>

      {/* Product Details - Flexible content that pushes button down */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Title - Fixed height with line clamp */}
        <Link href={linkHref}>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
        </Link>
        
        {/* Brand if available */}
        {brand && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
            Brand: {brand}
          </p>
        )}
        
        {/* Description - Fixed height with line clamp */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-3 min-h-[3.75rem]">
          {description}
        </p>
        
        {/* Spacer to push content down if needed */}
        <div className="flex-grow"></div>
        
        {/* Price Section - Fixed position at bottom of flexible area */}
        <div className="mb-4 mt-auto">
          {hasDiscount && inStock ? (
            <div className="space-y-0.5">
              <div className="text-sm text-zinc-400 dark:text-zinc-500 line-through">
                {formatPrice(originalPrice)}
              </div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                  {formatPrice(price)}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Save {formatPrice(originalPrice - price)}
                </span>
              </div>
            </div>
          ) : (
            <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
              {formatPrice(price)}
            </div>
          )}
        </div>

        {/* Stock Status - Optional */}
        {inStock && price < 100000 && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              In Stock
            </span>
          </div>
        )}

        {/* Action Buttons - Fixed at bottom */}
        <div className="flex gap-2 mt-2">
          <Link
            href={linkHref}
            className="flex-1 px-4 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-medium transition-all duration-300 hover:bg-zinc-700 dark:hover:bg-zinc-200 active:scale-95 text-center"
          >
            View Details
          </Link>
          
          {/* Quick Inquiry Button */}
          <button
            onClick={handleQuickInquiry}
            className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-sm font-medium transition-all duration-300 active:scale-95 flex-shrink-0"
            aria-label="Quick inquiry"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}