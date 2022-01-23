import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../../common/util/buttons/button";

import {
  addReservationData,
  addDepartmentData,
} from "../../../counter/reservationSlice";

const NextButton = (props) => {
  const history = useHistory();
  const reservation = useSelector((state) => state.reservation.value);
  const dispatch = useDispatch();
  const [deptDataArr, setDeptDataArr] = useState([]);
  const [deptData, setDeptData] = useState({
    code: "",
    displayName: "",
    status: 0,
  });

  const onClicEvt = async (e) => {
    const getDepartmentList =
      await props.getReservationData.getDepartmentList();

    dispatch(
      addDepartmentData({
        data: getDepartmentList,
      })
    );

    dispatch(
      addReservationData({
        type: props.type,
        value: props.reservationValue,
      })
    );

    history.push(props.href);
  };

  return (
    <>
      <Button text="다음 단계" onClicEvt={onClicEvt} />
    </>
  );
};

export default NextButton;
