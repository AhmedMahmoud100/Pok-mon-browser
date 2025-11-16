const LoadingState = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="bg-[--color-bg-card] rounded-lg shadow-md p-4 animate-pulse"
        >
          <div className="w-full aspect-square skeleton-base rounded-lg mb-3 max-h-32"></div>
          <div className="h-4 skeleton-base w-3/4 mx-auto mb-2"></div>
          <div className="h-3 skeleton-base w-1/4 mx-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingState;
