import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const resp = await fetch('http://localhost:3000/noidung.json');
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    console.log('ProductList component mounted');
    fetchProducts();
  }, []);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // increase "quantity" by 1
      const newCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          // - Change: quantity - increase by 1
          return { ...item, quantity: item.quantity + 1 };
        } else {
          // no change
          return item;
        }
      });

      // Step 2: update "cartItems"
      setCartItems(newCartItems);
    } else {
      // add to cartItems with quantity = 1
      // product.quantity = 1;
      // setCartItems(prev => [...prev, product]);
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newCartItems);
  };

  const handlepayMent = (cartItems) => {
    navigate('/checkout');
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
        handlepayMent,
        setCartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
