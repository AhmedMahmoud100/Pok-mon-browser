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
    <div className="flex gap-2 justify-center mb-3">
      {types.map((typeInfo) => (
        <span
          key={typeInfo.type.name}
          className={`${getTypeColor(typeInfo.type.name)} text-white px-4 py-1 rounded-full text-xs font-semibold uppercase`}
        >
          {typeInfo.type.name}
        </span>
      ))}
    </div>
  );
};

export default PokemonTypes;
