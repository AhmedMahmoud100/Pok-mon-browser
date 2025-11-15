export const extractPokemonId = (url: string): number => {
  const parts = url.split('/').filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
};

export const capitalizeFirstLetter = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const getPokemonImageUrl = (sprites: any): string => {
  return sprites.other?.['official-artwork']?.front_default || sprites.front_default;
};

export const getTypeColor = (type: string): string => {
  const colors: Record<string, string> = {
    fire: 'bg-orange-500',
    water: 'bg-blue-500',
    grass: 'bg-green-500',
    electric: 'bg-yellow-400',
    psychic: 'bg-pink-500',
    ice: 'bg-cyan-400',
    dragon: 'bg-indigo-600',
    dark: 'bg-gray-800',
    fairy: 'bg-pink-300',
    normal: 'bg-gray-400',
    fighting: 'bg-red-600',
    flying: 'bg-indigo-400',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    rock: 'bg-yellow-700',
    bug: 'bg-green-600',
    ghost: 'bg-purple-700',
    steel: 'bg-gray-500',
  };
  return colors[type] || 'bg-gray-400';
};
