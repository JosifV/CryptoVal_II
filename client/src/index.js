import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const theWholeThing = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(theWholeThing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
