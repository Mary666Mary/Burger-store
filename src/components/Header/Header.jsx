import React from "react";
import { MdStore } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import MiniCart from "../Cart/MiniCart/MiniCart";
import { useState } from "react";
import ItemsCounter from "../Cart/MiniCart/ItemsCounter/ItemsCounter";

function Header() {
  const [isMiniCartVisible, setIsMiniCartVisible] = useState(false);

  function displayMiniCart() {
    setIsMiniCartVisible((prev) => !prev);
  }

  return (
    <header className="relative mt-0 mb-10 bg-amber-300">
      <div>
        <div className="container mx-auto p-4 flex justify-between">
          <span className="text-black text-base bg-amber-300 ">
            Санкт-Петербург, Лиговский пр., 110
          </span>
          <a className=" flex items-center" href="tel:+7 (951) 111 00 11">
            Позвоните нам <FiPhoneCall className="ml-2" />
          </a>
        </div>
      </div>
      <div className="bg-amber-400">
        <div className="container mx-auto p-4 flex justify-between relative">
          <button className="text-2xl flex items-center">
            <Link to="/products">
              Главная страница <MdStore className="inline ml-2" />
            </Link>
          </button>
          <Link to="/products">
            <GiHamburger className="text-4xl" />
          </Link>
          <button
            onClick={displayMiniCart}
            className="text-2xl flex items-center relative"
          >
            <MdOutlineShoppingCart className="ml-2 " />
            <ItemsCounter />
          </button>
          {isMiniCartVisible && (
            <MiniCart setIsMiniCartVisible={setIsMiniCartVisible} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
