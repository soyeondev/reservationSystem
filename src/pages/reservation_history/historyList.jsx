import React from "react";
// import Header from "components/header/header";
import HistoryElement from "./component/historyElement";
import TabArea from "./component/tabArea";

const MedicalHistoryList = (props) => {
  return (
    <>
      {/* <Header title={props.text} /> */}
      <TabArea
        getData={props.getData}
        getMedicalHistoryData={props.getMedicalHistoryData}
      />
    </>
  );
};

export default HistoryList;
