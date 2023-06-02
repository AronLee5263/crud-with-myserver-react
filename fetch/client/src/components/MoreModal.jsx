import classes from "./MoreModal.module.css";

export default function MoreModal({ children, onCloseMoreModal }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onCloseMoreModal} />
      <dialog open={true} className={classes.morePopup}>
        {children}
      </dialog>
    </>
  );
}
