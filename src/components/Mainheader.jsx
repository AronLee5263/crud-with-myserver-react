import { useState } from "react";
import { Link, Form, useLocation } from "react-router-dom";

import { MdPostAdd, MdMessage } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import classes from "./MainHeader.module.css";

import ProfilePopup from "./ProfilePopup";

function MainHeader() {
  const [profilePopupIsVisible, setProfilePopupIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userEmail = "";

  const location = useLocation();

  if (location.state) {
    console.log("location 정보 : ", location);
    userEmail = location.state.userEmail;
    setIsLoggedIn(true);
  }

  function closeProfilePopupHandler() {
    setProfilePopupIsVisible(false);
  }

  function openProfilePopupHandler() {
    setProfilePopupIsVisible(true);
  }

  return (
    <>
      {profilePopupIsVisible && <ProfilePopup onCloseProfilePopup={closeProfilePopupHandler} />}
      <header className={classes.header}>
        <div className={classes.profile}>
          <button type="button" className={classes.profile_icon} onClick={openProfilePopupHandler}>
            <CgProfile size={30} className={classes.icon} />
          </button>
          {isLoggedIn ? (
            <span className={classes.userEmail}>{userEmail}</span>
          ) : (
            <span className={classes.userEmail}>로그인 안됨</span>
          )}
        </div>

        <div className={classes.category}>
          <h1 className={classes.community}>커뮤니티</h1>
          <h1 className={classes.goal}>달성기록</h1>
          <h1 className={classes.info}>내 정보</h1>
        </div>

        <Form method="post" className={classes.form}>
          <p>
            <Link to="/create_post" className={classes.button}>
              <AiOutlinePlus size={24} className={classes.icon} />
            </Link>
          </p>
        </Form>
      </header>
    </>
  );
}

export default MainHeader;
