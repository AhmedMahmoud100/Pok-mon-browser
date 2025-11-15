import PokemonCard from '../components/PokemonCard';
import PokemonGrid from '../../../components/PokemonGrid';
import Pagination from '../../../components/Pagination';
import PokemonListLayout from '../components/PokemonListLayout';
import { usePaginationListData } from '../hooks/usePaginationListData';
import { useViewMode } from '../hooks/useViewMode';

const ITEMS_PER_PAGE = 20;

const PaginationView = () => {
  const { page, setPage } = useViewMode();

  const { pokemonList, totalPages, startPokemon, endPokemon, currentPage } =
    usePaginationListData({
      itemsPerPage: ITEMS_PER_PAGE,
      page,
    });

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PokemonListLayout backgroundColor="from-[var(--color-bg-pagination-start)] to-[var(--color-bg-pagination-end)]">
      <PokemonGrid>
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </PokemonGrid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <div className="mt-4 text-center text-[var(--color-text-secondary)]">
        {`Page ${currentPage} of ${totalPages} (${pokemonList.length} Pokémon shown)`}
      </div>
    </PokemonListLayout>
  );
};

export default PaginationView;
