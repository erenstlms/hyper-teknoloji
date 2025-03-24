import React from "react";
import photo from "../../../assets/images/photo.jpg";
import { FiShoppingCart } from "react-icons/fi";
import { MdFavorite, MdFavoriteBorder, MdCheck } from "react-icons/md";
import { toast } from "react-toastify";

function ProductItem({
  id,
  name,
  description,
  price,
  cartItems,
  setCartItems,
  favoriteItems,
  setFavoriteItems,
}) {
  const isInBasket = cartItems?.some((item) => item?.id === id);
  const isFavorite = favoriteItems?.some((item) => item?.id === id);

  const handleCartClick = () => {
    if (isInBasket) {
      setCartItems(cartItems.filter((item) => item?.id !== id));
      toast.success("Ürün sepetten kaldırıldı!");
    } else {
      setCartItems([...cartItems, { id, name, price }]);
      toast.success("Ürün sepete eklendi!");
    }
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setFavoriteItems(favoriteItems.filter((item) => item?.id !== id));
      toast.success("Ürün favorilerden kaldırıldı!");
    } else {
      setFavoriteItems([...favoriteItems, { id, name, price }]);
      toast.success("Ürün favorilere eklendi!");
    }
  };

  return (
    <div className="shadow-xl p-5 space-y-4 bg-white">
      <img src={photo} alt="Logo" className="h-52 w-full" />
      <div className="flex justify-between">
        <span className="font-extrabold">{name}</span>
        <div onClick={handleFavoriteClick} className="cursor-pointer">
          {isFavorite ? (
            <MdFavorite className="h-5 w-5 text-red-600" />
          ) : (
            <MdFavoriteBorder className="h-5 w-5 text-red-600" />
          )}
        </div>
      </div>
      <div className="text-sm text-gray-600">{description}</div>
      <div className="flex justify-between">
        <div className="font-bold text-blue-600">{price}</div>
        <div>
          <button
            type="button"
            onClick={handleCartClick}
            className={`cursor-pointer flex items-center text-white font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 ${
              isInBasket
                ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300"
                : "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300"
            }`}
          >
            {isInBasket ? (
              <MdCheck className="mr-1" />
            ) : (
              <FiShoppingCart className="mr-1" />
            )}
            <span>{isInBasket ? "Sepete Eklendi" : "Sepete Ekle"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
