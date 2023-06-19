import classes from "./App.module.css";
import axios from "axios";

import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";

export default function App() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export async function loader() {
  const response = await axios.get(SERVER_URL);
  console.log("response.data : ", response.data);
  return response.data.reverse();
}
