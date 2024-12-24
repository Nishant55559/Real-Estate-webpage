import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button
        className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`pagination-number ${
            currentPage === index + 1 ? "active" : ""
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`pagination-button ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
