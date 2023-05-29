import Post from "./Post";
import NewPost from "./NewPost";

import classes from "./PostsList.module.css";

export default function PostsList() {
  return (
    <>
      <NewPost />

      <ul className={classes.posts}>
        <Post author="정운" body="여기 출력" />
        <Post author="미민" body="미미미민" />
      </ul>
    </>
  );
}
