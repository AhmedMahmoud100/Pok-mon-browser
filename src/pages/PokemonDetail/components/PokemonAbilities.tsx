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
    <div className="mb-4">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Abilities</h2>
      <div className="flex flex-wrap gap-2">
        {abilities.map((abilityInfo) => (
          <span
            key={abilityInfo.ability.name}
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-xs font-medium capitalize"
          >
            {abilityInfo.ability.name.replace('-', ' ')}
            {abilityInfo.is_hidden && (
              <span className="ml-2 text-xs text-[var(--color-text-secondary)]">(Hidden)</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonAbilities;
