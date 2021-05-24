import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./header.css";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";

const Header = ({ number }) => {
  return (
    <div className="store">
      <div>
        <h2>store</h2>
      </div>
      <div className="icons">
        <div className="homeIcon">
          <Link to="/">
            <HomeIcon color="primary" fontSize="large" />
          </Link>
        </div>

        <div className="shoppingIcon">
          <Link to="/cart">
            <Badge badgeContent={number} color="secondary">
              <ShoppingCartIcon color="primary" fontSize="large" />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
