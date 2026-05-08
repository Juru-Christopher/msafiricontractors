/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const salesEmail = "sales@msafiricontractors.co.ke";
  const whatsappNumber = "256700000000"; // Replace with your actual WhatsApp number

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
    const message = encodeURIComponent(`Hello MSAFIRI Contractors!

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
                      onClick={handleContactSales}
                      className="group flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white border-2 border-emerald-600 rounded-full font-medium text-sm transition-all duration-300 hover:bg-emerald-700 hover:border-emerald-700"
                    >
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Contact Sales
                    </button>

                    {/* WhatsApp Us Button */}
                    <button
                      onClick={handleWhatsAppChat}
                      className="group flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white border-2 border-[#25D366] rounded-full font-medium text-sm transition-all duration-300 hover:bg-[#20BA5C] hover:border-[#20BA5C]"
                    >
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.588 2.014.896 3.13.897h.002c3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.767-5.765-5.767zm-.27 1.5c2.295 0 4.157 1.863 4.157 4.149 0 2.286-1.862 4.149-4.157 4.149-.873 0-1.678-.263-2.319-.748l-.325-.218-1.176.309.315-1.149-.237-.337c-.505-.737-.771-1.577-.77-2.456.001-2.285 1.863-4.148 4.148-4.148zm-2.324 1.593c-.167.319-.298.862-.41 1.115-.084.19-.153.403-.168.437s.066.263.268.485c.202.222.913.964 1.283 1.298.354.319.613.409.867.409.221 0 .391-.108.586-.274.195-.166.277-.332.429-.55.152-.218.259-.372.411-.375.152-.003.255.013.389.082.128.064.788.373.84.401.052.028.069.054.109.125.04.071.04.334-.019.521-.06.187-.249.442-.368.542-.118.1-.343.205-.493.222-.15.017-.277.032-.492-.02-.216-.052-.719-.264-1.25-.686-.51-.404-1.017-1.086-1.185-1.333-.168-.247-.168-.433-.084-.599.084-.166.109-.249.166-.36.058-.111.087-.166.131-.25.044-.084.022-.166-.011-.249-.033-.083-.152-.399-.249-.611-.092-.203-.186-.519-.266-.713-.07-.165-.152-.151-.203-.149-.051.002-.109.008-.166.016zm-4.937 2.736c-1.079 0-2.102.44-2.822 1.158-.72.718-1.157 1.742-1.157 2.821 0 .894.27 1.639.711 2.226l.234.301-.471 1.723 1.768-.464.293.178c.615.378 1.286.577 1.985.579.001 0 .002 0 .003 0 1.079 0 2.103-.44 2.823-1.159.72-.718 1.158-1.742 1.158-2.821 0-1.079-.44-2.103-1.158-2.823-.72-.72-1.743-1.158-2.823-1.158zm0 1.5c.743 0 1.423.286 1.915.778.492.492.778 1.172.778 1.915 0 .743-.286 1.423-.778 1.915-.493.492-1.172.778-1.915.778-.744 0-1.424-.286-1.916-.778-.492-.492-.778-1.172-.778-1.915 0-.743.286-1.424.778-1.916.492-.492 1.172-.778 1.916-.778zm-1.632 1.53c-.076.145-.169.397-.169.582 0 .185.093.44.169.582.076.142.199.338.338.477.14.14.335.263.477.339.142.076.397.169.582.169.185 0 .44-.093.582-.169.142-.076.338-.199.477-.339.14-.139.263-.335.339-.477.076-.142.169-.397.169-.582 0-.185-.093-.44-.169-.582-.076-.142-.199-.338-.339-.477-.139-.14-.335-.263-.477-.339-.142-.076-.397-.169-.582-.169-.185 0-.44.093-.582.169-.142.076-.338.199-.477.339-.14.139-.263.335-.339.477z"/>
                      </svg>
                      WhatsApp Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 z-10"
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
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 z-10"
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