import { useSearchParams } from 'react-router-dom';
import { ViewMode } from '../enums/viewMode';

export const useViewMode = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const viewParam = searchParams.get('view') || ViewMode.Pagination;
  const view = (viewParam === ViewMode.Infinite ? ViewMode.Infinite : ViewMode.Pagination);
  const page = parseInt(searchParams.get('page') || '1', 10);

  const setView = (mode: ViewMode) => {
    const newParams: Record<string, string> = { view: mode };
    // Preserve page number if it exists and we're in pagination mode
    if (mode === ViewMode.Pagination && page > 1) {
      newParams.page = page.toString();
    }
    setSearchParams(newParams);
  };

  const setPage = (pageNumber: number) => {
    setSearchParams({ view, page: pageNumber.toString() });
  };

  return { view, page, setView, setPage };
};
