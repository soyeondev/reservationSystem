import React from "react";
import styles from "./span.module.css";

const PageTitle = (props) => (
  <div className={styles.pagetitle}>
    <span>{props.title}</span>
  </div>
);

export default PageTitle;
