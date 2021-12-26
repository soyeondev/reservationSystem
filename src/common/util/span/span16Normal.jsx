import React from "react";
import styles from "./span.module.css";

const Span16Normal = (props) => {
  return (
    <>
      <span className={styles.span__16__normal__area}>{props.text}</span>
    </>
  );
};

export default Span16Normal;
