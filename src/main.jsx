import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18next.js";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import ErrorPages from "./routes/ErrorPages.jsx";
import Home from "./routes/Home.jsx";
import Cart from "./routes/Cart.jsx";
import Catalog from "./routes/Catalog.jsx";
import Sign from "./routes/Sign.jsx";
import Product from "./routes/Product.jsx";
import Login from "./routes/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/basic",
    element: <Root />,
    errorElement: <ErrorPages />,
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
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "sign",
    element: <Sign />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <RouterProvider router={router} />
  </Provider>
);
