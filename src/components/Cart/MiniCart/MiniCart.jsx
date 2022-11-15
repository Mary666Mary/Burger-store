import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../App";
import { Link } from "react-router-dom";
import MiniCartItem from "./MiniCartItem";

function MiniCart({ setIsMiniCartVisible }) {
  const { cart, setCart } = useContext(CartContext);

  const cartTotal =
    cart.length > 0 &&
    cart
      .map((item) => item.quantity * item.price)
      .reduce((prev, item) => prev + item);

  return (
    <div className="absolute rounded-lg top-full mt-2 right-2.5 w-2/5 bg-amber-300 p-3 max-w-xs max-h-96 overflow-y-auto z-10">
      <ul>
        {cart.length > 0 ? (
          cart.map((cartItem) => {
            return (
              <MiniCartItem
                setIsMiniCartVisible={setIsMiniCartVisible}
                key={cartItem.cartItemId}
                cartItem={cartItem}
                cart={cart}
                setCart={setCart}
              />
            );
          })
        ) : (
          <li>В корзине ничего нет</li>
        )}
        {cartTotal && (
          <div className="flex flex-wrap justify-center">
            <span className="text-lg">Итого: {cartTotal}₽</span>
            <button
              className="
                            mt-2 text-lg border-red-700 border border-2 shadow-xl rounded-full p-2 w-full hover:bg-amber-400 transition hover:text-rose-900 font-medium"
            >
              <Link to="/cart">Перейти к оформлению</Link>
            </button>
          </div>
        )}
      </ul>
    </div>
  );
}

export default MiniCart;
