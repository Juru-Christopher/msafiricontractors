import Image from "next/image";

export default function ContactPage() {
  const teamLeaders = [
    {
      name: "Flavia Faith Apili",
      role: "Manager",
      phone: "+256 700 100001",
      email: "info@msafiricontractors.com",
      image: "/images/leaders/placeholder.jpg",
    },
    {
      name: "Paul",
      role: "Lead Technician",
      phone: "+256 770389182",
      email: "paul@msafiricontractors.com",
      image: "/images/leaders/placeholder.jpg",
    },
    {
      name: "Isaac",
      role: "Lead Technician",
      phone: "+256 700 840794",
      email: "seryanzi1994@gmail.com",
      image: "/images/leaders/placeholder.jpg",
    },
    {
      name: "Daniel",
      role: "Lead Technician",
      phone: "+256 743837649",
      email: "scarcedenzol@gmail.com",
      image: "/images/leaders/placeholder.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/carousel/slide1.jpg"
            alt="Contact MSAFIRI"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Get in touch with our team for inquiries, quotes, or support
          </p>
        </div>
      </section>

      {/* Contact Info Cards - Top Row */}
      <section className="bg-white dark:bg-black pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Our Location
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                7 Bukoto-Kisaasi Road
                <br />
                Kampala, Uganda
              </p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Phone
              </h3>
              <a
                href="tel:+256742415717"
                className="text-sm text-amber-600 dark:text-amber-400 hover:underline block"
              >
                +256 742415717
              </a>
              <a
                href="tel:+256742415717"
                className="text-sm text-amber-600 dark:text-amber-400 hover:underline block"
              >
                +256 742415717
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Email
              </h3>
              <a
                href="mailto:info@msafiri.co.ug"
                className="text-sm text-amber-600 dark:text-amber-400 hover:underline block"
              >
                info@msafiricontractors.com
              </a>
              <a
                href="mailto:support@msafiri.co.ug"
                className="text-sm text-amber-600 dark:text-amber-400 hover:underline block"
              >
                support@msafiricontractors.com
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Working Hours
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Mon - Fri: 8AM - 7PM
                <br />
                Sat: 8AM - 2PM
                <br />
                Sun: Closed
              </p>
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 font-medium">
                24/7 Emergency Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="bg-white dark:bg-black py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Contact Form */}
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4">
                We will get back to you within 24 hours.
              </p>
              <form className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="+256 700 000000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Subject *
                  </label>
                  <select
                    className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="cctv">CCTV Installation</option>
                    <option value="access-control">Access Control</option>
                    <option value="electric-fence">Electric Fencing</option>
                    <option value="automatic-gates">Automatic Gates</option>
                    <option value="consultancy">Security Consultancy</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your security needs..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-amber-500 text-black rounded-lg font-semibold text-sm transition-all hover:bg-amber-400 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {/* Why Choose Us (wider) + Follow Us (narrower, vertical icons) */}
              <div className="flex gap-4">
                {/* Why Choose Us - Extended width */}
                <div className="flex-1 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-3">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-2">
                    {[
                      {
                        title: "Licensed & Certified",
                        desc: "Fully accredited professionals",
                      },
                      { title: "Fast Response", desc: "24/7 emergency team" },
                      { title: "Quality Guarantee", desc: "100% satisfaction" },
                      { title: "Free Consultation", desc: "Expert assessment" },
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <svg
                          className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Follow Us - Narrow width, vertical icons */}
                <div className="w-auto bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800 flex-shrink-0">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-3 text-center">
                    Follow Us
                  </h3>

                  <div className="flex flex-col items-center gap-2">
                    {[
                      {
                        name: "Facebook",
                        url: "https://facebook.com/msafiricontractors",
                        icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                      },
                      {
                        name: "TikTok",
                        url: "https://tiktok.com/@msafiri.contracto3",
                        icon: "M19.589 6.686a4.793 4.793 0 01-3.77-4.115V2h-3.193v13.138c0 1.574-1.248 2.855-2.786 2.855-1.539 0-2.787-1.281-2.787-2.855 0-1.573 1.248-2.854 2.787-2.854.294 0 .577.045.844.128V9.168a6.01 6.01 0 00-.844-.06C6.062 9.108 3 12.25 3 16.138 3 20.025 6.062 23.167 9.84 23.167c3.779 0 6.84-3.142 6.84-7.029V9.641a8.325 8.325 0 004.86 1.56V8.01a4.79 4.79 0 01-1.951-.324z",
                      },
                      {
                        name: "Instagram",
                        url: "https://instagram.com/msafiri_contractors_ltd",
                        icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                      },
                      {
                        name: "LinkedIn",
                        url: "https://linkedin.com/company/msafiricontractors",
                        icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                      },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white transition-all"
                        aria-label={social.name}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Team Leaders - 4 in one row */}
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800 flex-1">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-3">
                  Contact Team Leaders
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {teamLeaders.map((leader, i) => (
                    <div key={i} className="text-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-700 mx-auto mb-1.5">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <h4 className="text-xs font-semibold text-zinc-900 dark:text-white truncate">
                        {leader.name}
                      </h4>
                      <p className="text-[10px] text-amber-600 dark:text-amber-400 truncate">
                        {leader.role}
                      </p>
                      <a
                        href={`tel:${leader.phone}`}
                        className="text-[10px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white block transition-colors truncate"
                      >
                        {leader.phone}
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="text-[10px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white block transition-colors truncate"
                      >
                        {leader.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OpenStreetMap */}
      <section className="bg-white dark:bg-black pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 h-80 sm:h-96">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=32.5888604%2C0.3393025%2C32.6088604%2C0.3593025&amp;layer=mapnik&amp;marker=0.3493025%2C32.5988604"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MSAFIRI Contractors Ltd Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
