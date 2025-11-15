interface PokemonHeaderProps {
  name: string;
  id: number;
}

const PokemonHeader = ({ name, id }: PokemonHeaderProps) => {
  return (
    <div className="gradient-primary p-3 text-center">
      <h1 className="text-3xl font-bold text-inverse mb-1 flex items-center justify-center">
        ⚡{name}
      </h1>
      <p className="text-inverse text-lg">#{id.toString().padStart(4, '0')}</p>
    </div>
  );
};

export default PokemonHeader;
