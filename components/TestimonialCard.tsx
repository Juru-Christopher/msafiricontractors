import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  company: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-zinc-300 dark:text-zinc-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({
  name,
  company,
  role,
  comment,
  avatar,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[350px] bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg className="w-8 h-8 text-zinc-200 dark:text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Comment */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed line-clamp-4">
        {comment}
      </p>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={rating} />
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-700 flex-shrink-0">
          <Image
            src={avatar || "/images/clients/placeholder.jpg"}
            alt={name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
            {name}
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}