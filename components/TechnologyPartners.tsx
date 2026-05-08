"use client";

import { useEffect, useRef, useState } from "react";
import PartnerCard from "./PartnerCard";

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Hikvision",
    logo: "/images/partners/placeholder.jpg",
    description: "World's leading provider of innovative security and surveillance solutions with cutting-edge AI technology.",
    website: "https://www.hikvision.com",
  },
  {
    id: 2,
    name: "Dahua Technology",
    logo: "/images/partners/placeholder.jpg",
    description: "Advanced video surveillance products and solutions for residential, commercial, and enterprise security.",
    website: "https://www.dahuasecurity.com",
  },
  {
    id: 3,
    name: "Bosch Security Systems",
    logo: "/images/partners/placeholder.jpg",
    description: "Comprehensive security and communication solutions with over 100 years of engineering excellence.",
    website: "https://www.boschsecurity.com",
  },
  {
    id: 4,
    name: "Axis Communications",
    logo: "/images/partners/placeholder.jpg",
    description: "Market leader in network video, delivering intelligent security solutions for a smarter world.",
    website: "https://www.axis.com",
  },
  {
    id: 5,
    name: "Hanwha Vision",
    logo: "/images/partners/placeholder.jpg",
    description: "Global vision solution provider specializing in network cameras, storage, and video management.",
    website: "https://www.hanwhavision.com",
  },
  {
    id: 6,
    name: "CP Plus",
    logo: "/images/partners/placeholder.jpg",
    description: "Leading security and surveillance brand offering affordable high-quality CCTV and access control systems.",
    website: "https://www.cpplusworld.com",
  },
  {
    id: 7,
    name: "Avigilon",
    logo: "/images/partners/placeholder.jpg",
    description: "AI-powered video analytics and security solutions that help detect and respond to threats faster.",
    website: "https://www.avigilon.com",
  },
  {
    id: 8,
    name: "Uniview",
    logo: "/images/partners/placeholder.jpg",
    description: "Professional IP video surveillance products with advanced features for enterprise-level security.",
    website: "https://www.uniview.com",
  },
];

export default function TechnologyPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 py-12 sm:py-16" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            Our Technology Partners
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Powered by the world&apos;s leading security technology brands
          </p>
        </div>

        {/* Partners Grid - Fits within page */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`transform transition-all duration-700 ease-out ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <PartnerCard
                name={partner.name}
                logo={partner.logo}
                description={partner.description}
                website={partner.website}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}