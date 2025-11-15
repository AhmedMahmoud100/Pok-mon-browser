const PokemonDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-detail)] py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back Button Skeleton */}
        <div className="mb-6 flex items-center gap-2">
          <div className="w-24 h-6 bg-[var(--color-bg-skeleton)] rounded animate-pulse"></div>
        </div>

        {/* Card Skeleton */}
        <div className="bg-[var(--color-bg-card)] rounded-2xl shadow-sm overflow-hidden">
          {/* Header Skeleton */}
          <div className="bg-gradient-to-r from-[var(--color-gradient-skeleton-start)] to-[var(--color-gradient-skeleton-end)] p-8 text-center animate-pulse">
            <div className="h-10 w-48 bg-white/30 rounded mx-auto mb-2"></div>
            <div className="h-6 w-20 bg-white/30 rounded mx-auto"></div>
          </div>

          {/* Main Content Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Left Side Skeleton */}
            <div className="flex flex-col items-center">
              {/* Image Skeleton */}
              <div className="w-full bg-[var(--color-bg-skeleton)] rounded-full aspect-square mb-6 animate-pulse"></div>

              {/* Type Badges Skeleton */}
              <div className="flex gap-2 mb-6">
                <div className="w-16 h-6 bg-[var(--color-bg-skeleton)] rounded-full animate-pulse"></div>
                <div className="w-16 h-6 bg-[var(--color-bg-skeleton)] rounded-full animate-pulse"></div>
              </div>

              {/* Height and Weight Skeleton */}
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="text-center">
                  <div className="h-6 w-16 bg-[var(--color-bg-skeleton)] rounded mx-auto mb-2 animate-pulse"></div>
                  <div className="h-8 w-20 bg-[var(--color-bg-skeleton)] rounded mx-auto animate-pulse"></div>
                </div>
                <div className="text-center">
                  <div className="h-6 w-16 bg-[var(--color-bg-skeleton)] rounded mx-auto mb-2 animate-pulse"></div>
                  <div className="h-8 w-20 bg-[var(--color-bg-skeleton)] rounded mx-auto animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Right Side Skeleton */}
            <div>
              {/* Base Stats Skeleton */}
              <div className="h-8 w-32 bg-[var(--color-bg-skeleton)] rounded mb-4 animate-pulse"></div>
              <div className="space-y-2 mb-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <div className="h-4 w-24 bg-[var(--color-bg-skeleton)] rounded animate-pulse"></div>
                      <div className="h-4 w-8 bg-[var(--color-bg-skeleton)] rounded animate-pulse"></div>
                    </div>
                    <div className="w-full bg-[var(--color-bg-skeleton)] rounded-full h-2.5 animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Abilities Skeleton */}
              <div className="mb-6">
                <div className="h-6 w-24 bg-[var(--color-bg-skeleton)] rounded mb-4 animate-pulse"></div>
                <div className="flex gap-2">
                  <div className="w-24 h-10 bg-[var(--color-bg-skeleton)] rounded-lg animate-pulse"></div>
                  <div className="w-20 h-10 bg-[var(--color-bg-skeleton)] rounded-lg animate-pulse"></div>
                </div>
              </div>

              {/* Base Experience Skeleton */}
              <div>
                <div className="h-6 w-32 bg-[var(--color-bg-skeleton)] rounded mb-4 animate-pulse"></div>
                <div className="h-8 w-24 bg-[var(--color-bg-skeleton)] rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailSkeleton;
