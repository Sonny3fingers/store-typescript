import React from "react";

type StoreItemProps = {
  id: number;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, title, author, price, imgUrl }: StoreItemProps) => {
  return (
    <div>
      <img src={imgUrl} className="h-80 object-cover" />
    </div>
  );
};

export default StoreItem;
