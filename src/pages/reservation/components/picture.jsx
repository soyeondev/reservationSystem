import React from "react";
import styles from "./reservation.components.module.css";
import deleteImg from "../../../images/reservation/delete.png";

const Picture = (props) => {
  const imgInfos = props.imgInfos;
  const onClick = () => {
    props.getImgInfos(imgInfos);
  };
  if (imgInfos.fileName === "default") {
    return (
      <div className={styles.file__area}>
        <img className={styles.picture} src={imgInfos.fileURL} alt="picture" />
        <span className={styles.name}>{imgInfos.fileName}</span>
      </div>
    );
  } else {
    return (
      <div className={styles.file__area}>
        <img
          className={styles.delete}
          src={deleteImg}
          alt=""
          onClick={onClick}
        />
        <img className={styles.picture} src={imgInfos.base64} alt="picture" />
        <span className={styles.name}>{imgInfos.fileName}</span>
      </div>
    );
  }
};

export default Picture;
