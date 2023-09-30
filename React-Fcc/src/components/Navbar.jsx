import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logoDiv">
          <div>
            <p className="">FoodVilla</p>
          </div>
        </div>
        <div>
          <ul className="navul">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
