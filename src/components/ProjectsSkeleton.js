export default function ProjectsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="glass-card overflow-hidden rounded-2xl border border-zinc-200/40 dark:border-white/10 flex flex-col justify-between animate-pulse p-0"
        >
          <div>
            {/* Full-Width Aspect 16:9 Image Skeleton Header */}
            <div className="w-full h-52 bg-zinc-200 dark:bg-white/5 rounded-t-2xl m-0 p-0" />

            {/* Isolated Content Padding Skeleton */}
            <div className="p-6 space-y-4">
              {/* Badges Skeleton */}
              <div className="flex justify-between items-center mb-3">
                <div className="w-24 h-5 bg-zinc-200 dark:bg-white/5 rounded-md" />
                <div className="w-16 h-5 bg-zinc-200 dark:bg-white/5 rounded-md" />
              </div>

              {/* Title & Tagline Skeleton */}
              <div className="w-3/4 h-7 bg-zinc-200 dark:bg-white/5 rounded-md mb-3" />
              <div className="w-full h-4 bg-zinc-200 dark:bg-white/5 rounded-md mb-2" />
              <div className="w-5/6 h-4 bg-zinc-200 dark:bg-white/5 rounded-md mb-5" />

              {/* Tech Stack Pills Skeleton */}
              <div className="flex flex-wrap gap-2 mb-2">
                <div className="w-16 h-6 bg-zinc-200 dark:bg-white/5 rounded-full" />
                <div className="w-20 h-6 bg-zinc-200 dark:bg-white/5 rounded-full" />
                <div className="w-14 h-6 bg-zinc-200 dark:bg-white/5 rounded-full" />
              </div>
            </div>
          </div>

          {/* Action Button Skeleton with Isolated Padding */}
          <div className="px-6 pb-6 pt-0">
            <div className="w-full h-11 bg-zinc-200 dark:bg-white/5 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
