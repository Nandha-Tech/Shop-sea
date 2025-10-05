import React from "react";
import { Badge, IconButton, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const CartIcon = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <StyledIconButton onClick={() => navigate("/cart")}>
      <Badge badgeContent={totalCount} color="error" showZero={false}>
        <ShoppingCart />
      </Badge>
    </StyledIconButton>
  );
};

export default CartIcon;