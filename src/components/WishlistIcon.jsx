// src/components/WishlistIcon.js
import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WishlistIcon = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/wishlist"); // Always navigate when clicked
  };

  return (
    <div
      onClick={handleClick}
      style={{ position: "relative", cursor: "pointer", marginRight: "10px" }}
    >
      <FaHeart size={22} color="white" />
      {wishlist.length > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-6px",
            right: "-10px",
            background: "white",
            color: "red",
            fontSize: "12px",
            fontWeight: "bold",
            borderRadius: "50%",
            padding: "2px 5px",
          }}
        >
          {wishlist.length}
        </span>
      )}
    </div>
  );
};

export default WishlistIcon;
