interface PokemonPhysicalStatsProps {
  height: number;
  weight: number;
}

const PokemonPhysicalStats = ({ height, weight }: PokemonPhysicalStatsProps) => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 mt-2">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <svg className="w-5 h-5 text-(--color-text-muted) mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <span className="text-sm text-(--color-text-muted) font-medium">Height</span>
        </div>
        <p className="text-lg font-bold text-(--color-gray-800)">{(height / 10).toFixed(1)} m</p>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <svg className="w-5 h-5 text-(--color-text-muted) mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
          <span className="text-sm text-(--color-text-muted) font-medium">Weight</span>
        </div>
        <p className="text-lg font-bold text-(--color-gray-800)">{(weight / 10).toFixed(1)} kg</p>
      </div>
    </div>
  );
};

export default PokemonPhysicalStats;
