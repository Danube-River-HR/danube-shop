import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import 'semantic-ui-css/semantic.min.css';
import "./styles.css";
import store from "./redux/store";
import { Provider } from "react-redux";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);
