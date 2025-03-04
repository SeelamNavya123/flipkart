import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId") || "guestUser";

    fetch(`http://localhost:5000/api/cart/${userId}`)
      .then((res) => res.json())
      .then((data) => setCart(data.items || []))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  const addToCart = (productId, name, price) => {
    const userId = localStorage.getItem("userId") || "guestUser";

    fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId, name, price, quantity: 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data.items || []);
        navigate("/cart");
      })
      .catch((error) => console.error("Error adding to cart:", error));
  };

  const removeFromCart = (productId) => {
    const userId = localStorage.getItem("userId") || "guestUser";

    fetch("http://localhost:5000/api/cart/remove", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId }),
    })
      .then((res) => res.json())
      .then((data) => setCart(data.items || []))
      .catch((error) => console.error("Error removing from cart:", error));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
