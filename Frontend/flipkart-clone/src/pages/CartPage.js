import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.productId}>
            <p>
              {item.name} - ${item.price}  
              <button onClick={() => removeFromCart(item.productId)}>Remove</button>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
