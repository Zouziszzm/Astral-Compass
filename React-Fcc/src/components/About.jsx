import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <Link to="/about/inside">Inside</Link>
        <h2>About page</h2>
        <h2>This is the About page wil have other stuff here.</h2>
        <Outlet />
      </div>
    </>
  );
};

export default About;
