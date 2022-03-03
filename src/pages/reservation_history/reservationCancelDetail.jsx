import React, { useState, useEffect } from "react";
import styles from "./medical_history.module.css";
import { useLocation } from "react-router";
import Header from "components/header/header";
import ReservationStatus from "./component/reservationStatus";

const ReservationCancelDetail = (props) => {
  const location = useLocation();
  const reservationInfo = location.state.reservationInfo;
  const titleTypeDoc = {
    firstTitle: "유형",
    secondTitle: "일시",
  };

  return (
    <section>
      {/* <Header title="예약 내역 상세" /> */}
      <ReservationStatus
        reservationType="예약취소"
        reservationInfo={reservationInfo}
      />
      <div className={styles.re__reservation__button__area}>
        <button className={styles.re__reservation__button}>
          다시 예약하기
        </button>
      </div>
      <div className={styles.seperation__bar}></div>
    </section>
  );
};

export default ReservationCancelDetail;
