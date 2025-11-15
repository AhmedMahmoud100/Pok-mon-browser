import { usePokemonList } from '../../../services/pokemonApi';

interface UsePaginationListDataParams {
  itemsPerPage: number;
  page: number;
}

const TOTAL_POKEMON = 151; // Gen 1 Pokemon

export const usePaginationListData = ({ itemsPerPage, page }: UsePaginationListDataParams) => {
  const { data: pokemonData } = usePokemonList(
    itemsPerPage,
    (page - 1) * itemsPerPage
  );

  const totalPages = Math.ceil(TOTAL_POKEMON / itemsPerPage);
  const startPokemon = (page - 1) * itemsPerPage + 1;
  const endPokemon = Math.min(page * itemsPerPage, TOTAL_POKEMON);

  return {
    pokemonList: pokemonData?.results || [],
    totalPages,
    startPokemon,
    endPokemon,
    currentPage: page,
  };
};
