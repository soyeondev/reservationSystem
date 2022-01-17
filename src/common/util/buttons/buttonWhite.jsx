import React from "react";

import styles from "./buttons.module.css";

const ButtonWhite = (props) => {
  const onClick = (e) => {
    props.onClicEvt(e);
  };
  return (
    <>
      <button className={styles.button__white} onClick={onClick}>
        <span className={styles.button__white__text}>{props.text}</span>
      </button>
    </>
  );
};

export default ButtonWhite;
