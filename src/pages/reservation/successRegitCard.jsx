import React from "react";
import styles from "./reservation.module.css";
import Span28Bold from "common/util/span/span28Bold";

/* image */
import regitCardImg from "../../images/reservation/regit_card.png";

const blueText = "카드 등록";
const blackText = "이 \n완료되었습니다";

const SuccessRegitCard = (props) => {
  return (
    <>
      <Span28Bold blueText={blueText} blackText={blackText} />
      <div className={styles.registed__card__info__area}>
        <span className={styles.registed__card__info__text}>
          신한 1234 - **** - **** - **17
        </span>
      </div>
      <img src={regitCardImg} alt="card" className={styles.regitCardImg} />
    </>
  );
};

export default SuccessRegitCard;
