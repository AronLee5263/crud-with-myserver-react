import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./index.css";

// import App, { loader as postsLoader } from "./routes/App";
// import NewPost, { action as newPostAction } from "./routes/NewPost";
// import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";

import RootLayOut from "./routes/RootLayout";

import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

const App = lazy(() => import("./routes/App"));
const NewPost = lazy(() => import("./routes/NewPost"));
const PostDetails = lazy(() => import("./routes/PostDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>로딩중입니다...</p>}>
            <App />
          </Suspense>
        ),
        loader: () => import("./routes/App").then((module) => module.loader()),
        children: [
          {
            path: "/create_post",
            element: (
              <Suspense fallback={<p>로딩중입니다...</p>}>
                <NewPost />
              </Suspense>
            ),
            action: ({ request }) => import("./routes/NewPost").then((module) => module.action({ request })),
          },
          {
            path: "/:postId",
            element: (
              <Suspense fallback={<p>로딩중입니다...</p>}>
                <PostDetails />
              </Suspense>
            ),
            loader: () => import("./routes/PostDetails").then((module) => module.loader()),
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
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
