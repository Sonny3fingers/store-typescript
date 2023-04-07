import React from "react";

const CartButton = () => {
  return (
    <div className="flex justify-between items-baseline bg-blue-500 cursor-pointer rounded-md p-1 my-1 hover:bg-blue-600 transition ease-in">
      <button className="text-white">Add to Cart</button>
      <div className="flex justify-between bg-white w-1/3 text-lg rounded-md">
        <button className="px-1 border-2 rounded-md">+</button>
        <input
          type="number"
          className="w-5 text-center appearance-none border-none outline-none"
          value={1}
          placeholder="1"
        />
        <button className="px-1 border-2 rounded-md">-</button>
      </div>
    </div>
  );
};

export default CartButton;
