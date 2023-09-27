import React from "react";
import product1 from "./assets/products/1.png";
import product6 from "./assets/products/6.webp";
import product9 from "./assets/products/9.jpeg";

export const Offer = () => {
  // Define your PRODUCTS array outside the component

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>OFFER</h1>
        <h3>this is the offer page for goods</h3>
      </div>
      <center>
        <h3>Todays Offers</h3>
        <ul type="none">
          <li>
            <h2>On food items: 80% off</h2>
            {/* Use the imported image directly */}
             <img src={product9} alt="Product 9" height="300px"/>
           
          </li>
          <li>
            <h2>On clothes items: 10% off</h2>
            <img src={product6} alt="Product 6" height="300px"/>
            {/* You can add more product images here */}
          </li>
          <li>
            <h2>On electronics items: 1% off</h2>
            {/* You can add more product images here */}
            <img src={product1} alt="Product 1" height="300px" />
          </li>
        </ul>
      </center>
    </div>
  );
};