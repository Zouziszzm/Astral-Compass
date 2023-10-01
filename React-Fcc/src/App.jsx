import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import About from "./components/About";
import Inside from "./components/Inside";
import { createBrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const Routermade = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about/inside",
        element: <Inside />,
      },
    ],
  },
]);

export { App, Routermade };
