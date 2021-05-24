import React, { useState, useEffect } from "react";

import "./cart.css";
import CartItem from "./CartItem";
import Date from "./Date";
import Invoice from "./Invoice";

const Cart = ({ cart, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const Subtotal = cart.reduce(
      (previous, current) => previous + current.price * current.qty,
      0
    );
    setTotalPrice(Subtotal);
  }, [cart]);

  const increaseHandler = (item) => {
    const newCart = [...cart];
    const index = newCart.indexOf(item);
    const oldItem = newCart[index];
    const newItem = { ...oldItem };
    newItem.qty = newItem.qty + 1;
    newCart[index] = newItem;

    setCart(newCart);
  };
  const decreaseHandler = (item) => {
    if (item.qty > 2) {
      const newCart = [...cart];
      const index = newCart.indexOf(item);
      const oldItem = newCart[index];
      const newItem = { ...oldItem };
      newItem.qty = newItem.qty - 1;
      newCart[index] = newItem;

      setCart(newCart);
    } else {
      const newCart = [...cart];
      const updatedCart = newCart.filter((product) => {
        return product.id !== item.id;
      });
      setCart(updatedCart);
    }
  };

  const tax = 0.05 % totalPrice;
  const total = tax + totalPrice;

  if(cart.length===0){
      return <p>go home page and  add product </p>
  }

  return (
    <div>
        <Invoice/>
        <Date/>
      <div className="header">
        <div className="desc">
          <h3>description</h3>
        </div>
        <div className="detailes">
          <h3 className="price">Price</h3>
          <h3 className="qty">Qty</h3>
          <h3 className="amount">Amount</h3>
        </div>
      </div>
      <div className="allproducts">
        {cart.map((product) => (
          <CartItem
            product={product}
            increaseHandler={increaseHandler}
            decreaseHandler={decreaseHandler}
          />
        ))}
      </div>
      <div className="calculated">
        <div>Subtotal: ${totalPrice}</div>

        <p className="tax"> Tax(5%): ${tax}</p>

        <div>Total: ${total}</div>

        <h3 className="balance"> Balance Due: ${total}</h3>
      </div>
    </div>
  );
};

export default Cart;
