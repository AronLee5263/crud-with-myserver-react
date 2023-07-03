import classes from "./ProfilePopup.module.css";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsSun, BsBookmark } from "react-icons/bs";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { RiFileListLine } from "react-icons/ri";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import RootLayOutSignUp from "../routes/auth/signUp/RootLayOutSignUp";
import RootLayOutLogin from "../routes/auth/login/RootLayOutLogin";

import { useLogout } from "../hookss/useLogout";
// import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export default function ProfilePopup({ onCloseProfilePopup }) {
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);

  const { logout } = useLogout();

  let navigate = useNavigate();

  useEffect(() => {
    // signUp 가 true일떄만 실행되게 바로 리턴하는 패턴
    if (signUp === false) return;

    if (signUp) {
      navigate("/sign_up", {
        state: {
          what: "signUp",
          text: "회원가입을 전달했음.. 프로필 팝업에서",
        },
      });
      // setSignUp(false);
    }
  }, [signUp]);

  useEffect(() => {
    // login 가 true일떄만 실행되게 바로 리턴하는 패턴
    if (login === false) return;

    if (login) {
      navigate("/login", {
        state: {
          what: "login",
          text: "로그인을 전달했음 프로필 팝업에서",
        },
      });
      // setLogin(false);
    }
  }, [login]);

  return (
    <>
      {/* {signUp && <RootLayOutSignUp />}
      {login && <RootLayOutLogin />} */}

      <>
        <div className={classes.backdrop} onClick={onCloseProfilePopup} />
        <div className={classes.profilePopup}>
          <div className={classes.sections}>
            <div className={classes.headerSection}>
              <span className={classes.cancelIcon} onClick={onCloseProfilePopup}>
                <MdOutlineArrowBackIosNew size={20} />
              </span>
              <p className={classes.mainTitle}>
                지금 <span className={classes.diskDoctor}>disc doctor</span>에 가입하세요
              </p>

              <p className={classes.subTitle}>disk doctor를 설치하고 모든 기능을 이용해보세요</p>
            </div>

            <div className={classes.authSection}>
              <button
                className={classes.sign_up}
                onClick={(e) => {
                  e.preventDefault();
                  setSignUp(true);
                }}
              >
                <span className={classes.sign_up_text}>계정 만들기</span>
              </button>

              <button
                className={classes.login}
                onClick={(e) => {
                  e.preventDefault();
                  setLogin(true);
                }}
              >
                <span className={classes.login_text}>로그인</span>
              </button>
            </div>

            <ul className={classes.categorySection}>
              <li>
                <CgProfile size={24} className={classes.icon} />
                <span>프로필</span>
              </li>
              <li>
                <HiOutlineChatAlt2 size={24} className={classes.icon} />
                <span>커뮤니티</span>
              </li>
              <li>
                <BsBookmark size={24} className={classes.icon} />
                <span>북마크</span>
              </li>
              <li>
                <RiFileListLine size={24} className={classes.icon} />
                <span>리스트</span>
              </li>
            </ul>

            <div className={classes.settingSection}>
              <span>설정 및 지원</span>
              <span className={classes.settingIcon}>
                <RiArrowDownSLine size={30} />
              </span>
            </div>
            <div className={classes.screenTheme}>
              <button type="button" className={classes.screenTheme_button}>
                <BsSun size={20} />
              </button>
            </div>

            <div className={classes.logoutSection}>
              <button className={classes.logout} onClick={logout}>
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

// <div>
//                 <CgProfile size={24} className={classes.icon} />
//                 <span>프로필</span>
//               </div>
//               <div>
//                 <HiOutlineChatAlt2 size={24} className={classes.icon} />
//                 <span>커뮤니티</span>
//               </div>
//               <div>
//                 <BsBookmark size={24} className={classes.icon} />
//                 <span>북마크</span>
//               </div>
//               <div>
//                 <RiFileListLine size={24} className={classes.icon} />
//                 <span>리스트</span>
//               </div>
