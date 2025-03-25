import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ProductItem from "./components/ProductItem";
import { useCart } from "../../context/CartContext";
import Pagination from "../../components/Pagination";
import mockData from "../../../mockData.json";
import RightSideSheet from "@/components/RightSideSheet";

function ProductList() {
  const { theme } = useTheme();
  const { cartItems, setCartItems, favoriteItems, setFavoriteItems } =
    useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockData?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math?.ceil(mockData?.length / itemsPerPage);

  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : ""}`}>
      <div className="max-w-7xl mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {currentItems?.map((product) => (
            <ProductItem
              key={product?.id}
              id={product?.id}
              name={product?.product_name}
              description={product?.description}
              price={product?.price}
              cartItems={cartItems}
              setCartItems={setCartItems}
              favoriteItems={favoriteItems}
              setFavoriteItems={setFavoriteItems}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default ProductList;
