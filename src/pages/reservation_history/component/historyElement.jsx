import React, { useState, useEffect } from "react";
// import styles from "./medical_history.components.module.css";
import { useHistory } from "react-router-dom";

/* data */
import RESERVATION_TYPE from "../data/reservationType";

const HistoryElement = (props) => {
  
  useEffect(() => {
    switch (type) {
      case 1:
        setReservationType(RESERVATION_TYPE.reservationWait);
        break;
      case 2:
        setReservationType(RESERVATION_TYPE.reservationComplate);
        break;
      case 4:
        setReservationType(RESERVATION_TYPE.diagnosisComplate);
        break;
      case 9:
        setReservationType(RESERVATION_TYPE.reservationCancle);
        break;
      default:
        setReservationType(RESERVATION_TYPE.reservationWait);
        break;
    }
  }, [props.reservationType]);
  
  return (
    <section
      className={styles.medical__history__element__area}
      onClick={onClick}
    >
      <div className={styles.medical__history__info__area}>        
      </div>
      <div>
      </div>
    </section>
  );
};

export default HistoryElement;
