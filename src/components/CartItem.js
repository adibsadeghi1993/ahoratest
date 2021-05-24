import React from "react";
import "./cartItem.css"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { IconButton } from "@material-ui/core";

const CartItem = ({ product ,increaseHandler,decreaseHandler }) => {
  return (
    <div className="product">
      <div>
        <h3> {product.title}</h3>
        <h3> {product.description}</h3>
      </div>
      <div className="productcontent">
        <div className="changingqty">
          <IconButton onClick={() => decreaseHandler(product)}>
            <KeyboardArrowDownIcon />
          </IconButton>
          <p>{product.qty}</p>
          <IconButton onClick={() => increaseHandler(product)}>
            <KeyboardArrowUpIcon />
          </IconButton>
        </div>
        <p>{product.price}</p>
        <p>
          {product.qty}*{product.price}{" "}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
