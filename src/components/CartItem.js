import React from "react";
import "./cartItem.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { IconButton } from "@material-ui/core";

const CartItem = ({ product, increaseHandler, decreaseHandler }) => {
  const { qty, price } = product;
  const amount = (a, b) => {
    return a * b;
  };
  const Amount = amount(qty, price);
  return (
    <div className="product">
      <div>
        <h3> {product.title}</h3>
        <p> {product.descriptopn}</p>
      </div>
      <div className="productcontent">
        <p className="productprice">{product.price}</p>
        <div className="changingqty">
          <IconButton onClick={() => decreaseHandler(product)}>
            <KeyboardArrowDownIcon />
          </IconButton>
          <p>{product.qty}</p>
          <IconButton onClick={() => increaseHandler(product)}>
            <KeyboardArrowUpIcon />
          </IconButton>
        </div>

        <p>{Amount}</p>
      </div>
    </div>
  );
};

export default CartItem;
