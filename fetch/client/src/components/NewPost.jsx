import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <p>
          <label htmlFor="postAuthor">이름</label>
          <input
            id="postAuthor"
            required
            type="text"
            onChange={props.onAuthorChange}
          />
        </p>
        <p>
          <label htmlFor="postContent">내용</label>
          <textarea
            id="postContent"
            required
            rows={3}
            onChange={props.onContentChange}
          />
        </p>

        <label>
          <input type="checkbox" name="myCheckbox" />
          <span className={classes.checkboxBody}>(필수) 서비스 이용약관</span>
        </label>
        <hr />
        <button type="reset">초기화</button>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default NewPost;

//1. 이벤트 리스너 만들고 (이벤트 리스너 event 는 자동으로 리액트가 객체로 넘겨줌)
// 2. 동적으로 textarea 속성으로 이벤트 리스너 넣어주기
// 3. useState로 등록.
//       - 2개 배열 반환함 [현재 상태값, 상태업데이트 함수]
//       - 이벤트리스너 함수에서 변수에 담는게 아니라 상태업데이트 함수에 매개변수로 넣어줌.
// 왜냐하면 규칙임
//       - const로 설정한 이유는 onChange 이벤트로 매번 키가 눌릴때마다 새롭게 컴포넌트 함수가 실행돼서
//          항상 새로운 const 가 되기 때문임.
