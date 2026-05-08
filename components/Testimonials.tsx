"use client";

import { useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Mukasa",
    company: "Acme Corp Ltd",
    role: "Security Manager",
    comment: "Their surveillance systems transformed our security. Crystal clear footage and reliable 24/7 monitoring. Highly recommended!",
    avatar: "/images/clients/placeholder.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Nambi",
    company: "Precision Industries",
    role: "Operations Director",
    comment: "The access control system is flawless. We have complete control over who enters our facility. Professional installation and great support.",
    avatar: "/images/clients/placeholder.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "David Okello",
    company: "SecureHome Uganda",
    role: "CEO",
    comment: "Outstanding electric fence installation! The team was efficient, and the quality exceeded our expectations. Our perimeter is now impenetrable.",
    avatar: "/images/clients/placeholder.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Grace Achieng",
    company: "Green Valley Apartments",
    role: "Property Manager",
    comment: "Their automatic gates and intercom systems are top-notch. Residents feel safer, and managing access has never been easier.",
    avatar: "/images/clients/placeholder.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Peter Wasswa",
    company: "Kampala Logistics",
    role: "Head of Security",
    comment: "Quick response team available anytime. They fixed our alarm system within hours. Excellent customer service and technical expertise.",
    avatar: "/images/clients/placeholder.jpg",
    rating: 4,
  },
  {
    id: 6,
    name: "Faith Tumusiime",
    company: "Riverside Mall",
    role: "General Manager",
    comment: "Complete security solution from one provider. From CCTV to access control, everything works seamlessly. Best investment for our business.",
    avatar: "/images/clients/placeholder.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 py-12 sm:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10 sm:mb-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Trusted by businesses and homes across Uganda
          </p>
        </div>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden px-4"
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              name={testimonial.name}
              company={testimonial.company}
              role={testimonial.role}
              comment={testimonial.comment}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}