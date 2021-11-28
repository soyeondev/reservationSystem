import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import ImageUploader from "./service/imageUploader";

/* official document */
import store from "./app/store";
import { Provider } from "react-redux";

const imageUploader = new ImageUploader();
const FileInput = (props) => {
    return <ImageUploadButton />
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App
      />
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById("root")
);
