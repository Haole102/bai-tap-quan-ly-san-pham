import React from 'react';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Products from './Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductProvider from "./context/ProductContext";

const App = () => {



  return (

    <BrowserRouter>

      <ProductProvider>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          
        </Routes>


      </ProductProvider>

    </BrowserRouter>

  );
};

export default App;