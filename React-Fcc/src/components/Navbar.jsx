import React from "react";

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
            <a>
              <li>Home</li>
            </a>
            <a>
              <li>Projects</li>
            </a>
            <a>
              <li>Blog</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
