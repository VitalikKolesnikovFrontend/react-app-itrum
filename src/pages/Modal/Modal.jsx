import styles from "./Modal.module.scss";
const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.modal];
  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
      {children}
    </div>
  );
};

export default Modal;
