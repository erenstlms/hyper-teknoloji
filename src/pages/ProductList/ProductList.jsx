import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ProductItem from "./components/ProductItem";
import { useCart } from "../../context/CartContext";
import Pagination from "../../components/Pagination";

const mockData = [
  {
    id: 1,
    product_name: "alcatel",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$122.05",
  },
  {
    id: 2,
    product_name: "ZTE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$234.19",
  },
  {
    id: 3,
    product_name: "Toshiba",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$286.96",
  },
  {
    id: 4,
    product_name: "Eten",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$145.88",
  },
  {
    id: 5,
    product_name: "Pantech",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$760.46",
  },
  {
    id: 6,
    product_name: "Siemens",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$933.13",
  },
  {
    id: 7,
    product_name: "Maxwest",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$379.67",
  },
  {
    id: 8,
    product_name: "Acer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$343.67",
  },
  {
    id: 9,
    product_name: "Sagem",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$774.14",
  },
  {
    id: 10,
    product_name: "LG",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$753.33",
  },
  {
    id: 11,
    product_name: "Tecno",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$975.50",
  },
  {
    id: 12,
    product_name: "Motorola",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: "$348.54",
  },
];

function ProductList() {
  const { theme } = useTheme();
  const { cartItems, setCartItems, favoriteItems, setFavoriteItems } =
    useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  console.log("currentPage", currentPage);

  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : ""}`}>
      <div className="max-w-7xl mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {currentItems?.map((item) => (
            <ProductItem
              key={item?.id}
              id={item?.id}
              name={item?.product_name}
              description={item?.description}
              price={item?.price}
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
