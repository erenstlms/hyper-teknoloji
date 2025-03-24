import React from "react";

function Pagination({ currentPage, totalPages, paginate }) {
  return (
    <>
      <nav className="flex justify-center py-8">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            >
              Önceki
            </a>
          </li>

          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === index + 1
                    ? "text-red-600 border-blue-300 bg-blue-50"
                    : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
            >
              Sonraki
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
