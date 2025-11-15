export const ELLIPSIS = -1;

export const getPaginationPages = (
  currentPage: number,
  totalPages: number,
  maxVisible: number = 5
): number[] => {
  const pages: number[] = [];

  if (totalPages <= maxVisible) {
    // Show all pages if total is 5 or less
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // If current page is in the first 5 pages
    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push(ELLIPSIS);
      pages.push(totalPages);
    }
    // If current page is in the last 5 pages
    else if (currentPage >= totalPages - 3) {
      pages.push(1);
      pages.push(ELLIPSIS);
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    // Current page is in the middle
    else {
      pages.push(1);
      pages.push(ELLIPSIS);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push(ELLIPSIS);
      pages.push(totalPages);
    }
  }

  return pages;
};
