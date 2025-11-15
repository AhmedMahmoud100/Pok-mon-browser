interface PokemonImageProps {
  imageUrl: string;
  name: string;
}

const PokemonImage = ({ imageUrl, name }: PokemonImageProps) => {
  return (
    <div className="w-full bg-[var(--color-bg-image)] rounded-full p-6 mb-6 flex items-center justify-center aspect-square">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default PokemonImage;
