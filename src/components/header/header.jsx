import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./header.module.css";
import arrow from "../../images/header_arrow.png";
import PageTitle from "../../common/util/span/pageTitle";

const Header = (props) => {
  const history = useHistory();
  return (
    <header className={styles.header}>
      <div className={styles.fb__10}>
        <img
          className={styles.back}
          src={arrow}
          alt="back-button"
          onClick={() => {
            history.goBack();
          }}
        />
      </div>
      <PageTitle className="page-name" title={props.title} />
      <div className={styles.fb__15}></div>
    </header>
  );
};

export default Header;
