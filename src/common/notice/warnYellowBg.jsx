import React from "react";
import styles from "./notice.module.css";
import commonstyles from "../../common.module.css";
import info from "../../images/ic_info.png";
import classNames from "classnames";

const WarnYellowBg = (props) => (
  <>
    <div
      className={classNames(styles.warn__box__ylw__bg, commonstyles.bg__yellow)}
    >
      <div className={styles.info__text__box}>
        <img className={styles.info} src={info} alt="back-button" />
        <span className={styles.warn__text}>{props.content}</span>
      </div>
    </div>
  </>
);

export default WarnYellowBg;
