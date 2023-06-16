import { useState } from "react";
import { Link, Form } from "react-router-dom";

import { MdPostAdd, MdMessage } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import classes from "./MainHeader.module.css";

import ProfilePopup from "./ProfilePopup";

function MainHeader() {
  const [profilePopupIsVisible, setProfilePopupIsVisible] = useState(false);

  // function closeProfilePopupHandler() {
  //   setProfilePopupIsVisible(false);
  // }

  function openProfilePopupHandler() {
    setProfilePopupIsVisible(true);
  }

  return (
    <>
      {profilePopupIsVisible && <ProfilePopup />}
      <header className={classes.header}>
        <button type="button" className={classes.profile_icon} onClick={openProfilePopupHandler}>
          <CgProfile size={30} className={classes.icon} />
        </button>

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
