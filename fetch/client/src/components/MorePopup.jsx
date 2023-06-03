import classes from "./MorePopup.module.css";

export default function MorePopup({ children, onClosePopup }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClosePopup} />
      <dialog open={true} className={classes.morePopup}>
        {children}
      </dialog>
    </>
  );
}
