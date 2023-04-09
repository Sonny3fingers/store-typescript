import React from "react";
import FormatCurrency from "../utilities/FormatCurrency";
import CartButton from "./CartButton";

type StoreItemProps = {
  id: number;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, title, author, price, imgUrl }: StoreItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgUrl} className="h-80 object-cover" />
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-baseline">
          <span className="text-xs">{title}</span>
          <span className="ml-2 text-slate-400">{FormatCurrency(price)}</span>
        </div>
        <CartButton id={id} />
      </div>
    </div>
  );
};

export default StoreItem;
