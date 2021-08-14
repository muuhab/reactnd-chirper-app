import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import logger from "redux-logger";
import thunk  from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
