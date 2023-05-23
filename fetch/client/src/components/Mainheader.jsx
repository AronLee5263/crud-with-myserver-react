import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <>
      <div className={classes.header_container}>
        <h1>React CRUD with axios</h1>
      </div>
      <div className={classes.component_name}> main page Component</div>

      <div className={classes.form_containers}>
        <div className={classes.form_container}>
          <form className={classes.form_p}>
            <input name="text" placeholder="내용을 입력하세요..." required />
            <input name="done" type="checkbox" />
            <input type="submit" value="추가" />
          </form>
        </div>
      </div>
      <div className={classes.boundary_container}>
        <div className={classes.boundary}> 여기 아래가 두번쨰 파트</div>
      </div>
    </>
  );
}
