interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonBaseStatsProps {
  stats: Stat[];
}

const PokemonBaseStats = ({ stats }: PokemonBaseStatsProps) => {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-800 mb-3">Base Stats</h2>
      <div className="mb-4 space-y-2">
        {stats.map((statInfo) => {
          const statName = statInfo.stat.name
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          const maxStat = 255;
          const percentage = (statInfo.base_stat / maxStat) * 100;

          return (
            <div key={statInfo.stat.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-gray-700">{statName}</span>
                <span className="text-sm font-bold text-[var(--color-text-primary)]">{statInfo.base_stat}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[var(--color-btn-primary)] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PokemonBaseStats;
