import { useState } from "react";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let page = 1; page <= totalPages; page++) {
    pages.push(page);
  }

  return (
    <div className="pagination">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={page === currentPage ? "active-page" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export function PaginationDemo() {
  const items = [];

  for (let number = 1; number <= 22; number++) {
    items.push(`Item ${number}`);
  }

  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);




  const start = (currentPage - 1) * itemsPerPage;
  const visibleItems = items.slice(start, start + itemsPerPage);
  //核心

  return (
    <div>
      <ul>
        {visibleItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Pagination;
