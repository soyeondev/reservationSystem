import React, { useEffect } from "react";
import styles from "./buttons.module.css";

const ButtonBlue = (props) => {
  useEffect(() => {});

  const onClick = (e) => {
    props.onClicEvt(e);
  };

  return (
    <>
      <button className={styles.button__blue} onClick={onClick}>
        <span className={styles.button__blue__text}>{props.text}</span>
      </button>
    </>
  );
};

export default ButtonBlue;
