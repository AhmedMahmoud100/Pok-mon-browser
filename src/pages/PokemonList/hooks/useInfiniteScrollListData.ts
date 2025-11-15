import { usePokemonInfiniteList } from '../../../services/pokemonApi';

interface UseInfiniteScrollListDataParams {
  itemsPerPage: number;
}

export const useInfiniteScrollListData = ({ itemsPerPage }: UseInfiniteScrollListDataParams) => {
  const {
    data: infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePokemonInfiniteList(itemsPerPage);

  const pokemonList = infiniteData?.pages.flatMap((p) => p.results) || [];

  return {
    pokemonList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    totalCount: pokemonList.length,
  };
};
