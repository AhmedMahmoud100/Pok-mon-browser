interface PokemonImageProps {
  imageUrl: string;
  name: string;
}

const PokemonImage = ({ imageUrl, name }: PokemonImageProps) => {
  return (
    <div className="w-full bg-(--color-bg-image) rounded-full p-3 mb-6 flex items-center justify-center aspect-square max-h-[280px] max-w-[280px]">
      <img
        src={imageUrl}
        alt={name}
        className="object-contain w-full h-full"
      />
    </div>
  );
};

export default PokemonImage;
