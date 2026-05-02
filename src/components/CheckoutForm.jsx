import { ProductContext } from "../context/ProductContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"; //kkk

const CheckoutForm = () => {
    const { cartItems, setCartItems } = useContext(ProductContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        customerName: "",
        phone: "",
        address: "",
        paymentMethod: ""
    });
    const [submittedData, setSubmittedData] = useState(null);


    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData(form);


        setForm({
            customerName: "",
            phone: "",
            address: "",
            paymentMethod: ""
        });
    };

    const placeOrder = (e) => {
        e.preventDefault(); 
        if (form.customerName === "" || form.customerName.length < 3) {
            alert("Tên khách hàng phải có ít nhất 3 ký tự!");
            return;
        } else if (form.phone === "" || !/^\d{10}$/.test(form.phone)) {
            alert("Số điện thoại phải có 10 chữ số!");
            return;
        } else if (form.address === "" || form.address.length < 5) {
            alert("Địa chỉ không được để trống và phải có ít nhất 5 ký tự!");
            return;

        } else {
            alert("Đặt hàng thành công!");
            navigate('/');

            setCartItems([]); 
        }
    }




return (
    <div>
        <h1>Thanh toán SP</h1>

        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
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
                        </tr>
                    )
                })}
            </tbody>
        </table>

        <span>
            {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
        </span>

        <form onSubmit={placeOrder}>
            <label htmlFor="customerName">Tên khách hàng </label>
            <input type="text" id="customerName" name="customerName" value={form.customerName} onChange={handleChange} />
            <br />

            <label htmlFor="phone">Số điện thoại </label>
            <input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange} />
            <br />

            <label htmlFor="address">Địa chỉ </label>
            <input type="text" id="address" name="address" value={form.address} onChange={handleChange} />
            <br />

            <label htmlFor="paymentMethod">Phương thức thanh toán </label>
            <select id="paymentMethod" name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
                <option value="cash">Thanh toán khi nhận hàng </option>
                <option value="card">Thanh toán bằng thẻ </option>
            </select>
            <br />
            <button type="submit">Đặt hàng</button>
        </form>

    </div>
);
}
export default CheckoutForm;