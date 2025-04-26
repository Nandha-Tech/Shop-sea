// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import CartIcon from "./components/CartIcon";
import CartPage from "./components/CartPage";
import Images from "./Images/shopify (1).png";
import "./App.css";
import ImageCarousel from "./components/ImageCarousel";

import WishlistPage from "./components/WishlistPage";
import WishlistIcon from "./components/WishlistIcon";

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <header>
        <img src={Images} alt="Shop Sea Logo" className="logo" />
        <h1 className="Top">Shopz Sea</h1>

        <div className="header-icons">
          <WishlistIcon />
          <CartIcon />
        </div>
      </header>

      {/* Show carousel only on the homepage */}
      {location.pathname === "/" && <ImageCarousel />}

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
