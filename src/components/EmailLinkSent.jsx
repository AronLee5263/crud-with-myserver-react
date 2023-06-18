import classes from "./EmailLinkSent.module.css";

export default function EmailLinkSent({ isSendLink }) {
  return (
    <>
      {isSendLink ? (
        <div className={classes.succesPopup}>이메일 링크를 확인해주세요</div>
      ) : (
        <>
          <div className={classes.failPopup}>이메일 링크 보내는데 실패했어요. 다시 시도해주세요</div>
        </>
      )}
    </>
  );
}
