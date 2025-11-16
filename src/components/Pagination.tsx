import { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const maxVisible = isMobile ? 3 : 5;
  const pageNumbers = getPaginationPages(currentPage, totalPages, maxVisible);

  return (
    <div className="flex items-center justify-center gap-1 mt-8 sm:gap-2">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="ghost"
        size="sm"
        className="rounded-sm"
        startIcon={<ChevronLeft />}
      >
        <span className="hidden sm:inline">Previous</span>
      </Button>

      <div className="flex gap-0.5 sm:gap-1">
        {pageNumbers.map((page, index) =>
          page === ELLIPSIS ? (
            <span key={`ellipsis-${index}`} className="px-1 py-1.5 text-base sm:px-2 text-[var(--color-text-secondary)]">
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
        <span className="hidden sm:inline">Next</span>
      </Button>
    </div>
  );
};

export default Pagination;
