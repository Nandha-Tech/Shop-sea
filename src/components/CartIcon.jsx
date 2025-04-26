// src/components/CartIcon.js
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-icon-container" onClick={() => navigate("/cart")}>
      <FaShoppingCart size={28} className="cart-icon" />
      {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
    </div>
  );
};

export default CartIcon;
