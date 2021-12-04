import React from "react";
import styles from "./reservation.components.module.css";
import card from "../../../images/reservation/card.png";

const CardArea = (props) => {
  return (
    <section className={styles.card__img__area}>
      <div>
        <img className={styles.card__img} src={card} alt="card" />
        <div className={styles.card__text}>등록된 카드가 없습니다.</div>
      </div>
    </section>
  );
};

export default CardArea;
