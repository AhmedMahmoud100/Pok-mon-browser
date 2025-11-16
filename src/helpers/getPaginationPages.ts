export const ELLIPSIS = -1;

export const getPaginationPages = (
  currentPage: number,
  totalPages: number,
  maxVisible: number = 5
): number[] => {
  const pages: number[] = [];

  if (totalPages <= maxVisible) {
    // Show all pages if total is less than or equal to maxVisible
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const halfVisible = Math.floor(maxVisible / 2);

    // If current page is near the start
    if (currentPage <= maxVisible - halfVisible) {
      for (let i = 1; i <= maxVisible; i++) {
        pages.push(i);
      }
      pages.push(ELLIPSIS);
      pages.push(totalPages);
    }
    // If current page is near the end
    else if (currentPage >= totalPages - (maxVisible - halfVisible - 1)) {
      pages.push(1);
      pages.push(ELLIPSIS);
      for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    // Current page is in the middle
    else {
      pages.push(1);
      pages.push(ELLIPSIS);
      for (let i = currentPage - halfVisible; i <= currentPage + halfVisible; i++) {
        pages.push(i);
      }
      pages.push(ELLIPSIS);
      pages.push(totalPages);
    }
  }

  return pages;
};
