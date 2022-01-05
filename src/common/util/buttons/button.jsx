import React, { useEffect } from "react";
import styles from "./buttons.module.css";

// button style
const Button = (props) => {
  const onClick = (e) => {
    props.onClicEvt(e);
  };
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
