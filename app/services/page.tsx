/* eslint-disable react-hooks/immutability */
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  {
    id: "cctv",
    title: "CCTV Surveillance",
    subtitle: "Smart monitoring for every site",
    description:
      "Complete CCTV systems with HD cameras, remote monitoring, and intelligent recording for round-the-clock security.",
    details:
      "Our CCTV solutions include 4K cameras, night vision, motion detection, and cloud storage. Monitor your property from anywhere 24/7.",
    image: "/images/services/placeholder.jpg",
  },
  {
    id: "access-control",
    title: "Access Control",
    subtitle: "Trusted entry systems",
    description:
      "Biometric readers, card access, and smart locks to keep your people in and unauthorized visitors out.",
    details:
      "Choose from fingerprint scanners, RFID cards, mobile credentials, or facial recognition. Full audit trails and remote management included.",
    image: "/images/services/placeholder.jpg",
  },
  {
    id: "video-intercom",
    title: "Video Intercom",
    subtitle: "Secure communication",
    description:
      "Modern door entry systems with HD video, mobile alerts, and safe visitor screening at every entrance.",
    details:
      "See and speak with visitors before granting access. Mobile app integration allows you to manage entries from anywhere.",
    image: "/images/services/placeholder.jpg",
  },
  {
    id: "electric-fencing",
    title: "Electric Fencing",
    subtitle: "Perimeter protection",
    description:
      "Durable fence barriers with electric deterrents for comprehensive site protection in remote and sensitive areas.",
    details:
      "High-voltage, low-impedance energizers with alarm notifications. Meets all safety standards while deterring intruders effectively.",
    image: "/images/services/placeholder.jpg",
  },
  {
    id: "razor-wires",
    title: "Razor Wires",
    subtitle: "High-security barriers",
    description:
      "Razor wire installations providing physical deterrence and anti-climb protection for perimeters and rooftops.",
    details:
      "Galvanized steel concertina razor wire. Available in various coil diameters for wall toppling, roof protection, and perimeter fencing.",
    image: "/images/services/placeholder.jpg",
  },
  {
    id: "automatic-gates",
    title: "Automatic Gates",
    subtitle: "Smooth secure access",
    description:
      "Automated gate systems for residential, commercial and industrial properties with remote control and safety sensors.",
    details:
      "Swing, slide, or barrier gates with solar or AC power options. Includes remote controls, loop detectors, and safety photocells.",
    image: "/images/services/placeholder.jpg",
  },
  {
    id: "security-consultancy",
    title: "Security Consultancy",
    subtitle: "Risk-led planning",
    description:
      "Site surveys, audit reports and resilience planning to strengthen your security strategy from the ground up.",
    details:
      "Our certified experts assess vulnerabilities, design layered protection strategies, and help you achieve compliance with industry regulations.",
    image: "/images/services/placeholder.jpg",
  },
  {
    id: "installation-maintenance",
    title: "Installation & Maintenance",
    subtitle: "24/7 system support",
    description:
      "Professional installation, ongoing maintenance and rapid response to ensure your security never sleeps.",
    details:
      "Scheduled preventive maintenance, emergency repairs, firmware updates, and 24/7 technical support to keep your systems operational.",
    image: "/images/services/placeholder.jpg",
  },
];

export default function ServicesPage() {
  const router = useRouter();

  useEffect(() => {
    // Handle hash navigation when page loads
    if (window.location.hash) {
      const hash = window.location.hash.slice(1);
      scrollToSection(hash);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      if (window.location.hash) {
        const hash = window.location.hash.slice(1);
        scrollToSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80; // Adjust based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* Hero Section - Added id="hero" for navbar linking */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white scroll-mt-20"
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.36em] text-emerald-300">
              Our Services
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Security services designed for modern businesses.
            </h1>
            <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">
              From intelligent CCTV and access control to perimeter protection
              and consultancy, Msafiri delivers tailored security systems built
              for reliability, performance and peace of mind.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
              >
                Talk to an expert
              </Link>
              <button
                onClick={() => scrollToSection("how-we-work")}
                className="inline-flex items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                See our process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-20 ${
            index % 2 === 0
              ? "bg-white dark:bg-black"
              : "bg-zinc-50 dark:bg-zinc-950"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            {/* Image on top - full width within container */}
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl shadow-xl mb-8 md:mb-10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                    {service.subtitle}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {service.title}
                </h2>
              </div>
            </div>

            {/* Details and Inquire Now button */}
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {service.description}
                </p>
                <div className="mt-6 p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-500">
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                    What&apos;s included
                  </p>
                  <p className="mt-2 text-zinc-700 dark:text-zinc-200">
                    {service.details}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center space-y-4">
                <p className="text-zinc-500 dark:text-zinc-400">
                  Ready to secure your property with our {service.title.toLowerCase()}{" "}
                  solution?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-600 hover:shadow-lg"
                >
                  Inquire Now
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Optional divider between services */}
          {index < services.length - 1 && (
            <div className="mx-auto max-w-7xl px-4">
              <hr className="border-zinc-200 dark:border-zinc-800" />
            </div>
          )}
        </section>
      ))}

      {/* How We Work Section */}
      <section
        id="how-we-work"
        className="bg-zinc-950 text-white scroll-mt-20"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-400">
                How we work
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                A clear security process, from concept to care.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Our delivery model keeps every project moving forward with fast
                site scans, detailed design, and ongoing support that protects
                your investment long after installation.
              </p>
            </div>
            <div className="space-y-6 rounded-[2rem] border border-zinc-800 bg-zinc-900/90 p-8 shadow-xl shadow-black/20">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  detail:
                    "Site survey, threat assessment and technology recommendation.",
                },
                {
                  step: "02",
                  title: "Design",
                  detail:
                    "Custom layout, system architecture and user-friendly controls.",
                },
                {
                  step: "03",
                  title: "Delivery",
                  detail:
                    "Installation, testing and staff handover with performance checks.",
                },
                {
                  step: "04",
                  title: "Care",
                  detail:
                    "Maintenance plans, remote assistance and periodic review.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 rounded-[1.5rem] border border-zinc-800 bg-zinc-950 p-6 transition hover:border-emerald-400/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-400 text-zinc-950 font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-8 shadow-lg shadow-zinc-200/30 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">
              Client Promise
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Protecting every detail.
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              We design every project with redundancy, easy operation and strong
              reporting so you get a security system that works for your team.
            </p>
          </div>
          <div className="lg:col-span-2 rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-8 shadow-lg shadow-zinc-200/30 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/10">
            <h3 className="text-sm uppercase tracking-[0.3em] text-emerald-500">
              Get started
            </h3>
            <p className="mt-4 text-3xl font-bold tracking-tight">
              Ready to secure your property?
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Let&apos;s build a security solution that fits your business, site
              and budget. We&apos;ll help you choose the right systems and
              install them with minimal disruption.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/contact"
                className="rounded-3xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400 text-center"
              >
                Request a quote
              </Link>
              <Link
                href="/about"
                className="rounded-3xl border border-zinc-300 px-6 py-4 text-sm font-semibold text-zinc-950 transition hover:border-emerald-400 hover:text-emerald-500 dark:border-zinc-700 text-center"
              >
                Learn about our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}