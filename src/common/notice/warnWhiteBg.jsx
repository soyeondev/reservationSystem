import React from "react";
import styles from "./notice.module.css";
import info from "../../images/ic_info.png";

const WarnWhiteBg = (props) => (
  <>
    <div className={styles.warn__box__white__bg}>
      <img className={styles.info__white__bg} src={info} alt="back-button" />
      <span className={styles.warn__text__white__bg}>{props.content}</span>
    </div>
  </>
);

export default WarnWhiteBg;
