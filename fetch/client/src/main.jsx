import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import App, { loader as postsLoader } from "./routes/App";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import RootLayOut from "./routes/RootLayout";

import Create from "./routes/Create.jsx";
import Read from "./routes/Read.jsx";
import Update from "./routes/Update.jsx";
import BackButton from "./components/BackButton.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
