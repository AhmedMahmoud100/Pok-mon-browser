interface Ability {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

interface PokemonAbilitiesProps {
  abilities: Ability[];
}

const PokemonAbilities = ({ abilities }: PokemonAbilitiesProps) => {
  if (abilities.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-[var(--color-gray-800)] mb-4">Abilities</h2>
      <div className="flex flex-wrap gap-2">
        {abilities.map((abilityInfo) => (
          <span
            key={abilityInfo.ability.name}
            className="bg-[var(--color-gray-100)] text-[var(--color-gray-800)] px-4 py-2 rounded-lg text-sm font-medium capitalize"
          >
            {abilityInfo.ability.name.replace('-', ' ')}
            {abilityInfo.is_hidden && (
              <span className="ml-2 text-xs text-[var(--color-text-muted)]">(Hidden)</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonAbilities;
