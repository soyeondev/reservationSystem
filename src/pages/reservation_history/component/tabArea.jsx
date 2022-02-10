import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import classNames from "classnames";
import styles from "./medical_history.components.module.css";
import MedicalHistoryElement from "./historyElement";
import { addReservationDataList } from "../../../counter/reservationSlice";

/* data */
import RESERVATION_TYPE from "../data/reservationType";
import HistoryCount from "./historyCount";

const TabArea = (props) => {
  const history = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);
  const [reservationData, setReservationData] = useState("");
  const [reservationStatus, setReservationStatus] = useState(1);
  const [reservationCount, setReservationCount] = useState(0);
  const [reservationType, setReservationType] = useState("예약대기");
  const [files, setFiles] = useState();
  const [type, setType] = useState(1);

  let offset = 0;

  const reservationDataList = useSelector(
    (state) => state.reservation.reservationDataList
  );
  const dispatch = useDispatch();

  // 예약대기 default
  useEffect(() => {
    (function () {
      const data = await props.getMedicalHistoryData.getReservationList(
        reservationStatus,
        offset
      );
      setReservationData(data.result.result);
      setReservationCount(data.result.count);
  
      dispatch(
        addReservationDataList({
          type: "DELETE_DATA",
          data: data,
        })
      );
      dispatch(
        addReservationDataList({
          type: "ADD_DATA",
          data: data,
        })
      );
    })();
  }, []);

  // 클릭 시에 리스트
  const tabClickHandler = async (index, tabType) => {
    switch (tabType) {
      case 1:
        setReservationType(RESERVATION_TYPE.reservationWait);
        break;
      case 2:
        setReservationType(RESERVATION_TYPE.reservationComplate);
        break;
      case 4:
        setReservationType(RESERVATION_TYPE.diagnosisComplate);
        break;
      case 9:
        setReservationType(RESERVATION_TYPE.reservationCancle);
        break;
      default:
        setReservationType(RESERVATION_TYPE.reservationWait);
        break;
    }
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={classNames(
            activeIndex === 0 ? styles.is__active : "",
            styles.tab__element
          )}
          onClick={() => tabClickHandler(0, 1)}
          key={0}
        >
          {" "}
          예약대기{" "}
        </li>
      ),
      tabCont: <></>,
    },
    {
      tabTitle: (
        <li
          className={classNames(
            activeIndex === 1 ? styles.is__active : "",
            styles.tab__element
          )}
          onClick={() => tabClickHandler(1, 2)}
          key={1}
        >
          {" "}
          예약완료{" "}
        </li>
      ),
      tabCont: <div> 탭2 내용 </div>,
    },
    {
      tabTitle: (
        <li
          className={classNames(
            activeIndex === 2 ? styles.is__active : "",
            styles.tab__element
          )}
          onClick={() => tabClickHandler(2, 4)}
          key={2}
        >
          {" "}
          진료완료{" "}
        </li>
      ),
      tabCont: <div> 탭3 내용 </div>,
    },
    {
      tabTitle: (
        <li
          className={classNames(
            activeIndex === 3 ? styles.is__active : "",
            styles.tab__element
          )}
          onClick={() => tabClickHandler(3, 9)}
          key={3}
        >
          {" "}
          예약취소{" "}
        </li>
      ),
      tabCont: <div> 탭4 내용 </div>,
    },
  ];

  const filesInfo = (props) => {
    setFiles(props);
    return props;
  };

  return (
    <>
      <div>
        <ul className={styles.tab__area}>
          {tabContArr.map((section, index) => {
            return section.tabTitle;
          })}
        </ul>
        <HistoryCount reservationCount={reservationCount} />
        <div className={styles.medical__history__element__area__flex__column}>
        </div>
        {reservationCount > reservationDataList.length && (
          <button
            className={styles.re__reservation__button}
            onClick={medicalHistoryMore}
          >
            더 보기
          </button>
        )}
      </div>
    </>
  );
};

export default TabArea;
