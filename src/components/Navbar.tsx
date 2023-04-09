import React from "react";
import { NavLink } from "react-router-dom";
import IconShoppingCart from "../assets/Cart";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartQuantity } = useCartContext();
  console.log(cartQuantity);
  return (
    <nav className="px-4 shadow-sm text-xl flex items-center gap-2 sticky top-0 bg-white">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/store"}
        className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
      >
        Store
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
      >
        About
      </NavLink>
      <button className="ml-auto w-12 h-12 flex justify-center items-center text-3xl rounded-full border-2 my-2 relative">
        <IconShoppingCart />
        <div className="w-5 h-5 rounded-full bg-red-500 text-white absolute bottom-0 right-0 translate-x-1 translate-y-1 text-sm">
          {cartQuantity}
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
