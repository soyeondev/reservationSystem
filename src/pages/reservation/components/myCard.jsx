import React from "react";
import styles from "./reservation.module.css";
import Header from "../../components/header/header";
import CardArea from "./components/cardArea";

const MyCard = (props) => (
  <section className={styles.mycard__area}>
    <Header title="내 카드" />
    <CardArea />
    <button className={styles.mycard__btn__area}>
      <span>+ 카드 등록하기</span>
    </button>
    <div className={styles.card__info__box}>
      <span className={styles.card__info__text}>
        아래의 신용(체크)카드만 등록 가능합니다.
        <br />
        KB국민, 롯데, 신한, 현대, 삼성, NH농협, 카카오 뱅크
      </span>
    </div>
  </section>
);

export default MyCard;
