import React from "react";
import items from "../data/items.json";
import FormatCurrency from "../utilities/FormatCurrency";
import { useCartContext } from "../context/CartContext";

type ShoppingCartItemProps = {
  id: number;
  quantity: number;
};

const ShoppingCartItem = ({ id, quantity }: ShoppingCartItemProps) => {
  const item = items.find((item) => item.id === id);

  const { removeFromCart } = useCartContext();

  if (item == null) return null;

  return (
    <>
      <div className="flex items-center pt-2">
        <img src={item.imgUrl} alt="img" className="h-20" />
        <div className="flex flex-col px-1">
          <span className="text-sm">{item.title} </span>
          <span>
            {FormatCurrency(item.price)} {quantity > 1 ? `x ${quantity}` : ""}
          </span>
        </div>
        <div className="flex ml-auto justify-center items-center">
          <span className="text-lg">
            {FormatCurrency(item.price * quantity)}
          </span>
          <button
            className="border-2 m-1 p-1 flex justify-center items-center h-5 w-5 hover:bg-slate-200"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartItem;
