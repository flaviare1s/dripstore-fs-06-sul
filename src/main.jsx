import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import Product from "./pages/Product.jsx";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { ProductsProvider } from "./providers/products";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </React.StrictMode>
);
