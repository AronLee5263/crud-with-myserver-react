import classes from "./MainHeader.module.css";

import { useState } from "react";
import { Link, Form } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import ProfilePopup from "./ProfilePopup";

function MainHeader() {
  const [profilePopupIsVisible, setProfilePopupIsVisible] = useState(false);

  function closeProfilePopupHandler() {
    setProfilePopupIsVisible(false);
  }

  function openProfilePopupHandler() {
    setProfilePopupIsVisible(true);
  }

  return (
    <>
      {profilePopupIsVisible && <ProfilePopup onCloseProfilePopup={closeProfilePopupHandler} />}

      <div className={classes.headerContainer}>
        <div className={classes.profile}>
          <button type="button" className={classes.profile_icon} onClick={openProfilePopupHandler}>
            <CgProfile size={30} className={classes.icon} />
            <p className={classes.nickName}>nick name</p>
          </button>
        </div>

        <div className={classes.category}>
          <p className={classes.community}>커뮤니티</p>
          <p className={classes.goal}>달성기록</p>
          <p className={classes.info}>내 정보</p>
        </div>

        <Form method="post" className={classes.form}>
          <p>
            <Link to="/create_post" className={classes.button}>
              <AiOutlinePlus size={24} className={classes.icon} />
            </Link>
          </p>
        </Form>
      </div>
    </>
  );
}

export default MainHeader;
