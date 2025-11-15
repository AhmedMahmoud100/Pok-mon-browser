import { useViewMode } from './hooks/useViewMode';
import { ViewMode } from './enums/viewMode';
import PaginationView from './views/PaginationView';
import InfiniteScrollView from './views/InfiniteScrollView';

const PokemonList = () => {
  const { view } = useViewMode();

  if (view === ViewMode.Pagination) return <PaginationView />;

  return <InfiniteScrollView />;
};

export default PokemonList;
