import { createBrowserRouter } from "react-router-dom";
export const Routermade = createBrowserRouter([
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
