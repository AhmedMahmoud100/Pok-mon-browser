import PokemonCard from '../components/PokemonCard';
import PokemonGrid from '../../../components/PokemonGrid';
import LoadMoreButton from '../../../components/LoadMoreButton';
import PokemonListLayout from '../components/PokemonListLayout';
import { useInfiniteScrollListData } from '../hooks/useInfiniteScrollListData';

const ITEMS_PER_PAGE = 20;
const TOTAL_POKEMON = 151; // Gen 1 Pokemon

const InfiniteScrollView = () => {
  const { pokemonList, fetchNextPage, hasNextPage, isFetchingNextPage, totalCount } =
    useInfiniteScrollListData({
      itemsPerPage: ITEMS_PER_PAGE,
    });

  return (
    <PokemonListLayout backgroundColor="from-[var(--color-bg-infinite-start)] to-[var(--color-bg-infinite-end)]">
      <PokemonGrid>
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </PokemonGrid>

      {hasNextPage && totalCount < TOTAL_POKEMON && (
        <LoadMoreButton onClick={fetchNextPage} isLoading={isFetchingNextPage} />
      )}

      <div className="mt-4 text-center text-(--color-text-secondary)">
        Showing {totalCount} Pokémon
      </div>
    </PokemonListLayout>
  );
};

export default InfiniteScrollView;
