import React from "react";
import { useCartContext } from "../context/CartContext";

type CartButtonProps = {
  id: number;
};

const CartButton = ({ id }: CartButtonProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useCartContext();
  const quantity = getItemQuantity(id);

  return (
    <div className="flex justify-between items-baseline bg-blue-500 cursor-pointer rounded-md p-1 my-1 hover:bg-blue-600 transition ease-in">
      <button
        className="text-white flex-1"
        onClick={() => {
          increaseCartQuantity(id);
        }}
      >
        Add to Cart
      </button>
      <div className="flex justify-between bg-white w-18 text-lg rounded-md">
        <button
          className="px-1 border-2 rounded-l-md"
          onClick={() => {
            increaseCartQuantity(id);
          }}
        >
          +
        </button>
        <span className="w-6 text-center appearance-none border-none outline-none">
          {quantity}
        </span>
        <button
          className="w-6 px-1 border-2 rounded-r-md"
          onClick={() => {
            decreaseCartQuantity(id);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartButton;
