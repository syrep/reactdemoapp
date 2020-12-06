import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import allReducers from "./reduxpart/reducers/combinedReducers";
import { Provider } from "react-redux";

const store = createStore(allReducers);
//putting the store outside so when the actual file is needed, we can access it
//also need to combine the reducers, as the store can only connec to "one" at a time

//need to wrap the provider and store around the App early on in index.js, as that's what causes
// everything to initialize, otherwise we get so many errors and nothing works
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
