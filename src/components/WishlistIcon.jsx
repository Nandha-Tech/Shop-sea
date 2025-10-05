import React from "react";
import { Badge, IconButton, styled } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const WishlistIcon = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/wishlist");
  };

  return (
    <StyledIconButton onClick={handleClick}>
      <Badge badgeContent={wishlist.length} color="error" showZero={false}>
        <Favorite />
      </Badge>
    </StyledIconButton>
  );
};

export default WishlistIcon;