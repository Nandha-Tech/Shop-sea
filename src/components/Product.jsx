// src/components/Product.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleWishlist } from "../redux/wishlistSlice";
import { FaHeart } from "react-icons/fa";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const wishlist = useSelector((state) => state.wishlist);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button
          onClick={handleAddToCart}
          style={{
            backgroundColor: added ? "grey" : "#007bff",
            color: "#fff",
            cursor: added ? "not-allowed" : "pointer",
            marginLeft:"60px"
          }}
          disabled={added}
        >
          {added ? "Added" : "Add to Cart"}
        </button>
        <FaHeart
          size={20}
          style={{ cursor: "pointer" }}
          color={isWishlisted ? "red" : "gray"}
          onClick={() => dispatch(toggleWishlist(product))}
        />
      </div>
    </div>
  );
};

export default Product;
