import React, { useState, useEffect } from "react";
// import styles from "./medical_history.components.module.css";
import { useHistory } from "react-router-dom";

/* data */
import RESERVATION_TYPE from "../data/reservationType";

const HistoryElement = (props) => {
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
