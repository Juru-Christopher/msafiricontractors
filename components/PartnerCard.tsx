import Image from "next/image";

interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  website?: string;
}

export default function PartnerCard({ name, logo, description, website }: PartnerCardProps) {
  return (
    <div className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 hover:-translate-y-1 h-full flex flex-col">
      {/* Logo Container - Fixed height with proper image fitting */}
      <div className="relative h-20 mb-4 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 rounded-xl p-3">
        <div className="relative w-full h-full">
          <Image
            src={logo || "/images/partners/placeholder.jpg"}
            alt={name}
            fill
            className="object-contain dark:invert"
            sizes="(max-width: 640px) 160px, 200px"
          />
        </div>
      </div>

      {/* Partner Name */}
      <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2 text-center truncate">
        {name}
      </h3>

      {/* Description - Flex grow to push link to bottom */}
      <p className="text-xs text-zinc-600 dark:text-zinc-400 text-center leading-relaxed line-clamp-3 flex-grow">
        {description}
      </p>

      {/* Website Link - Always at bottom */}
      {website && (
        <div className="mt-4 text-center pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Visit Website
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}