const SkeletonCard = () => {
  return (
    <div className="bg-[--color-bg-card] rounded-lg shadow-md p-4 flex flex-col items-center animate-pulse">
      {/* Image skeleton */}
      <div className="w-full aspect-square flex items-center justify-center mb-3 skeleton-base rounded-lg max-h-32"></div>

      {/* Title skeleton */}
      <div className="h-4 skeleton-base w-3/4 mb-2"></div>

      {/* ID skeleton */}
      <div className="h-3 skeleton-base w-1/4"></div>
    </div>
  );
};

export default SkeletonCard;
