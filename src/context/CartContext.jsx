import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteItems");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, favoriteItems, setFavoriteItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
