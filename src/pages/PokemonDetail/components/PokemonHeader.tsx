interface PokemonHeaderProps {
  name: string;
  id: number;
}

const PokemonHeader = ({ name, id }: PokemonHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] p-8 text-center">
      <h1 className="text-4xl font-bold text-[var(--color-text-inverse)] mb-2 flex items-center justify-center gap-2">
        ⚡ {name}
      </h1>
      <p className="text-[var(--color-text-inverse)] text-lg">#{id.toString().padStart(4, '0')}</p>
    </div>
  );
};

export default PokemonHeader;
