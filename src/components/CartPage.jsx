import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page" style={{ padding: "20px" }}>
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
      >
        <FaArrowLeft style={{ marginRight: "6px" }} />
        Back
      </button>

      <h2 style={{ marginBottom: "20px" }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="order-summary">
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.detailsContainer}>
                <div style={styles.itemDetails}>
                  <span style={styles.itemName}>{item.name}</span>
                  <p style={styles.description}>
                    <strong>Description:</strong> {item.description}
                  </p>

                  {/* Quantity controls below name */}
                  <div style={styles.quantityControls}>
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      style={styles.qtyButton}
                    >
                      -
                    </button>
                    <span style={styles.qtyText}>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      style={styles.qtyButton}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price + Trash Icon */}
                <div style={styles.priceAndDelete}>
                  <div style={styles.price}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <FaTrash
                    onClick={() => dispatch(removeFromCart(item.id))}
                    style={styles.trashIcon}
                  />
                </div>
              </div>
            </div>
          ))}

          <hr style={{ margin: "20px 0" }} />
          <h3 style={{ textAlign: "right" }}>
            Total: ${totalPrice.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;

const styles = {
  cartItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "15px",
    flexWrap: "wrap", // mobile friendly
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "15px",
  },
  detailsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    minWidth: "200px",
    marginTop: "5px",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "6px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  qtyButton: {
    padding: "4px 10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
  },
  qtyText: {
    minWidth: "20px",
    textAlign: "center",
  },
  priceAndDelete: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  price: {
    fontWeight: "bold",
    color: "#333",
  },
  trashIcon: {
    color: "#ff4d4d",
    cursor: "pointer",
    fontSize: "18px",
  },
};
