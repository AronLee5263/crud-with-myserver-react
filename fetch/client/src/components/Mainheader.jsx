import classes from "./MainHeader.module.css";
import CrudButtons from "./CrudButtons";

export default function MainHeader() {
  return (
    <>
      <div className={classes.header_container}>
        <h1>React CRUD with axios</h1>
      </div>
      <div className={classes.component_name}> Update Component</div>
      <CrudButtons />

      <div className={classes.form_container}>
        <form>
          <input name="text" placeholder="내용을 입력하세요..." required />
          <input name="done" type="checkbox" />
          <input type="submit" value="추가" />
        </form>
      </div>
    </>
  );
}
