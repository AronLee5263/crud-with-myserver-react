import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/App";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  ,
  {
    path: "/read",
    element: <Read />,
  },
  ,
  {
    path: "/update",
    element: <Update />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
