import classes from "./ProfilePopup.module.css";

import { Link } from "react-router-dom";

import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsSun, BsBookmark } from "react-icons/bs";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { RiFileListLine } from "react-icons/ri";

// import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export default function ProfilePopup({}) {
  return (
    <>
      <div className={classes.backdrop}>
        <div className={classes.profilePopup}>
          <div className={classes.sections}>
            <div className={classes.headerSection}>
              <h1 className={classes.mainTitle}>지금 disk doctor에 가입하세요 </h1>
              <p className={classes.subTitle}>disk doctor를 설치하고 모든 기능을 이용해보세요</p>
            </div>
            <div className={classes.authSection}>
              <Link to="/sign_up" className={classes.sign_up}>
                <span className={classes.sign_up_text}>계정 만들기</span>
              </Link>
              <Link to="/login" className={classes.login}>
                <span className={classes.login_text}>로그인</span>
              </Link>
            </div>

            <div className={classes.categorySection}>
              <div>
                <CgProfile size={24} className={classes.icon} />
                <span>프로필</span>
              </div>
              <div>
                <HiOutlineChatAlt2 size={24} className={classes.icon} />
                <span>커뮤니티</span>
              </div>
              <div>
                <BsBookmark size={24} className={classes.icon} />
                <span>북마크</span>
              </div>
              <div>
                <RiFileListLine size={24} className={classes.icon} />
                <span>리스트</span>
              </div>
            </div>

            <div className={classes.settingSection}>
              <span>설정 및 지원</span>
              <span className={classes.cancelIcon}>
                <RiArrowDownSLine size={30} />
              </span>
            </div>
            <div className={classes.screenTheme}>
              <button type="button" className={classes.screenTheme_button}>
                <BsSun size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
