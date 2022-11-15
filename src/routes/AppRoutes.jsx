import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Cart from '../pages/Shop/Cart/Cart';
import Product from '../pages/Shop/Product/Product';
import Shop from '../pages/Shop/Shop';

function AppRoutes(props) {
    return (
      <Routes>
        <Route path="/products" element={<Shop/>}>
            <Route path=':id' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    );
}

export default AppRoutes;