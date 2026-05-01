import { createContext, useContext, useEffect, useState } from "react";
import ProductProvider from "./context/ProductContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
// import CheckoutForm from "./components/CheckoutForm";

const Products = () => {

    return (
        <>

                <ProductList />
                <Cart />


        </>
    );
};

export default Products;