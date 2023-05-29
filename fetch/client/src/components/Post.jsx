import classes from "./Post.module.css";

export default function Post(props) {
  return (
    <>
      <div className={classes.container}>
        <ul className={classes.post}>
          <p className={classes.author}>{props.author}</p>
          <p className={classes.body}>{props.body}</p>
        </ul>
      </div>
    </>
  );
}
