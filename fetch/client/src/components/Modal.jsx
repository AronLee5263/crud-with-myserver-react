import classes from "./Modal.module.css";

export default function Modal() {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog className={classes.modal}></dialog>
    </>
  );
}
