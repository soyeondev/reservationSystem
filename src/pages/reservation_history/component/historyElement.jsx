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
    <article
      className={styles.medical__history__element__area}
      onClick={onClick}
    >
      <section className={styles.medical__history__info__area}>
        <div>
          <img
            src={medicalHistory}
            className={styles.calendar__img}
            alt="medical_history"
          />
          <span className={styles.medical__history__date}>{date}</span>
          <span className={styles.medical__history__date}>{time}</span>
        </div>
      </section>
      <div className={styles.medical__history__info__area}>        
      </div>
      <div>
        <button
          className={
            type === 1
              ? styles.medical__history__button__waiting
              : type === 2
              ? styles.medical__history__button__complate
              : type === 4
              ? styles.medical__history__button__dignosis__complate
              : type === 9
              ? styles.medical__history__button__cancle
              : styles.medical__history__button__complate
          }
        >
          {props.reservationType}
        </button>
      </div>
    </article>
  );
};

export default HistoryElement;
