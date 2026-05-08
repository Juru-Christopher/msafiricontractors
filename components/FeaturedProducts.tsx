import Link from "next/link";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  brand?: string;
  inStock?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: "HD CCTV Camera",
    description: "1080p resolution with night vision and motion detection",
    price: 380000,
    originalPrice: 450000,
    image: "/images/products/product.jpg",
    category: "cctv",
    brand: "Hikvision",
    inStock: true,
  },
  {
    id: 2,
    title: "Biometric Access Control",
    description: "Fingerprint and card-based entry system for secure access",
    price: 999000,
    originalPrice: 1200000,
    image: "/images/products/product.jpg",
    category: "access-control",
    brand: "ZKTeco",
    inStock: true,
  },
  {
    id: 3,
    title: "Electric Fence Energizer",
    description: "High-voltage pulse system for perimeter protection",
    price: 750000,
    originalPrice: 850000,
    image: "/images/products/product.jpg",
    category: "electric-fence",
    brand: "Nemtek",
    inStock: true,
  },
  {
    id: 4,
    title: "Automatic Gate Motor",
    description: "Heavy-duty sliding gate motor with remote control",
    price: 2100000,
    originalPrice: 2500000,
    image: "/images/products/product.jpg",
    category: "automatic-gates",
    brand: "Nice",
    inStock: true,
  },
  {
    id: 5,
    title: "Wireless Alarm System",
    description: "Smart alarm with mobile alerts and zone control",
    price: 550000,
    originalPrice: 650000,
    image: "/images/products/product.jpg",
    category: "alarms",
    brand: "Paradox",
    inStock: true,
  },
  {
    id: 6,
    title: "Razor Wire Coil",
    description: "Galvanized razor wire for high-security fencing",
    price: 150000,
    originalPrice: 180000,
    image: "/images/products/product.jpg",
    category: "electric-fence",
    brand: "Security Plus",
    inStock: true,
  },
  {
    id: 7,
    title: "IP Intercom System",
    description: "Video intercom with remote unlocking capability",
    price: 850000,
    originalPrice: 950000,
    image: "/images/products/product.jpg",
    category: "intercom",
    brand: "2N",
    inStock: true,
  },
  {
    id: 8,
    title: "Solar Security Light",
    description: "Motion-activated solar light with wide coverage",
    price: 95000,
    originalPrice: 120000,
    image: "/images/products/product.jpg",
    category: "alarms",
    brand: "Generic",
    inStock: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white dark:bg-black py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Top-rated security equipment for your protection
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              href={`/products/${product.id}`}
              title={product.title}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              category={product.category}
              brand={product.brand}
              inStock={product.inStock}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-zinc-900 dark:border-white rounded-full text-zinc-900 dark:text-white font-medium text-base transition-all duration-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black group"
          >
            View All Products
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}