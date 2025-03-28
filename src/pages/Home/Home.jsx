import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <Link to="/product-list">
          <button
            type="button"
            className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Ürün Listesini Gör
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
