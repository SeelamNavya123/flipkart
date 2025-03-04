import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useContext(CartContext);  // ✅ Get cart data from context

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>  // ✅ Show message when cart is empty
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;

