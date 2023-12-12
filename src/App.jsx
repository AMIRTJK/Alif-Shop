// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import Switcher from "./component/Switcher";
// import "./App.css";
import React from "react";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Catalog from "./pages/Catalog/Catalog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./pages/Notfound/Notfound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "catalog",
          element: <Catalog />,
        },
        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
