import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./header.css";
import Badge from '@material-ui/core/Badge';

const Header = ({number}) => {
  return (
    <div className="store">
      <div>
        <h2>store</h2>
      </div>
      <div className="icons">
        <div className="homeIcon">
        <HomeIcon color="primary" fontSize="large" />
        </div>
        

        <div className="shoppingIcon">
        <Badge badgeContent={number} color="secondary" >
        <ShoppingCartIcon color="primary" fontSize="large" />
        </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
