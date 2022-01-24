import React from "react";
import { useHistory } from "react-router-dom";

import ButtonWhite from "common/util/buttons/buttonWhite";

const GoMainButton = (props) => {
  const history = useHistory();
  const onClicEvt = async (e) => {
    history.push(props.href);
  };
  return <ButtonWhite text={props.text} onClicEvt={onClicEvt} />;
};

export default GoMainButton;
