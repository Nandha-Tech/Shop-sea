import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import { FaArrowLeft } from "react-icons/fa";
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
        style={{ marginBottom: "20px" }}
      >
        <FaArrowLeft style={{ marginRight: "6px" }} />
        Back
      </button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item" style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.detailsContainer}>
                <div style={styles.itemDetails}>
                  <span style={styles.itemName}>{item.name}</span>
                  <p style={styles.description}>
                    <strong>Description:</strong> {item.description}
                  </p>
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
                <div style={styles.priceAndDelete}>
                  <div style={styles.price}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <h3 className="total">Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;

const styles = {
  priceAndDelete: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  price: {
    fontWeight: "bold",
    color: "#333",
  },
  cartItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "15px",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "20px",
  },
  detailsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    marginRight:"100px",
    gap: "10px",
  },
  qtyButton: {
    padding: "4px 10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    color:"black"
    
    
  },
  qtyText: {
    minWidth: "20px",
    textAlign: "center",
  },
  deleteButton: {
    alignSelf: "flex-start",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    height: "fit-content",
  },
};
