import React from "react";
import FormatCurrency from "../utilities/FormatCurrency";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";

type StoreItemProps = {
  id: string;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
  index: number;
};

const StoreItem = ({
  id,
  title,
  author,
  price,
  imgUrl,
  index,
}: StoreItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center m-2">
      <div className="inline-block">
        <Link to={`/store/${id}`}>
          <img src={imgUrl} className="h-80 object-cover" />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-baseline">
            <span className="text-xs">{title}</span>
            <span className="ml-2 text-slate-400">{FormatCurrency(price)}</span>
          </div>
          <Link
            to={`/store/${id}`}
            className="text-blue-400 transform ease-in hover:text-blue-500"
          >
            See Book
          </Link>
          <CartButton id={id} index={index} />
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
