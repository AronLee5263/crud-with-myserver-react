import classes from "./NotLogin.module.css";

import { Outlet, Link } from "react-router-dom";

import NoMobile, { UseIsMobile } from "../../components/NoMobile";

import NotLoginHeader from "../../components/NotLoginHeader";
import BackButton from "../../components/BackButton";

export default function NotLogin() {
  const mobileSize = UseIsMobile();

  let content;

  if (mobileSize === false) {
    content = <NoMobile />;
  }

  // return <>{content}</>;

  return (
    <>
      <div className={classes.wholePage_not_Login}>
        <NotLoginHeader />

        <div className={classes.middle}>
          <div className={classes.title}>나를 위한 트렌드</div>

          <ul className={classes.ull}>
            <li className={classes.liii}>
              <span> 대한민국에서 트렌드 중</span>
              <sapn> api 초과</sapn>
              <sapn> 28,020 조회</sapn>
            </li>
            <li className={classes.liii}>
              <span> 대한민국에서 트렌드 중</span>
              <sapn> 여러분 api 난리</sapn>
              <sapn> 3,981 조회</sapn>
            </li>
            <li className={classes.liii}>
              <span> 대한민국에서 트렌드 중</span>
              <sapn> api 제한</sapn>
              <sapn> 2,220 조회</sapn>
            </li>
            <li className={classes.liii}>
              <span> 테크놀로지, 실시간 트렌드</span>
              <sapn> 최수빈 인스타 </sapn>
              <sapn> 28,000 조회</sapn>
            </li>
            <li className={classes.liii}>
              <span> 대한민국에서 트렌드 중</span>
              <sapn> 멜론새끼</sapn>
              <sapn> 16,020 조회</sapn>
            </li>
            <li className={classes.liii}>
              <span> 대한민국에서 트렌드 중</span>
              <sapn> api 초과</sapn>
              <sapn> 28,000 조회</sapn>
            </li>
          </ul>
          <div className={classes.more}> 더 보기 </div>
        </div>
        <div className={classes.line}></div>

        <div className={classes.bottom}>
          <div className={classes.bottomTitle}> 추천 동영상</div>
          <div className={classes.subTitle}> 나를 위한 인기 트렌드 동영상 확인하기</div>
        </div>

        <div className={classes.auth}>
          {/* <Link to="/sign_up" className={classes.signup}>
            {" "}
            회원가입 하러 가기{" "}
          </Link>
          <Link to="/login" className={classes.login}>
            {" "}
            로그인 하러 가기{" "}
          </Link> */}
        </div>
      </div>
    </>
  );
}
