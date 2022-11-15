import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import { products } from "../../data/products";

function Shop() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className="mb-9 container mx-auto px-4">
        {id ? (
          <Outlet />
        ) : (
          <>
            <h1 className="text-6xl mb-4 text-center">Основное меню</h1>
            <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              {products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default Shop;
