import React, { createContext } from "react";
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useLocalStorage } from "./hooks/useStorage";
import { useNavigate, useLocation } from "react-router-dom";
import { products } from "./data/products";
export const CartContext = createContext({});

const App = () => {
  const [cart, setCart, removeCart] = useLocalStorage("cart", []);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/products");
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, removeCart }}>
      <AppRoutes />
    </CartContext.Provider>
  );

  return;
};

export default App;
