import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// add the imports you need!

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Reducer } from "../src/components/reducers/Reducer";

// link them to your reducer!

//next go to reducer!

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
