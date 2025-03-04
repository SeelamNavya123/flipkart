import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import CartPage from "./pages/CartPage";
import SignupPage from "./Components/SignupPage";
import LoginPage from "./Components/LoginPage";


function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;