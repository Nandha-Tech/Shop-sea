import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setAddedItems((prev) => [...prev, item.id]);
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== item.id));
    }, 700);
  };

  return (
    <div className="wishlist-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft style={{ marginRight: "6px" }} />
      </button>
      <h2 className="wishlist-title">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => {
            const isAdded = addedItems.includes(item.id);
            return (
              <div key={item.id} className="wishlist-item">
                <div
                  className="wishlist-heart"
                  onClick={() => dispatch(toggleWishlist(item))}
                >
                  <FaHeart color="red" size={18} />
                </div>
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  disabled={isAdded}
                  style={{
                    backgroundColor: isAdded ? "grey" : "#007bff",
                    color: "#fff",
                    cursor: isAdded ? "not-allowed" : "pointer",
                  }}
                >
                  {isAdded ? "Added" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
