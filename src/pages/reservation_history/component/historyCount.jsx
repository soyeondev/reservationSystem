import React from "react";
import styles from "./medical_history.components.module.css";
import commonstyles from "../../../common.module.css";

const HistoryCount = ({ reservationCount }) => {
  return (
    <div className={styles.history__count__area}>
      <span className={styles.history__count__text}>
        총<span className={commonstyles.bold}> {reservationCount}건</span>의
        예약접수 내역이 있습니다.
      </span>
    </div>
  );
};

export default HistoryCount;
