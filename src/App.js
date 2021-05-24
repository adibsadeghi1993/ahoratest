import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios"

function App() {
  const [products, setProducts] = useState([]);


      useEffect(() => {
        axios.get("http://localhost:3005/products")
        .then(res=>{
         setProducts(res.data)
        }).catch(err=>console.log("err"))
        
      }, [])

  return (
    <div className="App">
      <Header />
      <div className="container"></div>
    </div>
  );
}

export default App;
