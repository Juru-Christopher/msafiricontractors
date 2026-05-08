export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium text-white/70 dark:text-white/50">
          Scroll to explore
        </span>
        <div className="animate-bounce">
          <svg
            className="h-6 w-6 text-white animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}