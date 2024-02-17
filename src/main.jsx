import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.jsx";

import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { ProductsProvider } from "./providers/products";
import { CartProvider } from "./providers/cart.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </CartProvider>
  </React.StrictMode>
);
