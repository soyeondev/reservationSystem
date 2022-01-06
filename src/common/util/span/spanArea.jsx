import React from "react";
import styles from "./span.module.css";

const SpanArea = (props) => {
  return (
    <section className={styles.span__area}>
      <span className={styles.plain__span}>{props.text}</span>
      {props.imgUseStatus === "1" && (
        <img
          className={styles.arrow__img}
          src=""
          alt=""
        />
      )}
    </section>
  );
};

export default SpanArea;
