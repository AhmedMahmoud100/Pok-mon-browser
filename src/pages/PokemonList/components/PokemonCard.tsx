import { Link } from 'react-router-dom';
import { extractPokemonId } from '../../../helpers/pokemon';

interface PokemonCardProps {
  name: string;
  url: string;
  imageUrl?: string;
}

const PokemonCard = ({ name, url, imageUrl }: PokemonCardProps) => {
  const pokemonId = extractPokemonId(url);
  const displayImage = imageUrl || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  // Capitalize first letter of name
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Link
      to={`/pokemon/${pokemonId}`}
      className="bg-[--color-bg-card] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center group"
    >
      <div className="w-full aspect-square flex items-center justify-center mb-3 bg-[--color-bg-hover] rounded-lg overflow-hidden max-h-36">
        <img
          src={displayImage}
          alt={displayName}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <h3 className="text-base font-semibold text-gray-800 text-center">
        {displayName}
      </h3>
      <p className="text-xs text-[--color-text-secondary]">#{pokemonId.toString().padStart(3, '0')}</p>
    </Link>
  );
};

export default PokemonCard;
