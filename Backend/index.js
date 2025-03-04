import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS middleware
import inputRouter from "./routes/inputRouter.js";
import productRouter from "./routes/product.router.js"; 
import cartRouter from "./routes/cart.router.js"; // Import Cart Router

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors()); // Enable CORS to allow cross-origin requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/input", inputRouter);
app.use("/api/cart", cartRouter); // Cart Routes
app.use("/api/products", productRouter); // Product Routes

// Default Route
app.get("/", (req, res) => {
  res.send("🛒 Flipkart Clone Backend is Running...");
});

// Start Server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
