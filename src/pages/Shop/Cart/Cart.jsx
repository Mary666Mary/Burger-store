import React, { useContext } from "react";
import MiniCartItem from "../../../components/Cart/MiniCart/MiniCartItem";
import Header from "../../../components/Header/Header";
import { CartContext } from "../../../App";
import UserDataForm from "../../../components/UserDataForm/UserDataForm";

function Cart(props) {
  const { cart, setCart } = useContext(CartContext);
  const cartTotal =
    cart.length > 0 &&
    cart
      .map((item) => item.quantity * item.price)
      .reduce((prev, item) => prev + item);

  return (
    <>
      <Header />
      <div className="container mx-auto mb-9">
        <span className="text-slate-900 text-2xl mt-1 ml-4">В корзине:</span>
        <div className="ml-4 mt-2 grid grid-cols-2 gap-8">
          <div className="hover:shadow-gray-200 shadow-2xl cursor-pointer border-2 rounded-lg p-8 self-start">
            {cart.length > 0
              ? cart.map((cartItem) => {
                  return (
                    <MiniCartItem
                      cartBtnClasses="mr-auto"
                      key={cartItem.cartItemId}
                      isCart={true}
                      cartItem={cartItem}
                      cart={cart}
                      setCart={setCart}
                    />
                  );
                })
              : "Вы пока ничего не добавили в корзину"}
            <hr />
            {cart.length > 0 && (
              <div className="flex justify-center">
                <button
                  onClick={() => setCart([])}
                  className="w-full transition ease-in-out delay-100 hover:translate hover:scale-100 rounded-full border bg-slate-200 text-red-600 font-medium p-3 mt-2 hover:bg-red-500 hover:text-white"
                >
                  Очистить корзину
                </button>
              </div>
            )}
          </div>
          <UserDataForm />
        </div>
      </div>
    </>
  );
}

export default Cart;
