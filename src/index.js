import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as detailsReducer } from "./reducers/details";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

const rootReducer = combineReducers({
  details: detailsReducer
});
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
