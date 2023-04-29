import React, { useState, ReactNode, createContext, useContext } from "react";
import ShoppingCart from "../components/ShoppingCart";

type CartProviderProps = {
  children: ReactNode;
};

type CartContextProps = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string, index: number) => void;
  decreaseCartQuantity: (id: string, index: number) => void;
  removeFromCart: (id: string) => void;
  clickedIndexHandler: () => void;
  cartQuantity: number;
  cartItems: CartItemProps[];
  clickedIndex: number;
};

type CartItemProps = {
  id: string;
  quantity: number;
};

const CartContext = createContext({} as CartContextProps);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);

  const clickedIndexHandler = () => {
    setClickedIndex(-1);
  };

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const getItemQuantity = (id: string) => {
    return cartItems.find((item) => item.id === id)?.quantity || 1;
  };
  const increaseCartQuantity = (id: string, index: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    setClickedIndex(index);
  };
  const decreaseCartQuantity = (id: string, index: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    setClickedIndex(index);
  };
  const removeFromCart = (id: string) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        clickedIndexHandler,
        openCart,
        closeCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        clickedIndex,
      }}
    >
      {children}
      {isOpen && <ShoppingCart />}
    </CartContext.Provider>
  );
};
