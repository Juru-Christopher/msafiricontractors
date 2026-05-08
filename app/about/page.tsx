import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/carousel/slide1.jpg"
            alt="About MSAFIRI"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About MSAFIRI Contractors Ltd
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Your trusted partner in premium security solutions across Uganda
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white dark:bg-black py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                Who We Are
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                MSAFIRI Contractors Ltd is a leading security solutions provider in Uganda, dedicated to protecting homes, businesses, and institutions with cutting-edge technology and reliable service.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Founded with a vision to make security accessible and effective, we have grown into a trusted name in the industry, serving over 5,400 clients across the country.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our team of certified technicians and security experts works around the clock to ensure your safety and peace of mind.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="/images/carousel/slide2.jpg"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Our Mission</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                To provide reliable, innovative, and affordable security solutions that protect what matters most to our clients, delivered with integrity and excellence.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Our Vision</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                To become Uganda&apos;s most trusted security partner, setting the standard for quality, innovation, and customer satisfaction in the security industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white dark:bg-black py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">Our Core Values</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", description: "We uphold the highest standards of honesty and transparency in all our dealings.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Innovation", description: "We embrace cutting-edge technology to deliver the best security solutions.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { title: "Reliability", description: "Our clients can count on us 24/7 for dependable security and support.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Excellence", description: "We strive for perfection in every installation and service we deliver.", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
            ].map((value, index) => (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Property?</h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today for a free consultation and security assessment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 text-black rounded-full font-semibold text-base transition-all hover:bg-amber-400"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}