import { ViewMode } from '../enums/viewMode';
import { useViewMode } from '../hooks/useViewMode';
import ViewToggle from './ViewToggle';

const Header = () => {
  const { view } = useViewMode();

  return (
    <header className="mb-8 text-center">
      <h1 className="flex items-center justify-center mb-2 text-4xl font-bold text-[var(--color-text-primary)] gap-1">
        <span className="text-[var(--color-accent)]">⚡</span>
        Pokédex
      </h1>
      <p className="text-[var(--color-text-secondary)]">
        {view === ViewMode.Pagination
          ? 'Discover and explore Pokémon with page controls'
          : 'Discover and explore Pokémon with show more'}
      </p>

      <ViewToggle />
    </header>
  );
};

export default Header;
