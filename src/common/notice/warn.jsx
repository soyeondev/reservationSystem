import React from "react";
import styles from "./notice.module.css";
import info from "../../images/ic_info.png";

const Warn = (props) => (
  <>
    <div className={styles.warn__box}>
      <img className={styles.info} src={info} alt="back-button" />
      <span className={styles.warn__text}>{props.content}</span>
    </div>
  </>
);

export default Warn;
