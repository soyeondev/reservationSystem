import React from "react";
import styles from "./modal.module.css";

const Modal = (props) => {
  const onClick = () => {
    props.getModalVisible(2);
  };
  return (
    <div className={styles.modal__area}>
      <span className={styles.model__span}>{props.text}</span>
      <button className={styles.modal__button} onClick={onClick}>
        확인
      </button>
    </div>
  );
};

export default Modal;
