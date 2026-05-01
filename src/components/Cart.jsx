import ProductProvider from "../context/ProductContext";
import Products from "../Products";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useState } from "react";


const Cart = () => {
    const { cartItems, handleRemoveFromCart, handlepayMent } = useContext(ProductContext);


    const removeFromCart = (product) => {
        handleRemoveFromCart(product);
    };

    const payMent = (cartItems) => {
        if (cartItems.length === 0) {
            alert("Giỏ hàng trống!");
            return;
        }else {
            handlepayMent(cartItems);
        }
    }

    return (
        <div>
            <h1>Giỏ hàng</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>

                <tbody>
                    {cartItems.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price * item.quantity}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item)}>Xóa</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <label htmlFor="">Tổng số tiền: </label>
                <span>
                    {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                </span>
                <br />
            <button onClick={() => payMent(cartItems)}>Thanh toán</button>

        </div>
    );
}
export default Cart;