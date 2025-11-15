import ChevronLeft from '../assets/icons/ChevronLeft';
import ChevronRight from '../assets/icons/ChevronRight';
import Button from './Button';
import { getPaginationPages, ELLIPSIS } from '../helpers/getPaginationPages';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = getPaginationPages(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="ghost"
        size="sm"
        className="rounded-sm"
        startIcon={<ChevronLeft />}
      >
        Previous
      </Button>

      <div className="flex gap-1">
        {pageNumbers.map((page, index) =>
          page === ELLIPSIS ? (
            <span key={`ellipsis-${index}`} className="px-2 py-1.5 text-base text-(--color-text-muted)">
              ...
            </span>
          ) : (
            <Button
              key={page}
              onClick={() => onPageChange(page)}
              isActive={currentPage === page}
              variant="ghost"
              size="sm"
              className="rounded-sm"
            >
              {page}
            </Button>
          )
        )}
      </div>

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="ghost"
        size="sm"
        className="rounded-sm"
        endIcon={<ChevronRight />}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
