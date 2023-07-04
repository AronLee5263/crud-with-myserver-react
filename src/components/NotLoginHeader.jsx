import classes from "./MainHeader.module.css";

import { useState, useEffect } from "react";
import { Link, NavLink, Form, useLocation, useNavigate } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
// import { SettingsAccountMore } from "basicons";

import ProfilePopup from "./ProfilePopup";
import NewPost from "../routes/pages/NewPost";

import { useAuthContext } from "../store/useAuthContext";

function NotLoginMainHeader() {
  const [profilePopupIsVisible, setProfilePopupIsVisible] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;
  // const state = location.state;
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      {profilePopupIsVisible && (
        <ProfilePopup
          onCloseProfilePopup={() => {
            setProfilePopupIsVisible(false);
          }}
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

            <p className={classes.nickName}>nick name</p>
          </button>
        </div>

        <div className={classes.serch}>
          <ul className={classes.category}></ul>
        </div>

        <div className={classes.setting}>
          {/* <SettingsAccountMore /> */}
          {/* <i class="bx bx-cog bx-rotate-180"></i> */}
          {/* <i class="bx bx-cog bx-spin bx-md"></i> */}
          <i class="bx bx-cog bx-spin "></i>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
