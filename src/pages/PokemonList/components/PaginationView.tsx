import Pagination from '../../../components/Pagination';

interface PaginationViewProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  startPokemon: number;
  endPokemon: number;
}

const PaginationView = ({
  currentPage,
  totalPages,
  onPageChange,
  startPokemon,
  endPokemon,
}: PaginationViewProps) => {
  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <div className="mt-4 text-center text-gray-600">
        Page {currentPage} of {totalPages} • Pokémon {startPokemon} - {endPokemon}
      </div>
    </>
  );
};

export default PaginationView;
