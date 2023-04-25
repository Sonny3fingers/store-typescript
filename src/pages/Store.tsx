import React from "react";
import items from "../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-8 py-10 sm:flex-row sm:flex-wrap">
        {items.map((item, index) => (
          <StoreItem key={item.id} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Store;
