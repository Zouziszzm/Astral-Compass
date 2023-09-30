import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Inside from "./components/Inside";
import { router } from "./routes";
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
router;
export { App, router };
