import React from "react";
import "./products.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {IconButton} from "@material-ui/core";

const Products = ({ products,cartHandler }) => {
  return (
   <div className="main">
        <div className="maincontent">
        <div className="products">
      {products.map((item) => {
        return (
          <div className="card">
            <div className="image">
              <img src={item.image} alt="storeimage" className="imagecontent" />
            </div>
            <div className="content">
              <h3>{item.title}</h3>
              <h3>{item.price}</h3>
            </div>
            <div className="addbtn">
              <IconButton variant="contained" color="primary" size="small" onClick={()=>cartHandler(item)} >
                  <AddShoppingCartIcon/>
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
    </div>
   </div>
  );
};

export default Products;
