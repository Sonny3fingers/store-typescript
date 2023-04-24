import React, { useEffect, useState, useRef } from "react";
import { useCartContext } from "../context/CartContext";

type CartButtonProps = {
  id: number;
  index: number;
};

const CartButton = ({ id, index }: CartButtonProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    clickedIndexHandler,
    clickedIndex,
  } = useCartContext();
  const quantity = getItemQuantity(id);
  const addToCartBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationFinishedHandler = () => {
      clickedIndexHandler();
    };
    if (addToCartBtnRef.current) {
      addToCartBtnRef.current.addEventListener(
        "animationend",
        animationFinishedHandler
      );
    }
    return () => {
      if (addToCartBtnRef.current) {
        addToCartBtnRef.current.removeEventListener(
          "animationend",
          animationFinishedHandler
        );
      }
    };
  }, [clickedIndex]);

  return (
    <div
      ref={addToCartBtnRef}
      className={`flex justify-between items-baseline bg-blue-500 cursor-pointer rounded-md p-1 my-1 hover:bg-blue-600 transition ease-in ${
        index === clickedIndex ? "animate-ping" : ""
      }`}
    >
      <button
        className="text-white flex-1"
        onClick={() => {
          increaseCartQuantity(id, index);
        }}
      >
        Add to Cart
      </button>
      <div className="flex justify-between bg-white w-18 text-lg rounded-md">
        <button
          className="px-1 border-2 rounded-l-md"
          onClick={() => {
            increaseCartQuantity(id, index);
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
            decreaseCartQuantity(id, index);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartButton;
