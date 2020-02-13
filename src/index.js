import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/1" />}
        />
        <Route path="/:id" children={<App />} />
      </Switch>
    </Router>
  </Provider>,
  mountNode
);
