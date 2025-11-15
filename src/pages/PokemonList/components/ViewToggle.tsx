import { useViewMode } from '../hooks/useViewMode';
import { ViewMode } from '../enums/viewMode';
import Button from '../../../components/Button';

const ViewToggle = () => {
  const { view, setView } = useViewMode();

  return (
    <div className="flex justify-center gap-4 mt-6">
      <Button
        isActive={view === ViewMode.Pagination}
        onClick={() => setView(ViewMode.Pagination)}
        variant="secondary"
        size="md"
      >
        Page Controls
      </Button>
      <Button
        isActive={view === ViewMode.Infinite}
        onClick={() => setView(ViewMode.Infinite)}
        variant="secondary"
        size="md"
      >
        Infinite Scroll
      </Button>
    </div>
  );
};

export default ViewToggle;
