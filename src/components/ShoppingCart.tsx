import React from "react";
import { useCartContext } from "../context/CartContext";
import CloseButton from "./CloseButton";
import ShoppingCartItem from "./ShoppingCartItem";
import FormatCurrency from "../utilities/FormatCurrency";
import items from "../data/items.json";

const ShoppingCart = () => {
  const { cartItems } = useCartContext();
  return (
    <div className="w-full h-full">
      <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-black animate-fadeIn"></div>
      <div className="p-4 w-11/12 sm:w-3/4 h-full bg-white z-50 fixed top-0 right-0 translate-x-full animate-slideIn">
        <div className="flex justify-between items-center text-2xl mb-2">
          <h2>Cart</h2>
          <CloseButton />
        </div>
        <div>
          {cartItems.map((item) => (
            <ShoppingCartItem key={item.id} {...item} />
          ))}
          <div className="flex justify-end font-semibold text-xl">
            Total:{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = items.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
