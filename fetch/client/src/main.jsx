import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

import App from "./App";
import Create from "./routes/Create.jsx";
import Read from "./routes/Read.jsx";
import Update from "./routes/Update.jsx";
import BackButton from "./components/BackButton.jsx";

const router = createBrowserRouter(
  [
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
    {
      path: "../",
      element: <BackButton />,
    },
  ]
  // {
  //   basename: "https://aronlee5263.github.io",
  // }
);
{
  /* <Link to="/crud-with-myserver-react/" />; // results in <a href="/app" /> */
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
