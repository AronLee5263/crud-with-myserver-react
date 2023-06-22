import classes from "./Post.module.css";

import { useState } from "react";

import { Link } from "react-router-dom";

import { MdMoreHoriz } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoComment } from "react-icons/go";
// import { CiHeart } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";

export default function Post({ id, author, body, onOpenPopup, onDeletePost }) {
  // const [isClickHeart, setIsClickHeart] = useState(false);
  // const isClickHeartHandler = () => {
  //   setIsClickHeart(true);
  // };

  const deleteHandler = () => {
    onDeletePost(id);
  };
  return (
    <>
      <div className={classes.post}>
        <div className={classes.sections}>
          <div className={classes.leftSection}>
            <span className={classes.postProfileIcon}>
              <CgProfile size={25} className={classes.icon} />
            </span>

            {/* <span className={classes.tempText}>여백mmmmmm</span> */}
          </div>

          <div className={classes.rightSection}>
            <div className={classes.contents}>
              <div className={classes.headerContents}>
                <p className={classes.author}>{author}</p>
                <button className={classes.postButton} type="button" onClick={onOpenPopup}>
                  <MdMoreHoriz size={22} />
                </button>
                <button className={classes.deleteButton} type="button" onClick={deleteHandler}>
                  삭제
                </button>
              </div>

              <div className={classes.bodyContents}>
                <div className={classes.bodyText}>{body}</div>
              </div>

              <div className={classes.bottomContents}>
                <li className={classes.comment}>
                  <GoComment size={18} className={classes.icon} />
                  <div className={classes.commentCount}>0개</div>
                </li>

                <li className={classes.like}>
                  {/* <button type="button" className={classes.heartBtn} onClick={isClickHeartHandler}>
                    {isClickHeart ? (
                      <CiHeart size={18} color="red" className={classes.icon} />
                    ) : (
                      <CiHeart size={18} className={classes.icon} />
                    )}
                  </button> */}
                  <AiOutlineHeart size={18} className={classes.icon} />
                  <div className={classes.likeCount}>0개</div>
                </li>
                <li className={classes.three}>
                  <GoComment size={1} className={classes.icon} />
                  <div className={classes.commentCount}></div>
                </li>
                <li className={classes.fore}>
                  <GoComment size={1} className={classes.icon} />
                  <div className={classes.commentCount}></div>
                </li>
                <li className={classes.five}>
                  <GoComment size={1} className={classes.icon} />
                  <div className={classes.commentCount}></div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
