import React, { useState, useEffect } from "react";
import styles from "./medical_history.components.module.css";

/* data */
import RESERVATION_IMAGE from "../data/reservationStatusImage";

const ReservationStatus = (props) => {
  const [imgSrc, setImgSrc] = useState("");
  const elementType = props.reservationInfo.type;

  useEffect(() => {
    switch (elementType) {
      case 1:
        setImgSrc(RESERVATION_IMAGE.reservationWait);
        break;
      case 2:
        setImgSrc(RESERVATION_IMAGE.reservationComplate);
        break;
      case 4:
        setImgSrc(RESERVATION_IMAGE.diagnosisComplate);
        break;
      case 9:
        setImgSrc(RESERVATION_IMAGE.reservationCancel);
        break;
      default:
        setImgSrc(RESERVATION_IMAGE.reservationCancel);
        break;
    }
  }, []);

  return (
    <section className={styles.reservation__status__area}>
      <div className={styles.reservation__status__info__area}>
        <span className={styles.reservation__status__info__text1}>
          {props.reservationType}
        </span>
        <span className={styles.reservation__status__info__text2}>
          {props.reservationInfo.regNo}
        </span>
      </div>
      <div className={styles.reservation__status__img__area}>
        <img src={imgSrc} alt="" className={styles.reservation__status__img} />
      </div>
    </section>
  );
};

export default ReservationStatus;
