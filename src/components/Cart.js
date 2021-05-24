import React, { useState, useEffect } from "react";

import "./cart.css"
import CartItem from "./CartItem";

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

  return (
    <div>
      <div>all product that was added</div>
      <div>
        {cart.map((product) => (
          <CartItem product={product} increaseHandler={increaseHandler}  decreaseHandler={decreaseHandler}     />
          
          ))}
      </div>
    </div>
  );
};

export default Cart;
