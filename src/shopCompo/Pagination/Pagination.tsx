import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  visiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage = 1,
  onPageChange,
  visiblePages = 5,
}) => {
  const [internalPage, setInternalPage] = useState<number>(currentPage);

  // Current page handle karna
  const actualCurrentPage = currentPage || internalPage;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setInternalPage(page);
      onPageChange?.(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Start pages
      const startPages = Math.min(
        Math.max(1, actualCurrentPage - Math.floor(visiblePages / 2)),
        totalPages - visiblePages + 1
      );
      const endPages = Math.min(startPages + visiblePages - 1, totalPages);

      // Always show first page
      if (startPages > 1) {
        pages.push(1);
        if (startPages > 2) {
          pages.push("...");
        }
      }

      // Middle pages
      for (let i = startPages; i <= endPages; i++) {
        pages.push(i);
      }

      // Always show last page
      if (endPages < totalPages) {
        if (endPages < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.paginationContainer}>
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(actualCurrentPage - 1)}
        disabled={actualCurrentPage === 1}
        className={`${styles.pageButton} ${styles.navButton}`}
        aria-label="Previous page"
      >
        <FaChevronLeft className={styles.navIcon} />
      </button>

      {/* Page Number Buttons */}
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className={styles.ellipsis}>
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page as number)}
            className={`${styles.pageButton} ${
              actualCurrentPage === page ? styles.active : ""
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(actualCurrentPage + 1)}
        disabled={actualCurrentPage === totalPages}
        className={`${styles.pageButton} ${styles.navButton}`}
        aria-label="Next page"
      >
        <FaChevronRight className={styles.navIcon} />
      </button>
    </div>
  );
};

export default Pagination;
