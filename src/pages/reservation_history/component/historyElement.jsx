import React, { useState, useEffect } from "react";
// import styles from "./medical_history.components.module.css";
import { useHistory } from "react-router-dom";

/* data */
import RESERVATION_TYPE from "../data/reservationType";

const HistoryElement = (props) => {
  let getInfo;

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

  const onClick = () => {
    goDetailPage();
  }

  const goDetailPage = () => {
    const elementType = getInfo.reservationVO.type;
    const reservation = getInfo.reservationVO;

    switch (elementType) {
      case 1:
        history.push({
          pathname: "/reservationWaitingDetail",
          state: {
            reservationInfo: reservation,
            files: files,
          },
        });
        break;
      case 2:
        history.push({
          pathname: "/reservationComplateDetail",
          state: {
            reservationInfo: reservation,
            files: files,
          },
        });
        break;
      case 4:
        history.push({
          pathname: "/diagnosisComplateDetail",
          state: {
            reservationInfo: reservation,
            files: files,
          },
        });
        break;
      case 9:
        history.push({
          pathname: "/reservationCancleDetail",
          state: {
            reservationInfo: reservation,
            files: files,
          },
        });
        break;
      default:
      break;
    }
  };

  
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
