import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// 🛒 Get Cart Items
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }) || { items: [] };
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cart" });
  }
});

// ➕ Add Item to Cart
router.post("/add", async (req, res) => {
  const { userId, productId, name, price } = req.body;
  
  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }

  const itemIndex = cart.items.findIndex((item) => item.productId === productId);
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += 1;
  } else {
    cart.items.push({ productId, name, price, quantity: 1 });
  }

  await cart.save();
  res.json(cart);
});

// ❌ Remove Item from Cart
router.delete("/remove", async (req, res) => {
  const { userId, productId } = req.body;

  let cart = await Cart.findOne({ userId });
  if (cart) {
    cart.items = cart.items.filter((item) => item.productId !== productId);
    await cart.save();
  }

  res.json(cart);
});

export default router;
