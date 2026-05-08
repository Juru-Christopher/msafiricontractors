// app/products/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Product interface
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  inStock: boolean;
  images?: string[];
  features?: string[];
  specifications?: { label: string; value: string }[];
  warranty?: string;
  delivery?: string;
  brand?: string;
  model?: string;
}

// PRODUCTS DATA - Same as your products page
const products: Product[] = [
  // CCTV SYSTEMS
  {
    id: 1,
    title: "HD CCTV Camera 1080p",
    description: "High-definition surveillance camera with night vision, motion detection, and weatherproof housing.",
    price: 380000,
    originalPrice: 450000,
    category: "cctv",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Hikvision",
    model: "DS-2CE16D0T-IR",
    warranty: "2 years",
    delivery: "Free delivery within Kampala",
    images: ["/images/products/product.jpg", "/images/products/product.jpg", "/images/products/product.jpg"],
    features: [
      "1080p Full HD resolution",
      "Night vision up to 30 meters",
      "IP66 weatherproof rating",
      "Motion detection alerts",
      "Remote viewing via mobile app"
    ],
    specifications: [
      { label: "Resolution", value: "1920x1080" },
      { label: "Lens", value: "3.6mm" },
      { label: "Night Vision Range", value: "30m" },
      { label: "Power Supply", value: "12V DC" },
      { label: "Operating Temperature", value: "-30°C to 60°C" }
    ]
  },
  {
    id: 2,
    title: "4-Channel DVR Kit",
    description: "Complete CCTV kit with 4 cameras, DVR recorder, and remote viewing via mobile app.",
    price: 850000,
    originalPrice: 950000,
    category: "cctv",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Dahua",
    warranty: "2 years",
    delivery: "Free delivery within Kampala",
  },
  {
    id: 3,
    title: "PTZ Dome Camera",
    description: "Pan-tilt-zoom camera with 360° coverage and auto-tracking features.",
    price: 1200000,
    category: "cctv",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Hikvision",
    warranty: "2 years",
  },
  {
    id: 4,
    title: "Biometric Fingerprint Reader",
    description: "Advanced fingerprint access control with 3000 user capacity.",
    price: 750000,
    originalPrice: 850000,
    category: "access-control",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "ZKTeco",
    warranty: "1 year",
  },
  {
    id: 5,
    title: "RFID Card Reader Pro",
    description: "Proximity card reader with weatherproof design for indoor/outdoor use.",
    price: 250000,
    category: "access-control",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "HID",
    warranty: "1 year",
  },
  {
    id: 6,
    title: "Electric Gate Motor 800kg",
    description: "Heavy-duty sliding gate motor with remote controls and battery backup.",
    price: 2100000,
    originalPrice: 2500000,
    category: "automatic-gates",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Nice",
    warranty: "3 years",
  },
  {
    id: 7,
    title: "Swing Gate Opener Kit",
    description: "Dual swing gate motor kit with obstacle detection and soft start/stop.",
    price: 1800000,
    category: "automatic-gates",
    image: "/images/products/product.jpg",
    inStock: false,
    brand: "FAAC",
    warranty: "2 years",
  },
  {
    id: 8,
    title: "Electric Fence Energizer 5J",
    description: "High-power energizer for perimeter fencing with LCD display.",
    price: 550000,
    originalPrice: 650000,
    category: "electric-fence",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Nemtek",
    warranty: "2 years",
  },
  {
    id: 9,
    title: "Razor Wire Roll 50m",
    description: "Galvanized razor wire for high-security perimeter protection.",
    price: 180000,
    category: "electric-fence",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Security Plus",
    warranty: "N/A",
  },
  {
    id: 10,
    title: "Wireless Alarm Kit",
    description: "Smart alarm system with door sensors, motion detectors, and mobile app.",
    price: 450000,
    originalPrice: 550000,
    category: "alarms",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Paradox",
    warranty: "2 years",
  },
  {
    id: 11,
    title: "Smoke Detector Wireless",
    description: "Wireless smoke sensor with 85dB siren and low battery indicator.",
    price: 95000,
    category: "alarms",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Honeywell",
    warranty: "1 year",
  },
  {
    id: 12,
    title: "Video Intercom 7\"",
    description: "Indoor monitor with touchscreen, WiFi, and remote unlock feature.",
    price: 650000,
    originalPrice: 750000,
    category: "intercom",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Bticino",
    warranty: "2 years",
  },
  {
    id: 13,
    title: "Outdoor Intercom Station",
    description: "Weatherproof door station with camera, keypad, and card reader.",
    price: 450000,
    category: "intercom",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "2N",
    warranty: "2 years",
  },
];

// Get product by ID
function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}

// Get recommended products (same category, exclude current product)
function getRecommendedProducts(currentProduct: Product, limit: number = 8): Product[] {
  return products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, limit);
}

// Format price in UGX (Ugandan Shillings)
function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        const resolvedParams = await params;
        const productId = parseInt(resolvedParams.id);
        const foundProduct = getProductById(productId);
        setProduct(foundProduct || null);
        
        if (foundProduct) {
          const recProducts = getRecommendedProducts(foundProduct, 8);
          setRecommendedProducts(recProducts);
        }
      } catch (error) {
        console.error("Error loading product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }
    
    loadProduct();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const images = product.images || [product.image];
  const whatsappNumber = "256700000000"; // Replace with your actual WhatsApp number
  const salesEmail = "sales@msafiricontractors.co.ke"; // Replace with your actual sales email

  // WhatsApp message template
  const whatsappMessage = `Hello MSAFIRI Contractors,%0AI'm interested in purchasing: ${product.title}%0APrice: ${formatPrice(product.price)}%0AProduct ID: ${product.id}%0A%0ACould you please provide more information?`;

  // Email subject and body
  const emailSubject = encodeURIComponent(`Inquiry about ${product.title}`);
  const emailBody = encodeURIComponent(`I'm interested in purchasing:
  
Product: ${product.title}
Price: ${formatPrice(product.price)}
Product ID: ${product.id}

Please contact me with more information.

Thank you.`);

  // Handle product click from recommended section
  const handleProductClick = (productId: number) => {
    setLoading(true);
    router.push(`/products/${productId}`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Products
        </button>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Slider */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-emerald-500 shadow-md"
                        : "border-transparent hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Category Badge */}
            <div className="inline-flex self-start rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              {product.category.replace("-", " ").toUpperCase()}
            </div>

            {/* Title */}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              {product.title}
            </h1>

            {/* Brand and Model */}
            {(product.brand || product.model) && (
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                {product.brand && (
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Brand: <span className="font-medium text-zinc-900 dark:text-white">{product.brand}</span>
                  </span>
                )}
                {product.model && (
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Model: <span className="font-medium text-zinc-900 dark:text-white">{product.model}</span>
                  </span>
                )}
              </div>
            )}

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-zinc-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="mt-3">
              {product.inStock ? (
                <span className="inline-flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  In Stock - Ready to Ship
                </span>
              ) : (
                <span className="text-sm text-red-600 dark:text-red-400">Out of Stock</span>
              )}
            </div>

            {/* Warranty & Delivery Info */}
            <div className="mt-4 flex flex-wrap gap-4">
              {product.warranty && (
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-zinc-600 dark:text-zinc-400">Warranty: <span className="font-medium text-zinc-900 dark:text-white">{product.warranty}</span></span>
                </div>
              )}
              {product.delivery && (
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-600 dark:text-zinc-400">{product.delivery}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-zinc-900 dark:text-white">Description</h3>
              <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                {product.description}
              </p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-white">Key Features</h3>
                <ul className="mt-2 space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                      <svg className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Contact Sales - Email */}
              <a
                href={`mailto:${salesEmail}?subject=${emailSubject}&body=${emailBody}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Sales
              </a>

              {/* WhatsApp Chat */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#20BA5C] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Specifications Table */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="mt-8 border-t border-zinc-200 dark:border-zinc-800 pt-6">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">Technical Specifications</h3>
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl overflow-hidden">
                  {product.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className={`flex px-4 py-3 text-sm ${
                        idx % 2 === 0
                          ? "bg-white dark:bg-black"
                          : "bg-zinc-50 dark:bg-zinc-900"
                      }`}
                    >
                      <span className="w-1/3 font-medium text-zinc-900 dark:text-white">
                        {spec.label}
                      </span>
                      <span className="w-2/3 text-zinc-600 dark:text-zinc-300">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommended Products Section */}
        {recommendedProducts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                You May Also Like
              </h2>
              <Link 
                href={`/products?category=${product.category}`}
                className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                View All {product.category.replace("-", " ")} →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((recProduct) => (
                <div
                  key={recProduct.id}
                  onClick={() => handleProductClick(recProduct.id)}
                  className="group cursor-pointer block"
                >
                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        src={recProduct.image}
                        alt={recProduct.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {recProduct.originalPrice && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                          Save {formatPrice(recProduct.originalPrice - recProduct.price)}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-zinc-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {recProduct.title}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        {recProduct.category.replace("-", " ")}
                      </p>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
                        {recProduct.description}
                      </p>
                      <div className="mt-3">
                        <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                          {formatPrice(recProduct.price)}
                        </span>
                        {recProduct.originalPrice && (
                          <span className="ml-2 text-sm text-zinc-400 line-through">
                            {formatPrice(recProduct.originalPrice)}
                          </span>
                        )}
                      </div>
                      {recProduct.brand && (
                        <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                          Brand: {recProduct.brand}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Need Help Choosing?
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Our security experts are here to help you find the perfect solution for your needs.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${salesEmail}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-600 px-6 py-2.5 text-sm font-semibold text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-black"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Sales Team
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#20BA5C] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}