import React from "react";
import items from "../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <div className="flex flex-col justify-center items-center gap-8 sm:flex-row sm:flex-wrap">
        {items.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
