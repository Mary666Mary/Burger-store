import React, { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Quantity from "../../Quantity/Quantity";
import { Link } from "react-router-dom";

function MiniCartItem({
  cartItem,
  cart,
  setCart,
  setIsMiniCartVisible,
  cartBtnClasses = "",
}) {
  const foundCartItem = cart.find(
    (item) => item.cartItemId === cartItem.cartItemId
  );
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const removedCartItem = cart.filter(
    (item) => item.cartItemId !== cartItem.cartItemId
  );
  const defaultMiniCartBtnClasses =
    "text-base flex items-center mt-3 " + cartBtnClasses;

  useEffect(() => {
    if (quantity === 0) {
      setCart(removedCartItem);
    } else {
      const newCart = cart.map((item, index) => {
        if (item.cartItemId === cartItem.cartItemId) {
          item.quantity = quantity;
        }

        return item;
      });

      setCart(newCart);
    }
  }, [quantity]);

  useEffect(() => {
    if (cart.length > 0) {
      setQuantity(foundCartItem?.quantity);
    }
  }, [cart]);

  return (
    <li className="ml-4 flex mb-4">
      <div className="w-14 h-14">
        <img
          src={cartItem.image}
          className="rounded-full w-full h-full"
          alt={cartItem.title}
        />
      </div>
      <div className="ml-4 w-2/3 text-left">
        <Link
          onClick={() => setIsMiniCartVisible(false)}
          to={"/products/" + cartItem.id}
        >
          <h6 className="text-base mt-2">
            {cartItem.title} — {cartItem.done.label}
          </h6>
          <span>{cartItem.price}₽</span>
        </Link>
        <Quantity
          inputClasses="bg-transparent"
          quantity={quantity}
          setQuantity={setQuantity}
          isZeroValue={true}
          isMiniCart={true}
        />
      </div>
      <div>
        <button
          onClick={() => setCart(removedCartItem)}
          className={defaultMiniCartBtnClasses}
        >
          <IoIosCloseCircleOutline />
        </button>
      </div>
    </li>
  );
}

export default MiniCartItem;
