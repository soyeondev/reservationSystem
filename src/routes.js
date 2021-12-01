import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import Symptom from "./pages/page1/symptom";

const Routes = (props) => (
  <div className={styles.app__area}>
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route exact path="/symptom">
          <Symptom
            FileInput={props.FileInput}
            GetDepartmentData={props.GetDepartmentData}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
