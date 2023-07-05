import classes from "./NotLoginHeader.module.css";

import { useState, useEffect } from "react";
import { Link, NavLink, Form, useLocation, useNavigate } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

// import { CheckGoodYes as Check } from "react-basicons";

import NotLoginProfile from "../components/NotLoginProfile";

import { useAuthContext } from "../store/useAuthContext";

export default function NotLoginHeader() {
  const [profilePopupIsVisible, setProfilePopupIsVisible] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      {profilePopupIsVisible && (
        <NotLoginProfile
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
          {/* <Check /> */}
          <div className={classes.serchSub}>
            <i className="bx bx-search"></i>
            <span className={classes.serchText}> 디닥 검색</span>
          </div>
        </div>

        <div className={classes.setting}>
          {/* <SettingsAccountMore /> */}
          <i className="bx bx-cog bx "></i>
          {/* <i class="bx bx-cog bx-spin bx-md"></i> */}
          {/* <i class="bx bx-cog bx-spin "></i> */}
        </div>
      </div>
    </>
  );
}
