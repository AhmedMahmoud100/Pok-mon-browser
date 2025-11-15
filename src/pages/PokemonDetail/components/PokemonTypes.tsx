interface Type {
  type: {
    name: string;
  };
}

interface PokemonTypesProps {
  types: Type[];
  getTypeColor: (type: string) => string;
}

const PokemonTypes = ({ types, getTypeColor }: PokemonTypesProps) => {
  if (types.length === 0) return null;

  return (
    <div className="flex gap-2 justify-center mb-6">
      {types.map((typeInfo) => (
        <span
          key={typeInfo.type.name}
          className={`${getTypeColor(typeInfo.type.name)} text-[var(--color-text-inverse)] px-4 py-1 rounded-full text-sm font-semibold uppercase`}
        >
          {typeInfo.type.name}
        </span>
      ))}
    </div>
  );
};

export default PokemonTypes;
