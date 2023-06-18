import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";

import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

// export async function loader({ params }) {
//   const response = await axios.get(SERVER_URL + "/" + params.postId);
//   //   console.log("response.data : ", response.data);

//   return response.data.post;
// }
