import React from "react";

const Navbar = () => {
  return (
    <div className="second">
      <img src="bg.jpg"></img>
      <div className="text"> LOGO</div>
      <div className="navbar">

        <ul>
          <li>
            <button className="btn">Home</button>
          </li>
          <li>
            <button className="btn">About</button>
          </li>
          <li>
            <button className="btn">Services</button>
          </li>
          <li>
            <button className="btn">Content</button>
          </li>
          <li>
            <button className="btn">Login</button>
          </li>
        </ul>
      </div>

      <div className="box">
        <p className="login">Login</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="email"
        ></input>
        <input type="password" placeholder="Enter your password"></input>
        <div className="lower">
          <input type="checkbox"></input>
          <p>Remember me?</p>
          <p><button className="forget">Forgect password</button></p>
        </div>

        <p>
          <button className="btn-2">Login</button>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
