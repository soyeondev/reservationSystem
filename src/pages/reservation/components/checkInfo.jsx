import React from "react";
import styles from "./reservation.components.module.css";
import Span14Normal from "../../../common/util/span/span14Normal";
import checkImg from "../../../images/reservation/checkImg.png";

const CheckInfo = (props) => {
  return (
    <div className={styles.check__info__area}>
      <div>
        <img
          src={checkImg}
          className={styles.check__info__img}
          alt="checkImg"
        />
      </div>
      <Span14Normal text={props.text} />
    </div>
  );
};

export default CheckInfo;
