import classes from "./MainHeader.module.css";

import { useState, useEffect } from "react";
import { Link, NavLink, Form, useLocation, useNavigate } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import ProfilePopup from "./ProfilePopup";
import NewPost from "../routes/pages/NewPost";

import { useAuthContext } from "../store/useAuthContext";

function MainHeader() {
  const [profilePopupIsVisible, setProfilePopupIsVisible] = useState(false);
  const [isClickedNP, setIsClickedNPB] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;
  // const state = location.state;
  const { user, authIsReady } = useAuthContext();

  let nickName = "";
  if (user) {
    nickName = user.email;
  } else {
    nickName = "nick name";
  }

  useEffect(() => {
    // isClicked 가 true일떄만 실행되게 바로 리턴하는 패턴
    if (isClickedNP === false) return;

    setIsClickedNPB(false);
    console.log("must be false after 1 second : ", isClickedNP);

    if (isClickedNP) {
      navigate("/create_post");
      setIsClickedNPB(false);
    }
  }, [isClickedNP]);

  // console.log("currentPath : ", currentPath);

  return (
    <>
      {isClickedNP ? (
        <NewPost />
      ) : (
        <>
          {profilePopupIsVisible && (
            <ProfilePopup
              onCloseProfilePopup={() => {
                setProfilePopupIsVisible(false);
              }}
              nickName={nickName}
            />
          )}

          <div className={classes.headerContainer}>
            <div className={classes.profile}>
              <button
                type="button"
                className={classes.profile_icon}
                onClick={() => {
                  setProfilePopupIsVisible(true);
                }}
              >
                <CgProfile size={30} className={classes.icon} />

                <p className={classes.nickName}>{nickName}</p>
              </button>
            </div>

            <nav>
              <ul className={classes.category}>
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
                    커뮤니티
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/goal" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                    달성기록
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myinfo" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                    내 정보
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/analysis" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                    분석
                  </NavLink>
                </li>
              </ul>
            </nav>

            <Form method="post" className={classes.form}>
              {currentPath === "/" && (
                <button
                  type="button"
                  className={classes.newPostButton}
                  onClick={() => {
                    setIsClickedNPB(true);
                  }}
                >
                  <AiOutlinePlus size={24} className={classes.icon} />
                </button>
              )}
            </Form>
          </div>
        </>
      )}
    </>
  );
}

export default MainHeader;
