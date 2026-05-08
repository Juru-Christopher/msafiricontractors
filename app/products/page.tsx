/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "../../components/ProductCard";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  inStock: boolean;
  brand?: string; // Add brand field
}

const categories = [
  { id: "all", name: "All Products" },
  { id: "cctv", name: "CCTV Systems" },
  { id: "access-control", name: "Access Control" },
  { id: "electric-fence", name: "Electric Fencing" },
  { id: "automatic-gates", name: "Automatic Gates" },
  { id: "alarms", name: "Alarm Systems" },
  { id: "intercom", name: "Video Intercom" },
];

// PRODUCTS DATA - Easy to update
// Add new products here following the same structure
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
  },
  {
    id: 14,
    title: "Solar Powered CCTV Kit",
    description: "Off-grid surveillance system with solar panel and 4G connectivity.",
    price: 1500000,
    category: "cctv",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Reolink",
  },
  {
    id: 17,
    title: "IP Network Camera 4MP",
    description: "4MP resolution IP camera with PoE, audio, and SD card recording.",
    price: 520000,
    originalPrice: 600000,
    category: "cctv",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Hikvision",
  },
  {
    id: 21,
    title: "Thermal Bullet Camera",
    description: "Thermal imaging camera for perimeter detection day and night.",
    price: 2800000,
    category: "cctv",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Dahua",
  },
  {
    id: 24,
    title: "Wall Mount Bracket",
    description: "Universal heavy-duty wall mount bracket for CCTV cameras.",
    price: 45000,
    category: "cctv",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Generic",
  },

  // ACCESS CONTROL
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
  },
  {
    id: 15,
    title: "Magnetic Door Lock 600lbs",
    description: "Heavy-duty electromagnetic lock for access control systems.",
    price: 280000,
    category: "access-control",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Secura",
  },
  {
    id: 18,
    title: "Face Recognition Terminal",
    description: "AI-powered face recognition device with temperature screening.",
    price: 1800000,
    category: "access-control",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "ZKTeco",
  },
  {
    id: 26,
    title: "Keypad Access Controller",
    description: "Standalone keypad with 1000 user codes and relay output.",
    price: 180000,
    category: "access-control",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "HID",
  },

  // AUTOMATIC GATES
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
  },
  {
    id: 16,
    title: "Gate Remote Control 4CH",
    description: "433MHz rolling code remote with 4 channels and long-range.",
    price: 45000,
    category: "automatic-gates",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Nice",
  },
  {
    id: 22,
    title: "Sliding Gate Track Kit",
    description: "Complete track kit for sliding gates up to 6 meters wide.",
    price: 350000,
    category: "automatic-gates",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "FAAC",
  },
  {
    id: 28,
    title: "Boom Barrier Gate",
    description: "Automatic boom barrier for parking lots with remote control.",
    price: 3200000,
    category: "automatic-gates",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Nice",
  },

  // ELECTRIC FENCING
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
  },
  {
    id: 19,
    title: "Solar Electric Fence Kit",
    description: "Complete solar-powered electric fence with 2J energizer and panels.",
    price: 950000,
    originalPrice: 1100000,
    category: "electric-fence",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Nemtek",
  },
  {
    id: 25,
    title: "Fence Warning Sign Kit",
    description: "Pack of 10 electric fence warning signs with UV protection.",
    price: 35000,
    category: "electric-fence",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Generic",
  },

  // ALARM SYSTEMS
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
  },
  {
    id: 20,
    title: "GSM Alarm Communicator",
    description: "Add GSM calling to any alarm panel with voice and SMS alerts.",
    price: 320000,
    category: "alarms",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Paradox",
  },
  {
    id: 27,
    title: "PIR Motion Sensor",
    description: "Wireless PIR detector with pet immunity and 12m range.",
    price: 85000,
    category: "alarms",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Honeywell",
  },

  // VIDEO INTERCOM
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
  },
  {
    id: 23,
    title: "Wireless Doorbell Camera",
    description: "Smart doorbell with HD camera, two-way audio, and motion alerts.",
    price: 280000,
    originalPrice: 350000,
    category: "intercom",
    image: "/images/products/product.jpg",
    inStock: true,
    brand: "Ring",
  },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(categoryParam || "all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("all");
    }
  }, [categoryParam]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      router.push("/products");
    } else {
      router.push(`/products?category=${categoryId}`);
    }
  };

  const filteredProducts = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex flex-col bg-white dark:bg-black min-h-screen">
      {/* Filters + Search Bar - Sticky */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Category filter buttons */}
            <div className="flex gap-2 overflow-x-auto flex-1 scrollbar-hide pb-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                    activeCategory === cat.id
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-black shadow-sm"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            {/* Search and results count */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="relative w-48 lg:w-56">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap hidden sm:block">
                <span className="font-medium text-zinc-900 dark:text-white">{filteredProducts.length}</span> results
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6 pb-16 w-full mt-13">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}  // Pass the ID explicitly
                href={`/products/${product.id}`}  // Pass the href
                title={product.title}
                description={product.description}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                inStock={product.inStock}
                category={product.category}
                brand={product.brand}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg className="w-16 h-16 text-zinc-300 dark:text-zinc-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">No products found</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}