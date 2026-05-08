/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface NavLink {
  href: string;
  label: string;
  dropdown?: { href: string; label: string; icon: React.ReactNode; description?: string }[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      {
        href: "/services#hero",
        label: "All Services",
        description: "View all security solutions",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ),
      },
      {
        href: "/services#cctv",
        label: "CCTV Surveillance",
        description: "HD cameras & monitoring",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        ),
      },
      {
        href: "/services#access-control",
        label: "Access Control",
        description: "Biometric & card systems",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        ),
      },
      {
        href: "/services#video-intercom",
        label: "Video Intercom",
        description: "Smart communication",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        href: "/services#electric-fencing",
        label: "Electric Fencing",
        description: "Perimeter protection",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        href: "/services#razor-wires",
        label: "Razor Wires",
        description: "High-security barriers",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        href: "/services#automatic-gates",
        label: "Automatic Gates",
        description: "Motorized entry systems",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        href: "/services#security-consultancy",
        label: "Security Consultancy",
        description: "Expert risk assessment",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
      },
      {
        href: "/services#installation-maintenance",
        label: "Installation & Maintenance",
        description: "24/7 support & service",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    href: "/products",
    label: "Products",
    dropdown: [
      {
        href: "/products",
        label: "All Products",
        description: "Browse entire catalog",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ),
      },
      {
        href: "/products?category=cctv",
        label: "CCTV Cameras",
        description: "HD surveillance cameras",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        ),
      },
      {
        href: "/products?category=access-control",
        label: "Access Control",
        description: "Biometric & card readers",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        ),
      },
      {
        href: "/products?category=electric-fence",
        label: "Electric Fencing",
        description: "Energizers & razor wire",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        href: "/products?category=automatic-gates",
        label: "Automatic Gates",
        description: "Motors & remotes",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        href: "/products?category=alarms",
        label: "Alarm Systems",
        description: "Wireless & wired alarms",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        href: "/products?category=intercom",
        label: "Video Intercom",
        description: "Smart communication",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
      },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Handle service link clicks
const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  
  if (window.location.pathname === "/services") {
    // Already on services page, update hash and trigger hashchange event
    window.history.pushState({}, "", href);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    // Navigate to services page with hash
    window.location.href = href;
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const closeDropdownTimeout = useRef<number | null>(null);

  const clearCloseDropdownTimeout = () => {
    if (closeDropdownTimeout.current) {
      window.clearTimeout(closeDropdownTimeout.current);
      closeDropdownTimeout.current = null;
    }
  };

  const openDropdownMenu = (label: string) => {
    clearCloseDropdownTimeout();
    setOpenDropdown(label);
  };

  const scheduleCloseDropdown = () => {
    clearCloseDropdownTimeout();
    closeDropdownTimeout.current = window.setTimeout(() => setOpenDropdown(null), 100);
  };

  // Get current product category from URL
  const currentCategory = searchParams.get("category");

  // Helper function to check if a product link is active
  const isProductActive = (href: string) => {
    if (pathname !== "/products") return false;
    
    if (href === "/products") {
      return !currentCategory;
    }
    
    const linkCategory = href.split("=")[1];
    return currentCategory === linkCategory;
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-black/[.08] bg-white dark:border-white/[.145] dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - MSAFIRI */}
          <Link href="/" className="flex flex-col items-start leading-tight">
            <span className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
              MSAFIRI
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-zinc-500 dark:text-zinc-400 tracking-[0.2em] uppercase -mt-1">
              Contractors Ltd
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && openDropdownMenu(link.label)}
                onMouseLeave={() => link.dropdown && scheduleCloseDropdown()}
              >
                {link.dropdown ? (
                  <>
                    <button
                      type="button"
                      className={`cursor-pointer flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        pathname.startsWith(link.href)
                          ? "bg-black/[.08] text-black dark:bg-white/[.145] dark:text-zinc-50"
                          : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 mt-1 w-[520px] rounded-2xl border border-black/[.08] bg-white p-3 shadow-xl dark:border-white/[.145] dark:bg-zinc-900 z-50"
                        onMouseEnter={() => openDropdownMenu(link.label)}
                        onMouseLeave={() => scheduleCloseDropdown()}
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {link.dropdown.map((item) => {
                            // Check if this is a products dropdown item
                            const isProductsDropdown = link.label === "Products";
                            const isActive = isProductsDropdown 
                              ? isProductActive(item.href)
                              : pathname === "/services" && window.location.hash === item.href.split("#")[1];
                            
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                  if (link.label === "Services") {
                                    handleServiceClick(e, item.href);
                                  }
                                  setOpenDropdown(null);
                                }}
                                className={`group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all cursor-pointer ${
                                  isActive
                                    ? "bg-emerald-50 dark:bg-emerald-950/30 border-l-2 border-emerald-500"
                                    : item.label === "All Products" || item.label === "All Services"
                                    ? "border-l-2 border-transparent hover:border-emerald-200 dark:hover:border-emerald-800"
                                    : "hover:bg-zinc-50 dark:hover:bg-zinc-800"
                                }`}
                              >
                                <span className={`flex-shrink-0 mt-0.5 transition-colors ${
                                  isActive
                                    ? "text-emerald-600 dark:text-emerald-400"
                                    : "text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white"
                                }`}>
                                  {item.icon}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className={`text-sm font-medium transition-colors ${
                                      isActive
                                        ? "text-emerald-700 dark:text-emerald-300"
                                        : "text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                                    }`}>
                                      {item.label}
                                    </span>
                                    <svg
                                      className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                  {item.description && (
                                    <p className={`text-xs mt-0.5 ${
                                      isActive
                                        ? "text-emerald-600 dark:text-emerald-400"
                                        : "text-zinc-500 dark:text-zinc-400"
                                    }`}>
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-black/[.08] text-black dark:bg-white/[.145] dark:text-zinc-50"
                        : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-black/[.04] hover:text-black dark:text-zinc-400 dark:hover:bg-white/[.145] dark:hover:text-zinc-50"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-full p-2 text-zinc-600 transition-colors hover:bg-black/[.04] hover:text-black dark:text-zinc-400 dark:hover:bg-white/[.145] dark:hover:text-zinc-50 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="border-t border-black/[.08] py-4 dark:border-white/[.145] lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className={`flex w-full items-center justify-between rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          pathname.startsWith(link.href)
                            ? "bg-black/[.08] text-black dark:bg-white/[.145] dark:text-zinc-50"
                            : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
                        }`}
                      >
                        {link.label}
                        <svg className={`h-4 w-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {link.dropdown.map((item) => {
                            const isProductsDropdown = link.label === "Products";
                            const isActive = isProductsDropdown 
                              ? isProductActive(item.href)
                              : pathname === "/services" && window.location.hash === item.href.split("#")[1];
                            
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                  if (link.label === "Services") {
                                    handleServiceClick(e, item.href);
                                  }
                                  setOpenDropdown(null);
                                  setIsMobileMenuOpen(false);
                                }}
                                className={`flex items-center gap-3 rounded-full px-4 py-2 text-sm transition-colors cursor-pointer ${
                                  isActive
                                    ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300"
                                    : "text-zinc-600 hover:bg-black/[.04] hover:text-black dark:text-zinc-400 dark:hover:bg-white/[.145] dark:hover:text-zinc-50"
                                }`}
                              >
                                <span className={`flex-shrink-0 ${
                                  isActive
                                    ? "text-emerald-600 dark:text-emerald-400"
                                    : ""
                                }`}>
                                  {item.icon}
                                </span>
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-black/[.08] text-black dark:bg-white/[.145] dark:text-zinc-50"
                          : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}