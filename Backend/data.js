import mongoose from "mongoose";
import Product from "./models/product.model.js";

const products = [
  {
    category: "Electronics",
    sub_category: "Mobile Phones",
    title: "iPhone 13",
    description: "Latest Apple iPhone with A15 Bionic chip.",
    price: 999,
    rating: {
      rate: 4.5,
      count: 1200,
    },
    image: "https://example.com/iphone13.jpg",
  },
  {
    category: "Electronics",
    sub_category: "Laptops",
    title: "MacBook Pro 16",
    description: "Powerful laptop with M1 chip.",
    price: 2399,
    rating: {
      rate: 4.7,
      count: 800,
    },
    image: "https://example.com/macbookpro16.jpg",
  },
  {
    category: "Clothing",
    sub_category: "Men's Wear",
    title: "Men's T-Shirt",
    description: "Comfortable cotton t-shirt.",
    price: 19.99,
    rating: {
      rate: 4.2,
      count: 500,
    },
    image: "https://example.com/mens-tshirt.jpg",
  },
];

// Function to seed products into the database
const seedProducts = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Sample products added to the database.");
};

export { products, seedProducts };
