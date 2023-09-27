import React from "react";
import { Link } from "react-router-dom";
import "./help.css";

export const Help = () => {
  // Define the submitted function outside the return statement
  function submitted() {
    alert("Your form is submitted");
  }

  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <h1>HELP</h1>
          <h3>If this page doesn't work, please click on the alternate link:</h3>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <center>

      <div className="Container">
        <h3>IF order not recived fill this form</h3>
        
        <form>
         
              Name:
              <input type="text"  placeholder="enter your name"/><br></br>
            
              Email:
              <input type="email" placeholder="enter email"/><br></br>
           
              Item name:
              <input type="text" placeholder="enter item name"/><br></br>
            
              Enter the price:
              <input type="number" placeholder="enter item price"/><br></br>

              Enter the problem:<br></br>
              <textarea cols={35} rows={3}></textarea><br></br><br></br>

              <button onClick={submitted}>submit</button>
           
        </form>
        
      </div>
      </center>
    </>
  );
};
