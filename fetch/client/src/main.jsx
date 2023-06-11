import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import App, { loader as postsLoader } from "./routes/App";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";

import RootLayOut from "./routes/RootLayout";

import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

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
          { path: "/create_post", element: <NewPost />, action: newPostAction },
          {
            path: "/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign_up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
