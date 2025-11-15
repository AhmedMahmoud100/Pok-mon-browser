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
      <h2 className="text-2xl font-bold text-(--color-gray-800) mb-4">Base Stats</h2>
      <div className="space-y-2 mb-6">
        {stats.map((statInfo) => {
          const statName = statInfo.stat.name
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          const maxStat = 255;
          const percentage = (statInfo.base_stat / maxStat) * 100;

          return (
            <div key={statInfo.stat.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-(--color-gray-700)">{statName}</span>
                <span className="text-sm font-bold text-(--color-text-primary)">{statInfo.base_stat}</span>
              </div>
              <div className="w-full bg-(--color-progress-bg) rounded-full h-2.5">
                <div
                  className="bg-(--color-progress-fill) h-2.5 rounded-full transition-all duration-500"
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
