import Post from "./Post";

// import classes from "./PostList.module.css";

export default function PostsList() {
  return (
    <ul>
      <Post author="정운" body="여기 출력" />
      <Post author="미민" body="미미미민" />
    </ul>
  );
}
