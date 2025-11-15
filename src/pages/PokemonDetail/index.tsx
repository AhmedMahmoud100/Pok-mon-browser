import { useParams, useNavigate } from 'react-router-dom';
import { usePokemonDetail } from '../../services/pokemonApi';
import PokemonDetailLayout from './components/PokemonDetailLayout';
import PokemonHeader from './components/PokemonHeader';
import PokemonImage from './components/PokemonImage';
import PokemonTypes from './components/PokemonTypes';
import PokemonPhysicalStats from './components/PokemonPhysicalStats';
import PokemonBaseStats from './components/PokemonBaseStats';
import PokemonAbilities from './components/PokemonAbilities';
import PokemonBaseExperience from './components/PokemonBaseExperience';
import { capitalizeFirstLetter, getPokemonImageUrl, getTypeColor } from '../../helpers/pokemon';

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    navigate('/');
    return null;
  }

  const { data: pokemon } = usePokemonDetail(id);

  if (!pokemon) return null;

  const displayName = capitalizeFirstLetter(pokemon.name);
  const imageUrl = getPokemonImageUrl(pokemon.sprites);

  return (
    <PokemonDetailLayout>
      <div className="mt-8 bg-white shadow-sm ove4rflow-hidden rounded-2xl">
        <PokemonHeader name={displayName} id={pokemon.id} />

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          {/* Left Side - Image and Details */}
          <div className="flex flex-col items-center">
            <PokemonImage imageUrl={imageUrl} name={displayName} />
            <PokemonTypes types={pokemon.types} getTypeColor={getTypeColor} />
            <PokemonPhysicalStats height={pokemon.height} weight={pokemon.weight} />
          </div>

          {/* Right Side - Stats */}
          <div>
            <PokemonBaseStats stats={pokemon.stats} />
            <PokemonAbilities abilities={pokemon.abilities} />
            <PokemonBaseExperience baseExperience={pokemon.base_experience} />
          </div>
        </div>
      </div>
    </PokemonDetailLayout>
  );
};

export default PokemonDetail;
