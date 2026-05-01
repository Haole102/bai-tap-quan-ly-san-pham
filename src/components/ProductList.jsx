import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {

    const { products, handleAddToCart } = useContext(ProductContext);

    const addToCart = (product) => {
        console.log("Adding product to cart:", product); 
        handleAddToCart(product);
    };

    return (
        <>
            <h1>Product List T1</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (

                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>${product.price.toFixed(2)}</td>
                                <td><img src={product.image} alt={product.name} width="100" /></td>
                                <td>
                                    <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
            
        </>
    )
}
export default ProductList;