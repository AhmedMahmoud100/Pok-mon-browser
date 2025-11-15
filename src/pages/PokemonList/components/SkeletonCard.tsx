const SkeletonCard = () => {
  return (
    <div className="bg-[var(--color-bg-card)] rounded-lg shadow-md p-4 flex flex-col items-center animate-pulse">
      {/* Image skeleton */}
      <div className="w-full aspect-square flex items-center justify-center mb-3 bg-[var(--color-bg-skeleton)] rounded-lg max-h-32"></div>

      {/* Title skeleton */}
      <div className="h-4 bg-[var(--color-bg-skeleton)] rounded w-3/4 mb-2"></div>

      {/* ID skeleton */}
      <div className="h-3 bg-[var(--color-bg-skeleton)] rounded w-1/4"></div>
    </div>
  );
};

export default SkeletonCard;
