import LoadingSpinner from '../assets/icons/LoadingSpinner';
import Button from './Button';

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

const LoadMoreButton = ({ onClick, isLoading = false }: LoadMoreButtonProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        <LoadingSpinner />
        <span className="text-[--color-text-secondary] text-sm">Loading more Pokémon...</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-8">
      <Button
        onClick={onClick}
        variant="primary"
        size="md"
        className="rounded-lg"
      >
        Show More
      </Button>
    </div>
  );
};

export default LoadMoreButton;
