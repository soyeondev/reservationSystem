import React, { useState, useEffect } from "react";
import styles from "./medical_history.module.css";
import { useLocation } from "react-router";
import Header from "components/header/header";
import ReservationStatus from "./component/reservationStatus";

const ReservationComplateDetail = (props) => {
  const location = useLocation();
  const reservationInfo = location.state.reservationInfo;
  const files = location.state.files;
  const titleTypeDoc = {
    firstTitle: "유형",
    secondTitle: "일시",
  };

  const onClick = async () => {
    const entry = {
      reason: "",
      reservationkey: reservationInfo.idx,
      status: "29",
    };
    const updateResponse = await props.getMedicalHistoryData.updateReservation(
      entry
    );
  };

  return (
    <section>
      {/* <Header title="예약 내역 상세" /> */}
      <ReservationStatus
        reservationType="예약완료"
        reservationInfo={reservationInfo}
      />
      <button className={styles.cancel__button} onClick={onClick}>
        예약 취소하기
      </button>
      <div className={styles.seperation__bar}></div>
    </section>
  );
};

export default ReservationComplateDetail;
