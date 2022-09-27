import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Catalog from '../pages/Catalog';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/product" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<></>} />
        <Route path="/accessories" element={<></>} />
      </Routes>
    </>
  );
};

export default Router;
