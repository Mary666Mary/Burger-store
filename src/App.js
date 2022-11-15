import React, { createContext } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useLocalStorage } from "./hooks/useStorage";
export const CartContext = createContext({});

const App = () => {
  const [cart, setCart, removeCart] = useLocalStorage("cart", []);

  return (
    <CartContext.Provider value={{ cart, setCart, removeCart }}>
      <AppRoutes />
    </CartContext.Provider>
  );

  return;
};

export default App;
