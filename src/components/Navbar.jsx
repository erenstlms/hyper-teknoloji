import React from "react";
import { Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { MdDarkMode, MdFavorite, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
// import axios from "axios";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { cartItems, favoriteItems } = useCart();
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpblR5cGUiOiIxIiwiQ3VzdG9tZXJJRCI6IjE1NTk1MSIsIkZpcnN0TmFtZSI6Ikh5cGVyIiwiTGFzdE5hbWUiOiJ2MiIsIkVtYWlsIjoiZGVtb0BoeXBlci5jb20iLCJDdXN0b21lclR5cGVJRCI6IjIiLCJJc1Jlc2VsbGVyIjoiMSIsIklzQVBJIjoiMSIsIlJlZmVyYW5jZUlEIjoiIiwiUmVnaXN0ZXJEYXRlIjoiMy8yMS8yMDI1IDY6MjI6MjQgUE0iLCJleHAiOjIwNTM4MTkzMTksImlzcyI6Imh0dHBzOi8vaHlwZXJ0ZWtub2xvamkuY29tLnRyIiwiYXVkIjoiaHR0cHM6Ly9oeXBlcnRla25vbG9qaS5jb20udHIifQ.vQfpXeAEoCaBlm65JnvBU1_D79LFZ6Ph2OSxS5B-8fU";

  //   axios
  //     .get("https://api.hyperteknoloji.com.tr/Customer/Get", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       setUserData(response?.data?.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // }, []);

  return (
    <>
      <nav
        className={`${
          theme === "dark" ? "border-b border-b-white" : ""
        } bg-gray-900 text-white shadow-lg sticky top-0`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex shrink-0 font-bold">
              <Link to="/">Hyper Teknoloji Frontend Case</Link>
            </div>
            <div className="flex space-x-6 relative">
              <div className="relative cursor-pointer">
                <MdFavorite className="h-6 w-6" />
                {favoriteItems?.length > 0 && (
                  <span className="absolute -top-2 -right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {favoriteItems?.length}
                  </span>
                )}
              </div>
              <div className="relative cursor-pointer">
                <FiShoppingCart className="h-6 w-6" />
                {cartItems?.length > 0 && (
                  <span className="absolute -top-2 -right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {cartItems?.length}
                  </span>
                )}
              </div>
              {theme === "light" ? (
                <MdDarkMode
                  onClick={toggleTheme}
                  className="h-6 w-6 cursor-pointer"
                />
              ) : (
                <MdLightMode
                  onClick={toggleTheme}
                  className="h-6 w-6 cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
