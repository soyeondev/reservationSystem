import React from "react";
import classNames from "classnames";

import styles from "./span.module.css";
import commonstyles from "../../../common.module.css";

const Span28Bold = (props) => {
  return (
    <>
      <div
        className={classNames(
          styles.span__28__bold__area,
          styles.span__28__bold__area__mg
        )}
      >
        <span className={commonstyles.fc__blue}>{props.blueText}</span>
        <span className={commonstyles.fc__black}>{props.blackText}</span>
      </div>
    </>
  );
};

export default Span28Bold;
