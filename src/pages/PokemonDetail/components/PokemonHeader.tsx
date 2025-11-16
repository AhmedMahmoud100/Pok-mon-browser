interface PokemonHeaderProps {
  name: string;
  id: number;
}

const PokemonHeader = ({ name, id }: PokemonHeaderProps) => {
  const code = id.toString().padStart(4, '0')

  return (
    <header className="flex flex-col items-center px-3 py-4 text-center gradient-primary rounded-t-2xl">
      <div className="flex">
        <span className="text-3xl">⚡</span>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-white">
            {name}
          </h1>
          <p className="text-base text-white" aria-label={`Pokemon number ${id}`}>
            #{code}
          </p>
        </div>
      </div>
    </header>
  );
};

export default PokemonHeader;
