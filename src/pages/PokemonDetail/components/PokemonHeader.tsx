interface PokemonHeaderProps {
  name: string;
  id: number;
}

const PokemonHeader = ({ name, id }: PokemonHeaderProps) => {
  return (
    <div className="gradient-primary p-4 text-center">
      <h1 className="text-4xl font-bold text-inverse mb-2 flex items-center justify-center">
        ⚡{name}
      </h1>
      <p className="text-inverse text-lg">#{id.toString().padStart(4, '0')}</p>
    </div>
  );
};

export default PokemonHeader;
