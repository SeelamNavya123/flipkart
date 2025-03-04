import Cart from "../models/Cart.js";
import Product from "../models/product.model.js";

// Add item to cart
export const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [], totalAmount: 0 });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const existingProductIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (existingProductIndex > -1) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    cart.totalAmount += product.price * quantity;
    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart", error });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex > -1) {
      const product = cart.products[productIndex];
      cart.totalAmount -= product.quantity * (await Product.findById(productId)).price;
      cart.products.splice(productIndex, 1);
      await cart.save();
      res.status(200).json({ message: "Product removed from cart", cart });
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error removing from cart", error });
  }
};

// Get cart items
export const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate("products.productId");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};
