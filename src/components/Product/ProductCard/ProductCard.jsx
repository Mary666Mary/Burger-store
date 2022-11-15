import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Quantity from "../../Quantity/Quantity";
import { addToCartHandler } from "../../../helpers/addToCartHandler";
import { CartContext } from "../../../App";
import DonenessSelect from "../../DonenessSelect/DonenessSelect";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [done, setDone] = useState({
    label: "Well done",
    value: "well-done",
  });
  const unqiqId = "id" + Math.random().toString(16).slice(2);
  const { cart, setCart } = useContext(CartContext);

  return (
    <li className="flex flex-wrap">
      <Link to={"/products/" + product.id}>
        <img className="mb-2" src={product.image} alt={product.title} />
        <h2 className="mb-2 text-black text-lg">{product.title}</h2>
      </Link>
      <p className="mb-2 text-slate-500">{product.description}</p>
      <span className="text-rose-900 font-medium block w-full mb-2">
        {product.price} ₽
      </span>
      <span className="mb-1">Выберите степень прожарки:</span>
      <DonenessSelect
        onChange={(value) => setDone(value)}
        className="mb-4 w-80"
      />
      <div className="flex">
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        <button
          onClick={() =>
            addToCartHandler(
              product,
              quantity,
              setQuantity,
              cart,
              setCart,
              unqiqId,
              done
            )
          }
          className="rounded border-solid border-amber-300 border-2 px-4 py-2 bg-amber-300 hover:bg-amber-400 hover:border-amber-400 transition"
        >
          Добавить в корзину
        </button>
      </div>
    </li>
  );
}

export default ProductCard;
