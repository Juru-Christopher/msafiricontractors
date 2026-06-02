"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const carouselImages: CarouselImage[] = [
  {
    src: "/images/carousel/slide1.jpg",
    alt: "Advanced Surveillance Systems",
    title: "Advanced Surveillance Systems",
    description: "State-of-the-art CCTV and monitoring solutions that keep you in control 24/7. See everything, miss nothing, stay protected.",
  },
  {
    src: "/images/carousel/slide2.jpg",
    alt: "Secure Access Control Systems",
    title: "Secure Access Control Systems",
    description: "Intelligent entry management that ensures only authorized personnel get in. Your premises, your rules, ultimate security.",
  },
  {
    src: "/images/carousel/slide3.jpg",
    alt: "Electric Fence, Razor Wire & Automatic Gates",
    title: "Electric Fence, Razor Wire & Automatic Gates",
    description: "Fortify your perimeter with high-security barriers that deter intruders before they even try. Protection that stands strong, day and night.",
  },
  {
    src: "/images/carousel/slide4.jpg",
    alt: "24/7 Active Technician & Service Team",
    title: "24/7 Active Technician & Service Team",
    description: "Round-the-clock expert support that never sleeps, so you can. Fast response, reliable service, complete peace of mind.",
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Contact information
  const salesEmail = "info@msafiricontractors.com"; // Sales email address
  const whatsappNumber = "+256 742415717"; // WhatsApp number in international format

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  // Handle Contact Sales (Email)
  const handleContactSales = () => {
    const subject = encodeURIComponent("Security System Inquiry - MSAFIRI Contractors");
    const body = encodeURIComponent(`Hello MSAFIRI Contractors,

I'm interested in learning more about your security solutions. Please contact me with more information about:

- Products and services
- Pricing and packages
- Installation process

Thank you.`);
    window.location.href = `mailto:${salesEmail}?subject=${subject}&body=${body}`;
  };

  // Handle WhatsApp Chat
  const handleWhatsAppChat = () => {
    const message = encodeURIComponent(`Hello!

I'm interested in your security solutions. Could you please provide me with more information about your products and services?

Thank you.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="relative w-full h-screen">
      {/* Carousel Images */}
      <div className="relative h-full w-full overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 dark:bg-black/60">
                <div className="text-center px-4 max-w-4xl">
                  {/* Premium Security Solutions Badge */}
                  <div className="inline-block mb-6 px-4 py-1.5 bg-amber-500/10 backdrop-blur-sm border border-amber-500/30 rounded-full">
                    <span className="text-xs md:text-sm font-medium text-amber-400 tracking-widest uppercase">
                      Premium Security Solutions
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                    {image.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base lg:text-lg text-white/90 drop-shadow-md max-w-xl mx-auto leading-relaxed mb-8">
                    {image.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    {/* Contact Sales Button - Email */}
                    <button
                      type="button"
                      onClick={handleContactSales}
                      className="group relative isolate flex min-w-44 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/70 hover:bg-amber-400 hover:text-zinc-950 hover:shadow-amber-400/35 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-black active:translate-y-0"
                    >
                      <span className="absolute inset-0 -z-10 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-amber-200 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-zinc-950 group-hover:text-amber-300">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        Contact Sales
                      </span>
                    </button>

                    {/* WhatsApp Us Button */}
                    <button
                      type="button"
                      onClick={handleWhatsAppChat}
                      className="group relative isolate flex min-w-44 items-center justify-center gap-2 overflow-hidden rounded-full border border-[#25D366]/70 bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-white/70 hover:bg-white hover:text-[#128C7E] hover:shadow-[#25D366]/45 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black active:translate-y-0"
                    >
                      <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-[#128C7E] via-[#25D366] to-[#DCF8C6] transition-transform duration-500 group-hover:scale-x-100" />
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#25D366] shadow-lg shadow-black/10 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-[#128C7E] group-hover:text-white">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.023h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64.001 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892a11.82 11.82 0 001.588 5.927L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        WhatsApp Us
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on Mobile, Visible on Tablet and Desktop */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 z-10 hidden sm:flex"
        aria-label="Previous slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 z-10 hidden sm:flex"
        aria-label="Next slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
