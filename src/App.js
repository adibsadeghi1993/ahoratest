import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res)
      })
      .catch((err) => console.log("err"));
  }, []);

  const cartHandler = (item) => {
    //adding item to cart and andding quantity to item
    const newCart = [...cart];
    const exist = newCart.find((product) => product.id === item.id);

    if (!exist) {
      const newItem = { ...item, qty: 1 };
      const updatedCart = [...newCart, newItem];

      setCart(updatedCart);
    } else {
      const index = newCart.indexOf(exist);

      const oldItem = newCart[index];
      const newItem = { ...oldItem };
      newItem.qty = newItem.qty + 1;
      newCart[index] = newItem;

      setCart(newCart);
    }
  };
  console.log(cart);

  return (
    <div className="App">
      <Router>
        <Header number={cart.length} />

        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Products
                  products={products}
                  cartHandler={cartHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <Cart
                  cart={cart}
                  setCart={setCart}
                  cartHandler={cartHandler}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
