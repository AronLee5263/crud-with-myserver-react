import classes from "./MainHeader.module.css";

import { useState } from "react";
import { Link, NavLink, Form } from "react-router-dom";

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

        <nav>
          <ul className={classes.category}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
                커뮤니티
              </NavLink>
            </li>
            <li>
              <NavLink to="/Goal" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                달성기록
              </NavLink>
            </li>
            <li>
              <NavLink to="/MyInfo" className={({ isActive }) => (isActive ? classes.active : undefined)}>
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
          <Link to="/create_post" className={classes.button}>
            <AiOutlinePlus size={24} className={classes.icon} />
          </Link>
        </Form>
      </div>
    </>
  );
}

export default MainHeader;
